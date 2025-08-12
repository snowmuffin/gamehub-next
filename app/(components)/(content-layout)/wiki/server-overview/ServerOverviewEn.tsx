"use client";
import Seo from "@/shared/layout-components/seo";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

const ServerOverviewEn = () => (
  <Fragment>
    <Seo title="Server Overview" />
    <Row className="justify-content-center">
      <Col xl={12}>
        <Card className="custom-card overflow-hidden">
          <div className="top-left"></div>
          <div className="top-right"></div>
          <div className="bottom-left"></div>
          <div className="bottom-right"></div>
          <Card.Body className="p-5">
            <div className="text-primary h5 fw-medium mb-4">SEK Server - Overview</div>
            <div className="server-overview border p-3 overflow-scroll">
              <div className="mb-4 fs-14">
                <p className="mb-3">
                  <span className="fw-medium text-default">Welcome to the SEK server!</span>
                </p>
              </div>
              <h5 className="fw-medium pb-3 text-primary">
                <span>Key Features :</span>
              </h5>
              <ol className="fs-14">
                <li className="mb-4">
                  <p className="fw-medium mb-2 fs-14 text-primary">Upgrade Modules</p>
                  <p className="mb-0 text-muted">
                    Enhance and customize your grid's performance by applying upgrade modules, allowing for deeper
                    engineering and creative builds.
                  </p>
                </li>
                <li className="mb-4">
                  <p className="fw-medium mb-2 fs-14 text-primary">Web Inventory</p>
                  <p className="mb-0 text-muted">
                    Manage your items flexibly with a dedicated web inventory. You can upload and download items between
                    the game and the website at your convenience.
                  </p>
                </li>
                <li className="mb-4">
                  <p className="fw-medium mb-2 fs-14 text-primary">Web Trading</p>
                  <p className="mb-0 text-muted">
                    Trade items securely and easily through our website-based trading system (coming soon).
                  </p>
                </li>
                <li className="mb-4">
                  <p className="fw-medium mb-2 fs-14 text-primary">Ranking System</p>
                  <p className="mb-0 text-muted">
                    Compete with other players and track your progress with real-time rankings displayed on the website.
                  </p>
                </li>
                <li className="mb-4">
                  <p className="fw-medium mb-2 fs-14 text-primary">Prime Blocks</p>
                  <p className="mb-0 text-muted">
                    Discover advanced blocks crafted from Prime Matter, a rare and valuable resource for high-end
                    construction.
                  </p>
                </li>
                <li>
                  <p className="fw-medium mb-2 fs-14 text-primary">More Content</p>
                  <p className="mb-0 text-muted">
                    We are constantly working on new features and content to keep the gameplay fresh and exciting.
                  </p>
                </li>
              </ol>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Fragment>
);

export default ServerOverviewEn;
