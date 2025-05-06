"use client";
import { Civilianpopulation, Civilianpopulationsupport, Completedissues, DangerZone, Energyblock, NewEvent, PendingEvents, Player1, Player2, Player3, Player4, Player5, SafeZone, Skillachieved, TimeSpent, UnsolvedEvents, Usersreport } from "@/shared/data/dashboard/gamingdata";
const WorldMapCom = dynamic(() => import('@/shared/data/dashboard/mapdata'), { ssr: false });
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Badge, Card, Col, Dropdown, ProgressBar, Row } from "react-bootstrap";
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

const Gaming = () => {
    const [rankings, setRankings] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRankings = async () => {
            try {
                const response = await apiRequest.get('/user/rankings');
                setRankings(response.data);
            } catch (error) {
                console.error("Failed to fetch rankings:", error);
                setError("Failed to load rankings. Please try again later.");
            }
        };

        fetchRankings();
    }, []);

    return (
        <Fragment>
            <Seo title={"Gaming"} />

            <Row>
                <Col xl={5} lg={6} md={6} sm={12} className="">
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
