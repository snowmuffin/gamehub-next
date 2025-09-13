"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

import { apiRequest } from "@/shared/api/request";
import Seo from "@/shared/layout-components/seo";

import PlayerStatisticsCard from "./components/PlayerStatisticsCard";
import ServerHealthCharts from "./components/ServerHealthCharts";
import ServerHealthStatusCard from "./components/ServerHealthStatusCard";
import SpaceEngineersCalculator from "./components/SpaceEngineersCalculator";

type Ranking = {
  steam_id: string;
  username: string;
  score: number;
};

const Gaming = () => {
  const [rankings, setRankings] = useState<Ranking[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Space Engineers server codes
  const [serverCodes, setServerCodes] = useState<string[]>([]);
  const [serverCode, setServerCode] = useState<string>("");
  const [serverOptions, setServerOptions] = useState<Array<{ code: string; name?: string }>>([]);
  const [includeInactive, _setIncludeInactive] = useState(false);
  const [codesLoading, setCodesLoading] = useState(false);
  // Measure right column (server) container height to cap rankings height
  const serverColRef = useRef<HTMLDivElement | null>(null);
  const [serverColHeight, setServerColHeight] = useState<number | null>(null);

  useEffect(() => {
    const fetchRankings = async () => {
      try {
        const response = await apiRequest.get<Ranking[]>("/user/rankings");
        setRankings(response.data);
      } catch {
        setError("Failed to load rankings. Please try again later.");
      }
    };

    fetchRankings();
  }, []);

  // Fetch server codes list
  useEffect(() => {
    const fetchServerCodes = async () => {
      setCodesLoading(true);
      try {
        const res = await apiRequest.get<{
          codes?: string[];
          servers?: Array<{ code: string; name?: string }>;
        }>("/space-engineers/servers", {
          includeInactive: includeInactive ? "true" : "false",
          withNames: "true"
        });
        const codes = (res.data?.codes || []) as string[];
        const servers = (res.data?.servers || []) as Array<{ code: string; name?: string }>;
        setServerCodes(codes);
        setServerOptions(
          servers && servers.length > 0 ? servers : codes.map((code) => ({ code, name: code }))
        );
        // Initialize or validate selected code
        if (!serverCode || !codes.includes(serverCode)) {
          setServerCode(codes[0] || "");
        }
      } catch {
        setServerCodes([]);
        setServerOptions([]);
        // Keep existing selection if any; otherwise blank
        if (!serverCode) setServerCode("");
      } finally {
        setCodesLoading(false);
      }
    };

    fetchServerCodes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [includeInactive]);

  // Observe right column height changes and update cap for rankings
  useEffect(() => {
    const el = serverColRef.current;
    if (!el || typeof window === "undefined") return;

    const update = () => {
      const h = el.getBoundingClientRect().height;
      if (Number.isFinite(h) && h > 0) setServerColHeight(h);
    };

    update();

    let ro: ResizeObserver | null = null;
    if ("ResizeObserver" in window) {
      ro = new ResizeObserver(() => update());
      ro.observe(el);
    }
    const onResize = () => update();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (ro) ro.disconnect();
    };
  }, [serverCode]);

  return (
    <Fragment>
      <Seo title={"Gaming"} />

      <Row className="g-4 equal-card-row">
        <Col xl={5} lg={6} md={6} sm={12}>
          {error ? (
            <div className="text-danger text-center">{error}</div>
          ) : (
            <div
              style={{
                display: "flex",
                height: "100%",
                maxHeight: serverColHeight ? `${serverColHeight}px` : undefined,
                minHeight: 0,
                width: "100%"
              }}
            >
              <PlayerStatisticsCard rankings={rankings} />
            </div>
          )}
        </Col>
        <Col xl={7} lg={6} md={6} sm={12}>
          {serverCode ? (
            <div ref={serverColRef} className="h-100" style={{ height: "100%" }}>
              <Card className="custom-card h-100">
                <div className="top-left"></div>
                <div className="top-right"></div>
                <div className="bottom-left"></div>
                <div className="bottom-right"></div>
                <Card.Header className="justify-content-between">
                  <div className="card-title">
                    {(() => {
                      const label =
                        serverOptions.find((s) => s.code === serverCode)?.name || serverCode;
                      return `Server Health — ${label}`;
                    })()}
                  </div>
                </Card.Header>
                <Card.Body>
                  <ServerHealthStatusCard
                    embedded
                    code={serverCode}
                    displayName={
                      serverOptions.find((s) => s.code === serverCode)?.name || serverCode
                    }
                  />
                  <ServerHealthCharts
                    embedded
                    code={serverCode}
                    onCodeChange={setServerCode}
                    serverCodes={serverCodes}
                    serverOptions={serverOptions}
                    codesLoading={codesLoading}
                  />
                </Card.Body>
              </Card>
            </div>
          ) : (
            <Card className="custom-card">
              <Card.Body>
                <div className="text-muted">Select a server to view status and charts.</div>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>

      <Row className="g-4 mt-1 equal-card-row">
        <Col xs={12}>
          <SpaceEngineersCalculator />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Gaming;
