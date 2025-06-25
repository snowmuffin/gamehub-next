"use client";
import LabeledTwoThumbs1, { Data, Data2 } from "@/shared/data/apps/jobs/searchcandidatedata";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Collapse, Dropdown, OverlayTrigger, Pagination, Row, Tooltip } from "react-bootstrap";
import { connect } from "react-redux";
const Select = dynamic(() => import('react-select'), { ssr: false });

const SearchCandidate = ({ local_variable }: any) => {

    const [open, setOpen] = useState(false);
    return (
        <Fragment>
            <Seo title={"Search Candidate"} />
            <Row>
                <Col xxl={9}>
                    <div className="row align-items-center">
                        <Col lg={12}>
                            <div className="card custom-card border-0 shadow-none">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="card-body p-md-0">
                                    <div className="input-group companies-search-input">
                                        <input type="text" className="form-control w-25" aria-label="Text input with segmented dropdown button" placeholder="Enter your keyword here" />

                                        <Select name="state" options={Data} className="basic-multi-select " isSearchable
                                            menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Data[0]]}
                                        />
                                        <input type="text" className="form-control w-25" aria-label="Text input with segmented dropdown button" placeholder="Search by location" />
                                        <Select name="state" options={Data2} className="basic-multi-select custom-select-searchcompany" isSearchable
                                            menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Data2[0]]}
                                        />
                                        <Button variant="" type="button" className="btn btn-primary"><i className="ri-search-line"></i></Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body>
                                    <div className="d-flex flex-wrap gap-2 align-items-center">
                                        <h5 className="fw-medium mb-0 flex-grow-1">2134 <span className="fw-normal fs-18">Candidates match your job search</span> </h5>
                                        <Dropdown className="btn-group ms-auto">
                                            <Dropdown.Toggle variant='' className="btn btn-outline-light border dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Sort By
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu as='ul' align="end" className='dropdown-menu-end'>
                                                <Dropdown.Item as='li' href="#!">Premium</Dropdown.Item>
                                                <Dropdown.Item as='li' href="#!">Newest</Dropdown.Item>
                                                <Dropdown.Item as='li' href="#!">Most Relevant</Dropdown.Item>
                                                <Dropdown.Item as='li' href="#!">Fresher</Dropdown.Item>
                                                <Dropdown.Item as='li' href="#!">Experienced</Dropdown.Item>
                                                <Dropdown.Item as='li' href="#!">Bond Agreement</Dropdown.Item>
                                                <Dropdown.Item as='li' href="#!">Flexible Shift</Dropdown.Item>
                                                <Dropdown.Item as='li' href="#!">Day Shift</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
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
                                    <div className="btn-list float-end">
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
                                    <div className="d-flex mb-3 align-items-center flex-wrap gap-2">
                                        <div>
                                            <span className="avatar avatar-lg">
                                                <img src="../../../assets/images/faces/1.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <h5 className="fw-medium mb-0 d-flex align-items-center"><Link href="/apps/jobs/candidate-details"> Kingston <span className="fs-13 text-success"><i className="ri-checkbox-circle-line text-success fs-13 me-1 d-inline-block"></i>Verified</span></Link></h5>
                                            <div className="d-flex gap-2 flex-wrap">
                                                <Link href="#!" scroll={false} className="fs-14">Software Developer</Link>
                                                <p className="mb-0 fs-12 text-muted"><i className="bi bi-geo-alt fs-11"></i> Saidapet, Chennai</p>
                                            </div>
                                            <div className="d-flex align-items-center fs-12 text-muted flex-wrap">
                                                <p className="fs-12 mb-0">Ratings : </p>
                                                <div className="min-w-fit-content ms-2">
                                                    <span className="text-warning"><i className="ri-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-line-half"></i></span>
                                                </div>
                                                <Link href="#!" scroll={false} className="ms-1 min-w-fit-content text-muted">
                                                    <span>(138)</span>
                                                    <span>Ratings</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="popular-tags mb-2">
                                        <Link href="#!" scroll={false} className="fs-13 me-2 d-inline-block"><i className="bi bi-mortarboard text-primary me-1"></i> Graduate</Link>
                                        <span className="vr align-middle me-2"></span>
                                        <Link href="#!" scroll={false} className="fs-13 me-2 d-inline-block"><i className="bi bi-moon-stars text-primary me-1"></i> flexible-shift</Link>
                                        <span className="vr align-middle me-2"></span>
                                        <Link href="#!" scroll={false} className="fs-13 me-2 d-inline-block"><i className="bi bi-clock text-primary me-1"></i> Immediate Joinee</Link>
                                        <span className="vr align-middle me-2"></span>
                                        <Link href="#!" scroll={false} className="fs-13 me-2 d-inline-block"><i className="bi bi-broadcast text-primary me-1"></i> Good at English</Link>
                                    </div>
                                    <div className="d-flex align-items-center flex-wrap gap-3 fs-14">
                                        <p className="mb-0 flex-grow-1"><span className="text-muted">Package (Yearly) :</span> <span className="fw-medium" data-bs-toggle="tooltip" title="Current"> $2,233</span> - <span className="fw-medium" data-bs-toggle="tooltip" title="Expected"> $5,145</span> </p>
                                        <p className="mb-0"><span className="text-muted"> Languages :</span> <span className="fw-medium"> English, Hindi, Telugu</span></p>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="d-flex align-items-center gap-3 flex-wrap">
                                        <h6 className="mb-0 fw-medium">Skills :</h6>
                                        <div className="popular-tags flex-grow-1">
                                            <Link href="#!" scroll={false} className="badge bg-light text-default me-1">HTML</Link>
                                            <Link href="#!" scroll={false} className="badge bg-light text-default me-1">CSS</Link>
                                            <Link href="#!" scroll={false} className="badge bg-light text-default me-1">Javascript</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent">More</Link>
                                        </div>
                                        <div>
                                            <OverlayTrigger placement="top" overlay={<Tooltip>1 year bond accepted</Tooltip>}>
                                                <Link href="#!" scroll={false} className="badge badge-md bg-info-transparent me-1" data-bs-toggle="tooltip" title="1 year bond accepted"><i className="bi bi-hand-thumbs-up me-1"></i>1 year bond accepted</Link>
                                            </OverlayTrigger>
                                            <Link href="#!" scroll={false} className="badge badge-md bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Exp : 2 Years</Link>
                                        </div>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body>
                                    <div className="btn-list float-end">
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
                                    <div className="d-flex mb-3 align-items-center flex-wrap gap-2">
                                        <div>
                                            <span className="avatar avatar-lg">
                                                <img src="../../../assets/images/faces/3.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <h5 className="fw-medium mb-0 d-flex align-items-center"><Link href="/apps/jobs/candidate-details"> Juliana <span className="fs-13 text-success"><i className="ri-checkbox-circle-line text-success fs-13 me-1 d-inline-block"></i>Verified</span></Link></h5>
                                            <div className="d-flex gap-2 flex-wrap">
                                                <Link href="#!" scroll={false} className="fs-14">Web Developer</Link>
                                                <p className="mb-0 fs-12 text-muted"><i className="bi bi-geo-alt fs-11"></i> Coimbatore, Chennai</p>
                                            </div>
                                            <div className="d-flex align-items-center fs-12 text-muted flex-wrap">
                                                <p className="fs-12 mb-0">Ratings : </p>
                                                <div className="min-w-fit-content ms-2">
                                                    <span className="text-warning"><i className="ri-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-line me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-line"></i></span>
                                                </div>
                                                <Link href="#!" scroll={false} className="mb-0 ms-1 min-w-fit-content text-muted">
                                                    <span>(42)</span>
                                                    <span>Ratings</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="popular-tags mb-2">
                                        <Link href="#!" scroll={false} className="fs-13 me-2"><i className="bi bi-mortarboard text-primary me-1"></i> Post Graduate</Link>
                                        <span className="vr align-middle me-2"></span>
                                        <Link href="#!" scroll={false} className="fs-13 me-2"><i className="bi bi-moon-stars text-primary me-1"></i> flexible-shift</Link>
                                        <span className="vr align-middle me-2"></span>
                                        <Link href="#!" scroll={false} className="fs-13 me-2"><i className="bi bi-clock text-primary me-1"></i> Within 15 Days</Link>
                                        <span className="vr align-middle me-2"></span>
                                        <Link href="#!" scroll={false} className="fs-13 me-2"><i className="bi bi-broadcast text-primary me-1"></i> Good at English</Link>
                                    </div>
                                    <div className="d-flex align-items-center flex-wrap gap-3 fs-14">
                                        <p className="mb-0 flex-grow-1"><span className="text-muted">Package (Yearly) :</span> <span className="fw-medium" data-bs-toggle="tooltip" title="Current"> $2,800</span> - <span className="fw-medium" data-bs-toggle="tooltip" title="Expected"> $5,650</span> </p>
                                        <p className="mb-0"><span className="text-muted"> Languages :</span> <span className="fw-medium"> English, Telugu</span></p>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="d-flex align-items-center gap-3 flex-wrap">
                                        <h6 className="mb-0 fw-medium">Skills :</h6>
                                        <div className="popular-tags flex-grow-1">
                                            <Link href="#!" scroll={false} className="badge bg-light text-default me-1">React</Link>
                                            <Link href="#!" scroll={false} className="badge bg-light text-default me-1">React Native</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent">More</Link>
                                        </div>
                                        <div>
                                            <OverlayTrigger placement="top" overlay={<Tooltip>2 year bond accepted</Tooltip>}>
                                                <Link href="#!" scroll={false} className="badge badge-md bg-info-transparent me-1" data-bs-toggle="tooltip" title="1 year bond accepted"><i className="bi bi-hand-thumbs-up me-1"></i>2 year bond accepted</Link>
                                            </OverlayTrigger>
                                            <Link href="#!" scroll={false} className="badge badge-md bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Exp : 4 Years</Link>
                                        </div>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body>
                                    <div className="btn-list float-end">
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
                                    <div className="d-flex mb-3 align-items-center flex-wrap gap-2">
                                        <div>
                                            <span className="avatar avatar-lg">
                                                <img src="../../../assets/images/faces/21.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <h5 className="fw-medium mb-0 d-flex align-items-center"><Link href="/apps/jobs/candidate-details"> Deborah <span className="fs-13 text-success"><i className="ri-checkbox-circle-line text-success fs-13 me-1 d-inline-block"></i>Verified</span></Link></h5>
                                            <div className="d-flex gap-2 flex-wrap">
                                                <Link href="#!" scroll={false} className="fs-14">Python Developer</Link>
                                                <p className="mb-0 fs-12 text-muted"><i className="bi bi-geo-alt fs-11"></i> Gachibowli, UAE</p>
                                            </div>
                                            <div className="d-flex align-items-center fs-12 text-muted flex-wrap">
                                                <p className="fs-12 mb-0">Ratings : </p>
                                                <div className="min-w-fit-content ms-2">
                                                    <span className="text-warning"><i className="ri-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-line me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-line"></i></span>
                                                </div>
                                                <Link href="#!" scroll={false} className="mb-0 ms-1 min-w-fit-content text-muted">
                                                    <span>(48)</span>
                                                    <span>Ratings</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="popular-tags mb-2">
                                        <Link href="#!" scroll={false} className="fs-13 me-2"><i className="bi bi-mortarboard text-primary me-1"></i> MBA</Link>
                                        <span className="vr align-middle me-2"></span>
                                        <Link href="#!" scroll={false} className="fs-13 me-2"><i className="bi bi-moon-stars text-primary me-1"></i> Day-shift</Link>
                                        <span className="vr align-middle me-2"></span>
                                        <Link href="#!" scroll={false} className="fs-13 me-2"><i className="bi bi-clock text-primary me-1"></i> Within 20 Days</Link>
                                        <span className="vr align-middle me-2"></span>
                                        <Link href="#!" scroll={false} className="fs-13 me-2"><i className="bi bi-broadcast text-primary me-1"></i> Avg at English</Link>
                                    </div>
                                    <div className="d-flex align-items-center flex-wrap gap-3 fs-14">
                                        <p className="mb-0 flex-grow-1"><span className="text-muted">Package (Yearly) :</span> <span className="fw-medium" data-bs-toggle="tooltip" title="Current"> $4,260</span> - <span className="fw-medium" data-bs-toggle="tooltip" title="Expected"> $5,600</span> </p>
                                        <p className="mb-0"><span className="text-muted"> Languages :</span> <span className="fw-medium"> English, Hindi</span></p>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="d-flex align-items-center gap-3 flex-wrap">
                                        <h6 className="mb-0 fw-medium">Skills :</h6>
                                        <div className="popular-tags flex-grow-1">
                                            <Link href="#!" scroll={false} className="badge bg-light text-default me-1">Python</Link>
                                            <Link href="#!" scroll={false} className="badge bg-light text-default me-1">Java</Link>
                                            <Link href="#!" scroll={false} className="badge bg-light text-default me-1">React</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent">More</Link>
                                        </div>
                                        <div>
                                            <Link href="#!" scroll={false} className="badge badge-md bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Exp : 5 Years</Link>
                                        </div>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body>
                                    <div className="btn-list float-end">
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
                                    <div className="d-flex mb-3 align-items-center flex-wrap gap-2">
                                        <div>
                                            <span className="avatar avatar-lg">
                                                <img src="../../../assets/images/faces/13.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <h5 className="fw-medium mb-0 d-flex align-items-center"><Link href="/apps/jobs/candidate-details"> James Lucas <span className="fs-13 text-success"><i className="ri-checkbox-circle-line text-success fs-13 me-1 d-inline-block"></i>Verified</span></Link></h5>
                                            <div className="d-flex gap-2 flex-wrap">
                                                <Link href="#!" scroll={false} className="fs-14">Angular Developer</Link>
                                                <p className="mb-0 fs-12 text-muted"><i className="bi bi-geo-alt fs-11"></i> Gachibowli, Nellore</p>
                                            </div>
                                            <div className="d-flex align-items-center fs-12 text-muted flex-wrap">
                                                <p className="fs-12 mb-0">Ratings : </p>
                                                <div className="min-w-fit-content ms-2">
                                                    <span className="text-warning"><i className="ri-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-line"></i></span>
                                                </div>
                                                <Link href="#!" scroll={false} className="mb-0 ms-1 min-w-fit-content text-muted">
                                                    <span>(18)</span>
                                                    <span>Ratings</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="popular-tags mb-2">
                                        <Link href="#!" scroll={false} className="fs-13 me-2"><i className="bi bi-mortarboard text-primary me-1"></i> MCA</Link>
                                        <span className="vr align-middle me-2"></span>
                                        <Link href="#!" scroll={false} className="fs-13 me-2"><i className="bi bi-moon-stars text-primary me-1"></i> flexible-shift</Link>
                                        <span className="vr align-middle me-2"></span>
                                        <Link href="#!" scroll={false} className="fs-13 me-2"><i className="bi bi-clock text-primary me-1"></i> Within 15 Days</Link>
                                        <span className="vr align-middle me-2"></span>
                                        <Link href="#!" scroll={false} className="fs-13 me-2"><i className="bi bi-broadcast text-primary me-1"></i> Fluent at English</Link>
                                    </div>
                                    <div className="d-flex align-items-center flex-wrap gap-3 fs-14">
                                        <p className="mb-0 flex-grow-1"><span className="text-muted">Package (Yearly) :</span> <span className="fw-medium" data-bs-toggle="tooltip" title="Current"> $2,800</span> - <span className="fw-medium" data-bs-toggle="tooltip" title="Expected"> $5,650</span> </p>
                                        <p className="mb-0"><span className="text-muted"> Languages :</span> <span className="fw-medium"> English, Telugu</span></p>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="d-flex align-items-center gap-3 flex-wrap">
                                        <h6 className="mb-0 fw-medium">Skills :</h6>
                                        <div className="popular-tags flex-grow-1">
                                            <Link href="#!" scroll={false} className="badge bg-light text-default me-1">Angular</Link>
                                            <Link href="#!" scroll={false} className="badge bg-light text-default me-1">Advanced Java</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent">More</Link>
                                        </div>
                                        <div>
                                            <OverlayTrigger placement="top" overlay={<Tooltip>2 year bond accepted</Tooltip>}>
                                                <Link href="#!" scroll={false} className="badge badge-md bg-info-transparent me-1" data-bs-toggle="tooltip" title="1 year bond accepted"><i className="bi bi-hand-thumbs-up me-1"></i>2 year bond accepted</Link>
                                            </OverlayTrigger>
                                            <Link href="#!" scroll={false} className="badge badge-md bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Exp : 5 Years</Link>
                                        </div>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body>
                                    <div className="btn-list float-end">
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
                                    <div className="d-flex mb-3 align-items-center flex-wrap gap-2">
                                        <div>
                                            <span className="avatar avatar-lg">
                                                <img src="../../../assets/images/faces/21.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <h5 className="fw-medium mb-0 d-flex align-items-center"><Link href="/apps/jobs/candidate-details"> Robin Keith <span className="fs-13 text-success"><i className="ri-checkbox-circle-line text-success fs-13 me-1 d-inline-block"></i>Verified</span></Link></h5>
                                            <div className="d-flex gap-2 flex-wrap">
                                                <Link href="#!" scroll={false} className="fs-14">AWS Developer</Link>
                                                <p className="mb-0 fs-12 text-muted"><i className="bi bi-geo-alt fs-11"></i> Kukatpally, Hyderabad</p>
                                            </div>
                                            <div className="d-flex align-items-center fs-12 text-muted flex-wrap">
                                                <p className="fs-12 mb-0">Ratings : </p>
                                                <div className="min-w-fit-content ms-2">
                                                    <span className="text-warning"><i className="ri-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-line me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-line"></i></span>
                                                </div>
                                                <Link href="#!" scroll={false} className="mb-0 ms-1 min-w-fit-content text-muted">
                                                    <span>(13)</span>
                                                    <span>Ratings</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="popular-tags mb-2">
                                        <Link href="#!" scroll={false} className="fs-13 me-2"><i className="bi bi-mortarboard text-primary me-1"></i> MBA</Link>
                                        <span className="vr align-middle me-2"></span>
                                        <Link href="#!" scroll={false} className="fs-13 me-2"><i className="bi bi-moon-stars text-primary me-1"></i> Day-shift</Link>
                                        <span className="vr align-middle me-2"></span>
                                        <Link href="#!" scroll={false} className="fs-13 me-2"><i className="bi bi-clock text-primary me-1"></i> Within 20 Days</Link>
                                        <span className="vr align-middle me-2"></span>
                                        <Link href="#!" scroll={false} className="fs-13 me-2"><i className="bi bi-broadcast text-primary me-1"></i> Good at English</Link>
                                    </div>
                                    <div className="d-flex align-items-center flex-wrap gap-3 fs-14">
                                        <p className="mb-0 flex-grow-1"><span className="text-muted">Package (Yearly) :</span><span className="fw-medium" data-bs-toggle="tooltip" title="Expected"> $9,120</span> </p>
                                        <p className="mb-0"><span className="text-muted"> Languages :</span> <span className="fw-medium"> English, Hindi, Telugu</span></p>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="d-flex align-items-center gap-3 flex-wrap">
                                        <h6 className="mb-0 fw-medium">Skills :</h6>
                                        <div className="popular-tags flex-grow-1">
                                            <Link href="#!" scroll={false} className="badge bg-light text-default me-1">AWS Lambda</Link>
                                            <Link href="#!" scroll={false} className="badge bg-light text-default me-1">Athena</Link>
                                            <Link href="#!" scroll={false} className="badge bg-light text-default me-1">Linux</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent">More</Link>
                                        </div>
                                        <div>
                                            <Link href="#!" scroll={false} className="badge badge-md bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Fresher</Link>
                                        </div>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body>
                                    <div className="btn-list float-end">
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
                                    <div className="d-flex mb-3 align-items-center flex-wrap gap-2">
                                        <div>
                                            <span className="avatar avatar-lg">
                                                <img src="../../../assets/images/faces/1.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <h5 className="fw-medium mb-0 d-flex align-items-center"><Link href="/apps/jobs/candidate-details"> Katrina <span className="fs-13 text-success"><i className="ri-checkbox-circle-line text-success fs-13 me-1 d-inline-block"></i>Verified</span></Link></h5>
                                            <div className="d-flex gap-2 flex-wrap">
                                                <Link href="#!" scroll={false} className="fs-14">Software Developer</Link>
                                                <p className="mb-0 fs-12 text-muted"><i className="bi bi-geo-alt fs-11"></i> Saidapet, Chennai</p>
                                            </div>
                                            <div className="d-flex align-items-center fs-12 text-muted flex-wrap">
                                                <p className="fs-12 mb-0">Ratings : </p>
                                                <div className="min-w-fit-content ms-2">
                                                    <span className="text-warning"><i className="ri-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-line-half"></i></span>
                                                </div>
                                                <Link href="#!" scroll={false} className="ms-1 min-w-fit-content text-muted">
                                                    <span>(138)</span>
                                                    <span>Ratings</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="popular-tags mb-2">
                                        <Link href="#!" scroll={false} className="fs-13 me-2"><i className="bi bi-mortarboard text-primary me-1"></i> Graduate</Link>
                                        <span className="vr align-middle me-2"></span>
                                        <Link href="#!" scroll={false} className="fs-13 me-2"><i className="bi bi-moon-stars text-primary me-1"></i> flexible-shift</Link>
                                        <span className="vr align-middle me-2"></span>
                                        <Link href="#!" scroll={false} className="fs-13 me-2"><i className="bi bi-clock text-primary me-1"></i> Immediate Joinee</Link>
                                        <span className="vr align-middle me-2"></span>
                                        <Link href="#!" scroll={false} className="fs-13 me-2"><i className="bi bi-broadcast text-primary me-1"></i> Good at English</Link>
                                    </div>
                                    <div className="d-flex align-items-center flex-wrap gap-3 fs-14">
                                        <p className="mb-0 flex-grow-1"><span className="text-muted">Package (Yearly) :</span> <span className="fw-medium" data-bs-toggle="tooltip" title="Current"> $2,233</span> - <span className="fw-medium" data-bs-toggle="tooltip" title="Expected"> $5,145</span> </p>
                                        <p className="mb-0"><span className="text-muted"> Languages :</span> <span className="fw-medium"> English, Hindi, Telugu</span></p>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="d-flex align-items-center gap-3 flex-wrap">
                                        <h6 className="mb-0 fw-medium">Skills :</h6>
                                        <div className="popular-tags flex-grow-1">
                                            <Link href="#!" scroll={false} className="badge bg-light text-default me-1">HTML</Link>
                                            <Link href="#!" scroll={false} className="badge bg-light text-default me-1">CSS</Link>
                                            <Link href="#!" scroll={false} className="badge bg-light text-default me-1">Javascript</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent">More</Link>
                                        </div>
                                        <div>
                                            <OverlayTrigger placement="top" overlay={<Tooltip>1 year bond accepted</Tooltip>}>
                                                <Link href="#!" scroll={false} className="badge badge-md bg-info-transparent me-1" data-bs-toggle="tooltip" title="1 year bond accepted"><i className="bi bi-hand-thumbs-up me-1"></i>1 year bond accepted</Link>
                                            </OverlayTrigger>
                                            <Link href="#!" scroll={false} className="badge badge-md bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Exp : 2 Years</Link>
                                        </div>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body>
                                    <div className="btn-list float-end">
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
                                    <div className="d-flex mb-3 align-items-center flex-wrap gap-2">
                                        <div>
                                            <span className="avatar avatar-lg">
                                                <img src="../../../assets/images/faces/3.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <h5 className="fw-medium mb-0 d-flex align-items-center"><Link href="/apps/jobs/candidate-details"> Isabella <span className="fs-13 text-success"><i className="ri-checkbox-circle-line text-success fs-13 me-1 d-inline-block"></i>Verified</span></Link></h5>
                                            <div className="d-flex gap-2 flex-wrap">
                                                <Link href="#!" scroll={false} className="fs-14">Web Developer</Link>
                                                <p className="mb-0 fs-12 text-muted"><i className="bi bi-geo-alt fs-11"></i> Coimbatore, Chennai</p>
                                            </div>
                                            <div className="d-flex align-items-center fs-12 text-muted flex-wrap">
                                                <p className="fs-12 mb-0">Ratings : </p>
                                                <div className="min-w-fit-content ms-2">
                                                    <span className="text-warning"><i className="ri-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-line me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-line"></i></span>
                                                </div>
                                                <Link href="#!" scroll={false} className="mb-0 ms-1 min-w-fit-content text-muted">
                                                    <span>(42)</span>
                                                    <span>Ratings</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="popular-tags mb-2">
                                        <Link href="#!" scroll={false} className="fs-13 me-2"><i className="bi bi-mortarboard text-primary me-1"></i> Post Graduate</Link>
                                        <span className="vr align-middle me-2"></span>
                                        <Link href="#!" scroll={false} className="fs-13 me-2"><i className="bi bi-moon-stars text-primary me-1"></i> flexible-shift</Link>
                                        <span className="vr align-middle me-2"></span>
                                        <Link href="#!" scroll={false} className="fs-13 me-2"><i className="bi bi-clock text-primary me-1"></i> Within 15 Days</Link>
                                        <span className="vr align-middle me-2"></span>
                                        <Link href="#!" scroll={false} className="fs-13 me-2"><i className="bi bi-broadcast text-primary me-1"></i> Good at English</Link>
                                    </div>
                                    <div className="d-flex align-items-center flex-wrap gap-3 fs-14">
                                        <p className="mb-0 flex-grow-1"><span className="text-muted">Package (Yearly) :</span> <span className="fw-medium" data-bs-toggle="tooltip" title="Current"> $2,800</span> - <span className="fw-medium" data-bs-toggle="tooltip" title="Expected"> $5,650</span> </p>
                                        <p className="mb-0"><span className="text-muted"> Languages :</span> <span className="fw-medium"> English, Telugu</span></p>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="d-flex align-items-center gap-3 flex-wrap">
                                        <h6 className="mb-0 fw-medium">Skills :</h6>
                                        <div className="popular-tags flex-grow-1">
                                            <Link href="#!" scroll={false} className="badge bg-light text-default me-1">React</Link>
                                            <Link href="#!" scroll={false} className="badge bg-light text-default me-1">React Native</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent">More</Link>
                                        </div>
                                        <div>
                                            <OverlayTrigger placement="top" overlay={<Tooltip>2 year bond accepted</Tooltip>}>
                                                <Link href="#!" scroll={false} className="badge badge-md bg-info-transparent me-1" data-bs-toggle="tooltip" title="1 year bond accepted"><i className="bi bi-hand-thumbs-up me-1"></i>2 year bond accepted</Link>
                                            </OverlayTrigger>
                                            <Link href="#!" scroll={false} className="badge badge-md bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Exp : 4 Years</Link>
                                        </div>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body>
                                    <div className="btn-list float-end">
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
                                    <div className="d-flex mb-3 align-items-center flex-wrap gap-2">
                                        <div>
                                            <span className="avatar avatar-lg">
                                                <img src="../../../assets/images/faces/21.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <h5 className="fw-medium mb-0 d-flex align-items-center"><Link href="/apps/jobs/candidate-details"> Alexia <span className="fs-13 text-success"><i className="ri-checkbox-circle-line text-success fs-13 me-1 d-inline-block"></i>Verified</span></Link></h5>
                                            <div className="d-flex gap-2 flex-wrap">
                                                <Link href="#!" scroll={false} className="fs-14">Python Developer</Link>
                                                <p className="mb-0 fs-12 text-muted"><i className="bi bi-geo-alt fs-11"></i> Gachibowli, UAE</p>
                                            </div>
                                            <div className="d-flex align-items-center fs-12 text-muted flex-wrap">
                                                <p className="fs-12 mb-0">Ratings : </p>
                                                <div className="min-w-fit-content ms-2">
                                                    <span className="text-warning"><i className="ri-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-line me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-line"></i></span>
                                                </div>
                                                <Link href="#!" scroll={false} className="mb-0 ms-1 min-w-fit-content text-muted">
                                                    <span>(48)</span>
                                                    <span>Ratings</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="popular-tags mb-2">
                                        <Link href="#!" scroll={false} className="fs-13 me-2"><i className="bi bi-mortarboard text-primary me-1"></i> MBA</Link>
                                        <span className="vr align-middle me-2"></span>
                                        <Link href="#!" scroll={false} className="fs-13 me-2"><i className="bi bi-moon-stars text-primary me-1"></i> Day-shift</Link>
                                        <span className="vr align-middle me-2"></span>
                                        <Link href="#!" scroll={false} className="fs-13 me-2"><i className="bi bi-clock text-primary me-1"></i> Within 20 Days</Link>
                                        <span className="vr align-middle me-2"></span>
                                        <Link href="#!" scroll={false} className="fs-13 me-2"><i className="bi bi-broadcast text-primary me-1"></i> Avg at English</Link>
                                    </div>
                                    <div className="d-flex align-items-center flex-wrap gap-3 fs-14">
                                        <p className="mb-0 flex-grow-1"><span className="text-muted">Package (Yearly) :</span> <span className="fw-medium" data-bs-toggle="tooltip" title="Current"> $4,260</span> - <span className="fw-medium" data-bs-toggle="tooltip" title="Expected"> $5,600</span> </p>
                                        <p className="mb-0"><span className="text-muted"> Languages :</span> <span className="fw-medium"> English, Hindi</span></p>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="d-flex align-items-center gap-3 flex-wrap">
                                        <h6 className="mb-0 fw-medium">Skills :</h6>
                                        <div className="popular-tags flex-grow-1">
                                            <Link href="#!" scroll={false} className="badge bg-light text-default me-1">Python</Link>
                                            <Link href="#!" scroll={false} className="badge bg-light text-default me-1">Java</Link>
                                            <Link href="#!" scroll={false} className="badge bg-light text-default me-1">React</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent">More</Link>
                                        </div>
                                        <div>
                                            <Link href="#!" scroll={false} className="badge badge-md bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Exp : 5 Years</Link>
                                        </div>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body>
                                    <div className="btn-list float-end">
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
                                    <div className="d-flex mb-3 align-items-center flex-wrap gap-2">
                                        <div>
                                            <span className="avatar avatar-lg">
                                                <img src="../../../assets/images/faces/5.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <h5 className="fw-medium mb-0 d-flex align-items-center"><Link href="/apps/jobs/candidate-details">Amelia <span className="fs-13 text-success"><i className="ri-checkbox-circle-line text-success fs-13 me-1 d-inline-block"></i>Verified</span></Link></h5>
                                            <div className="d-flex gap-2 flex-wrap">
                                                <Link href="#!" scroll={false} className="fs-14">Java Developer</Link>
                                                <p className="mb-0 fs-12 text-muted"><i className="bi bi-geo-alt fs-11"></i> Sydney, Australia</p>
                                            </div>
                                            <div className="d-flex align-items-center fs-12 text-muted flex-wrap">
                                                <p className="fs-12 mb-0">Ratings : </p>
                                                <div className="min-w-fit-content ms-2">
                                                    <span className="text-warning"><i className="ri-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-line me-1"></i></span>
                                                    <span className="text-warning"><i className="ri-star-line"></i></span>
                                                </div>
                                                <Link href="#!" scroll={false} className="mb-0 ms-1 min-w-fit-content text-muted">
                                                    <span>(13)</span>
                                                    <span>Ratings</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="popular-tags mb-2">
                                        <Link href="#!" scroll={false} className="fs-13 me-2"><i className="bi bi-mortarboard text-primary me-1"></i> MBA</Link>
                                        <span className="vr align-middle me-2"></span>
                                        <Link href="#!" scroll={false} className="fs-13 me-2"><i className="bi bi-moon-stars text-primary me-1"></i> Day-shift</Link>
                                        <span className="vr align-middle me-2"></span>
                                        <Link href="#!" scroll={false} className="fs-13 me-2"><i className="bi bi-clock text-primary me-1"></i> Within 20 Days</Link>
                                        <span className="vr align-middle me-2"></span>
                                        <Link href="#!" scroll={false} className="fs-13 me-2"><i className="bi bi-broadcast text-primary me-1"></i> Good at English</Link>
                                    </div>
                                    <div className="d-flex align-items-center flex-wrap gap-3 fs-14">
                                        <p className="mb-0 flex-grow-1"><span className="text-muted">Package (Yearly) :</span><span className="fw-medium" data-bs-toggle="tooltip" title="Expected"> $5,145</span> </p>
                                        <p className="mb-0"><span className="text-muted"> Languages :</span> <span className="fw-medium"> English, Hindi, Telugu</span></p>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="d-flex align-items-center gap-3 flex-wrap">
                                        <h6 className="mb-0 fw-medium">Skills :</h6>
                                        <div className="popular-tags flex-grow-1">
                                            <Link href="#!" scroll={false} className="badge bg-light text-default me-1">Java</Link>
                                            <Link href="#!" scroll={false} className="badge bg-light text-default me-1">Core Java</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent">More</Link>
                                        </div>
                                        <div>
                                            <OverlayTrigger placement="top" overlay={<Tooltip>2 year bond accepted</Tooltip>}>
                                                <Link href="#!" scroll={false} className="badge badge-md bg-info-transparent me-1" data-bs-toggle="tooltip" title="1 year bond accepted"><i className="bi bi-hand-thumbs-up me-1"></i>2 year bond accepted</Link>
                                            </OverlayTrigger>
                                            <Link href="#!" scroll={false} className="badge badge-md bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Fresher</Link>
                                        </div>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </div>
                    <Pagination className="pagination justify-content-end">
                        <Pagination.Item className=" disabled">
                            Previous
                        </Pagination.Item>
                        <Pagination.Item className="active">1</Pagination.Item>
                        <Pagination.Item className="">2</Pagination.Item>
                        <Pagination.Item className="">3</Pagination.Item>
                        <Pagination.Item className="">
                            Next
                        </Pagination.Item>
                    </Pagination>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card products-navigation-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Search Filter
                            </div>
                            <Link href="#!" scroll={false} className="text-info fw-medium badge bg-info-transparent">
                                Reset All
                            </Link>
                        </div>
                        <Card.Body className="p-0">
                            <div className="px-2 py-4 px-sm-4 border-bottom">
                                <h6 className="fw-medium mb-0">Categories</h6>
                                <div className="px-2 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="c-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="c-1">
                                            R &amp; D
                                        </label>
                                        <span className="badge bg-light text-default fw-500 float-end">3,417</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="c-2" />
                                        <label className="form-check-label" htmlFor="c-2">
                                            Finance
                                        </label>
                                        <span className="badge bg-light text-default fw-500 float-end">345</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="c-3" defaultChecked />
                                        <label className="form-check-label" htmlFor="c-3">
                                            Marketing
                                        </label>
                                        <span className="badge bg-light text-default fw-500 float-end">15,427</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="c-4" defaultChecked />
                                        <label className="form-check-label" htmlFor="c-4">
                                            Transportation
                                        </label>
                                        <span className="badge bg-light text-default fw-500 float-end">2,457</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="c-5" />
                                        <label className="form-check-label" htmlFor="c-5">
                                            Telecommunications
                                        </label>
                                        <span className="badge bg-light text-default fw-500 float-end">1,542</span>
                                    </div>
                                    <Collapse in={open}>
                                        <div id="category-more">
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="c-6" />
                                                <label className="form-check-label" htmlFor="c-6">
                                                    Aerospace
                                                </label>
                                                <span className="badge bg-light text-default fw-500 float-end">8,466</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="c-7" />
                                                <label className="form-check-label" htmlFor="c-7">
                                                    Biotechnology
                                                </label>
                                                <span className="badge bg-light text-default fw-500 float-end">6,100</span>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link className="ecommerce-more-link" onClick={() => setOpen(!open)} data-bs-toggle="collapse" href="#!" scroll={false} role="button" aria-expanded="false" aria-controls="category-more">MORE</Link>
                                </div>
                            </div>
                            <div className="px-2 py-4 px-sm-4 border-bottom">
                                <h6 className="fw-medium mb-0">Availability</h6>
                                <div className="px-2 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="available-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="available-1">
                                            Immediate
                                        </label>
                                        <span className="badge bg-light text-default fw-500 float-end">512</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="available-2" />
                                        <label className="form-check-label" htmlFor="available-2">
                                            30 Days
                                        </label>
                                        <span className="badge bg-light text-default fw-500 float-end">2,186</span>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="available-3" />
                                        <label className="form-check-label" htmlFor="available-3">
                                            3 Months
                                        </label>
                                        <span className="badge bg-light text-default fw-500 float-end">734</span>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2 py-4 px-sm-4 border-bottom">
                                <h6 className="fw-medium mb-0">Bond Agreement</h6>
                                <div className="px-2 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="bond-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="bond-1">
                                            1 Year
                                        </label>
                                        <span className="badge bg-light text-default fw-500 float-end">512</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="bond-2" />
                                        <label className="form-check-label" htmlFor="bond-2">
                                            2 Years
                                        </label>
                                        <span className="badge bg-light text-default fw-500 float-end">512</span>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="bond-3" />
                                        <label className="form-check-label" htmlFor="bond-3">
                                            3 Years
                                        </label>
                                        <span className="badge bg-light text-default fw-500 float-end">512</span>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2 py-4 px-sm-4 border-bottom">
                                <h6 className="fw-medium mb-0">Languages</h6>
                                <div className="px-2 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="languages-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="languages-1">
                                            English
                                        </label>
                                        <span className="badge bg-light text-default fw-500 float-end">13</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="languages-2" />
                                        <label className="form-check-label" htmlFor="languages-2">
                                            Hindi
                                        </label>
                                        <span className="badge bg-light text-default fw-500 float-end">67</span>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="languages-3" />
                                        <label className="form-check-label" htmlFor="languages-3">
                                            Telugu
                                        </label>
                                        <span className="badge bg-light text-default fw-500 float-end">58</span>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2 py-4 px-sm-4 border-bottom">
                                <h6 className="fw-medium mb-0">Job Type</h6>
                                <div className="px-2 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="j-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="j-1">
                                            Full Time
                                        </label>
                                        <span className="badge bg-light text-default fw-500 float-end">512</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="j-2" defaultChecked />
                                        <label className="form-check-label" htmlFor="j-2">
                                            Part Time
                                        </label>
                                        <span className="badge bg-light text-default fw-500 float-end">2,186</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="j-3" defaultChecked />
                                        <label className="form-check-label" htmlFor="j-3">
                                            Internship
                                        </label>
                                        <span className="badge bg-light text-default fw-500 float-end">734</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="j-4" />
                                        <label className="form-check-label" htmlFor="j-4">
                                            Freelancer
                                        </label>
                                        <span className="badge bg-light text-default fw-500 float-end">16</span>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="j-5" />
                                        <label className="form-check-label" htmlFor="j-5">
                                            Remote Job
                                        </label>
                                        <span className="badge bg-light text-default fw-500 float-end">1,432</span>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2 py-4 px-sm-4 border-bottom">
                                <h6 className="fw-medium mb-0">Salary Range</h6>
                                <div className="px-2 py-3 pb-0">
                                    <div id="nonlinear"></div>
                                    <div id="slider">
                                        <LabeledTwoThumbs1 rtl={local_variable.dir == 'rtl'} />
                                    </div>
                                </div>
                            </div>
                            <div className="px-2 py-4 px-sm-4 border-bottom">
                                <h6 className="fw-medium mb-0">Qualification</h6>
                                <div className="px-2 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="q-1" />
                                        <label className="form-check-label" htmlFor="q-1">
                                            All Education Levels
                                        </label>
                                        <span className="badge bg-light text-default fw-500 float-end">16,563</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="q-2" defaultChecked />
                                        <label className="form-check-label" htmlFor="q-2">
                                            10th Pass and Above
                                        </label>
                                        <span className="badge bg-light text-default fw-500 float-end">15,234</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="q-3" />
                                        <label className="form-check-label" htmlFor="q-3">
                                            12th Pass and Above
                                        </label>
                                        <span className="badge bg-light text-default fw-500 float-end">6,278</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="q-4" defaultChecked />
                                        <label className="form-check-label" htmlFor="q-4">
                                            Diploma and Graduate
                                        </label>
                                        <span className="badge bg-light text-default fw-500 float-end">4,531</span>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="q-5" />
                                        <label className="form-check-label" htmlFor="q-5">
                                            Post Graduate
                                        </label>
                                        <span className="badge bg-light text-default fw-500 float-end">2,405</span>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2 py-4 px-sm-4">
                                <h6 className="fw-medium mb-0">Skills</h6>
                                <div className="px-2 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="s-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="s-1">
                                            HTML5
                                        </label>
                                        <span className="badge bg-light text-default fw-500 float-end">23,156</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="s-2" defaultChecked />
                                        <label className="form-check-label" htmlFor="s-2">
                                            Javascript
                                        </label>
                                        <span className="badge bg-light text-default fw-500 float-end">15,632</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="s-3" />
                                        <label className="form-check-label" htmlFor="s-3">
                                            PHP
                                        </label>
                                        <span className="badge bg-light text-default fw-500 float-end">15,032</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="s-4" defaultChecked />
                                        <label className="form-check-label" htmlFor="s-4">
                                            CSS3
                                        </label>
                                        <span className="badge bg-light text-default fw-500 float-end">7,154</span>
                                    </div>
                                    <div className="collapse" id="sizes-more">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="s-5" />
                                            <label className="form-check-label" htmlFor="s-5">
                                                Bootstrap
                                            </label>
                                            <span className="badge bg-light text-default fw-500 float-end">5,946</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="s-6" />
                                            <label className="form-check-label" htmlFor="s-6">
                                                Angular
                                            </label>
                                            <span className="badge bg-light text-default fw-500 float-end">3,267</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="s-7" />
                                            <label className="form-check-label" htmlFor="s-7">
                                                React
                                            </label>
                                            <span className="badge bg-light text-default fw-500 float-end">578</span>
                                        </div>
                                    </div>
                                    <Link className="ecommerce-more-link" data-bs-toggle="collapse" href="#sizes-more" role="button" aria-expanded="false" aria-controls="sizes-more">MORE</Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

const mapStateToProps = (state: any) => ({
    local_variable: state.local_variable,
});
export default connect(mapStateToProps,)(SearchCandidate);
