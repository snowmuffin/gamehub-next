"use client";
import { ProjectOverview, Projectstimeline } from "@/shared/data/dashboard/projectsdata";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Row, Col, Dropdown, Button } from "react-bootstrap";

const Projects = () => {
    return (
        <Fragment>
            <Seo title={"Projects"} />
            <Row>
                <Col xxl={9} className="">
                    <Row>
                        <Col xl={3}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="top-right"></div>
                                <Card.Body>
                                    <div className="d-flex align-items-start justify-content-between mb-3">
                                        <span className="avatar bg-primary-transparent">
                                            <i className="ri-pause-circle-line fs-5"></i>
                                        </span>
                                        <Dropdown>
                                            <Dropdown.Toggle as="a" aria-label="anchor" href="#!" className="op-4 no-caret" data-bs-toggle="dropdown" aria-expanded="true">
                                                <i className="bi bi-grid text-primary"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu role="menu" data-popper-placement="bottom-start">
                                                <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Day</Link></Dropdown.Item>
                                                <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Week</Link></Dropdown.Item>
                                                <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Year</Link></Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <span className="d-block mb-1 fs-13">Total Time On Project</span>
                                    <h4 className="mb-0 fw-medium d-flex align-items-center justify-content-between">148:00h<span className="text-success fs-11 ms-auto">+0.67%<i className="ri-arrow-up-line"></i></span></h4>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={3}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="top-right"></div>
                                <Card.Body>
                                    <div className="d-flex align-items-start justify-content-between mb-3">
                                        <span className="avatar bg-primary-transparent">
                                            <i className="ri-checkbox-circle-line fs-5"></i>
                                        </span>
                                        <Dropdown>
                                            <Dropdown.Toggle as="a" aria-label="anchor" href="#!" className="op-4 no-caret" data-bs-toggle="dropdown" aria-expanded="true">
                                                <i className="bi bi-grid text-primary"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu role="menu" data-popper-placement="bottom-start">
                                                <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Day</Link></Dropdown.Item>
                                                <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Week</Link></Dropdown.Item>
                                                <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Year</Link></Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <span className="d-block mb-1 fs-13">Total Earnings</span>
                                    <h4 className="mb-0 fw-medium d-flex gap-1 align-items-center justify-content-between">$12,563.5<span className="text-danger fs-11 ms-auto">-0.22%<i className="ri-arrow-up-line"></i></span></h4>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={3}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="top-right"></div>
                                <Card.Body>
                                    <div className="d-flex align-items-start justify-content-between mb-3">
                                        <span className="avatar bg-primary-transparent">
                                            <i className="ri-timer-2-line fs-5"></i>
                                        </span>
                                        <Dropdown>
                                            <Dropdown.Toggle as="a" aria-label="anchor" href="#!" className="op-4 no-caret" data-bs-toggle="dropdown" aria-expanded="true">
                                                <i className="bi bi-grid text-primary"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu role="menu" data-popper-placement="bottom-start">
                                                <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Day</Link></Dropdown.Item>
                                                <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Week</Link></Dropdown.Item>
                                                <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Year</Link></Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <span className="d-block mb-1 fs-13">Cost</span>
                                    <h4 className="mb-0 fw-medium d-flex align-items-center justify-content-between">$6,156.38<span className="text-success fs-11 ms-auto">+1.03%<i className="ri-arrow-up-line"></i></span></h4>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={3}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="top-right"></div>
                                <Card.Body>
                                    <div className="d-flex align-items-start justify-content-between mb-3">
                                        <span className="avatar bg-primary-transparent">
                                            <i className="ri-error-warning-line fs-5"></i>
                                        </span>
                                        <Dropdown>
                                            <Dropdown.Toggle as="a" aria-label="anchor" href="#!" className="op-4 no-caret" data-bs-toggle="dropdown" aria-expanded="true">
                                                <i className="bi bi-grid text-primary"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu role="menu" data-popper-placement="bottom-start">
                                                <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Day</Link></Dropdown.Item>
                                                <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Week</Link></Dropdown.Item>
                                                <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Year</Link></Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <span className="d-block mb-1 fs-13">Productivity</span>
                                    <h4 className="mb-0 fw-medium d-flex align-items-center justify-content-between">95.5$<span className="text-success fs-11 ms-auto">+2.45%<i className="ri-arrow-up-line"></i></span></h4>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="top-right"></div>
                                <div className="card-header justify-content-between">
                                    <div className="card-title">
                                        Project Overview
                                    </div>
                                    <Dropdown>
                                        <Dropdown.Toggle as="a" aria-label="anchor" href="#!" className="op-4 no-caret" data-bs-toggle="dropdown" aria-expanded="true">
                                            <i className="bi bi-grid text-primary"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu role="menu" data-popper-placement="bottom-start">
                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Day</Link></Dropdown.Item>
                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Week</Link></Dropdown.Item>
                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Year</Link></Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <Card.Body>
                                    <div id="project-overview">
                                        <ProjectOverview />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={3}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="top-right"></div>
                                <Card.Header>
                                    <div className="card-title">
                                        Project Categories
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <div className="title-head mb-4">
                                        <div className="storage-percent">
                                            <div className="progress-stacked progress-xl mb-3 rounded-0">
                                                <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                                                <div className="progress-bar" role="progressbar" style={{ width: "15%" }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100}>15%</div>
                                                <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                                                <div className="progress-bar" role="progressbar" style={{ width: "35%" }} aria-valuenow={35} aria-valuemin={0} aria-valuemax={100}>35%</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="fs-13 mb-1">Total Number of Projects</div>
                                                <div className="fw-semibold fs-14 mb-1">18,643</div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="row list-unstyled mb-0 gy-3 project-categories-list">
                                        <Col xl={6}>
                                            <li className="mb-0 fs-13 me-2  d-inline-flex">UI Projects</li>
                                            <span className="text-success fw-semibold fs-12">
                                                <span className="">(4,934)</span>
                                            </span>
                                        </Col>
                                        <Col xl={6}>
                                            <li className="mb-0 fs-13 me-2 d-inline-flex">UX Projects</li>
                                            <span className="text-danger fw-semibold fs-12">
                                                <span className="">(2,790)</span>
                                            </span>
                                        </Col>
                                        <Col xl={6} as="li">
                                            <span className="mb-0 fs-13 me-2  d-inline-flex">Finance</span>
                                            <span className="text-success fw-semibold fs-12">
                                                <span className="">(4,200)</span>
                                            </span>
                                        </Col>
                                        <Col xl={6} as="li" className="mb-xl-0">
                                            <span className="mb-0 fs-13 me-2  d-inline-flex">Banking</span>
                                            <span className="text-success fw-semibold fs-12">
                                                <span className="">(7,242)</span>
                                            </span>
                                        </Col>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="top-right"></div>
                                <Card.Header>
                                    <div className="card-title">
                                        Recent Transactions
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <ul className="list-unstyled project-transactions-card">
                                        <li>
                                            <div className="d-flex align-items-top">
                                                <div className="me-3">
                                                    <span className="avatar avatar-md bg-primary-transparent fs-16"> S </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <span className="d-block fw-medium">Ayyan Cowall</span>
                                                    <span className="d-block text-muted fs-11">Feb 28,2024 - 12:54PM</span>
                                                </div>
                                                <div>
                                                    <h6 className="fw-semibold">$21,442</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-top">
                                                <div className="me-3">
                                                    <span className="avatar avatar-md bg-primary-transparent fs-16"> M </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <span className="d-block fw-medium">Aldous Cason</span>
                                                    <span className="d-block text-muted fs-11">Mar 28,2024 - 10:14AM</span>
                                                </div>
                                                <div>
                                                    <h6 className="fw-semibold">$8,789</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-top">
                                                <div className="me-3">
                                                    <span className="avatar avatar-md bg-primary-transparent fs-16"> G </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <span className="d-block fw-medium">Gabriel Shin</span>
                                                    <span className="d-block text-muted fs-11">Mar 16,2024 - 05:27PM</span>
                                                </div>
                                                <div>
                                                    <h6 className="fw-semibold">$13,677</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-top">
                                                <div className="me-3">
                                                    <span className="avatar avatar-md bg-primary-transparent fs-16"> Y </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <span className="d-block fw-medium">Yohasimi Nakiyaro</span>
                                                    <span className="d-block text-muted fs-11">Mar 19,2024 - 04:45PM</span>
                                                </div>
                                                <div>
                                                    <h6 className="fw-semibold">$3,543</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-top">
                                                <div className="me-3">
                                                    <span className="avatar avatar-md bg-primary-transparent fs-16"> B </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <span className="d-block fw-medium">Brenda Lynn</span>
                                                    <span className="d-block text-muted fs-11">Mar 10,2024 - 05:25PM</span>
                                                </div>
                                                <div>
                                                    <h6 className="fw-semibold">$7,890</h6>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <div className="mb-4 d-flex align-items-center justify-content-between">
                    <h6 className="fw-semibold mb-0">Ongoing Projects :</h6>
                    <div>
                        <button className="btn btn-sm btn-primary-light btn-wave waves-effect waves-light">View All</button>
                    </div>
                </div>
                <Col xxl={4}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <Card.Body>
                            <div className="d-flex gap-3 align-items-start mb-3">
                                <div>
                                    <span className="avatar avatar-md">
                                        <img src="../../assets/images/company-logos/2.png" alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <h6>Project Nebula<span className="badge bg-white-transparent ms-2">Opened Yesterday</span></h6>
                                    <div><span>28 Tasks</span><span className="m-2 text-primary fs-12">11 Nov 2024</span></div>
                                </div>
                                <div className="d-flex align-items-start lh-1">
                                    <div className="stars-main me-3"> <i className="ri-star-fill star"></i> </div>
                                    <Dropdown>
                                        <Dropdown.Toggle as="a" aria-label="anchor" href="#!" className="op-4 no-caret" data-bs-toggle="dropdown" aria-expanded="true">
                                            <i className="bi bi-grid text-primary"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-menu" role="menu" data-popper-placement="bottom-start">
                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-pencil-line me-1"></i>Edit</Link></Dropdown.Item>
                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-share-forward-line me-1"></i>Share</Link></Dropdown.Item>
                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-file-copy-2-line me-1"></i>Clone</Link></Dropdown.Item>
                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-delete-bin-line me-1"></i>Delete</Link></Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="d-flex align-items-start justify-content-between mb-3">
                                <div>
                                    <span className="d-block">Members</span>
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-xs">
                                            <img src="../../assets/images/faces/2.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-xs">
                                            <img src="../../assets/images/faces/8.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-xs">
                                            <img src="../../assets/images/faces/2.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-xs">
                                            <img src="../../assets/images/faces/10.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-xs">
                                            <img src="../../assets/images/faces/4.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-xs">
                                            <img src="../../assets/images/faces/13.jpg" alt="img" />
                                        </span>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <span className="d-block">Due date</span>
                                    <span className="d-block text-danger fw-semibold fs-13">24,Jan 2024</span>
                                </div>
                            </div>
                            <div>
                                <div className="d-flex align-items-center mb-1 justify-content-between">
                                    <span className="d-block">Project Progress</span>
                                    <span className="d-block fs-12">60%</span>
                                </div>
                                <div className="progress progress-xs" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "60%" }}></div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <Card.Body>
                            <div className="d-flex gap-3 align-items-start mb-3">
                                <div>
                                    <span className="avatar avatar-md">
                                        <img src="../../assets/images/company-logos/7.png" alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <h6>Web Designing <span className="badge bg-white-transparent ms-2">Opened 2 Days ago</span></h6>
                                    <div><span>16 Tasks</span><span className="m-2 text-primary fs-12">12 May 2024</span></div>
                                </div>
                                <div className="d-flex align-items-start lh-1">
                                    <div className="stars-main me-3"> <i className="ri-star-fill star"></i> </div>
                                    <Dropdown>
                                        <Dropdown.Toggle as="a" aria-label="anchor" href="#!" className="op-4 no-caret" data-bs-toggle="dropdown" aria-expanded="true">
                                            <i className="bi bi-grid text-primary"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-menu" role="menu" data-popper-placement="bottom-start">
                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-pencil-line me-1"></i>Edit</Link></Dropdown.Item>
                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-share-forward-line me-1"></i>Share</Link></Dropdown.Item>
                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-file-copy-2-line me-1"></i>Clone</Link></Dropdown.Item>
                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-delete-bin-line me-1"></i>Delete</Link></Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="d-flex align-items-start justify-content-between mb-3">
                                <div>
                                    <span className="d-block">Members</span>
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-xs">
                                            <img src="../../assets/images/faces/5.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-xs">
                                            <img src="../../assets/images/faces/10.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-xs">
                                            <img src="../../assets/images/faces/12.jpg" alt="img" />
                                        </span>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <span className="d-block">Due date</span>
                                    <span className="d-block text-danger fw-semibold fs-13">28,May 2024</span>
                                </div>
                            </div>
                            <div>
                                <div className="d-flex align-items-center mb-1 justify-content-between">
                                    <span className="d-block">Project Progress</span>
                                    <span className="d-block fs-12">39%</span>
                                </div>
                                <div className="progress progress-xs" role="progressbar" aria-valuenow={39} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "39%" }}></div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <Card.Body>
                            <div className="d-flex gap-3 align-items-start mb-3">
                                <div>
                                    <span className="avatar avatar-md">
                                        <img src="../../assets/images/company-logos/10.png" alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <h6>Operation Celestial<span className="badge bg-white-transparent ms-2">Opened Today</span></h6>
                                    <div><span>28 Tasks</span><span className="m-2 text-primary fs-12">16 Feb 2024</span></div>
                                </div>
                                <div className="d-flex align-items-start lh-1">
                                    <div className="stars-main me-3"> <i className="ri-star-fill star"></i> </div>
                                    <Dropdown>
                                        <Dropdown.Toggle as="a" aria-label="anchor" href="#!" className="op-4 no-caret" data-bs-toggle="dropdown" aria-expanded="true">
                                            <i className="bi bi-grid text-primary"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-menu" role="menu" data-popper-placement="bottom-start">
                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-pencil-line me-1"></i>Edit</Link></Dropdown.Item>
                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-share-forward-line me-1"></i>Share</Link></Dropdown.Item>
                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-file-copy-2-line me-1"></i>Clone</Link></Dropdown.Item>
                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-delete-bin-line me-1"></i>Delete</Link></Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="d-flex align-items-start justify-content-between mb-3">
                                <div>
                                    <span className="d-block">Members</span>
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-xs">
                                            <img src="../../assets/images/faces/5.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-xs">
                                            <img src="../../assets/images/faces/7.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-xs">
                                            <img src="../../assets/images/faces/14.jpg" alt="img" />
                                        </span>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <span className="d-block">Due date</span>
                                    <span className="d-block text-danger fw-semibold fs-13">30,Feb 2024</span>
                                </div>
                            </div>
                            <div>
                                <div className="d-flex align-items-center mb-1 justify-content-between">
                                    <span className="d-block">Project Progress</span>
                                    <span className="d-block fs-12">68%</span>
                                </div>
                                <div className="progress progress-xs" role="progressbar" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "68%" }}></div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xxl={6}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                Project Status
                            </div>
                        </Card.Header>
                        <Card.Body className="pb-4">
                            <div className="table-responsive">
                                <table className="table text-nowrap table-borderless table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col"><input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></th>
                                            <th scope="col">Project</th>
                                            <th scope="col">Team</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Work Progress</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row"><input className="form-check-input" type="checkbox" id="checkboxNoLabel1" value="" aria-label="..." /></th>
                                            <td>
                                                Project Xplorer
                                            </td>
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
                                                </div>
                                            </td>
                                            <td><span className="badge bg-primary-transparent">On Hold</span></td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "52%" }} aria-valuenow={52} aria-valuemin={0} aria-valuemax={100}>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-primary-light"><i className="ri-download-2-line"></i></Link>
                                                    <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-success-light"><i className="ri-edit-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><input className="form-check-input" type="checkbox" id="checkboxNoLabel2" value="" aria-label="..." /></th>
                                            <td>
                                                Operation Phoenix
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/1.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/5.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/11.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/15.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-primary-transparent">Under Review</span></td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "91%" }} aria-valuenow={91} aria-valuemin={0} aria-valuemax={100}>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-primary-light"><i className="ri-download-2-line"></i></Link>
                                                    <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-success-light"><i className="ri-edit-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><input className="form-check-input" type="checkbox" id="checkboxNoLabel3" value="" aria-label="..." /></th>
                                            <td>
                                                Quantum Quest
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/6.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/16.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-primary-transparent">Deployment</span></td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "45%" }} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100}>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-primary-light"><i className="ri-download-2-line"></i></Link>
                                                    <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-success-light"><i className="ri-edit-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><input className="form-check-input" type="checkbox" id="checkboxNoLabel13" value="" aria-label="..." /></th>
                                            <td>
                                                Project Zenith
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/3.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/10.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/14.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-primary-transparent">In Progress</span></td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "21%" }} aria-valuenow={21} aria-valuemin={0} aria-valuemax={100}>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-primary-light"><i className="ri-download-2-line"></i></Link>
                                                    <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-success-light"><i className="ri-edit-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><input className="form-check-input" type="checkbox" id="checkboxNoLabel14" value="" aria-label="..." /></th>
                                            <td>
                                                Horizon Nexus
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/1.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/11.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/15.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-primary-transparent">Not Started</span></td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "17%" }} aria-valuenow={17} aria-valuemin={0} aria-valuemax={100}>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-primary-light"><i className="ri-download-2-line"></i></Link>
                                                    <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-success-light"><i className="ri-edit-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><input className="form-check-input" type="checkbox" id="checkboxNoLabel15" value="" aria-label="..." /></th>
                                            <td>
                                                Nebula Nexus
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/4.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/12.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-primary-transparent">Cancelled</span></td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "35%" }} aria-valuenow={35} aria-valuemin={0} aria-valuemax={100}>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-primary-light"><i className="ri-download-2-line"></i></Link>
                                                    <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-success-light"><i className="ri-edit-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><input className="form-check-input" type="checkbox" id="checkboxNoLabel16" value="" aria-label="..." /></th>
                                            <td>
                                                Titan Frontier
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/12.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/6.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/9.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-primary-transparent">Under Review</span></td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "21%" }} aria-valuenow={21} aria-valuemin={0} aria-valuemax={100}>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-primary-light"><i className="ri-download-2-line"></i></Link>
                                                    <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-success-light"><i className="ri-edit-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Projects Timeline
                            </div>
                            <div className="btn-group flex-wrap">
                                <Button variant="" id="quarter-day" className="btn btn-primary-light btn-sm">Quarter Day</Button>
                                <Button variant="" id="half-day" className="btn btn-primary-light btn-sm">Half Day</Button>
                                <Button variant="" id="day" className="btn btn-primary-light btn-sm active">Day</Button>
                                <Button variant="" id="week" className="btn btn-primary-light btn-sm">Week</Button>
                                <Button variant="" id="month" className="btn btn-primary-light btn-sm">Month</Button>
                                <Button variant="" id="yearID" className="btn btn-primary-light btn-sm">Year</Button>
                            </div>
                        </div>
                        <Card.Body>
                            <Projectstimeline />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Projects;
