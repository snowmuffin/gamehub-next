"use client";
import { BTC, Bitcoin, BitcoinChart, Dashcoinchart, Etherium } from "@/shared/data/apps/crypto/marcketcapdata";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Dropdown, Row } from "react-bootstrap";

const Marketcap = () => {
    return (
        <Fragment>
            <Seo title={"Marcketcap"} />
            <Row>
                <Col xxl={4} lg={12} className="">
                    <Card className="custom-card overflow-hidden">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="">
                            <div className="d-flex align-items-center mb-3">
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md avatar-rounded bg-light p-2">
                                            <img src="../../../assets/images/crypto-currencies/regular/Bitcoin.svg" alt="" />
                                        </span>
                                    </div>
                                    <div className="mb-0 fw-medium">
                                        Bitcoin - BTC
                                    </div>
                                </div>
                                <div className="ms-auto">
                                    <div id="bitcoin-chart">
                                        <BitcoinChart />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-end">
                                <div>
                                    <p className="mb-1 fs-13">BTC / USD</p>
                                    <p className="fs-18 mb-0 fw-medium lh-1 text-primary">$25,886.16</p>
                                </div>
                                <div className="ms-auto text-end">
                                    <p className="mb-0">$0.02</p>
                                    <p className="fs-14 mb-0 text-muted"><span className="text-muted">Vol:</span>(+2.11%)</p>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <div className="list-group border-0">
                                <Link href="#!" scroll={false} className="list-group-item flex-column align-items-start border-0 p-0 pb-1">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <p className="fs-13 mb-0 font-weight-semibold text-dark">Price Change <span className="badge bg-primary-transparent ms-3 text-primary">Increased</span></p>
                                        <p className="text-success mb-0 font-weight-normal fs-13">
                                            <span className="numberfont">+380.30(0.26%)</span> <i className="fa fa-arrow-up"></i> today
                                        </p>
                                    </div>
                                </Link>
                                <Link href="#!" scroll={false} className="list-group-item flex-column align-items-start border-0 p-0">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <p className="fs-13 mb-0 font-weight-semibold text-dark">Market Rank<span className="badge bg-secondary-transparent ms-3">3 Years</span></p>
                                        <p className="text-dark mb-0 tx-15">
                                            <span className="numberfont text-warning">#6</span>
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={4} lg={12} className="col-xxl-4">
                    <Card className="custom-card overflow-hidden">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="">
                            <div className="d-flex align-items-center mb-3">
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md avatar-rounded bg-light p-2">
                                            <img src="../../../assets/images/crypto-currencies/regular/Ethereum.svg" alt="" />
                                        </span>
                                    </div>
                                    <div className="mb-0 fw-medium">
                                        Ethereum - ETH
                                    </div>
                                </div>
                                <div className="ms-auto">
                                    <div id="Ethereum-chart"><BitcoinChart /></div>
                                </div>
                            </div>
                            <div className="d-flex align-items-end">
                                <div>
                                    <p className="mb-1 fs-13">ETH / USD</p>
                                    <p className="fs-18 mb-0 fw-medium lh-1 text-primary">$45,246.17</p>
                                </div>
                                <div className="ms-auto text-end">
                                    <p className="mb-0">$2.03</p>
                                    <p className="fs-14 mb-0 text-muted"><span className="text-muted">Vol:</span>(+10.45%)</p>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="">
                            <div className="list-group border-0">
                                <Link href="#!" scroll={false} className="list-group-item flex-column align-items-start border-0 p-0 pb-1">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <p className="fs-13 mb-0 font-weight-semibold text-dark">Price Change <span className="badge bg-primary-transparent ms-3 text-primary">Increased</span></p>
                                        <p className="text-success mb-0 font-weight-normal fs-13">
                                            <span className="numberfont">+1,044.24(2.42%)</span> <i className="fa fa-arrow-up"></i> today
                                        </p>
                                    </div>
                                </Link>
                                <Link href="#!" scroll={false} className="list-group-item flex-column align-items-start border-0 p-0">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <p className="fs-13 mb-0 font-weight-semibold text-dark">Market Rank</p>
                                        <p className="text-dark mb-0 tx-15">
                                            <span className="numberfont text-warning">#5</span>
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={4} lg={12} className="col-xxl-4">
                    <Card className="custom-card overflow-hidden">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="">
                            <div className="d-flex align-items-center mb-3">
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md avatar-rounded bg-light p-2">
                                            <img src="../../../assets/images/crypto-currencies/regular/Dash.svg" alt="" />
                                        </span>
                                    </div>
                                    <div className="mb-0 fw-medium">
                                        Dash - DASH
                                    </div>
                                </div>
                                <div className="ms-auto">
                                    <div id="dashcoin-chart">
                                        <Dashcoinchart />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-end">
                                <div>
                                    <p className="mb-1 fs-13">DASH / USD</p>
                                    <p className="fs-18 mb-0 fw-medium lh-1 text-primary">$33,341.000</p>
                                </div>
                                <div className="ms-auto text-end">
                                    <p className="mb-0">$15.32</p>
                                    <p className="fs-14 mb-0 text-muted"><span className="text-muted">Vol:</span>(+124.40%)</p>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="">
                            <div className="list-group border-0">
                                <Link href="#!" scroll={false} className="list-group-item flex-column align-items-start border-0 p-0 pb-1">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <p className="fs-13 mb-0 font-weight-semibold text-dark">Price Change <span className="badge bg-primary-transparent ms-3 text-primary">Increased</span></p>
                                        <p className="text-success mb-0 font-weight-normal fs-13">
                                            <span className="numberfont">+21.17 (1.02%)</span> <i className="fa fa-arrow-up"></i> today
                                        </p>
                                    </div>
                                </Link>
                                <Link href="#!" scroll={false} className="list-group-item flex-column align-items-start border-0 p-0">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <p className="fs-13 mb-0 font-weight-semibold text-dark">Market Rank</p>
                                        <p className="text-dark mb-0 tx-15">
                                            <span className="numberfont text-warning">#45</span>
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Row>
                <div className="col-xl-9">
                    <div className="card custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="card-header justify-content-between pb-3">
                            <div className="card-title">
                                Crypto MarketCap
                            </div>
                            <div className="d-flex flex-wrap gap-2">
                                <div>
                                    <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <Dropdown>
                                    <Dropdown.Toggle as="a" href="#!" className="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sort By<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="" role="menu">
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Market Cap</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Price</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Trading Volume</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Price Change (24h)</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Rank</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>A - Z</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>All-Time High (ATH)</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <div>
                                    <button className="btn btn-secondary btn-sm btn-wave waves-effect waves-light">View All</button>
                                </div>
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table text-nowrap border-top">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th scope="col" className="fw-medium">#</th>
                                            <th scope="col">Crypto Name</th>
                                            <th scope="col">MarketCap</th>
                                            <th scope="col">Price<span className="text-muted ms-1">(USD)</span></th>
                                            <th scope="col">1h Change</th>
                                            <th scope="col">24h Change</th>
                                            <th scope="col">Volume (24h)</th>
                                            <th scope="col">Circulating Supply</th>
                                            <th scope="col">last 1Week</th>
                                            <th scope="col">Trade</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-center">
                                                <Link href="#!" scroll={false}><i className="ri-star-line fs-16 text-muted"></i></Link>
                                            </td>
                                            <td>1</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/square-color/Bitcoin.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-medium"><Link href="#!" scroll={false}>Bitcoin (BTC)</Link></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="fw-medium">$582.23B</span>
                                            </td>
                                            <td>
                                                <span className="fw-medium">
                                                    <Link href="#!" scroll={false}>$30,948.80</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-danger fw-medium"><i className="ti ti-arrow-narrow-down fs-15 fw-medium"></i>0.483%</span>
                                            </td>
                                            <td>
                                                <span className="text-success fw-medium"><i className="ti ti-arrow-narrow-up fs-15 fw-medium"></i>0.239%</span>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="d-block fw-medium">$11.79B USD</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="fw-medium d-block mb-2">
                                                        19.43M of (21M)
                                                    </span>
                                                    <div className="progress-stacked progress-xs w-75">
                                                        <div className="progress-bar bg-success op-5" role="progressbar" style={{ width: "88%" }}
                                                            aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                                        <div className="progress-bar bg-danger op-5" role="progressbar" style={{ width: "12%" }}
                                                            aria-valuenow={15} aria-valuemin={0} aria-valuemax={100}></div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td>
                                                <div id="btc-chart">
                                                    <Bitcoin />
                                                </div>
                                            </td>
                                            <td>
                                                <button className="btn btn-success-light btn-sm">Trade</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <Link href="#!" scroll={false}><i className="ri-star-line fs-16 text-muted"></i></Link>
                                            </td>
                                            <td>2</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/square-color/Ethereum.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-medium"><Link href="#!" scroll={false}>Ethereum (ETH)</Link></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="fw-medium">$226.91B</span>
                                            </td>
                                            <td>
                                                <span className="fw-medium">
                                                    <Link href="#!" scroll={false}>$1,895.96</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-danger fw-medium"><i className="ti ti-arrow-narrow-down fs-15 fw-medium"></i>0.87%</span>
                                            </td>
                                            <td>
                                                <span className="text-danger fw-medium"><i className="ti ti-arrow-narrow-down fs-15 fw-medium"></i>0.29%</span>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="d-block fw-medium">$2.83B USD</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="fw-medium d-block">
                                                        120M
                                                    </span>
                                                </Link>
                                            </td>
                                            <td>
                                                <div id="eth-chart">
                                                    <Etherium />
                                                </div>
                                            </td>
                                            <td>
                                                <button className="btn btn-success-light btn-sm">Trade</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <Link href="#!" scroll={false}><i className="ri-star-line fs-16 text-muted"></i></Link></td>
                                            <td>3</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/square-color/Golem.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-medium"><Link href="#!" scroll={false}>Golem (GLM)</Link></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="fw-medium">$202.07M</span>
                                            </td>
                                            <td>
                                                <span className="fw-medium">
                                                    <Link href="#!" scroll={false}>$0.201472</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-success fw-medium"><i className="ti ti-arrow-narrow-up fs-15 fw-medium"></i>0.61%</span>
                                            </td>
                                            <td>
                                                <span className="text-danger fw-medium"><i className="ti ti-arrow-narrow-down fs-15 fw-medium"></i>34.96%</span>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="d-block fw-medium">$2,112,645 USD</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="fw-medium d-block mb-2">
                                                        1,000M
                                                    </span>
                                                    <div className="progress-stacked progress-xs w-75">
                                                        <div className="progress-bar bg-success op-5" role="progressbar" style={{ width: "100%" }}
                                                            aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td>
                                                <div id="glm-chart">
                                                    <Etherium />
                                                </div>
                                            </td>
                                            <td>
                                                <button className="btn btn-success-light btn-sm">Trade</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <Link href="#!" scroll={false}><i className="ri-star-line fs-16 text-muted"></i></Link></td>
                                            <td>4</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/square-color/Dash.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-medium"><Link href="#!" scroll={false}>Dash (DASH)</Link></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="fw-medium">$365.877M</span>
                                            </td>
                                            <td>
                                                <span className="fw-medium">
                                                    <Link href="#!" scroll={false}>$32.13</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-success fw-medium"><i className="ti ti-arrow-narrow-up fs-15 fw-medium"></i>0.59%</span>
                                            </td>
                                            <td>
                                                <span className="text-success fw-medium"><i className="ti ti-arrow-narrow-down fs-15 fw-medium"></i>1.24%</span>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="d-block fw-medium">$3.61M USD</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="fw-medium d-block mb-2">
                                                        11.37M of (18.92M)
                                                    </span>
                                                    <div className="progress-stacked progress-xs w-75">
                                                        <div className="progress-bar bg-success op-5" role="progressbar" style={{ width: "56%" }}
                                                            aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                                        <div className="progress-bar bg-danger op-5" role="progressbar" style={{ width: "44%" }}
                                                            aria-valuenow={15} aria-valuemin={0} aria-valuemax={100}></div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td>
                                                <div id="dash-chart">
                                                    <Etherium />
                                                </div>
                                            </td>
                                            <td>
                                                <button className="btn btn-success-light btn-sm">Trade</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <Link href="#!" scroll={false}><i className="ri-star-line fs-16 text-muted"></i></Link></td>
                                            <td>5</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/square-color/Litecoin.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-medium"><Link href="#!" scroll={false}>Litecoin (LTC)</Link></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="fw-medium">$6.80B</span>
                                            </td>
                                            <td>
                                                <span className="fw-medium">
                                                    <Link href="#!" scroll={false}>$92.98</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-danger fw-medium"><i className="ti ti-arrow-narrow-up fs-15 fw-medium"></i>0.90%</span>
                                            </td>
                                            <td>
                                                <span className="text-success fw-medium"><i className="ti ti-arrow-narrow-down fs-15 fw-medium"></i>2.22%</span>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="d-block fw-medium">$11.46B USD</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="fw-medium d-block mb-2">
                                                        73.40M
                                                    </span>
                                                    <div className="progress-stacked progress-xs w-75">
                                                        <div className="progress-bar bg-success op-5" role="progressbar" style={{ width: "100%" }}
                                                            aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td>
                                                <div id="lite-chart">
                                                    <Bitcoin />
                                                </div>
                                            </td>
                                            <td>
                                                <button className="btn btn-success-light btn-sm">Trade</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <Link href="#!" scroll={false}><i className="ri-star-line fs-16 text-muted"></i></Link></td>
                                            <td>6</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/square-color/Ripple.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-medium"><Link href="#!" scroll={false}>Ripple (XRP)</Link></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="fw-medium">$42.48B</span>
                                            </td>
                                            <td>
                                                <span className="fw-medium">
                                                    <Link href="#!" scroll={false}>$0.83</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-success fw-medium"><i className="ti ti-arrow-narrow-up fs-15 fw-medium"></i>0.01%</span>
                                            </td>
                                            <td>
                                                <span className="text-success fw-medium"><i className="ti ti-arrow-narrow-down fs-15 fw-medium"></i>0.91%</span>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="d-block fw-medium">$2.99B USD</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="fw-medium d-block mb-2">
                                                        52.54B of (100B)
                                                    </span>
                                                    <div className="progress-stacked progress-xs w-75">
                                                        <div className="progress-bar bg-success op-5" role="progressbar" style={{ width: "52%" }}
                                                            aria-valuenow={52} aria-valuemin={0} aria-valuemax={100}></div>
                                                        <div className="progress-bar bg-danger op-5" role="progressbar" style={{ width: "48%" }}
                                                            aria-valuenow={48} aria-valuemin={0} aria-valuemax={100}></div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td>
                                                <div id="ripple-chart">
                                                    <Etherium />
                                                </div>
                                            </td>
                                            <td>
                                                <button className="btn btn-success-light btn-sm">Trade</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <Link href="#!" scroll={false}><i className="ri-star-line fs-16 text-muted"></i></Link></td>
                                            <td>7</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/square-color/EOS.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-medium"><Link href="#!" scroll={false}>EOS</Link></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="fw-medium">$85.2M</span>
                                            </td>
                                            <td>
                                                <span className="fw-medium">
                                                    <Link href="#!" scroll={false}>$0.765957</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-danger fw-medium"><i className="ti ti-arrow-narrow-up fs-15 fw-medium"></i>0.61%</span>
                                            </td>
                                            <td>
                                                <span className="text-danger fw-medium"><i className="ti ti-arrow-narrow-down fs-15 fw-medium"></i>20.65%</span>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="d-block fw-medium">$116.91M USD</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="fw-medium d-block mb-2">
                                                        10.1B of (105B)
                                                    </span>
                                                    <div className="progress-stacked progress-xs w-75">
                                                        <div className="progress-bar bg-success op-5" role="progressbar" style={{ width: "10%" }}
                                                            aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                                        <div className="progress-bar bg-danger op-5" role="progressbar" style={{ width: "90%" }}
                                                            aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td>
                                                <div id="eos-chart">
                                                    <Etherium />
                                                </div>
                                            </td>
                                            <td>
                                                <button className="btn btn-success-light btn-sm">Trade</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <Link href="#!" scroll={false}><i className="ri-star-line fs-16 text-muted"></i></Link></td>
                                            <td>8</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/square-color/Bytecoin.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-medium"><Link href="#!" scroll={false}>Bytecoin (BCN)</Link></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="fw-medium">$6.2M</span>
                                            </td>
                                            <td>
                                                <span className="fw-medium">
                                                    <Link href="#!" scroll={false}>$0.00039</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-danger fw-medium"><i className="ti ti-arrow-narrow-up fs-15 fw-medium"></i>25.24%</span>
                                            </td>
                                            <td>
                                                <span className="text-danger fw-medium"><i className="ti ti-arrow-narrow-down fs-15 fw-medium"></i>27.12%</span>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="d-block fw-medium">$6,184 USD</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="fw-medium d-block mb-2">
                                                        184.02B of (184.07B)
                                                    </span>
                                                    <div className="progress-stacked progress-xs w-75">
                                                        <div className="progress-bar bg-success op-5" role="progressbar" style={{ width: "99%" }}
                                                            aria-valuenow={99} aria-valuemin={0} aria-valuemax={100}></div>
                                                        <div className="progress-bar bg-danger op-5" role="progressbar" style={{ width: "1%" }}
                                                            aria-valuenow={1} aria-valuemin={0} aria-valuemax={100}></div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td>
                                                <div id="bytecoin-chart">
                                                    <Bitcoin />
                                                </div>
                                            </td>
                                            <td>
                                                <button className="btn btn-success-light btn-sm">Trade</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <Link href="#!" scroll={false}><i className="ri-star-line fs-16 text-muted"></i></Link></td>
                                            <td>9</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/square-color/IOTA.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-medium"><Link href="#!" scroll={false}>IOTA</Link></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="fw-medium">$510.429M</span>
                                            </td>
                                            <td>
                                                <span className="fw-medium">
                                                    <Link href="#!" scroll={false}>$0.184992</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-danger fw-medium"><i className="ti ti-arrow-narrow-up fs-15 fw-medium"></i>1.08%</span>
                                            </td>
                                            <td>
                                                <span className="text-danger fw-medium"><i className="ti ti-arrow-narrow-down fs-15 fw-medium"></i>1.41%</span>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="d-block fw-medium">$7.50M USD</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="fw-medium d-block">
                                                        2.78B
                                                    </span>
                                                </Link>
                                            </td>
                                            <td>
                                                <div id="iota-chart">
                                                    <Bitcoin />
                                                </div>
                                            </td>
                                            <td>
                                                <button className="btn btn-success-light btn-sm">Trade</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <Link href="#!" scroll={false}><i className="ri-star-line fs-16 text-muted"></i></Link></td>
                                            <td>10</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/square-color/Monero.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-medium"><Link href="#!" scroll={false}>Monero</Link></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="fw-medium">$3.062B</span>
                                            </td>
                                            <td>
                                                <span className="fw-medium">
                                                    <Link href="#!" scroll={false}>$165.76</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-danger fw-medium"><i className="ti ti-arrow-narrow-up fs-15 fw-medium"></i>3.22%</span>
                                            </td>
                                            <td>
                                                <span className="text-danger fw-medium"><i className="ti ti-arrow-narrow-down fs-15 fw-medium"></i>3.48%</span>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="d-block fw-medium">$105.8M USD</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="fw-medium d-block">
                                                        18.15M
                                                    </span>
                                                </Link>
                                            </td>
                                            <td>
                                                <div id="monero-chart">
                                                    <Etherium />
                                                </div>
                                            </td>
                                            <td>
                                                <button className="btn btn-success-light btn-sm">Trade</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="card-footer border-top-0">
                            <nav aria-label="Page navigation">
                                <ul className="pagination mb-0 float-end">
                                    <li className="page-item disabled">
                                        <Link href="#!" scroll={false} className="page-link">Previous</Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link" href="#!" scroll={false}>1</Link></li>
                                    <li className="page-item active" aria-current="page">
                                        <Link className="page-link" href="#!" scroll={false}>2</Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link" href="#!" scroll={false}>3</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link" href="#!" scroll={false}>Next</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3">
                    <Card className="custom-card overflow-hidden">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="card-header">
                            <div className="card-title">
                                My Top Currencies
                            </div>
                        </div>
                        <div className="card-body p-0 pt-2">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                        <div className="d-flex align-items-center gap-2">
                                            <div>
                                                <span className="avatar avatar-sm p-1 bg-light">
                                                    <img src="../../../assets/images/crypto-currencies/regular/Bitcoin.svg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="d-block fw-medium fs-13">Bitcoin</span>
                                                <span className="d-block text-muted fs-12 fw-normal">$30,948.80</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="fs-12 text-muted">Max Limit</span>
                                            <span className="fw-medium d-block fs-13">50 BTC</span>
                                        </div>
                                        <div>
                                            <span className="fs-12 text-muted">My Volume</span>
                                            <span className="fw-medium d-block fs-13">42.2450 BTC</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                        <div className="d-flex align-items-center gap-2">
                                            <div>
                                                <span className="avatar avatar-sm p-1 bg-light">
                                                    <img src="../../../assets/images/crypto-currencies/regular/litecoin.svg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="d-block fw-medium fs-13">Litecon</span>
                                                <span className="d-block text-muted fs-12 fw-normal">$5232.98</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="fs-12 text-muted">Max Limit</span>
                                            <span className="fw-medium d-block fs-13">200 LTC</span>
                                        </div>
                                        <div className="text-end">
                                            <span className="fs-12 text-muted">My Volume</span>
                                            <span className="fw-medium d-block fs-13">31.0023 LTC</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                        <div className="d-flex align-items-center gap-2">
                                            <div>
                                                <span className="avatar avatar-sm p-1 bg-light">
                                                    <img src="../../../assets/images/crypto-currencies/regular/Ethereum.svg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="d-block fw-medium fs-13">Ethereum</span>
                                                <span className="d-block text-muted fs-12 fw-normal">$1,895.96</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="fs-12 text-muted">Max Limit</span>
                                            <span className="fw-medium d-block fs-13">100 ETH</span>
                                        </div>
                                        <div>
                                            <span className="fs-12 text-muted">My Volume</span>
                                            <span className="fw-medium d-block fs-13">19.2412 BTC</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                        <div className="d-flex align-items-center gap-2">
                                            <div>
                                                <span className="avatar avatar-sm p-1 bg-light">
                                                    <img src="../../../assets/images/crypto-currencies/regular/Dash.svg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="d-block fw-medium fs-13">Dash</span>
                                                <span className="d-block text-muted fs-12 fw-normal">$1,895.96</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="fs-12 text-muted">Max Limit</span>
                                            <span className="fw-medium d-block fs-13">98 DASH</span>
                                        </div>
                                        <div>
                                            <span className="fs-12 text-muted">My Volume</span>
                                            <span className="fw-medium d-block fs-13">56.1457 DASH</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <Card.Footer className="">
                            <div className="text-center">
                                <Link href="#!" scroll={false} className="fw-medium text-success fs-13 text-decoration-underline">View All Currencies</Link>
                            </div>
                        </Card.Footer>
                    </Card>
                </div>
            </Row>
        </Fragment>
    );
};

export default Marketcap;
