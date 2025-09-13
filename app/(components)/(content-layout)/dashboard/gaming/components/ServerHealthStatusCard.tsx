"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Badge, Card, Spinner } from "react-bootstrap";
import { apiRequest } from "@/shared/api/request";

type HealthStatus = "UP" | "DOWN" | "DEGRADED" | "UNKNOWN";
type Method = "http" | "tcp";

type StatusResponse = {
  status: HealthStatus;
  observedAt?: string;
  metricName: string | null;
  metricValue: number | null;
  metricUnit: string | null;
  method?: Method;
  httpStatus: number | null;
  outageOpen: boolean;
  uptime1h: number | null;
};

const statusColor: Record<HealthStatus, string> = {
  UP: "success",
  DOWN: "danger",
  DEGRADED: "warning",
  UNKNOWN: "secondary"
};

function formatDate(iso?: string) {
  if (!iso) return "-";
  try {
    const d = new Date(iso);
    return d.toLocaleString();
  } catch {
    return iso;
  }
}

function percent(v?: number | null) {
  if (v === null || v === undefined) return "-";
  return `${(v * 100).toFixed(2)}%`;
}

// Current status summary card for a Space Engineers server
export default function ServerHealthStatusCard({
  code,
  displayName,
  refreshMs = 30000,
  embedded = false
}: {
  code: string;
  displayName?: string;
  refreshMs?: number;
  embedded?: boolean;
}) {
  const [data, setData] = useState<StatusResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const title = useMemo(() => `Server Status — ${displayName || code}`, [code, displayName]);

  const fetchStatus = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await apiRequest.get(
        `/space-engineers/servers/${encodeURIComponent(code)}/health/status`
      );
      setData(res.data as StatusResponse);
    } catch (e: any) {
      const status = e?.response?.status;
      if (status === 404) setError("Server code not found (404)");
      else setError(e?.message || "Failed to fetch status");
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
    const id = setInterval(fetchStatus, refreshMs);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, refreshMs]);

  const status = data?.status ?? "UNKNOWN";
  const badgeVariant = statusColor[status];

  const content = (
    <>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div className="fw-semibold">{title}</div>
        <Badge bg={badgeVariant}>{status}</Badge>
      </div>
      {loading ? (
        <div className="d-flex align-items-center gap-2">
          <Spinner size="sm" /> <span>Loading…</span>
        </div>
      ) : error ? (
        <div className="text-danger">{error}</div>
      ) : (
        <div className="row g-3">
          <div className="col-6 col-md-3">
            <div className="text-muted">Last Observed</div>
            <div className="fw-semibold">{formatDate(data?.observedAt)}</div>
          </div>
          <div className="col-6 col-md-3">
            <div className="text-muted">Metric</div>
            <div className="fw-semibold">
              {data?.metricName ?? "-"}
              {data?.metricValue !== null && data?.metricValue !== undefined
                ? `: ${data.metricValue}`
                : ""}
              {data?.metricUnit ? ` ${data.metricUnit}` : ""}
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="text-muted">HTTP</div>
            <div className="fw-semibold">{data?.httpStatus ?? "-"}</div>
          </div>
          <div className="col-6 col-md-3">
            <div className="text-muted">Method</div>
            <div className="fw-semibold">{data?.method ?? "-"}</div>
          </div>
          <div className="col-6 col-md-3">
            <div className="text-muted">Outage</div>
            <div className="fw-semibold">{data?.outageOpen ? "OPEN" : "CLOSED"}</div>
          </div>
          <div className="col-6 col-md-3">
            <div className="text-muted">Uptime (1h)</div>
            <div className="fw-semibold">{percent(data?.uptime1h)}</div>
          </div>
        </div>
      )}
    </>
  );

  if (embedded) return <div className="mb-3">{content}</div>;

  return (
    <Card className="custom-card h-100">
      <div className="top-left"></div>
      <div className="top-right"></div>
      <div className="bottom-left"></div>
      <div className="bottom-right"></div>
      <Card.Header className="justify-content-between align-items-center">
        <div className="card-title">{title}</div>
        <Badge bg={badgeVariant}>{status}</Badge>
      </Card.Header>
      <Card.Body>{content}</Card.Body>
    </Card>
  );
}
