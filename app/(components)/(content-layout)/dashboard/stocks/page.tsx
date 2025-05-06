"use client";
import { Alphabetstock, Amazonstock, Applestock, Mastercardstock, Microsoftstock, Myprofile, Nvidiastock, Portfoliovalue, Stocksdata, Totalearnings } from "@/shared/data/dashboard/stocksdata";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Dropdown, Card, Row, Button, Col, Table } from "react-bootstrap";

const Stocks = () => {
    return (
        <Fragment>
            <Seo title={"Stocks"} />
            <Row className="row-cols-xxl-5 row-cols-xl-3 row-cols-md-2">
                {Stocksdata.map((idx) => (
                    <div className="col flex-fill" key={Math.random()}>
                        <Card className="custom-card">
                            <div className="top-left"></div>
                            <div className="bottom-left"></div>
                            <div className="bottom-right"></div>
                            <div className="top-right"></div>
                            <Card.Body>
                                <div className="d-flex align-items-start gap-3 mb-3">
                                    <span className="avatar avatar-sm bg-primary-transparent"> <i className={`bi bi-${idx.icon} fs-15`}></i> </span>
                                    <div className="flex-fill lh-1">
                                        <span className="d-block mb-1">{idx.data}</span>
                                        <span className="d-block fs-12">{idx.data1}</span>
                                    </div>
                                    <Dropdown>
                                        <Dropdown.Toggle as="a" aria-label="anchor" href="#!" className="op-4 no-caret" data-bs-toggle="dropdown" aria-expanded="true">
                                            <i className="bi bi-grid text-primary"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-menu" role="menu" data-popper-placement="bottom-start">
                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Day</Link></Dropdown.Item>
                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Week</Link></Dropdown.Item>
                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Year</Link></Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="mb-0 d-flex align-items-center justify-content-between">
                                    <h4 className="fw-medium lh-1 mb-0">{idx.price}<span className="badge bg-success-transparent ms-2 align-middle">{idx.percent}</span></h4>
                                    <span className="fs-12">{idx.stock} Stocks
                                        <Link className="svg-secondary" href="#!" scroll={false} data-bs-toggle="popover"
                                            data-bs-placement="left" data-bs-content="Share value fluctucates timely.">
                                            <i className="ri-information-2-line op-6 ms-1"></i>
                                        </Link>
                                    </span>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Row>
            <Row>
                <Col xl={5}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Total Earnings Of The Year
                            </div>
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <Button variant="" type="button" className="btn btn-primary btn-sm btn-wave">1D</Button>
                                <Button variant="" type="button" className="btn btn-primary-light btn-sm btn-wave">1W</Button>
                                <Button variant="" type="button" className="btn btn-primary-light btn-sm btn-wave">1M</Button>
                                <Button variant="" type="button" className="btn btn-primary-light btn-sm btn-wave">3M</Button>
                                <Button variant="" type="button" className="btn btn-primary-light btn-sm btn-wave">6M</Button>
                                <Button variant="" type="button" className="btn btn-primary-light btn-sm btn-wave">1Y</Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="total-earnings">
                                <Totalearnings />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <Card.Header className="">
                            <div className="card-title">
                                My Wishlist
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table table-borderless table-striped text-nowrap">
                                    <thead>
                                        <tr>
                                            <th className="border-bottom-0 ps-4">Stock Name</th>
                                            <th className="border-bottom-0 ps-3">Price</th>
                                            <th className="border-bottom-0">Change</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center gap-2"><span className="avatar avatar-sm rounded-0 bg-primary-transparent"><i className="bi bi-apple"></i></span>Apple</div>
                                            </td>
                                            <td>$191.56</td>
                                            <td><span className="text-success ">1.55%<i className="ti ti-trending-up ms-1"></i></span></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center gap-2"><span className="avatar avatar-sm rounded-0 bg-primary-transparent"><i className="bi bi-nvidia"></i></span>Nvidia</div>
                                            </td>
                                            <td>$594.91</td>
                                            <td><span className="text-danger fw-semibold">4.17%<i className="ti ti-trending-down ms-1"></i></span></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center gap-2"><span className="avatar avatar-sm rounded-0 bg-primary-transparent"><i className="bi bi-amazon"></i></span>Amazon</div>
                                            </td>
                                            <td>$155.34</td>
                                            <td><span className="text-success">1.84%<i className="ti ti-trending-up ms-1"></i></span></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center gap-2"><span className="avatar avatar-sm rounded-0 bg-primary-transparent"><i className="bi bi-microsoft"></i></span>Microsoft</div>
                                            </td>
                                            <td>$398.67</td>
                                            <td><span className="text-success">1.22%<i className="ti ti-trending-up ms-1"></i></span></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center gap-2"><span className="avatar avatar-sm rounded-0 bg-primary-transparent"><i className="bi bi-google"></i></span>Alphabet</div>
                                            </td>
                                            <td>$147.97</td>
                                            <td><span className="text-success">2.06%<i className="ti ti-trending-up ms-1"></i></span></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center gap-2"><span className="avatar avatar-sm rounded-0 bg-primary-transparent"><i className="ri-mastercard-fill"></i></span>Mastercard</div>
                                            </td>
                                            <td>$436.78</td>
                                            <td><span className="text-success">1.41%<i className="ti ti-trending-up ms-1"></i></span></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <div className="col-xl-4">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Portfolio Value
                            </div>
                            <Dropdown className="">
                                <Dropdown.Toggle as="a" aria-label="anchor" href="#!" data-bs-toggle="dropdown" className="op-4 no-caret" aria-expanded="false">
                                    <i className="bi bi-grid text-primary"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu" role="menu">
                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Day</Link></Dropdown.Item>
                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Week</Link></Dropdown.Item>
                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Year</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-start gap-3">
                                <div>
                                    <span className="avatar avatar-md bg-primary-transparent">
                                        <i className="ti ti-currency-dollar fs-4"></i>
                                    </span>
                                </div>
                                <div>
                                    <div className="text-muted fs-13">Total Value <span className="p-2 br-5 text-success"><i className="fe fe-arrow-up-right"></i></span> </div> <h3 className="">$582,857.97</h3> <div className="fs-12"><span className="text-success fs-13 me-1 d-inline-flex">32%</span>Increase Since last Year</div>
                                </div>
                            </div>
                            <div id="portfolio-value">
                                <Portfoliovalue />
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Row>
            <Row>
                <div className="mb-4 d-flex align-items-center justify-content-between">
                    <h6 className="fw-semibold mb-0">My Portfolio :</h6>
                    <div>
                        <Button variant="" className="btn btn-sm btn-primary-light btn-wave">View All</Button>
                    </div>
                </div>
                {Myprofile.map((idx) => (
                    <Col xxl={2} xl={4} lg={6} md={6} sm={12} className="" key={Math.random()}>
                        <Card className="custom-card">
                            <div className="top-left"></div>
                            <div className="bottom-left"></div>
                            <div className="bottom-right"></div>
                            <div className="top-right"></div>
                            <Card.Body>
                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <div className="me-2">
                                            <span className={`avatar bg-${idx.color}-transparent`}>
                                                <i className={`ti ${idx.icon} fs-18`}></i>
                                            </span>
                                        </div>
                                        <div>
                                            <span className="d-block fw-semibold">{idx.data}</span>
                                            <span className="d-block">{idx.data1}</span>
                                        </div>
                                    </div>
                                    <div className="text-end text-danger fs-12 fw-semibold">
                                        <span className="d-block">-0.14%</span>
                                        <span className="d-block">-$1,780.80</span>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}

            </Row>
            <Row>
                <div className="col-xl-12">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <Card.Header className="">
                            <div className="card-title">
                                My Stocks
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <table className="table table-striped text-nowrap table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">S.No</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Date Invested</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Market Cap</th>
                                            <th scope="col">Price Change</th>
                                            <th scope="col">Volume</th>
                                            <th scope="col">Price Graph</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>
                                                <div className="d-flex align-items-start gap-2">
                                                    <span className="avatar avatar-sm bg-primary-transparent"> <i className="bi bi-apple fs-15"></i> </span>
                                                    <div className="flex-fill lh-1">
                                                        <span className="d-block mb-1">Apple</span>
                                                        <span className="d-block fs-12">Apple Inc</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                20-11-2023
                                            </td>
                                            <td>
                                                $16,839.10
                                            </td>
                                            <td>
                                                324.01B
                                            </td>
                                            <td>
                                                <span className="text-success">0.30% <i className="ti ti-arrow-big-up-lines ms-1"></i></span>
                                            </td>
                                            <td>
                                                14,674,311,168
                                            </td>
                                            <td>
                                                <div id="apple-stock-graph">
                                                    <Applestock />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>
                                                <div className="d-flex align-items-start gap-2">
                                                    <span className="avatar avatar-sm bg-primary-transparent"> <i className="bi bi-nvidia fs-15"></i> </span>
                                                    <div className="flex-fill lh-1">
                                                        <span className="d-block mb-1">Nvidia</span>
                                                        <span className="d-block fs-12">NVIDIA Corp</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                14-01-2024
                                            </td>
                                            <td>
                                                1,217.96
                                            </td>
                                            <td>
                                                $149,316,232,699
                                            </td>
                                            <td>
                                                <span className="text-success">0.30% <i className="ti ti-arrow-big-up-lines ms-1"></i></span>
                                            </td>
                                            <td>
                                                $4,758,554,801
                                            </td>
                                            <td>
                                                <div id="nvidia-stock-graph">
                                                    <Nvidiastock />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>
                                                <div className="d-flex align-items-start gap-2">
                                                    <span className="avatar avatar-sm bg-primary-transparent"> <i className="bi bi-amazon fs-15"></i> </span>
                                                    <div className="flex-fill lh-1">
                                                        <span className="d-block mb-1">Amazon</span>
                                                        <span className="d-block fs-12">Amazon.com, Inc.</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                26-01-2024
                                            </td>
                                            <td>
                                                $43.49
                                            </td>
                                            <td>
                                                $480,799,847
                                            </td>
                                            <td>
                                                <span className="text-success">0.45% <i className="ti ti-arrow-big-up-lines ms-1"></i></span>
                                            </td>
                                            <td>
                                                $52,626,563
                                            </td>
                                            <td>
                                                <div id="amazon-stock-graph">
                                                    <Amazonstock />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>
                                                <div className="d-flex align-items-start gap-2">
                                                    <span className="avatar avatar-sm bg-primary-transparent"> <i className="bi bi-microsoft fs-15"></i> </span>
                                                    <div className="flex-fill lh-1">
                                                        <span className="d-block mb-1">Microsoft</span>
                                                        <span className="d-block fs-12">Microsoft Corp</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                31-01-2024
                                            </td>
                                            <td>
                                                $0.3531
                                            </td>
                                            <td>
                                                $17,791,969,465
                                            </td>
                                            <td>
                                                <span className="text-success">0.97% <i className="ti ti-arrow-big-up-lines ms-1"></i></span>
                                            </td>
                                            <td>
                                                $511,598,941
                                            </td>
                                            <td>
                                                <div id="microsoft-stock-graph">
                                                    <Microsoftstock />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>
                                                <div className="d-flex align-items-start gap-2">
                                                    <span className="avatar avatar-sm bg-primary-transparent"> <i className="bi bi-google fs-15"></i> </span>
                                                    <div className="flex-fill lh-1">
                                                        <span className="d-block mb-1">ALPHABET</span>
                                                        <span className="d-block fs-12">Alphabet Inc</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                12-02-2024
                                            </td>
                                            <td>
                                                $0.169741
                                            </td>
                                            <td>
                                                $471,800,600
                                            </td>
                                            <td>
                                                <span className="text-success">0.93% <i className="ti ti-arrow-big-up-lines ms-1"></i></span>
                                            </td>
                                            <td>
                                                $5,524,385
                                            </td>
                                            <td>
                                                <div id="alphabet-stock-graph">
                                                    <Alphabetstock />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>
                                                <div className="d-flex align-items-start gap-2">
                                                    <span className="avatar avatar-sm bg-primary-transparent"> <i className="ri-mastercard-fill fs-15"></i> </span>
                                                    <div className="flex-fill lh-1">
                                                        <span className="d-block mb-1">Mastercard</span>
                                                        <span className="d-block fs-12">Mastercard Inc</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                19-01-2024
                                            </td>
                                            <td>
                                                $6.43
                                            </td>
                                            <td>
                                                $453,601,667
                                            </td>
                                            <td>
                                                <span className="text-danger">0.49% <i className="ti ti-arrow-big-down-lines ms-1"></i></span>
                                            </td>
                                            <td>
                                                $12,904,320
                                            </td>
                                            <td>
                                                <div id="mastercard-stock-graph">
                                                    <Mastercardstock />
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Row>
        </Fragment>
    );
};

export default Stocks;
