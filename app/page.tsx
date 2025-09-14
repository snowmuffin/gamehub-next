"use client";
import { Fragment } from "react";

const Page = () => {
  // This page will be automatically redirected by next.config.js
  return (
    <Fragment>
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="text-muted">Redirecting to dashboard...</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Page;
