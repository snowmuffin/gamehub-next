"use client";
import { Reviewsdata } from "@/shared/data/pages/reviewsdata";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Pagination, Row } from "react-bootstrap";

const Reviews = () => {
    return (
        <Fragment>
            <Seo title={"Reviews"} />
            <div className="container-lg">
                <Row className="justify-content-center">
                    <Col xxl={10} xl={12} lg={12} md={12} sm={12} className="">
                        <Row>
                            {Reviewsdata.map((idx) => (
                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} className="" key={Math.random()}>
                                    <Card className="custom-card">
                                        <div className="top-left"></div>
                                        <div className="top-right"></div>
                                        <div className="bottom-left"></div>
                                        <div className="bottom-right"></div>
                                        <Card.Body>
                                            <div className="d-flex align-items-center mb-3">
                                                <span className="avatar avatar-md avatar-rounded me-3 flex-shrink-0">
                                                    <img src={idx.src} alt="" />
                                                </span>
                                                <div>
                                                    <p className="mb-0 fw-semibold fs-14 text-primary">{idx.heading}</p>
                                                    <p className="mb-0 fs-10 fw-semibold text-muted">{idx.data}</p>
                                                </div>
                                                <div className="ms-auto">
                                                    <span className="badge fs-10 bg-light">{idx.days}</span>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <span className="me-4"><i className="ri-double-quotes-l fs-30 op-1"></i></span>
                                                <p className="text-muted mb-0 fs-13 op-9">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Earum autem quaerat distinctio Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Tempora, facilis temporibus repellat laudantiums.</p>
                                            </div>
                                        </Card.Body>
                                        <Card.Footer>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className="text-warning d-block fs-12">
                                                        <i className="ri-star-fill"></i>
                                                        <i className="ri-star-fill"></i>
                                                        <i className="ri-star-fill"></i>
                                                        <i className="ri-star-fill"></i>
                                                        <i className="ri-star-half-fill"></i>
                                                    </span>
                                                    <span className="text-muted fs-14 op-8">Rating: {idx.rating}</span>
                                                </div>
                                                <div className="float-end fs-12 fw-semibold text-muted text-end">
                                                    <Link href="#!" scroll={false} className="badge bg-primary-transparent me-2">
                                                        <i className="ri-thumb-up-line align-bottom me-1 d-inline-flex"></i>{idx.data1}
                                                    </Link>
                                                    <Link href="#!" scroll={false} className="badge bg-secondary-transparent">
                                                        <i className="ri-chat-1-line align-bottom me-1 d-inline-flex"></i> {idx.message}
                                                    </Link>
                                                </div>
                                            </div>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            ))}
                        </Row>

                        <Pagination className="mb-5 justify-content-end">
                            <Pagination.Item>Prev</Pagination.Item>
                            <Pagination.Item active>1</Pagination.Item>
                            <Pagination.Item>2</Pagination.Item>
                            <Pagination.Ellipsis />
                            <Pagination.Item>17</Pagination.Item>
                            <Pagination.Item className="text-primary" >Next</Pagination.Item>
                        </Pagination>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};

export default Reviews;
