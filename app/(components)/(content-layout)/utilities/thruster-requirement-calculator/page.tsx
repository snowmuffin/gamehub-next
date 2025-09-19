"use client";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Seo from "@/shared/layout-components/seo";
import SpaceEngineersCalculator from "@/app/(components)/(content-layout)/dashboard/gaming/components/SpaceEngineersCalculator";

const ThrusterRequirementCalculatorPage = () => {
  return (
    <Fragment>
      <Seo title={"Thruster Requirement Calculator"} />
      <Row className="g-4">
        <Col xs={12}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">Thruster Requirement Calculator</div>
            </Card.Header>
            <Card.Body>
              <SpaceEngineersCalculator />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ThrusterRequirementCalculatorPage;
