import React from "react";
import { Card, Dropdown } from "react-bootstrap";
import Link from "next/link";
import { Completedissues } from "@/shared/data/dashboard/gamingdata";

const CompletedEventsCard = () => (
  <Card className="custom-card">
    <div className="top-left"></div>
    <div className="top-right"></div>
    <div className="bottom-left"></div>
    <div className="bottom-right"></div>
    <Card.Body>
      <div className="mb-3 d-flex align-items-start justify-content-between">
        <div>
          <span className="text-fixed-white fs-11">Completed Events</span>
          <h4 className="text-fixed-white mb-0">
            29,912
            <span className="text-danger fs-12 ms-2 fw-semibold">
              <i className="ti ti-trending-down align-middle me-1 d-inline-block"></i>0.25%
            </span>
          </h4>
        </div>
        <Dropdown>
          <Dropdown.Toggle as="a" aria-label="anchor" href="#!" data-bs-toggle="dropdown" className="op-4 no-caret">
            <i className="bi bi-grid text-primary"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as="li">
              <Link href="#!">Day</Link>
            </Dropdown.Item>
            <Dropdown.Item as="li">
              <Link href="#!">Week</Link>
            </Dropdown.Item>
            <Dropdown.Item as="li">
              <Link href="#!">Year</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div id="completed-issues">
        <Completedissues />
      </div>
    </Card.Body>
  </Card>
);

export default CompletedEventsCard;
