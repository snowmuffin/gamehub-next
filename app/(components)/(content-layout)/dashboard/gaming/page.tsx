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
  const [serverCode, setServerCode] = useState<string>("na-cluster-1");

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

  return (
    <Fragment>
      <Seo title={"Gaming"} />

      <Row className="g-4">
        <Col xs={12}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between align-items-center">
              <div className="card-title">Game Server Health</div>
              <div className="d-flex align-items-center gap-2">
                <div className="text-muted">Server</div>
                <Form.Control
                  size="sm"
                  style={{ width: 240 }}
                  value={serverCode}
                  onChange={e => setServerCode(e.target.value)}
                  placeholder="server code (e.g. na-cluster-1)"
                />
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-muted">/space-engineers/servers/{serverCode}</div>
              <div className="small text-muted">
                상태/차트 데이터는 백엔드 기본값을 따르며, 잘못된 날짜/파라미터는 서버가 안전하게 처리합니다.
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={4} lg={5} md={6}>
          <ServerHealthStatusCard code={serverCode} />
        </Col>
        <Col xl={8} lg={7} md={6}>
          <ServerHealthCharts code={serverCode} />
        </Col>

        <Col xl={5} lg={6} md={6} sm={12}>
          {error ? (
            <div className="text-danger text-center">{error}</div>
          ) : (
            <PlayerStatisticsCard rankings={rankings} />
          )}
        </Col>
      </Row>
    </Fragment>
  );
};

export default Gaming;
