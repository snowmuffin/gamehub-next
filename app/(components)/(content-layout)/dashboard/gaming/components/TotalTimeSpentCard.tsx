import React from "react";
import { Card, Dropdown } from "react-bootstrap";
import Link from "next/link";
import { TimeSpent } from "@/shared/data/dashboard/gamingdata";

const TotalTimeSpentCard = () => (
  <Card className="custom-card">
    <div className="top-left"></div>
    <div className="top-right"></div>
    <div className="bottom-left"></div>
    <div className="bottom-right"></div>
    <Card.Header className="justify-content-between">
      <div className="card-title">Total Time Spent</div>
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
    </Card.Header>
    <Card.Body>
      <div id="time-spent">
        <TimeSpent />
      </div>
    </Card.Body>
  </Card>
);

export default TotalTimeSpentCard;
