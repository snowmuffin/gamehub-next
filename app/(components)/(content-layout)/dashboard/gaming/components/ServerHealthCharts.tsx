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

export default function ServerHealthCharts({ code }: { code: string }) {
  const [{ from, to }, setRange] = useState(defaultRange(6));
  const [metricName, setMetricName] = useState<string>("latency");
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
      if (status === 404) setError("서버 코드를 찾을 수 없습니다 (404)");
      else setError(e?.message || "데이터 조회 실패");
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

  const latencySeries = useMemo(() => {
    const points = events
      .filter(e => e.metricValue !== null && e.observedAt)
      .map(e => [new Date(e.observedAt).getTime(), e.metricValue as number])
      .sort((a, b) => a[0] - b[0]);
    return [
      {
        name: metricName || (events[0]?.metricName ?? "metric"),
        data: points
      }
    ];
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
    return [{ name: `${snapshots[0]?.metricName ?? metricName} avg`, data: points }];
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
        <div className="card-title">Server Health Charts — {code}</div>
        <div className="d-flex gap-2 align-items-center flex-wrap">
          <Form.Select
            size="sm"
            value={metricName}
            onChange={e => setMetricName(e.target.value)}
            style={{ width: 140 }}
          >
            <option value="">all metrics</option>
            <option value="latency">latency</option>
            <option value="sim_speed">sim_speed</option>
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
            <Spinner size="sm" /> <span>차트 데이터 불러오는 중…</span>
          </div>
        ) : error ? (
          <div className="text-danger">{error}</div>
        ) : (
          <>
            <Row className="g-4">
              <Col xs={12}>
                <div className="mb-2 text-muted">Raw Events — {metricName || "metric"}</div>
                <ReactApexChart
                  options={{ ...commonOptions, yaxis: { labels: { formatter: (v: number) => `${v}` } } }}
                  series={latencySeries as any}
                  type="line"
                  height={260}
                />
              </Col>
              <Col md={6}>
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
              <Col md={6}>
                <div className="mb-2 text-muted">
                  Metric Average {snapshots[0]?.metricUnit ? `(${snapshots[0]?.metricUnit})` : ""}
                </div>
                <ReactApexChart
                  options={{ ...commonOptions }}
                  series={metricAvgSeries as any}
                  type="line"
                  height={220}
                />
              </Col>
            </Row>
          </>
        )}
      </Card.Body>
    </Card>
  );
}
