"use client"
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const Notifications = () => {
    return (
        <Fragment>
            <Seo title={"Notifications"} />
            <div className="container-lg">
                <Row className="justify-content-center">
                    <Col xxl={8} xl={12} lg={12} md={12} sm={12}>
                        <ul className="list-unstyled mb-0 notification-container">
                            <li>
                                <Card className="custom-card un-read">
                                    <div className="top-left"></div>
                                    <div className="bottom-left"></div>
                                    <div className="bottom-right"></div>
                                    <div className="top-right"></div>
                                    <Card.Body className="p-3">
                                        <Link href="#!" scroll={false}>
                                            <div className="d-flex align-items-top mt-0 flex-wrap">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-md online me-3 avatar-rounded">
                                                        <img alt="avatar" src="../../assets/images/faces/4.jpg" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <div className="d-flex align-items-start">
                                                        <div className="mt-sm-0 mt-2">
                                                            <p className="mb-0 fs-14 fw-semibold">Violet Mila</p>
                                                            <p className="mb-0 text-muted fs-14">Informing you that an email registration has been sent to your alternative email<span className="badge bg-primary-transparent fw-semibold mx-1">Isabella@gmail.com</span> soon.</p>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <div className="btn btn-danger-transparent btn-icon btn-sm border-0">
                                                                <i className="ri-delete-bin-line"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="mb-0 d-block text-muted fs-12"><i className="ri-time-line me-1 d-inline-block"></i>10 mins ago</span>
                                                        <div className="ms-auto">
                                                            <span className="badge bg-light text-muted">
                                                                20,Jan 2024
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </li>
                            <li>
                                <Card className=" custom-card un-read">
                                    <div className="top-left"></div>
                                    <div className="bottom-left"></div>
                                    <div className="bottom-right"></div>
                                    <div className="top-right"></div>
                                    <Card.Body className="p-3">
                                        <Link href="#!" scroll={false}>
                                            <div className="d-flex align-items-top mt-0 flex-wrap">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-md offline me-3 avatar-rounded">
                                                        <img alt="avatar" src="../../assets/images/faces/15.jpg" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <div className="d-flex align-items-center">
                                                        <div className="mt-sm-0 mt-2">
                                                            <p className="mb-0 fs-14 fw-semibold">Daniel Jim</p>
                                                            <p className="mb-0 text-muted fs-14">The project work is scheduled, and it is listed in the individual work area.</p>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <div className="btn btn-danger-transparent btn-icon btn-sm border-0">
                                                                <i className="ri-delete-bin-line"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="mb-0 d-block text-muted fs-12"><i className="ri-time-line me-1 d-inline-block"></i>1 hr ago</span>
                                                        <div className="ms-auto">
                                                            <span className="badge bg-light text-muted">
                                                                20, Jan 2024
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </li>
                            <li>
                                <Card className=" custom-card un-read">
                                    <div className="top-left"></div>
                                    <div className="bottom-left"></div>
                                    <div className="bottom-right"></div>
                                    <div className="top-right"></div>
                                    <Card.Body className="card-body p-3">
                                        <Link href="#!" scroll={false}>
                                            <div className="d-flex align-items-top mt-0 flex-wrap">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-md offline me-3 avatar-rounded">
                                                        <img alt="avatar" src="../../assets/images/faces/11.jpg" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <div className="d-flex align-items-center">
                                                        <div className="mt-sm-0 mt-2">
                                                            <p className="mb-0 fs-14 fw-semibold">Oliver Ronald</p>
                                                            <p className="mb-0 text-muted fs-14">Some files are <span className="badge bg-danger-transparent fw-semibold mx-1">corrupted</span>. Please address the issue promptly.</p>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <div className="btn btn-danger-transparent btn-icon btn-sm border-0">
                                                                <i className="ri-delete-bin-line"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="mb-0 d-block text-muted fs-12"><i className="ri-time-line me-1 d-inline-block"></i>1 day ago</span>
                                                        <div className="ms-auto">
                                                            <span className="badge bg-light text-muted">
                                                                19, Jan 2024
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </li>
                            <li>
                                <Card className=" custom-card un-read">
                                    <div className="top-left"></div>
                                    <div className="bottom-left"></div>
                                    <div className="bottom-right"></div>
                                    <div className="top-right"></div>
                                    <Card.Body className="card-body p-3">
                                        <Link href="#!" scroll={false}>
                                            <div className="d-flex align-items-top mt-0 flex-wrap">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-md online me-3 avatar-rounded">
                                                        <img alt="avatar" src="../../assets/images/faces/5.jpg" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <div className="d-flex align-items-center">
                                                        <div className="mt-sm-0 mt-2">
                                                            <p className="mb-0 fs-14 fw-semibold">Artha Ava</p>
                                                            <p className="mb-0 text-muted fs-14">Project has been <span className="badge bg-success-transparent">approved</span> for initiation. This is a significant milestone. </p>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <div className="btn btn-danger-transparent btn-icon btn-sm border-0">
                                                                <i className="ri-delete-bin-line"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="mb-0 d-block text-muted fs-12"><i className="ri-time-line me-1 d-inline-block"></i>2 days ago</span>
                                                        <div className="ms-auto">
                                                            <span className="badge bg-light text-muted">
                                                                19, Jan 2024
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </li>
                            <li>
                                <Card className=" custom-card un-read">
                                    <div className="top-left"></div>
                                    <div className="bottom-left"></div>
                                    <div className="bottom-right"></div>
                                    <div className="top-right"></div>
                                    <Card.Body className="card-body p-3">
                                        <Link href="#!" scroll={false}>
                                            <div className="d-flex align-items-top mt-0 flex-wrap">
                                                <div className="avatar avatar-md bg-primary online me-3 avatar-rounded">
                                                    KZ
                                                </div>
                                                <div className="flex-fill">
                                                    <div className="d-flex align-items-center">
                                                        <div className="mt-sm-0 mt-2">
                                                            <p className="mb-0 fs-14 fw-semibold"> Kelvin Zen</p>
                                                            <p className="mb-0 text-muted fs-14">Our security systems have detected an unusual activity on your account. <i className="ri-error-warning-line text-warning"></i></p>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <div className="btn btn-danger-transparent btn-icon btn-sm border-0">
                                                                <i className="ri-delete-bin-line"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="mb-0 d-block text-muted fs-12"><i className="ri-time-line me-1 d-inline-block"></i>5 days ago</span>
                                                        <div className="ms-auto">
                                                            <span className="badge bg-light text-muted">
                                                                15, Jan 2024
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </li>
                            <li>
                                <Card className=" custom-card un-read">
                                    <div className="top-left"></div>
                                    <div className="bottom-left"></div>
                                    <div className="bottom-right"></div>
                                    <div className="top-right"></div>
                                    <Card.Body className="card-body p-3">
                                        <Link href="#!" scroll={false}>
                                            <div className="d-flex align-items-top mt-0 flex-wrap">
                                                <div className="avatar avatar-md online me-3 avatar-rounded">
                                                    <img alt="avatar" src="../../assets/images/faces/2.jpg" />
                                                </div>
                                                <div className="flex-fill">
                                                    <div className="d-flex align-items-center">
                                                        <div className="mt-sm-0 mt-2">
                                                            <p className="mb-0 fs-14 fw-semibold">Ellie Lily</p>
                                                            <p className="mb-0 text-muted fs-14"><span className="fw-medium text-info fs-13">Change Password:</span> Change your account password periodically.</p>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <div className="btn btn-danger-transparent btn-icon btn-sm border-0">
                                                                <i className="ri-delete-bin-line"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="mb-0 d-block text-muted fs-12"><i className="ri-time-line me-1 d-inline-block"></i>1 Month ago</span>
                                                        <div className="ms-auto">
                                                            <span className="badge bg-light text-muted">
                                                                12, Dec 2023
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </li>
                        </ul>
                        <div className="text-center">
                            <Button variant="" className="btn btn-info-transparent btn-loader my-3 mx-auto">
                                <span className="me-2">Loading</span>
                                <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>

        </Fragment>
    );
};

export default Notifications;
