"use client";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

import Seo from "@/shared/layout-components/seo";

import ComingSoonEn from "./ComingSoonEn";
import ComingSoonKo from "./ComingSoonKo";

const ComingSoon = () => {
  const language = useSelector((state: any) => state.language.code);

  if (language === "ko") {
    return <ComingSoonKo />;
  }
  return <ComingSoonEn />;
};

export default ComingSoon;
