"use client";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, Pagination, Row, Table } from "react-bootstrap";

const ProjectList = () => {
    return (
        <Fragment>
            <Seo title={"Project List"} />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="p-3">
                            <div className="d-sm-flex gap-3 mb-4">
                                <div className="input-group mb-2 mb-sm-0">
                                    <input type="text" className="form-control" placeholder="Search Project Here"
                                        aria-describedby="button-addon2" />
                                    <Button variant="" className="btn btn-light" type="submit">Search</Button>
                                </div>
                                <Link href="/apps/projects/create-project" className="btn btn-primary me-2 text-nowrap"><i className="ri-add-line me-1 fw-medium align-middle"></i>Add New Project</Link>
                            </div>
                            <div className="row text-center border border-dashed mx-0">
                                <Col xl={3} className=" projects-summary">
                                    <div className="p-3 d-flex align-items-center flex-wrap gap-3">
                                        <span className="avatar avatar-sm bg-primary-transparent text-primary"> <i className=" fs-16 ri-progress-3-line"></i></span>
                                        <h6 className="fw-medium mb-0">
                                            Ongoing Projects - <span className="text-primary">08</span></h6>
                                    </div>
                                </Col>
                                <Col xl={3} className=" projects-summary">
                                    <div className="p-3 d-flex align-items-center flex-wrap gap-3">
                                        <span className="avatar avatar-sm bg-warning-transparent text-warning"> <i className=" fs-16 ri-edit-box-line"></i></span>
                                        <h6 className="fw-medium mb-0">Todo Projects - <span className="text-warning">26</span></h6>
                                    </div>
                                </Col>
                                <Col xl={3} className=" projects-summary">
                                    <div className="p-3 d-flex align-items-center flex-wrap gap-3">
                                        <span className="avatar avatar-sm bg-secondary-transparent text-secondary"> <i className=" fs-16 ri-history-line"></i></span>
                                        <h6 className="fw-medium mb-0">OnHold Projects - <span className="text-secondary">05</span></h6>
                                    </div>
                                </Col>
                                <Col xl={3} className="">
                                    <div className="p-3 d-flex align-items-center flex-wrap gap-3">
                                        <span className="avatar avatar-sm bg-success-transparent text-success"> <i className=" fs-16 ri-checkbox-circle-line"></i></span>
                                        <h6 className="fw-medium mb-0">Completed Projects - <span className="text-success">150</span></h6>
                                    </div>
                                </Col>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card overflow-hidden">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <Table className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">Project Name</th>
                                            <th scope="col">Assign Team</th>
                                            <th scope="col">Assigned Date</th>
                                            <th scope="col">Priority</th>
                                            <th scope="col">Due Date</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-rounded p-1 bg-teal-transparent">
                                                            <img src="../../../assets/images/company-logos/6.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <Link href="#!" scroll={false}
                                                            className="fw-medium fs-14 d-block text-truncate project-list-title">Conversion-Optimized Landing Page Development</Link>
                                                        <span className="text-muted d-block fs-12">Total <span
                                                            className="fw-medium text-default">08/55</span> tasks
                                                            completed</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/13.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/16.jpg" alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-black"
                                                        href="#!" scroll={false}>
                                                        +2
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                20,Jun 2023
                                            </td>
                                            <td>
                                                <span className="badge bg-info-transparent">Medium</span>
                                            </td>
                                            <td>
                                                18,Jul 2023
                                            </td>
                                            <td>
                                                <div className="d-flex gap-2 align-items-center w-6rem flex-wrap">
                                                    <div className="flex-shrink-0 progress progress-xs progress-animate flex-grow-1" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                                                        <div className="progress-bar bg-primary" style={{ width: "75%" }}></div>
                                                    </div>
                                                    <div className="flex-shrink-0"><span className="text-primary fw-medium">75%</span></div>
                                                </div>
                                            </td>
                                            <td>
                                                <Dropdown className="d-inline-block">
                                                    <Dropdown.Toggle as="a" aria-label="anchor" href="#!"
                                                        className="btn btn-icon btn-sm btn-light no-caret"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="fe fe-more-vertical align-middle"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="">
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i
                                                            className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i
                                                            className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i
                                                            className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Link>
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span
                                                            className="avatar avatar-rounded p-1 bg-success-transparent">
                                                            <img src="../../../assets/images/company-logos/10.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <Link href="#!" scroll={false}
                                                            className="fw-medium fs-14 d-block text-truncate project-list-title">Interactive Elements for Landing Page</Link>
                                                        <span className="text-muted d-block fs-12">Total <span
                                                            className="fw-medium text-default">56/63</span> tasks
                                                            completed</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/7.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/13.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                04,Jun 2023
                                            </td>
                                            <td>
                                                <span className="badge bg-success-transparent">Low</span>
                                            </td>
                                            <td>
                                                15,Jun 2023
                                            </td>
                                            <td>
                                                <div className="d-flex gap-2 align-items-center w-6rem">
                                                    <div className="progress progress-xs progress-animate flex-fill" role="progressbar" aria-valuenow={48} aria-valuemin={0} aria-valuemax={100}>
                                                        <div className="progress-bar bg-primary" style={{ width: "48%" }}></div>
                                                    </div>
                                                    <div className="flex-shrink-0"><span className="text-primary fw-medium">48%</span></div>
                                                </div>
                                            </td>
                                            <td>
                                                <Dropdown className="d-inline-block">
                                                    <Dropdown.Toggle as="a" aria-label="anchor" href="#!"
                                                        className="btn btn-icon btn-sm btn-light no-caret"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="fe fe-more-vertical align-middle"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="">
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i
                                                            className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i
                                                            className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i
                                                            className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Link>
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-rounded p-1 bg-info-transparent">
                                                            <img src="../../../assets/images/company-logos/9.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <Link href="#!" scroll={false}
                                                            className="fw-medium fs-14 d-block text-truncate project-list-title">Customizable Admin Dashboard Template</Link>
                                                        <span className="text-muted d-block fs-12">Total <span
                                                            className="fw-mediumtext-default">145/150</span> tasks
                                                            completed</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/5.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/14.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/15.jpg" alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-black"
                                                        href="#!" scroll={false}>
                                                        +2
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                24,Jun 2023
                                            </td>
                                            <td>
                                                <span className="badge bg-danger-transparent">High</span>
                                            </td>
                                            <td>
                                                05,Jul 2023
                                            </td>
                                            <td>
                                                <div className="d-flex gap-2 align-items-center w-6rem">
                                                    <div className="progress progress-xs progress-animate flex-fill" role="progressbar" aria-valuenow={56} aria-valuemin={0} aria-valuemax={100}>
                                                        <div className="progress-bar bg-primary" style={{ width: "56%" }}></div>
                                                    </div>
                                                    <div className="flex-shrink-0"><span className="text-primary fw-medium">56%</span></div>
                                                </div>
                                            </td>
                                            <td>
                                                <Dropdown className="d-inline-block">
                                                    <Dropdown.Toggle as="a" aria-label="anchor" href="#!"
                                                        className="btn btn-icon btn-sm btn-light no-caret"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="fe fe-more-vertical align-middle"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="">
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i
                                                            className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i
                                                            className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i
                                                            className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Link>
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span
                                                            className="avatar avatar-rounded p-1 bg-danger-transparent">
                                                            <img src="../../../assets/images/company-logos/1.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <Link href="#!" scroll={false}
                                                            className="fw-medium fs-14 d-block text-truncate project-list-title">Mobile App UI Template Creation</Link>
                                                        <span className="text-muted d-block fs-12">Total <span
                                                            className="fw-medium text-default">10/30</span> tasks
                                                            completed</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/10.jpg" alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-black"
                                                        href="#!" scroll={false}>
                                                        +2
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                24,Nov 2023
                                            </td>
                                            <td>
                                                <span className="badge bg-success-transparent">Low</span>
                                            </td>
                                            <td>
                                                12,Dec 2023
                                            </td>
                                            <td>
                                                <div className="d-flex gap-2 align-items-center w-6rem">
                                                    <div className="progress progress-xs progress-animate flex-fill" role="progressbar" aria-valuenow={48} aria-valuemin={0} aria-valuemax={100}>
                                                        <div className="progress-bar bg-primary" style={{ width: "48%" }}></div>
                                                    </div>
                                                    <div className="flex-shrink-0"><span className="text-primary fw-medium">48%</span></div>
                                                </div>
                                            </td>
                                            <td>
                                                <Dropdown className="d-inline-block">
                                                    <Dropdown.Toggle as="a" aria-label="anchor" href="#!"
                                                        className="btn btn-icon btn-sm btn-light no-caret"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="fe fe-more-vertical align-middle"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="">
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i
                                                            className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i
                                                            className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i
                                                            className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Link>
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span
                                                            className="avatar avatar-rounded p-1 bg-secondary-transparent">
                                                            <img src="../../../assets/images/company-logos/3.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <Link href="#!" scroll={false}
                                                            className="fw-medium fs-14 d-block text-truncate project-list-title">E-commerce Page Enhancement</Link>
                                                        <span className="text-muted d-block fs-12">Total <span
                                                            className="fw-medium text-default">21/45</span> tasks
                                                            completed</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/5.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/6.jpg" alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-black"
                                                        href="#!" scroll={false}>
                                                        +1
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                31,Dec 2023
                                            </td>
                                            <td>
                                                <span className="badge bg-success-transparent">Low</span>
                                            </td>
                                            <td>
                                                10,Feb 2024
                                            </td>
                                            <td>
                                                <div className="d-flex gap-2 align-items-center w-6rem">
                                                    <div className="progress progress-xs progress-animate flex-fill" role="progressbar" aria-valuenow={74} aria-valuemin={0} aria-valuemax={100}>
                                                        <div className="progress-bar bg-primary" style={{ width: "74%" }}></div>
                                                    </div>
                                                    <div className="flex-shrink-0"><span className="text-primary fw-medium">74%</span></div>
                                                </div>
                                            </td>
                                            <td>
                                                <Dropdown className="d-inline-block">
                                                    <Dropdown.Toggle as="a" aria-label="anchor" href="#!"
                                                        className="btn btn-icon btn-sm btn-light no-caret"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="fe fe-more-vertical align-middle"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="">
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i
                                                            className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i
                                                            className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i
                                                            className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Link>
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span
                                                            className="avatar avatar-rounded p-1 bg-warning-transparent">
                                                            <img src="../../../assets/images/company-logos/2.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <Link href="#!" scroll={false}
                                                            className="fw-medium fs-14 d-block text-truncate project-list-title">Online Store Template Integration</Link>
                                                        <span className="text-muted d-block fs-12">Total <span
                                                            className="fw-medium text-default">26/68</span> tasks
                                                            completed</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/12.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/9.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/11.jpg" alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-black"
                                                        href="#!" scroll={false}>
                                                        +4
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                20,Nov 2023
                                            </td>
                                            <td>
                                                <span className="badge bg-info-transparent">Medium</span>
                                            </td>
                                            <td>
                                                10,Jan 2024
                                            </td>
                                            <td>
                                                <div className="d-flex gap-2 align-items-center w-6rem">
                                                    <div className="progress progress-xs progress-animate flex-fill" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                                                        <div className="progress-bar bg-primary" style={{ width: "85%" }}></div>
                                                    </div>
                                                    <div className="flex-shrink-0"><span className="text-primary fw-medium">85%</span></div>
                                                </div>
                                            </td>
                                            <td>
                                                <Dropdown className="d-inline-block">
                                                    <Dropdown.Toggle as="a" aria-label="anchor" href="#!"
                                                        className="btn btn-icon btn-sm btn-light no-caret"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="fe fe-more-vertical align-middle"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="">
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i
                                                            className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i
                                                            className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i
                                                            className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Link>
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span
                                                            className="avatar avatar-rounded p-1 bg-success-transparent">
                                                            <img src="../../../assets/images/company-logos/5.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <Link href="#!" scroll={false}
                                                            className="fw-medium fs-14 d-block text-truncate project-list-title">Creative Resume Template</Link>
                                                        <span className="text-muted d-block fs-12">Total <span
                                                            className="fw-medium text-default">30/33</span> tasks
                                                            completed</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/3.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/9.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/12.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/11.jpg" alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-black"
                                                        href="#!" scroll={false}>
                                                        +2
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                02,Jun 2023
                                            </td>
                                            <td>
                                                <span className="badge bg-danger-transparent">High</span>
                                            </td>
                                            <td>
                                                15,Jun 2023
                                            </td>
                                            <td>
                                                <div className="d-flex gap-2 align-items-center w-6rem">
                                                    <div className="progress progress-xs progress-animate flex-fill" role="progressbar" aria-valuenow={64} aria-valuemin={0} aria-valuemax={100}>
                                                        <div className="progress-bar bg-primary" style={{ width: "64%" }}></div>
                                                    </div>
                                                    <div className="flex-shrink-0"><span className="text-primary fw-medium">64%</span></div>
                                                </div>
                                            </td>
                                            <td>
                                                <Dropdown className="d-inline-block">
                                                    <Dropdown.Toggle as="a" aria-label="anchor" href="#!"
                                                        className="btn btn-icon btn-sm btn-light no-caret"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="fe fe-more-vertical align-middle"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="">
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i
                                                            className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i
                                                            className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i
                                                            className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Link>
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span
                                                            className="avatar avatar-rounded p-1 bg-primary-transparent">
                                                            <img src="../../../assets/images/company-logos/8.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <Link href="#!" scroll={false}
                                                            className="fw-medium fs-14 d-block text-truncate project-list-title">Template Dashbord Designing</Link>
                                                        <span className="text-muted d-block fs-12">Total <span
                                                            className="fw-medium text-default">15/32</span> tasks
                                                            completed</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/10.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/1.jpg" alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-black"
                                                        href="#!" scroll={false}>
                                                        +1
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                29,May 2023
                                            </td>
                                            <td>
                                                <span className="badge bg-info-transparent">Medium</span>
                                            </td>
                                            <td>
                                                08,Jun 2023
                                            </td>
                                            <td>
                                                <div className="d-flex gap-2 align-items-center w-6rem">
                                                    <div className="progress progress-xs progress-animate flex-fill" role="progressbar" aria-valuenow={28} aria-valuemin={0} aria-valuemax={100}>
                                                        <div className="progress-bar bg-primary" style={{ width: "28%" }}></div>
                                                    </div>
                                                    <div className="flex-shrink-0"><span className="text-primary fw-medium">28%</span></div>
                                                </div>
                                            </td>
                                            <td>
                                                <Dropdown className="d-inline-block">
                                                    <Dropdown.Toggle as="a" aria-label="anchor" href="#!"
                                                        className="btn btn-icon btn-sm btn-light no-caret"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="fe fe-more-vertical align-middle"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="">
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i
                                                            className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i
                                                            className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i
                                                            className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Link>
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Pagination className="pagination justify-content-end">
                <Pagination.Item className=" disabled">
                    Previous
                </Pagination.Item>
                <Pagination.Item className="">1</Pagination.Item>
                <Pagination.Item className="">2</Pagination.Item>
                <Pagination.Item className="">3</Pagination.Item>
                <Pagination.Item className="">
                    Next
                </Pagination.Item>
            </Pagination>
        </Fragment>
    );
};

export default ProjectList;
