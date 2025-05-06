"use client";
import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, Card, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import Link from "next/link";
import Seo from "@/shared/layout-components/seo/seo";

const CandidateDetails = () => {

    return (
        <Fragment>
            <Seo title={"Candidate Details"} />
            <Row>
                <Col lg={12}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body>
                            <div className="d-flex align-items-center flex-wrap justify-content-between gap-2">
                                <div className="d-flex flex-wrap gap-2">
                                    <div>
                                        <span className="avatar avatar-xxl">
                                            <img src="../../../assets/images/faces/1.jpg" className="img-fluid" alt="" />
                                        </span>
                                    </div>
                                    <div className="ms-3">
                                        <h4 className="fw-medium mb-0 d-flex align-items-center"><Link href="#!" scroll={false}> Isabella Rose <span className="fs-13 text-success"><i className="ri-checkbox-circle-line text-success fs-13 me-1 d-inline-block"></i>Verified</span></Link></h4>
                                        <Link href="#!" scroll={false} className="fw-medium fs-14"><i className="bi bi-briefcase me-1"></i> Software Developer</Link>
                                        <div className="d-flex flex-wrap gap-2 align-items-center fs-11 text-muted">
                                            <p className="fs-11 mb-0">Ratings : </p>
                                            <div className="min-w-fit-content ms-2">
                                                <span className="text-warning me-1"><i className="ri-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="ri-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="ri-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="ri-star-fill"></i></span>
                                                <span className="text-warning"><i className="ri-star-half-line"></i></span>
                                            </div>
                                            <Link href="#!" scroll={false} className="ms-1 min-w-fit-content text-muted">
                                                <span>(138)</span>
                                                <span>Ratings</span>
                                            </Link>
                                        </div>
                                        <div className="d-flex fs-14 my-3">
                                            <div className="popular-tags">
                                                <Link href="#!" scroll={false} className="fs-13 me-2 d-inline-block"><i className="bi bi-geo-alt me-2 text-primary"></i>Paris, France</Link>
                                                <span className="vr align-middle me-2"></span>
                                                <Link href="#!" scroll={false} className="fs-13 me-2 d-inline-block"><i className="bi bi-coin me-2 text-primary"></i>Package (Yearly) : <span className="fw-medium" data-bs-toggle="tooltip" title="Current Salary">$15,000</span> - <span className="fw-medium" data-bs-toggle="tooltip" title="Expected Salary">$25,000</span></Link>
                                                <span className="vr align-middle me-2"></span>
                                                <Link href="#!" scroll={false} className="fs-13 me-2 d-inline-block"><i className="bi bi-briefcase me-2 text-primary"></i>2 Year Experience</Link>
                                                <span className="vr align-middle me-2"></span>
                                                <Link href="#!" scroll={false} className="fs-13 me-2 d-inline-block"><i className="bi bi-mortarboard me-2 text-primary"></i>Graduate</Link>
                                            </div>
                                        </div>
                                        <div className="popular-tags">
                                            <Link href="#!" scroll={false} className="badge rounded-pill bg-info-transparent me-1"><i className="bi bi-moon-stars me-1"></i>Full Time</Link>
                                            <Link href="#!" scroll={false} className="badge rounded-pill bg-danger-transparent"><i className="bi bi-clock me-1"></i> Immediate Joinee</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-list">
                                    <Link href="#!" scroll={false} className="btn btn-primary"><i className="ri-download-line me-1"></i> Download Resume</Link>
                                    <Link href="#!" scroll={false} className="btn btn-icon btn-primary-light btn-wave">
                                        <i className="ri-heart-line fs-13"></i>
                                    </Link>
                                    <Link href="#!" scroll={false} className="btn btn-icon btn-primary-light btn-wave">
                                        <i className="ri-share-line"></i>
                                    </Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={8}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                <h5 className="mb-0 fw-medium fs-22 text-primary">
                                    Candidate Profile Information
                                </h5>
                            </div>
                        </Card.Header>
                        <div className="card-body p-0 candidate-edu-timeline">
                            <div className="p-4 border-bottom">
                                <h5 className="fw-medium fs-17 d-flex align-items-center gap-2"><span className="avatar bg-primary avatar-sm"><i className="ri-briefcase-line fs-14"></i></span> Career Objective :</h5>
                                <div className="ms-4 ps-3 fs-14">
                                    <p className="op-9">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque dui tellus, porta vitae lacinia id, consequat a ante. Aenean et est sit amet magna convallis porta ac eu lorem. Maecenas vitae dictum dui, ut pellentesque erat.</p>
                                    <p className="mb-0 op-9">Quisque et molestie nisi. Cras at erat nec lectus venenatis tincidunt nec non eros. In neque nisi, scelerisque in ante at, pretium gravida purus.</p>
                                </div>
                            </div>
                            <div className="p-4 border-bottom">
                                <h5 className="fw-medium fs-17 d-flex align-items-center gap-2"><span className="avatar bg-primary avatar-sm"><i className="ri-stack-line fs-14"></i></span> Education :</h5>
                                <div className="ps-5 fs-14">
                                    <Row>
                                        <Col xl={6}>
                                            <p className="fw-medium fs-14 mb-0">Bachelors of science in computer science</p>
                                            <div className="d-flex gap-2">
                                                <p className="mb-0"> LMN Institute of Technology</p>
                                                <p className="mb-0 text-muted"><i className="bi bi-geo-alt fs-12"></i> Banglore</p>
                                            </div>
                                            <p className="mb-4"> (2015 Mar - 2019 Apr)</p>
                                        </Col>
                                        <Col xl={6}>
                                            <p className="fw-medium fs-14 mb-0">Intermediate (MPC)</p>
                                            <div className="d-flex gap-2">
                                                <p className="mb-0">Suriyan Kendreya College</p>
                                                <p className="mb-0 text-muted"><i className="bi bi-geo-alt fs-12"></i> Vijayawada</p>
                                            </div>
                                            <p className="mb-0"> (2013 Mar - 2015 Apr)</p>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div className="p-4 border-bottom">
                                <h5 className="fw-medium fs-17 d-flex align-items-center gap-2"><span className="avatar bg-primary avatar-sm"><i className="ri-user-star-line fs-14"></i></span> Certifications :</h5>
                                <div className="ps-5 fs-14">
                                    <Row>
                                        <Col xl={6}>
                                            <p className="fw-medium fs-14 mb-0">React Development (5 Months)</p>
                                            <p className="mb-0"> Nexus Technologies</p>
                                        </Col>
                                        <Col xl={6}>
                                            <p className="fw-medium fs-14 mb-0">Fullstack Development (12 Months)</p>
                                            <p className="mb-0"> Innovate Enterprise.Co.</p>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div className="p-4 border-bottom">
                                <h5 className="fw-medium fs-17 d-flex align-items-center gap-2"><span className="avatar bg-primary avatar-sm"><i className="ri-profile-line fa-14"></i></span> Publications :</h5>
                                <div className="ms-3">
                                    <ol className="list-group border-0 list-bullets fs-14">
                                        <li className="border-0 py-1"><span className="fw-medium">“Digital in the Modern Age,”</span>  SkTech Trends Journal, Issue 2, 2021</li>
                                        <li className="border-0 py-1"><span className="fw-medium">“Impact of Social Media,”</span>  Quarterly, Spring Edition, June 2015</li>
                                        <li className="border-0 py-1"><span className="fw-medium">“Machine Learning Algorithms for Analytics,”</span> proceedings, 2018</li>
                                    </ol>
                                </div>
                            </div>
                            <div className="p-4 border-bottom">
                                <h5 className="fw-medium fs-17 d-flex align-items-center gap-2"><span className="avatar bg-primary avatar-sm"><i className="ri-equalizer-2-line fs-14"></i></span> Activities and Interests :</h5>
                                <div className="ms-3">
                                    <ol className="list-group border-0 list-bullets fs-14">
                                        <li className="border-0 py-1">Photography</li>
                                        <li className="border-0 py-1">Collecting Antique Things</li>
                                        <li className="border-0 py-1">Painting</li>
                                    </ol>
                                </div>
                            </div>
                            <div className="p-4 border-bottom">
                                <h5 className="fw-medium fs-17 d-flex align-items-center gap-2"><span className="avatar bg-primary avatar-sm"><i className="ri-link fs-14"></i></span> References :</h5>
                                <div className="ms-4 ps-3 fs-14">
                                    <p><span className="fw-medium">Name : </span> Amelia Grace</p>
                                    <p><span className="fw-medium">Designation : </span> UI Developer</p>
                                    <p><span className="fw-medium">Company Name : </span> Innovatepix Co.in</p>
                                    <p><span className="fw-medium">Mobile : </span> +91 87579444111</p>
                                    <p><span className="fw-medium">Email : </span> agrace44@email.com</p>
                                    <p className="mb-0"><span className="fw-medium">Location : </span> Chennai</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                <h5 className="mb-0 fw-medium">Experience Overview</h5>
                            </div>
                        </Card.Header>
                        <div className="card-body p-0 candidate-edu-timeline">
                            <div className="p-4 border-bottom">
                                <h5 className="fw-medium fs-17 d-flex align-items-center gap-2"><span className="avatar bg-primary avatar-sm"><i className="ri-briefcase-3-line fs-14"></i></span> Experience :</h5>
                                <div className="ms-4 ps-3 fs-14">
                                    <p className="fw-medium fs-14 mb-0">UI Developer (2020 Jan - 2023 Apr)</p>
                                    <div className="d-flex gap-2">
                                        <p>Innovatepix Co.in</p>
                                        <p className="mb-0 fs-12 text-muted"><i className="bi bi-geo-alt fs-11"></i> Saidapet, Chennai</p>
                                    </div>
                                    <p className="fw-medium mb-2">Responsibilities :</p>
                                    <ol className="list-group border-0 list-bullets fs-14">
                                        <li className="border-0 py-1">Collaborated with cross-functional teams to conceptualize and execute user-centered designs, incorporating market analysis, customer feedback, and usability findings.</li>
                                        <li className="border-0 py-1">Implemented and maintained a consistent design system, ensuring uniformity across various platforms and devices.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card className="custom-card border bg-primary-transparent shadow-none">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body>
                            <div className="row align-items-center">
                                <div className="col-lg-8">
                                    <h5 className="fw-medium mb-0">&#128400; Was this profile a suitable for someone?</h5>
                                </div>
                                <div className="col-lg-4 text-end">
                                    <Link href="#!" scroll={false} className="btn btn-success btn-lg" role="button">
                                        <i className="ri-share-line me-2"></i>Share Now
                                    </Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>

                    <div>
                        <h4 className="fw-medium mb-0">Related Profiles</h4>
                        <p className="fs-14">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <div className="swiper swiper-related-jobs">
                            <Swiper spaceBetween={30} centeredSlides={true} navigation={true} modules={[Navigation, Autoplay]} className="mySwiper" autoplay={{ delay: 2500, disableOnInteraction: false, }} >
                                <SwiperSlide>
                                    <Card className="custom-card">
                                        <Card.Body>
                                            <div className="d-flex mb-3 align-items-center flex-wrap gap-2">
                                                <div>
                                                    <span className="avatar avatar-lg avatar-rounded">
                                                        <img src="../../../assets/images/faces/1.jpg" alt="img" />

                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <h5 className="fw-semibold mb-0 d-flex align-items-center">
                                                        <Link href="#!" scroll={false}> Brenda Simpson
                                                            <span className="fs-13 text-success">
                                                                <i className="ri-checkbox-circle-line text-success fs-13 me-1 d-inline-block"></i>
                                                                Verified
                                                            </span>

                                                        </Link></h5>
                                                    <div className="d-flex gap-2">
                                                        <Link href="#!" scroll={false}>Software Developer</Link>
                                                        <p className="mb-0 fs-12 text-muted"><i className="bi bi-geo-alt fs-11"></i> Kondapur, Hyderabad</p>
                                                    </div>
                                                    <div className="d-flex align-items-center fs-12 text-muted">
                                                        <p className="fs-12 mb-0">Ratings : </p>
                                                        <div className="min-w-fit-content ms-2">
                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning me-1"><i className="bi bi-star-half"></i></span>
                                                        </div>
                                                        <Link href="#!" scroll={false} className="ms-1 min-w-fit-content text-muted">
                                                            <span className='me-1'>(142)</span>
                                                            <span>Ratings</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="btn-list">
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Download Resume</Tooltip>}>
                                                        <Link href="#!" scroll={false} className="avatar avatar-sm bg-primary text-fixed-black">
                                                            <span><i className="bi bi-download"></i></span></Link>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                                                        <Link href="#!" scroll={false} className="avatar avatar-sm bg-light text-default">
                                                            <span><i className="bi bi-heart"></i></span></Link>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>View Profile</Tooltip>}>
                                                        <Link href="#!" scroll={false} className="avatar avatar-sm bg-light text-default">
                                                            <span><i className="bi bi-eye"></i></span></Link>
                                                    </OverlayTrigger>
                                                </div>
                                            </div>
                                            <div className="popular-tags">
                                                <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-1"><i className="bi bi-mortarboard text-muted me-1"></i> Graduate</Link>
                                                <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-1"><i className="bi bi-moon-stars text-muted me-1"></i> flexible-shift</Link>
                                                <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-1"><i className="bi bi-clock text-muted me-1"></i> Immediate Joinee</Link>
                                                <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-1"><i className="bi bi-broadcast text-muted me-1"></i> Good at English</Link>
                                            </div>
                                        </Card.Body>
                                        <Card.Footer className="card-footer">
                                            <div className="d-flex align-items-center gap-3 flex-wrap">
                                                <h6 className="mb-0 fw-semibold">Skills :</h6>
                                                <div className="popular-tags flex-grow-1">
                                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-1">HTML</Link>
                                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-1">CSS</Link>
                                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-1">Javascript</Link>
                                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-1">Angular</Link>
                                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-primary-transparent"><i className="bi bi-plus"></i> More</Link>
                                                </div>
                                                <div>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>1 year bond accepted</Tooltip>}>
                                                        <Link href="#!" scroll={false} className="badge badge-md rounded-pill bg-info-transparent" data-bs-toggle="tooltip" title="1 year bond accepted"><i className="bi bi-hand-thumbs-up me-1"></i>1 year bond accepted</Link>
                                                    </OverlayTrigger>
                                                    <Link href="#!" scroll={false} className="badge badge-md rounded-pill bg-primary-transparent ms-1"><i className="bi bi-briefcase me-1"></i>Exp : 2 Years</Link>
                                                </div>
                                            </div>
                                        </Card.Footer>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="custom-card">
                                        <Card.Body>
                                            <div className="d-flex mb-3 align-items-center flex-wrap gap-2">
                                                <div>
                                                    <span className="avatar avatar-lg avatar-rounded">
                                                        <img src="../../../assets/images/faces/3.jpg" alt="img" />

                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <h5 className="fw-semibold mb-0 d-flex align-items-center"><Link href="#!" scroll={false}> Dwayne Stort
                                                        <span className="fs-13 text-success">
                                                            <i className="ri-checkbox-circle-line text-success fs-13 me-1 d-inline-block"></i>
                                                            Verified
                                                        </span>
                                                    </Link></h5>
                                                    <div className="d-flex gap-2">
                                                        <Link href="#!" scroll={false}>Web Developer</Link>
                                                        <p className="mb-0 fs-12 text-muted"><i className="bi bi-geo-alt fs-11"></i> Gachibowli, Hyderabad</p>
                                                    </div>
                                                    <div className="d-flex align-items-center fs-12 text-muted">
                                                        <p className="fs-12 mb-0">Ratings : </p>
                                                        <div className="min-w-fit-content ms-2">
                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning me-1"><i className="bi bi-star"></i></span>
                                                            <span className="text-warning me-1"><i className="bi bi-star"></i></span>
                                                        </div>
                                                        <Link href="#!" scroll={false} className="mb-0 ms-1 min-w-fit-content text-muted">
                                                            <span className='me-1'>(35)</span>
                                                            <span>Ratings</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="btn-list">
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Download Resume</Tooltip>}>
                                                        <Link href="#!" scroll={false} className="avatar avatar-sm bg-primary text-fixed-black">
                                                            <span><i className="bi bi-download"></i></span></Link>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                                                        <Link href="#!" scroll={false} className="avatar avatar-sm bg-light text-default">
                                                            <span><i className="bi bi-heart"></i></span></Link>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>View Profile</Tooltip>}>
                                                        <Link href="#!" scroll={false} className="avatar avatar-sm bg-light text-default">
                                                            <span><i className="bi bi-eye"></i></span></Link>
                                                    </OverlayTrigger>
                                                </div>
                                            </div>
                                            <div className="popular-tags">
                                                <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-1"><i className="bi bi-mortarboard text-muted me-1"></i> Post Graduate</Link>
                                                <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-1"><i className="bi bi-moon-stars text-muted me-1"></i> flexible-shift</Link>
                                                <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-1"><i className="bi bi-clock text-muted me-1"></i> Within 10 Days</Link>
                                                <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-1"><i className="bi bi-broadcast text-muted me-1"></i> Good at English</Link>
                                            </div>
                                        </Card.Body>
                                        <Card.Footer className="card-footer">
                                            <div className="d-flex align-items-center gap-3 flex-wrap">
                                                <h6 className="mb-0 fw-semibold">Skills :</h6>
                                                <div className="popular-tags flex-grow-1">
                                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-1">React</Link>
                                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-1">Javascript</Link>
                                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-1">React Navtive</Link>
                                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-primary-transparent"><i className="bi bi-plus"></i> More</Link>
                                                </div>
                                                <div>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>1 year bond accepted</Tooltip>}>
                                                        <Link href="#!" scroll={false} className="badge badge-md rounded-pill bg-info-transparent" data-bs-toggle="tooltip" title="1 year bond accepted">
                                                            <i className="bi bi-hand-thumbs-up me-1"></i>2 years bond accepted</Link>
                                                    </OverlayTrigger>
                                                    <Link href="#!" scroll={false} className="badge badge-md rounded-pill bg-primary-transparent ms-1"><i className="bi bi-briefcase me-1"></i>Exp : 4 Years</Link>
                                                </div>
                                            </div>
                                        </Card.Footer>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="custom-card">
                                        <Card.Body>
                                            <div className="d-flex mb-3 align-items-center flex-wrap gap-2">
                                                <div>
                                                    <span className="avatar avatar-lg avatar-rounded">
                                                        <img src="../../../assets/images/faces/21.jpg" alt="img" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <h5 className="fw-semibold mb-0 d-flex align-items-center"><Link href="#!" scroll={false}> Jasmine Kova
                                                        <span className="fs-13 text-success">
                                                            <i className="ri-checkbox-circle-line text-success fs-13 me-1 d-inline-block"></i>
                                                            Verified
                                                        </span></Link></h5>
                                                    <div className="d-flex gap-2">
                                                        <Link href="#!" scroll={false}>Python Developer</Link>
                                                        <p className="mb-0 fs-12 text-muted"><i className="bi bi-geo-alt fs-11"></i> Gachibowli, Chennai</p>
                                                    </div>
                                                    <div className="d-flex align-items-center fs-12 text-muted">
                                                        <p className="fs-12 mb-0">Ratings : </p>
                                                        <div className="min-w-fit-content ms-2">
                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning me-1"><i className="bi bi-star"></i></span>
                                                            <span className="text-warning me-1"><i className="bi bi-star"></i></span>
                                                        </div>
                                                        <Link href="#!" scroll={false} className="mb-0 ms-1 min-w-fit-content text-muted">
                                                            <span className='me-1'>(56)</span>
                                                            <span>Ratings</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="btn-list">
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Download Resume</Tooltip>}>
                                                        <Link href="#!" scroll={false} className="avatar avatar-sm bg-primary text-fixed-black">
                                                            <span><i className="bi bi-download"></i></span></Link>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                                                        <Link href="#!" scroll={false} className="avatar avatar-sm bg-light text-default">
                                                            <span><i className="bi bi-heart"></i></span></Link>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>View Profile</Tooltip>}>
                                                        <Link href="#!" scroll={false} className="avatar avatar-sm bg-light text-default">
                                                            <span><i className="bi bi-eye"></i></span></Link>
                                                    </OverlayTrigger>
                                                </div>
                                            </div>
                                            <div className="popular-tags">
                                                <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-1"><i className="bi bi-mortarboard text-muted me-1"></i> MBA</Link>
                                                <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-1"><i className="bi bi-moon-stars text-muted me-1"></i> Day-shift</Link>
                                                <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-1"><i className="bi bi-clock text-muted me-1"></i> Within 30 Days</Link>
                                                <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-1"><i className="bi bi-broadcast text-muted me-1"></i> Avg at English</Link>
                                            </div>
                                        </Card.Body>
                                        <div className="card-footer">
                                            <div className="d-flex align-items-center gap-3 flex-wrap">
                                                <h6 className="mb-0 fw-semibold">Skills :</h6>
                                                <div className="popular-tags flex-grow-1">
                                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-1">Python</Link>
                                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-1">Java</Link>
                                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-1">React</Link>
                                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-primary-transparent"><i className="bi bi-plus"></i> More</Link>
                                                </div>
                                                <div>
                                                    <Link href="#!" scroll={false} className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Exp : 5 Years</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </Col>
                <Col xxl={4}>
                    <div className="card custom-card overflow-hidden">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                Personal Information
                            </div>
                        </Card.Header>
                        <div className="card-body p-2">
                            <div className="table-responsive">
                                <table className="table table-responsive table-borderless">
                                    <tbody>
                                        <tr>
                                            <td className="w-50">
                                                <span className="fw-medium">Full Name</span>
                                            </td>
                                            <td>: Isabella Rose </td>
                                        </tr>
                                        <tr>
                                            <td className="w-50">
                                                <span className="fw-medium">Email</span>
                                            </td>
                                            <td>: isabellarose77@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td className="w-50">
                                                <span className="fw-medium">D.O.B</span>
                                            </td>
                                            <td>: 28 Mar 2000</td>
                                        </tr>
                                        <tr>
                                            <td className="w-50">
                                                <span className="fw-medium">Gender</span>
                                            </td>
                                            <td>: Female</td>
                                        </tr>
                                        <tr>
                                            <td className="w-50">
                                                <span className="fw-medium">Age</span>
                                            </td>
                                            <td>: 29</td>
                                        </tr>
                                        <tr>
                                            <td className="w-50">
                                                <span className="fw-medium">Mobile </span>
                                            </td>
                                            <td>: +91 87544744441</td>
                                        </tr>
                                        <tr>
                                            <td className="w-50">
                                                <span className="fw-medium">Mother Tongue </span>
                                            </td>
                                            <td>: Kannada</td>
                                        </tr>
                                        <tr>
                                            <td className="w-50">
                                                <span className="fw-medium">Marital Status </span>
                                            </td>
                                            <td>: Unmarried</td>
                                        </tr>
                                        <tr>
                                            <td className="w-50">
                                                <span className="fw-medium">Blood Group </span>
                                            </td>
                                            <td>: o +ve</td>
                                        </tr>
                                        <tr>
                                            <td className="w-50">
                                                <span className="fw-medium">Address </span>
                                            </td>
                                            <td>: A-123,Koramangala, Bangalore - 5600044</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex align-items-center">
                                <p className="fs-15 mb-0 me-4 fw-medium">Social :</p>
                                <div className="btn-list mb-0">
                                    <button className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light mb-xxl-0">
                                        <i className="ri-facebook-line"></i>
                                    </button>
                                    <button className="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light mb-xxl-0">
                                        <i className="ri-twitter-x-line"></i>
                                    </button>
                                    <button className="btn btn-sm btn-icon btn-warning-light btn-wave waves-effect waves-light mb-xxl-0">
                                        <i className="ri-instagram-line"></i>
                                    </button>
                                    <button className="btn btn-sm btn-icon btn-success-light btn-wave waves-effect waves-light mb-xxl-0">
                                        <i className="ri-github-line"></i>
                                    </button>
                                    <button className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light mb-xxl-0">
                                        <i className="ri-youtube-line"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                Skills
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="popular-tags">
                                <Link href="#!" scroll={false} className="badge bg-light text-default me-1">HTML</Link>
                                <Link href="#!" scroll={false} className="badge bg-light text-default me-1">CSS</Link>
                                <Link href="#!" scroll={false} className="badge bg-light text-default me-1">Javascript</Link>
                                <Link href="#!" scroll={false} className="badge bg-light text-default me-1">Angular</Link>
                                <Link href="#!" scroll={false} className="badge bg-light text-default me-1">React</Link>
                            </div>
                        </Card.Body>
                    </Card>
                    <div className="card custom-card overflow-hidden">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                Tools Used
                            </div>
                        </Card.Header>
                        <div className="card-body d-flex flex-wrap gap-2">
                            <span className="avatar me-2 bg-white shadow-sm border p-1">
                                <img src="../../../assets/images/company-logos/1.png" alt="" />
                            </span>
                            <span className="avatar me-2 bg-white shadow-sm border p-1">
                                <img src="../../../assets/images/company-logos/2.png" alt="" />
                            </span>
                            <span className="avatar me-2 bg-white shadow-sm border p-1">
                                <img src="../../../assets/images/company-logos/3.png" alt="" />
                            </span>
                            <span className="avatar me-2 bg-white shadow-sm border p-1">
                                <img src="../../../assets/images/company-logos/4.png" alt="" />
                            </span>
                            <span className="avatar me-2 bg-white shadow-sm border p-1">
                                <img src="../../../assets/images/company-logos/5.png" alt="" />
                            </span>
                            <span className="avatar bg-white shadow-sm border p-1">
                                <img src="../../../assets/images/company-logos/6.png" alt="" />
                            </span>
                        </div>
                    </div>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                Languages
                            </div>
                        </Card.Header>
                        <div className="card-body fs-14 ">
                            <p><span className="fw-medium">English : </span>Fluent</p>
                            <p><span className="fw-medium">Hindi : </span>Intermediate</p>
                            <p className="mb-0"><span className="fw-medium">Kannada : </span>Expert</p>
                        </div>
                    </Card>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body>
                            <h5 className="fw-medium mb-3">Get Up-to-date Job Alerts</h5>
                            <div className="fs-14">
                                <p>Stay ahead in your job search journey with the latest updates tailored just for you.</p>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Email Here" aria-label="blog-email" aria-describedby="blog-subscribe" />
                                    <Button variant="" className="btn btn-primary" type="button" id="blog-subscribe">Subscribe</Button>
                                </div>
                                <label className="form-check-label">
                                    By Subscribing you accept to <Link href="#!" scroll={false} className="text-success"><u>privacy policy</u></Link>
                                </label>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default CandidateDetails;
