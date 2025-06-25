"use client";
import Header from '@/shared/layout-components/header/header';
import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Sidebar from '@/shared/layout-components/sidebar/sidebar';
import Footer from '@/shared/layout-components/footer/footer';
import Swicther from '@/shared/layout-components/swicther/swicther';
import Backtotop from '@/shared/layout-components/backtotop/backtotop';

const ContentLayout = ({ children }: any) => {

  const [lateLoad, setlateLoad] = useState(false);

  useEffect(() => {
    setlateLoad(true);
  });

  const [MyclassName, setMyClass] = useState("");

  const Bodyclickk = () => {
    document.querySelector(".search-result")?.classList.add("d-none");
    if (localStorage.getItem("scifiverticalstyles") == "icontext") {
      setMyClass("");
    }
    if (window.innerWidth > 992) {
      let html = document.documentElement;
      if (html.getAttribute('data-icon-overlay') === 'open') {
        html.setAttribute('data-icon-overlay', "");
      }
    }
  }

  return (
      <Fragment>
        <div style={{ display: `${lateLoad ? 'block' : 'none'}` }}>
          <Swicther />
          <div className="page">
            <Header />
            <Sidebar />
            <div className="main-content app-content" onClick={Bodyclickk}>
              <div className="container-fluid">
                {children}
              </div>
            </div>
            <Footer />
          </div>
          <Backtotop />
        </div>
      </Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  local_variable: state.local_variable,
});

export default connect(mapStateToProps, {})(ContentLayout);
