"use client";
import React from "react";
import { useSelector } from "react-redux";

import CommandsEn from "./CommandsEn";
import CommandsKo from "./CommandsKo";

const CommandsPage = () => {
  const language = useSelector((state: any) => state?.language?.code || "ko");

  if (language === "ko") {
    return <CommandsKo key="ko" />;
  }
  return <CommandsEn key="en" />;
};

export default CommandsPage;
