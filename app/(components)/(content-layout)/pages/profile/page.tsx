"use client";
import { Followers, Friendsdata, ProfileGallery, Skills } from "@/shared/data/pages/profiledata";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, Form, InputGroup, ListGroup, Nav, Row, Tab } from "react-bootstrap";
import SimpleBar from "simplebar-react";

const Profile = () => {
    return (
        <Fragment>
            <Seo title={"Profile"} />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body>
                            <div className="d-sm-flex flex-wrap align-items-start gap-5 p-2 border-bottom-0">
                                <div>
                                    <div className="d-flex align-items-center gap-2 mb-4">
                                        <div className="lh-1">
                                            <span className="avatar avatar-xxl online me-3">
                                                <img src="../../assets/images/faces/22.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill main-profile-info">
                                            <div className="d-flex align-items-center justify-content-between mb-1">
                                                <h5 className="fw-medium mb-1">Anthony Richel</h5>
                                            </div>
                                            <p className="mb-1 text-muted op-7">Managing Director(M.D)</p>
                                            <p className="fs-12 mb-0 op-5">
                                                <span className=""><i className="ri-map-pin-line me-1 d-inline-block"></i>Suite 456,New York,</span>
                                                <span> USA</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="ms-auto">
                                    <Link href="/pages/profile-settings" className="btn btn-outline-primary"><i className="ri-settings-3-line me-1 d-inline-block"></i>Profile Settings</Link>
                                </div>
                            </div>
                            <div className="d-sm-flex flex-wrap align-items-top gap-5 justify-content-between p-2 border-bottom-0">
                                <div className="professional-bio">
                                    <div className="mb-4">
                                        <p className="fs-15 mb-3 fw-medium">About :</p>
                                        <p className="fs-12 text-muted op-7 mb-0">
                                            I am <b className="text-default">Anthony Richel,</b> Managing Director with deep love for designing, managing team, supporting team and management. Over the past 15 years, my journey has been a fascinating blend of milestones, shaping me into the person I am today.
                                        </p>
                                    </div>
                                    <div className="mb-0">
                                        <p className="fs-15 mb-2 fw-medium">Links :</p>
                                        <div className="mb-0">
                                            <p className="mb-0 fs-14">
                                                <Link href="https://themeforest.net/user/spruko/portfolio" target="_blank" className="text-primary" rel="noreferrer"><u>https://themeforest.net/user/spruko/portfolio</u></Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="fs-15 mb-3 me-4 fw-medium">Contact Information :</p>
                                    <div className="text-muted">
                                        <p className="fs-14 mb-4">
                                            <span className="avatar avatar-sm me-2 bg-primary-transparent text-primary border text-muted">
                                                <i className="ri-mail-line align-middle fs-14"></i>
                                            </span>
                                            jameslucas025414@gmail.com
                                        </p>
                                        <p className="fs-14 mb-4">
                                            <span className="avatar avatar-sm me-2 bg-primary-transparent text-primary border text-muted">
                                                <i className="ri-phone-line align-middle fs-14"></i>
                                            </span>
                                            +(222) 222-4251, +(245) 245-4815
                                        </p>
                                        <p className="fs-14 mb-0">
                                            <span className="avatar avatar-sm me-2 bg-primary-transparent text-primary border text-muted">
                                                <i className="ri-map-pin-line align-middle fs-14"></i>
                                            </span>
                                            AB-4541-A, San Morten Street, All-In-One town, USA,20071
                                        </p>
                                    </div>
                                </div>
                                <div className="skills-section">
                                    <p className="fs-15 mb-3 me-4 fw-medium">Skills :</p>
                                    <div className="d-flex align-items-center gap-2 flex-wrap mb-4">
                                        {Skills.map((idx) => (
                                            <Link href="#!" scroll={false} key={Math.random()}>
                                                <span className="badge bg-light border text-muted fw-medium">{idx.data}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                        <div className="card-footer border-top border-block-start-dashed">
                            <div className="d-sm-flex flex-wrap align-items-top gap-5 border-bottom-0 justify-content-between">
                                <div className="d-sm-flex gap-4">
                                    <div className="me-sm-3">
                                        <div className="d-flex gap-3">
                                            <span className="avatar avatar-md bg-light">
                                                <i className="ri-pages-line"></i>
                                            </span>
                                            <div>
                                                <p className="mb-0 fs-11 op-5">Projects</p>
                                                <p className="fw-bold fs-18 text-shadow mb-0">245</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="me-sm-3">
                                        <div className="d-flex gap-3">
                                            <span className="avatar avatar-md bg-light">
                                                <i className="ri-group-line"></i>
                                            </span>
                                            <div>
                                                <p className="mb-0 fs-11 op-5">Followers</p>
                                                <p className="fw-bold fs-18 text-shadow mb-0">24.1k</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="me-0 me-sm-3">
                                        <div className="d-flex gap-3">
                                            <span className="avatar avatar-md bg-light">
                                                <i className="ri-user-follow-line"></i>
                                            </span>
                                            <div>
                                                <p className="mb-0 fs-11 op-5">Following</p>
                                                <p className="fw-bold fs-18 text-shadow mb-0">142</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-sm-flex justify-content-between gap-3 align-items-center">
                                    <div className="d-flex align-items-center gap-3 flex-wrap">
                                        <h6 className="fw-medium">Follow :</h6>
                                        <div className="btn-list mb-0">
                                            <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light">
                                                <i className="ri-facebook-line fw-medium"></i>
                                            </Button>
                                            <Button variant="" className="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light">
                                                <i className="ri-twitter-x-line fw-medium"></i>
                                            </Button>
                                            <Button variant="" className="btn btn-sm btn-icon btn-warning-light btn-wave waves-effect waves-light">
                                                <i className="ri-instagram-line fw-medium"></i>
                                            </Button>
                                            <Button variant="" className="btn btn-sm btn-icon btn-success-light btn-wave waves-effect waves-light">
                                                <i className="ri-github-line fw-medium"></i>
                                            </Button>
                                            <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light">
                                                <i className="ri-youtube-line fw-medium"></i>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xxl={9} xl={12}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="card-body p-0">
                                    <Tab.Container defaultActiveKey="active">
                                        <div className="p-3 border-bottom border-block-end-dashed d-flex align-items-center justify-content-center">
                                            <div>
                                                <Nav className="nav nav-tabs mb-0 tab-style-6 justify-content-start bg-transparent" id="myTab" role="tablist">
                                                    <Nav.Item role="presentation">
                                                        <Nav.Link eventKey="active" id="activity-tab" data-bs-toggle="tab"
                                                            data-bs-target="#activity-tab-pane" type="button" role="tab"
                                                            aria-controls="activity-tab-pane" aria-selected="true"><i
                                                                className="ri-gift-line me-1 align-middle d-inline-block"></i>Activity</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item role="presentation">
                                                        <Nav.Link eventKey="post" id="posts-tab" data-bs-toggle="tab"
                                                            data-bs-target="#posts-tab-pane" type="button" role="tab"
                                                            aria-controls="posts-tab-pane" aria-selected="false"><i
                                                                className="ri-bill-line me-1 align-middle d-inline-block"></i>Posts</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item role="presentation">
                                                        <Nav.Link eventKey="friend" id="followers-tab" data-bs-toggle="tab"
                                                            data-bs-target="#followers-tab-pane" type="button" role="tab"
                                                            aria-controls="followers-tab-pane" aria-selected="false"><i
                                                                className="ri-money-dollar-box-line me-1 align-middle d-inline-block"></i>Friends</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item role="presentation">
                                                        <Nav.Link eventKey="gallery" id="gallery-tab" data-bs-toggle="tab"
                                                            data-bs-target="#gallery-tab-pane" type="button" role="tab"
                                                            aria-controls="gallery-tab-pane" aria-selected="false"><i
                                                                className="ri-exchange-box-line me-1 align-middle d-inline-block"></i>Gallery</Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <Tab.Content className="" id="myTabContent">
                                                <Tab.Pane eventKey="active" className="fade p-0 border-0" id="activity-tab-pane"
                                                    role="tabpanel" aria-labelledby="activity-tab" tabIndex={0}>
                                                    <ul className="list-unstyled profile-timeline">
                                                        <li>
                                                            <div>
                                                                <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                                                    <img src="../../assets/images/faces/5.jpg" alt="" />
                                                                </span>
                                                                <p className="text-muted mb-1 fs-14">
                                                                    <span className="text-default"><b>Nitheri Carter</b> commented on your post <b>Wanderlust Adventures</b></span>.<span className="float-end badge bg-primary-transparent"><i className="ri-time-line me-1 d-inline-block align-middle"></i>15,Oct 2023 - 15:12</span>
                                                                </p>
                                                                <p className="text-muted fs-14">Photo sent By Aayan that all about vacation of Kulumanali...</p>
                                                                <p className="profile-activity-media mb-0">
                                                                    <Link href="#!" scroll={false}>
                                                                        <img src="../../assets/images/media/media-59.jpg" className="m-1" alt="" />
                                                                    </Link>
                                                                    <Link href="#!" scroll={false}>
                                                                        <img src="../../assets/images/media/media-60.jpg" className="m-1" alt="" />
                                                                    </Link>
                                                                    <Link href="#!" scroll={false}>
                                                                        <img src="../../assets/images/media/media-61.jpg" className="m-1" alt="" />
                                                                    </Link>
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                                                    <img src="../../assets/images/faces/11.jpg" alt="" />
                                                                </span>
                                                                <p className="text-muted mb-2 fs-14">
                                                                    <span className="text-default"><b>Liam Spark</b> responded to the message &#128517;</span>.<span className="float-end badge bg-primary-transparent"><i className="ri-time-line me-1 d-inline-block align-middle"></i>24,Nov 2023 - 04:22</span>
                                                                </p>
                                                                <p className="text-muted mb-0 fs-14">
                                                                    Nullam congue arcu in eros fermentum, non vestibulum arcu maximus. Pellentesque interdum quam ligula, eu congue sapien placerat ac. Aenean sit amet laoreet lacus, in venenatis tellus. Praesent vel erat sem. Donec mollis sodales ante a ullamcorper.
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                                                    <img src="../../assets/images/faces/4.jpg" alt="" />
                                                                </span>
                                                                <p className="text-muted mb-2 fs-14"> Sent You a File for Review.
                                                                    <span className="text-default"><b> Amelia Davis</b> Sent You Files for<b>Review</b></span>.<span className="float-end badge bg-primary-transparent"><i className="ri-time-line me-1 d-inline-block align-middle"></i>03,Dec 2023 - 17:32</span>
                                                                </p>
                                                                <p className="profile-activity-media mb-0">
                                                                    <Link href="#!" scroll={false}>
                                                                        <img src="../../assets/images/media/file-manager/3.png" alt="" />
                                                                    </Link>
                                                                    <span className="fs-11 text-muted">542.07KB</span>
                                                                    <Link href="#!" scroll={false}>
                                                                        <img src="../../assets/images/media/file-manager/3.png" alt="" />
                                                                    </Link>
                                                                    <span className="fs-11 text-muted">875.07KB</span>
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <span className="avatar avatar-sm bg-success-transparent avatar-rounded profile-timeline-avatar">
                                                                    L
                                                                </span>
                                                                <p className="text-muted mb-2 fs-14">
                                                                    <span className="text-default"><b>You</b> shared with 5 Recipients <b>Harvey,Jorge,Tracey,Arunima,Vidhanth</b></span>.<span className="float-end badge bg-primary-transparent"><i className="ri-time-line me-1 d-inline-block align-middle"></i>18,Nov 2023 - 07:41</span>
                                                                </p>
                                                                <p className="profile-activity-media mb-2">
                                                                    <Link href="#!" scroll={false}>
                                                                        <img src="../../assets/images/media/media-75.jpg" alt="" />
                                                                    </Link>
                                                                    <Link href="#!" scroll={false}>
                                                                        <img src="../../assets/images/media/media-76.jpg" alt="" />
                                                                    </Link>
                                                                </p>
                                                                <div>
                                                                    <div className="avatar-list-stacked">
                                                                        <span className="avatar avatar-sm avatar-rounded">
                                                                            <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                                        </span>
                                                                        <span className="avatar avatar-sm avatar-rounded">
                                                                            <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                                        </span>
                                                                        <span className="avatar avatar-sm avatar-rounded">
                                                                            <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                                        </span>
                                                                        <span className="avatar avatar-sm avatar-rounded">
                                                                            <img src="../../assets/images/faces/10.jpg" alt="img" />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                                                    <img src="../../assets/images/media/media-39.jpg" alt="" />
                                                                </span>
                                                                <p className="mb-1 fs-14">
                                                                    <b>You</b> Commented on <b>Philip Jimmi</b> post <Link className="text-secondary" href="#!" scroll={false}><u>#winter</u></Link>.<span className="float-end badge bg-primary-transparent"><i className="ri-time-line me-1 d-inline-block align-middle"></i>26,Dec 2023 - 18:46</span>
                                                                </p>
                                                                <p className="text-muted fs-14">Coming Seasons are so horrible pay attention &#128076;</p>
                                                                <p className="profile-activity-media mb-0">
                                                                    <Link href="#!" scroll={false}>
                                                                        <img src="../../assets/images/media/media-26.jpg" alt="" />
                                                                    </Link>
                                                                    <Link href="#!" scroll={false}>
                                                                        <img src="../../assets/images/media/media-29.jpg" alt="" />
                                                                    </Link>
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <span className="avatar avatar-sm bg-primary-transparent avatar-rounded profile-timeline-avatar">
                                                                    A
                                                                </span>
                                                                <p className="mb-2 fs-14">
                                                                    <b>You</b> Commented on <b>Advika Adhana</b> post <Link className="text-secondary" href="#!" scroll={false}><u>#Technology</u></Link>.<span className="float-end badge bg-primary-transparent"><i className="ri-time-line me-1 d-inline-block align-middle"></i>02,Jan 2024 - 05:14</span>
                                                                </p>
                                                                <p className="profile-activity-media mb-0">
                                                                    <Link href="#!" scroll={false}>
                                                                        <img src="../../assets/images/media/media-17.jpg" alt="" />
                                                                    </Link>
                                                                    <Link href="#!" scroll={false}>
                                                                        <img src="../../assets/images/media/media-18.jpg" alt="" />
                                                                    </Link>
                                                                </p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="post" className="fade p-0 border-0" id="posts-tab-pane"
                                                    role="tabpanel" aria-labelledby="posts-tab" tabIndex={0}>
                                                    <ListGroup>

                                                        <ListGroup.Item>
                                                            <div className="d-sm-flex align-items-center lh-1">
                                                                <div className="me-3">
                                                                    <span className="avatar avatar-md avatar-rounded">
                                                                        <img src="../../assets/images/faces/9.jpg" alt="" />
                                                                    </span>
                                                                </div>
                                                                <div className="flex-fill me-sm-2 mt-1 mt-sm-0">
                                                                    <InputGroup>
                                                                        <Form.Control type="text" className="" placeholder="Recipient's username" aria-label="Recipient's username with two button addons" />
                                                                        <Button variant="" className="btn btn-light btn-wave d-none d-sm-block" type="button"><i className="bi bi-emoji-smile"></i></Button>
                                                                        <Button variant="" className="btn btn-light btn-wave" type="button"><i className="bi bi-paperclip"></i></Button>
                                                                        <Button variant="" className="btn btn-light btn-wave" type="button"><i className="bi bi-camera"></i></Button>
                                                                        <Button variant="" className="btn btn-primary btn-wave" type="button">Post</Button>
                                                                    </InputGroup>
                                                                </div>
                                                            </div>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item className="p-0">
                                                            <SimpleBar className="p-3">
                                                                <Row className="gy-3" id="profile-posts-scroll">
                                                                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} className="">
                                                                        <div className="rounded border">
                                                                            <div className="p-3 d-flex align-items-top flex-wrap gap-1">
                                                                                <div className="me-2">
                                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                                        <img src="../../assets/images/faces/9.jpg" alt="" />
                                                                                    </span>
                                                                                </div>
                                                                                <div className="flex-fill">
                                                                                    <p className="mb-1 fw-medium lh-1">You</p>
                                                                                    <p className="fs-11 mb-2 text-muted">12, Sep - 06:55AM</p>
                                                                                    <p className="fs-12 text-muted mb-1">Dicover More on the exiting adventures making a day good.</p>
                                                                                    <p className="mb-3 profile-post-link">
                                                                                        <Link href="#!" scroll={false} className="fs-12 text-primary">
                                                                                            <u>https://www.discovery.com/nature/caring-for-coral</u>
                                                                                        </Link>
                                                                                    </p>
                                                                                    <div className="d-flex align-items-center justify-content-between mb-md-0 mb-2">
                                                                                        <div>
                                                                                            <div className="btn-list">
                                                                                                <Button variant="" className="btn btn-primary-light btn-sm btn-wave">
                                                                                                    Comment
                                                                                                </Button>
                                                                                                <Button variant="" className="btn btn-icon btn-sm btn-success-light btn-wave">
                                                                                                    <i className="ri-thumb-up-line"></i>
                                                                                                </Button>
                                                                                                <Button variant="" className="btn btn-icon btn-sm btn-danger-light btn-wave">
                                                                                                    <i className="ri-share-line"></i>
                                                                                                </Button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="d-flex align-items-top">
                                                                                    <div>
                                                                                        <span className="badge bg-secondary-transparent me-2">Adventure</span>
                                                                                    </div>
                                                                                    <Dropdown>
                                                                                        <Dropdown.Toggle as="a" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                            <i className="ti ti-dots-vertical"></i>
                                                                                        </Dropdown.Toggle>
                                                                                        <Dropdown.Menu as="ul">
                                                                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Delete</Link></Dropdown.Item>
                                                                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Hide</Link></Dropdown.Item>
                                                                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Edit</Link></Dropdown.Item>
                                                                                        </Dropdown.Menu>
                                                                                    </Dropdown>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Col>
                                                                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} className="">
                                                                        <div className="rounded border">
                                                                            <div className="p-3 d-flex align-items-top flex-wrap gap-1">
                                                                                <div className="me-2">
                                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                                        <img src="../../assets/images/faces/9.jpg" alt="" />
                                                                                    </span>
                                                                                </div>
                                                                                <div className="flex-fill">
                                                                                    <p className="mb-1 fw-medium lh-1">You</p>
                                                                                    <p className="fs-11 mb-2 text-muted">08, Sep - 15:25PM</p>
                                                                                    <p className="fs-12 text-muted mb-1">Shared pictures with 3 of your friends <span>Kaira,Willi,Sandyn</span>.</p>
                                                                                    <div className="d-flex lh-1 justify-content-between mb-3">
                                                                                        <div>
                                                                                            <Link href="#!" scroll={false}>
                                                                                                <span className="avatar avatar-md me-1">
                                                                                                    <img src="../../assets/images/media/media-40.jpg" alt="" />
                                                                                                </span>
                                                                                            </Link>
                                                                                            <Link href="#!" scroll={false}>
                                                                                                <span className="avatar avatar-md me-1">
                                                                                                    <img src="../../assets/images/media/media-45.jpg" alt="" />
                                                                                                </span>
                                                                                            </Link>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="d-flex align-items-center justify-content-between mb-md-0 mb-2">
                                                                                        <div>
                                                                                            <div className="btn-list">
                                                                                                <Button variant="" className="btn btn-primary-light btn-sm btn-wave">
                                                                                                    Comment
                                                                                                </Button>
                                                                                                <Button variant="" className="btn btn-icon btn-sm btn-success-light btn-wave">
                                                                                                    <i className="ri-thumb-up-line"></i>
                                                                                                </Button>
                                                                                                <Button variant="" className="btn btn-icon btn-sm btn-danger-light btn-wave">
                                                                                                    <i className="ri-share-line"></i>
                                                                                                </Button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div>
                                                                                    <div className="d-flex align-items-top">
                                                                                        <div>
                                                                                            <span className="badge bg-success-transparent me-2">Nature</span>
                                                                                        </div>
                                                                                        <Dropdown>
                                                                                            <Dropdown.Toggle as="a" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                <i className="ti ti-dots-vertical"></i>
                                                                                            </Dropdown.Toggle>
                                                                                            <Dropdown.Menu as="ul">
                                                                                                <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Delete</Link></Dropdown.Item>
                                                                                                <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Hide</Link></Dropdown.Item>
                                                                                                <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Edit</Link></Dropdown.Item>
                                                                                            </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                    </div>
                                                                                    <div className="avatar-list-stacked d-block mt-4 text-end">
                                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                                            <img src="../../assets/images/faces/1.jpg" alt="img" />
                                                                                        </span>
                                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                                            <img src="../../assets/images/faces/5.jpg" alt="img" />
                                                                                        </span>
                                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                                            <img src="../../assets/images/faces/16.jpg" alt="img" />
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Col>
                                                                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} className="">
                                                                        <div className="rounded border">
                                                                            <div className="p-3 d-flex align-items-top flex-wrap gap-1">
                                                                                <div className="me-2">
                                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                                        <img src="../../assets/images/faces/9.jpg" alt="" />
                                                                                    </span>
                                                                                </div>
                                                                                <div className="flex-fill">
                                                                                    <p className="mb-1 fw-medium lh-1">You</p>
                                                                                    <p className="fs-11 mb-2 text-muted">20, Oct - 14:35PM</p>
                                                                                    <p className="fs-12 text-muted mb-1">Followed this Author for Exceptional Themes and Top-notch Code in the Market.</p>
                                                                                    <p className="mb-3 profile-post-link">
                                                                                        <Link href="https://themeforest.net/user/spruko/portfolio" target="_blank" className="fs-12 text-primary" rel="noreferrer">
                                                                                            <u>https://themeforest.net/user/spruko/portfolio</u>
                                                                                        </Link>
                                                                                    </p>
                                                                                    <div className="d-flex align-items-center justify-content-between mb-md-0 mb-2">
                                                                                        <div>
                                                                                            <div className="btn-list">
                                                                                                <Button variant="" className="btn btn-primary-light btn-sm btn-wave">
                                                                                                    Comment
                                                                                                </Button>
                                                                                                <Button variant="" className="btn btn-icon btn-sm btn-success-light btn-wave">
                                                                                                    <i className="ri-thumb-up-line"></i>
                                                                                                </Button>
                                                                                                <Button variant="" className="btn btn-icon btn-sm btn-danger-light btn-wave">
                                                                                                    <i className="ri-share-line"></i>
                                                                                                </Button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="d-flex align-items-top">
                                                                                    <div>
                                                                                        <span className="badge bg-secondary-transparent me-2">Books</span>
                                                                                    </div>
                                                                                    <Dropdown>
                                                                                        <Dropdown.Toggle as="a" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                            <i className="ti ti-dots-vertical"></i>
                                                                                        </Dropdown.Toggle>
                                                                                        <Dropdown.Menu as="ul">
                                                                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Delete</Link></Dropdown.Item>
                                                                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Hide</Link></Dropdown.Item>
                                                                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Edit</Link></Dropdown.Item>
                                                                                        </Dropdown.Menu>
                                                                                    </Dropdown>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Col>
                                                                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} className="">
                                                                        <div className="rounded border">
                                                                            <div className="p-3 d-flex align-items-top flex-wrap gap-1">
                                                                                <div className="me-2">
                                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                                        <img src="../../assets/images/faces/9.jpg" alt="" />
                                                                                    </span>
                                                                                </div>
                                                                                <div className="flex-fill">
                                                                                    <p className="mb-1 fw-medium lh-1">You</p>
                                                                                    <p className="fs-11 mb-2 text-muted">15, Nov - 12:45PM</p>
                                                                                    <p className="fs-12 text-muted mb-0"> Pellentesque dui tellus, porta vitae lacinia id, consequat a ante. Aenean et est sit amet magna convallis porta ac eu lorem.</p>
                                                                                    <div className="d-flex align-items-center justify-content-between mb-md-0 mb-2">
                                                                                        <div>
                                                                                            <div className="btn-list">
                                                                                                <Button variant="" className="btn btn-primary-light btn-sm btn-wave">
                                                                                                    Comment
                                                                                                </Button>
                                                                                                <Button variant="" className="btn btn-icon btn-sm btn-success-light btn-wave">
                                                                                                    <i className="ri-thumb-up-line"></i>
                                                                                                </Button>
                                                                                                <Button variant="" className="btn btn-icon btn-sm btn-danger-light btn-wave">
                                                                                                    <i className="ri-share-line"></i>
                                                                                                </Button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="d-flex align-items-top">
                                                                                    <div>
                                                                                        <span className="badge bg-primary-transparent me-2">Design</span>
                                                                                    </div>
                                                                                    <Dropdown>
                                                                                        <Dropdown.Toggle as="a" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                            <i className="ti ti-dots-vertical"></i>
                                                                                        </Dropdown.Toggle>
                                                                                        <Dropdown.Menu as="ul">
                                                                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Delete</Link></Dropdown.Item>
                                                                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Hide</Link></Dropdown.Item>
                                                                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Edit</Link></Dropdown.Item>
                                                                                        </Dropdown.Menu>
                                                                                    </Dropdown>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Col>
                                                                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} className="">
                                                                        <div className="rounded border">
                                                                            <div className="p-3 d-flex align-items-top flex-wrap gap-1">
                                                                                <div className="me-2">
                                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                                        <img src="../../assets/images/faces/9.jpg" alt="" />
                                                                                    </span>
                                                                                </div>
                                                                                <div className="flex-fill">
                                                                                    <p className="mb-1 fw-medium lh-1">You</p>
                                                                                    <p className="fs-11 mb-2 text-muted">28, Nov - 22:38PM</p>
                                                                                    <p className="fs-12 text-muted mb-1">Shared pictures with 4 of friends <span>Hiren,Sasha,Biden,Thara</span>.</p>
                                                                                    <div className="d-flex lh-1 justify-content-between mb-3">
                                                                                        <div>
                                                                                            <Link href="#!" scroll={false}>
                                                                                                <span className="avatar avatar-md me-1">
                                                                                                    <img src="../../assets/images/media/media-52.jpg" alt="" />
                                                                                                </span>
                                                                                            </Link>
                                                                                            <Link href="#!" scroll={false}>
                                                                                                <span className="avatar avatar-md me-1">
                                                                                                    <img src="../../assets/images/media/media-56.jpg" alt="" />
                                                                                                </span>
                                                                                            </Link>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="d-flex align-items-center justify-content-between mb-md-0 mb-2">
                                                                                        <div>
                                                                                            <div className="btn-list">
                                                                                                <Button variant="" className="btn btn-primary-light btn-sm btn-wave">
                                                                                                    Comment
                                                                                                </Button>
                                                                                                <Button variant="" className="btn btn-icon btn-sm btn-success-light btn-wave">
                                                                                                    <i className="ri-thumb-up-line"></i>
                                                                                                </Button>
                                                                                                <Button variant="" className="btn btn-icon btn-sm btn-danger-light btn-wave">
                                                                                                    <i className="ri-share-line"></i>
                                                                                                </Button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div>
                                                                                    <div className="d-flex align-items-top">
                                                                                        <div>
                                                                                            <span className="badge bg-success-transparent me-2">Natural Products</span>
                                                                                        </div>
                                                                                        <Dropdown>
                                                                                            <Dropdown.Toggle as="a" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                <i className="ti ti-dots-vertical"></i>
                                                                                            </Dropdown.Toggle>
                                                                                            <Dropdown.Menu as="ul">
                                                                                                <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Delete</Link></Dropdown.Item>
                                                                                                <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Hide</Link></Dropdown.Item>
                                                                                                <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Edit</Link></Dropdown.Item>
                                                                                            </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                    </div>
                                                                                    <div className="avatar-list-stacked d-block mt-4 text-end">
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
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Col>
                                                                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} className="">
                                                                        <div className="rounded border">
                                                                            <div className="p-3 d-flex align-items-top flex-wrap gap-1">
                                                                                <div className="me-2">
                                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                                        <img src="../../assets/images/faces/9.jpg" alt="" />
                                                                                    </span>
                                                                                </div>
                                                                                <div className="flex-fill">
                                                                                    <p className="mb-1 fw-medium lh-1">You</p>
                                                                                    <p className="fs-11 mb-2 text-muted">03, Dec - 18:22PM</p>
                                                                                    <p className="fs-12 text-muted mb-0"> Pellentesque dui tellus, porta vitae lacinia id, consequat a ante. Aenean et est sit amet magna convallis porta ac eu lorem.</p>
                                                                                    <p className="fs-12 text-muted mb-3">There are many variations of passages</p>
                                                                                    <div className="d-flex align-items-center justify-content-between mb-md-0 mb-2">
                                                                                        <div>
                                                                                            <div className="btn-list">
                                                                                                <Button variant="" className="btn btn-primary-light btn-sm btn-wave">
                                                                                                    Comment
                                                                                                </Button>
                                                                                                <Button variant="" className="btn btn-icon btn-sm btn-success-light btn-wave">
                                                                                                    <i className="ri-thumb-up-line"></i>
                                                                                                </Button>
                                                                                                <Button variant="" className="btn btn-icon btn-sm btn-danger-light btn-wave">
                                                                                                    <i className="ri-share-line"></i>
                                                                                                </Button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="d-flex align-items-top">
                                                                                    <div>
                                                                                        <span className="badge bg-primary-transparent me-2">Development</span>
                                                                                    </div>
                                                                                    <Dropdown>
                                                                                        <Dropdown.Toggle as="a" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                            <i className="ti ti-dots-vertical"></i>
                                                                                        </Dropdown.Toggle>
                                                                                        <Dropdown.Menu as="ul">
                                                                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Delete</Link></Dropdown.Item>
                                                                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Hide</Link></Dropdown.Item>
                                                                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Edit</Link></Dropdown.Item>
                                                                                        </Dropdown.Menu>
                                                                                    </Dropdown>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </SimpleBar>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item>
                                                            <div className="text-center">
                                                                <Button variant="" className="btn btn-primary-light btn-wave">Show All</Button>
                                                            </div>
                                                        </ListGroup.Item>
                                                    </ListGroup>

                                                </Tab.Pane>
                                                <Tab.Pane eventKey="friend" className="fade p-0 border-0" id="followers-tab-pane"
                                                    role="tabpanel" aria-labelledby="followers-tab" tabIndex={0}>
                                                    <Row>
                                                        {Friendsdata.map((idx) => (
                                                            <Col xxl={4} xl={4} lg={6} md={6} sm={12} key={Math.random()}>
                                                                <div className="card custom-card shadow-none border">
                                                                    <div className="card-body p-4">
                                                                        <div className="text-center">
                                                                            <span className="avatar avatar-xl avatar-rounded">
                                                                                <img src={idx.src1} alt="" />
                                                                            </span>
                                                                            <div className="mt-2">
                                                                                <p className="mb-0 fw-medium">{idx.heading}</p>
                                                                                <p className="fs-12 op-7 mb-1 text-muted">{idx.mail}</p>
                                                                                <span className={`badge bg-${idx.color}-transparent rounded-pill`}>{idx.role}</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-footer text-center">
                                                                        <div className="btn-list">
                                                                            <Button variant="" className="btn btn-sm btn-light btn-wave">Block</Button>
                                                                            <Button variant="" className="btn btn-sm btn-primary btn-wave">Unfollow</Button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        ))}
                                                        <Col xl={12}>
                                                            <div className="text-center mt-4">
                                                                <Button variant="" className="btn btn-primary-light btn-wave">Show All</Button>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="gallery" className="fade p-0 border-0" id="gallery-tab-pane"
                                                    role="tabpanel" aria-labelledby="gallery-tab" tabIndex={0}>
                                                    <ProfileGallery />
                                                    <Col xl={12}>
                                                        <div className="text-center mt-4">
                                                            <Button variant="" className="btn btn-primary-light btn-wave waves-effect waves-light">Show All</Button>
                                                        </div>
                                                    </Col>
                                                </Tab.Pane>

                                            </Tab.Content>
                                        </div>
                                    </Tab.Container>

                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={3} xl={12} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="card-header">
                            <div className="card-title">
                                Personal Info
                            </div>
                        </div>
                        <Card.Body>
                            <ListGroup>
                                <ListGroup.Item>
                                    <div className="d-flex flex-wrap align-items-center">
                                        <div className="me-2 fw-medium">
                                            Name :
                                        </div>
                                        <span className="fs-12 text-muted">James Lucas</span>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="d-flex flex-wrap align-items-center">
                                        <div className="me-2 fw-medium">
                                            Email :
                                        </div>
                                        <span className="fs-12 text-muted">jameslucas457@gmail.com</span>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="d-flex flex-wrap align-items-center">
                                        <div className="me-2 fw-medium">
                                            Phone :
                                        </div>
                                        <span className="fs-12 text-muted">+(222) 222-4251</span>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="d-flex flex-wrap align-items-center">
                                        <div className="me-2 fw-medium">
                                            Designation :
                                        </div>
                                        <span className="fs-12 text-muted">Managing Director</span>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="d-flex flex-wrap align-items-center">
                                        <div className="me-2 fw-medium">
                                            Age :
                                        </div>
                                        <span className="fs-12 text-muted">27</span>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="d-flex flex-wrap align-items-center">
                                        <div className="me-2 fw-medium">
                                            Experience :
                                        </div>
                                        <span className="fs-12 text-muted">15 Years</span>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card overflow-hidden">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="card-header">
                            <div className="card-title">
                                Followers :
                            </div>
                        </div>
                        <Card.Body>
                            <ListGroup>
                                {Followers.map((idx) => (
                                    <ListGroup.Item key={Math.random()}>
                                        <div className="d-sm-flex align-items-top flex-wrap gap-3">
                                            <div>
                                                <span className="avatar avatar-sm">
                                                    <img src={idx.src1} alt="img" />
                                                </span>
                                            </div>
                                            <div className="mt-sm-0 mt-1 fw-medium flex-fill">
                                                <p className="mb-0 lh-1">{idx.heading}</p>
                                                <span className="fs-11 text-muted op-7">{idx.mail}</span>
                                            </div>
                                            <button className="btn btn-primary-light btn-wave btn-sm btn-icon"><i className="ri-user-follow-line"></i></button>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Profile;
