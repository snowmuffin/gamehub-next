"use client";
import React, { Fragment } from "react";
import { FunnelData, PyramidData } from "../../../../../../shared/data/charts/apexchartdata/funnelchartdata";
import Seo from "@/shared/layout-components/seo/seo";
import { Card, Col, Row } from "react-bootstrap";

const FunnelCharts = () => {
    return (
        <Fragment>
            <Seo title={"Funnel-Charts"} />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">Funnel Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="funnel-chart">
                                <FunnelData />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">Pyramid Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="pyramid-chart">
                                <PyramidData />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default FunnelCharts;
