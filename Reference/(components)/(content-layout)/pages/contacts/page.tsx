"use client";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, Row } from "react-bootstrap";

const Contacts = () => {

    return (
        <Fragment>
            <Seo title={"Contacts"} />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card mt-4">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body>
                            <div className="contact-header">
                                <div className="d-sm-flex d-block align-items-center justify-content-between">
                                    <div className="h5 fw-medium mb-0">Contacts</div>
                                    <div className="d-flex mt-sm-0 mt-2 align-items-center">
                                        <div className="input-group">
                                            <input type="text" className="form-control border-0" placeholder="Search Contact" aria-describedby="search-contact-member" />
                                            <Button variant="" className="btn btn-primary-light" type="button" id="search-contact-member"><i className="ri-search-line text-muted"></i></Button>
                                        </div>
                                        <Dropdown className="ms-2">
                                            <Dropdown.Toggle as="a" className="btn btn-icon btn-primary-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="ti ti-dots-vertical"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu as="ul" className="">
                                                <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Delete All</Link></Dropdown.Item>
                                                <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Copy All</Link></Dropdown.Item>
                                                <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Move To</Link></Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Button variant="" className="btn btn-icon btn-secondary-light ms-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add Contact"><i className="ri-add-line"></i></Button>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={4} sm={6} className="">
                    <Card className="custom-card text-center">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="p-4">
                            <div className="d-flex mb-2">
                                <Link href="#!" scroll={false} data-bs-toggle="tooltip" data-bs-placement="top" title="Favourite" className="btn text-danger border border-light btn-sm btn-icon"><i className="ri-heart-3-fill"></i></Link>
                                <Dropdown className="ms-auto">
                                    <Dropdown.Toggle as="a" href="#!" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-light btn-icon btn-sm no-caret"><i className="ri-more-2-fill"></i></Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="avatar avatar-xl rounded-2 mb-3">
                                <img src="../../assets/images/faces/4.jpg" alt="" className="img-thumbnail" />
                            </div>
                            <div className="mb-3">
                                <h6 className="mb-1 fw-medium">
                                    Amelia
                                </h6>
                                <p className="mb-1 text-muted contact-mail text-truncate">emiley2134@gmail.com</p>
                                <p className="fw-medium fs-11 mb-0 text-fixed-white">
                                    +1(222) 354 2345
                                </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <Button variant="" type="button" className="btn btn-sm btn-outline-primary border">
                                    <i className="ri-phone-line me-1"></i> Contact
                                </Button>
                                <Button variant="" type="button" className="btn btn-sm btn-outline-secondary border">
                                    <i className="ri-chat-1-line me-1"></i>Message
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={4} sm={6} className="">
                    <Card className="custom-card text-center">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="p-4">
                            <div className="d-flex mb-2">
                                <Link href="#!" scroll={false} data-bs-toggle="tooltip" data-bs-placement="top" title="Favourite" className="btn text-danger border border-light btn-sm btn-icon"><i className="ri-heart-3-line"></i></Link>
                                  <Dropdown className="ms-auto">
                                    <Dropdown.Toggle as="a" href="#!" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-light btn-icon btn-sm no-caret"><i className="ri-more-2-fill"></i></Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="avatar avatar-xl rounded-2 mb-3">
                                <img src="../../assets/images/faces/15.jpg" alt="" className="img-thumbnail" />
                            </div>
                            <div className="mb-3">
                                <h6 className="mb-1 fw-medium">
                                    Jackson
                                </h6>
                                <p className="mb-1 text-muted contact-mail text-truncate">Jackson111@gmail.com</p>
                                <p className="fw-medium fs-11 mb-0 text-fixed-white">
                                    +1(222) 873 8923
                                </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <Button variant="" type="button" className="btn btn-sm btn-outline-primary border">
                                    <i className="ri-phone-line me-1"></i> Contact
                                </Button>
                                <Button variant="" type="button" className="btn btn-sm btn-outline-secondary border">
                                    <i className="ri-chat-1-line me-1"></i>Message
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={4} sm={6} className="">
                    <Card className="custom-card text-center">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="p-4">
                            <div className="d-flex mb-2">
                                <Link href="#!" scroll={false} data-bs-toggle="tooltip" data-bs-placement="top" title="Favourite" className="btn text-danger border border-light btn-sm btn-icon"><i className="ri-heart-3-fill"></i></Link>
                                  <Dropdown className="ms-auto">
                                    <Dropdown.Toggle as="a" href="#!" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-light btn-icon btn-sm no-caret"><i className="ri-more-2-fill"></i></Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="avatar avatar-xl rounded-2 mb-3">
                                <img src="../../assets/images/faces/2.jpg" alt="" className="img-thumbnail" />
                            </div>
                            <div className="mb-3">
                                <h6 className="mb-1 fw-medium">
                                    Kingston
                                </h6>
                                <p className="mb-1 text-muted contact-mail text-truncate">Kingston@gmail.com</p>
                                <p className="fw-medium fs-11 mb-0 text-fixed-white">
                                    +1(222) 347 0923
                                </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <Button variant="" type="button" className="btn btn-sm btn-outline-primary border">
                                    <i className="ri-phone-line me-1"></i> Contact
                                </Button>
                                <Button variant="" type="button" className="btn btn-sm btn-outline-secondary border">
                                    <i className="ri-chat-1-line me-1"></i>Message
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={4} sm={6} className="">
                    <Card className="custom-card text-center">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="p-4">
                            <div className="d-flex mb-2">
                                <Link href="#!" scroll={false} data-bs-toggle="tooltip" data-bs-placement="top" title="Favourite" className="btn text-danger border border-light btn-sm btn-icon"><i className="ri-heart-3-line"></i></Link>
                                  <Dropdown className="ms-auto">
                                    <Dropdown.Toggle as="a" href="#!" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-light btn-icon btn-sm no-caret"><i className="ri-more-2-fill"></i></Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="avatar avatar-xl rounded-2 mb-3">
                                <img src="../../assets/images/faces/13.jpg" alt="" className="img-thumbnail" />
                            </div>
                            <div className="mb-3">
                                <h6 className="mb-1 fw-medium">
                                    Robin Keith
                                </h6>
                                <p className="mb-1 text-muted contact-mail text-truncate">Robin Keith@gmail.com</p>
                                <p className="fw-medium fs-11 mb-0 text-fixed-white">
                                    +1(222) 674 7824
                                </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <Button variant="" type="button" className="btn btn-sm btn-outline-primary border">
                                    <i className="ri-phone-line me-1"></i> Contact
                                </Button>
                                <Button variant="" type="button" className="btn btn-sm btn-outline-secondary border">
                                    <i className="ri-chat-1-line me-1"></i>Message
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={4} sm={6} className="">
                    <Card className="custom-card text-center">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className=" p-4">
                            <div className="d-flex mb-2">
                                <Link href="#!" scroll={false} data-bs-toggle="tooltip" data-bs-placement="top" title="Favourite" className="btn text-danger border border-light btn-sm btn-icon"><i className="ri-heart-3-fill"></i></Link>
                                  <Dropdown className="ms-auto">
                                    <Dropdown.Toggle as="a" href="#!" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-light btn-icon btn-sm no-caret"><i className="ri-more-2-fill"></i></Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="avatar avatar-xl rounded-2 mb-3">
                                <img src="../../assets/images/faces/9.jpg" alt="" className="img-thumbnail" />
                            </div>
                            <div className="mb-3">
                                <h6 className="mb-1 fw-medium">
                                    Sebastian
                                </h6>
                                <p className="mb-1 text-muted contact-mail text-truncate">Sebastian235@gmail.com</p>
                                <p className="fw-medium fs-11 mb-0 text-fixed-white">
                                    +1(222) 985 2893
                                </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <Button variant="" type="button" className="btn btn-sm btn-outline-primary border">
                                    <i className="ri-phone-line me-1"></i> Contact
                                </Button>
                                <Button variant="" type="button" className="btn btn-sm btn-outline-secondary border">
                                    <i className="ri-chat-1-line me-1"></i>Message
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={4} sm={6} className="">
                    <Card className="custom-card text-center">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className=" p-4">
                            <div className="d-flex mb-2">
                                <Link href="#!" scroll={false} data-bs-toggle="tooltip" data-bs-placement="top" title="Favourite" className="btn text-danger border border-light btn-sm btn-icon"><i className="ri-heart-3-line"></i></Link>
                                  <Dropdown className="ms-auto">
                                    <Dropdown.Toggle as="a" href="#!" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-light btn-icon btn-sm no-caret"><i className="ri-more-2-fill"></i></Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="avatar avatar-xl rounded-2 mb-3">
                                <img src="../../assets/images/faces/5.jpg" alt="" className="img-thumbnail" />
                            </div>
                            <div className="mb-3">
                                <h6 className="mb-1 fw-medium">
                                    Juliana
                                </h6>
                                <p className="mb-1 text-muted contact-mail text-truncate">Juliana456@gmail.com</p>
                                <p className="fw-medium fs-11 mb-0 text-fixed-white">
                                    +1(222) 675 4680
                                </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <Button variant="" type="button" className="btn btn-sm btn-outline-primary border">
                                    <i className="ri-phone-line me-1"></i> Contact
                                </Button>
                                <Button variant="" type="button" className="btn btn-sm btn-outline-secondary border">
                                    <i className="ri-chat-1-line me-1"></i>Message
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={4} sm={6} className="">
                    <Card className="custom-card text-center">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className=" p-4">
                            <div className="d-flex mb-2">
                                <Link href="#!" scroll={false} data-bs-toggle="tooltip" data-bs-placement="top" title="Favourite" className="btn text-danger border border-light btn-sm btn-icon"><i className="ri-heart-3-line"></i></Link>
                                  <Dropdown className="ms-auto">
                                    <Dropdown.Toggle as="a" href="#!" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-light btn-icon btn-sm no-caret"><i className="ri-more-2-fill"></i></Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="avatar avatar-xl rounded-2 mb-3">
                                <img src="../../assets/images/faces/10.jpg" alt="" className="img-thumbnail" />
                            </div>
                            <div className="mb-3">
                                <h6 className="mb-1 fw-medium">
                                    Clark
                                </h6>
                                <p className="mb-1 text-muted contact-mail text-truncate">Clark00@gmail.com</p>
                                <p className="fw-medium fs-11 mb-0 text-fixed-white">
                                    +1(222) 765 8937
                                </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <Button variant="" type="button" className="btn btn-sm btn-outline-primary border">
                                    <i className="ri-phone-line me-1"></i> Contact
                                </Button>
                                <Button variant="" type="button" className="btn btn-sm btn-outline-secondary border">
                                    <i className="ri-chat-1-line me-1"></i>Message
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={4} sm={6} className="">
                    <Card className="custom-card text-center">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className=" p-4">
                            <div className="d-flex mb-2">
                                <Link href="#!" scroll={false} data-bs-toggle="tooltip" data-bs-placement="top" title="Favourite" className="btn text-danger border border-light btn-sm btn-icon"><i className="ri-heart-3-fill"></i></Link>
                                  <Dropdown className="ms-auto">
                                    <Dropdown.Toggle as="a" href="#!" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-light btn-icon btn-sm no-caret"><i className="ri-more-2-fill"></i></Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="avatar avatar-xl rounded-2 mb-3">
                                <img src="../../assets/images/faces/21.jpg" alt="" className="img-thumbnail" />
                            </div>
                            <div className="mb-3">
                                <h6 className="mb-1 fw-medium">
                                    Stella
                                </h6>
                                <p className="mb-1 text-muted contact-mail text-truncate">Stella@gmail.com</p>
                                <p className="fw-medium fs-11 mb-0 text-fixed-white">
                                    +1(222) 890 5687
                                </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <Button variant="" type="button" className="btn btn-sm btn-outline-primary border">
                                    <i className="ri-phone-line me-1"></i> Contact
                                </Button>
                                <Button variant="" type="button" className="btn btn-sm btn-outline-secondary border">
                                    <i className="ri-chat-1-line me-1"></i>Message
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={4} sm={6} className="">
                    <Card className="custom-card text-center">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className=" p-4">
                            <div className="d-flex mb-2">
                                <Link href="#!" scroll={false} data-bs-toggle="tooltip" data-bs-placement="top" title="Favourite" className="btn text-danger border border-light btn-sm btn-icon"><i className="ri-heart-3-line"></i></Link>
                                  <Dropdown className="ms-auto">
                                    <Dropdown.Toggle as="a" href="#!" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-light btn-icon btn-sm no-caret"><i className="ri-more-2-fill"></i></Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="avatar avatar-xl rounded-2 mb-3">
                                <img src="../../assets/images/faces/11.jpg" alt="" className="img-thumbnail" />
                            </div>
                            <div className="mb-3">
                                <h6 className="mb-1 fw-medium">
                                    Angela
                                </h6>
                                <p className="mb-1 text-muted contact-mail text-truncate">Angela@gmail.com</p>
                                <p className="fw-medium fs-11 mb-0 text-fixed-white">
                                    +1(222) 972 9883
                                </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <Button variant="" type="button" className="btn btn-sm btn-outline-primary border">
                                    <i className="ri-phone-line me-1"></i> Contact
                                </Button>
                                <Button variant="" type="button" className="btn btn-sm btn-outline-secondary border">
                                    <i className="ri-chat-1-line me-1"></i>Message
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={4} sm={6} className="">
                    <Card className="custom-card text-center">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className=" p-4">
                            <div className="d-flex mb-2">
                                <Link href="#!" scroll={false} data-bs-toggle="tooltip" data-bs-placement="top" title="Favourite" className="btn text-danger border border-light btn-sm btn-icon"><i className="ri-heart-3-fill"></i></Link>
                                  <Dropdown className="ms-auto">
                                    <Dropdown.Toggle as="a" href="#!" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-light btn-icon btn-sm no-caret"><i className="ri-more-2-fill"></i></Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="avatar avatar-xl rounded-2 mb-3">
                                <img src="../../assets/images/media/media-63.jpg" alt="" className="img-thumbnail" />
                            </div>
                            <div className="mb-3">
                                <h6 className="mb-1 fw-medium">
                                    Anthony
                                </h6>
                                <p className="mb-1 text-muted contact-mail text-truncate">Anthony65@gmail.com</p>
                                <p className="fw-medium fs-11 mb-0 text-fixed-white">
                                    +1(222) 693 7836
                                </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <Button variant="" type="button" className="btn btn-sm btn-outline-primary border">
                                    <i className="ri-phone-line me-1"></i> Contact
                                </Button>
                                <Button variant="" type="button" className="btn btn-sm btn-outline-secondary border">
                                    <i className="ri-chat-1-line me-1"></i>Message
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={4} sm={6} className="">
                    <Card className="custom-card text-center">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className=" p-4">
                            <div className="d-flex mb-2">
                                <Link href="#!" scroll={false} data-bs-toggle="tooltip" data-bs-placement="top" title="Favourite" className="btn text-danger border border-light btn-sm btn-icon"><i className="ri-heart-3-fill"></i></Link>
                                  <Dropdown className="ms-auto">
                                    <Dropdown.Toggle as="a" href="#!" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-light btn-icon btn-sm no-caret"><i className="ri-more-2-fill"></i></Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="avatar avatar-xl rounded-1 bg-primary-transparent mb-3">
                                EV
                            </div>
                            <div className="mb-3">
                                <h6 className="mb-1 fw-medium">
                                    Evelyn
                                </h6>
                                <p className="mb-1 text-muted contact-mail text-truncate">Evelyn@gmail.com</p>
                                <p className="fw-medium fs-11 mb-0 text-fixed-white">
                                    +1(222) 238 2342
                                </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <Button variant="" type="button" className="btn btn-sm btn-outline-primary border">
                                    <i className="ri-phone-line me-1"></i> Contact
                                </Button>
                                <Button variant="" type="button" className="btn btn-sm btn-outline-secondary border">
                                    <i className="ri-chat-1-line me-1"></i>Message
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={4} sm={6} className="">
                    <Card className="custom-card text-center">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className=" p-4">
                            <div className="d-flex mb-2">
                                <Link href="#!" scroll={false} data-bs-toggle="tooltip" data-bs-placement="top" title="Favourite" className="btn text-danger border border-light btn-sm btn-icon"><i className="ri-heart-3-fill"></i></Link>
                                  <Dropdown className="ms-auto">
                                    <Dropdown.Toggle as="a" href="#!" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-light btn-icon btn-sm no-caret"><i className="ri-more-2-fill"></i></Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="avatar avatar-xl rounded-2 mb-3">
                                <img src="../../assets/images/faces/12.jpg" alt="" className="img-thumbnail" />
                            </div>
                            <div className="mb-3">
                                <h6 className="mb-1 fw-medium">
                                    Benjamin
                                </h6>
                                <p className="mb-1 text-muted contact-mail text-truncate">Benjamin96@gmail.com</p>
                                <p className="fw-medium fs-11 mb-0 text-fixed-white">
                                    +1(222) 875 6789
                                </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <Button variant="" type="button" className="btn btn-sm btn-outline-primary border">
                                    <i className="ri-phone-line me-1"></i> Contact
                                </Button>
                                <Button variant="" type="button" className="btn btn-sm btn-outline-secondary border">
                                    <i className="ri-chat-1-line me-1"></i>Message
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={4} sm={6} className="">
                    <Card className="custom-card text-center">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className=" p-4">
                            <div className="d-flex mb-2">
                                <Link href="#!" scroll={false} data-bs-toggle="tooltip" data-bs-placement="top" title="Favourite" className="btn text-danger border border-light btn-sm btn-icon"><i className="ri-heart-3-line"></i></Link>
                                  <Dropdown className="ms-auto">
                                    <Dropdown.Toggle as="a" href="#!" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-light btn-icon btn-sm no-caret"><i className="ri-more-2-fill"></i></Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="avatar avatar-xl rounded-2 mb-3">
                                <img src="../../assets/images/faces/1.jpg" alt="" className="img-thumbnail" />
                            </div>
                            <div className="mb-3">
                                <h6 className="mb-1 fw-medium">
                                    Isabella
                                </h6>
                                <p className="mb-1 text-muted contact-mail text-truncate">Isabella@gmail.com</p>
                                <p className="fw-medium fs-11 mb-0 text-fixed-white">
                                    +1(222) 568 9234
                                </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <Button variant="" type="button" className="btn btn-sm btn-outline-primary border">
                                    <i className="ri-phone-line me-1"></i> Contact
                                </Button>
                                <Button variant="" type="button" className="btn btn-sm btn-outline-secondary border">
                                    <i className="ri-chat-1-line me-1"></i>Message
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={4} sm={6} className="">
                    <Card className="custom-card text-center">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className=" p-4">
                            <div className="d-flex mb-2">
                                <Link href="#!" scroll={false} data-bs-toggle="tooltip" data-bs-placement="top" title="Favourite" className="btn text-danger border border-light btn-sm btn-icon"><i className="ri-heart-3-fill"></i></Link>
                                  <Dropdown className="ms-auto">
                                    <Dropdown.Toggle as="a" href="#!" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-light btn-icon btn-sm no-caret"><i className="ri-more-2-fill"></i></Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="avatar avatar-xl rounded-2 mb-3">
                                <img src="../../assets/images/media/media-13.jpg" alt="" className="img-thumbnail" />
                            </div>
                            <div className="mb-3">
                                <h6 className="mb-1 fw-medium">
                                    Ronald Hanns
                                </h6>
                                <p className="mb-1 text-muted contact-mail text-truncate">tomholland98@gmail.com</p>
                                <p className="fw-medium fs-11 mb-0 text-fixed-white">
                                    +1(222) 892 4334
                                </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <Button variant="" type="button" className="btn btn-sm btn-outline-primary border">
                                    <i className="ri-phone-line me-1"></i> Contact
                                </Button>
                                <Button variant="" type="button" className="btn btn-sm btn-outline-secondary border">
                                    <i className="ri-chat-1-line me-1"></i>Message
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={4} sm={6} className="">
                    <Card className="custom-card text-center">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className=" p-4">
                            <div className="d-flex mb-2">
                                <Link href="#!" scroll={false} data-bs-toggle="tooltip" data-bs-placement="top" title="Favourite" className="btn text-danger border border-light btn-sm btn-icon"><i className="ri-heart-3-line"></i></Link>
                                  <Dropdown className="ms-auto">
                                    <Dropdown.Toggle as="a" href="#!" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-light btn-icon btn-sm no-caret"><i className="ri-more-2-fill"></i></Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="avatar avatar-xl rounded-2 mb-3">
                                <img src="../../assets/images/media/media-36.jpg" alt="" className="img-thumbnail" />
                            </div>
                            <div className="mb-3">
                                <h6 className="mb-1 fw-medium">
                                    Miller
                                </h6>
                                <p className="mb-1 text-muted contact-mail text-truncate">Miller@gmail.com</p>
                                <p className="fw-medium fs-11 mb-0 text-fixed-white">
                                    +1(222) 882 3445
                                </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <Button variant="" type="button" className="btn btn-sm btn-outline-primary border">
                                    <i className="ri-phone-line me-1"></i> Contact
                                </Button>
                                <Button variant="" type="button" className="btn btn-sm btn-outline-secondary border">
                                    <i className="ri-chat-1-line me-1"></i>Message
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={4} sm={6} className="">
                    <Card className="custom-card text-center">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className=" p-4">
                            <div className="d-flex mb-2">
                                <Link href="#!" scroll={false} data-bs-toggle="tooltip" data-bs-placement="top" title="Favourite" className="btn text-danger border border-light btn-sm btn-icon"><i className="ri-heart-3-fill"></i></Link>
                                  <Dropdown className="ms-auto">
                                    <Dropdown.Toggle as="a" href="#!" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-light btn-icon btn-sm no-caret"><i className="ri-more-2-fill"></i></Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="avatar avatar-xl rounded-2 mb-3">
                                <img src="../../assets/images/faces/8.jpg" alt="" className="img-thumbnail" />
                            </div>
                            <div className="mb-3">
                                <h6 className="mb-1 fw-medium">
                                    Nitheri
                                </h6>
                                <p className="mb-1 text-muted contact-mail text-truncate">Nitheri@gmail.com</p>
                                <p className="fw-medium fs-11 mb-0 text-fixed-white">
                                    +1(222) 973 8734
                                </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <Button variant="" type="button" className="btn btn-sm btn-outline-primary border">
                                    <i className="ri-phone-line me-1"></i> Contact
                                </Button>
                                <Button variant="" type="button" className="btn btn-sm btn-outline-secondary border">
                                    <i className="ri-chat-1-line me-1"></i>Message
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={4} sm={6} className="">
                    <Card className="custom-card text-center">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className=" p-4">
                            <div className="d-flex mb-2">
                                <Link href="#!" scroll={false} data-bs-toggle="tooltip" data-bs-placement="top" title="Favourite" className="btn text-danger border border-light btn-sm btn-icon"><i className="ri-heart-3-line"></i></Link>
                                  <Dropdown className="ms-auto">
                                    <Dropdown.Toggle as="a" href="#!" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-light btn-icon btn-sm no-caret"><i className="ri-more-2-fill"></i></Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="avatar avatar-xl rounded-2 mb-3">
                                <img src="../../assets/images/faces/21.jpg" alt="" className="img-thumbnail" />
                            </div>
                            <div className="mb-3">
                                <h6 className="mb-1 fw-medium">
                                    Harry
                                </h6>
                                <p className="mb-1 text-muted contact-mail text-truncate">Harry@gmail.com</p>
                                <p className="fw-medium fs-11 mb-0 text-fixed-white">
                                    +1(222) 234 9345
                                </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <Button variant="" type="button" className="btn btn-sm btn-outline-primary border">
                                    <i className="ri-phone-line me-1"></i> Contact
                                </Button>
                                <Button variant="" type="button" className="btn btn-sm btn-outline-secondary border">
                                    <i className="ri-chat-1-line me-1"></i>Message
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={4} sm={6} className="">
                    <Card className="custom-card text-center">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className=" p-4">
                            <div className="d-flex mb-2">
                                <Link href="#!" scroll={false} data-bs-toggle="tooltip" data-bs-placement="top" title="Favourite" className="btn text-danger border border-light btn-sm btn-icon"><i className="ri-heart-3-fill"></i></Link>
                                  <Dropdown className="ms-auto">
                                    <Dropdown.Toggle as="a" href="#!" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-light btn-icon btn-sm no-caret"><i className="ri-more-2-fill"></i></Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="avatar avatar-xl rounded-2 mb-3">
                                <img src="../../assets/images/faces/14.jpg" alt="" className="img-thumbnail" />
                            </div>
                            <div className="mb-3">
                                <h6 className="mb-1 fw-medium">
                                    Michael
                                </h6>
                                <p className="mb-1 text-muted contact-mail text-truncate">Michael89@gmail.com</p>
                                <p className="fw-medium fs-11 mb-0 text-fixed-white">
                                    +1(222) 783 0213
                                </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <Button variant="" type="button" className="btn btn-sm btn-outline-primary border">
                                    <i className="ri-phone-line me-1"></i> Contact
                                </Button>
                                <Button variant="" type="button" className="btn btn-sm btn-outline-secondary border">
                                    <i className="ri-chat-1-line me-1"></i>Message
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={4} sm={6} className="">
                    <Card className="custom-card text-center">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className=" p-4">
                            <div className="d-flex mb-2">
                                <Link href="#!" scroll={false} data-bs-toggle="tooltip" data-bs-placement="top" title="Favourite" className="btn text-danger border border-light btn-sm btn-icon"><i className="ri-heart-3-line"></i></Link>
                                  <Dropdown className="ms-auto">
                                    <Dropdown.Toggle as="a" href="#!" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-light btn-icon btn-sm no-caret"><i className="ri-more-2-fill"></i></Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="avatar avatar-xl rounded-2 mb-3">
                                <img src="../../assets/images/media/media-8.jpg" alt="" className="img-thumbnail" />
                            </div>
                            <div className="mb-3">
                                <h6 className="mb-1 fw-medium">
                                    Anthony
                                </h6>
                                <p className="mb-1 text-muted contact-mail text-truncate">Anthony@gmail.com</p>
                                <p className="fw-medium fs-11 mb-0 text-fixed-white">
                                    +1(222) 234 2452
                                </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <Button variant="" type="button" className="btn btn-sm btn-outline-primary border">
                                    <i className="ri-phone-line me-1"></i> Contact
                                </Button>
                                <Button variant="" type="button" className="btn btn-sm btn-outline-secondary border">
                                    <i className="ri-chat-1-line me-1"></i>Message
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={4} sm={6} className="">
                    <Card className="custom-card text-center">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className=" p-4">
                            <div className="d-flex mb-2">
                                <Link href="#!" scroll={false} data-bs-toggle="tooltip" data-bs-placement="top" title="Favourite" className="btn text-danger border border-light btn-sm btn-icon"><i className="ri-heart-3-line"></i></Link>
                                  <Dropdown className="ms-auto">
                                    <Dropdown.Toggle as="a" href="#!" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-light btn-icon btn-sm no-caret"><i className="ri-more-2-fill"></i></Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="avatar avatar-xl rounded-2 mb-3">
                                <img src="../../assets/images/faces/7.jpg" alt="" className="img-thumbnail" />
                            </div>
                            <div className="mb-3">
                                <h6 className="mb-1 fw-medium">
                                    Lipsy
                                </h6>
                                <p className="mb-1 text-muted contact-mail text-truncate">Lipsy@gmail.com</p>
                                <p className="fw-medium fs-11 mb-0 text-fixed-white">
                                    +1(222) 890 2455
                                </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <Button variant="" type="button" className="btn btn-sm btn-outline-primary border">
                                    <i className="ri-phone-line me-1"></i> Contact
                                </Button>
                                <Button variant="" type="button" className="btn btn-sm btn-outline-secondary border">
                                    <i className="ri-chat-1-line me-1"></i>Message
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={4} sm={6} className="">
                    <Card className="custom-card text-center">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className=" p-4">
                            <div className="d-flex mb-2">
                                <Link href="#!" scroll={false} data-bs-toggle="tooltip" data-bs-placement="top" title="Favourite" className="btn text-danger border border-light btn-sm btn-icon"><i className="ri-heart-3-fill"></i></Link>
                                  <Dropdown className="ms-auto">
                                    <Dropdown.Toggle as="a" href="#!" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-light btn-icon btn-sm no-caret"><i className="ri-more-2-fill"></i></Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="avatar avatar-xl rounded-2 mb-3">
                                <img src="../../assets/images/media/media-34.jpg" alt="" className="img-thumbnail" />
                            </div>
                            <div className="mb-3">
                                <h6 className="mb-1 fw-medium">
                                    Kevin
                                </h6>
                                <p className="mb-1 text-muted contact-mail text-truncate">Kevin@gmail.com</p>
                                <p className="fw-medium fs-11 mb-0 text-fixed-white">
                                    +1(222) 982 7648
                                </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <Button variant="" type="button" className="btn btn-sm btn-outline-primary border">
                                    <i className="ri-phone-line me-1"></i> Contact
                                </Button>
                                <Button variant="" type="button" className="btn btn-sm btn-outline-secondary border">
                                    <i className="ri-chat-1-line me-1"></i>Message
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={4} sm={6} className="">
                    <Card className="custom-card text-center">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className=" p-4">
                            <div className="d-flex mb-2">
                                <Link href="#!" scroll={false} data-bs-toggle="tooltip" data-bs-placement="top" title="Favourite" className="btn text-danger border border-light btn-sm btn-icon"><i className="ri-heart-3-fill"></i></Link>
                                  <Dropdown className="ms-auto">
                                    <Dropdown.Toggle as="a" href="#!" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-light btn-icon btn-sm no-caret"><i className="ri-more-2-fill"></i></Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="avatar avatar-xl rounded-2 mb-3">
                                <img src="../../assets/images/media/media-21.jpg" alt="" className="img-thumbnail" />
                            </div>
                            <div className="mb-3">
                                <h6 className="mb-1 fw-medium">
                                    Rhea
                                </h6>
                                <p className="mb-1 text-muted contact-mail text-truncate">Rhea@gmail.com</p>
                                <p className="fw-medium fs-11 mb-0 text-fixed-white">
                                    +1(222) 002 1239
                                </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <Button variant="" type="button" className="btn btn-sm btn-outline-primary border">
                                    <i className="ri-phone-line me-1"></i> Contact
                                </Button>
                                <Button variant="" type="button" className="btn btn-sm btn-outline-secondary border">
                                    <i className="ri-chat-1-line me-1"></i>Message
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={4} sm={6} className="">
                    <Card className="custom-card text-center">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className=" p-4">
                            <div className="d-flex mb-2">
                                <Link href="#!" scroll={false} data-bs-toggle="tooltip" data-bs-placement="top" title="Favourite" className="btn text-danger border border-light btn-sm btn-icon"><i className="ri-heart-3-fill"></i></Link>
                                  <Dropdown className="ms-auto">
                                    <Dropdown.Toggle as="a" href="#!" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-light btn-icon btn-sm no-caret"><i className="ri-more-2-fill"></i></Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="avatar avatar-xl rounded-2 mb-3">
                                <img src="../../assets/images/faces/6.jpg" alt="" className="img-thumbnail" />
                            </div>
                            <div className="mb-3">
                                <h6 className="mb-1 fw-medium">
                                    Grace
                                </h6>
                                <p className="mb-1 text-muted contact-mail text-truncate">Grace@gmail.com</p>
                                <p className="fw-medium fs-11 mb-0 text-fixed-white">
                                    +1(222) 982 4834
                                </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <Button variant="" type="button" className="btn btn-sm btn-outline-primary border">
                                    <i className="ri-phone-line me-1"></i> Contact
                                </Button>
                                <Button variant="" type="button" className="btn btn-sm btn-outline-secondary border">
                                    <i className="ri-chat-1-line me-1"></i>Message
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={4} sm={6} className="">
                    <Card className="custom-card text-center">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className=" p-4">
                            <div className="d-flex mb-2">
                                <Link href="#!" scroll={false} data-bs-toggle="tooltip" data-bs-placement="top" title="Favourite" className="btn text-danger border border-light btn-sm btn-icon"><i className="ri-heart-3-fill"></i></Link>
                                  <Dropdown className="ms-auto">
                                    <Dropdown.Toggle as="a" href="#!" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-light btn-icon btn-sm no-caret"><i className="ri-more-2-fill"></i></Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="avatar avatar-xl rounded-1 bg-success-transparent mb-3">
                                SA
                            </div>
                            <div className="mb-3">
                                <h6 className="mb-1 fw-medium">
                                    Sahith
                                </h6>
                                <p className="mb-1 text-muted contact-mail text-truncate">Sahith@gmail.com</p>
                                <p className="fw-medium fs-11 mb-0 text-fixed-white">
                                    +1(222) 982 4834
                                </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <Button variant="" type="button" className="btn btn-sm btn-outline-primary border">
                                    <i className="ri-phone-line me-1"></i> Contact
                                </Button>
                                <Button variant="" type="button" className="btn btn-sm btn-outline-secondary border">
                                    <i className="ri-chat-1-line me-1"></i>Message
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-end">
                        <li className="page-item disabled"><Link className="page-link" href="#!" scroll={false}>Previous</Link></li>
                        <li className="page-item"><Link className="page-link" href="#!" scroll={false}>1</Link></li>
                        <li className="page-item"><Link className="page-link" href="#!" scroll={false}>2</Link></li>
                        <li className="page-item"><Link className="page-link" href="#!" scroll={false}>Next</Link></li>
                    </ul>
                </nav>
            </Row>
        </Fragment>

    );

};

export default Contacts;
