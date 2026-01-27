"use client";
import React from "react";
import { useSelector } from "react-redux";

import RulesEn from "./RulesEn";
import RulesKo from "./RulesKo";

const RulesPage = () => {
  const language = useSelector((state: any) => state?.language?.code || "ko");

  if (language === "ko") {
    return <RulesKo key="ko" />;
  }
  return <RulesEn key="en" />;
};

export default RulesPage;
