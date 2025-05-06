"use client";
import { Projectstatus } from "@/shared/data/apps/projects/projectoverviewdata";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Dropdown, ListGroup, OverlayTrigger, Row, Table, Tooltip } from "react-bootstrap";

const ProjectOverview = () => {
    return (
        <Fragment>
            <Seo title={"Project Overview"} />
            <Row>
                <Col xxl={8}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Project Details
                            </div>
                            <div>
                                <Link href="/apps/projects/create-project" className="btn btn-sm btn-secondary btn-wave"><i className="ri-add-line align-middle me-1 fw-medium"></i>Create Project</Link>
                            </div>
                        </div>
                        <Card.Body>
                            <h5 className="fw-medium mb-4 task-title">
                                Enhancing the Design for the Landing page
                            </h5>
                            <div className="fs-14 fw-medium mb-2">Project Manager :
                                <span className="text-muted task-description">Kevin Richie</span>
                            </div>
                            <div className="fs-15 fw-medium mb-2">
                                <div className="avatar-list-stacked">
                                    <span className="fs-14 fw-medium">Assigned Team :</span>
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Ayyan</Tooltip>}>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                        </span></OverlayTrigger>
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Sasha</Tooltip>}>
                                        <span className="avatar avatar-sm avatar-rounded" >
                                            <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                        </span></OverlayTrigger>
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Anagha</Tooltip>}>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/5.jpg" alt="img" />
                                        </span></OverlayTrigger>
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Hishen</Tooltip>}>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/10.jpg" alt="img" />
                                        </span></OverlayTrigger>
                                    <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-black fw-medium" href="#!" scroll={false}>
                                        +5
                                    </Link>
                                </div>
                            </div>
                            <div className="d-flex gap-2 flex-wrap align-items-center fs-14 fw-medium mb-2">End Date :
                                <span className="badge bg-warning fw-medium align-middle">10 Days Left !</span>
                                <span className="text-muted task-description fs-13 fw-nomal">21, Jan 2024</span>
                            </div>
                            <div className="fs-14 fw-medium mb-2">Project Description :</div>
                            <p className="text-muted task-description">Landing Page Analytics and Performance Review involves a comprehensive examination of the key metrics and data associated with a specific landing page. This process includes analyzing user interactions, bounce rates, conversion rates, and other relevant data points.
                            </p>
                            <div className="fs-14 fw-medium mb-2">Key tasks :</div>
                            <div className="mb-3">
                                <ul className="task-details-key-tasks mb-0">
                                    <li>Evaluate the source and volume of traffic to the landing page.</li>
                                    <li>Examine user interactions, such as clicks, scrolls, and navigation patterns.</li>
                                    <li>Analyze conversion rates to understand the effectiveness of call-to-action elements.</li>
                                    <li>Check the page load times and optimize for faster performance.</li>
                                    <li>Evaluate how the landing page performs on various devices and screen sizes.</li>
                                    <li> Assess the achievement of predefined goals and objectives for the landing page.</li>
                                </ul>
                            </div>
                            <div className="fs-14 fw-medium mb-2">Skills :</div>
                            <div>
                                <span className="badge bg-primary-transparent border me-1">Web Designing</span>
                                <span className="badge bg-primary-transparent border me-1">Front-End Development</span>
                                <span className="badge bg-primary-transparent border me-1">JavaScript and jQuery</span>
                                <span className="badge bg-primary-transparent border me-1">Responsive Design</span>
                                <span className="badge bg-primary-transparent border me-1">Web Security</span>
                                <span className="badge bg-primary-transparent border me-1">UI/UX</span>
                                <span className="badge bg-primary-transparent border me-1">Web Analytics Tools </span>
                                <span className="badge bg-primary-transparent border">Coding Standards</span>
                            </div>
                        </Card.Body>
                        <div className="px-3 border-top border-block-start-dashed py-1">
                            <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                <div>
                                    <div className="text-muted fs-12 mb-2">Start Date :
                                        <span className="text-muted task-description fs-14"> 15,Nov 2023</span>
                                    </div>
                                    <div className="text-muted fs-12 mb-2">Priority :
                                        <span className="badge bg-secondary ms-2">Medium</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <div>
                                        <span className="d-block text-muted fs-12 mb-1"> Project Status:</span>
                                        <div className="fs-12 fw-medium">
                                            <div className="mb-1"><i className="ri-square-fill fs-12 text-secondary me-2 d-inline-block"></i> Completed Tasks</div>
                                            <div><i className="ri-square-fill fs-12 text-light me-2 d-inline-block"></i> Incomplete Tasks</div>
                                        </div>
                                    </div>
                                    <div id="project-status">
                                        <Projectstatus />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Row>
                        <Col xl={6}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Project Goals</div>
                                    <div className="btn btn-sm btn-light btn-wave"><i className="ri-add-line align-middle me-1 fw-medium"></i>Add Goal</div>
                                </div>
                                <Card.Body>
                                    <ListGroup>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked1" defaultChecked /></div>
                                                <div className="fw-medium fs-14">Modernize Visual Appeal</div>
                                                <div className="avatar-list-stacked ms-auto">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/5.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/13.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked3" /></div>
                                                <div className="fw-medium fs-14">Improve User Engagement</div>
                                                <div className="avatar-list-stacked ms-auto">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/1.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/12.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/15.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked4" /></div>
                                                <div className="fw-medium fs-14">Implement UI/UX Best Practices</div>
                                                <div className="avatar-list-stacked ms-auto">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/7.jpg" alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-black"
                                                        href="#!" scroll={false}>
                                                        +5
                                                    </Link>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked5" defaultChecked /></div>
                                                <div className="fw-medium fs-14">Accessibility Integration</div>
                                                <div className="avatar-list-stacked ms-auto">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/5.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/15.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked6" defaultChecked /></div>
                                                <div className="fw-medium fs-14">Source High-Quality Visual Assets</div>
                                                <div className="avatar-list-stacked ms-auto">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/3.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/1.jpg" alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-black"
                                                        href="#!" scroll={false}>
                                                        +3
                                                    </Link>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                    </ListGroup>
                                    <div className="mt-4 text-center">
                                        <button className="btn btn-success btn-sm btn-wave w-100">View All</button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <div className="card custom-card overflow-hidden">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="card-header">
                                    <div className="card-title">
                                        Project Documents
                                    </div>
                                </div>
                                <div className="card-body p-0 pt-1">
                                    <ul className="list-group list-group-flush">
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center flex-wrap gap-2">
                                                <div className="lh-1">
                                                    <span className="avatar p-2 bg-light">
                                                        <img src="../../../assets/images/media/file-manager/1.png" alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <Link href="#!" scroll={false}><span className="d-block fw-medium fs-14">Complete Project</span></Link>
                                                    <span className="d-block text-muted fs-12 fw-normal">0.65MB</span>
                                                </div>
                                                <div className="btn-list">
                                                    <button className="btn btn-sm btn-icon btn-info-light btn-wave"><i className="ri-edit-line"></i></button>
                                                    <button className="btn btn-sm btn-icon btn-danger-light btn-wave"><i className="ri-delete-bin-line"></i></button>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center flex-wrap gap-2">
                                                <div className="lh-1">
                                                    <span className="avatar bg-light">
                                                        <img src="../../../assets/images/media/file-manager/3.png" alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <Link href="#!" scroll={false}><span className="d-block fw-medium fs-14">MiniFiles.zip</span></Link>
                                                    <span className="d-block text-muted fs-12 fw-normal">0.52MB</span>
                                                </div>
                                                <div className="btn-list">
                                                    <button className="btn btn-sm btn-icon btn-info-light btn-wave"><i className="ri-edit-line"></i></button>
                                                    <button className="btn btn-sm btn-icon btn-danger-light btn-wave"><i className="ri-delete-bin-line"></i></button>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center flex-wrap gap-2">
                                                <div className="lh-1">
                                                    <span className="avatar p-2 bg-light">
                                                        <img src="../../../assets/images/media/file-manager/1.png" alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <Link href="#!" scroll={false}><span className="d-block fw-medium fs-14">image-145.png</span></Link>
                                                    <span className="d-block text-muted fs-12 fw-normal">287KB</span>
                                                </div>
                                                <div className="btn-list">
                                                    <button className="btn btn-sm btn-icon btn-info-light btn-wave"><i className="ri-edit-line"></i></button>
                                                    <button className="btn btn-sm btn-icon btn-danger-light btn-wave"><i className="ri-delete-bin-line"></i></button>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center flex-wrap gap-2">
                                                <div className="lh-1">
                                                    <span className="avatar bg-light">
                                                        <img src="../../../assets/images/media/file-manager/3.png" alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <Link href="#!" scroll={false}><span className="d-block fw-medium fs-14">BackupFile.zip</span></Link>
                                                    <span className="d-block text-muted fs-12 fw-normal">3MB</span>
                                                </div>
                                                <div className="btn-list">
                                                    <button className="btn btn-sm btn-icon btn-info-light btn-wave"><i className="ri-edit-line"></i></button>
                                                    <button className="btn btn-sm btn-icon btn-danger-light btn-wave"><i className="ri-delete-bin-line"></i></button>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center flex-wrap gap-2">
                                                <div className="lh-1">
                                                    <span className="avatar bg-light">
                                                        <img src="../../../assets/images/media/file-manager/3.png" alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <Link href="#!" scroll={false}><span className="d-block fw-medium fs-14">SinglePages.zip</span></Link>
                                                    <span className="d-block text-muted fs-12 fw-normal">1.06MB</span>
                                                </div>
                                                <div className="btn-list">
                                                    <button className="btn btn-sm btn-icon btn-info-light btn-wave"><i className="ri-edit-line"></i></button>
                                                    <button className="btn btn-sm btn-icon btn-danger-light btn-wave"><i className="ri-delete-bin-line"></i></button>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={4}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="card-header justify-content-between pb-3">
                            <div className="card-title">
                                Project Team
                            </div>
                            <div>
                                <button className="btn btn-light btn-sm btn-wave"><i className="ri-add-line align-middle me-1 fw-medium"></i>Add Member</button>
                            </div>
                        </div>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <Table className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Designation</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/faces/2.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-medium fs-13">Ayyan Conway</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-primary-transparent">UI Designer</span>
                                            </td>
                                            <td>
                                                <Dropdown>
                                                    <Dropdown.Toggle as="a" aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="fe fe-more-vertical align-middle"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu">
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Link></Dropdown.Item>
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Link></Dropdown.Item>
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Link></Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/faces/8.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-medium fs-13">Sasha Banks</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-pink-transparent">UX Designer</span>
                                            </td>
                                            <td>
                                                <Dropdown>
                                                    <Dropdown.Toggle as="a" aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="fe fe-more-vertical align-middle"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu">
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Link></Dropdown.Item>
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Link></Dropdown.Item>
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Link></Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/faces/5.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-medium fs-13">Anagha May</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-warning-transparent">Tester</span>
                                            </td>
                                            <td>
                                                <Dropdown>
                                                    <Dropdown.Toggle as="a" aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="fe fe-more-vertical align-middle"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu">
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Link></Dropdown.Item>
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Link></Dropdown.Item>
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Link></Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/faces/10.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-medium fs-13">Hishen Stuart</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-success-transparent">Fullstack Developer</span>
                                            </td>
                                            <td>
                                                <Dropdown>
                                                    <Dropdown.Toggle as="a" aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="fe fe-more-vertical align-middle"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu">
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Link></Dropdown.Item>
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Link></Dropdown.Item>
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Link></Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card project-team-chat">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="card-header">
                            <div className="card-title">Team Chat</div>
                        </div>
                        <Card.Body>
                            <ul className="list-unstyled profile-timeline">
                                <li>
                                    <div>
                                        <span className="avatar avatar-sm bg-primary-transparent avatar-rounded profile-timeline-avatar">
                                            E
                                        </span>
                                        <p className="mb-2 fs-14">
                                            <span className="fw-medium">Quick update, team!</span>
                                            <span className="float-end fs-11 text-muted  op-6"><i className="ri-time-line me-1 d-inline-block align-middle"></i>10,Dec 2023 - 14:21</span>
                                        </p>
                                        <p className="text-muted mb-0 fs-14">
                                            We're on track with our milestones.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                            <img src="../../../assets/images/faces/11.jpg" alt="" />
                                        </span>
                                        <p className="text-muted mb-2 fs-14">
                                            <span className="fw-medium">Feedback Request</span>
                                            <span className="float-end fs-11 text-muted  op-6"><i className="ri-time-line me-1 d-inline-block align-middle"></i>16,Dec 2023 - 08:14</span>
                                        </p>
                                        <p className="text-muted mb-0 fs-14">
                                            Working on ID <span className="text-success">#1451</span>. Submit your feedback before moving forward.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                            <img src="../../../assets/images/faces/4.jpg" alt="" />
                                        </span>
                                        <p className="text-muted mb-2 fs-14"> Sent You a File for Review.
                                            <span className="text-default"><b> Amelia Davis</b> Sent You Files for<b>Review</b></span>.<span className="float-end fs-11 text-muted  op-6"><i className="ri-time-line me-1 d-inline-block align-middle"></i>03,Dec 2023 - 17:32</span>
                                        </p>
                                        <p className="profile-activity-media mb-0">
                                            <Link href="#!" scroll={false}>
                                                <img src="../../../assets/images/media/file-manager/3.png" alt="" />
                                            </Link>
                                            <span className="fs-11 text-muted">542.07KB</span>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="avatar avatar-sm bg-success-transparent avatar-rounded profile-timeline-avatar">
                                            L
                                        </span>
                                        <p className="text-muted mb-2 fs-14">
                                            <span className="text-default"><b>You</b> shared with 5 Recipients <b>Harvey,Jorge,Tracey,Arunima,Vidhanth</b></span>.<span className="float-end fs-11 text-muted  op-6"><i className="ri-time-line me-1 d-inline-block align-middle"></i>18,Nov 2023 - 07:41</span>
                                        </p>
                                        <p className="profile-activity-media mb-2">
                                            <Link href="#!" scroll={false}>
                                                <img src="../../../assets/images/media/media-75.jpg" alt="" />
                                            </Link>
                                            <Link href="#!" scroll={false}>
                                                <img src="../../../assets/images/media/media-76.jpg" alt="" />
                                            </Link>
                                        </p>
                                        <div>
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
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                            <img src="../../../assets/images/media/media-39.jpg" alt="" />
                                        </span>
                                        <p className="mb-1 fs-14">
                                            <b>You</b> Commented on <b>Philip Jimmi</b> post <Link className="text-secondary" href="#!" scroll={false}><u>#winter</u></Link>.
                                            <span className="float-end fs-11 text-muted  op-6"><i className="ri-time-line me-1 d-inline-block align-middle"></i>26,Dec 2023 - 18:46</span>
                                        </p>
                                        <p className="text-muted fs-14">Coming Seasons are so horrible pay attention</p>
                                        <p className="profile-activity-media mb-0">
                                            <Link href="#!" scroll={false}>
                                                <img src="../../../assets/images/media/media-26.jpg" alt="" />
                                            </Link>
                                            <Link href="#!" scroll={false}>
                                                <img src="../../../assets/images/media/media-29.jpg" alt="" />
                                            </Link>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-sm-flex align-items-center lh-1">
                                <div className="me-sm-3 mb-2 mb-sm-0">
                                    <img src="../../../assets/images/faces/9.jpg" alt="" className="avatar avatar-md avatar-rounded" />
                                </div>
                                <div className="flex-fill">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Post Anything" aria-label="Recipient's username with two button addons" />
                                        <button className="btn btn-outline-light btn-wave waves-effect waves-light" type="button"><i className="bi bi-emoji-smile"></i></button>
                                        <button className="btn btn-outline-light btn-wave waves-effect waves-light" type="button"><i className="bi bi-paperclip"></i></button>
                                        <button className="btn btn-outline-light btn-wave waves-effect waves-light" type="button"><i className="bi bi-camera"></i></button>
                                        <button className="btn btn-primary btn-wave waves-effect waves-light" type="button">Post</button>
                                    </div>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default ProjectOverview;
