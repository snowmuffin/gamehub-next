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
};

export default function ServerHealthCharts({
  code,
  onCodeChange,
  serverCodes = [],
  codesLoading = false,
  serverOptions = []
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
    } catch (e: any) {
      const status = e?.response?.status;
      if (status === 404) setError("Server code not found (404)");
      else setError(e?.message || "Failed to load chart data");
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
  const rawEventSeries = useMemo(() => {
    if (!events.length) return [] as any[];
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
    const series = Array.from(byMetric.entries()).map(([name, pts]) => ({
      name,
      data: pts.sort((a, b) => a[0] - b[0])
    }));
    return series;
  }, [events, metricName]);

  const uptimeSeries = useMemo(() => {
    const points = snapshots
      .map(s => [new Date(s.windowStart).getTime(), Math.round((s.uptimeRatio ?? 0) * 10000) / 100])
      .sort((a, b) => a[0] - b[0]);
    return [{ name: "Uptime %", data: points }];
  }, [snapshots]);

  const metricAvgSeries = useMemo(() => {
    const points = snapshots
      .filter(s => s.metricAvg !== null)
      .map(s => [new Date(s.windowStart).getTime(), s.metricAvg as number])
      .sort((a, b) => a[0] - b[0]);
    const nameBase = snapshots.find(s => s.metricName)?.metricName ?? metricName ?? "metric";
    return [{ name: `${nameBase} avg`, data: points }];
  }, [snapshots, metricName]);

  const commonOptions = useMemo(
    () => ({
      chart: { id: "health-chart", animations: { enabled: true } },
      xaxis: { type: "datetime" as const },
      stroke: { width: 2, curve: "smooth" as const },
      dataLabels: { enabled: false },
      grid: { borderColor: "#f2f5f7" },
      tooltip: { x: { format: "yyyy-MM-dd HH:mm" } }
    }),
    []
  );

  const onPreset = (hours: number) => setRange(defaultRange(hours));

  return (
    <Card className="custom-card">
      <div className="top-left"></div>
      <div className="top-right"></div>
      <div className="bottom-left"></div>
      <div className="bottom-right"></div>
      <Card.Header className="justify-content-between">
        <div className="card-title">
          {(() => {
            const label = serverOptions.find(s => s.code === code)?.name || code;
            return `Server Health Charts — ${label}`;
          })()}
        </div>
        <div className="d-flex gap-2 align-items-center flex-wrap">
          <div className="d-flex align-items-center gap-2 me-2">
            <div className="text-muted">Server</div>
            <Form.Select
              size="sm"
              style={{ width: 220 }}
              value={code}
              onChange={e => onCodeChange?.(e.target.value)}
              disabled={codesLoading || serverCodes.length === 0 || !onCodeChange}
            >
              {codesLoading && <option>Loading…</option>}
              {!codesLoading && serverCodes.length === 0 && <option>No servers</option>}
              {!codesLoading &&
                (serverOptions.length > 0 ? serverOptions.map(s => (
                  <option key={s.code} value={s.code}>
                    {s.name || s.code}
                  </option>
                )) : serverCodes.map(c => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                )))}
            </Form.Select>
          </div>
          <Form.Select
            size="sm"
            value={metricName}
            onChange={e => setMetricName(e.target.value)}
            style={{ width: 180 }}
            disabled={availableMetrics.length === 0}
          >
            {availableMetrics.length > 1 && <option value="">all metrics</option>}
            {availableMetrics.length === 0 && <option>No metrics</option>}
            {availableMetrics.map(m => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </Form.Select>
          <Form.Select
            size="sm"
            value={windowSize}
            onChange={e => setWindowSize(e.target.value as any)}
            style={{ width: 100 }}
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
      </Card.Header>
      <Card.Body>
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
                    Raw Events {metricName ? `— ${metricName}` : availableMetrics.length > 1 ? "— all metrics" : ""}
                  </div>
                  <ReactApexChart
                    options={{ ...commonOptions, yaxis: { labels: { formatter: (v: number) => `${v}` } } }}
                    series={rawEventSeries as any}
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
                    series={uptimeSeries as any}
                    type="line"
                    height={220}
                  />
                </Col>
              )}
            </Row>
          </>
        )}
      </Card.Body>
    </Card>
  );
}
