"use client";
import { Blogdata, Blogdata1 } from "@/shared/data/pages/blog/blogdata";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, ListGroup, Pagination, Row } from "react-bootstrap";

const Blog = () => {
    return (
        <Fragment>
            <Seo title={"Blog"} />
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0 fw-medium">Latest Articles</h5>
                <p className="mb-0 fw-medium">
                    <Link href="#!" scroll={false} className="btn btn-primary-light">View All Posts</Link>
                </p>
            </div>
            <Row>
                {Blogdata.map((idx) => (
                    <Col md={4} className="" key={Math.random()}>
                        <Card className="custom-card bg-dark overlay-card text-fixed-white border-0">
                            <img src={idx.src1} className="card-img rounded-0" alt="..." />
                            <div className="card-img-overlay d-flex flex-column p-0 over-content-top justify-content-between">
                                <Card.Body className="overflow-auto text-fixed-white">
                                    <div className="text-fixed-white fs-18 fw-semibold">
                                        {idx.heading}
                                    </div>
                                    <div className="card-text mb-2 text-fixed-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</div>
                                    <div className="py-2">
                                        <h6 className="fw-medium mb-0 text-fixed-white fs-13 op-7">- {idx.data}</h6>
                                    </div>
                                </Card.Body>
                                <Card.Footer className="border-top-0">
                                    <Link href="/pages/blog/blog-details" className="text-primary fs-14">Read More <i className="ri-arrow-right-s-line d-inline-block rtl-icon-transform align-middle"></i></Link>
                                </Card.Footer>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row>
                <Col xxl={7} xl={12} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="d-sm-flex align-items-center p-3">
                            <img src="../../../assets/images/media/media-36.jpg" className="img-fluid card-left-image" alt="..." />
                            <div className="ps-sm-4 mt-3 mt-sm-0">
                                <div className="float-end">
                                    <div className="btn-list">
                                        <Button variant="" aria-label="button" type="button" className="btn btn-icon btn-light btn-sm"><i className="ri-thumb-up-line"></i></Button>
                                        <Button variant="" aria-label="button" type="button" className="btn btn-icon btn-primary-light btn-sm"><i className="ri-chat-2-line"></i></Button>
                                    </div>
                                </div>
                                <div className="badge bg-info-transparent mb-2">Meditation</div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-xs avatar-rounded me-2">
                                            <img src="../../../assets/images/faces/10.jpg" alt="" />
                                        </div>
                                        <div>
                                            <p className="mb-0 fw-medium">Milton Linton <span className=" fs-11 op-6">- 28 Jan 2024</span></p>
                                        </div>
                                    </div>
                                </div>
                                <Link href="/pages/blog/blog-details" className="fw-medium fs-22 text-dark mb-1">Heart of Mindfulness!</Link>
                                <p className="fs-11 text-muted mb-2 op-8">Tap into the Energy -Experience the healing power of sound meditation with our in-depth exploration of Tibetan singing bowls.
                                </p>
                                <Link href="/pages/blog/blog-details" className="text-primary fs-13">Read More <i className="ri-arrow-right-s-line d-inline-block rtl-icon-transform align-middle"></i></Link>
                            </div>
                        </div>
                    </Card>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="d-sm-flex align-items-center p-3">
                            <img src="../../../assets/images/media/media-35.jpg" className="img-fluid card-left-image" alt="..." />
                            <div className="ps-sm-4 mt-3 mt-sm-0">
                                <div className="float-end">
                                    <div className="btn-list">
                                        <Button variant="" aria-label="button" type="button" className="btn btn-icon btn-light btn-sm"><i className="ri-thumb-up-line"></i></Button>
                                        <Button variant="" aria-label="button" type="button" className="btn btn-icon btn-primary-light btn-sm"><i className="ri-chat-2-line"></i></Button>
                                    </div>
                                </div>
                                <div className="badge bg-warning-transparent mb-2">Nature</div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-xs avatar-rounded me-2">
                                            <img src="../../../assets/images/faces/5.jpg" alt="" />
                                        </div>
                                        <div>
                                            <p className="mb-0 fw-medium">Spencer Winn <span className=" fs-11 op-6">- 11 Jan 2024</span></p>
                                        </div>
                                    </div>
                                </div>
                                <Link href="/pages/blog/blog-details" className="fw-medium fs-22 text-dark mb-1">Climb the Mountains Hills!</Link>
                                <p className="fs-11 text-muted mb-2 op-8">Uncover the mysteries of ancient mountain cultures in our exploration of Himalayan hillside villages – a captivating blend of tradition.
                                </p>
                                <Link href="/pages/blog/blog-details" className="text-primary fs-13">Read More <i className="ri-arrow-right-s-line d-inline-block rtl-icon-transform align-middle"></i></Link>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xxl={5} xl={12} className="">
                    <Card className="custom-card overflow-hidden">
                        <Card.Body className="p-0">
                            <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval="2000">
                                        <Link href="#!" scroll={false}>
                                            <img src="../../../assets/images/media/media-70.jpg" className="d-block w-100" alt="..." />
                                            <div className="carousel-caption blog-caption text-center">
                                                <p className="mb-2">The Future of Remote Work: Strategies for Building a Productive and Connected Virtual Team in the Post-Pandemic Era.</p>
                                                <h6 className="fw-medium mb-2">BUSINESS</h6>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <span className="avatar avatar-sm me-2">
                                                        <img src="../../../assets/images/faces/15.jpg" alt="" />
                                                    </span>
                                                    <div className="fw-medium">James Lucas - <span className="fs-11 op-7 fw-normal">12,Dec 2023 - 04:34PM</span></div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <Link href="#!" scroll={false}>
                                            <img src="../../../assets/images/media/media-71.jpg" className="d-block w-100" alt="..." />
                                            <div className="carousel-caption blog-caption text-center">
                                                <p className="mb-2">Discover the magic of rainy season photography with our expert tips and tricks – capture the beauty of rain. </p>
                                                <h6 className="fw-medium mb-2 text-fixed-white">Rainy season</h6>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <span className="avatar avatar-sm me-2">
                                                        <img src="../../../assets/images/faces/15.jpg" alt="" />
                                                    </span>
                                                    <div className="fw-medium">Kayson Hidy - <span className="fs-11 op-7 fw-normal">23,Dec 2023 - 09:18AM</span></div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <Link href="#!" scroll={false}>
                                            <img src="../../../assets/images/media/media-72.jpg" className="d-block w-100" alt="..." />
                                            <div className="carousel-caption blog-caption text-center">
                                                <p className="mb-2">Celebrate the sweetness of summer with our Strawberry Fields Forever Smoothie – a refreshing blend of ripe strawberries that extra burst of freshness.</p>
                                                <h6 className="fw-medium mb-2 text-fixed-white">Fresh strawberries</h6>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <span className="avatar avatar-sm me-2">
                                                        <img src="../../../assets/images/faces/4.jpg" alt="" />
                                                    </span>
                                                    <div className="fw-medium">Aldous Cason - <span className="fs-11 op-7 fw-normal">21,Jan 2024 - 05:35PM</span></div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xxl={4} xl={6} lg={6} md={6} sm={6} className="col-12">
                    <Card className="custom-card">
                        <Link href="#!" scroll={false}>
                            <img src="../../../assets/images/media/media-40.jpg" className="img-fluid" alt="..." />
                        </Link>
                        <Card.Body>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                    <div className="avatar avatar-sm avatar-rounded me-2">
                                        <img src="../../../assets/images/faces/7.jpg" alt="" />
                                    </div>
                                    <div>
                                        <p className="mb-0 fw-medium fs-12">Jaylee Fore</p>
                                        <p className="text-muted fs-11 mb-0"><i className="fe fe-calendar"></i> 17,Dec 2023 - <i className="fe fe-clock"></i> 12:32</p>
                                    </div>
                                </div>
                                <div className="btn-list">
                                    <Button variant="" aria-label="button" type="button" className="btn btn-icon btn-primary-light btn-sm"><i className="ri-thumb-up-line"></i></Button>

                                </div>
                            </div><Link href="/pages/blog/blog-details" className="fw-medium fs-14 text-dark mb-1">Inspiration everywhere you look!</Link>
                            <p className="card-text text-muted mb-3 op-8">Awaken your inner artist with our guide to sketching on the go – from quick urban sketches to capturing the essence of nature.</p>
                            <Link href="/pages/blog/blog-details" className="text-primary fs-14 float-end">Read More <i className="ri-arrow-right-s-line d-inline-block rtl-icon-transform align-middle"></i></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6} lg={6} md={6} sm={6} className="col-12">
                    <Card className="custom-card">
                        <Link href="#!" scroll={false}>
                            <img src="../../../assets/images/media/media-61.jpg" className="img-fluid" alt="..." />
                        </Link>
                        <Card.Body>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                    <div className="avatar avatar-sm avatar-rounded me-2">
                                        <img src="../../../assets/images/faces/2.jpg" alt="" />
                                    </div>
                                    <div>
                                        <p className="mb-0 fw-medium fs-12">Beckett Chad</p>
                                        <p className="text-muted fs-11 mb-0"><i className="fe fe-calendar"></i> 24,Dec 2023 - <i className="fe fe-clock"></i> 14:21</p>
                                    </div>
                                </div>
                                <div className="btn-list">
                                    <Button variant="" aria-label="button" type="button" className="btn btn-icon btn-primary-light btn-sm"><i className="ri-thumb-up-line"></i></Button>
                                </div>
                            </div>
                            <Link href="/pages/blog/blog-details" className="fw-medium fs-14 text-dark mb-1">Strategic agility in a fast-paced world.</Link>
                            <p className="card-text text-muted mb-3 op-8"> Learn how to navigate uncertainty and embrace change with our proven strategies for building a resilient business. </p>
                            <Link href="/pages/blog/blog-details" className="text-primary fs-14 float-end">Read More <i className="ri-arrow-right-s-line d-inline-block rtl-icon-transform align-middle"></i></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Card className="custom-card">
                        <Link href="#!" scroll={false}>
                            <img src="../../../assets/images/media/media-42.jpg" className="w-100" alt="..." />
                        </Link>
                        <Card.Body>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                    <div className="avatar avatar-sm avatar-rounded me-2">
                                        <img src="../../../assets/images/faces/12.jpg" alt="" />
                                    </div>
                                    <div>
                                        <p className="mb-0 fw-medium fs-12">Brayden</p>
                                        <p className="text-muted fs-11 mb-0"><i className="fe fe-calendar"></i> 19,Dec 2023 - <i className="fe fe-clock"></i> 15:48</p>
                                    </div>
                                </div>
                                <div className="btn-list">
                                    <Button variant="" aria-label="button" type="button" className="btn btn-icon btn-primary-light btn-sm"><i className="ri-thumb-up-line"></i></Button>
                                </div>
                            </div>
                            <Link href="/pages/blog/blog-details" className="fw-medium fs-14 text-dark mb-1"> Visitor's Island</Link>
                            <p className="card-text text-muted mb-3 op-8">Explore the enchanting beauty of Bali with our insider's tips on must-visit temples, lush rice terraces, and the best spots.</p>
                            <Link href="/pages/blog/blog-details" className="text-primary fs-14 float-end">Read More <i className="ri-arrow-right-s-line d-inline-block rtl-icon-transform align-middle"></i></Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xxl={3} lg={12} md={12} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="p-0">
                            <ListGroup className="list-group-flush">
                                {Blogdata1.map((idx) => (
                                    <ListGroup.Item className="list-group-item" key={Math.random()}>
                                        <div className="d-flex align-items-start flex-wrap flex-lg-nowrap gap-1">
                                            <span className="avatar avatar-xxl me-3 flex-shrink-0">
                                                <img src={idx.src1} className="img-fluid" alt="..." />
                                            </span>
                                            <div className="flex-fill my-auto">
                                                <Link href="#!" scroll={false} className="fs-10 fw-medium mb-2 text-primary badge bg-primary-transparent">{idx.heading}</Link>
                                                <p className="mb-1 fs-14">
                                                    There are many variations of passages...
                                                </p>
                                                <span className="text-muted fs-11"> <i className="fe fe-calendar"></i> {idx.date} - <i className="fe fe-clock"></i> {idx.time}</span>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={9} lg={12} md={12} className="">
                    <Row>
                        <Col xxl={4} xl={6} lg={6} md={6}>
                            <Card className="custom-card">
                                <div className="blog-image-top">
                                    <Link href="#!" scroll={false}>
                                        <img src="../../../assets/images/media/media-26.jpg" className="w-100" alt="..." />
                                    </Link>
                                    <div className="badge fs-10 fw-semibold px-2">Travel</div>
                                </div>
                                <Card.Body>
                                    <Link href="/pages/blog/blog-details" className="fw-medium fs-14 text-dark mb-1">Way to the Cabin!</Link>
                                    <p className="card-text text-muted mb-3">Unplug, unwind, and reconnect with nature as we share our favorite activities for a weekend cabin escape.</p>
                                    <Link href="/pages/blog/blog-details" className="text-primary fs-14">Read More <i className="ri-arrow-right-s-line d-inline-block rtl-icon-transform align-middle"></i></Link>
                                </Card.Body>
                                <div className="card-footer">
                                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <div className="avatar avatar-sm avatar-rounded me-2">
                                                <img src="../../../assets/images/faces/11.jpg" alt="" />
                                            </div>
                                            <div>
                                                <p className="mb-0 fw-medium">Wiley Fred</p>
                                                <p className="text-muted fs-11 mb-0"><i className="fe fe-calendar"></i> 18,Dec 2023 - <i className="fe fe-clock"></i> 12:25</p>
                                            </div>
                                        </div>
                                        <div className="btn-list">
                                            <Button variant="" aria-label="button" type="button" className="btn btn-icon btn-primary-light btn-sm m-1"><i className="ri-thumb-up-line"></i></Button>
                                            <Button variant="" aria-label="button" type="button" className="btn btn-icon btn-primary-light btn-sm m-1"><i className="ri-chat-2-line"></i></Button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col xxl={4} xl={6} lg={6} md={6}>
                            <Card className="custom-card">
                                <div className="blog-image-top">
                                    <Link href="#!" scroll={false}>
                                        <img src="../../../assets/images/media/media-27.jpg" className="w-100" alt="..." />
                                    </Link>
                                    <div className="badge fs-10 fw-semibold px-2">Travel</div>
                                </div>
                                <Card.Body>
                                    <Link href="/pages/blog/blog-details" className="fw-medium fs-14 text-dark mb-1"> Water Activities for a Day!</Link>
                                    <p className="card-text text-muted mb-3">Dive into the crystal-clear waters and ride the waves of joy as we share our favorite water activities to make your day unforgettable!.</p>
                                    <Link href="/pages/blog/blog-details" className="text-primary fs-14">Read More <i className="ri-arrow-right-s-line d-inline-block rtl-icon-transform align-middle"></i></Link>
                                </Card.Body>
                                <div className="card-footer">
                                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <div className="avatar avatar-sm avatar-rounded me-2">
                                                <img src="../../../assets/images/faces/3.jpg" alt="" />
                                            </div>
                                            <div>
                                                <p className="mb-0 fw-medium">Athelean Blie</p>
                                                <p className="text-muted fs-11 mb-0"><i className="fe fe-calendar"></i> 25,Dec 2023 - <i className="fe fe-clock"></i> 04:25</p>
                                            </div>
                                        </div>
                                        <div className="btn-list">
                                            <Button variant="" aria-label="button" type="button" className="btn btn-icon btn-primary-light btn-sm m-1"><i className="ri-thumb-up-line"></i></Button>
                                            <Button variant="" aria-label="button" type="button" className="btn btn-icon btn-primary-light btn-sm m-1"><i className="ri-chat-2-line"></i></Button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col className="">
                            <Card className="custom-card">
                                <div className="blog-image-top">
                                    <Link href="#!" scroll={false}>
                                        <img src="../../../assets/images/media/media-29.jpg" className="w-100" alt="..." />
                                    </Link>
                                    <div className="badge fs-10 fw-semibold px-2">Travel</div>
                                </div>
                                <Card.Body>
                                    <Link href="/pages/blog/blog-details" className="fw-medium fs-14 text-dark mb-1">Bird species fill the skies..</Link>
                                    <p className="card-text text-muted mb-3">Immerse yourself in the vibrant ecosystems of the Pantanal, South America's largest tropical wetland, where caimans lurk in waterways.</p>
                                    <Link href="/pages/blog/blog-details" className="text-primary fs-14">Read More <i className="ri-arrow-right-s-line d-inline-block rtl-icon-transform align-middle"></i></Link>
                                </Card.Body>
                                <div className="card-footer">
                                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <div className="avatar avatar-sm avatar-rounded me-2">
                                                <img src="../../../assets/images/faces/16.jpg" alt="" />
                                            </div>
                                            <div>
                                                <p className="mb-0 fw-medium">Averill Ching</p>
                                                <p className="text-muted fs-11 mb-0"><i className="fe fe-calendar"></i> 25,Dec 2023 - <i className="fe fe-clock"></i> 04:25</p>
                                            </div>
                                        </div>
                                        <div className="btn-list">
                                            <Button variant="" aria-label="button" type="button" className="btn btn-icon btn-primary-light btn-sm m-1"><i className="ri-thumb-up-line"></i></Button>
                                            <Button variant="" aria-label="button" type="button" className="btn btn-icon btn-primary-light btn-sm m-1"><i className="ri-chat-2-line"></i></Button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div className="float-end mb-4">
                <Pagination className="mb-0">
                    <Pagination.Item>Prev</Pagination.Item>
                    <Pagination.Item active>1</Pagination.Item>
                    <Pagination.Item>2</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item>17</Pagination.Item>
                    <Pagination.Item>Next</Pagination.Item>
                </Pagination>
            </div>
        </Fragment>
    );
};

export default Blog;
