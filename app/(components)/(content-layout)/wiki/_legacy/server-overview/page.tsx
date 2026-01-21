"use client";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

import Seo from "@/shared/layout-components/seo";

import ServerOverviewEn from "./ServerOverviewEn";
import ServerOverviewKo from "./ServerOverviewKo";

const ServerOverview = () => {
  const language = useSelector((state: any) => state?.language?.code || "ko");

  if (language === "ko") {
    return <ServerOverviewKo />;
  }
  return <ServerOverviewEn />;
};

export default ServerOverview;
