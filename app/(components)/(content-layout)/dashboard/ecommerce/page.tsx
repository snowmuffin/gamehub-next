"use client";
import { WebsiteTraffic } from "@/shared/data/dashboard/chartdata";
import { Pageview, Products, ProfitAnalysis, Profitbysale, RecentOrder, SalesStatics, TotalRevenue, Totalsales } from "@/shared/data/dashboard/ecommercedata";
const WorldMapCom = dynamic(() => import("@/shared/data/dashboard/mapdata"), { ssr: false });
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Card, Col, Dropdown, Row, Table } from "react-bootstrap";
import VanillaTilt from 'vanilla-tilt';

const Ecommerce = () => {

    const [content, setContent] = useState("");

    useEffect(() => {
        const tiltElements = document.querySelectorAll(".tilt");
        tiltElements.forEach((element: any) => {
            VanillaTilt.init(element, {
                reverse: true,
                max: 15,
                speed: 300,
                scale: 1,
                glare: true,
                reset: true,
                perspective: 500,
                transition: true,
                "max-glare": 0.45,
                "glare-prerender": false,
                gyroscope: true,
                gyroscopeMinAngleX: -45,
                gyroscopeMaxAngleX: 45,
                gyroscopeMinAngleY: -45,
                gyroscopeMaxAngleY: 45
            });
        });

        return () => {
            tiltElements.forEach(element => {
                // Clean up VanillaTilt when component unmounts
                // VanillaTilt.destroy(element);
            });
        };
    }, []); // Empty dependency array ensures useEffect runs only once

    return (
        <Fragment>
            <Seo title={"Ecommerce"} />
            <Row>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12} className="col-12">
                    <Card className="custom-card tilt">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <Card.Body className="pe-2">
                            <div className="d-flex align-items-center gap-3 flex-wrap">
                                <div className="mb-4">
                                    <span className="avatar avatar-lg rounded bg-primary-transparent svg-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,80V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H216A8,8,0,0,1,224,80Z" opacity="0.2"></path><path d="M216,64H176a48,48,0,0,0-96,0H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm88,168H40V80H80V96a8,8,0,0,0,16,0V80h64V96a8,8,0,0,0,16,0V80h40Z"></path></svg>
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <h5 className="fw-semibold">32,981</h5>
                                    <span className="d-block text-muted mb-1">Total Sales</span>
                                    <span className="d-block fs-12 text-success fw-medium"><i className="ti ti-arrow-narrow-up"></i>0.29% This Month</span>
                                </div>
                                <div id="total-sales" style={{ width: "120px" }}>
                                    <Totalsales />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12} className="col-12">
                    <Card className="custom-card tilt">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <Card.Body  className="pe-2">
                            <div className="d-flex align-items-center gap-3 flex-wrap">
                                <div className="mb-4">
                                    <span className="avatar avatar-lg rounded bg-primary-transparent svg-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M192,168a40,40,0,0,1-40,40H128V128h24A40,40,0,0,1,192,168ZM112,48a40,40,0,0,0,0,80h16V48Z" opacity="0.2"></path><path d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z"></path></svg>
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <h5 className="fw-semibold">$14,32,145</h5>
                                    <span className="d-block text-muted mb-1">Total Revenue</span>
                                    <span className="d-block fs-12 text-success fw-medium"><i className="ti ti-arrow-narrow-up"></i>1.25% This Month</span>
                                </div>
                                <div id="total-revenue" style={{ width: "120px" }}>
                                    <TotalRevenue />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12} className="col-12">
                    <Card className="custom-card tilt">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <Card.Body  className="pe-2">
                            <div className="d-flex align-items-center gap-3 flex-wrap">
                                <div className="mb-4">
                                    <span className="avatar avatar-lg rounded bg-primary-transparent svg-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" opacity="0.2"></path><path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path></svg>
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <h5 className="fw-semibold">4,678</h5>
                                    <span className="d-block text-muted mb-1">Page Views</span>
                                    <span className="d-block fs-12 text-danger fw-medium"><i className="ti ti-arrow-narrow-down"></i>0.05% This Month</span>
                                </div>
                                <div id="page-views" style={{ width: "120px" }}>
                                    <Pageview />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12} className="col-12">
                    <Card className="custom-card tilt">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <Card.Body  className="pe-2">
                            <div className="d-flex align-items-center gap-3 flex-wrap">
                                <div className="mb-4">
                                    <span className="avatar avatar-lg rounded bg-primary-transparent svg-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,88V200a8,8,0,0,1-8,8H56a16,16,0,0,1-16-16V64A16,16,0,0,0,56,80H216A8,8,0,0,1,224,88Z" opacity="0.2"></path><path d="M216,72H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24,24,0,0,0,32,64V192a24,24,0,0,0,24,24H216a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72Zm0,128H56a8,8,0,0,1-8-8V86.63A23.84,23.84,0,0,0,56,88H216Zm-48-60a12,12,0,1,1,12,12A12,12,0,0,1,168,140Z"></path></svg>
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <h5 className="fw-semibold">$645</h5>
                                    <span className="d-block text-muted mb-1">Profit By Sale</span>
                                    <span className="d-block fs-12 text-success fw-medium"><i className="ti ti-arrow-narrow-up"></i>0.18% This Month</span>
                                </div>
                                <div id="profit-per-sale" style={{ width: "120px" }}>
                                    <Profitbysale />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={3}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                Website Traffic
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="website-traffic">
                                <WebsiteTraffic />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                Sales Statistics
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div id="sales-statistics" className="p-3">
                                <SalesStatics />
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
                        <Card.Header>
                            <div className="card-title">
                                Profit Analysis
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="profit-analysis">
                                <ProfitAnalysis />
                            </div>
                            <div className="d-flex align-items-start justify-content-between gap-5 mt-3">
                                <div className="flex-fill">
                                    <span className="d-block mb-1 text-default">Income</span>
                                    <div className="progress mb-3 rounded-0 p-1 border border-primary border-opacity-10" role="progressbar" aria-label="Basic example" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar" style={{ width: "65%" }}></div>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <span className="d-block text-fixed-white">$47,289</span>
                                    <span className="d-block text-success fs-12 fw-semibold"><i className="ti ti-trending-up me-1 align-middle"></i>21%</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-start justify-content-between gap-5">
                                <div className="flex-fill">
                                    <span className="d-block mb-1 text-default">Expenses</span>
                                    <div className="progress mb-3 rounded-0 p-1 border border-primary border-opacity-10" role="progressbar" aria-label="Basic example" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar bg-secondary" style={{ width: "40%" }}></div>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <span className="d-block text-fixed-white">$25,783</span>
                                    <span className="d-block text-danger fs-12 fw-semibold"><i className="ti ti-trending-up me-1 align-middle"></i>12%</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                Top Country Sales
                            </div>
                        </Card.Header>
                        <Card.Body className="">
                            <WorldMapCom />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <div className="card-header pb-3 border-bottom">
                            <div className="card-title">
                                Recent Orders
                            </div>
                        </div>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table text-nowrap table-striped table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">Order ID</th>
                                            <th scope="col">Payment Mode</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Amount Paid</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {RecentOrder.map((idx) => (
                                            <tr key={Math.random()}>
                                                <td><span className="fw-semibold">{idx.payment}</span></td>
                                                <td>
                                                    <div>
                                                        <span className="d-block fw-semibold">{idx.code}</span>
                                                        <span className="d-block fs-12 text-muted">{idx.card}</span>
                                                    </div>
                                                </td>
                                                <td><span className="badge bg-primary-transparent">{idx.status}</span></td>
                                                <td>
                                                    <div>
                                                        <span className="d-block fw-semibold">{idx.amount}</span>
                                                        <span className="d-block fs-12 text-muted">{idx.date}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <button className="btn btn-sm btn-outline-light btn-wave">
                                                        <i className="fe fe-eye text-muted align-middle me-1 d-inline-block"></i>
                                                        View
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Products Overview
                            </div>
                            <div className="d-sm-flex">
                                <div className="me-3 mb-3 mb-sm-0">
                                    <input className="form-control form-control-sm" type="text" placeholder="Search" aria-label=".form-control-sm example" />
                                </div>
                                <Dropdown className="dropdown">
                                    <Dropdown.Toggle as="a" href="#!" className="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sort By<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu dropdown-menu-end" role="menu">
                                        <Dropdown.Item as="li"><Link className="" href="#!">New</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!">Popular</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!">Relevant</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table text-nowrap table-striped table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Product Id</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Sales</th>
                                            <th scope="col">Revenue</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Products.map((idx) => (
                                            <tr key={Math.random()}>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-sm">
                                                                <img src={idx.src1} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="fs-14">{idx.heading}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">{idx.productid}</span>
                                                </td>
                                                <td>
                                                    {idx.price}
                                                </td>
                                                <td>
                                                    <span className={`badge bg-${idx.color}-transparent`}>{idx.status}</span>
                                                </td>
                                                <td>
                                                    <span className="">{idx.sales}</span>
                                                </td>
                                                <td>
                                                    <span className="">{idx.revenue}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                        <Card.Footer className="border-top-0">
                            <div className="d-flex align-items-center">
                                <div>
                                    Showing 5 Entries <i className="bi bi-arrow-right ms-2 fw-medium"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <ul className="pagination mb-0">
                                            <li className="page-item disabled">
                                                <Link className="page-link" href="#!" scroll={false}>
                                                    Prev
                                                </Link>
                                            </li>
                                            <li className="page-item active"><Link className="page-link" href="#!" scroll={false}>1</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#!" scroll={false}>2</Link></li>
                                            <li className="page-item">
                                                <Link className="page-link text-primary" href="#!" scroll={false}>
                                                    next
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Ecommerce;
