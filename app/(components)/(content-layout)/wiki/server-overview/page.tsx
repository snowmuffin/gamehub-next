"use client";
import React, { Fragment } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Seo from "@/shared/layout-components/seo";
import ServerOverviewKo from "./ServerOverviewKo";
import ServerOverviewEn from "./ServerOverviewEn";
import Link from "next/link";



const ServerOverview = () => {
    const language = useSelector((state: any) => state.language.code);

    if (language === "ko") {
        return <ServerOverviewKo />;
    }
    return <ServerOverviewEn />;
};

export default ServerOverview;
