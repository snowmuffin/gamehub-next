"use client";
import React, { Fragment } from "react";
import { DayCounter } from "../../../../../shared/data/authentication/comingdata";
import { Button, Col, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import Seo from "@/shared/layout-components/seo";

const UnderMaintenance = () => {
  return (
    <Fragment>
      <Seo title={"Under-Maintanance"} />
      <Row className="authentication coming-soon justify-content-center my-auto g-0 mx-0 coming-soon-main pt-4">
        <Col xxl={7} xl={8} lg={8} className="col-12 my-auto">
          <div className="authentication-cover my-5">
            <div className="aunthentication-cover-content text-center m-3 card custom-card">
              <div className="row justify-content-center align-items-center mx-0 g-0">
                <Col xxl={7} xl={8} lg={8} md={12} sm={12} className="col-12 mb-md-0 mb-5">
                  <div className="d-flex align-items-center mb-3 justify-content-center gap-1">
                    <h1 className="construction-gradient-title mb-0">Under Maintenance</h1>
                  </div>
                  <p className="mb-4 fs-14">
                    Exciting updates and new features are on the way! Stay tuned for an enhanced experience.
                  </p>
                  <DayCounter />
                  <div className="input-group mb-5">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Your Mail Address"
                      aria-label="YourMailAddress"
                      aria-describedby="button-addon2"
                    />
                    <Button variant="" className="btn btn-primary btn-lg" type="button" id="button-addon2">
                      Get Notified
                    </Button>
                  </div>
                  <div className="btn-list">
                    <Button variant="" className="btn btn-icon btn-sm btn-wave authentication-social-btn">
                      <i className="ri-facebook-line fw-bold"></i>
                    </Button>
                    <Button variant="" className="btn btn-icon btn-sm btn-wave authentication-social-btn">
                      <i className="ri-twitter-x-line fw-bold"></i>
                    </Button>
                    <Button variant="" className="btn btn-icon btn-sm btn-wave authentication-social-btn">
                      <i className="ri-instagram-line fw-bold"></i>
                    </Button>
                    <Button variant="" className="btn btn-icon btn-sm btn-wave authentication-social-btn">
                      <i className="ri-github-line fw-bold"></i>
                    </Button>
                    <Button variant="" className="btn btn-icon btn-sm btn-wave authentication-social-btn">
                      <i className="ri-youtube-line fw-bold"></i>
                    </Button>
                  </div>
                  <div className="mt-5">
                    <Link href="/dashboard/gaming">
                      <Image
                        src="/assets/images/brand-logos/desktop-dark.png"
                        alt=""
                        className="authentication-brand"
                        width={200}
                        height={50}
                      />
                    </Link>
                  </div>
                </Col>
              </div>
            </div>
          </div>
        </Col>
        <footer className="footer mt-auto py-3 ps-0 text-default text-center authentication-footer bottom-0 w-100">
          <div className="px-4">
            <span className="text-muted">
              {" "}
              Copyright © <span id="year"></span>{" "}
              <Link href="#!" scroll={false} className="text-dark">
                SciFi
              </Link>
              . Designed with <span className="ri-heart-fill text-danger"></span> by{" "}
              <Link href="#!" scroll={false}>
                <span className="text-primary text-decoration-underline">Spruko</span>
              </Link>{" "}
              All rights reserved
            </span>
          </div>
        </footer>
      </Row>
    </Fragment>
  );
};

export default UnderMaintenance;
