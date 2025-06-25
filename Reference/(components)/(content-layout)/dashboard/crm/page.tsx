"use client";
import { Crmrevenue, Leadsource, Performance, RecentLead, Revenuetarget, Topdeals } from "@/shared/data/dashboard/crmdata";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
const WorldMapCom = dynamic(() => import('@/shared/data/dashboard/mapdata'), { ssr: false });

const Crm = () => {

    return (
        <Fragment>
            <Seo title={"CRM"} />
            <Row>
                <Col xxl={3} md={6} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <Card.Body>
                            <div className="mb-3 d-flex align-items-start justify-content-between">
                                <div>
                                    <span className="avatar bg-primary-transparent">
                                        <i className="ti ti-wallet fs-5"></i>
                                    </span>
                                </div>
                                <div id="total-revenue1">
                                    <Crmrevenue />
                                </div>
                            </div>
                            <h4 className="fw-semibold mb-2">$73,239</h4>
                            <div className="d-flex align-items-center justify-content-between">
                                <span className="">Total Revenue</span>
                                <span className="badge bg-success-transparent"><i className="ti ti-trending-up me-1 align-middle"></i>+1.08%</span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} md={6} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <Card.Body>
                            <div className="mb-3 d-flex align-items-start justify-content-between">
                                <div>
                                    <span className="avatar bg-info-transparent">
                                        <i className="ti ti-users fs-5"></i>
                                    </span>
                                </div>
                                <div id="total-customers">
                                    <Crmrevenue />
                                </div>
                            </div>
                            <h4 className="fw-semibold mb-2">1,56,290</h4>
                            <div className="d-flex align-items-center justify-content-between">
                                <span className="">Total Customers</span>
                                <span className="badge bg-danger-transparent"><i className="ti ti-trending-down me-1 align-middle"></i>-0.56%</span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} md={6} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <Card.Body>
                            <div className="mb-3 d-flex align-items-start justify-content-between">
                                <div>
                                    <span className="avatar bg-success-transparent">
                                        <i className="ti ti-wave-square fs-5"></i>
                                    </span>
                                </div>
                                <div id="conversion-ratio">
                                    <Crmrevenue />
                                </div>
                            </div>
                            <h4 className="fw-semibold mb-2">16.87%</h4>
                            <div className="d-flex align-items-center justify-content-between">
                                <span className="">Conversion Ratio</span>
                                <span className="badge bg-success-transparent"><i className="ti ti-trending-up me-1 align-middle"></i>+4.63%</span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} md={6} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <Card.Body>
                            <div className="mb-3 d-flex align-items-start justify-content-between">
                                <div>
                                    <span className="avatar bg-danger-transparent">
                                        <i className="ti ti-briefcase fs-5"></i>
                                    </span>
                                </div>
                                <div id="total-deals">
                                    <Crmrevenue />
                                </div>
                            </div>
                            <h4 className="fw-semibold mb-2">$73,239</h4>
                            <div className="d-flex align-items-center justify-content-between">
                                <span className="">Total Deals</span>
                                <span className="badge bg-success-transparent"><i className="ti ti-trending-up me-1 align-middle"></i>+12.67%</span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12} xxl={6} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <div className="card-header">
                            <div className="card-title">Performance</div>
                        </div>
                        <Card.Body>
                            <div id="performance">
                                <Performance />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} xxl={3} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <div className="card-header">
                            <div className="card-title">
                                Revenue By Countries
                            </div>
                        </div>
                        <Card.Body>
                            <div id="revenue-target">
                                <Revenuetarget />

                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} xxl={3} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <div className="card-header">
                            <div className="card-title">
                                Lead Source Opportunities
                            </div>
                        </div>
                        <Card.Body>
                            <div id="lead_source">
                                <Leadsource />
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <div className="row gy-4">
                                <Col xl={6}>
                                    <div className="d-flex align-items-start gap-3">
                                        <div>
                                            <span className="avatar bg-primary-transparent">
                                                <i className="ri-phone-line fs-15"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <span className="d-block  fs-13">Call</span>
                                            <span className="d-block fw-semibold fs-16">1,754</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <div className="d-flex align-items-start gap-3">
                                        <div>
                                            <span className="avatar bg-primary-transparent">
                                                <i className="ri-mail-line fs-15"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <span className="d-block  fs-13">Email</span>
                                            <span className="d-block fw-semibold fs-16">634</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <div className="d-flex align-items-start gap-3">
                                        <div>
                                            <span className="avatar bg-primary-transparent">
                                                <i className="ri-pages-line fs-15"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <span className="d-block  fs-13">Website</span>
                                            <span className="d-block fw-semibold fs-16">878</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <div className="d-flex align-items-start gap-3">
                                        <div>
                                            <span className="avatar bg-primary-transparent">
                                                <i className="ri-user-search-line fs-15"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <span className="d-block  fs-13">Organic</span>
                                            <span className="d-block fw-semibold fs-16">470</span>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12} xxl={4} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <div className="card-header">
                            <div className="card-title">
                                Top Deals
                            </div>
                        </div>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table table-borderless table-striped text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Deal Value</th>
                                            <th>Company</th>
                                            <th>Sales</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Topdeals.map((idx) => (
                                            <tr key={Math.random()}>
                                                <td>
                                                    {idx.id}
                                                </td>
                                                <td>{idx.deal}</td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="avatar avatar-xs"><img src={idx.src1} alt="" /></div>
                                                        {idx.company}
                                                    </div>
                                                </td>
                                                <td>{idx.sale}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} xxl={5} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <div className="card-header">
                            <div className="card-title">
                                Customers By Countries
                            </div>
                        </div>
                        <div className="card-body p-5 country-map">
                            <WorldMapCom />
                        </div>
                    </Card>
                </Col>
                <Col xl={6} xxl={3} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <div className="card-header">
                            <div className="card-title">
                                Recent Leads
                            </div>
                        </div>
                        <Card.Body>
                            <ul className="list-unstyled crm-top-deals mb-0">
                                <li>
                                    <div className="d-flex align-items-center flex-wrap">
                                        <div className="me-3 lh-1">
                                            <span className="avatar avatar-sm bg-primary-transparent">
                                                <img src="../../assets/images/faces/10.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <span className="fs-14 d-block mb-0">Michael Jordan</span>
                                            <span className=" fs-12 d-block">michael.jordan@example.com</span>
                                        </div>
                                        <div>
                                            <span className="badge bg-primary-transparent">Warm Leads</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center flex-wrap">
                                        <div className="me-3 lh-1">
                                            <span className="avatar avatar-sm bg-primary-transparent">
                                                <img src="../../assets/images/faces/6.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <span className="fs-14 d-block mb-0">Emigo Kiaren</span>
                                            <span className=" fs-12 d-block">emigo.kiaren@gmail.com</span>
                                        </div>
                                        <div>
                                            <span className="badge bg-primary-transparent">Hot Leads</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center flex-wrap">
                                        <div className="me-3 lh-1">
                                            <span className="avatar avatar-sm bg-primary-transparent">
                                                <img src="../../assets/images/faces/12.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <span className="fs-14 d-block mb-0">Randy Origoan</span>
                                            <span className=" fs-12 d-block">randy.origoan@gmail.com</span>
                                        </div>
                                        <div>
                                            <span className="badge bg-primary-transparent">Cold Leads</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center flex-wrap">
                                        <div className="me-3 lh-1">
                                            <span className="avatar avatar-sm bg-primary-transparent">
                                                GP
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <span className="fs-14 d-block mb-0">George Pieterson</span>
                                            <span className=" fs-12 d-block">george.pieterson@gmail.com</span>
                                        </div>
                                        <div>
                                            <span className="badge bg-primary-transparent">Lost Leads</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center flex-wrap">
                                        <div className="me-3 lh-1">
                                            <span className="avatar avatar-sm bg-primary-transparent">
                                                <img src="../../assets/images/faces/5.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <span className="fs-14 d-block mb-0">Kiara Advain</span>
                                            <span className=" fs-12 d-block">kiaraadvain214@gmail.com</span>
                                        </div>
                                        <div>
                                            <span className="badge bg-primary-transparent">New Leads</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center flex-wrap">
                                        <div className="me-3 lh-1">
                                            <span className="avatar avatar-sm bg-primary-transparent">
                                                <img src="../../assets/images/faces/14.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <span className="fs-14 d-block mb-0">Martin Roy</span>
                                            <span className=" fs-12 d-block">Martinroy2132@gmail.com</span>
                                        </div>
                                        <div>
                                            <span className="badge bg-primary-transparent">Cold Leads</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
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
                        <div className="card-header">
                            <div className="card-title">
                                Deals Statistics
                            </div>
                        </div>
                        <div className="card-body px-0 pb-0">
                            <div className="table-responsive">
                                <Table className="table text-nowrap table-borderless table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">S.No </th>
                                            <th scope="col">Deal </th>
                                            <th scope="col">Sales Rep</th>
                                            <th scope="col">Mail</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">Location</th>
                                            <th scope="col">Sales Cycle length</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {RecentLead.map((idx) => (
                                            <tr key={Math.random()}>
                                                <td>
                                                    <span>
                                                        {idx.id}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="fw-semibold">{idx.data}</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-sm">
                                                                <img src={idx.src1} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="fs-14">{idx.data1}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {idx.mail}
                                                </td>
                                                <td>
                                                    <span className="fw-semibold fs-14">{idx.amount}</span>
                                                </td>
                                                <td>
                                                    <div className="d-inline-flex align-items-center">
                                                        <i className="ri-map-pin-fill text-primary fs-10"></i>
                                                        <span className="ms-1">{idx.location}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="">{idx.sale}</span>
                                                </td>
                                                <td>
                                                    <div className="hstack gap-2 fs-1">
                                                        <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-success-light btn-wave"><i className="ri-download-2-line"></i></Link>
                                                        <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-info-light btn-wave"><i className="ri-edit-line"></i></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Crm;
