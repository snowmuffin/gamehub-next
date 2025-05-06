"use client"
import { Bitcoinwidget, DshCoinwidget, Etherumwidget, GlmCoinwidget, Report, SalesStatistics, SessionsByDevice, TotalRevenue1, Viewsdata } from "@/shared/data/widgets/widgetsdata";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Dropdown, Nav, ProgressBar, Row, Tab } from "react-bootstrap";
import { WorldMap } from "@/shared/data/maps/vectormapdata";
import dynamic from "next/dynamic";
const WorldMapCom = dynamic(() => import('@/shared/data/dashboard/mapdata'), { ssr: false });

const Widget = () => {

    return (
        <Fragment>
            <Seo title={"Widgets"} />
            <Row>
                <Col xxl={9}>
                    <Card className="custom-card border-0">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="p-0">
                            <div className="row g-0 border border-dashed">
                                <Col xl={3} className="border-end border-inline-end-dashed">
                                    <div className="d-flex flex-wrap align-items-top p-4">
                                        <div className="me-3 lh-1">
                                            <span className="avatar avatar-md bg-primary-transparent">
                                                <i className="ti ti-package fs-18"></i>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <h5 className="fw-medium mb-1">45,280</h5>
                                            <p className="text-muted mb-0 fs-12">Total Products</p>
                                        </div>
                                        <div>
                                            <span className="badge bg-success-transparent"><i
                                                className="ri-arrow-up-s-line align-middle me-1 d-inline-block"></i>1.31%</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={3} className="border-end border-inline-end-dashed">
                                    <div className="d-flex flex-wrap align-items-top p-4">
                                        <div className="me-3 lh-1">
                                            <span className="avatar avatar-md bg-secondary-transparent">
                                                <i className="ti ti-rocket fs-18"></i>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <h5 className="fw-medium mb-1">10,500</h5>
                                            <p className="text-muted mb-0 fs-12">Total Sales</p>
                                        </div>
                                        <div>
                                            <span className="badge bg-danger-transparent"><i
                                                className="ri-arrow-down-s-line align-middle me-1"></i>1.14%</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={3} className="border-end border-inline-end-dashed">
                                    <div className="d-flex flex-wrap align-items-top p-4">
                                        <div className="me-3 lh-1">
                                            <span className="avatar avatar-md bg-success-transparent">
                                                <i className="ti ti-wallet fs-18"></i>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <h5 className="fw-medium mb-1">$69,270</h5>
                                            <p className="text-muted mb-0 fs-12">Income</p>
                                        </div>
                                        <div>
                                            <span className="badge bg-success-transparent"><i
                                                className="ri-arrow-up-s-line align-middle me-1 d-inline-block"></i>2.58%</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={3} className="">
                                    <div className="d-flex flex-wrap align-items-top p-4">
                                        <div className="me-3 lh-1">
                                            <span className="avatar avatar-md bg-warning-transparent">
                                                <i className="ti ti-packge-import fs-18"></i>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <h5 className="fw-medium mb-1">12,088</h5>
                                            <p className="text-muted mb-0 fs-12">Total Orders</p>
                                        </div>
                                        <div>
                                            <span className="badge bg-success-transparent"><i
                                                className="ri-arrow-up-s-line align-middle me-1 d-inline-block"></i>12.05%</span>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </Card.Body>
                    </Card>
                    <Row>
                        <Col xxl={3} xl={6} lg={5} className="">
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body>
                                    <div className="d-flex align-items-top">
                                        <div className="flex-fill">
                                            <div
                                                className="d-flex flex-wrap align-items-center justify-content-between fs-14 mb-2">
                                                <span className="flex-fill">Bitcoin</span>
                                                <span className="ms-1 text-muted">BTC</span>
                                            </div>
                                            <div
                                                className="d-flex flex-wrap align-items-center justify-content-between">
                                                <h5 className="fw-medium mb-0">$11,600</h5>
                                                <div className="flex-fill">
                                                    <span
                                                        className="ms-2 badge bg-success-transparent rounded-pill">+15.67%</span>
                                                </div>
                                                <div id="btcCoin">
                                                    <Bitcoinwidget />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body>
                                    <div className="d-flex align-items-top">
                                        <div className="flex-fill">
                                            <div
                                                className="d-flex flex-wrap align-items-center justify-content-between fs-14 mb-2">
                                                <span className="flex-fill">Ethereum</span>
                                                <span className="ms-1 text-muted">ETH</span>
                                            </div>
                                            <div
                                                className="d-flex flex-wrap align-items-center justify-content-between">
                                                <h5 className="fw-medium mb-0">$17,885</h5>
                                                <div className="flex-fill">
                                                    <span
                                                        className="ms-2 badge bg-success-transparent rounded-pill">+10.1%</span>
                                                </div>
                                                <div id="ethCoin">
                                                    <Etherumwidget />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body>
                                    <div className="d-flex align-items-top">
                                        <div className="flex-fill">
                                            <div
                                                className="d-flex flex-wrap align-items-center justify-content-between fs-14 mb-2">
                                                <span className="flex-fill">Dash</span>
                                                <span className="ms-1 text-muted">DSH</span>
                                            </div>
                                            <div
                                                className="d-flex flex-wrap align-items-center justify-content-between">
                                                <h5 className="fw-medium mb-0">$18,400</h5>
                                                <div className="flex-fill">
                                                    <span
                                                        className="ms-2 badge bg-success-transparent rounded-pill">+10.8%</span>
                                                </div>
                                                <div id="dshCoin">
                                                    <DshCoinwidget />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Card.Body>
                            </Card>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body>
                                    <div className="d-flex align-items-top">
                                        <div className="flex-fill">
                                            <div
                                                className="d-flex flex-wrap align-items-center justify-content-between fs-14 mb-2">
                                                <span className="flex-fill">Golem</span>
                                                <span className="ms-1 text-muted">GLM</span>
                                            </div>
                                            <div
                                                className="d-flex flex-wrap align-items-center justify-content-between">
                                                <h5 className="fw-medium mb-0">$21,841</h5>
                                                <div className="flex-fill">
                                                    <span
                                                        className="ms-2 badge bg-success-transparent rounded-pill">+2.08%</span>
                                                </div>
                                                <div id="glmCoin">
                                                    <GlmCoinwidget />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={6} xl={6} lg={7} className="">
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Header className="justify-content-between">
                                    <div className="card-title">
                                        Sales statistics
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <div id="sales-statistics">
                                        <SalesStatistics />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={3}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body>
                                    <div className="d-flex align-items-top justify-content-between mb-3">
                                        <div>
                                            <span className="avatar avatar-md avatar-rounded bg-primary">
                                                <i className="ti ti-users fs-16"></i>
                                            </span>
                                        </div>
                                        <div className="flex-fill ms-3">
                                            <div className="d-flex align-items-center justify-content-between flex-wrap">
                                                <div>
                                                    <p className="text-muted mb-0">Total Customers</p>
                                                    <h5 className="fw-semibold mt-1 mb-0">22,560</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mt-1">
                                        <div> <Link className="text-primary text-decoration-underline" href="#!" scroll={false}>View All</Link>
                                        </div>
                                        <div className="text-end">
                                            <p className="mb-0 text-success fw-semibold">+40%</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body>
                                    <div className="d-flex align-items-top justify-content-between mb-3">
                                        <div>
                                            <span className="avatar avatar-md avatar-rounded bg-secondary">
                                                <i className="ti ti-cash fs-16"></i>
                                            </span>
                                        </div>
                                        <div className="flex-fill ms-3">
                                            <div className="d-flex align-items-center justify-content-between flex-wrap">
                                                <div>
                                                    <p className="text-muted mb-0">Total Revenue</p>
                                                    <h5 className="fw-semibold mt-1 mb-0">5,12,245</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mt-1">
                                        <div> <Link className="text-primary text-decoration-underline" href="#!" scroll={false}>View All</Link>
                                        </div>
                                        <div className="text-end">
                                            <p className="mb-0 text-danger fw-semibold">-3.50%</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body>
                                    <div className="d-flex align-items-top justify-content-between mb-3">
                                        <div>
                                            <span className="avatar avatar-md avatar-rounded bg-warning">
                                                <i className="ti ti-coin fs-16"></i>
                                            </span>
                                        </div>
                                        <div className="flex-fill ms-3">
                                            <div className="d-flex align-items-center justify-content-between flex-wrap">
                                                <div>
                                                    <p className="text-muted mb-0">Total Profit</p>
                                                    <h5 className="fw-semibold mt-1 mb-0">15,674</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mt-1">
                                        <div> <Link className="text-primary text-decoration-underline" href="#!" scroll={false}>View All</Link>
                                        </div>
                                        <div className="text-end">
                                            <p className="mb-0 text-success fw-semibold">+2.1%</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card bg-primary-gradient card-bgimage-none text-fixed-white">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="p-4">
                            <div className="d-flex align-items-top flex-wrap">
                                <div className="flex-fill">
                                    <h3 className="fw-semibold mb-1 text-fixed-white">$210,520.00</h3>
                                    <p className="op-7 fw-medium mb-0 text-fixed-white">Total Balance</p>
                                </div>
                                <div>
                                    <i className="ri-coins-line lh-1 fs-62 text-warning"></i>
                                </div>
                            </div>
                            <div className="mt-4 fs-13">Compare to last Month Increased <span
                                className="text-success">3.69%<i
                                    className="ri-arrow-up-s-line align-middle ms-1 d-inline-block"></i></span>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">Visit By Device</div> <button type="button" className="btn btn-sm btn-light">View All</button>
                        </Card.Header>
                        <Card.Body>
                            <div className="mb-4">
                                <p className="mb-0 fs-13">Total Visits <span className="ms-2 text-success">+10.1%</span></p>
                                <h3 className="fw-medium">18,124</h3>
                            </div>
                            <ul className="list-unstyled  mb-0">
                                <li className="mb-3">
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="me-2"> <span className="avatar avatar-md avatar-rounded bg-secondary-transparent"> <i
                                            className="ti ti-device-mobile"></i> </span> </div>
                                        <div className="flex-fill">
                                            <div className="d-flex align-items-center justify-content-between"> <span
                                                className="d-block fw-semibold">Android</span> <span
                                                    className="d-block text-secondary">80%</span> </div>
                                        </div>
                                    </div>
                                    <ProgressBar variant="secondary" now={80} className="progress progress-animate progress-xs progress-bar-striped mb-2" role="progressbar" aria-valuenow={80}
                                        aria-valuemin={0} aria-valuemax={100} />
                                </li>
                                <li className="mb-3">
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="me-2"> <span className="avatar avatar-md avatar-rounded bg-warning-transparent"> <i
                                            className="ti ti-device-desktop"></i> </span> </div>
                                        <div className="flex-fill">
                                            <div className="d-flex align-items-center justify-content-between"> <span
                                                className="d-block fw-semibold">Desktop</span> <span
                                                    className="d-block text-warning">60%</span> </div>
                                        </div>
                                    </div>
                                    <ProgressBar now={60} variant="warning" className="progress progress-animate progress-xs progress-bar-striped mb-2 " role="progressbar" aria-valuenow={60}
                                        aria-valuemin={0} aria-valuemax={100} />
                                </li>
                                <li className="mb-3">
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="me-2"> <span className="avatar avatar-md avatar-rounded bg-primary-transparent"> <i
                                            className="ti ti-device-tablet"></i> </span> </div>
                                        <div className="flex-fill">
                                            <div className="d-flex align-items-center justify-content-between"> <span
                                                className="d-block fw-semibold">Tablet</span> <span
                                                    className="d-block text-primary">70%</span> </div>
                                        </div>
                                    </div>
                                    <ProgressBar variant="primary" now={70} className="progress progress-animate progress-xs progress-bar-striped mb-2" role="progressbar" aria-valuenow={70}
                                        aria-valuemin={0} aria-valuemax={100} />
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                </div>
            </Row>
            <Row>
                <Col xxl={3} sm={6}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body>
                            <div className="d-flex align-items-top justify-content-between mb-4">
                                <div className="flex-fill d-flex align-items-top">
                                    <div className="me-2">
                                        <span className="avatar avatar-md text-primary border bg-light"><i
                                            className="ti ti-users fs-18"></i></span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-medium fs-14 mb-0">Total Candidates</p>
                                        <p className="mb-0 text-muted fs-12 op-7">Magna sit elitr kasd consetetur.</p>
                                    </div>
                                </div>
                                <Dropdown>
                                    <Dropdown.Toggle as="a" href="#!" data-bs-toggle="dropdown"
                                        className="btn btn-icon btn-sm btn-light no-caret"><i className="ti ti-dots"></i></Dropdown.Toggle>
                                    <Dropdown.Menu as="ul">
                                        <Dropdown.Item as="li"><Link href="#!" scroll={false} className="">Action</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link href="#!" scroll={false} className="">Another Action</Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item as="li"><Link href="#!" scroll={false} className="">Something Else
                                            Here</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="d-flex align-items-center mb-0">
                                <p className="mb-0 fs-20 fw-medium">3,460</p>
                                <span className="text-muted ms-2"><i
                                    className="ti ti-trending-up align-middle text-success me-1 d-inline-block"></i>2.5%</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="flex-fill">
                                    <ProgressBar role="progressbar" aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} className="progress progress-xs" now={14} />
                                </div>
                                <div className="ms-3">
                                    <span className="fs-12 text-muted">14% Target</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} sm={6}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body>
                            <div className="d-flex align-items-top justify-content-between mb-4">
                                <div className="flex-fill d-flex align-items-top">
                                    <div className="me-2">
                                        <span className="avatar avatar-md text-secondary border bg-light"><i
                                            className="ti ti-user-circle fs-18"></i></span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-medium fs-14 mb-0">Users</p>
                                        <p className="mb-0 text-muted fs-12 op-7">Elitr at gubergren sit sed.</p>
                                    </div>
                                </div>
                                <Dropdown>
                                    <Dropdown.Toggle as="a" href="#!" data-bs-toggle="dropdown"
                                        className="btn btn-icon btn-sm btn-light no-caret"><i className="ti ti-dots"></i></Dropdown.Toggle>
                                    <Dropdown.Menu as="ul">
                                        <Dropdown.Item as="li"><Link href="#!" scroll={false} className="">Action</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link href="#!" scroll={false} className="">Another Action</Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item as="li"><Link href="#!" scroll={false} className="">Something Else
                                            Here</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="d-flex align-items-center mb-0">
                                <p className="mb-0 fs-20 fw-medium">7,539</p>
                                <span className="text-muted ms-2"><i
                                    className="ti ti-trending-up align-middle text-success me-1 d-inline-block"></i>3.1%</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="flex-fill">
                                    <div className="">
                                        <ProgressBar now={55} variant="secondary" className="progress progress-xs " role="progressbar"
                                            aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                </div>
                                <div className="ms-3">
                                    <span className="fs-12 text-muted">55% Target</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} sm={6}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body>
                            <div className="d-flex align-items-top justify-content-between mb-4">
                                <div className="flex-fill d-flex align-items-top">
                                    <div className="me-2">
                                        <span className="avatar avatar-md text-success border bg-light"><i
                                            className="ti ti-view-360 fs-18"></i></span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-medium fs-14 mb-0">Page Views</p>
                                        <p className="mb-0 text-muted fs-12 op-7">Sed duo ut sanctus gubergren.</p>
                                    </div>
                                </div>
                                <Dropdown>
                                    <Dropdown.Toggle as="a" href="#!" data-bs-toggle="dropdown"
                                        className="btn btn-icon btn-sm btn-light no-caret"><i className="ti ti-dots"></i></Dropdown.Toggle>
                                    <Dropdown.Menu as="ul">
                                        <Dropdown.Item as="li"><Link href="#!" scroll={false} className="">Action</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link href="#!" scroll={false} className="">Another Action</Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item as="li"><Link href="#!" scroll={false} className="">Something Else
                                            Here</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="d-flex align-items-center mb-0">
                                <p className="mb-0 fs-20 fw-medium">13,693</p>
                                <span className="text-muted ms-2"><i
                                    className="ti ti-trending-up align-middle text-success me-1 d-inline-block"></i>5.4%</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="flex-fill">
                                    <ProgressBar now={24} variant="success" className="progress progress-xs" role="progressbar"
                                        aria-valuenow={24} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <div className="ms-3">
                                    <span className="fs-12 text-muted">24% Target</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} sm={6}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body>
                            <div className="d-flex align-items-top justify-content-between mb-4">
                                <div className="flex-fill d-flex align-items-top">
                                    <div className="me-2">
                                        <span className="avatar avatar-md text-indigo border bg-light"><i
                                            className="ti ti-view-360 fs-18"></i></span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-medium fs-14 mb-0">Total Subscriptions</p>
                                        <p className="mb-0 text-muted fs-12 op-7">Invidunt magna voluptua.</p>
                                    </div>
                                </div>
                                <Dropdown>
                                    <Dropdown.Toggle as="a" href="#!" data-bs-toggle="dropdown"
                                        className="btn btn-icon btn-sm btn-light no-caret"><i className="ti ti-dots"></i></Dropdown.Toggle>
                                    <Dropdown.Menu as="ul">
                                        <Dropdown.Item as="li"><Link href="#!" scroll={false} className="">Action</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link href="#!" scroll={false} className="">Another Action</Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item as="li"><Link href="#!" scroll={false} className="">Something Else
                                            Here</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="d-flex align-items-center mb-0">
                                <p className="mb-0 fs-20 fw-medium">4,116</p>
                                <span className="text-muted ms-2"><i
                                    className="ti ti-trending-down align-middle text-danger me-1 d-inline-block"></i>3.2%</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="flex-fill">
                                    <ProgressBar now={67} variant="danger" className="progress progress-xs" role="progressbar"
                                        aria-valuenow={67} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <div className="ms-3">
                                    <span className="fs-12 text-muted">67% Target</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xxl={5}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="card-header pb-1">
                            <div className="card-title">
                                Users By Country
                            </div>
                        </div>
                        <div id="users-map" className="users-country-map">
                            <WorldMapCom/>
                        </div>
                        <Card.Body>
                            <div className="row mx-0">
                                <Col xl={7}>
                                    <ul className="list-group">
                                        <li className="list-group-item fs-13">
                                            <div
                                                className="d-flex flex-wrap align-items-center justify-content-between">
                                                <div><i
                                                    className="ri-checkbox-blank-circle-fill text-success fs-8 me-1 align-middle d-inline-block"></i>Russia
                                                </div>
                                                <div>25,350</div>
                                                <div className="text-success"><i
                                                    className="ri-arrow-up-s-line align-middle me-1 d-inline-block"></i>0.8%
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item fs-13">
                                            <div
                                                className="d-flex flex-wrap align-items-center justify-content-between">
                                                <div><i
                                                    className="ri-checkbox-blank-circle-fill text-primary fs-8 me-1 align-middle d-inline-block"></i>Brazil
                                                </div>
                                                <div>1,290</div>
                                                <div className="text-success"><i
                                                    className="ri-arrow-up-s-line align-middle me-1 d-inline-block"></i>2.90%
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item fs-13">
                                            <div
                                                className="d-flex flex-wrap align-items-center justify-content-between">
                                                <div><i
                                                    className="ri-checkbox-blank-circle-fill text-danger fs-8 me-1 align-middle d-inline-block"></i>Canada
                                                </div>
                                                <div>12,150</div>
                                                <div className="text-success"><i
                                                    className="ri-arrow-up-s-line align-middle me-1 d-inline-block"></i>9.05%
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </Col>
                                <div className="col-xl-5 bg-primary-transparent mt-3 mt-xl-0">
                                    <div className="p-3">
                                        <div className="ms-auto fs-11"></div>
                                        <div className="d-flex align-items-center flex-wrap">
                                            <span className="avatar avatar-xs avatar-rounded lh-1 me-2 bg-secondary flex-shrink-0">
                                                <i className="ri-user-line"></i>
                                            </span>
                                            Total Users
                                            <button className="btn btn-sm btn-icon ms-auto bg-secondary-transparent text-secondary transform-arrow border-0"><i className="ti ti-chevron-right"></i></button>
                                        </div>
                                        <div className="mt-3">
                                            <p className="fs-18 mb-0 text-primary fw-medium">4,25,510</p>
                                            <span className="text-muted fs-12">As compared to last Year</span>
                                            <span className="text-success fs-13">5.3%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={7}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Recent Tasks
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle as="a" href="#!" className="p-2 fs-12 text-muted no-caret"
                                    data-bs-toggle="dropdown">
                                    View All<i className="ri-arrow-down-s-line align-middle ms-1"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="" role="menu" as="ul">
                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Download</Link></Dropdown.Item>
                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Import</Link></Dropdown.Item>
                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Export</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <table className="table text-nowrap table-bordered">
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Title</th>
                                            <th>Assigned To</th>
                                            <th>Progress</th>
                                            <th>Status</th>
                                            <th>Due Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>01</td>
                                            <td>Redesign E-commerce Pages.</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/10.jpg" alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-xs bg-primary avatar-rounded text-fixed-black"
                                                        href="#!" scroll={false}>
                                                        +2
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <ProgressBar now={60} className="progress progress-xs" animated striped
                                                />
                                            </td>
                                            <td>
                                                <span className="badge bg-primary-transparent">In Progress</span>
                                            </td>
                                            <td>
                                                17-04-2023
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>02</td>
                                            <td>Multipurpose Dashboard Template</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/6.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="">
                                                    <ProgressBar className="progress progress-xs" striped animated
                                                        role="progressbar" aria-valuenow={0} aria-valuemin={0}
                                                        aria-valuemax={100} />
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-warning-transparent">Pending</span>
                                            </td>
                                            <td>
                                                14-05-2023
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>03</td>
                                            <td>Documentation Project</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/4.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/15.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/11.jpg" alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-xs bg-primary avatar-rounded text-fixed-black"
                                                        href="#!" scroll={false}>
                                                        +1
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <ProgressBar now={100} className="progress progress-xs" striped animated
                                                    role="progressbar" aria-valuenow={10} aria-valuemin={0}
                                                    aria-valuemax={100} />
                                            </td>
                                            <td>
                                                <span className="badge bg-success-transparent">Completed</span>
                                            </td>
                                            <td>
                                                20-04-2023
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>04</td>
                                            <td>HR Management Template Design</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/5.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/12.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/13.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <ProgressBar now={50} className="progress progress-xs" animated striped
                                                    role="progressbar" aria-valuenow={50} aria-valuemin={0}
                                                    aria-valuemax={100} />
                                            </td>
                                            <td>
                                                <span className="badge bg-primary-transparent">In Progress</span>
                                            </td>
                                            <td>
                                                29-05-2023
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>05</td>
                                            <td>Developing Backend</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/1.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/9.jpg" alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-xs bg-primary avatar-rounded text-fixed-black"
                                                        href="#!" scroll={false}>
                                                        +3
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <ProgressBar now={50} className="progress progress-xs" animated striped
                                                    role="progressbar" aria-valuenow={50} aria-valuemin={0}
                                                    aria-valuemax={100} />
                                            </td>
                                            <td>
                                                <span className="badge bg-primary-transparent">In Progress</span>
                                            </td>
                                            <td>
                                                25-05-2023
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>06</td>
                                            <td> Design New Dashboard Template</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/4.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/12.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/16.jpg" alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-xs bg-primary avatar-rounded text-fixed-black"
                                                        href="#!" scroll={false}>
                                                        +3
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <ProgressBar now={100} className="progress progress-xs" animated striped
                                                    role="progressbar" aria-valuenow={50} aria-valuemin={0}
                                                    aria-valuemax={100} />
                                            </td>
                                            <td>
                                                <span className="badge bg-success-transparent">Completed</span>
                                            </td>
                                            <td>
                                                04-05-2023
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>07</td>
                                            <td>Developing Backend</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/3.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/11.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/13.jpg" alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-xs bg-primary avatar-rounded text-fixed-black"
                                                        href="#!" scroll={false}>
                                                        +1
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <ProgressBar now={50} className="progress progress-xs" animated striped
                                                    role="progressbar" aria-valuenow={50} aria-valuemin={0}
                                                    aria-valuemax={100} />
                                            </td>
                                            <td>
                                                <span className="badge bg-primary-transparent">In Progress</span>
                                            </td>
                                            <td>
                                                24-06-2023
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <div className="col-xxl-6 col-lg-12">
                    <Row>
                        <Col xl={6}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body>
                                    <div className="d-flex flex-wrap align-items-top mb-2">
                                        <div className="flex-fill">
                                            <p className="mb-0 text-muted">Total Users</p>
                                        </div>
                                        <div className="ms-2">
                                            <span className="avatar avatar-md bg-info fs-18">
                                                <i className="bi bi-person-square"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <span className="fs-5 fw-medium">7,387</span>
                                    <span className="fs-12 text-success ms-1"><i
                                        className="ti ti-trending-up me-1 d-inline-block"></i>0.5%</span>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card className="custom-card card-bg-secondary text-fixed-black">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body>
                                    <div className="d-flex align-items-top mb-2">
                                        <div className="flex-fill">
                                            <p className="mb-0 op-7">Premium Users</p>
                                        </div>
                                        <div className="ms-2">
                                            <span className="avatar avatar-md bg-secondary shadow-sm fs-18">
                                                <i className="bi bi-person-square"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <span className="fs-5 fw-medium">7,387</span>
                                    <span className="fs-12 op-7 ms-1"><i
                                        className="ti ti-trending-up me-1 d-inline-block"></i>0.5%</span>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card className="custom-card overflow-hidden">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body className="p-0">
                                    <div className="p-3">
                                        <div className="d-flex align-items-center mb-2">
                                            <span className="avatar avatar-md bg-secondary me-2">
                                                <i className="bi bi-receipt fs-16"></i>
                                            </span>
                                            <p className="mb-0 flex-fill text-muted">Total Revenue</p>
                                        </div>
                                        <span className="fs-5 fw-medium">$13,655</span>
                                        <span className="fs-12 text-success ms-1"><i
                                            className="ti ti-trending-up me-1 d-inline-block"></i>3.5%</span>
                                    </div>
                                    <div id="totalRevenue1">
                                        <TotalRevenue1 />
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
                                <Card.Body>
                                    <div className="d-flex align-items-center mb-3">
                                        <span className="avatar avatar-md bg-success me-2">
                                            <i className="bi bi-people fs-16"></i>
                                        </span>
                                        <p className="mb-0 flex-fill text-muted">Active Members</p>
                                    </div>
                                    <span className="fs-5 fw-medium">$13,655</span>
                                    <span className="fs-12 text-success ms-1"><i
                                        className="ti ti-trending-up me-1 d-inline-block"></i>3.5%</span>
                                    <div className="fw-normal d-flex align-items-center mb-2 mt-3">
                                        <p className="mb-0 flex-fill">Active Candidates</p>
                                        <span>3,274</span>
                                    </div>
                                    <ProgressBar variant="success" now={25} className="progress progress-xs mb-4"
                                        role="progressbar" aria-valuenow={50} aria-valuemin={0}
                                        aria-valuemax={100} />
                                    <div className="fw-normal d-flex align-items-center mb-2">
                                        <p className="mb-0 flex-fill">Active Users</p>
                                        <span>8,726</span>
                                    </div>
                                    <ProgressBar variant="success" now={75} className="progress progress-xs mb-4"
                                        role="progressbar" aria-valuenow={50} aria-valuemin={0}
                                        aria-valuemax={100} />
                                </Card.Body>
                                <div className="card-footer text-center">
                                    <div className="d-grid">
                                        <Link href="#!" scroll={false} className="text-primary">View Details <i
                                            className="ti ti-external-link"></i></Link>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <Col xxl={3} xl={7} lg={7} className="">
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="flex-fill d-flex align-items-center">
                                            <div className="me-2">
                                                <span className="avatar rounded-2 text-bg-primary fs-20"><i
                                                    className="bi bi-people"></i></span>
                                            </div>
                                            <div className="flex-fill">
                                                <p className="mb-0 ">Premium Users</p>
                                                <span className="text-success fs-12">7 New</span>
                                            </div>
                                        </div>
                                        <div>
                                            <Link href="#!" scroll={false}
                                                className="btn btn-icon btn-primary-light rounded-pill btn-wave transform-arrow"
                                                data-bs-toggle="tooltip" aria-label="View All"><i
                                                    className="bi bi-chevron-right transform-arrow"></i></Link>
                                        </div>
                                    </div>
                                    <p className="mb-3 fs-5 fw-medium">1,845</p>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="avatar-list-stacked">
                                            <Link href="#!" scroll={false}
                                                className="avatar avatar-sm rounded-circle overflow-hidden"
                                                data-bs-toggle="tooltip" aria-label="Mis x matched"><img
                                                    src="../../assets/images/faces/2.jpg" alt="img" className="w-100" /></Link>
                                            <Link href="#!" scroll={false}
                                                className="avatar avatar-sm rounded-circle overflow-hidden"
                                                data-bs-toggle="tooltip" aria-label="Barbel Bob"><img
                                                    src="../../assets/images/faces/12.jpg" alt="img" className="w-100" /></Link>
                                            <Link href="#!" scroll={false}
                                                className="avatar avatar-sm rounded-circle overflow-hidden"
                                                data-bs-toggle="tooltip" aria-label="Phan Rel"><img
                                                    src="../../assets/images/faces/20.jpg" alt="img" className="w-100" /></Link>
                                            <Link href="#!" scroll={false}
                                                className="avatar avatar-sm rounded-circle overflow-hidden bg-primary text-fixed-black"
                                                data-bs-toggle="tooltip">+4</Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-fill">
                                            <p className="mb-1 fs-5 fw-medium text-default">1,773</p>
                                            <p className="mb-0 text-muted">Active Members</p>
                                            <p className="mb-0 fs-11"><Link href="#!" scroll={false}
                                                className="text-success text-decoration-underline">View All</Link></p>
                                        </div>
                                        <div className="ms-2">
                                            <span className="avatar text-bg-info fs-20"><i
                                                className="bi bi-people-fill"></i></span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-fill">
                                            <p className="mb-1 fs-5 fw-medium text-default">116</p>
                                            <p className="mb-0 text-muted">Registrations</p>
                                            <p className="mb-0 fs-11"><Link href="#!" scroll={false}
                                                className="text-success text-decoration-underline">View All</Link></p>
                                        </div>
                                        <div className="ms-2">
                                            <span className="avatar text-bg-success fs-20"><i
                                                className="bi bi-file-earmark-text"></i></span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={3} xl={5} lg={5} className="">
                    <Card className="custom-card">
                        <div className="card-header border-bottom text-white bg-gradient p-4 custom-profile-widget">
                            <div className="avatar avatar-xl avatar-rounded">
                                <img src="../../assets/images/faces/11.jpg" alt="" />
                            </div>
                        </div>
                        <Card.Body className="text-center mt-4">
                            <p className="mb-0 mt-1 fs-18 fw-semibold">
                                Robert Samuel <i className="ti ti-circle-check text-success"></i></p>
                            <small className="mb-1">Employee</small>
                            <div className="fs-12">robertsamuel4584@gmail.com</div>
                            <div className="btn-list mt-4">
                                <div className="btn btn-sm btn-outline-warning"><i className="ti ti-user-check me-2"></i>Follow</div>
                                <div className="btn btn-sm btn-outline-info"><i className="ti ti-message-2 me-2"></i>Message</div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card card-bg-warning">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div
                                    className="card-header justify-content-between border-bottom-0 pb-2 align-items-center">
                                    <div className="card-title text-fixed-white">
                                        Premium Users
                                    </div>
                                    <div>
                                        <button
                                            className="btn btn-sm btn-icon text-bg-warning transform-arrow border-0"><i
                                                className="ti ti-chevron-right"></i></button>
                                    </div>
                                </div>
                                <Card.Body>
                                    <div className="d-flex flex-wrap align-items-top">
                                        <div className="flex-fill overflow-hidden">
                                            <p className="mb-2 lh-1 fs-5 fw-medium">7,387</p>
                                            <p className="mb-0 fs-12 text-fixed-white op-7">
                                                <span><i className="bi bi-caret-up-fill"></i> 2.3%</span>
                                                <span className="op-8 fw-medium ms-1">From Last Month</span>
                                            </p>
                                        </div>
                                        <div>
                                            <span className="avatar avatar-sm bg-success avatar-rounded"><i
                                                className="bi bi-people-fill"></i></span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xxl={2} md={4} sm={6} className="">
                    <Card className="custom-card border border-primary bg-primary-transparent">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body>
                            <div className="text-center">
                                <span className="avatar avatar-md bg-primary shadow-sm mb-2">
                                    <i className="ri-briefcase-2-line fs-16"></i>
                                </span>
                                <p className="fs-14 fw-medium mb-2">Total Sales</p>
                                <div className="d-flex align-items-center justify-content-center flex-wrap">
                                    <h5 className="mb-0 fw-medium">15,800</h5>
                                    <span className="badge bg-success-transparent rounded-pill ms-1">+25.8%</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={2} md={4} sm={6} className="">
                    <Card className="custom-card border border-secondary bg-secondary-transparent">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body>
                            <div className="text-center">
                                <span className="avatar avatar-md bg-secondary shadow-sm mb-2">
                                    <i className="ri-bill-line fs-16"></i>
                                </span>
                                <p className="fs-14 fw-medium mb-2">Total Tax</p>
                                <div className="d-flex align-items-center justify-content-center flex-wrap">
                                    <h5 className="mb-0 fw-medium">$12,650</h5>
                                    <span className="badge bg-success-transparent rounded-pill ms-1">+12.2%</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={2} md={4} sm={6} className="">
                    <Card className="custom-card border border-info bg-info-transparent">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body>
                            <div className="text-center">
                                <span className="avatar avatar-md bg-info shadow-sm mb-2">
                                    <i className="ri-line-chart-line fs-16"></i>
                                </span>
                                <p className="fs-14 fw-medium mb-2">Total Expenses</p>
                                <div className="d-flex align-items-center justify-content-center flex-wrap">
                                    <h5 className="mb-0 fw-medium">$7,566</h5>
                                    <span className="badge bg-danger-transparent rounded-pill ms-1">-3.21%</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={2} md={4} sm={6} className="">
                    <Card className="custom-card border border-warning bg-warning-transparent">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body>
                            <div className="text-center">
                                <span className="avatar avatar-md bg-warning shadow-sm mb-2">
                                    <i className="ri-money-dollar-box-line fs-16"></i>
                                </span>
                                <p className="fs-14 fw-medium mb-2">Sales Profit</p>
                                <div className="d-flex align-items-center justify-content-center flex-wrap">
                                    <h5 className="mb-0 fw-medium">$7,474</h5>
                                    <span className="badge bg-success-transparent rounded-pill ms-1">+36.03%</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={2} md={4} sm={6} className="">
                    <Card className="custom-card border border-danger bg-danger-transparent">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body>
                            <div className="text-center">
                                <span className="avatar avatar-md bg-danger shadow-sm mb-2">
                                    <i className="ri-profile-line fs-16"></i>
                                </span>
                                <p className="fs-14 fw-medium mb-2">Opex Ratio</p>
                                <div className="d-flex align-items-center justify-content-center flex-wrap">
                                    <h5 className="mb-0 fw-medium">32%</h5>
                                    <span className="badge bg-success-transparent rounded-pill ms-1">+0.89%</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={2} md={4} sm={6} className="">
                    <Card className="custom-card border border-success bg-success-transparent">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body>
                            <div className="text-center">
                                <span className="avatar avatar-md bg-success shadow-sm mb-2">
                                    <i className="ri-wallet-2-line fs-16"></i>
                                </span>
                                <p className="fs-14 fw-medium mb-2">Total Income</p>
                                <div className="d-flex align-items-center justify-content-center flex-wrap">
                                    <h5 className="mb-0 fw-medium">$14,800</h5>
                                    <span className="badge bg-success-transparent rounded-pill ms-1">+7.45%</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xxl={4} xl={6} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Upcoming Events
                            </div>
                            <div>
                                <Button variant="" className="btn btn-sm btn-primary-light">View All</Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container defaultActiveKey="mon">
                                <Nav className="nav-style-1 nav-pills mb-4 nav-justified" role="tablist">
                                    <Nav.Link eventKey="mon" className="px-2" data-bs-toggle="tab" role="tab" aria-current="page"
                                        href="#mon" aria-selected="false" tabIndex={-1}>
                                        <span className="d-block mb-1 fw-medium">09</span>
                                        <span className="d-block mb-0 fw-medium op-7 fs-12">Mon</span>
                                    </Nav.Link>

                                    <Nav.Link eventKey="tue" className="px-2" data-bs-toggle="tab" role="tab" href="#tue"
                                        aria-selected="false" tabIndex={-1}>
                                        <span className="d-block mb-1 fw-medium">10</span>
                                        <span className="d-block mb-0 fw-medium op-7 fs-12">Tue</span>
                                    </Nav.Link>

                                    <Nav.Link eventKey="wed" className="px-2" data-bs-toggle="tab" role="tab" href="#wed">
                                        <span className="d-block mb-1 fw-medium">11</span>
                                        <span className="d-block mb-0 fw-medium op-7 fs-12">Wed</span>
                                    </Nav.Link>

                                    <Nav.Link eventKey="thu" className="px-2" data-bs-toggle="tab" role="tab" href="#thu"
                                        aria-selected="true">
                                        <span className="d-block mb-1 fw-medium">12</span>
                                        <span className="d-block mb-0 fw-medium op-7 fs-12">Thu</span>
                                    </Nav.Link>

                                    <Nav.Link eventKey="fri" className="px-2" data-bs-toggle="tab" role="tab" href="#fri"
                                        aria-selected="true">
                                        <span className="d-block mb-1 fw-medium">13</span>
                                        <span className="d-block mb-0 fw-medium op-7 fs-12">Fri</span>
                                    </Nav.Link>

                                    <Nav.Link eventKey="sat" className="px-2" data-bs-toggle="tab" role="tab" href="#sat"
                                        aria-selected="true">
                                        <span className="d-block mb-1 fw-medium">14</span>
                                        <span className="d-block mb-0 fw-medium op-7 fs-12">Sat</span>
                                    </Nav.Link>

                                    <Nav.Link eventKey="sun" className="px-2" data-bs-toggle="tab" role="tab" href="#sun"
                                        aria-selected="true">
                                        <span className="d-block mb-1 fw-medium">15</span>
                                        <span className="d-block mb-0 fw-medium op-7 fs-12">Sun</span>
                                    </Nav.Link>

                                </Nav>
                                <Tab.Content className="pt-2 my-3">
                                    <Tab.Pane eventKey="mon" className="border-0 p-0" id="mon" role="tabpanel">
                                        <ul className="list-unstyled mb-0 upcoming-events-list">
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Meeting with client</p>
                                                        <p className="mb-0 text-muted">Video Conference</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i
                                                            className="ri-time-line align-middle me-1 d-inline-block "></i>9:00am
                                                            - 10:00am</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Lunch with team members</p>
                                                        <p className="mb-0 text-muted">Dolores Ait Labore Sit</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i
                                                            className="ri-time-line align-middle me-1 d-inline-block"></i>12:00pm
                                                            - 12:45am</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">General board meeting</p>
                                                        <p className="mb-0 text-muted">Golden PArk</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i
                                                            className="ri-time-line align-middle me-1 d-inline-block"></i>4:00pm
                                                            - 5:30pm</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Create New Registration Page</p>
                                                        <p className="mb-0 text-muted">2UA Project</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i
                                                            className="ri-time-line align-middle me-1 d-inline-block"></i>5:00pm
                                                            - 5:45pm</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tue" className="border-0 p-0" id="tue" role="tabpanel">
                                        <ul className="list-unstyled mb-0 upcoming-events-list">
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Meeting with client</p>
                                                        <p className="mb-0 text-muted">Video Conference</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i
                                                            className="ri-time-line align-middle me-1 d-inline-block"></i>9:00am
                                                            - 10:00am</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Lunch with team members</p>
                                                        <p className="mb-0 text-muted">Dolores Ait Labore Sit</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i
                                                            className="ri-time-line align-middle me-1 d-inline-block"></i>12:00pm
                                                            - 12:45am</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">General board meeting</p>
                                                        <p className="mb-0 text-muted">Golden PArk</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i
                                                            className="ri-time-line align-middle me-1 d-inline-block"></i>4:00pm
                                                            - 5:30pm</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Create New Registration Page</p>
                                                        <p className="mb-0 text-muted">2UA Project</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i
                                                            className="ri-time-line align-middle me-1 d-inline-block"></i>5:00pm
                                                            - 5:45pm</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="wed" className="border-0 p-0" id="wed" role="tabpanel">
                                        <ul className="list-unstyled mb-0 upcoming-events-list">
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Meeting with client</p>
                                                        <p className="mb-0 text-muted">Video Conference</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i
                                                            className="ri-time-line align-middle me-1 d-inline-block"></i>9:00am
                                                            - 10:00am</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Lunch with team members</p>
                                                        <p className="mb-0 text-muted">Dolores Ait Labore Sit</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i
                                                            className="ri-time-line align-middle me-1 d-inline-block"></i>12:00pm
                                                            - 12:45am</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">General board meeting</p>
                                                        <p className="mb-0 text-muted">Golden PArk</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i
                                                            className="ri-time-line align-middle me-1 d-inline-block"></i>4:00pm
                                                            - 5:30pm</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Create New Registration Page</p>
                                                        <p className="mb-0 text-muted">2UA Project</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i
                                                            className="ri-time-line align-middle me-1 d-inline-block"></i>5:00pm
                                                            - 5:45pm</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="thu" className="border-0 p-0" id="thu" role="tabpanel">
                                        <ul className="list-unstyled mb-0 upcoming-events-list">
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Meeting with client</p>
                                                        <p className="mb-0 text-muted">Video Conference</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i
                                                            className="ri-time-line align-middle me-1 d-inline-block"></i>9:00am
                                                            - 10:00am</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Lunch with team members</p>
                                                        <p className="mb-0 text-muted">Dolores Ait Labore Sit</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i
                                                            className="ri-time-line align-middle me-1 d-inline-block"></i>12:00pm
                                                            - 12:45am</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">General board meeting</p>
                                                        <p className="mb-0 text-muted">Golden PArk</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i
                                                            className="ri-time-line align-middle me-1 d-inline-block"></i>4:00pm
                                                            - 5:30pm</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Create New Registration Page</p>
                                                        <p className="mb-0 text-muted">2UA Project</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i
                                                            className="ri-time-line align-middle me-1 d-inline-block"></i>5:00pm
                                                            - 5:45pm</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fri" className="border-0 p-0" id="fri" role="tabpanel">
                                        <ul className="list-unstyled mb-0 upcoming-events-list">
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Meeting with client</p>
                                                        <p className="mb-0 text-muted">Video Conference</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i
                                                            className="ri-time-line align-middle me-1 d-inline-block"></i>9:00am
                                                            - 10:00am</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Lunch with team members</p>
                                                        <p className="mb-0 text-muted">Dolores Ait Labore Sit</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i
                                                            className="ri-time-line align-middle me-1 d-inline-block"></i>12:00pm
                                                            - 12:45am</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">General board meeting</p>
                                                        <p className="mb-0 text-muted">Golden PArk</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i
                                                            className="ri-time-line align-middle me-1 d-inline-block"></i>4:00pm
                                                            - 5:30pm</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Create New Registration Page</p>
                                                        <p className="mb-0 text-muted">2UA Project</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i
                                                            className="ri-time-line align-middle me-1 d-inline-block"></i>5:00pm
                                                            - 5:45pm</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="sat" className="border-0 p-0" id="sat" role="tabpanel">
                                        <ul className="list-unstyled mb-0 upcoming-events-list">
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Meeting with client</p>
                                                        <p className="mb-0 text-muted">Video Conference</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i
                                                            className="ri-time-line align-middle me-1 d-inline-block"></i>9:00am
                                                            - 10:00am</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Lunch with team members</p>
                                                        <p className="mb-0 text-muted">Dolores Ait Labore Sit</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i
                                                            className="ri-time-line align-middle me-1 d-inline-block"></i>12:00pm
                                                            - 12:45am</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">General board meeting</p>
                                                        <p className="mb-0 text-muted">Golden PArk</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i
                                                            className="ri-time-line align-middle me-1 d-inline-block"></i>4:00pm
                                                            - 5:30pm</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Create New Registration Page</p>
                                                        <p className="mb-0 text-muted">2UA Project</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i
                                                            className="ri-time-line align-middle me-1 d-inline-block"></i>5:00pm
                                                            - 5:45pm</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="sun" className="border-0 p-0" id="sun" role="tabpanel">
                                        <ul className="list-unstyled mb-0 upcoming-events-list">
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Meeting with client</p>
                                                        <p className="mb-0 text-muted">Video Conference</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i
                                                            className="ri-time-line align-middle me-1 d-inline-block"></i>9:00am
                                                            - 10:00am</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Lunch with team members</p>
                                                        <p className="mb-0 text-muted">Dolores Ait Labore Sit</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i
                                                            className="ri-time-line align-middle me-1 d-inline-block"></i>12:00pm
                                                            - 12:45am</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">General board meeting</p>
                                                        <p className="mb-0 text-muted">Golden PArk</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i
                                                            className="ri-time-line align-middle me-1 d-inline-block"></i>4:00pm
                                                            - 5:30pm</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Create New Registration Page</p>
                                                        <p className="mb-0 text-muted">2UA Project</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i
                                                            className="ri-time-line align-middle me-1 d-inline-block"></i>5:00pm
                                                            - 5:45pm</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Timeline
                            </div>
                            <div>
                                <button className="btn btn-sm btn-primary-light btn-wave">View All</button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-unstyled timeline-widget my-3">
                                <li className="timeline-widget-list">
                                    <div className="d-flex align-items-top">
                                        <div className="me-5 text-center">
                                            <span className="d-block fs-20 fw-medium">02</span>
                                            <span className="d-block fs-12 text-muted">Mon</span>
                                        </div>
                                        <div
                                            className="d-flex flex-wrap flex-fill align-items-center justify-content-between">
                                            <div>
                                                <p
                                                    className="mb-1 text-truncate timeline-widget-content text-wrap fs-14">
                                                    You have an announcement</p>
                                                <p className="mb-0 fs-12 lh-1 text-muted">10:00AM<span
                                                    className="badge bg-primary-transparent ms-2">Announcement</span>
                                                </p>
                                            </div>
                                            <Dropdown>
                                    <Dropdown.Toggle as="a" href="#!" data-bs-toggle="dropdown"
                                        className="btn btn-icon btn-sm btn-light no-caret"><i className="ti ti-dots"></i></Dropdown.Toggle>
                                    <Dropdown.Menu as="ul">
                                        <Dropdown.Item as="li"><Link href="#!" scroll={false} className="">Action</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link href="#!" scroll={false} className="">Another Action</Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item as="li"><Link href="#!" scroll={false} className="">Something Else
                                            Here</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-widget-list">
                                    <div className="d-flex align-items-top">
                                        <div className="me-5 text-center">
                                            <span className="d-block fs-20 fw-medium">15</span>
                                            <span className="d-block fs-12 text-muted">Sun</span>
                                        </div>
                                        <div
                                            className="d-flex flex-wrap flex-fill align-items-center justify-content-between">
                                            <div>
                                                <p
                                                    className="mb-1 text-truncate timeline-widget-content text-wrap fs-14">
                                                    National holiday - Vero Jayanti</p>
                                                <p className="mb-0 fs-12 lh-1 text-muted"><span
                                                    className="badge bg-warning-transparent">Holiday</span></p>
                                            </div>
                                            <Dropdown>
                                    <Dropdown.Toggle as="a" href="#!" data-bs-toggle="dropdown"
                                        className="btn btn-icon btn-sm btn-light no-caret"><i className="ti ti-dots"></i></Dropdown.Toggle>
                                    <Dropdown.Menu as="ul">
                                        <Dropdown.Item as="li"><Link href="#!" scroll={false} className="">Action</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link href="#!" scroll={false} className="">Another Action</Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item as="li"><Link href="#!" scroll={false} className="">Something Else
                                            Here</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-widget-list">
                                    <div className="d-flex align-items-top">
                                        <div className="me-5 text-center">
                                            <span className="d-block fs-20 fw-medium">23</span>
                                            <span className="d-block fs-12 text-muted">Mon</span>
                                        </div>
                                        <div
                                            className="d-flex flex-wrap flex-fill align-items-center justify-content-between">
                                            <div>
                                                <p
                                                    className="mb-1 text-truncate timeline-widget-content text-wrap fs-14">
                                                    John pup birthday - Team Member</p>
                                                <p className="mb-4 fs-12 lh-1 text-muted">09:00AM<span
                                                    className="badge bg-success-transparent ms-2">Birthday</span>
                                                </p>
                                                <p
                                                    className="mb-1 text-truncate timeline-widget-content text-wrap fs-14">
                                                    Amet sed no dolor kasd</p>
                                                <p className="mb-0 fs-12 lh-1 text-muted">04:00PM<span
                                                    className="badge bg-primary-transparent ms-2">Announcement</span>
                                                </p>
                                            </div>
                                            <Dropdown>
                                    <Dropdown.Toggle as="a" href="#!" data-bs-toggle="dropdown"
                                        className="btn btn-icon btn-sm btn-light no-caret"><i className="ti ti-dots"></i></Dropdown.Toggle>
                                    <Dropdown.Menu as="ul">
                                        <Dropdown.Item as="li"><Link href="#!" scroll={false} className="">Action</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link href="#!" scroll={false} className="">Another Action</Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item as="li"><Link href="#!" scroll={false} className="">Something Else
                                            Here</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-widget-list">
                                    <div className="d-flex align-items-top">
                                        <div className="me-5 text-center">
                                            <span className="d-block fs-20 fw-medium">31</span>
                                            <span className="d-block fs-12 text-muted">Tue</span>
                                        </div>
                                        <div
                                            className="d-flex flex-wrap flex-fill align-items-center justify-content-between">
                                            <div>
                                                <p
                                                    className="mb-1 text-truncate timeline-widget-content text-wrap fs-14">
                                                    National Holiday - Dolore Ipsum</p>
                                                <p className="mb-0 fs-12 lh-1 text-muted"><span
                                                    className="badge bg-warning-transparent">Holiday</span></p>
                                            </div>
                                            <Dropdown>
                                                <Dropdown.Toggle as="a" href="#!" className="p-2 fs-16 text-muted no-caret"
                                                    data-bs-toggle="dropdown">
                                                    <i className="fe fe-more-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu as="ul">
                                                    <Dropdown.Item as="li"><Link className=""
                                                        href="#!" scroll={false}>Action</Link></Dropdown.Item>
                                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Another
                                                        action</Link></Dropdown.Item>
                                                    <Dropdown.Item as="li"><Link className=""
                                                        href="#!" scroll={false}>Something else here</Link></Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <div className="col-xxl-4">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                Traffic Sources
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <table className="table table-bordered table-hover text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>Browser</th>
                                            <th>Sessions</th>
                                            <th>Views</th>
                                            <th>Traffic</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span
                                                        className="avatar avatar-rounded avatar-sm p-2 bg-primary me-2">
                                                        <i className="ri-google-fill fs-18 text-fixed-black"></i>
                                                    </span>
                                                    <div className="fw-medium">Google</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span><i
                                                    className="ri-arrow-up-s-fill me-1 text-success align-middle fs-18"></i>23,379</span>
                                            </td>
                                            <td>
                                                <span>16,890</span>
                                            </td>
                                            <td>
                                                <ProgressBar variant="primary" now={34} className="progress progress-xs"
                                                    role="progressbar" aria-valuenow={34} aria-valuemin={0}
                                                    aria-valuemax={100} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span
                                                        className="avatar avatar-rounded avatar-sm p-2 bg-primary me-2">
                                                        <i className="ri-safari-line fs-18 text-fixed-black"></i>
                                                    </span>
                                                    <div className="fw-medium">Safari</div>
                                                </div>

                                            </td>
                                            <td>
                                                <span><i
                                                    className="ri-arrow-up-s-fill me-1 text-success align-middle fs-18"></i>78,973</span>
                                            </td>
                                            <td>
                                                <span>29,906</span>
                                            </td>
                                            <td>
                                                <ProgressBar variant="primary" now={58} className="progress progress-xs"
                                                    role="progressbar" aria-valuenow={58} aria-valuemin={0}
                                                    aria-valuemax={100} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span
                                                        className="avatar avatar-rounded avatar-sm p-2 bg-primary me-2">
                                                        <i className="ri-opera-fill fs-18 text-fixed-black"></i>
                                                    </span>
                                                    <div className="fw-medium">Opera</div>
                                                </div>

                                            </td>
                                            <td>
                                                <span><i
                                                    className="ri-arrow-up-s-fill me-1 text-success align-middle fs-18"></i>12,457</span>
                                            </td>
                                            <td>
                                                <span>8,674</span>
                                            </td>
                                            <td>
                                                <ProgressBar variant="primary" now={62} className="progress progress-xs"
                                                    role="progressbar" aria-valuenow={62} aria-valuemin={0}
                                                    aria-valuemax={100} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span
                                                        className="avatar avatar-rounded avatar-sm p-2 bg-primary me-2">
                                                        <i className="ri-edge-fill fs-18 text-fixed-black"></i>
                                                    </span>
                                                    <div className="fw-medium">Edge</div>
                                                </div>

                                            </td>
                                            <td>
                                                <span><i
                                                    className="ri-arrow-up-s-fill me-1 text-success align-middle fs-18"></i>8,570</span>
                                            </td>
                                            <td>
                                                <span>4,980</span>
                                            </td>
                                            <td>
                                                <ProgressBar variant="primary" now={71} className="progress progress-xs"
                                                    role="progressbar" aria-valuenow={71} aria-valuemin={0}
                                                    aria-valuemax={100} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span
                                                        className="avatar avatar-rounded avatar-sm p-2 bg-primary me-2">
                                                        <i className="ri-firefox-fill fs-18 text-fixed-black"></i>
                                                    </span>
                                                    <div className="fw-medium">Firefox</div>
                                                </div>

                                            </td>
                                            <td>
                                                <span><i
                                                    className="ri-arrow-up-s-fill me-1 text-success align-middle fs-18"></i>6,135</span>
                                            </td>
                                            <td>
                                                <span>4,436</span>
                                            </td>
                                            <td>
                                                <ProgressBar variant="primary" now={48} className="progress progress-xs"
                                                    role="progressbar" aria-valuenow={48} aria-valuemin={0}
                                                    aria-valuemax={100} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span
                                                        className="avatar avatar-rounded avatar-sm p-2 bg-primary me-2">
                                                        <i className="ri-ubuntu-fill fs-18 text-fixed-black"></i>
                                                    </span>
                                                    <div className="fw-medium">Ubuntu</div>
                                                </div>

                                            </td>
                                            <td>
                                                <span><i
                                                    className="ri-arrow-up-s-fill me-1 text-success align-middle fs-18"></i>4,789</span>
                                            </td>
                                            <td>
                                                <span>2,447</span>
                                            </td>
                                            <td>
                                                <ProgressBar variant="primary" now={28} className="progress progress-xs"
                                                    role="progressbar" aria-valuenow={28} aria-valuemin={0}
                                                    aria-valuemax={100} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Row>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">Sessions By Device</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="sessionsByDevice">
                                <SessionsByDevice />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">Target Report</div>
                            <Dropdown className="ms-auto">
                                <Dropdown.Toggle as="a" href="#!" className="btn btn-sm btn-primary-light dropdown-toggle"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Details
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul">
                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Action</Link></Dropdown.Item>
                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Another action</Link></Dropdown.Item>
                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Something else here</Link>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body className="pb-3">
                            <div className="mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="float-end text-primary"
                                    fill="currentColor" width="36px" height="36px" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M11,9h4a1,1,0,0,0,0-2H13V6a1,1,0,0,0-2,0V7a3,3,0,0,0,0,6h2a1,1,0,0,1,0,2H9a1,1,0,0,0,0,2h2v1a1,1,0,0,0,2,0V17a3,3,0,0,0,0-6H11a1,1,0,0,1,0-2Zm1-8A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" />
                                </svg>
                                <p className="text-primary fw-500 mb-2">Revenue by week</p>
                                <h4 className="mb-2 fw-medium">$81,225.03</h4>
                                <span className="text-danger me-1 fs-14"> - 1.3%<i
                                    className="ri-arrow-down-s-fill align-middle ms-1"></i> </span>
                                <span className="text-muted fs-12">33% of target reached</span>
                            </div>
                            <div id="report">
                                <Report />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">Recent Applicants</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="views">
                                <Viewsdata />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Fragment>
    );
};

export default Widget;
