"use client";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Collapse, Dropdown, Form, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import Select from 'react-select';

const SearchCompany = () => {

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    const Data = [
        { value: 'All Categories', label: 'All Categories' },
        { value: 'Software Dveloper', label: 'Software Dveloper' },
        { value: 'Web Developer', label: 'Web Developer' },
        { value: 'Software Architect', label: 'Software Architect' },
        { value: 'IT Hardware', label: 'IT Hardware' },
        { value: 'Network Engineer', label: 'Network Engineer' },
        { value: 'React Developer', label: 'React Developer' },
    ];

    return (
        <Fragment>
            <Seo title={"Search Company"} />
            <Row>
                <Col xxl={9} lg={7} className="">
                    <div className="row align-items-center mb-4">
                        <Col lg={12}>
                            <div className="input-group companies-search-input">
                                <input type="text" className="form-control w-25" aria-label="Text input with segmented dropdown button" placeholder="Enter your keyword here" />
                                <Select classNamePrefix="Select2" className='rounded-0 custom-select' name="form-field-name" options={Data} placeholder="All categories" />
                                <input type="text" className="form-control w-25" aria-label="Text input with segmented dropdown button" placeholder="Search by location" />
                                <button type="button" className="btn btn-primary"><i className="ri-search-line"></i></button>
                            </div>
                        </Col>
                    </div>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body>
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <h5 className="fw-medium mb-0 flex-grow-1">2134 <span className="fw-normal fs-18">Companies match for your search</span> </h5>
                                        <Dropdown>
                                            <Dropdown.Toggle variant='' className="btn btn-outline-light border dropdown-toggle" type="button"
                                                data-bs-toggle="dropdown" aria-expanded="false"> Sort By
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className='dropdown-position'>
                                                <Dropdown.Item href="#!">Premium</Dropdown.Item>
                                                <Dropdown.Item href="#!">Newest</Dropdown.Item>
                                                <Dropdown.Item href="#!">Most Relevant</Dropdown.Item>
                                                <Dropdown.Item href="#!">Fresher</Dropdown.Item>
                                                <Dropdown.Item href="#!">Experienced</Dropdown.Item>
                                                <Dropdown.Item href="#!">Bond Agreement</Dropdown.Item>
                                                <Dropdown.Item href="#!">Flexible Shift</Dropdown.Item>
                                                <Dropdown.Item href="#!">Day Shift</Dropdown.Item>
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
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                                            <Link href="#!" scroll={false} className="avatar bg-danger-transparent text-default avatar-sm" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" title="Add to Wishlist"><span><i className="ri-heart-line align-middle fs-14 text-danger"></i></span></Link>
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Share</Tooltip>}>
                                            <Link href="#!" scroll={false} className="avatar bg-info-transparent text-default avatar-sm" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Share" title="Share"><span><i className="ri-share-line align-middle fs-14 text-info"></i></span></Link>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-flex align-items-start flex-wrap gap-2">
                                        <span className="avatar avatar-xl bg-white shadow-sm border p-1 avatar-rounded">
                                            <img src="../../../assets/images/company-logos/1.png" alt="" />
                                        </span>
                                        <div className="ms-2">
                                            <h5 className="fw-medium mb-1 d-flex align-items-center"><Link href="#!" scroll={false}>Innovatepix Co.in<span className="fs-13 text-success">
                                                <i className="ri-checkbox-circle-line text-success fs-13 mx-1 d-inline-block"></i>Verified</span></Link></h5>
                                            <div className="d-flex gap-2">
                                                <Link href="#!" scroll={false}><i className="bi bi-geo-alt fs-11"></i> Paris, France </Link>
                                                <p className="mb-0 text-muted">Establishment year - 1996</p>
                                                <span className="fs-13 fw-medium ms-2"><i className="ri-subtract-fill text-success me-1 d-inline-block fs-7 align-middle"></i>Posted 3 Days ago</span>
                                            </div>
                                            <div className="d-flex align-items-center fs-12 text-muted">
                                                <p className="fs-12 mb-0">Ratings : </p>
                                                <div className="min-w-fit-content ms-2">
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                </div>
                                                <Link href="#!" scroll={false} className="ms-1 min-w-fit-content text-muted">
                                                    <span>(138)</span>
                                                    <span> Ratings</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="flex-grow-1">
                                            <OverlayTrigger placement="top" overlay={<Tooltip>No of employees</Tooltip>}>
                                                <Link href="#!" scroll={false} className="badge badge-md rounded-pill bg-info-transparent  me-2" data-bs-toggle="tooltip" title="No of employees">
                                                    <i className="bi bi-people me-1"></i>No. of Emp : 241</Link>
                                            </OverlayTrigger>
                                            <Link href="#!" scroll={false} className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Vacancies : 13</Link>
                                        </div>
                                        <Link href="#!" scroll={false} className="btn btn-wave btn-primary">
                                            View Profile <i className="ri-arrow-right-line align-middle"></i>
                                        </Link>
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
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                                            <Link href="#!" scroll={false} className="avatar bg-danger-transparent text-default avatar-sm" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" title="Add to Wishlist"><span><i className="ri-heart-line align-middle fs-14 text-danger"></i></span></Link>
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Share</Tooltip>}>
                                            <Link href="#!" scroll={false} className="avatar bg-info-transparent text-default avatar-sm" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Share" title="Share"><span><i className="ri-share-line align-middle fs-14 text-info"></i></span></Link>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-flex align-items-start flex-wrap gap-2">
                                        <span className="avatar avatar-xl bg-white shadow-sm border p-1 avatar-rounded">
                                            <img src="../../../assets/images/company-logos/2.png" alt="" />
                                        </span>
                                        <div className="ms-2">
                                            <h5 className="fw-medium mb-1 d-flex align-items-center"><Link href="#!" scroll={false}> FutureBud Solutions <span className="fs-13 text-success"><i className="ri-checkbox-circle-line text-success fs-13  mx-1 d-inline-block"></i>Verified</span></Link></h5>
                                            <div className="d-flex gap-2 fs-14">
                                                <Link href="#!" scroll={false}><i className="bi bi-geo-alt fs-11"></i> Dubai, UAE </Link>
                                                <p className="mb-0 text-muted">Establishment year - 2001</p>
                                                <span className="fs-13 fw-medium ms-2"><i className="ri-subtract-fill text-success me-1 d-inline-block fs-7 align-middle"></i>Posted 3 Days ago</span>
                                            </div>
                                            <div className="d-flex align-items-center fs-12 text-muted">
                                                <p className="fs-12 mb-0">Ratings : </p>
                                                <div className="min-w-fit-content ms-2">
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star"></i></span>
                                                </div>
                                                <Link href="#!" scroll={false} className="ms-1 min-w-fit-content text-muted">
                                                    <span>(134)</span>
                                                    <span> Ratings</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="flex-grow-1">
                                            <OverlayTrigger placement="top" overlay={<Tooltip>No of employees</Tooltip>}>
                                                <Link href="#!" scroll={false} className="badge badge-md rounded-pill bg-info-transparent  me-2" data-bs-toggle="tooltip" title="No of employees"><i className="bi bi-people me-1"></i>No. of Emp : 182</Link>
                                            </OverlayTrigger>
                                            <Link href="#!" scroll={false} className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Vacancies : 42</Link>
                                        </div>
                                        <Link href="#!" scroll={false} className="btn btn-wave btn-primary">
                                            View Profile <i className="ri-arrow-right-line align-middle"></i>
                                        </Link>
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
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                                            <Link href="#!" scroll={false} className="avatar bg-danger-transparent text-default avatar-sm" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" title="Add to Wishlist"><span><i className="ri-heart-line align-middle fs-14 text-danger"></i></span></Link>
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Share</Tooltip>}>
                                            <Link href="#!" scroll={false} className="avatar bg-info-transparent text-default avatar-sm" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Share" title="Share"><span><i className="ri-share-line align-middle fs-14 text-info"></i></span></Link>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-flex align-items-start flex-wrap gap-2">
                                        <span className="avatar avatar-xl bg-white shadow-sm border p-1 avatar-rounded">
                                            <img src="../../../assets/images/company-logos/3.png" alt="" />
                                        </span>
                                        <div className="ms-2">
                                            <h5 className="fw-medium mb-1 d-flex align-items-center"><Link href="#!" scroll={false}> TechicGen PVT LTD <span className="fs-13 text-success"><i className="ri-checkbox-circle-line text-success fs-13  mx-1 d-inline-block"></i>Verified</span></Link></h5>
                                            <div className="d-flex gap-2 fs-14">
                                                <Link href="#!" scroll={false}><i className="bi bi-geo-alt fs-11"></i> London, UK, </Link>
                                                <p className="mb-0 text-muted">Establishment year - 2000</p>
                                                <span className="fs-13 fw-medium ms-2"><i className="ri-subtract-fill text-success me-1 d-inline-block fs-7 align-middle"></i>Posted 3 Days ago</span>
                                            </div>
                                            <div className="d-flex align-items-center fs-12 text-muted">
                                                <p className="fs-12 mb-0">Ratings : </p>
                                                <div className="min-w-fit-content ms-2">
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star"></i></span>
                                                </div>
                                                <Link href="#!" scroll={false} className="ms-1 min-w-fit-content text-muted">
                                                    <span>(234)</span>
                                                    <span> Ratings</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="flex-grow-1">
                                            <OverlayTrigger placement="top" overlay={<Tooltip>No of employees</Tooltip>}>
                                                <Link href="#!" scroll={false} className="badge badge-md rounded-pill bg-info-transparent  me-2" data-bs-toggle="tooltip" title="No of employees"><i className="bi bi-people me-1"></i>No. of Emp : 32</Link>
                                            </OverlayTrigger>
                                            <Link href="#!" scroll={false} className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Vacancies : 13</Link>
                                        </div>
                                        <Link href="#!" scroll={false} className="btn btn-wave btn-primary">
                                            View Profile <i className="ri-arrow-right-line align-middle"></i>
                                        </Link>
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
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                                            <Link href="#!" scroll={false} className="avatar bg-danger-transparent text-default avatar-sm" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" title="Add to Wishlist"><span><i className="ri-heart-line align-middle fs-14 text-danger"></i></span></Link>
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Share</Tooltip>}>
                                            <Link href="#!" scroll={false} className="avatar bg-info-transparent text-default avatar-sm" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Share" title="Share"><span><i className="ri-share-line align-middle fs-14 text-info"></i></span></Link>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-flex align-items-start flex-wrap gap-2">
                                        <span className="avatar avatar-xl bg-white shadow-sm border p-1 avatar-rounded">
                                            <img src="../../../assets/images/company-logos/7.png" alt="" />
                                        </span>
                                        <div className="ms-2">
                                            <h5 className="fw-medium mb-1 d-flex align-items-center"><Link href="#!" scroll={false}> Pinnacle Apex Solutions <span className="fs-13 text-success"><i className="ri-checkbox-circle-line text-success fs-13 mx-1 d-inline-block"></i>Verified</span></Link></h5>
                                            <div className="d-flex gap-2 fs-14">
                                                <Link href="#!" scroll={false}><i className="bi bi-geo-alt fs-11"></i> Sydney, Australia, </Link>
                                                <p className="mb-0 text-muted">Establishment year - 2005</p>
                                                <span className="fs-13 fw-medium ms-2"><i className="ri-subtract-fill text-success me-1 d-inline-block fs-7 align-middle"></i>Posted 2 Days ago</span>
                                            </div>
                                            <div className="d-flex align-items-center fs-12 text-muted">
                                                <p className="fs-12 mb-0">Ratings : </p>
                                                <div className="min-w-fit-content ms-2">
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                </div>
                                                <Link href="#!" scroll={false} className="ms-1 min-w-fit-content text-muted">
                                                    <span>(239)</span>
                                                    <span> Ratings</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="flex-grow-1">
                                            <OverlayTrigger placement="top" overlay={<Tooltip>No of employees</Tooltip>}>
                                                <Link href="#!" scroll={false} className="badge badge-md rounded-pill bg-info-transparent  me-2" data-bs-toggle="tooltip" title="No of employees"><i className="bi bi-people me-1"></i>No. of Emp : 127</Link>
                                            </OverlayTrigger>
                                            <Link href="#!" scroll={false} className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Vacancies : 22</Link>
                                        </div>
                                        <Link href="#!" scroll={false} className="btn btn-wave btn-primary">
                                            View Profile <i className="ri-arrow-right-line align-middle"></i>
                                        </Link>
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
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                                            <Link href="#!" scroll={false} className="avatar bg-danger-transparent text-default avatar-sm" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" title="Add to Wishlist"><span><i className="ri-heart-line align-middle fs-14 text-danger"></i></span></Link>
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Share</Tooltip>}>
                                            <Link href="#!" scroll={false} className="avatar bg-info-transparent text-default avatar-sm" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Share" title="Share"><span><i className="ri-share-line align-middle fs-14 text-info"></i></span></Link>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-flex align-items-start flex-wrap gap-2">
                                        <span className="avatar avatar-xl bg-white shadow-sm border p-1 avatar-rounded">
                                            <img src="../../../assets/images/company-logos/5.png" alt="" />
                                        </span>
                                        <div className="ms-2">
                                            <h5 className="fw-medium mb-1 d-flex align-items-center"><Link href="#!" scroll={false}> Renith Innovations Corp. <span className="fs-13 text-success"><i className="ri-checkbox-circle-line text-success fs-13 mx-1 d-inline-block"></i>Verified</span></Link></h5>
                                            <div className="d-flex gap-2 fs-14">
                                                <Link href="#!" scroll={false}><i className="bi bi-geo-alt fs-11"></i> Sydney, Australia, </Link>
                                                <p className="mb-0 text-muted">Establishment year - 2020</p>
                                                <span className="fs-13 fw-medium ms-2"><i className="ri-subtract-fill text-success me-1 d-inline-block fs-7 align-middle"></i>Posted 2 Days ago</span>
                                            </div>
                                            <div className="d-flex align-items-center fs-12 text-muted">
                                                <p className="fs-12 mb-0">Ratings : </p>
                                                <div className="min-w-fit-content ms-2">
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                </div>
                                                <Link href="#!" scroll={false} className="ms-1 min-w-fit-content text-muted">
                                                    <span>(239)</span>
                                                    <span> Ratings</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="flex-grow-1">
                                            <OverlayTrigger placement="top" overlay={<Tooltip>No of employees</Tooltip>}>
                                                <Link href="#!" scroll={false} className="badge badge-md rounded-pill bg-info-transparent  me-2" data-bs-toggle="tooltip" title="No of employees"><i className="bi bi-people me-1"></i>No. of Emp : 127</Link>
                                            </OverlayTrigger>
                                            <Link href="#!" scroll={false} className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Vacancies : 22</Link>
                                        </div>
                                        <Link href="#!" scroll={false} className="btn btn-wave btn-primary">
                                            View Profile <i className="ri-arrow-right-line align-middle"></i>
                                        </Link>
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
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                                            <Link href="#!" scroll={false} className="avatar bg-danger-transparent text-default avatar-sm" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" title="Add to Wishlist"><span><i className="ri-heart-line align-middle fs-14 text-danger"></i></span></Link>
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Share</Tooltip>}>
                                            <Link href="#!" scroll={false} className="avatar bg-info-transparent text-default avatar-sm" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Share" title="Share"><span><i className="ri-share-line align-middle fs-14 text-info"></i></span></Link>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-flex align-items-start flex-wrap gap-2">
                                        <span className="avatar avatar-xl bg-white shadow-sm border p-1 avatar-rounded">
                                            <img src="../../../assets/images/company-logos/6.png" alt="" />
                                        </span>
                                        <div className="ms-2">
                                            <h5 className="fw-medium mb-1 d-flex align-items-center"><Link href="#!" scroll={false}> Vista Nexus Technologies <span className="fs-13 text-success"><i className="ri-checkbox-circle-line text-success fs-13 mx-1 d-inline-block"></i>Verified</span></Link></h5>
                                            <div className="d-flex gap-2 fs-14">
                                                <Link href="#!" scroll={false}><i className="bi bi-geo-alt fs-11"></i> Tokyo, Japan </Link>
                                                <p className="mb-0 text-muted">Establishment year - 2000</p>
                                                <span className="fs-13 fw-medium ms-2"><i className="ri-subtract-fill text-success me-1 d-inline-block fs-7 align-middle"></i>Posted 1 Day ago</span>
                                            </div>
                                            <div className="d-flex align-items-center fs-12 text-muted">
                                                <p className="fs-12 mb-0">Ratings : </p>
                                                <div className="min-w-fit-content ms-2">
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                </div>
                                                <Link href="#!" scroll={false} className="ms-1 min-w-fit-content text-muted">
                                                    <span>(764)</span>
                                                    <span> Ratings</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="flex-grow-1">
                                            <OverlayTrigger placement="top" overlay={<Tooltip>No of employees</Tooltip>}>
                                                <Link href="#!" scroll={false} className="badge badge-md rounded-pill bg-info-transparent  me-2" data-bs-toggle="tooltip" title="No of employees"><i className="bi bi-people me-1"></i>No. of Emp : 127</Link>
                                            </OverlayTrigger>
                                            <Link href="#!" scroll={false} className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Vacancies : 22</Link>
                                        </div>
                                        <Link href="#!" scroll={false} className="btn btn-wave btn-primary">
                                            View Profile <i className="ri-arrow-right-line align-middle"></i>
                                        </Link>
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
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                                            <Link href="#!" scroll={false} className="avatar bg-danger-transparent text-default avatar-sm" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" title="Add to Wishlist"><span><i className="ri-heart-line align-middle fs-14 text-danger"></i></span></Link>
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Share</Tooltip>}>
                                            <Link href="#!" scroll={false} className="avatar bg-info-transparent text-default avatar-sm" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Share" title="Share"><span><i className="ri-share-line align-middle fs-14 text-info"></i></span></Link>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-flex align-items-start flex-wrap gap-2">
                                        <span className="avatar avatar-xl bg-white shadow-sm border p-1 avatar-rounded">
                                            <img src="../../../assets/images/company-logos/10.png" alt="" />
                                        </span>
                                        <div className="ms-2">
                                            <h5 className="fw-medium mb-1 d-flex align-items-center"><Link href="#!" scroll={false}>Innovatepix Co.in <span className="fs-13 text-success"><i className="ri-checkbox-circle-line text-success fs-13 mx-1 d-inline-block"></i>Verified</span></Link></h5>
                                            <div className="d-flex gap-2 fs-14">
                                                <Link href="#!" scroll={false}><i className="bi bi-geo-alt fs-11"></i> Paris, France,</Link>
                                                <p className="mb-0 text-muted">Establishment year - 1996</p>
                                                <span className="fs-13 fw-medium ms-2"><i className="ri-subtract-fill text-success me-1 d-inline-block fs-7 align-middle"></i>Posted 1 Day ago</span>
                                            </div>
                                            <div className="d-flex align-items-center fs-12 text-muted">
                                                <p className="fs-12 mb-0">Ratings : </p>
                                                <div className="min-w-fit-content ms-2">
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                </div>
                                                <Link href="#!" scroll={false} className="ms-1 min-w-fit-content text-muted">
                                                    <span>(138)</span>
                                                    <span> Ratings</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="flex-grow-1">
                                            <OverlayTrigger placement="top" overlay={<Tooltip>No of employees</Tooltip>}>
                                                <Link href="#!" scroll={false} className="badge badge-md rounded-pill bg-info-transparent  me-2" data-bs-toggle="tooltip" title="No of employees"><i className="bi bi-people me-1"></i>No. of Emp : 241</Link>
                                            </OverlayTrigger>
                                            <Link href="#!" scroll={false} className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Vacancies : 13</Link>
                                        </div>
                                        <Link href="#!" scroll={false} className="btn btn-wave btn-primary">
                                            View Profile <i className="ri-arrow-right-line align-middle"></i>
                                        </Link>
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
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                                            <Link href="#!" scroll={false} className="avatar bg-danger-transparent text-default avatar-sm" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" title="Add to Wishlist"><span><i className="ri-heart-line align-middle fs-14 text-danger"></i></span></Link>
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Share</Tooltip>}>
                                            <Link href="#!" scroll={false} className="avatar bg-info-transparent text-default avatar-sm" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Share" title="Share"><span><i className="ri-share-line align-middle fs-14 text-info"></i></span></Link>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-flex align-items-start flex-wrap gap-2">
                                        <span className="avatar avatar-xl bg-white shadow-sm border p-1 avatar-rounded">
                                            <img src="../../../assets/images/company-logos/9.png" alt="" />
                                        </span>
                                        <div className="ms-2">
                                            <h5 className="fw-medium mb-1 d-flex align-items-center"><Link href="#!" scroll={false}> FutureBud Solutions <span className="fs-13 text-success"><i className="ri-checkbox-circle-line text-success fs-13 mx-1 d-inline-block"></i>Verified</span></Link></h5>
                                            <div className="d-flex gap-2 fs-14">
                                                <Link href="#!" scroll={false}><i className="bi bi-geo-alt fs-11"></i> Mumbai, India, </Link>
                                                <p className="mb-0 text-muted">Establishment year - 2001</p>
                                                <span className="fs-13 fw-medium ms-3"><i className="ri-subtract-fill text-success me-1 d-inline-block fs-7 align-middle"></i>Posted 4hrs ago</span>
                                            </div>
                                            <div className="d-flex align-items-center fs-12 text-muted">
                                                <p className="fs-12 mb-0">Ratings : </p>
                                                <div className="min-w-fit-content ms-2">
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star"></i></span>
                                                </div>
                                                <Link href="#!" scroll={false} className="ms-1 min-w-fit-content text-muted">
                                                    <span>(134)</span>
                                                    <span> Ratings</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="flex-grow-1">
                                            <OverlayTrigger placement="top" overlay={<Tooltip>No of employees</Tooltip>}>
                                                <Link href="#!" scroll={false} className="badge badge-md rounded-pill bg-info-transparent  me-2" data-bs-toggle="tooltip" title="No of employees"><i className="bi bi-people me-1"></i>No. of Emp : 182</Link>
                                            </OverlayTrigger>
                                            <Link href="#!" scroll={false} className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Vacancies : 42</Link>
                                        </div>
                                        <Link href="#!" scroll={false} className="btn btn-wave btn-primary">
                                            View Profile <i className="ri-arrow-right-line align-middle"></i>
                                        </Link>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                    <ul className="pagination mb-4 justify-content-end">
                        <li className="page-item disabled">
                            <Link className="page-link" href="#!" scroll={false}>
                                Prev
                            </Link>
                        </li>
                        <li className="page-item active"><Link className="page-link" href="#!" scroll={false}>1</Link></li>
                        <li className="page-item"><Link className="page-link" href="#!" scroll={false}>2</Link></li>
                        <li className="page-item"><Link className="page-link" href="#!" scroll={false}>3</Link></li>
                        <li className="page-item">
                            <Link className="page-link text-primary" href="#!" scroll={false}>
                                next
                            </Link>
                        </li>
                    </ul>
                </Col>
                <Col xxl={3} lg={5} className="">
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
                            <div className="p-4 border-bottom">
                                <h6 className="fw-medium mb-0">Industry Type</h6>
                                <div className="px-2 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="c-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="c-1">
                                            IT
                                        </label>
                                        <span className="badge bg-light text-default  float-end">3,417</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="c-2" />
                                        <label className="form-check-label" htmlFor="c-2">
                                            Finance
                                        </label>
                                        <span className="badge bg-light text-default  float-end">536</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="c-3" defaultChecked />
                                        <label className="form-check-label" htmlFor="c-3">
                                            Marketing
                                        </label>
                                        <span className="badge bg-light text-default  float-end">18,289</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="c-4" defaultChecked />
                                        <label className="form-check-label" htmlFor="c-4">
                                            Transportation
                                        </label>
                                        <span className="badge bg-light text-default  float-end">3,453</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="c-5" />
                                        <label className="form-check-label" htmlFor="c-5">
                                            Telecom
                                        </label>
                                        <span className="badge bg-light text-default  float-end">7,165</span>
                                    </div>
                                    <Collapse in={open}>
                                        <div id="category-more">
                                            <div className="form-check mb-2">
                                                <Form.Check className=" me-2" type="checkbox" value="" id="cc-6" />
                                                <Form.Label className="" htmlFor="cc-6">
                                                    Aerospace
                                                </Form.Label>
                                                <span className="badge bg-light text-default  float-end">5,964</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check className=" me-2" type="checkbox" value="" id="cc-7" />
                                                <Form.Label className="" htmlFor="cc-7">
                                                    Marketing
                                                </Form.Label>
                                                <span className="badge bg-light text-default  float-end">2,123</span>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link className="ecommerce-more-link" onClick={() => setOpen(!open)} data-bs-toggle="collapse" href="#!" scroll={false} role="button" aria-expanded="false" aria-controls="category-more">MORE</Link>
                                </div>
                            </div>
                            <div className="p-4 border-bottom">
                                <h6 className="fw-medium mb-0">Location</h6>
                                <div className="px-2 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="available-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="available-1">
                                            France
                                        </label>
                                        <span className="badge bg-light text-default  float-end">512</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="available-2" />
                                        <label className="form-check-label" htmlFor="available-2">
                                            Uk
                                        </label>
                                        <span className="badge bg-light text-default  float-end">2,186</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="available-3" />
                                        <label className="form-check-label" htmlFor="available-3">
                                            UAE
                                        </label>
                                        <span className="badge bg-light text-default  float-end">734</span>
                                    </div>
                                    <Collapse in={open1}>
                                        <div>
                                            <div className="form-check mb-2">
                                                <Form.Check className=" me-2" type="checkbox" value="" id="c-6" />
                                                <Form.Label className="" htmlFor="c-6">
                                                    Australia
                                                </Form.Label>
                                                <span className="badge bg-light text-default  float-end">5,964</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check className="me-2" type="checkbox" value="" id="c-7" />
                                                <Form.Label className="" htmlFor="c-7">
                                                    USA
                                                </Form.Label>
                                                <span className="badge bg-light text-default  float-end">2,123</span>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link className="ecommerce-more-link" onClick={() => setOpen1(!open1)} data-bs-toggle="collapse" scroll={false} href="#!" role="button" aria-expanded="false" aria-controls="category-more">MORE</Link>
                                </div>
                            </div>
                            <div className="p-4 border-bottom">
                                <h6 className="fw-medium mb-0">Company Size</h6>
                                <div className="px-2 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="bond-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="bond-1">
                                            0-50
                                        </label>
                                        <span className="badge bg-light text-default  float-end">145</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="bond-2" />
                                        <label className="form-check-label" htmlFor="bond-2">
                                            50 - 100
                                        </label>
                                        <span className="badge bg-light text-default  float-end">432</span>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="bond-3" />
                                        <label className="form-check-label" htmlFor="bond-3">
                                            100 - 150
                                        </label>
                                        <span className="badge bg-light text-default  float-end">123</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border-bottom">
                                <h6 className="fw-medium mb-0">Recruiter Type</h6>
                                <div className="px-2 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="Recruiter-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="Recruiter-1">
                                            Direct Company
                                        </label>
                                        <span className="badge bg-light text-default  float-end">13</span>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="Recruiter-2" />
                                        <label className="form-check-label" htmlFor="Recruiter-2">
                                            Agency
                                        </label>
                                        <span className="badge bg-light text-default  float-end">67</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border-bottom">
                                <h6 className="fw-medium mb-0">Job Vacancies</h6>
                                <div className="px-2 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="vacancies-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="vacancies-1">
                                            0 -10
                                        </label>
                                        <span className="badge bg-light text-default  float-end">13</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="vacancies-2" />
                                        <label className="form-check-label" htmlFor="vacancies-2">
                                            10 - 20
                                        </label>
                                        <span className="badge bg-light text-default  float-end">67</span>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="vacancies-3" />
                                        <label className="form-check-label" htmlFor="vacancies-3">
                                            20 +above
                                        </label>
                                        <span className="badge bg-light text-default  float-end">67</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border-bottom">
                                <h6 className="fw-medium mb-0">Type of Employement</h6>
                                <div className="px-2 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="j-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="j-1">
                                            Full Time
                                        </label>
                                        <span className="badge bg-light text-default  float-end">512</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="j-2" defaultChecked />
                                        <label className="form-check-label" htmlFor="j-2">
                                            Part Time
                                        </label>
                                        <span className="badge bg-light text-default  float-end">2,186</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="j-3" defaultChecked />
                                        <label className="form-check-label" htmlFor="j-3">
                                            Internship
                                        </label>
                                        <span className="badge bg-light text-default  float-end">734</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="j-4" />
                                        <label className="form-check-label" htmlFor="j-4">
                                            Freelancer
                                        </label>
                                        <span className="badge bg-light text-default  float-end">16</span>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="j-5" />
                                        <label className="form-check-label" htmlFor="j-5">
                                            Remote Job
                                        </label>
                                        <span className="badge bg-light text-default  float-end">1,432</span>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default SearchCompany;
