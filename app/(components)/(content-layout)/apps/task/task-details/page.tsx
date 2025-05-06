"use client";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, ListGroup, OverlayTrigger, Row, Table, Tooltip } from "react-bootstrap";

const TaskDetails = () => {
    return (
        <Fragment>
            <Seo title={"Task Details"} />
            <Row>
                <Col xxl={8} xl={7} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header className="justify-content-between">
                            <div className="card-title">Task Summary</div>
                            <div className="btn-list">
                                <Button variant="" type="button" className="btn btn-success btn-sm btn-wave me-0"><i className="ri-edit-line me-1 align-middle"></i>Edit Task</Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <h5 className="fw-medium mb-4 task-title">
                                Implement Conversion-Driven Design
                            </h5>
                            <div className="fs-14 fw-medium mb-2">Assigned By :
                                <span className="text-muted task-description  ms-2">
                                    <span className="avatar avatar-xs avatar-rounded align-middle me-1">
                                        <img src="../../../assets/images/faces/14.jpg" alt="" />
                                    </span>
                                    Rhea Marchel</span>
                            </div>
                            <div className="fs-14 fw-medium mb-2">End Date :
                                <span className="badge bg-warning fw-medium mx-2 align-middle"> 10 Days Left !</span><span className="text-muted task-description fs-13 fw-nomal">18,Jan 2024</span>
                            </div>
                            <div className="fs-14 fw-medium mb-2">Task Description :</div>
                            <p className="text-muted task-description">Implementing Conversion-Driven Design involves strategically incorporating elements and user experiences that actively guide visitors toward taking desired actions. By focusing on intuitive layouts, compelling visuals, and seamless interactions, the design aims to optimize user engagement and increase the likelihood of conversions, such as sign-ups, purchases, or other targeted outcomes.</p>
                            <div className="fs-14 fw-medium mb-2">Key tasks :</div>
                            <div>
                                <ul className="task-details-key-tasks mb-0">
                                    <li>Conduct a thorough analysis of target user personas to understand their preferences.</li>
                                    <li>Specific conversion goals, whether it's sign-ups, purchases, or other desired user actions.</li>
                                    <li>Designs to identify successful conversion strategies and areas for improvement.</li>
                                    <li>Ensure the design is responsive across various devices, providing a seamless.</li>
                                    <li>Integrate trust-building elements such as testimonials, reviews, and security badges to instill confidence in users.</li>
                                    <li>Implement an iterative design process, incorporating insights from testing</li>
                                </ul>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                <div>
                                    <span className="d-block text-muted fs-12">Assigned Date</span>
                                    <span className="d-block fs-14 fw-medium">12,Dec 2023</span>
                                </div>
                                <div className="task-details-progress">
                                    <span className="d-block text-muted fs-12 mb-1">Progress</span>
                                    <div className="d-flex align-items-center">
                                        <div className="progress progress-xs progress-animate flex-fill me-2" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>
                                            <div className="progress-bar bg-primary" style={{ width: "70%" }}></div>
                                        </div>
                                        <div className="text-muted fs-11">70%</div>
                                    </div>
                                </div>
                                <div>
                                    <span className="d-block text-muted fs-12">Efforts</span>
                                    <span className="d-block fs-14 fw-medium">38H : 45M : 53S</span>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card overflow-hidden">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Header className="justify-content-between">
                                    <div className="card-title">Sub Tasks</div>
                                    <div>
                                        <Button variant="" type="button" className="btn btn-secondary-light btn-sm btn-wave"><i className="ri-add-line me-1 align-middle"></i>Sub Task</Button>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <div className="table-responsive">
                                        <Table className="table text-nowrap table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Task</th>
                                                    <th scope="col">Assigned To</th>
                                                    <th scope="col">Due Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked1" defaultChecked /></div>
                                                            <div className="fw-medium fs-14">Design visually conversion-focused pages.</div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div className="avatar-list-stacked">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../../assets/images/faces/5.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../../assets/images/faces/16.jpg" alt="img" />
                                                            </span>
                                                            <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-black" href="#!" scroll={false}>
                                                                +3
                                                            </Link>
                                                        </div>
                                                    </td>
                                                    <td><span className="fs-12">Due: 02, Jan 2024</span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked2" /></div>
                                                            <div className="fw-medium fs-14">Implement A/B testing to experiment .</div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div className="avatar-list-stacked">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../../assets/images/faces/4.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../../assets/images/faces/14.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../../assets/images/faces/6.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../../assets/images/faces/3.jpg" alt="img" />
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td><span className="fs-12">Due: 02, Jan 2024</span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked3" /></div>
                                                            <div className="fw-medium fs-14">Security Assurance through design.</div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div className="avatar-list-stacked">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../../assets/images/faces/13.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../../assets/images/faces/3.jpg" alt="img" />
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td><span className="fs-12">Due: 02, Jan 2024</span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked4" defaultChecked /></div>
                                                            <div className="fw-medium fs-14">Set up analytics tools to track user behavior.</div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div className="avatar-list-stacked">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../../assets/images/faces/12.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                                            </span>
                                                            <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-black" href="#!" scroll={false}>
                                                                +3
                                                            </Link>
                                                        </div>
                                                    </td>
                                                    <td><span className="fs-12">Due: 02, Jan 2024</span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked5" defaultChecked /></div>
                                                            <div className="fw-medium fs-14">Ensure the design is accessible to users with disabilities.</div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div className="avatar-list-stacked">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../../assets/images/faces/15.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../../assets/images/faces/11.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../../assets/images/faces/1.jpg" alt="img" />
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td><span className="fs-12">Due: 02, Jan 2024</span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked6" /></div>
                                                            <div className="fw-medium fs-14">Document key design decisions, rationale, and outcomes.</div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div className="avatar-list-stacked">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../../assets/images/faces/11.jpg" alt="img" />
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td><span className="fs-12">Due: 02, Jan 2024</span></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card className="custom-card overflow-hidden">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Header>
                                    <div className="card-title">
                                        Attachments
                                    </div>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center flex-wrap gap-2">
                                                <div className="lh-1">
                                                    <span className="avatar p-2 bg-light">
                                                        <img src="../../../assets/images/media/file-manager/1.png" alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <Link href="#!" scroll={false}><span className="d-block fw-medium">Complete Project</span></Link>
                                                    <span className="d-block text-muted fs-12 fw-normal">0.45MB</span>
                                                </div>
                                                <div className="btn-list">
                                                    <button type="button" aria-label="button" className="btn btn-sm btn-icon btn-info-light btn-wave"><i className="ri-edit-line"></i></button>
                                                    <button type="button" aria-label="button" className="btn btn-sm btn-icon btn-danger-light btn-wave"><i className="ri-delete-bin-line"></i></button>
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
                                                    <Link href="#!" scroll={false}><span className="d-block fw-medium">MiniFiles.zip</span></Link>
                                                    <span className="d-block text-muted fs-12 fw-normal">0.99MB</span>
                                                </div>
                                                <div className="btn-list">
                                                    <button aria-label="button" type="button" className="btn btn-sm btn-icon btn-info-light btn-wave"><i className="ri-edit-line"></i></button>
                                                    <button aria-label="button" type="button" className="btn btn-sm btn-icon btn-danger-light btn-wave"><i className="ri-delete-bin-line"></i></button>
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
                                                    <Link href="#!" scroll={false}><span className="d-block fw-medium">image-145.png</span></Link>
                                                    <span className="d-block text-muted fs-12 fw-normal">245KB</span>
                                                </div>
                                                <div className="btn-list">
                                                    <button aria-label="button" type="button" className="btn btn-sm btn-icon btn-info-light btn-wave"><i className="ri-edit-line"></i></button>
                                                    <button aria-label="button" type="button" className="btn btn-sm btn-icon btn-danger-light btn-wave"><i className="ri-delete-bin-line"></i></button>
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
                                                    <Link href="#!" scroll={false}><span className="d-block fw-medium">BackupFile.zip</span></Link>
                                                    <span className="d-block text-muted fs-12 fw-normal">2MB</span>
                                                </div>
                                                <div className="btn-list">
                                                    <button type="button" aria-label="button" className="btn btn-sm btn-icon btn-info-light btn-wave"><i className="ri-edit-line"></i></button>
                                                    <button type="button" aria-label="button" className="btn btn-sm btn-icon btn-danger-light btn-wave"><i className="ri-delete-bin-line"></i></button>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Header>
                                    <div className="card-title">
                                        Additional Details
                                    </div>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <div className="table-responsive">
                                        <table className="table text-nowrap">
                                            <tbody>
                                                <tr>
                                                    <td><span className="fw-medium">Task ID :</span></td>
                                                    <td>TSK - 457</td>
                                                </tr>
                                                <tr>
                                                    <td><span className="fw-medium">Task Tags :</span></td>
                                                    <td>
                                                        <span className="badge bg-light border text-default me-2">Web Design</span>
                                                        <span className="badge bg-light border text-default">Responsive Design</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><span className="fw-medium">Project Name :</span></td>
                                                    <td>
                                                        Mordern Come Design
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><span className="fw-medium">Project Status :</span></td>
                                                    <td>
                                                        <span className="fw-medium text-secondary">Inprogress</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><span className="fw-medium">Project Priority :</span></td>
                                                    <td>
                                                        <span className="badge bg-danger">High</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><span className="fw-medium">Assigned To :</span></td>
                                                    <td>
                                                        <div className="avatar-list-stacked">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Ayan</Tooltip>}>
                                                                <span className="avatar avatar-sm avatar-rounded" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" data-bs-original-title="Ayyan">
                                                                    <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                                                </span>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Sasha</Tooltip>}>
                                                                <span className="avatar avatar-sm avatar-rounded" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" data-bs-original-title="Sasha">
                                                                    <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                                                </span>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Anagha</Tooltip>}>
                                                                <span className="avatar avatar-sm avatar-rounded" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" data-bs-original-title="Anagha">
                                                                    <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                                                </span>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Hishen</Tooltip>}>
                                                                <span className="avatar avatar-sm avatar-rounded" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" data-bs-original-title="Hishen">
                                                                    <img src="../../../assets/images/faces/10.jpg" alt="img" />
                                                                </span>
                                                            </OverlayTrigger>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={4} xl={5}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">Task Discussions</div>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-unstyled profile-timeline">
                                <li>
                                    <div>
                                        <span className="avatar avatar-sm bg-primary-transparent avatar-rounded profile-timeline-avatar">
                                            A
                                        </span>
                                        <p className="mb-2 fs-14">
                                            <span className="fw-medium">Project Update Meeting on <span className="fw-medium">Tasks Id:TSK-457 </span></span>.
                                            <span className="float-end fs-11 text-muted  op-6"><i className="ri-time-line me-1 d-inline-block align-middle"></i>19,Dec 2023 - 20:06</span>
                                        </p>
                                        <p className="text-muted mb-0 fs-14">
                                            Scheduled our weekly project update meeting for next monday. Agenda includes progress,challenges, and next steps. See you there!.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                            <img src="../../../assets/images/faces/11.jpg" alt="" />
                                        </span>
                                        <p className="text-muted mb-2 fs-14">
                                            <span className="text-default">
                                                <span className="fw-medium">Robin Keith</span> reacted to the task &#128077;
                                            </span>.
                                            <span className="float-end fs-11 text-muted  op-6"><i className="ri-time-line me-1 d-inline-block align-middle"></i>22,Dec 2023 - 14:12</span>
                                        </p>
                                        <p className="text-muted mb-0 fs-14">
                                            Lorem ipsum dolor sit amet, consectetur.
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
                                    <span className="avatar avatar-md avatar-rounded">
                                        <img src="../../../assets/images/faces/9.jpg" alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Post Anything" aria-label="Recipient's username with two button addons" />
                                        <button type="button" aria-label="button" className="btn btn-outline-light border btn-wave"><i className="bi bi-emoji-smile"></i></button>
                                        <button type="button" aria-label="button" className="btn btn-outline-light border btn-wave"><i className="bi bi-paperclip"></i></button>
                                        <button type="button" aria-label="button" className="btn btn-outline-light border btn-wave"><i className="bi bi-camera"></i></button>
                                        <button className="btn btn-primary btn-wave" type="button">Post</button>
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

export default TaskDetails;
