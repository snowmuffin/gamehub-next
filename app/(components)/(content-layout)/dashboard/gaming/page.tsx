"use client";
import {
  Civilianpopulation,
  Civilianpopulationsupport,
  Completedissues,
  DangerZone,
  Energyblock,
  NewEvent,
  PendingEvents,
  Player1,
  Player2,
  Player3,
  Player4,
  Player5,
  SafeZone,
  Skillachieved,
  TimeSpent,
  UnsolvedEvents,
  Usersreport
} from "@/shared/data/dashboard/gamingdata";
const WorldMapCom = dynamic(() => import("@/shared/data/dashboard/mapdata"), { ssr: false });
import Seo from "@/shared/layout-components/seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Badge, Card, Col, Dropdown, Form, ProgressBar, Row } from "react-bootstrap";
import { apiRequest } from "@/shared/api/request";
import CompletedEventsCard from "./components/CompletedEventsCard";
import PendingEventsCard from "./components/PendingEventsCard";
import UnresolvedEventsCard from "./components/UnresolvedEventsCard";
import NewEventsCard from "./components/NewEventsCard";
import AirSupportCard from "./components/AirSupportCard";
import TotalTimeSpentCard from "./components/TotalTimeSpentCard";
import DropdownMenu from "./components/DropdownMenu";
import DistanceCoveredCard from "./components/DistanceCoveredCard";
import PlayerStatisticsCard from "./components/PlayerStatisticsCard";
import TopCountriesCard from "./components/TopCountriesCard";
import ServerHealthStatusCard from "./components/ServerHealthStatusCard";
import ServerHealthCharts from "./components/ServerHealthCharts";

type Ranking = any;

const Gaming = () => {
  const [rankings, setRankings] = useState<Ranking[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Space Engineers server codes
  const [serverCodes, setServerCodes] = useState<string[]>([]);
  const [serverCode, setServerCode] = useState<string>("");
  const [serverOptions, setServerOptions] = useState<Array<{ code: string; name?: string }>>([]);
  const [includeInactive, setIncludeInactive] = useState(false);
  const [codesLoading, setCodesLoading] = useState(false);
  const [codesError, setCodesError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRankings = async () => {
      try {
        const response = await apiRequest.get("/user/rankings");
        setRankings(response.data as Ranking[]);
      } catch (error) {
        setError("Failed to load rankings. Please try again later.");
      }
    };

    fetchRankings();
  }, []);

  // Fetch server codes list
  useEffect(() => {
    const fetchServerCodes = async () => {
      setCodesLoading(true);
      setCodesError(null);
      try {
        const res = await apiRequest.get("/space-engineers/servers", {
          includeInactive: includeInactive ? "true" : "false",
          withNames: "true"
        });
        const codes = (res.data?.codes || []) as string[];
        const servers = (res.data?.servers || []) as Array<{ code: string; name?: string }>;
        setServerCodes(codes);
        setServerOptions(
          servers && servers.length > 0
            ? servers
            : codes.map(code => ({ code, name: code }))
        );
        // Initialize or validate selected code
        if (!serverCode || !codes.includes(serverCode)) {
          setServerCode(codes[0] || "");
        }
      } catch (e: any) {
        setCodesError(e?.message || "Failed to load server codes");
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

  return (
    <Fragment>
      <Seo title={"Gaming"} />

      <Row className="g-4">
        <Col xl={5} lg={6} md={6} sm={12}>
          {error ? (
            <div className="text-danger text-center">{error}</div>
          ) : (
            <PlayerStatisticsCard rankings={rankings} />
          )}
        </Col>
        <Col xl={5} lg={6} md={6} sm={12}>
          {serverCode ? (
            <>
              <Col xs={12}>
                <ServerHealthStatusCard
                  code={serverCode}
                  displayName={serverOptions.find(s => s.code === serverCode)?.name || serverCode}
                />
              </Col>
              <Col xs={12}>
                <ServerHealthCharts
                  code={serverCode}
                  onCodeChange={setServerCode}
                  serverCodes={serverCodes}
                  serverOptions={serverOptions}
                  codesLoading={codesLoading}
                />
              </Col>
            </>
          ) : (
            <Col xs={12}>
              <Card className="custom-card">
                <Card.Body>
                  <div className="text-muted">Select a server to view status and charts.</div>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Col>
      </Row>
    </Fragment>
  );
};

export default Gaming;
