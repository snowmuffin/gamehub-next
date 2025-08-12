"use client";
import React, { Fragment, useEffect, useState } from "react";
import Landingswitcher from "@/shared/layout-components/swicther/landingswitcher";
import Backtotop from "@/shared/layout-components/backtotop/backtotop";

const Landinglayout = ({ children }: any) => {
  const [lateLoad, setlateLoad] = useState(false);

  useEffect(() => {
    setlateLoad(true);
  }, []);

  return (
    <Fragment>
      <div style={{ display: `${lateLoad ? "block" : "none"}` }}>
        <Landingswitcher />
        <div className="landing-page-wrapper">{children}</div>
        <Backtotop />
      </div>
    </Fragment>
  );
};

export default Landinglayout;
