import React from "react";
import { Card, Dropdown } from "react-bootstrap";
import Link from "next/link";
import { UnsolvedEvents } from "@/shared/data/dashboard/gamingdata";

const UnresolvedEventsCard = () => (
  <Card className="custom-card">
    <div className="top-left"></div>
    <div className="top-right"></div>
    <div className="bottom-left"></div>
    <div className="bottom-right"></div>
    <Card.Body>
      <div className="mb-3 d-flex align-items-start justify-content-between">
        <div>
          <span className="text-fixed-white fs-11">Unresolved Events</span>
          <h4 className="text-fixed-white mb-0">
            563
            <span className="text-success fs-12 ms-2 fw-semibold d-inline-block">
              <i className="ti ti-trending-up align-middle me-1 d-inline-block"></i>0.25%
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
      <div id="unresolved-issues">
        <UnsolvedEvents />
      </div>
    </Card.Body>
  </Card>
);

export default UnresolvedEventsCard;
