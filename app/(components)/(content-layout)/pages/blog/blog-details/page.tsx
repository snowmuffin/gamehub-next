"use client";
import { Latestpost, RealtedTags, Trending } from "@/shared/data/pages/blog/blogdetailsdata";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Form, InputGroup, ListGroup, Row } from "react-bootstrap";

const BlogDetails = () => {
    return (
        <Fragment>
            <Seo title={"Blog Details"} />
            <Row>
                <Col xxl={8} xl={7}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Link href="#!" scroll={false}>
                                    <img src="../../../assets/images/media/media-23.jpg" className="card-img rounded-0 blog-details-img p-3" alt="..." />
                                </Link>
                                <Card.Body className="pb-2">
                                    <div className="mt-sm-0 mb-2">
                                        <span className="badge bg-secondary fs-12">Mountain Bike</span>
                                    </div>
                                    <p className="fs-22 fw-semibold mb-1">Exploring the Great Outdoors on Two Wheels: Riding the Wild - Follow a lone cyclist through winding trails</p>
                                    <div className="d-sm-flex align-items-cneter">
                                        <div className="d-flex align-items-center flex-fill">
                                            <span className="avatar avatar-sm me-3">
                                                <img src="../../../assets/images/faces/15.jpg" alt="" />
                                            </span>
                                            <div>
                                                <p className="mb-0 fw-medium">James Lucas - <span className="fs-11 text-muted fw-normal"><i className="fe fe-calendar"></i> Tue, 25 Dec 2023 - <i className="fe fe-clock"></i>  11:45</span></p>
                                                <p className="mb-0 text-muted"></p>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Body>
                                    <h6 className="fw-medium">
                                        Facing the unknown : 'On Two Wheels to the Unknown'
                                    </h6>
                                    <p className="mb-4 text-muted">
                                        Lone cyclist sets out on a journey into the unknown, pedaling through trails that wind and meander through dense forests and open meadows. Each turn unravels a new facet of the wilderness, inviting both excitement and a sense of serene discovery.
                                        Riding the wild isn't just about the scenic beauty; it's about overcoming challenges and relishing the thrill of adventure. Our lone cyclist tackles varying terrains, from rocky ascents to exhilarating descents, providing a true test of skill and determination.
                                    </p>
                                    <p className="mb-5 text-muted">
                                        As the wheels turn, experience the enchanting soundtrack of nature—birdsong, rustling leaves, and the distant murmur of a flowing stream. Riding through the wild becomes a symphony for the senses, a harmonious blend of man and nature.
                                    </p>
                                    <div className="card custom-card bg-primary-transparent blockquote-card mb-5 shadow-none">
                                        <Link href="#!" scroll={false} className="card-anchor"></Link>
                                        <Card.Body className="px-5">
                                            <blockquote className="blockquote mb-0">
                                                <p className="fs-16 fw-medium mb-2 text-dark">"Amidst the twists and turns of life's journey, find solace in the simplicity of two wheels on untamed trails. Riding the Wild' is a testament to the thrill of the unknown, where a lone cyclist becomes a poet, writing verses.."</p>
                                                <footer className="blockquote-footer mt-2 fs-14 op-7 float-end">Someone famous as <cite title="Source Title">-Lauren Daisy</cite></footer>
                                            </blockquote>
                                        </Card.Body>
                                    </div>
                                    <p className="mb-4 text-muted">
                                        In the heart of the wilderness, find solitude and tranquility. The lone cyclist pauses at scenic spots, immersing in the peaceful embrace of nature. It's a moment of reflection and connection with the earth.The winding trails lead to breathtaking panoramic views of towering mountains. Stop with us, catch your breath, and savor the awe-inspiring scenery that stretches as far as the eye can see. It's a visual feast that rewards every pedal stroke.
                                    </p>
                                </Card.Body>
                                <Card.Body className="border-top border-block-start-dashed">
                                    <div className="d-sm-flex d-block align-items-center justify-content-between">
                                        <div className="d-flex align-items-cener">
                                            <span className="badge bg-success-transparent me-3">
                                                <i className="ri-thumb-up-line me-1 align-middle d-inline-block"></i> 32 Likes
                                            </span>
                                            <span className="badge bg-info-transparent me-3">
                                                <i className="ri-chat-4-line me-1 align-middle d-inline-block"></i> 10 Comments
                                            </span>
                                        </div>
                                        <div className="btn-list mt-sm-0 mt-2">
                                            <Button variant="" className="btn btn-sm btn-primary-light" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Like"><i className="ri-thumb-up-line"></i> Like</Button>
                                            <Button variant="" className="btn btn-sm btn-primary-light" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Share"><i className="ri-share-line"></i> Share</Button>
                                            <Button variant="" className="btn btn-sm btn-secondary-light"><i className="ri-chat-4-line me-1 align-middle d-inline-block"></i>Comment</Button>
                                        </div>
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
                                <Card.Header>
                                    <div className="card-title">
                                        Post Your Comment
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <div className="row gy-3">
                                        <div className="col-xl-6">
                                            <Form.Label htmlFor="blog-first-name" className="">First Name</Form.Label>
                                            <Form.Control type="text" className="" id="blog-first-name" placeholder="Enter Name" />
                                        </div>
                                        <div className="col-xl-6">
                                            <Form.Label htmlFor="blog-last-name" className="">Last Name</Form.Label>
                                            <Form.Control type="text" className="" id="blog-last-name" placeholder="Enter Name" />
                                        </div>
                                        <Col xl={12}>
                                            <Form.Label htmlFor="blog-email" className="">Email ID</Form.Label>
                                            <Form.Control type="text" className="" id="blog-email" placeholder="Enter Email" />
                                        </Col>
                                        <Col xl={12}>
                                            <Form.Label htmlFor="blog-comment" className="">Write Comment</Form.Label>
                                            <Form.Control as="textarea" className="" id="blog-comment" rows={5} />
                                        </Col>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="text-end">
                                        <Button variant="" className="btn btn-primary-light">Post Comment</Button>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={4} xl={5}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body className="d-flex p-4">
                                    <span className="avatar avatar-xxl mb-0 flex-shrink-0">
                                        <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                    </span>
                                    <div className=" ps-3">
                                        <p className="mb-1 fs-15 fw-medium text-dark lh-1">Angela Janet</p>
                                        <p className="text-muted mb-0 fs-13">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary combined with a handful of model sentence structures.</p>
                                    </div>
                                </Card.Body>
                                <Card.Footer className="border-top border-block-start-dashed">
                                    <div className=" d-flex gap-5">
                                        <span className="fw-medium">Mail Id:</span>
                                        <div className="btn-list flex-fill">
                                            <span className="fs-12 text-muted fw-normal">angelajanet5500@gmail.com</span>
                                        </div>
                                    </div><div className=" d-flex gap-5 mt-2">
                                        <span className="fw-medium">Follow:</span>
                                        <div className="btn-list flex-fill">
                                            <div className="btn-list">
                                                <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light">
                                                    <i className="ri-facebook-line"></i>
                                                </Button>
                                                <Button variant="" className="btn btn-sm btn-icon btn-info-light btn-wave waves-effect waves-light">
                                                    <i className="ri-twitter-x-line"></i>
                                                </Button>
                                                <Button variant="" className="btn btn-sm btn-icon btn-warning-light btn-wave waves-effect waves-light">
                                                    <i className="ri-instagram-line"></i>
                                                </Button>
                                                <Button variant="" className="btn btn-sm btn-icon btn-success-light btn-wave waves-effect waves-light">
                                                    <i className="ri-github-line"></i>
                                                </Button>
                                                <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light">
                                                    <i className="ri-youtube-line"></i>
                                                </Button>
                                            </div>
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
                                <Card.Header>
                                    <div className="card-title">
                                        Trending Categories
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <ListGroup>
                                        {Trending.map((idx) => (
                                            <li className="list-group-item" key={Math.random()}>
                                                <Link href="#!" scroll={false}>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <span className={`avatar avatar-xs bg-${idx.color}`}>
                                                                    {idx.data}
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <span className="fw-medium ms-2">{idx.heading}</span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <span className="badge bg-primary-transparent">{idx.data1}</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}

                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Header>
                                    <div className="card-title">
                                        Latest Posts
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <ListGroup>
                                        {Latestpost.map((idx) => (
                                            <ListGroup.Item className="" key={Math.random()}>
                                                <div className="d-flex align-items-start">
                                                    <span className="avatar avatar-xxl me-3 flex-shrink-0">
                                                        <img src={idx.src1} className="img-fluid" alt="..." />
                                                    </span>
                                                    <div className="flex-fill my-auto">
                                                        <Link href="#!" scroll={false} className="fs-10 fw-medium mb-2 text-primary badge bg-primary-transparent">{idx.heading}</Link>
                                                        <p className="mb-1">
                                                            There are many variations of passages...
                                                        </p>
                                                        <span className="text-muted fs-11"> <i className="fe fe-calendar"></i> {idx.date} - <i className="fe fe-clock"></i> {idx.time}</span>
                                                    </div>
                                                    <Link href="#!" scroll={false} className="ms-auto fs-12 text-decoration-underline text-primary text-end align-self-end">View</Link>
                                                </div>
                                            </ListGroup.Item>
                                        ))}
                                        <li className="list-group-item text-center">
                                            <Button variant="" className="btn btn-primary-light">Load more</Button>
                                        </li>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Header>
                                    <div className="card-title">
                                        Subscribe to Newsletter
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <div className="text-start">
                                        <h6 className="mb-3 fs-14 text-muted"> Subscribe to receive the latest blog updates</h6>
                                        <InputGroup className="mb-3">
                                            <Form.Control type="text" className="form-control" placeholder="Email Here" aria-label="blog-email" aria-describedby="blog-subscribe" />
                                            <Button variant="" className="btn btn-primary" type="button" id="blog-subscribe">Subscribe</Button>
                                        </InputGroup>
                                        <Form.Label className="form-check-label">
                                            By Subscribing you accept to <Link href="#!" scroll={false} className="text-success"><u>privacy policy</u></Link>
                                        </Form.Label>
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
                                <Card.Header>
                                    <div className="card-title">
                                        Related Tags
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <div className="blog-popular-tags">
                                        {RealtedTags.map((idx) => (
                                            <Link href="#!" scroll={false} key={Math.random()}>
                                                <span className="badge bg-primary-transparent text-muted">#{idx.data}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    );
};

export default BlogDetails;
