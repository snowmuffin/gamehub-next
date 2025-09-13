"use client";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

import Seo from "@/shared/layout-components/seo";

const CommandsEn = () => (
  <Fragment>
    <Seo title="Command Guide" />
    <Row className="justify-content-center">
      <Col xl={12}>
        <Card className="custom-card overflow-hidden">
          <div className="top-left"></div>
          <div className="top-right"></div>
          <div className="bottom-left"></div>
          <div className="bottom-right"></div>
          <Card.Body className="p-5">
            <div className="text-primary h5 fw-medium mb-4">SEK Server - Command Guide</div>
            <div className="server-commands border p-3 overflow-scroll">
              <h5 className="fw-medium pb-3 text-primary">Item Commands</h5>
              <ol className="fs-14">
                <li className="mb-3">
                  <span className="fw-medium text-primary">
                    !cmd uploaditem &lt;itemname&gt; [quantity]
                  </span>
                  <div className="text-muted">
                    Uploads an item from your character's inventory to your web inventory.
                  </div>
                </li>
                <li className="mb-3">
                  <span className="fw-medium text-primary">!cmd listitems</span>
                  <div className="text-muted">
                    Displays a list of items in your character's inventory (shows names usable for
                    upload).
                  </div>
                </li>
                <li className="mb-3">
                  <span className="fw-medium text-primary">
                    !cmd downloaditem &lt;item_name&gt; &lt;quantity&gt;
                  </span>
                  <div className="text-muted">Downloads an item from your web inventory.</div>
                </li>
                <li className="mb-3">
                  <span className="fw-medium text-primary">!cmd globalencounters gps</span>
                  <div className="text-muted">
                    Retrieves all Factorum GPS coordinates available in the session.
                  </div>
                </li>
              </ol>
              <h5 className="fw-medium pb-3 text-primary mt-4">Block Commands</h5>
              <ol className="fs-14">
                <li className="mb-3">
                  <span className="fw-medium text-primary">!blocklimit limits</span>
                  <div className="text-muted">Check the current server block limits.</div>
                </li>
                <li className="mb-3">
                  <span className="fw-medium text-primary">!blocklimit mylimit</span>
                  <div className="text-muted">Check your personal block limits.</div>
                </li>
                <li className="mb-3">
                  <span className="fw-medium text-primary">!blocklimit update mylimit</span>
                  <div className="text-muted">Update your block limit status.</div>
                </li>
              </ol>
              <h5 className="fw-medium pb-3 text-primary mt-4">Other Commands</h5>
              <ol className="fs-14">
                <li className="mb-3">
                  <span className="fw-medium text-primary">/bi cn</span>
                  <div className="text-muted">Displays the status of conveyor connections.</div>
                </li>
                <li className="mb-3">
                  <span className="fw-medium text-primary">!entities refresh</span>
                  <div className="text-muted">Resyncs nearby entities.</div>
                </li>
                <li className="mb-3">
                  <span className="fw-medium text-primary">!fixship</span>
                  <div className="text-muted">Fixes issues with the grid you are looking at.</div>
                </li>
                <li>
                  <span className="fw-medium text-primary">
                    !transfer &lt;PlayerName&gt; [GridName]
                  </span>
                  <div className="text-muted">
                    Transfers grid ownership to a specific player. If you omit the grid name,
                    ownership of the grid you are looking at will be transferred.
                  </div>
                </li>
              </ol>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Fragment>
);

export default CommandsEn;
