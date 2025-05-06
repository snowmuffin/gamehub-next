"use client";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, ListGroup, Row } from "react-bootstrap";

const LifeAucation = () => {
    return (
        <Fragment>
            <Seo title={"Live Acuation"} />
            <Row>
                <Col xxl={3} xl={3}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card overflow-hidden">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="card-header justify-content-between">
                                    <div className="card-title">
                                        Top NFT Creators
                                    </div>
                                    <div>
                                        <Button variant="" className="btn btn-primary-light btn-sm btn-wave">View All</Button>
                                    </div>
                                </div>
                                <Card.Body className="p-0 pt-1">
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                <div className="d-flex align-items-center">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md avatar-rounded me-2">
                                                            <img src="../../../assets/images/nft-images/2.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="align-items-center">
                                                        <p className="mb-0 fw-medium fs-14">Samuel Paul<i className="ri-checkbox-circle-line text-success ms-1 align-middle"></i></p>
                                                        <p className="fs-12 text-muted mb-0">@Samuelpaul</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <span className="d-block fw-medium text-success fs-12">+16.84ETH</span>
                                                    <span className="d-block text-muted fs-11">21 NFT's</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                <div className="d-flex align-items-center">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md avatar-rounded me-2">
                                                            <img src="../../../assets/images/nft-images/18.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="align-items-center">
                                                        <p className="mb-0 fw-medium fs-14">Kathie Skyla<i className="ri-checkbox-circle-line text-success ms-1 align-middle"></i></p>
                                                        <p className="fs-12 text-muted mb-0">@kathieskyla</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <span className="d-block fw-medium text-success fs-12">+11.34ETH</span>
                                                    <span className="d-block text-muted fs-11">18 NFT's</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                <div className="d-flex align-items-center">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md avatar-rounded me-2">
                                                            <img src="../../../assets/images/nft-images/8.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="align-items-center">
                                                        <p className="mb-0 fw-medium fs-14">James Lucas<i className="ri-checkbox-circle-line text-success ms-1 align-middle"></i></p>
                                                        <p className="fs-12 text-muted mb-0">@jameslucas</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <span className="d-block fw-medium text-success fs-12">+10.26ETH</span>
                                                    <span className="d-block text-muted fs-11">16 NFT's</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                <div className="d-flex align-items-center">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md avatar-rounded me-2">
                                                            <img src="../../../assets/images/nft-images/11.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="align-items-center">
                                                        <p className="mb-0 fw-medium fs-14">Blanca Trico<i className="ri-checkbox-circle-line text-success ms-1 align-middle"></i></p>
                                                        <p className="fs-12 text-muted mb-0">@blancatrico</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <span className="d-block fw-medium text-success fs-12">+09.57ETH</span>
                                                    <span className="d-block text-muted fs-11">13 NFT's</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                <div className="d-flex align-items-center">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md avatar-rounded me-2">
                                                            <img src="../../../assets/images/nft-images/22.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="align-items-center">
                                                        <p className="mb-0 fw-medium fs-14">Philip Fred<i className="ri-checkbox-circle-line text-success ms-1 align-middle"></i></p>
                                                        <p className="fs-12 text-muted mb-0">@philipfred</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <span className="d-block fw-medium text-success fs-12">+8.47ETH</span>
                                                    <span className="d-block text-muted fs-11">11 NFT's</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                <div className="d-flex align-items-center">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md avatar-rounded me-2">
                                                            <img src="../../../assets/images/nft-images/31.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="align-items-center">
                                                        <p className="mb-0 fw-medium fs-14">Arunima Alice<i className="ri-checkbox-circle-line text-success ms-1 align-middle"></i></p>
                                                        <p className="fs-12 text-muted mb-0">Arunimaalice@</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <span className="d-block fw-medium text-success fs-12">+7.67ETH</span>
                                                    <span className="d-block text-muted fs-11">11 NFT's</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card overflow-hidden">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="card-header justify-content-between">
                                    <div className="card-title">
                                        Recent Activity
                                    </div>
                                    <Dropdown className="">
                                        <Dropdown.Toggle as="a" href="#!" className="p-2 fs-12 text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                            Today<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="" role="menu">
                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Today</Link></Dropdown.Item>
                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>This Week</Link></Dropdown.Item>
                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Last Week</Link></Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="card-body p-0 pt-1">
                                    <ul className="list-group list-group-flush">
                                        <ListGroup.Item>
                                            <div className="d-flex gap-3 align-items-center flex-wrap flex-lg-nowrap">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-lg">
                                                        <img src="../../../assets/images/nft-images/31.png" alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className="mb-1"><Link href="#!" scroll={false} className="fw-medium">DigitalMind</Link><span className="fs-12 text-muted ms-2 d-inline-block">15 mins ago</span></div>
                                                    <div className="fs-13">Purchsed from you by <Link className="text-decoration-underline" href="#!" scroll={false}>Chetanh</Link> for <span className="text-success fw-medium fs-12">0.48ETH</span>.</div>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex gap-3 align-items-center flex-wrap flex-lg-nowrap">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-lg">
                                                        <img src="../../../assets/images/nft-images/23.png" alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className="mb-1"><span className="fw-medium">DigitalMind</span><span className="fs-12 text-muted ms-2 d-inline-block">1 hr ago</span></div>
                                                    <div className="fs-13">Next Bidding is ready for you.</div>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex gap-3 align-items-center flex-wrap flex-lg-nowrap">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-lg">
                                                        <img src="../../../assets/images/nft-images/21.png" alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className="mb-1"><span className="fw-medium">Heavenly Place</span><span className="fs-12 text-muted ms-2 d-inline-block">5 mins ago</span></div>
                                                    <div className="fs-13">More Likes for <Link href="#!" scroll={false} className="fs-12 text-warning fw-medium">HeavenlyPlace</Link> trending now.</div>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex gap-3 align-items-center flex-wrap flex-lg-nowrap">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-lg">
                                                        <img src="../../../assets/images/nft-images/24.png" alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className="mb-1"><span className="fw-medium">Heavenly Place</span><span className="fs-12 text-muted ms-2 d-inline-block">2 hr ago</span></div>
                                                    <div className="fs-13">NFT Purchased from <Link href="#!" scroll={false} className="text-decoration-underline">InventoryClub</Link> for <span className="fw-medium fs-12 text-pink fw-medium">2.05ETH</span>. Bid is the Medium</div>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                    </ul>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={9} xl={9} className="">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
                        <div className="">
                            <Link href="#!" scroll={false} className="nft-tag nft-tag-primary active stretched-link">
                                <span className="nft-tag-icon"><i className="ri-global-line fs-14 align-middle"></i></span>
                                <span className="nft-tag-text">All</span>
                            </Link>
                        </div>
                        <div className="">
                            <Link href="#!" scroll={false} className="nft-tag nft-tag-secondary stretched-link">
                                <span className="nft-tag-icon"><i className="ri-flashlight-line fs-14 align-middle"></i></span>
                                <span className="nft-tag-text">New Trends</span>
                            </Link>
                        </div>
                        <div className="">
                            <Link href="#!" scroll={false} className="stretched-link nft-tag nft-tag-success">
                                <span className="nft-tag-icon"><i className="ri-game-line fs-14 align-middle"></i></span>
                                <span className="nft-tag-text">Games</span>
                            </Link>
                        </div>
                        <div className="">
                            <Link href="#!" scroll={false} className="stretched-link nft-tag nft-tag-info">
                                <span className="nft-tag-icon"><i className="ri-brush-line fs-14 align-middle"></i></span>
                                <span className="nft-tag-text">Art Work</span>
                            </Link>
                        </div>
                        <div className="">
                            <Link href="#!" scroll={false} className="stretched-link nft-tag nft-tag-danger">
                                <span className="nft-tag-icon"><i className="ri-vip-diamond-line fs-14 align-middle"></i></span>
                                <span className="nft-tag-text">Fashion</span>
                            </Link>
                        </div>
                        <div className="">
                            <Link href="#!" scroll={false} className="stretched-link nft-tag nft-tag-warning">
                                <span className="nft-tag-icon"><i className="ri-disc-line fs-14 align-middle"></i></span>
                                <span className="nft-tag-text">Music</span>
                            </Link>
                        </div>
                        <div className="">
                            <Link href="#!" scroll={false} className="stretched-link nft-tag nft-tag-orange">
                                <span className="nft-tag-icon"><i className="ri-image-add-line fs-14 align-middle"></i></span>
                                <span className="nft-tag-text">Others</span>
                            </Link>
                        </div>
                    </div>
                    <Row>
                        <h6 className="fw-medium mb-3">Live Auction:</h6>
                        <Col xxl={4} xl={4} md={6} sm={12} className="col-12">
                            <Card className="custom-card overflow-hidden">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <img src="../../../assets/images/nft-images/2.png" className="card-img-top nft-image" alt="..." />
                                <div className="card-body nft-body">
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
                                </div>
                            </Card>
                        </Col>
                        <Col xxl={4} xl={4} md={6} sm={12} className="col-12">
                            <Card className="custom-card overflow-hidden">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <img src="../../../assets/images/nft-images/3.png" className="card-img-top nft-image" alt="..." />
                                <div className="card-body nft-body">
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
                                        <button className="btn btn-primary btn-wave wfves-effect waves-light">Place Bid</button>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col xxl={4} xl={4} md={6} sm={12} className="col-12">
                            <Card className="custom-card overflow-hidden">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <img src="../../../assets/images/nft-images/5.png" className="card-img-top nft-image" alt="..." />
                                <div className="card-body nft-body">
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
                                        <button className="btn btn-primary btn-wave wfves-effect waves-light">Place Bid</button>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col xxl={4} xl={4} md={6} sm={12} className="col-12">
                            <Card className="custom-card overflow-hidden">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <img src="../../../assets/images/nft-images/4.png" className="card-img-top nft-image" alt="..." />
                                <div className="card-body nft-body">
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
                                </div>
                            </Card>
                        </Col>
                        <Col xxl={4} xl={4} md={6} sm={12} className="col-12">
                            <Card className="custom-card overflow-hidden">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <img src="../../../assets/images/nft-images/9.png" className="card-img-top nft-image" alt="..." />
                                <div className="card-body nft-body">
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
                                        <button className="btn btn-primary btn-wave wfves-effect waves-light">Place Bid</button>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col xxl={4} xl={4} md={6} sm={12} className="col-12">
                            <Card className="custom-card overflow-hidden">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <img src="../../../assets/images/nft-images/29.png" className="card-img-top nft-image" alt="..." />
                                <div className="card-body nft-body">
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
                                </div>
                            </Card>
                        </Col>
                        <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-end mb-4">
                                <li className="page-item disabled">
                                    <Link href="#!" scroll={false} className="page-link">Previous</Link>
                                </li>
                                <li className="page-item"><Link className="page-link" href="#!" scroll={false}>1</Link></li>
                                <li className="page-item"><Link className="page-link" href="#!" scroll={false}>2</Link></li>
                                <li className="page-item"><Link className="page-link" href="#!" scroll={false}>3</Link></li>
                                <li className="page-item">
                                    <Link className="page-link" href="#!" scroll={false}>Next</Link>
                                </li>
                            </ul>
                        </nav>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    );
};

export default LifeAucation;
