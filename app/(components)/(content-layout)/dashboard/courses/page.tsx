"use client";
import { CoursesData, Coursesprogress, Learninganalysis, Payouts, Topcourse } from "@/shared/data/dashboard/coursedata";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Dropdown, Row, Col, Card } from "react-bootstrap";

const Courses = () => {
    return (
        <Fragment>
            <Seo title={"Courses"} />
            <Row>
                <Col xl={3} md={6}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <Link href="#!" scroll={false} className="me-3 d-block">
                                    <span className="avatar bg-primary-transparent"><i className="ti ti-wallet fs-18"></i></span>
                                </Link>
                                <div className="flex-fill">
                                    <h4 className="mb-0">$112,253</h4>
                                    <div className="d-flex justify-content-between">
                                        <span className="fs-12">YTD Earning</span>
                                        <span className="text-success fs-12"><i className="ti ti-trending-up align-middle me-1 d-inline-block"></i>+1.45%</span>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} md={6}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <Link href="#!" scroll={false} className="me-3 d-block">
                                    <span className="avatar bg-primary-transparent"><i className="ti ti-users fs-18"></i></span>
                                </Link>
                                <div className="flex-fill">
                                    <h4 className="mb-0">14,124</h4>
                                    <div className="d-flex justify-content-between">
                                        <span className="fs-12">Total Students</span>
                                        <span className="text-danger fw-semibold fs-12"><i className="ti ti-trending-down align-middle me-1 d-inline-block"></i>-0.02%</span>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card></Col>
                <Col xl={3} md={6}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <Link href="#!" scroll={false} className="me-3 d-block">
                                    <span className="avatar bg-primary-transparent"><i className="ti ti-wallet fs-18"></i></span>
                                </Link>
                                <div className="flex-fill">
                                    <h4 className="mb-0">248</h4>
                                    <div className="d-flex justify-content-between">
                                        <span className="fs-12">Total Instructors</span>
                                        <span className="text-success fs-12"><i className="ti ti-trending-up align-middle me-1 d-inline-block"></i>+1.14%</span>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card></Col>
                <Col xl={3} md={6}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <Link href="#!" scroll={false} className="me-3 d-block">
                                    <span className="avatar bg-primary-transparent"><i className="ti ti-wallet fs-18"></i></span>
                                </Link>
                                <div className="flex-fill">
                                    <h4 className="mb-0">4,351</h4>
                                    <div className="d-flex justify-content-between">
                                        <span className="fs-12">Total Courses</span>
                                        <span className="text-success fs-12"><i className="ti ti-trending-up align-middle me-1 d-inline-block"></i>+0.036%</span>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card></Col>
            </Row>
            <Row>
                <Col xxl={5}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <div className="card-header">
                            <div className="card-title">
                                Learning Analysis
                            </div>
                        </div>
                        <Card.Body>
                            <div id="learning-analysis">
                                <Learninganalysis />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} xxl={4} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Top Courses
                            </div>
                            <button className="btn btn-sm btn-primary-light">View All</button>
                        </div>
                        <Card.Body>
                            <ul className="list-unstyled courses-list">
                                <li>
                                    <div className="d-flex flex-wrap flex-lg-nowrap align-items-start">
                                        <span className="avatar p-2 bg-primary-transparent me-2 flex-shrink-0">
                                            <img src="../../assets/images/media/apps/figma.png" className="img-fluid" alt="..." />
                                        </span>
                                        <div className="flex-fill ms-1">
                                            <p className="mb-0 top-course-name fs-14">
                                                Prototyping and Collaborative
                                            </p>
                                            <span className="text-muted fs-11">24 Hours</span>
                                        </div>
                                        <div>
                                            <button className="btn btn-icon btn-primary-light btn-sm rtl-rotate"><i className="ri-arrow-right-s-line"></i></button>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex flex-wrap flex-lg-nowrap align-items-start">
                                        <span className="avatar me-2 flex-shrink-0">
                                            <img src="../../assets/images/media/media-22.jpg" className="img-fluid" alt="..." />
                                        </span>
                                        <div className="flex-fill ms-1">
                                            <p className="mb-0 top-course-name fs-14">
                                                Painting Pixels with Purpose
                                            </p>
                                            <span className="text-muted fs-11">48 Hours</span>
                                        </div>
                                        <div>
                                            <button className="btn btn-icon btn-primary-light btn-sm rtl-rotate"><i className="ri-arrow-right-s-line"></i></button>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex flex-wrap flex-lg-nowrap align-items-start">
                                        <span className="avatar me-2 flex-shrink-0">
                                            <img src="../../assets/images/media/media-41.jpg" className="img-fluid" alt="..." />
                                        </span>
                                        <div className="flex-fill ms-1">
                                            <p className="mb-0 top-course-name fs-14">
                                                Enchanting Search Engines with Your Web Designs
                                            </p>
                                            <span className="text-muted fs-11">12 Hours</span>
                                        </div>
                                        <div>
                                            <button className="btn btn-icon btn-primary-light btn-sm rtl-rotate"><i className="ri-arrow-right-s-line"></i></button>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex flex-wrap flex-lg-nowrap align-items-start">
                                        <span className="avatar me-2 flex-shrink-0">
                                            <img src="../../assets/images/media/media-76.jpg" className="img-fluid" alt="..." />
                                        </span>
                                        <div className="flex-fill ms-1">
                                            <p className="mb-0 top-course-name fs-14">
                                                Typography Tango: Dancing with Fonts on the Web
                                            </p>
                                            <span className="text-muted fs-11">15 Hours</span>
                                        </div>
                                        <div>
                                            <button className="btn btn-icon btn-primary-light btn-sm rtl-rotate"><i className="ri-arrow-right-s-line"></i></button>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex flex-wrap flex-lg-nowrap align-items-start">
                                        <span className="avatar p-2 bg-primary-transparent me-2 flex-shrink-0">
                                            <img src="../../assets/images/media/apps/sketch.png" className="img-fluid" alt="..." />
                                        </span>
                                        <div className="flex-fill ms-1">
                                            <p className="mb-0 top-course-name fs-14">
                                                Sketch Designing for All Users
                                            </p>
                                            <span className="text-muted fs-11">1 Month</span>
                                        </div>
                                        <div>
                                            <button className="btn btn-icon btn-primary-light btn-sm rtl-rotate"><i className="ri-arrow-right-s-line"></i></button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} xxl={3} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <div className="card-header">
                            <div className="card-title">
                                Top Course Categories
                            </div>
                        </div>
                        <div className="card-body mx-auto px-0">
                            <div id="top-course-categories" className="mx-auto">
                                <Topcourse />
                            </div>
                        </div>
                        <div className="card-footer border-top border-block-start-dashed">
                            <div className="row gy-4">
                                <Col xl={6}>
                                    <Link href="#!" scroll={false}>
                                        <div className="d-flex align-items-center justify-content-between mb-1 fs-13">
                                            <div>
                                                Sales
                                            </div>
                                            <div>40.3%</div>
                                        </div>
                                        <div>
                                            <div className="progress rounded-0 progress-sm border border-primary border-opacity-10 custom-progress-padding" role="progressbar" aria-label="Basic example" aria-valuenow={40.3} aria-valuemin={0} aria-valuemax={100}>
                                                <div className="progress-bar" style={{ width: "40.3%" }}><div className="progress-before"></div></div>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                                <Col xl={6}>
                                    <Link href="#!" scroll={false}>
                                        <div className="d-flex align-items-center justify-content-between mb-1 fs-13">
                                            <div>
                                                Marketing
                                            </div>
                                            <div>27.3%</div>
                                        </div>
                                        <div>
                                            <div className="progress rounded-0 progress-sm border border-primary border-opacity-10 custom-progress-padding" role="progressbar" aria-label="Basic example" aria-valuenow={27.3} aria-valuemin={0} aria-valuemax={100}>
                                                <div className="progress-bar" style={{ width: "27.3%" }}><div className="progress-before"></div></div>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                                <Col xl={6}>
                                    <Link href="#!" scroll={false}>
                                        <div className="d-flex align-items-center justify-content-between mb-1 fs-13">
                                            <div>
                                                IT
                                            </div>
                                            <div>19.5%</div>
                                        </div>
                                        <div>
                                            <div className="progress rounded-0 progress-sm border border-primary border-opacity-10 custom-progress-padding" role="progressbar" aria-label="Basic example" aria-valuenow={19.5} aria-valuemin={0} aria-valuemax={100}>
                                                <div className="progress-bar" style={{ width: "19.5%" }}><div className="progress-before"></div></div>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                                <Col xl={6}>
                                    <Link href="#!" scroll={false}>
                                        <div className="d-flex align-items-center justify-content-between mb-1 fs-13">
                                            <div>
                                                Consultancy
                                            </div>
                                            <div>13.0%</div>
                                        </div>
                                        <div>
                                            <div className="progress rounded-0 progress-sm border border-primary border-opacity-10 custom-progress-padding" role="progressbar" aria-label="Basic example" aria-valuenow={13.0} aria-valuemin={0} aria-valuemax={100}>
                                                <div className="progress-bar" style={{ width: "13.0%" }}><div className="progress-before"></div></div>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <div className="card-header">
                            <div className="card-title">
                                Courses Progress
                            </div>
                        </div>
                        <Card.Body>
                            <div id="courses-progress">
                                <Coursesprogress />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <div className="card-header">
                            <div className="card-title">
                                Learner Details
                            </div>
                        </div>
                        <div className="card-body px-0 pb-0">
                            <div className="table-responsive">
                                <table className="table text-nowrap table-borderless table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Duration</th>
                                            <th scope="col">Type</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-sm">
                                                            <img src="../../assets/images/faces/2.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-semibold">Sarah Taylor</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="progress progress-xs course-status-progress progress-animate me-2" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
                                                        <div className="progress-bar progress-bar-striped bg-primary" style={{ width: "60%" }}></div>
                                                    </div>
                                                    <div>60%</div>
                                                </div>
                                            </td>
                                            <td>3 Months</td>
                                            <td><span className="badge bg-primary-transparent">Full Time</span></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-sm">
                                                            <img src="../../assets/images/faces/11.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-semibold">Martin Roy</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="progress progress-xs course-status-progress progress-animate me-2" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                                                        <div className="progress-bar progress-bar-striped bg-success" style={{ width: "100%" }}></div>
                                                    </div>
                                                    <div>100%</div>
                                                </div>
                                            </td>
                                            <td>45 Days</td>
                                            <td><span className="badge bg-primary-transparent">Completed</span></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-sm">
                                                            <img src="../../assets/images/faces/14.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-semibold">Joshua Paul</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="progress progress-xs course-status-progress progress-animate me-2" role="progressbar" aria-valuenow={38} aria-valuemin={0} aria-valuemax={100}>
                                                        <div className="progress-bar progress-bar-striped bg-warning" style={{ width: "38%" }}></div>
                                                    </div>
                                                    <div>38%</div>
                                                </div>
                                            </td>
                                            <td>90 Days</td>
                                            <td><span className="badge bg-primary-transparent">Part Time</span></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-sm">
                                                            <img src="../../assets/images/faces/8.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-semibold">Kamala Singh</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="progress progress-xs course-status-progress progress-animate me-2" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                                                        <div className="progress-bar progress-bar-striped bg-info" style={{ width: "75%" }}></div>
                                                    </div>
                                                    <div>75%</div>
                                                </div>
                                            </td>
                                            <td>24 Days</td>
                                            <td><span className="badge bg-primary-transparent">Week End</span></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-sm">
                                                            <img src="../../assets/images/faces/4.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-semibold">Jessica Leon</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="progress progress-xs course-status-progress progress-animate me-2" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}>
                                                        <div className="progress-bar progress-bar-striped bg-primary" style={{ width: "55%" }}></div>
                                                    </div>
                                                    <div>55%</div>
                                                </div>
                                            </td>
                                            <td>6 Months</td>
                                            <td><span className="badge bg-primary-transparent">Full Time</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <div className="card-header">
                            <div className="card-title">
                                Payouts
                            </div>
                        </div>
                        <Card.Body>
                            <div className="d-flex align-items-center gap-3 justify-content-xl-between">
                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                    <span className="avatar bg-primary-transparent">
                                        <i className="ti ti-cash fs-5"></i>
                                    </span>
                                    <div className="lh-1">
                                        <span className="d-block mb-1">Total Paid</span>
                                        <span className="d-block h5 mb-0 fw-medium">$18,293</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                    <span className="avatar bg-danger-transparent">
                                        <i className="ti ti-x fs-5"></i>
                                    </span>
                                    <div className="lh-1">
                                        <span className="d-block mb-1">Total Unpaid</span>
                                        <span className="d-block h5 mb-0 fw-medium">$12,657</span>
                                    </div>
                                </div>
                            </div>
                            <div id="payouts" className="mt-4">
                                <Payouts />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Courses List
                            </div>
                            <Dropdown className="">
                                <Dropdown.Toggle as="a" aria-label="anchor" href="#!" data-bs-toggle="dropdown" className="op-4 no-caret" aria-expanded="false">
                                    <i className="bi bi-grid text-primary"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu" role="menu">
                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Day</Link></Dropdown.Item>
                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Week</Link></Dropdown.Item>
                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Year</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Card.Body>
                            <div className="table-responsive">
                                <table className="table text-nowrap table-borderless table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">S.No</th>
                                            <th scope="col">Course Title</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Classes</th>
                                            <th scope="col">Recent Batch</th>
                                            <th scope="col">Instructor</th>
                                            <th scope="col">Batch Capacity</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {CoursesData.map((idx) => (
                                            <tr key={Math.random()}>
                                                <td>
                                                    {idx.id}
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs">
                                                            <img src={idx.src} alt="" />
                                                        </span>
                                                        {idx.title}
                                                    </div>
                                                </td>
                                                <td>{idx.category}</td>
                                                <td>{idx.classes}</td>
                                                <td>{idx.recent}</td>
                                                <td>{idx.instructor}</td>
                                                <td>{idx.batch}</td>
                                                <td>
                                                    <div className="hstack gap-2">
                                                        <Link aria-label="anchor" href="#!" scroll={false} className="btn btn-icon btn-sm btn-success-light btn-wave waves-effect waves-light"><i className="ri-edit-line"></i></Link>
                                                        <Link aria-label="anchor" href="#!" scroll={false} className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light"><i className="ri-delete-bin-line"></i></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Courses;
