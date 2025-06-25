"use client";
import { Pricingdata } from "@/shared/data/pages/pricingdata";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment } from "react";
import { Button, Card, Col, Nav, Row, Tab } from "react-bootstrap";

const Pricing = () => {
    return (
        <Fragment>
            <Seo title={"Pricing"} />
            <Row className="justify-content-center">
                {Pricingdata.map((idx) => (
                    <Col xxl={3} lg={6} md={8} className="" key={Math.random()}>
                        <Card className={`custom-card landing-card pricing-card ${idx.data} border shadow-none`}>
                            <div className="top-left"></div>
                            <div className="top-right"></div>
                            <div className="bottom-left"></div>
                            <div className="bottom-right"></div>
                            <Card.Body>
                                {idx.badge}
                                <div className="mb-4">
                                    <p className="fs-18 fw-medium mb-1">{idx.heading}</p>
                                    <p className="mb-1 fs-14 op-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <p className="text-justify fw-medium mb-1">
                                        <span className="fs-2">$</span><span className="fs-40 me-1">{idx.month}</span>
                                        <span className="fs-20 op-6"><span className="fs-20">/</span> month</span>
                                    </p>
                                    <p className="fs-12 mb-2 text-info p-1 lh-1 bg-info-transparent d-inline-flex"><i className="ri-information-line align-middle me-1 d-inline-block fs-11"></i>Billed monthly on regular basis!</p>
                                </div>
                                <ul className="text-justify list-unstyled pricing-body ps-0">
                                    <li className="mb-3"><span className="me-1"><i className="fe fe-check-circle align-middle fs-14 text-success d-inline-block"></i></span> {idx.users} Users
                                    </li>
                                    <li className="mb-3"><span className="me-1"><i className="fe fe-check-circle align-middle fs-14 text-success d-inline-block"></i></span> {idx.days} Days Pack
                                    </li>
                                    <li className="mb-3"><span className="me-1"><i className="fe fe-check-circle align-middle fs-14 text-success d-inline-block"></i></span> Basic services
                                    </li>
                                    <li className="mb-3"><span className="me-1"><i className="fe fe-check-circle align-middle fs-14 text-success d-inline-block"></i></span> Backups
                                    </li>
                                    <li className="mb-3"><span className="me-1"><i className="fe fe-x-circle align-middle fs-16 op-5 d-inline-block"></i></span> Advanced Security</li>
                                    <li className="mb-0"><span className="me-1"><i className="fe fe-x-circle align-middle fs-16 op-5 d-inline-block"></i></span> 24/7 support service</li>
                                </ul>
                                <div className="text-center border-top-0 pt-4 d-grid">
                                    <Button variant="" type="button" className={`btn btn-lg btn-${idx.color}`}>
                                        <span className="ms-4 me-4">Select a Plan</span>
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row>
                <Tab.Container defaultActiveKey="month">
                    <Col xl={12}>
                        <div className="d-flex justify-content-center mb-4">
                            <Nav className="nav nav-tabs mb-3 tab-style-6 bg-primary-transparent" id="myTab1" role="tablist">
                                <Nav.Item className="nav-item" role="presentation">
                                    <Nav.Link eventKey="month" className="nav-link" id="pricing-monthly1" data-bs-toggle="tab"
                                        data-bs-target="#pricing-monthly1-pane" type="button" role="tab"
                                        aria-controls="pricing-monthly1-pane" aria-selected="true">Monthly</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="nav-item" role="presentation">
                                    <Nav.Link eventKey="year" className="nav-link" id="pricing-yearly1" data-bs-toggle="tab"
                                        data-bs-target="#pricing-yearly1-pane" type="button" role="tab"
                                        aria-controls="pricing-yearly1-pane" aria-selected="false">Yearly</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </Col>
                    <Col xl={12}>
                        <Tab.Content className="" id="myTabContent1">
                            <Tab.Pane eventKey="month" className="tab-pane p-0 border-0" id="pricing-monthly1-pane"
                                role="tabpanel" aria-labelledby="pricing-monthly1" tabIndex={0}>
                                <div className="row d-flex align-items-center justify-content-center">
                                    <Col lg={6} xxl={3} md={8} sm={12} className="">
                                        <Card className="custom-card pricing-card p-4">
                                            <div className="top-left"></div>
                                            <div className="top-right"></div>
                                            <div className="bottom-left"></div>
                                            <div className="bottom-right"></div>
                                            <Card.Body className="p-0 border">
                                                <div className="mb-4 d-fle align-items-start text-center price-head bg-white-transparent pt-4">
                                                    <h5 className="fw-medium my-1">Business</h5>
                                                    <span className="fs-12 mb-1 text-muted d-block">For Basic Business purpose !</span>
                                                    <span className="mb-1 fw-medium d-block fs-1"><span className="fs-12 text-success">Best price</span> $59</span>
                                                </div>
                                                <ul className="list-unstyled pricing-body text-muted mb-0 fs-14 pt-3">
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 my-auto">
                                                                10 Individual Users
                                                            </span>

                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 my-auto">
                                                                Individual Data <span className="badge bg-light text-default border ms-2">10GB</span>
                                                            </span>

                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 my-auto">
                                                                Visitors Monitoring
                                                            </span>

                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 my-auto">
                                                                Data Storage<span className="badge bg-light text-default border ms-2">10 GB</span>
                                                            </span>

                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-x text-danger'></i>
                                                            <span className="ms-2 my-auto">
                                                                All-Time Updates
                                                            </span>

                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-x text-danger'></i>
                                                            <span className="ms-2 my-auto">
                                                                Security And Support
                                                            </span>

                                                        </div>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={6} xxl={3} md={8} sm={12} className="">
                                        <Card className="custom-card pricing-card p-4">
                                            <div className="top-left"></div>
                                            <div className="top-right"></div>
                                            <div className="bottom-left"></div>
                                            <div className="bottom-right"></div>
                                            <Card.Body className="p-0 border">
                                                <div className="mb-4 d-fle align-items-start text-center price-head bg-white-transparent pt-4">
                                                    <h5 className="fw-medium my-1">Regular</h5>
                                                    <span className="fs-12 mb-1 text-muted d-block">For Regular business purpose !</span>
                                                    <span className="mb-1 fw-medium d-block fs-1"><span className="fs-12 text-success">Best price</span> $99</span>
                                                </div>
                                                <ul className="list-unstyled pricing-body text-muted mb-0 fs-14 pt-3">
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 my-auto">
                                                                5 Individual Users
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 my-auto">
                                                                Individual Data <span className="badge bg-light text-default border ms-2">14GB</span>
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 my-auto">
                                                                Visitors Monitoring
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 my-auto">
                                                                Data Storage<span className="badge bg-light text-default border ms-2">20 GB</span>
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 my-auto">
                                                                All-Time Updates
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 my-auto">
                                                                Security And Support
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={6} xxl={3} md={8} sm={12} className="">
                                        <Card className="custom-card pricing-card p-4">
                                            <div className="top-left"></div>
                                            <div className="top-right"></div>
                                            <div className="bottom-left"></div>
                                            <div className="bottom-right"></div>
                                            <Card.Body className="p-0 border">
                                                <div className="mb-4 d-fle align-items-start text-center price-head bg-white-transparent pt-4">
                                                    <h5 className="fw-medium my-1">Premium</h5>
                                                    <span className="fs-12 mb-1 text-muted d-block">For Premium business purpose !</span>
                                                    <span className="mb-1 fw-medium d-block fs-1"><span className="fs-12 text-success">Best price</span> $159</span>
                                                </div>
                                                <ul className="list-unstyled pricing-body text-muted mb-0 fs-14 pt-3">
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 my-auto">
                                                                20 Individual Users
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 my-auto">
                                                                Individual Data <span className="badge bg-light text-default border ms-2">28GB</span>
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 my-auto">
                                                                Visitors Monitoring
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 my-auto">
                                                                Data Storage<span className="badge bg-light text-default border ms-2">30 GB</span>
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-x text-danger'></i>
                                                            <span className="ms-2 my-auto">
                                                                All-Time Updates
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-x text-danger'></i>
                                                            <span className="ms-2 my-auto">
                                                                Security And Support
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={6} xxl={3} md={8} sm={12} className="">
                                        <Card className="custom-card pricing-card p-4 border border-primary overflow-hidden">
                                            <div className="top-left"></div>
                                            <div className="top-right"></div>
                                            <div className="bottom-left"></div>
                                            <div className="bottom-right"></div>
                                            <Card.Body className="p-0 border">
                                                <div className="mb-4 d-fle align-items-start text-center price-head bg-primary-transparent popular pt-4">
                                                    <span className="pricing-new shadow">Popular</span>
                                                    <div>
                                                        <h5 className="fw-medium my-1">Advanced</h5>
                                                        <span className="fs-12 mb-1 text-muted d-block">For Advanced business purpose !</span>
                                                        <span className="mb-1 fw-medium d-block fs-1"><span className="fs-12 text-success">Best price</span> $799</span>
                                                    </div>
                                                </div>
                                                <ul className="list-unstyled pricing-body text-muted mb-0 fs-14 pt-3">
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 d-flex-align-items-center my-auto">
                                                                Every Users
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 my-auto">
                                                                Individual Data <span className="badge bg-light text-default border ms-2">32GB</span>
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 my-auto">
                                                                Visitors Monitoring
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 d-flex-align-items-center my-auto">
                                                                Data Storage<span className="badge bg-success-transparent border border-success ms-2">52 GB</span>
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 my-auto">
                                                                All-Time Updates
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-x text-danger'></i>
                                                            <span className="ms-2 my-auto">
                                                                Security And Support
                                                            </span>

                                                        </div>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="year" className="tab-pane p-0 border-0" id="pricing-yearly1-pane"
                                role="tabpanel" aria-labelledby="pricing-yearly1" tabIndex={0}>
                                <div className="row d-flex align-items-center justify-content-center">
                                    <Col lg={6} xxl={3} md={8} sm={12} className="">
                                        <Card className="custom-card pricing-card p-4">
                                            <div className="top-left"></div>
                                            <div className="top-right"></div>
                                            <div className="bottom-left"></div>
                                            <div className="bottom-right"></div>
                                            <Card.Body className="p-0 border">
                                                <div className="mb-4 d-fle align-items-start text-center price-head bg-white-transparent pt-4">
                                                    <h5 className="fw-medium my-1">Business</h5>
                                                    <span className="fs-12 mb-1 text-muted d-block">For Basic Business purpose !</span>
                                                    <span className="mb-1 fw-medium d-block fs-1"><span className="fs-12 text-success">Best price</span> $249</span>
                                                </div>
                                                <ul className="list-unstyled pricing-body text-muted mb-0 fs-14 pt-3">
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 my-auto">
                                                                10 Individual Users
                                                            </span>

                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 my-auto">
                                                                Individual Data <span className="badge bg-light text-default border ms-2">32GB</span>
                                                            </span>

                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 my-auto">
                                                                Visitors Monitoring
                                                            </span>

                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 my-auto">
                                                                Data Storage<span className="badge bg-light text-default border ms-2">20 GB</span>
                                                            </span>

                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 my-auto">
                                                                All-Time Updates
                                                            </span>

                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-x text-danger'></i>
                                                            <span className="ms-2 my-auto">
                                                                Security And Support
                                                            </span>

                                                        </div>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={6} xxl={3} md={8} sm={12} className="">
                                        <Card className="custom-card pricing-card p-4">
                                            <div className="top-left"></div>
                                            <div className="top-right"></div>
                                            <div className="bottom-left"></div>
                                            <div className="bottom-right"></div>
                                            <Card.Body className="p-0 border">
                                                <div className="mb-4 d-fle align-items-start text-center price-head bg-white-transparent pt-4">
                                                    <h5 className="fw-medium my-1">Regular</h5>
                                                    <span className="fs-12 mb-1 text-muted d-block">For Regular business purpose !</span>
                                                    <span className="mb-1 fw-medium d-block fs-1"><span className="fs-12 text-success">Best price</span> $789</span>
                                                </div>
                                                <ul className="list-unstyled pricing-body text-muted mb-0 fs-14 pt-3">
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 my-auto">
                                                                10 Individual Users
                                                            </span>

                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 my-auto">
                                                                Individual Data <span className="badge bg-light text-default border ms-2">32GB</span>
                                                            </span>

                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 my-auto">
                                                                Visitors Monitoring
                                                            </span>

                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 my-auto">
                                                                Data Storage<span className="badge bg-light text-default border ms-2">20 GB</span>
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 my-auto">
                                                                All-Time Updates
                                                            </span>

                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-x text-danger'></i>
                                                            <span className="ms-2 my-auto">
                                                                Security And Support
                                                            </span>

                                                        </div>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={6} xxl={3} md={8} sm={12} className="">
                                        <Card className="custom-card pricing-card p-4">
                                            <div className="top-left"></div>
                                            <div className="top-right"></div>
                                            <div className="bottom-left"></div>
                                            <div className="bottom-right"></div>
                                            <Card.Body className="p-0 border">
                                                <div className="mb-4 d-fle align-items-start text-center price-head bg-white-transparent pt-4">
                                                    <h5 className="fw-medium my-1">Premium</h5>
                                                    <span className="fs-12 mb-1 text-muted d-block">For Premium business purpose !</span>
                                                    <span className="mb-1 fw-medium d-block fs-1"><span className="fs-12 text-success">Best price</span> $1,349</span>
                                                </div>
                                                <ul className="list-unstyled pricing-body text-muted mb-0 fs-14 pt-3">
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 my-auto">
                                                                10 Individual Users
                                                            </span>

                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 my-auto">
                                                                Individual Data <span className="badge bg-light text-default border ms-2">32GB</span>
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 my-auto">
                                                                Visitors Monitoring
                                                            </span>

                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 my-auto">
                                                                Data Storage<span className="badge bg-light text-default border ms-2">20 GB</span>
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 my-auto">
                                                                All-Time Updates
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-x text-danger'></i>
                                                            <span className="ms-2 my-auto">
                                                                Security And Support
                                                            </span>

                                                        </div>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={6} xxl={3} md={8} sm={12} className="">
                                        <Card className="custom-card pricing-card p-4 border border-primary overflow-hidden">
                                            <div className="top-left"></div>
                                            <div className="top-right"></div>
                                            <div className="bottom-left"></div>
                                            <div className="bottom-right"></div>
                                            <Card.Body className="p-0 border">
                                                <div className="mb-4 d-fle align-items-start text-center price-head bg-primary-transparent popular pt-4">
                                                    <span className="pricing-new shadow">Popular</span>
                                                    <div>
                                                        <h5 className="fw-medium my-1">Advanced</h5>
                                                        <span className="fs-12 mb-1 text-muted d-block">For Advanced business purpose !</span>
                                                        <span className="mb-1 fw-medium d-block fs-1"><span className="fs-12 text-success">Best price</span> $5,899</span>
                                                    </div>
                                                </div>
                                                <ul className="list-unstyled pricing-body text-muted mb-0 fs-14 pt-3">
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 d-flex-align-items-center my-auto">
                                                                10 Individual Users
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 my-auto">
                                                                Individual Data <span className="badge bg-light text-default border ms-2">32GB</span>
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 my-auto">
                                                                Visitors Monitoring
                                                            </span>

                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-check-double text-success'></i>
                                                            <span className="ms-2 d-flex-align-items-center my-auto">
                                                                Data Storage<span className="badge bg-success-transparent border border-success ms-2">512GB</span>
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-x text-danger'></i>
                                                            <span className="ms-2 my-auto">
                                                                All-Time Updates
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center p-2 border-bottom border-block-end-dashed justify-content-center">
                                                            <i className='bx bx-x text-danger'></i>
                                                            <span className="ms-2 my-auto">
                                                                Security And Support
                                                            </span>

                                                        </div>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Tab.Container>

            </Row>
        </Fragment>
    );
};

export default Pricing;
