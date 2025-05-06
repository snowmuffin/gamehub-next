import React from "react";
import { Card, Col, ProgressBar } from "react-bootstrap";
import { SafeZone, DangerZone, DistanceCovered } from "@/shared/data/dashboard/gamingdata";

const DistanceCoveredCard = () => (
    <Card className="custom-card">
        <div className="top-left"></div>
        <div className="top-right"></div>
        <div className="bottom-left"></div>
        <div className="bottom-right"></div>
        <Card.Header className="justify-content-between">
            <div className="card-title">Distance Covered</div>
        </Card.Header>
        <Card.Body>
            <div className="distance-covered-content container">
                <div className="row gy-3">
                    <Col xl={5} sm={4} className="col-12">
                        <div className="d-flex align-items-center gap-1">
                            <div id="safe-zones">
                                <SafeZone />
                            </div>
                            <div className="flex-fill">
                                <span className="d-block fs-12">Safe Zone</span>
                                <h4 className="fw-medium mb-1">32.17H</h4>
                                <div className="progress rounded-0 custom-progress-padding progress-sm border border-primary border-opacity-10" role="progressbar" aria-label="Basic example" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>
                                    <ProgressBar className="progress-bar bg-success" style={{ width: "65%" }} />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl={5} sm={4} className="col-12">
                        <div className="d-flex align-items-center gap-1">
                            <div id="danger-zones">
                                <DangerZone />
                            </div>
                            <div className="flex-fill">
                                <span className="d-block fs-12">Danger Zone</span>
                                <h4 className="fw-medium mb-1">18.65H</h4>
                                <div className="progress rounded-0 custom-progress-padding progress-sm border border-primary border-opacity-10" role="progressbar" aria-label="Basic example" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar bg-danger" style={{ width: "65%" }}></div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </div>
            </div>
            <div id="distance-covered">
                <DistanceCovered />
            </div>
        </Card.Body>
    </Card>
);

export default DistanceCoveredCard;
