"use client";
import { Nftbalance, Nftstatistics, PersonalLisitings, TopCollectors, TopCreators, TrendingNFT } from "@/shared/data/dashboard/nftdata";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, ProgressBar, Row, Table } from "react-bootstrap";

const Nft = () => {

    return (
        <Fragment>
            <Seo title={"NFT"} />
            <Row>
                <Col xxl={5}>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} className="">
                            <Card className="custom-card overflow-hidden">
                                <div className="top-left"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="top-right"></div>
                                <Card.Body>
                                    <div className="row gap-3 gap-sm-0">
                                        <Col sm={8} className="col-12">
                                            <div className="">
                                                <h4 className="fw-semibold mb-2">Discover, collect and sell your <span className="text-primary">NFTs</span> at one place</h4>
                                                <div className="btn-list">
                                                    <Button variant="" className="btn btn-primary btn-wave">Discover Now</Button>
                                                    <Button variant="" className="btn btn-outline-primary btn-wave">Create Yours</Button>
                                                </div>
                                            </div>
                                        </Col>
                                        <div className="col-sm-4 col-auto my-auto">
                                            <div className="featured-nft text-end">
                                                <img src="../../assets/images/nft-images/1.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={6} xl={6} className="">
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="top-right"></div>
                                <Card.Body>
                                    <div className="d-flex flex-wrap align-items-top">
                                        <div className="me-3 lh-1">
                                            <span className="avatar avatar-lg bg-primary-transparent svg-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z" /></svg>
                                            </span>
                                        </div>
                                        <div>
                                            <p className="mb-1 ">Total Assets</p>
                                            <h5 className="fw-semibold mb-2">596<span className="text-success fw-semibold fs-12 ms-2 d-inline-flex">0.25%<i className="ri-arrow-up-s-line align-middle mx-1"></i></span></h5>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="top-right"></div>
                                <Card.Body>
                                    <div className="d-flex flex-xxl-nowrap flex-wrap align-items-top">
                                        <div className="me-3 lh-1">
                                            <span className="avatar avatar-lg bg-primary-transparent svg-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0,0h24v24H0V0z" fill="none" /><g><path d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M15,20H6c-0.55,0-1-0.45-1-1v-1h10V20z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z" /><rect height="2" width="6" x="9" y="7" /><rect height="2" width="2" x="16" y="7" /><rect height="2" width="6" x="9" y="10" /><rect height="2" width="2" x="16" y="10" /></g></svg>
                                            </span>
                                        </div>
                                        <div>
                                            <p className="mb-1 ">Total Value</p>
                                            <h5 className="fw-semibold mb-2">$1,298<span className="text-success fw-semibold ms-2 fs-12 d-inline-flex">0.74%<i className="ri-arrow-up-s-line align-middle mx-1"></i></span></h5>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="top-right"></div>
                                <Card.Body>
                                    <div className="d-flex flex-wrap align-items-top">
                                        <div className="me-3 lh-1">
                                            <span className="avatar avatar-lg bg-primary-transparent svg-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none" /></g><g><g><path d="M21.41,11.41l-8.83-8.83C12.21,2.21,11.7,2,11.17,2H4C2.9,2,2,2.9,2,4v7.17c0,0.53,0.21,1.04,0.59,1.41l8.83,8.83 c0.78,0.78,2.05,0.78,2.83,0l7.17-7.17C22.2,13.46,22.2,12.2,21.41,11.41z M12.83,20L4,11.17V4h7.17L20,12.83L12.83,20z" /><circle cx="6.5" cy="6.5" r="1.5" /></g></g></svg>
                                            </span>
                                        </div>
                                        <div>
                                            <p className="mb-1 ">Total Sales</p>
                                            <h5 className="fw-semibold mb-2">821<span className="text-danger fw-semibold fs-12 ms-2 d-inline-flex">1.52%<i className="ri-arrow-down-s-line align-middle mx-1"></i></span></h5>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={6} xl={6} className="">
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="top-right"></div>
                                <Card.Body>
                                    <div className="d-flex flex-wrap align-items-start justify-content-between mb-2">
                                        <div>
                                            <p className="mb-0 ">Your Balance</p>
                                            <h5 className="fw-semibold">$19,867.96</h5>
                                        </div>
                                        <div>
                                            <span className="avatar avatar-lg bg-primary-transparent svg-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z" /><circle cx="16" cy="12" r="1.5" /></svg>
                                            </span>
                                        </div>
                                    </div>
                                    <p className="mb-0 fs-11 op-8">Top offers on USD-27,981 <span className="text-success fw-semibold">(+29.09%)</span></p>
                                    <div id="nft-balance-chart" className="py-4 my-3">
                                        <Nftbalance />
                                    </div>
                                    <div className="d-grid mt-4">
                                        <Button variant="" className="btn btn-outline-primary btn-wave">Top Up Wallet</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={7} className="">
                    <Row>
                        <Col xxl={4} xl={4} lg={4} md={4} sm={12} className="col-12">
                            <Card className="custom-card">
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <img src="../../assets/images/nft-images/2.png" className="card-img-top" alt="..." />
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
                                <Card.Body>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-2 lh-1">
                                            <span className="avatar avatar-rounded avatar-md">
                                                <img src="../../assets/images/faces/10.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <p className="mb-0 fw-semibold">Floral NFT</p>
                                            <p className="fs-12  mb-0">@floral200</p>
                                        </div>
                                    </div>
                                    <p className="mb-0 text-fixed-white nft-auction-time">
                                        06hrs : 38m : 53s
                                    </p>
                                    <p className="fs-15 fw-semibold mb-2">Color Abstract - NFT</p>
                                    <div className="d-flex flex-wrap align-itesm-center justify-content-between mb-3">
                                        <div className="fw-semibold">
                                            Highest Bid -
                                        </div>
                                        <div className="d-flex flex-wrap align-items-center lh-1">
                                            <span className="avatar avatar-xs me-1">
                                                <img src="../../assets/images/crypto-currencies/square-color/Ethereum.svg" alt="" />
                                            </span>0.18ETH
                                        </div>
                                    </div>
                                    <div className="d-grid mt-4">
                                        <Button variant="" className="btn btn-primary-light btn-wave">Place Bid</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={4} xl={4} lg={4} md={4} sm={12} className="col-12">
                            <Card className="custom-card">
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <img src="../../assets/images/nft-images/9.png" className="card-img-top" alt="..." />
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
                                <Card.Body>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-2 lh-1">
                                            <span className="avatar avatar-rounded avatar-md">
                                                <img src="../../assets/images/faces/5.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <p className="mb-0 fw-semibold">DigitalErgo NFT</p>
                                            <p className="fs-12  mb-0">@digitalergos112</p>
                                        </div>
                                    </div>
                                    <p className="mb-0 text-fixed-white nft-auction-time">
                                        06hrs : 38m : 53s
                                    </p>

                                    <p className="fs-15 fw-semibold mb-2">Space Pieces - NFT</p>
                                    <div className="d-flex flex-wrap align-itesm-center justify-content-between mb-3">
                                        <div className="fw-semibold">
                                            Highest Bid -
                                        </div>
                                        <div className="d-flex flex-wrap align-items-center lh-1">
                                            <span className="avatar avatar-xs me-1">
                                                <img src="../../assets/images/crypto-currencies/square-color/Ethereum.svg" alt="" />
                                            </span>0.34ETH
                                        </div>
                                    </div>
                                    <div className="d-grid mt-4">
                                        <Button variant="" className="btn btn-primary-light btn-wave">Place Bid</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={4} xl={4} lg={4} md={4} sm={12} className="col-12">
                            <Card className="custom-card">
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <img src="../../assets/images/nft-images/5.png" className="card-img-top" alt="..." />
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
                                <Card.Body>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-2 lh-1">
                                            <span className="avatar avatar-rounded avatar-md">
                                                <img src="../../assets/images/faces/7.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <p className="mb-0 fw-semibold">CarosArt NFT</p>
                                            <p className="fs-12  mb-0">@carosart11</p>
                                        </div>
                                    </div>
                                    <p className="mb-0 text-fixed-white nft-auction-time">
                                        06hrs : 38m : 53s
                                    </p>

                                    <p className="fs-15 fw-semibold mb-2">Ninja Abstracts - NFT</p>
                                    <div className="d-flex flex-wrap align-itesm-center justify-content-between mb-3">
                                        <div className="fw-semibold">
                                            Highest Bid -
                                        </div>
                                        <div className="d-flex flex-wrap align-items-center lh-1">
                                            <span className="avatar avatar-xs me-1">
                                                <img src="../../assets/images/crypto-currencies/square-color/Ethereum.svg" alt="" />
                                            </span>0.14ETH
                                        </div>
                                    </div>
                                    <div className="d-grid mt-4">
                                        <Button variant="" className="btn btn-primary-light btn-wave">Place Bid</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xxl={4} xl={12} lg={12} className="">
                    <Card className="custom-card overflow-hidden">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Top Creators
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle as="a" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown">
                                    <i className="fe fe-more-vertical"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu">
                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Action</Link></Dropdown.Item>
                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Another action</Link></Dropdown.Item>
                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Something else here</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table text-nowrap nft-table2 table-borderless table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="row">Name</th>
                                            <th scope="row">Items Sold</th>
                                            <th scope="row" className="text-end">Total Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {TopCreators.map((idx) => (
                                            <tr key={Math.random()}>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-md rounded-0 me-2">
                                                                <img src={idx.src1} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="align-items-center">
                                                            <p className="mb-0 fw-semibold">{idx.data}</p>
                                                            <span className="fs-12 ">{idx.data1}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="align-items-center">
                                                        <span className="fs-12 ">{idx.item}</span>
                                                        <p className="mb-0 fw-semibold">{idx.itemsold}</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="align-items-center text-end">
                                                        <span className="fs-12 ">Sale Value</span>
                                                        <p className="mb-0 fw-semibold text-primary ">{idx.price}</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={5}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <div className="card-header justify-content-between flex-wrap">
                            <div className="card-title">
                                NFTs Statistics
                            </div>
                        </div>
                        <Card.Body className=" p-0">
                            <div className="d-sm-flex p-3 border-bottom border-block-end-dashed">
                                <div className="me-3">
                                    <span className="avatar avatar-md bg-primary-transparent">
                                        <i className="ri-eth-line fs-5"></i>
                                    </span>
                                </div>
                                <div className="d-flex flex-wrap justify-content-sm-evenly flex-fill gap-1">
                                    <div className="m-sm-0 m-2">
                                        <span>Symbol</span>
                                        <p className="fw-semibold mb-0">ETH</p>
                                    </div>
                                    <div className="m-sm-0 m-2">
                                        <span>Price Benchmark</span>
                                        <p className="fw-semibold mb-0">-0.39%</p>
                                    </div>
                                    <div className="m-sm-0 m-2">
                                        <span>Price (USD)</span>
                                        <p className="text-success fe-semibold mb-0">$1,212.67</p>
                                    </div>
                                    <div className="m-sm-0 m-2">
                                        <span>Change (24H)</span>
                                        <p className="text-danger fw-semibold mb-0">-0.14%</p>
                                    </div>
                                    <div className="m-sm-0 m-2">
                                        <span>Market Cap</span>
                                        <p className="fw-semibold mb-0">$148.20B</p>
                                    </div>
                                </div>
                            </div>
                            <div id="nft-statistics" className="p-3">
                                <Nftstatistics />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card overflow-hidden">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Top Collectors
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle as="a" href="#!" className="py-2 fs-12 no-caret" data-bs-toggle="dropdown">
                                    View All<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu" role="menu">
                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Download</Link></Dropdown.Item>
                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Import</Link></Dropdown.Item>
                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Export</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Card.Body>
                            <div className="table-responsive">
                                <table className="table table-borderless table-striped text-nowrap">
                                    <tbody>
                                        {TopCollectors.map((idx) => (
                                            <tr key={Math.random()}>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-sm rounded-0">
                                                                <img src={idx.src1} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="fw-semibold">{idx.data}</div>
                                                    </div>
                                                </td>
                                                <td className="progress-width">
                                                    <ProgressBar role="progressbar" aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} className="progress progress-xs" now={idx.now} />
                                                </td>
                                                <td>
                                                    <span className=" fs-12">{`${idx.now}%`}</span>
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={7} xxl={8}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <div className="card-header justify-content-between pb-3 border-bottom">
                            <div className="card-title">
                                Trending NFTs
                            </div>
                            <div className="d-flex">
                                <div className="me-3">
                                    <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <Dropdown>
                                    <Dropdown.Toggle as="a" href="#!" className="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sort By<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block d-inline-block"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu" role="menu">
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>New</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Popular</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Relevant</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <Card.Body>
                            <div className="table-responsive">
                                <table className="table table-striped table-borderless text-nowrap nft-table">
                                    <thead>
                                        <tr>
                                            <th>Collection</th>
                                            <th>Rank</th>
                                            <th>Volume</th>
                                            <th>24h %</th>
                                            <th>7d %</th>
                                            <th>Floor Price</th>
                                            <th>Items</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {TrendingNFT.map((idx) => (
                                            <tr key={Math.random()}>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-sm">
                                                                <img src={idx.src1} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 fw-semibold"><Link href="#!" scroll={false} title="nft_name">{idx.data}</Link></p>
                                                            <Link href="#!" scroll={false} className="fs-12  fw-normal" title="creator_name">{idx.data1}</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><span className="fw-semibold text-primary">{idx.rank}</span></td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-xs bg-primary-transparent avatar-rounded">
                                                                <i className="ri-eth-line"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 fw-semibold"><Link href="#!" scroll={false} title="nft_name">{idx.volume}</Link></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className={`text-${idx.color}`}><i className={`ti ${idx.icon} me-1 align-middle d-inline-block`}></i>{idx.percent}</span>
                                                </td>
                                                <td><span className={`text-${idx.color1}`}><i className={`ti ${idx.icon1} me-1 align-middle d-inline-block`}></i>{idx.percent1}</span></td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-xs bg-primary-transparent avatar-rounded">
                                                                <i className="ri-eth-line"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 fw-semibold"><Link href="#!" scroll={false} title="nft_name">{idx.price}</Link></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{idx.item}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={5} xxl={4}>
                    <Card className="custom-card overflow-hidden">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Personal Listings
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle as="a" href="#!" className="p-2 fs-12 no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                    View All<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu" role="menu">
                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Today</Link></Dropdown.Item>
                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>This Week</Link></Dropdown.Item>
                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Last Week</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Card.Body className=" p-0">
                            <ul className="list-group list-group-flush">
                                {PersonalLisitings.map((idx) => (
                                    <li className="list-group-item" key={Math.random()}>
                                        <Link href="#!" scroll={false}>
                                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                <div className="d-flex align-items-start lh-1">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-sm">
                                                            <img src={idx.src1} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="fw-semibold mb-1 lh-1">{idx.data}</p>
                                                        <span className=" fs-12 d-inline-flex">{idx.data1}<span className={`ms-2 text-${idx.color} fs-11`}><i className={`ri-${idx.icon}-s-line align-middle me-1`}></i>{idx.percent}</span></span>
                                                    </div>
                                                </div>
                                                <div className="text-end lh-1">
                                                    <span className="fs-11 d-block mb-1">PRICE</span>
                                                    <p className="mb-0 fw-semibold d-flex align-items-center"><span className="avatar avatar-xs p-1 text-primary"><i className="ri-eth-line fs-12"></i> </span>{idx.price}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                ))}

                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Nft;
