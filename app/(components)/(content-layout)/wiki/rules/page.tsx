"use client";
import React from "react";
import { useSelector } from "react-redux";
import RulesEn from "./RulesEn";
import RulesKo from "./RulesKo";

const RulesPage = () => {
  const language = useSelector((state: any) => state.language.code);

  if (language === "ko") {
    return <RulesKo />;
  }
  return <RulesEn />;
};

export default RulesPage;
