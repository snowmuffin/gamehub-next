"use client";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Basicolumn, Columnwithlabels, Distributed, Loaded, Markers, Negativecolumn, Rangecolumn, Rotated} from "../../../../../../shared/data/charts/apexchartdata/columnschartdata";
import Seo from "@/shared/layout-components/seo/seo";

const ColumnsCharts = () => {
    return (
        <Fragment>
            <Seo title={"Columns-Charts"} />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">Basic Column Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="column-basic">
                                <Basicolumn />
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
                            <div className="card-title">Column Chart With Datalabels</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="column-datalabels">
                                <Columnwithlabels />
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
                            <div className="card-title">Column Chart With Markers</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="column-markers">
                                <Markers />
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
                            <div className="card-title">Column Chart With Rotated Labels</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="column-rotated-labels">
                                <Rotated />
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
                            <div className="card-title">Column Chart With Negative Values</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="column-negative">
                                <Negativecolumn />
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
                            <div className="card-title">Range Column Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="column-range">
                                <Rangecolumn />
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
                            <div className="card-title">Dynamic Loaded Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <Loaded />
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
                            <div className="card-title">Distributed Columns Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="columns-distributed">
                                <Distributed />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default ColumnsCharts;
