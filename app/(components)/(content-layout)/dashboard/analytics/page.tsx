"use client";
import { Analyticswebsite } from "@/shared/data/dashboard/chartdata";
import { RealtimeChart, Revenue, SessionSource, Userreport, Viewbysource, Visitors, Visitorsource } from "@/shared/data/dashboard/analyticdata";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";

const Analytics = () => {

    return (
        <Fragment>
            <Seo title={"Analytics"} />
            <Row>
                <Col xxl={6} xl={12} className="">
                    <Row>
                        <Col xxl={6} xl={6} lg={6} md={6} className="col-12">
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body>
                                    <div className="d-flex align-items-start justify-content-between">
                                        <div>
                                            <span className="d-block text-muted mb-3">Real Time Users</span>
                                            <h3 className="fw-semibold">16.87K</h3>
                                            <span className="d-block">Increased By <span className="text-success">0.2%</span> this month</span>
                                        </div>
                                        <div>
                                            <span className="avatar bg-primary-transparent svg-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><circle cx="12" cy="8" opacity=".3" r="2.1" /><path d="M12 14.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1z" opacity=".3" /><path d="M12 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6.1 5.1H5.9V17c0-.64 3.13-2.1 6.1-2.1s6.1 1.46 6.1 2.1v1.1zM12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6.1c1.16 0 2.1.94 2.1 2.1 0 1.16-.94 2.1-2.1 2.1S9.9 9.16 9.9 8c0-1.16.94-2.1 2.1-2.1z" /></svg>
                                            </span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={6} className="col-12">
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body>
                                    <div className="d-flex align-items-start justify-content-between">
                                        <div>
                                            <span className="d-block text-muted mb-3">Bounce rate</span>
                                            <h3 className="fw-semibold">84.32%</h3>
                                            <span className="d-block">Increased By <span className="text-success">4.15%</span> this month</span>
                                        </div>
                                        <div>
                                            <span className="avatar bg-primary-transparent svg-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><g><g><path d="M7.5,4C5.57,4,4,5.57,4,7.5S5.57,11,7.5,11S11,9.43,11,7.5S9.43,4,7.5,4z M7.5,9C6.67,9,6,8.33,6,7.5S6.67,6,7.5,6 S9,6.67,9,7.5S8.33,9,7.5,9z M16.5,13c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5S18.43,13,16.5,13z M16.5,18 c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5S17.33,18,16.5,18z M5.41,20L4,18.59L18.59,4L20,5.41L5.41,20z" /></g></g></g></svg>
                                            </span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={6} className="col-12">
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body>
                                    <div className="d-flex align-items-start justify-content-between">
                                        <div>
                                            <span className="d-block text-muted mb-3">Total Visitors</span>
                                            <h3 className="fw-semibold">18,382</h3>
                                            <span className="d-block">Decreased By <span className="text-danger">0.45%</span> this month</span>
                                        </div>
                                        <div>
                                            <span className="avatar bg-primary-transparent svg-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 6c-3.79 0-7.17 2.13-8.82 5.5C4.83 14.87 8.21 17 12 17s7.17-2.13 8.82-5.5C19.17 8.13 15.79 6 12 6zm0 10c-2.48 0-4.5-2.02-4.5-4.5S9.52 7 12 7s4.5 2.02 4.5 4.5S14.48 16 12 16z" opacity=".3" /><path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 13c-3.79 0-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6s7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17zm0-10c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7zm0 7c-1.38 0-2.5-1.12-2.5-2.5S10.62 9 12 9s2.5 1.12 2.5 2.5S13.38 14 12 14z" /></svg>
                                            </span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={6} className="col-12">
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body>
                                    <div className="d-flex align-items-start justify-content-between">
                                        <div>
                                            <span className="d-block text-muted mb-3">Avg Visit Duration</span>
                                            <h3 className="fw-semibold">2m 30s</h3>
                                            <span className="d-block">Increased By <span className="text-success">12.42%</span> this month</span>
                                        </div>
                                        <div>
                                            <span className="avatar bg-primary-transparent svg-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.25 12.15L11 13V7h1.5v5.25l4.5 2.67-.75 1.23z" opacity=".3" /><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg>
                                            </span>
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
                                <div className="card-header">
                                    <div className="card-title">
                                        NEW VS RETURNING USERS
                                    </div>
                                </div>
                                <Card.Body>
                                    <div id="users-report">
                                        <Userreport />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={6} xl={12} className="">
                    <Row>
                        <Col xl={6}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="card-header">
                                    <div className="card-title">
                                        WEBSITE TRAFFIC
                                    </div>
                                </div>
                                <Card.Body className=" p-0 pe-3">
                                    <div id="website-traffic">
                                        <Analyticswebsite />
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
                                <div className="card-header">
                                    <div className="card-title">VIEWS BY BROWSER</div>
                                </div>
                                <Card.Body>
                                    <div id="lead_source">
                                        <Viewbysource />
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
                                <div className="card-header">
                                    <div className="card-title">
                                        VISITORS BY SOURCE
                                    </div>
                                </div>
                                <Card.Body>
                                    <div id="visitors-source">
                                        <Visitorsource />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xxl={5}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="card-header">
                            <div className="card-title">REVENUE</div>
                        </div>
                        <Card.Body>
                            <div id="revenue">
                                <Revenue />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Card className="custom-card overflow-hidden">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="card-header">
                            <div className="card-title">BROWSER USAGE</div>
                        </div>
                        <Card.Body className=" px-0 pb-0">
                            <div className="table-responsive">
                                <Table className="table">
                                    <thead>
                                        <tr>
                                            <th>Browser</th>
                                            <th>Sessions</th>
                                            <th>Traffic</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-1">
                                                        <span className="avatar avatar-sm avatar-rounuded text-primary"><i className="ri-chrome-fill fs-18"></i></span>
                                                    </div>
                                                    <p className="mb-0">Chrome</p>
                                                </div>
                                            </td>
                                            <td>23,379<i className="bi bi-caret-up-fill ms-2 fs-11 text-success"></i></td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "78%" }} aria-valuenow={78} aria-valuemin={0} aria-valuemax={100}> </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-1">
                                                        <span className="avatar avatar-sm avatar-rounuded text-secondary"><i className="ri-safari-fill fs-18"></i></span>
                                                    </div>
                                                    <p className="mb-0">Safari</p>
                                                </div>
                                            </td>
                                            <td>20,937<i className="bi bi-caret-up-fill ms-2 fs-11 text-success"></i></td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "32%" }} aria-valuenow={32} aria-valuemin={0} aria-valuemax={100}> </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-1">
                                                        <span className="avatar avatar-sm avatar-rounuded text-warning"><i className="ri-opera-fill fs-18"></i></span>
                                                    </div>
                                                    <p className="mb-0">Opera</p>
                                                </div>
                                            </td>
                                            <td>20,848<i className="bi bi-caret-down-fill ms-2 fs-11 text-danger"></i></td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "21%" }} aria-valuenow={21} aria-valuemin={0} aria-valuemax={100}> </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-1">
                                                        <span className="avatar avatar-sm avatar-rounuded text-info"><i className="ri-firefox-fill fs-18"></i></span>
                                                    </div>
                                                    <p className="mb-0">Firefox</p>
                                                </div>
                                            </td>
                                            <td>18,120<i className="bi bi-caret-up-fill ms-2 fs-11 text-success"></i></td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "25%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}> </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-bottom-0">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-1">
                                                        <span className="avatar avatar-sm avatar-rounuded text-danger"><i className="ri-edge-fill fs-18"></i></span>
                                                    </div>
                                                    <p className="mb-0">Edge</p>
                                                </div>
                                            </td>
                                            <td className="border-bottom-0">11,120<i className="bi bi-caret-down-fill ms-2 fs-11 text-danger"></i></td>
                                            <td className="border-bottom-0">
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "35%" }} aria-valuenow={35} aria-valuemin={0} aria-valuemax={100}> </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
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
                        <div className="card-header">
                            <div className="card-title">
                                SESSIONS BY DEVICE
                            </div>
                        </div>
                        <Card.Body>
                            <div id="sessions-device">
                                <SessionSource />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="card-header">
                            <div className="card-title">
                                VISITORS BY CHANNEL
                            </div>
                        </div>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table text-nowrap table-striped table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                S.No
                                            </th>
                                            <th scope="col">Channel</th>
                                            <th scope="col">Sessions</th>
                                            <th scope="col">Bounce Rate</th>
                                            <th scope="col">Avg Session Duration</th>
                                            <th scope="col">Target Reached</th>
                                            <th scope="col">Pages/Session</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Visitors.map((idx) => (
                                            <tr key={Math.random()}>
                                                <td>
                                                    {idx.id}
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="lh-1">
                                                            <span className={`avatar avatar-sm avatar-rounded bg-${idx.color}-transparent`}>
                                                                <i className={`ri-${idx.icon}-line fs-15`}></i>
                                                            </span>
                                                        </div>
                                                        <div>{idx.data}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {idx.sessions}
                                                </td>
                                                <td>
                                                    {idx.bounce}
                                                </td>
                                                <td>
                                                    <span>{idx.avg}</span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-light text-default">{idx.target}</span>
                                                </td>
                                                <td>
                                                    <span>{idx.pages}</span>
                                                </td>
                                                <td>
                                                    <div className="hstack gap-2 fs-1">
                                                        <Link aria-label="anchor" href="#!" scroll={false} className="btn btn-icon btn-sm btn-primary-light btn-wave"><i className="ri-download-2-line"></i></Link>
                                                        <Link aria-label="anchor" href="#!" scroll={false} className="btn btn-icon btn-sm btn-success-light btn-wave"><i className="ri-edit-line"></i></Link>
                                                        <Link aria-label="anchor" href="#!" scroll={false} className="btn btn-icon btn-sm btn-danger-light btn-wave"><i className="ri-delete-bin-line"></i></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Analytics;
