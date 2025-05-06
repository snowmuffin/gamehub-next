"use client";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Empty = () => {
    return (
        <Fragment>
            <Seo title={"Empty"} />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">Empty</div>
                        </Card.Header>
                        <Card.Body>
                            Write Something...
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Empty;
