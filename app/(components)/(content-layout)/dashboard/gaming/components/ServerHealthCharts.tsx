"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useMemo, useState } from "react";
import { Card, Col, Form, Row, Spinner } from "react-bootstrap";

import { apiRequest } from "@/shared/api/request";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

type HealthStatus = "UP" | "DOWN" | "DEGRADED" | "UNKNOWN";

type EventItem = {
  observedAt: string;
  status: HealthStatus;
  method: "http" | "tcp";
  metricName: string | null;
  metricValue: number | null;
  metricUnit: string | null;
  httpStatus: number | null;
  detail: string | null;
};

type SnapshotItem = {
  windowStart: string;
  windowSize: "1m" | "5m" | "1h";
  checksTotal: number;
  checksUp: number;
  uptimeRatio: number;
  metricAvg: number | null;
  metricP50: number | null;
  metricP95: number | null;
  metricName: string | null;
  metricUnit: string | null;
  lastStatus: HealthStatus | null;
  lastChangeAt: string | null;
};

function toISO(date: Date) {
  return date.toISOString();
}

function defaultRange(hours = 1) {
  const to = new Date();
  const from = new Date(to.getTime() - hours * 60 * 60 * 1000);
  return { from: toISO(from), to: toISO(to) };
}

type ServerHealthChartsProps = {
  code: string;
  onCodeChange?: (code: string) => void;
  serverCodes?: string[];
  codesLoading?: boolean;
  serverOptions?: Array<{ code: string; name?: string }>;
  embedded?: boolean;
};

type ChartXYSeries = Array<{ name: string; data: Array<[number, number]> }>;

export default function ServerHealthCharts({
  code,
  onCodeChange,
  serverCodes = [],
  codesLoading = false,
  serverOptions = [],
  embedded = false
}: ServerHealthChartsProps) {
  const [{ from, to }, setRange] = useState(defaultRange(6));
  const [metricName, setMetricName] = useState<string>("");
  const [windowSize, setWindowSize] = useState<"1m" | "5m" | "1h">("1m");
  const [events, setEvents] = useState<EventItem[]>([]);
  const [snapshots, setSnapshots] = useState<SnapshotItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAll = async () => {
    setLoading(true);
    setError(null);
    try {
      const [evRes, snRes] = await Promise.all([
        apiRequest.get(`/space-engineers/servers/${encodeURIComponent(code)}/health/events`, {
          from,
          to,
          metricName: metricName || undefined,
          order: "asc",
          limit: 2000
        }),
        apiRequest.get(`/space-engineers/servers/${encodeURIComponent(code)}/health/snapshots`, {
          from,
          to,
          window: windowSize
        })
      ]);
      setEvents(evRes.data as EventItem[]);
      setSnapshots(snRes.data as SnapshotItem[]);
    } catch (e) {
      const status = (e as any)?.response?.status;
      if (status === 404) setError("Server code not found (404)");
      else setError((e as Error)?.message || "Failed to load chart data");
      setEvents([]);
      setSnapshots([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, from, to, metricName, windowSize]);

  // Derive available metric names from returned data (events + snapshots)
  const availableMetrics = useMemo(() => {
    const set = new Set<string>();
    for (const e of events) if (e.metricName) set.add(e.metricName);
    for (const s of snapshots) if (s.metricName) set.add(s.metricName);
    return Array.from(set).sort();
  }, [events, snapshots]);

  // Ensure selected metric exists; if not, auto-select first available
  useEffect(() => {
    if (metricName && availableMetrics.length > 0 && !availableMetrics.includes(metricName)) {
      setMetricName(availableMetrics[0]);
    }
  }, [availableMetrics, metricName]);

  // If exactly one metric is available and nothing selected, select it for better UX
  useEffect(() => {
    if (!metricName && availableMetrics.length === 1) {
      setMetricName(availableMetrics[0]);
    }
  }, [availableMetrics, metricName]);

  // Build raw events series: if a metric is selected, show that only; otherwise, group by available metrics
  const rawEventSeries: ChartXYSeries = useMemo(() => {
    if (!events.length) return [] as ChartXYSeries;
    const byMetric = new Map<string, Array<[number, number]>>();

    const addPoint = (name: string, at: string, value: number) => {
      const arr = byMetric.get(name) || [];
      arr.push([new Date(at).getTime(), value]);
      byMetric.set(name, arr);
    };

    for (const e of events) {
      if (e.metricValue === null || !e.observedAt) continue;
      const name = e.metricName || "metric";
      if (metricName && name !== metricName) continue; // filter when a metric is chosen
      addPoint(name, e.observedAt, e.metricValue);
    }

    // Sort each series by time and emit
    const series: ChartXYSeries = Array.from(byMetric.entries()).map(([name, pts]) => ({
      name,
      data: pts.sort((a, b) => a[0] - b[0])
    }));
    return series;
  }, [events, metricName]);

  const uptimeSeries: ChartXYSeries = useMemo(() => {
    const points: Array<[number, number]> = snapshots
      .map(
        (s) =>
          [new Date(s.windowStart).getTime(), Math.round((s.uptimeRatio ?? 0) * 10000) / 100] as [
            number,
            number
          ]
      )
      .sort((a, b) => a[0] - b[0]);
    return [{ name: "Uptime %", data: points }];
  }, [snapshots]);

  const metricAvgSeries = useMemo(() => {
    const points = snapshots
      .filter((s) => s.metricAvg !== null)
      .map((s) => [new Date(s.windowStart).getTime(), s.metricAvg as number])
      .sort((a, b) => a[0] - b[0]);
    const nameBase = snapshots.find((s) => s.metricName)?.metricName ?? metricName ?? "metric";
    return [{ name: `${nameBase} avg`, data: points }];
  }, [snapshots, metricName]);

  const commonOptions = useMemo(
    () => ({
      chart: { id: "health-chart", animations: { enabled: true } },
      xaxis: { type: "datetime" as const, labels: { datetimeUTC: false } },
      stroke: { width: 2, curve: "smooth" as const },
      dataLabels: { enabled: false },
      grid: { borderColor: "#f2f5f7" },
      tooltip: {
        x: {
          format: "yyyy-MM-dd HH:mm",
          formatter: (val: number) => new Date(val).toLocaleString()
        }
      }
    }),
    []
  );

  const onPreset = (hours: number) => setRange(defaultRange(hours));

  const header = (
    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
      <div className="card-title m-0">
        {(() => {
          const label = serverOptions.find((s) => s.code === code)?.name || code;
          return `Server Health Charts — ${label}`;
        })()}
      </div>
      <div className="d-flex gap-2 align-items-center flex-wrap w-100">
        <div className="d-flex align-items-center gap-2 me-2">
          <div className="text-muted">Server</div>
          <Form.Select
            size="sm"
            style={{ width: "min(220px, 100%)" }}
            value={code}
            onChange={(e) => onCodeChange?.(e.target.value)}
            disabled={codesLoading || serverCodes.length === 0 || !onCodeChange}
          >
            {codesLoading && <option>Loading…</option>}
            {!codesLoading && serverCodes.length === 0 && <option>No servers</option>}
            {!codesLoading &&
              (serverOptions.length > 0
                ? serverOptions.map((s) => (
                    <option key={s.code} value={s.code}>
                      {s.name || s.code}
                    </option>
                  ))
                : serverCodes.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  )))}
          </Form.Select>
        </div>
        <Form.Select
          size="sm"
          value={metricName}
          onChange={(e) => setMetricName(e.target.value)}
          style={{ width: "min(180px, 100%)" }}
          disabled={availableMetrics.length === 0}
        >
          {availableMetrics.length > 1 && <option value="">all metrics</option>}
          {availableMetrics.length === 0 && <option>No metrics</option>}
          {availableMetrics.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </Form.Select>
        <Form.Select
          size="sm"
          value={windowSize}
          onChange={(e) => setWindowSize(e.target.value as "1m" | "5m" | "1h")}
          style={{ width: "min(100px, 100%)" }}
        >
          <option value="1m">1m</option>
          <option value="5m">5m</option>
          <option value="1h">1h</option>
        </Form.Select>
        <div className="btn-group">
          <button className="btn btn-sm btn-outline-primary" onClick={() => onPreset(1)}>
            1h
          </button>
          <button className="btn btn-sm btn-outline-primary" onClick={() => onPreset(6)}>
            6h
          </button>
          <button className="btn btn-sm btn-outline-primary" onClick={() => onPreset(24)}>
            24h
          </button>
        </div>
      </div>
    </div>
  );

  const body = (
    <div>
      {loading ? (
        <div className="d-flex align-items-center gap-2">
          <Spinner size="sm" /> <span>Loading chart data…</span>
        </div>
      ) : error ? (
        <div className="text-danger">{error}</div>
      ) : (
        <>
          <Row className="g-4">
            {rawEventSeries.length > 0 && (
              <Col xs={12}>
                <div className="mb-2 text-muted">
                  Raw Events{" "}
                  {metricName
                    ? `— ${metricName}`
                    : availableMetrics.length > 1
                      ? "— all metrics"
                      : ""}
                </div>
                <ReactApexChart
                  options={{
                    ...commonOptions,
                    yaxis: { labels: { formatter: (v: number) => `${v}` } }
                  }}
                  series={rawEventSeries}
                  type="line"
                  height={260}
                />
              </Col>
            )}

            {snapshots.length > 0 && (
              <Col>
                <div className="mb-2 text-muted">Uptime Ratio (%)</div>
                <ReactApexChart
                  options={{
                    ...commonOptions,
                    yaxis: { max: 100, min: 0, labels: { formatter: (v: number) => `${v}%` } }
                  }}
                  series={uptimeSeries}
                  type="line"
                  height={220}
                />
              </Col>
            )}
          </Row>
        </>
      )}
    </div>
  );

  if (embedded)
    return (
      <div className="mt-2">
        {header}
        {body}
      </div>
    );

  return (
    <Card className="custom-card">
      <div className="top-left"></div>
      <div className="top-right"></div>
      <div className="bottom-left"></div>
      <div className="bottom-right"></div>
      <Card.Header className="justify-content-between">{header}</Card.Header>
      <Card.Body>{body}</Card.Body>
    </Card>
  );
}
