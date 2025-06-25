"use client";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, Nav, Pagination, Row, Tab } from "react-bootstrap";

const MarketPlace = () => {
    return (
        <Fragment>
            <Seo title={"Marcket Place"} />
            <Tab.Container defaultActiveKey="all">
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <div className="top-left"></div>
                            <div className="top-right"></div>
                            <div className="bottom-left"></div>
                            <div className="bottom-right"></div>
                            <Card.Body>
                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                    <div>
                                        <Nav className="nav-tabs nav-tabs-header mb-0" role="tablist">
                                            <Nav.Item className="nav-item" role="presentation">
                                                <Nav.Link eventKey="all" className="" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-all" aria-selected="true">All</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="nav-item" role="presentation">
                                                <Nav.Link eventKey="art" className="" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-art" aria-selected="false" tabIndex={-1}>Art</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="nav-item" role="presentation">
                                                <Nav.Link eventKey="gaming" className="" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-gaming" aria-selected="false" tabIndex={-1}>Gaming</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="nav-item" role="presentation">
                                                <Nav.Link eventKey="domain" className="" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-domain" aria-selected="false" tabIndex={-1}>Domain</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="nav-item" role="presentation">
                                                <Nav.Link eventKey="music" className="" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-music" aria-selected="false" tabIndex={-1}>Music</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="nav-item" role="presentation">
                                                <Nav.Link eventKey="realstate" className="" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-realestate" aria-selected="false" tabIndex={-1}>Real Estate</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="nav-item" role="presentation">
                                                <Nav.Link eventKey="sports" className="" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-sports" aria-selected="false" tabIndex={-1}>Sports</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="nav-item" role="presentation">
                                                <Nav.Link eventKey="fashion" className="" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-fashion" aria-selected="false" tabIndex={-1}>Fashion</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="nav-item" role="presentation">
                                                <Nav.Link eventKey="avatars" className="" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-avatars" aria-selected="false" tabIndex={-1}>Avatars</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="nav-item" role="presentation">
                                                <Nav.Link eventKey="memes" className="" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-memes" aria-selected="false" tabIndex={-1}>Memes</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                    <Dropdown className="btn-list">
                                        <Button type="button" className="btn btn-sm btn-secondary btn-wave">Filters</Button>
                                        <Dropdown.Toggle as='a' className="btn btn-sm btn-wave btn-primary waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                            Sort By
                                            <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu as='ul' role="menu">
                                            <Link className='dropdown-item' href="#!" scroll={false}>New Collection</Link>
                                            <Link className='dropdown-item' href="#!" scroll={false}>High - Low</Link>
                                            <Link className='dropdown-item' href="#!" scroll={false}>Low - High</Link>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12}>
                        <Tab.Content className="">
                            <Tab.Pane eventKey="all" className="p-0 border-0" id="nft-all" role="tabpanel">
                                <Row>
                                    <Col xxl={3} xl={4} lg={4} md={6} sm={12} className="col-12">
                                        <Card className="custom-card overflow-hidden">
                                            <div className="top-left"></div>
                                            <div className="top-right"></div>
                                            <div className="bottom-left"></div>
                                            <div className="bottom-right"></div>
                                            <img src="../../../assets/images/nft-images/2.png" className="card-img-top nft-image" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <Button variant="" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave">
                                                        <i className="ri-heart-fill"></i>
                                                    </Button>
                                                </div>
                                                <div>
                                                    <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>1.32k</span>
                                                </div>
                                            </div>
                                            <Card.Body className="nft-body">
                                                <div className="mb-0 text-fixed-white nft-auction-time">
                                                    06hrs : 38m : 53s
                                                </div>
                                                <p className="fw-medium text-fixed-white">Glowing Effects - NFT</p>
                                                <div className="d-flex flex-wrap text-fixed-white align-items-center gap-2">
                                                    <span className="avatar avatar-rounded avatar-md">
                                                        <img src="../../../assets/images/faces/10.jpg" alt="" />
                                                    </span>
                                                    <div className="">
                                                        <p className="mb-0 fw-medium">Floral NFT</p>
                                                        <p className="fs-12 op-8 mb-0">@floral200</p>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <div className="text-success fw-medium">
                                                            0.18ETH
                                                        </div>
                                                        <p className="fs-12 op-8 mb-0">Current Bid</p>
                                                    </div>
                                                </div>
                                                <div className="d-grid mt-4">
                                                    <button className="btn btn-primary btn-wave wfves-effect waves-light">Place Bid</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={3} xl={4} lg={4} md={6} sm={12} className="col-12">
                                        <Card className="custom-card overflow-hidden">
                                            <div className="top-left"></div>
                                            <div className="top-right"></div>
                                            <div className="bottom-left"></div>
                                            <div className="bottom-right"></div>
                                            <img src="../../../assets/images/nft-images/3.png" className="card-img-top nft-image" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <Button variant="" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave">
                                                        <i className="ri-heart-fill"></i>
                                                    </Button>
                                                </div>
                                                <div>
                                                    <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>1.26k</span>
                                                </div>
                                            </div>
                                            <Card.Body className="nft-body">
                                                <div className="mb-0 text-fixed-white nft-auction-time">
                                                    06hrs : 38m : 53s
                                                </div>
                                                <p className="fw-medium text-fixed-white">Space Pieces - NFT</p>
                                                <div className="d-flex flex-wrap text-fixed-white align-items-center gap-2">
                                                    <span className="avatar avatar-rounded avatar-md">
                                                        <img src="../../../assets/images/faces/5.jpg" alt="" />
                                                    </span>
                                                    <div className="">
                                                        <p className="mb-0 fw-medium">DigitalErgo NFT</p>
                                                        <p className="fs-12 op-8 mb-0">@digitalergos112</p>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <div className="text-success fw-medium">
                                                            0.34ETH
                                                        </div>
                                                        <p className="fs-12 op-8 mb-0">Current Bid</p>
                                                    </div>
                                                </div>
                                                <div className="d-grid mt-4">
                                                    <button className="btn btn-primary btn-wave wfves-effect waves-light">Place Bid</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={3} xl={4} lg={4} md={6} sm={12} className="col-12">
                                        <Card className="custom-card overflow-hidden">
                                            <div className="top-left"></div>
                                            <div className="top-right"></div>
                                            <div className="bottom-left"></div>
                                            <div className="bottom-right"></div>
                                            <img src="../../../assets/images/nft-images/5.png" className="card-img-top nft-image" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <Button variant="" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave">
                                                        <i className="ri-heart-fill"></i>
                                                    </Button>
                                                </div>
                                                <div>
                                                    <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>2.45k</span>
                                                </div>
                                            </div>
                                            <Card.Body className="nft-body">
                                                <div className="mb-0 text-fixed-white nft-auction-time">
                                                    06hrs : 38m : 53s
                                                </div>
                                                <p className="fw-medium text-fixed-white">Ninja Abstracts - NFT</p>
                                                <div className="d-flex flex-wrap text-fixed-white align-items-center gap-2">
                                                    <span className="avatar avatar-rounded avatar-md">
                                                        <img src="../../../assets/images/faces/12.jpg" alt="" />
                                                    </span>
                                                    <div className="">
                                                        <p className="mb-0 fw-medium">CarosArt NFT</p>
                                                        <p className="fs-12 op-8 mb-0">@carosart11</p>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <div className="text-success fw-medium">
                                                            0.14ETH
                                                        </div>
                                                        <p className="fs-12 op-8 mb-0">Current Bid</p>
                                                    </div>
                                                </div>
                                                <div className="d-grid mt-4">
                                                    <button className="btn btn-primary btn-wave wfves-effect waves-light">Place Bid</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={3} xl={4} lg={4} md={6} sm={12} className="col-12">
                                        <Card className="custom-card overflow-hidden">
                                            <div className="top-left"></div>
                                            <div className="top-right"></div>
                                            <div className="bottom-left"></div>
                                            <div className="bottom-right"></div>
                                            <img src="../../../assets/images/nft-images/4.png" className="card-img-top nft-image" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <Button variant="" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave">
                                                        <i className="ri-heart-fill"></i>
                                                    </Button>
                                                </div>
                                                <div>
                                                    <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>1.32k</span>
                                                </div>
                                            </div>
                                            <Card.Body className="nft-body">
                                                <div className="mb-0 text-fixed-white nft-auction-time">
                                                    06hrs : 38m : 53s
                                                </div>
                                                <p className="fw-medium text-fixed-white">Glowing Effects - NFT</p>
                                                <div className="d-flex flex-wrap text-fixed-white align-items-center gap-2">
                                                    <span className="avatar avatar-rounded avatar-md">
                                                        <img src="../../../assets/images/faces/6.jpg" alt="" />
                                                    </span>
                                                    <div className="">
                                                        <p className="mb-0 fw-medium">ElieToken NFT</p>
                                                        <p className="fs-12 op-8 mb-0">@elie0241</p>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <div className="text-success fw-medium">
                                                            0.44
                                                            ETH
                                                        </div>
                                                        <p className="fs-12 op-8 mb-0">Current Bid</p>
                                                    </div>
                                                </div>
                                                <div className="d-grid mt-4">
                                                    <Button variant="" className="btn btn-primary btn-wave wfves-effect waves-light">Place Bid</Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={3} xl={4} lg={4} md={6} sm={12} className="col-12">
                                        <Card className="custom-card overflow-hidden">
                                            <div className="top-left"></div>
                                            <div className="top-right"></div>
                                            <div className="bottom-left"></div>
                                            <div className="bottom-right"></div>
                                            <img src="../../../assets/images/nft-images/9.png" className="card-img-top nft-image" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <Button variant="" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave">
                                                        <i className="ri-heart-fill"></i>
                                                    </Button>
                                                </div>
                                                <div>
                                                    <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>1.26k</span>
                                                </div>
                                            </div>
                                            <Card.Body className="nft-body">
                                                <div className="mb-0 text-fixed-white nft-auction-time">
                                                    06hrs : 38m : 53s
                                                </div>
                                                <p className="fw-medium text-fixed-white">Space Pieces - NFT</p>
                                                <div className="d-flex flex-wrap text-fixed-white align-items-center gap-2">
                                                    <span className="avatar avatar-rounded avatar-md">
                                                        <img src="../../../assets/images/faces/13.jpg" alt="" />
                                                    </span>
                                                    <div className="">
                                                        <p className="mb-0 fw-medium">CarosArt NFT</p>
                                                        <p className="fs-12 op-8 mb-0">@carosart11</p>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <div className="text-success fw-medium">
                                                            2.24ETH
                                                        </div>
                                                        <p className="fs-12 op-8 mb-0">Current Bid</p>
                                                    </div>
                                                </div>
                                                <div className="d-grid mt-4">
                                                    <Button variant="" className="btn btn-primary btn-wave wfves-effect waves-light">Place Bid</Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={3} xl={4} lg={4} md={6} sm={12} className="col-12">
                                        <Card className="custom-card overflow-hidden">
                                            <div className="top-left"></div>
                                            <div className="top-right"></div>
                                            <div className="bottom-left"></div>
                                            <div className="bottom-right"></div>
                                            <img src="../../../assets/images/nft-images/29.png" className="card-img-top nft-image" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <Button variant="" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave">
                                                        <i className="ri-heart-fill"></i>
                                                    </Button>
                                                </div>
                                                <div>
                                                    <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>2.45k</span>
                                                </div>
                                            </div>
                                            <Card.Body className="nft-body">
                                                <div className="mb-0 text-fixed-white nft-auction-time">
                                                    06hrs : 38m : 53s
                                                </div>
                                                <p className="fw-medium text-fixed-white">Ninja Abstracts - NFT</p>
                                                <div className="d-flex flex-wrap text-fixed-white align-items-center gap-2">
                                                    <span className="avatar avatar-rounded avatar-md">
                                                        <img src="../../../assets/images/faces/7.jpg" alt="" />
                                                    </span>
                                                    <div className="">
                                                        <p className="mb-0 fw-medium">Rich NFT</p>
                                                        <p className="fs-12 op-8 mb-0">@rich4554</p>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <div className="text-success fw-medium">
                                                            0.18ETH
                                                        </div>
                                                        <p className="fs-12 op-8 mb-0">Current Bid</p>
                                                    </div>
                                                </div>
                                                <div className="d-grid mt-4">
                                                    <button className="btn btn-primary btn-wave wfves-effect waves-light">Place Bid</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={3} xl={4} lg={4} md={6} sm={12} className="col-12">
                                        <Card className="custom-card overflow-hidden">
                                            <div className="top-left"></div>
                                            <div className="top-right"></div>
                                            <div className="bottom-left"></div>
                                            <div className="bottom-right"></div>
                                            <img src="../../../assets/images/nft-images/11.png" className="card-img-top nft-image" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <Button variant="" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave">
                                                        <i className="ri-heart-fill"></i>
                                                    </Button>
                                                </div>
                                                <div>
                                                    <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>1.26k</span>
                                                </div>
                                            </div>
                                            <Card.Body className="nft-body">
                                                <div className="mb-0 text-fixed-white nft-auction-time">
                                                    06hrs : 38m : 53s
                                                </div>
                                                <p className="fw-medium text-fixed-white">Flower Maker - NFT</p>
                                                <div className="d-flex flex-wrap text-fixed-white align-items-center gap-2">
                                                    <span className="avatar avatar-rounded avatar-md">
                                                        <img src="../../../assets/images/faces/13.jpg" alt="" />
                                                    </span>
                                                    <div className="">
                                                        <p className="mb-0 fw-medium">CanvasExplorer</p>
                                                        <p className="fs-12 op-8 mb-0">@canvasexplorer01</p>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <div className="text-success fw-medium">
                                                            0.08ETH
                                                        </div>
                                                        <p className="fs-12 op-8 mb-0">Current Bid</p>
                                                    </div>
                                                </div>
                                                <div className="d-grid mt-4">
                                                    <Button variant="" className="btn btn-primary btn-wave wfves-effect waves-light">Place Bid</Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={3} xl={4} lg={4} md={6} sm={12} className="col-12">
                                        <Card className="custom-card overflow-hidden">
                                            <div className="top-left"></div>
                                            <div className="top-right"></div>
                                            <div className="bottom-left"></div>
                                            <div className="bottom-right"></div>
                                            <img src="../../../assets/images/nft-images/12.png" className="card-img-top nft-image" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <Button variant="" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave">
                                                        <i className="ri-heart-fill"></i>
                                                    </Button>
                                                </div>
                                                <div>
                                                    <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>2.45k</span>
                                                </div>
                                            </div>
                                            <Card.Body className="nft-body">
                                                <div className="mb-0 text-fixed-white nft-auction-time">
                                                    06hrs : 38m : 53s
                                                </div>
                                                <p className="fw-medium text-fixed-white">Ninja Abstracts - NFT</p>
                                                <div className="d-flex flex-wrap text-fixed-white align-items-center gap-2">
                                                    <span className="avatar avatar-rounded avatar-md">
                                                        <img src="../../../assets/images/faces/8.jpg" alt="" />
                                                    </span>
                                                    <div className="">
                                                        <p className="mb-0 fw-medium">Hanns NFT</p>
                                                        <p className="fs-12 op-8 mb-0">@hanns546</p>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <div className="text-success fw-medium">
                                                            0.14ETH
                                                        </div>
                                                        <p className="fs-12 op-8 mb-0">Current Bid</p>
                                                    </div>
                                                </div>
                                                <div className="d-grid mt-4">
                                                    <button className="btn btn-primary btn-wave wfves-effect waves-light">Place Bid</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Nav aria-label="Page navigation">
                                        <Pagination className="pagination justify-content-end">
                                            <Pagination.Item className=" disabled">
                                                Previous
                                            </Pagination.Item>
                                            <Pagination.Item className="">1</Pagination.Item>
                                            <Pagination.Item className="">2</Pagination.Item>
                                            <Pagination.Item className="">3</Pagination.Item>
                                            <Pagination.Item className="">
                                                Next
                                            </Pagination.Item>
                                        </Pagination>
                                    </Nav>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="art" className="p-0 border-0" id="nft-art" role="tabpanel">
                                <Row>
                                    <Col xxl={3} xl={4} lg={4} md={6} sm={12} className="col-12">
                                        <Card className="custom-card overflow-hidden">
                                            <div className="top-left"></div>
                                            <div className="top-right"></div>
                                            <div className="bottom-left"></div>
                                            <div className="bottom-right"></div>
                                            <img src="../../../assets/images/nft-images/10.png" className="card-img-top nft-image" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <Button variant="" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave">
                                                        <i className="ri-heart-fill"></i>
                                                    </Button>
                                                </div>
                                                <div>
                                                    <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>1.32k</span>
                                                </div>
                                            </div>
                                            <Card.Body className="nft-body">
                                                <div className="mb-0 text-fixed-white nft-auction-time">
                                                    06hrs : 38m : 53s
                                                </div>
                                                <p className="fw-medium text-fixed-white">Glowing Effects - NFT</p>
                                                <div className="d-flex flex-wrap text-fixed-white align-items-center gap-2">
                                                    <span className="avatar avatar-rounded avatar-md">
                                                        <img src="../../../assets/images/faces/14.jpg" alt="" />
                                                    </span>
                                                    <div className="">
                                                        <p className="mb-0 fw-medium">Floral NFT</p>
                                                        <p className="fs-12 op-8 mb-0">@bloom002</p>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <div className="text-success fw-medium">
                                                            0.18ETH
                                                        </div>
                                                        <p className="fs-12 op-8 mb-0">Current Bid</p>
                                                    </div>
                                                </div>
                                                <div className="d-grid mt-4">
                                                    <Button variant="" className="btn btn-primary btn-wave wfves-effect waves-light">Place Bid</Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={3} xl={4} lg={4} md={6} sm={12} className="col-12">
                                        <Card className="custom-card overflow-hidden">
                                            <div className="top-left"></div>
                                            <div className="top-right"></div>
                                            <div className="bottom-left"></div>
                                            <div className="bottom-right"></div>
                                            <img src="../../../assets/images/nft-images/13.png" className="card-img-top nft-image" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <Button variant="" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave">
                                                        <i className="ri-heart-fill"></i>
                                                    </Button>
                                                </div>
                                                <div>
                                                    <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>1.26k</span>
                                                </div>
                                            </div>
                                            <Card.Body className="nft-body">
                                                <div className="mb-0 text-fixed-white nft-auction-time">
                                                    06hrs : 38m : 53s
                                                </div>
                                                <p className="fw-medium text-fixed-white">Space Abstract - NFT</p>
                                                <div className="d-flex flex-wrap text-fixed-white align-items-center gap-2">
                                                    <span className="avatar avatar-rounded avatar-md">
                                                        <img src="../../../assets/images/faces/9.jpg" alt="" />
                                                    </span>
                                                    <div className="">
                                                        <p className="mb-0 fw-medium">Goe NFT</p>
                                                        <p className="fs-12 op-8 mb-0">@goe215</p>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <div className="text-success fw-medium">
                                                            0.18ETH
                                                        </div>
                                                        <p className="fs-12 op-8 mb-0">Current Bid</p>
                                                    </div>
                                                </div>
                                                <div className="d-grid mt-4">
                                                    <button className="btn btn-primary btn-wave wfves-effect waves-light">Place Bid</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={3} xl={4} lg={4} md={6} sm={12} className="col-12">
                                        <Card className="custom-card overflow-hidden">
                                            <div className="top-left"></div>
                                            <div className="top-right"></div>
                                            <div className="bottom-left"></div>
                                            <div className="bottom-right"></div>
                                            <img src="../../../assets/images/nft-images/14.png" className="card-img-top nft-image" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <Button variant="" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave">
                                                        <i className="ri-heart-fill"></i>
                                                    </Button>
                                                </div>
                                                <div>
                                                    <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>2.45k</span>
                                                </div>
                                            </div>
                                            <Card.Body className="nft-body">
                                                <div className="mb-0 text-fixed-white nft-auction-time">
                                                    06hrs : 38m : 53s
                                                </div>
                                                <p className="fw-medium text-fixed-white">Ninja Abstracts - NFT</p>
                                                <div className="d-flex flex-wrap text-fixed-white align-items-center gap-2">
                                                    <span className="avatar avatar-rounded avatar-md">
                                                        <img src="../../../assets/images/faces/15.jpg" alt="" />
                                                    </span>
                                                    <div className="">
                                                        <p className="mb-0 fw-medium">CarosArt NFT</p>
                                                        <p className="fs-12 op-8 mb-0">@carosart11</p>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <div className="text-success fw-medium">
                                                            0.14ETH
                                                        </div>
                                                        <p className="fs-12 op-8 mb-0">Current Bid</p>
                                                    </div>
                                                </div>
                                                <div className="d-grid mt-4">
                                                    <button className="btn btn-primary btn-wave wfves-effect waves-light">Place Bid</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="gaming" className="p-0 border-0" id="nft-gaming" role="tabpanel">
                                <Row>
                                    <Col xxl={3} xl={4} lg={4} md={6} sm={12} className="col-12">
                                        <Card className="custom-card overflow-hidden">
                                            <div className="top-left"></div>
                                            <div className="top-right"></div>
                                            <div className="bottom-left"></div>
                                            <div className="bottom-right"></div>
                                            <img src="../../../assets/images/nft-images/10.png" className="card-img-top nft-image" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <Button variant="" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave">
                                                        <i className="ri-heart-fill"></i>
                                                    </Button>
                                                </div>
                                                <div>
                                                    <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>1.32k</span>
                                                </div>
                                            </div>
                                            <Card.Body className="nft-body">
                                                <div className="mb-0 text-fixed-white nft-auction-time">
                                                    06hrs : 38m : 53s
                                                </div>
                                                <p className="fw-medium text-fixed-white">Glowing Effects - NFT</p>
                                                <div className="d-flex flex-wrap text-fixed-white align-items-center gap-2">
                                                    <span className="avatar avatar-rounded avatar-md">
                                                        <img src="../../../assets/images/faces/3.jpg" alt="" />
                                                    </span>
                                                    <div className="">
                                                        <p className="mb-0 fw-medium">Floral NFT</p>
                                                        <p className="fs-12 op-8 mb-0">@bloom156</p>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <div className="text-success fw-medium">
                                                            0.63ETH
                                                        </div>
                                                        <p className="fs-12 op-8 mb-0">Current Bid</p>
                                                    </div>
                                                </div>
                                                <div className="d-grid mt-4">
                                                    <Button variant="" className="btn btn-primary btn-wave wfves-effect waves-light">Place Bid</Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={3} xl={4} lg={4} md={6} sm={12} className="col-12">
                                        <Card className="custom-card overflow-hidden">
                                            <div className="top-left"></div>
                                            <div className="top-right"></div>
                                            <div className="bottom-left"></div>
                                            <div className="bottom-right"></div>
                                            <img src="../../../assets/images/nft-images/13.png" className="card-img-top nft-image" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <Button variant="" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave">
                                                        <i className="ri-heart-fill"></i>
                                                    </Button>
                                                </div>
                                                <div>
                                                    <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>1.26k</span>
                                                </div>
                                            </div>
                                            <Card.Body className="nft-body">
                                                <div className="mb-0 text-fixed-white nft-auction-time">
                                                    06hrs : 38m : 53s
                                                </div>
                                                <p className="fw-medium text-fixed-white">Space Pieces - NFT</p>
                                                <div className="d-flex flex-wrap text-fixed-white align-items-center gap-2">
                                                    <span className="avatar avatar-rounded avatar-md">
                                                        <img src="../../../assets/images/faces/16.jpg" alt="" />
                                                    </span>
                                                    <div className="">
                                                        <p className="mb-0 fw-medium">DigitalErgo NFT</p>
                                                        <p className="fs-12 op-8 mb-0">@Ergos002</p>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <div className="text-success fw-medium">
                                                            0.26ETH
                                                        </div>
                                                        <p className="fs-12 op-8 mb-0">Current Bid</p>
                                                    </div>
                                                </div>
                                                <div className="d-grid mt-4">
                                                    <button className="btn btn-primary btn-wave wfves-effect waves-light">Place Bid</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="domain" className="p-0 border-0" id="nft-domain" role="tabpanel">
                                <Row>
                                    <Col xxl={3} xl={4} lg={4} md={6} sm={12} className="col-12">
                                        <Card className="custom-card overflow-hidden">
                                            <div className="top-left"></div>
                                            <div className="top-right"></div>
                                            <div className="bottom-left"></div>
                                            <div className="bottom-right"></div>
                                            <img src="../../../assets/images/nft-images/13.png" className="card-img-top nft-image" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <Button variant="" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave">
                                                        <i className="ri-heart-fill"></i>
                                                    </Button>
                                                </div>
                                                <div>
                                                    <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>1.26k</span>
                                                </div>
                                            </div>
                                            <Card.Body className="nft-body">
                                                <div className="mb-0 text-fixed-white nft-auction-time">
                                                    06hrs : 38m : 53s
                                                </div>
                                                <p className="fw-medium text-fixed-white">Space Pieces - NFT</p>
                                                <div className="d-flex flex-wrap text-fixed-white align-items-center gap-2">
                                                    <span className="avatar avatar-rounded avatar-md">
                                                        <img src="../../../assets/images/faces/2.jpg" alt="" />
                                                    </span>
                                                    <div className="">
                                                        <p className="mb-0 fw-medium">CarosArt NFT</p>
                                                        <p className="fs-12 op-8 mb-0">@carosart11</p>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <div className="text-success fw-medium">
                                                            0.14ETH
                                                        </div>
                                                        <p className="fs-12 op-8 mb-0">Current Bid</p>
                                                    </div>
                                                </div>
                                                <div className="d-grid mt-4">
                                                    <Button variant="" className="btn btn-primary btn-wave wfves-effect waves-light">Place Bid</Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="music" className="p-0 border-0" id="nft-music" role="tabpanel">
                                <Row>
                                    <Col xxl={3} xl={4} lg={4} md={6} sm={12} className="col-12">
                                        <Card className="custom-card overflow-hidden">
                                            <div className="top-left"></div>
                                            <div className="top-right"></div>
                                            <div className="bottom-left"></div>
                                            <div className="bottom-right"></div>
                                            <img src="../../../assets/images/nft-images/13.png" className="card-img-top nft-image" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <Button variant="" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave">
                                                        <i className="ri-heart-fill"></i>
                                                    </Button>
                                                </div>
                                                <div>
                                                    <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>1.26k</span>
                                                </div>
                                            </div>
                                            <Card.Body className="nft-body">
                                                <div className="mb-0 text-fixed-white nft-auction-time">
                                                    06hrs : 38m : 53s
                                                </div>
                                                <p className="fw-medium text-fixed-white">Space Pieces- NFT</p>
                                                <div className="d-flex flex-wrap text-fixed-white align-items-center gap-2">
                                                    <span className="avatar avatar-rounded avatar-md">
                                                        <img src="../../../assets/images/faces/11.jpg" alt="" />
                                                    </span>
                                                    <div className="">
                                                        <p className="mb-0 fw-medium">DigitalErgo NFT</p>
                                                        <p className="fs-12 op-8 mb-0">@ergos032</p>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <div className="text-success fw-medium">
                                                            1.45ETH
                                                        </div>
                                                        <p className="fs-12 op-8 mb-0">Current Bid</p>
                                                    </div>
                                                </div>
                                                <div className="d-grid mt-4">
                                                    <button className="btn btn-primary btn-wave wfves-effect waves-light">Place Bid</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="realstate" className="p-0 border-0" id="nft-realestate" role="tabpanel">
                                <Row>
                                    <Col xxl={3} xl={4} lg={4} md={6} sm={12} className="col-12">
                                        <Card className="custom-card overflow-hidden">
                                            <div className="top-left"></div>
                                            <div className="top-right"></div>
                                            <div className="bottom-left"></div>
                                            <div className="bottom-right"></div>
                                            <img src="../../../assets/images/nft-images/13.png" className="card-img-top nft-image" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <Button variant="" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave">
                                                        <i className="ri-heart-fill"></i>
                                                    </Button>
                                                </div>
                                                <div>
                                                    <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>1.26k</span>
                                                </div>
                                            </div>
                                            <Card.Body className="nft-body">
                                                <div className="mb-0 text-fixed-white nft-auction-time">
                                                    06hrs : 38m : 53s
                                                </div>
                                                <p className="fw-medium text-fixed-white">Space Pieces - NFT</p>
                                                <div className="d-flex flex-wrap text-fixed-white align-items-center gap-2">
                                                    <span className="avatar avatar-rounded avatar-md">
                                                        <img src="../../../assets/images/faces/4.jpg" alt="" />
                                                    </span>
                                                    <div className="">
                                                        <p className="mb-0 fw-medium">DigitalErgo NFT</p>
                                                        <p className="fs-12 op-8 mb-0">@ergos052</p>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <div className="text-success fw-medium">
                                                            0.85ETH
                                                        </div>
                                                        <p className="fs-12 op-8 mb-0">Current Bid</p>
                                                    </div>
                                                </div>
                                                <div className="d-grid mt-4">
                                                    <button className="btn btn-primary btn-wave wfves-effect waves-light">Place Bid</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="sports" className="p-0 border-0" id="nft-sports" role="tabpanel">
                                <Row>
                                    <Col xxl={3} xl={4} lg={4} md={6} sm={12} className="col-12">
                                        <Card className="custom-card overflow-hidden">
                                            <div className="top-left"></div>
                                            <div className="top-right"></div>
                                            <div className="bottom-left"></div>
                                            <div className="bottom-right"></div>
                                            <img src="../../../assets/images/nft-images/13.png" className="card-img-top nft-image" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <Button variant="" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave">
                                                        <i className="ri-heart-fill"></i>
                                                    </Button>
                                                </div>
                                                <div>
                                                    <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>1.26k</span>
                                                </div>
                                            </div>
                                            <Card.Body className="nft-body">
                                                <div className="mb-0 text-fixed-white nft-auction-time">
                                                    06hrs : 38m : 53s
                                                </div>
                                                <p className="fw-medium text-fixed-white">Space Pieces - NFT</p>
                                                <div className="d-flex flex-wrap text-fixed-white align-items-center gap-2">
                                                    <span className="avatar avatar-rounded avatar-md">
                                                        <img src="../../../assets/images/faces/14.jpg" alt="" />
                                                    </span>
                                                    <div className="">
                                                        <p className="mb-0 fw-medium">DigitalErgo NFT</p>
                                                        <p className="fs-12 op-8 mb-0">@ergos005</p>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <div className="text-success fw-medium">
                                                            0.15ETH
                                                        </div>
                                                        <p className="fs-12 op-8 mb-0">Current Bid</p>
                                                    </div>
                                                </div>
                                                <div className="d-grid mt-4">
                                                    <button className="btn btn-primary btn-wave wfves-effect waves-light">Place Bid</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fashion" className="p-0 border-0" id="nft-fashion" role="tabpanel">
                                <Row>
                                    <Col xxl={3} xl={4} lg={4} md={6} sm={12} className="col-12">
                                        <Card className="custom-card overflow-hidden">
                                            <div className="top-left"></div>
                                            <div className="top-right"></div>
                                            <div className="bottom-left"></div>
                                            <div className="bottom-right"></div>
                                            <img src="../../../assets/images/nft-images/13.png" className="card-img-top nft-image" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <Button variant="" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave">
                                                        <i className="ri-heart-fill"></i>
                                                    </Button>
                                                </div>
                                                <div>
                                                    <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>1.26k</span>
                                                </div>
                                            </div>
                                            <Card.Body className="nft-body">
                                                <div className="mb-0 text-fixed-white nft-auction-time">
                                                    06hrs : 38m : 53s
                                                </div>
                                                <p className="fw-medium text-fixed-white">Space Pieces - NFT</p>
                                                <div className="d-flex flex-wrap text-fixed-white align-items-center gap-2">
                                                    <span className="avatar avatar-rounded avatar-md">
                                                        <img src="../../../assets/images/faces/3.jpg" alt="" />
                                                    </span>
                                                    <div className="">
                                                        <p className="mb-0 fw-medium">CarosArt NFT</p>
                                                        <p className="fs-12 op-8 mb-0">@carosart11</p>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <div className="text-success fw-medium">
                                                            0.23ETH
                                                        </div>
                                                        <p className="fs-12 op-8 mb-0">Current Bid</p>
                                                    </div>
                                                </div>
                                                <div className="d-grid mt-4">
                                                    <button className="btn btn-primary btn-wave wfves-effect waves-light">Place Bid</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="avatars" className="p-0 border-0" id="nft-avatars" role="tabpanel">
                                <Row>
                                    <Col xxl={3} xl={4} lg={4} md={6} sm={12} className="col-12">
                                        <Card className="custom-card overflow-hidden">
                                            <div className="top-left"></div>
                                            <div className="top-right"></div>
                                            <div className="bottom-left"></div>
                                            <div className="bottom-right"></div>
                                            <img src="../../../assets/images/nft-images/13.png" className="card-img-top nft-image" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <Button variant="" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave">
                                                        <i className="ri-heart-fill"></i>
                                                    </Button>
                                                </div>
                                                <div>
                                                    <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>1.26k</span>
                                                </div>
                                            </div>
                                            <Card.Body className="nft-body">
                                                <div className="mb-0 text-fixed-white nft-auction-time">
                                                    06hrs : 38m : 53s
                                                </div>
                                                <p className="fw-medium text-fixed-white">Space Pieces - NFT</p>
                                                <div className="d-flex flex-wrap text-fixed-white align-items-center gap-2">
                                                    <span className="avatar avatar-rounded avatar-md">
                                                        <img src="../../../assets/images/faces/14.jpg" alt="" />
                                                    </span>
                                                    <div className="">
                                                        <p className="mb-0 fw-medium">DigitalErgo NFT</p>
                                                        <p className="fs-12 op-8 mb-0">@ergos002</p>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <div className="text-success fw-medium">
                                                            0.45ETH
                                                        </div>
                                                        <p className="fs-12 op-8 mb-0">Current Bid</p>
                                                    </div>
                                                </div>
                                                <div className="d-grid mt-4">
                                                    <button className="btn btn-primary btn-wave wfves-effect waves-light">Place Bid</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="memes" className="p-0 border-0" id="nft-memes" role="tabpanel">
                                <Row>
                                    <Col xxl={3} xl={4} lg={4} md={6} sm={12} className="col-12">
                                        <Card className="custom-card overflow-hidden">
                                            <div className="top-left"></div>
                                            <div className="top-right"></div>
                                            <div className="bottom-left"></div>
                                            <div className="bottom-right"></div>
                                            <img src="../../../assets/images/nft-images/13.png" className="card-img-top nft-image" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <Button variant="" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave">
                                                        <i className="ri-heart-fill"></i>
                                                    </Button>
                                                </div>
                                                <div>
                                                    <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>1.26k</span>
                                                </div>
                                            </div>
                                            <Card.Body className="nft-body">
                                                <div className="mb-0 text-fixed-white nft-auction-time">
                                                    06hrs : 38m : 53s
                                                </div>
                                                <p className="fw-medium text-fixed-white">Fluid - NFT</p>
                                                <div className="d-flex flex-wrap text-fixed-white align-items-center gap-2">
                                                    <span className="avatar avatar-rounded avatar-md">
                                                        <img src="../../../assets/images/faces/1.jpg" alt="" />
                                                    </span>
                                                    <div className="">
                                                        <p className="mb-0 fw-medium">DigitalErgo NFT</p>
                                                        <p className="fs-12 op-8 mb-0">@digitalergos112</p>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <div className="text-success fw-medium">
                                                            0.34ETH
                                                        </div>
                                                        <p className="fs-12 op-8 mb-0">Current Bid</p>
                                                    </div>
                                                </div>
                                                <div className="d-grid mt-4">
                                                    <button className="btn btn-primary btn-wave wfves-effect waves-light">Place Bid</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>

        </Fragment>
    );
};

export default MarketPlace;
