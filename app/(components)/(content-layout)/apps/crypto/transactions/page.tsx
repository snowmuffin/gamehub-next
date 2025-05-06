"use client";
import React, { Fragment } from 'react';
import { Badge, Button, Card, Col, Dropdown, Form, Nav, OverlayTrigger, Pagination, Row, Tooltip } from 'react-bootstrap';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Historydata, InvoiceStats } from '@/shared/data/apps/crypto/transitiondata';
import Seo from '@/shared/layout-components/seo/seo';
const CountUp = dynamic(() => import("react-countup"), { ssr: false });
const Transcations = () => {
    return (
        <Fragment>
            <Seo title={"Transactions"} />
            <Row>
                <Col xl={3}>
                    <Card className=" custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="p-0">
                            <div className="p-3 border-bottom gap-3 d-flex border-block-end-dashed">
                                <div className="task-icon-background bg-primary-transparent text-primary mx-auto">
                                    <i className="ri-calendar-check-fill fs-22"></i>
                                </div>
                                <div className="flex-fill">
                                    <h6 className="mb-1 fs-12">New Transactions</h6>
                                    <div className="pb-0 mt-0">
                                        <div>
                                            <h4 className="fs-18 fw-medium mb-2 d-flex align-items-center justify-content-between"><span className="count-up" data-count="548"> <CountUp
                                                end={549}
                                                start={0}
                                                duration={4.94}
                                            /></span><span className="badge bg-primary fw-normal ms-2 fs-10 align-middle">
                                                    15,487
                                                </span> </h4>
                                            <p className="text-muted fs-11 mb-0 lh-1">
                                                <span className="text-success me-2 fw-medium d-inline-flex">
                                                    <i className="ri-arrow-up-s-line me-1 align-middle"></i>3.25%
                                                </span>
                                                <span>this month</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom gap-3 d-flex border-block-end-dashed">
                                <div className="task-icon-background bg-success-transparent text-success mx-auto">
                                    <i className="ri-checkbox-circle-fill fs-22"></i>
                                </div>
                                <div className="flex-fill">
                                    <h6 className="mb-1 fs-12">Completed Transactions</h6>
                                    <div className="pb-0 mt-0">
                                        <div>
                                            <h4 className="fs-18 fw-medium mb-2 d-flex align-items-center justify-content-between"><span className="count-up" data-count="451"> <CountUp
                                                end={451}
                                                start={0}
                                                duration={4.94}
                                            /></span><span className="badge bg-success fw-normal ms-2 fs-10 align-middle">
                                                    5,221
                                                </span> </h4>
                                            <p className="text-muted fs-11 mb-0 lh-1">
                                                <span className="text-danger me-2 fw-medium d-inline-flex">
                                                    <i className="ri-arrow-down-s-line me-1 align-middle"></i>1.16%
                                                </span>
                                                <span>this month</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom gap-3 d-flex border-block-end-dashed">
                                <div className="task-icon-background bg-success-transparent text-success mx-auto">
                                    <i className="ri-checkbox-circle-fill fs-22"></i>
                                </div>
                                <div className="flex-fill">
                                    <h6 className="mb-1 fs-12">Completed Transactions</h6>
                                    <div className="pb-0 mt-0">
                                        <div>
                                            <h4 className="fs-18 fw-medium mb-2 d-flex align-items-center justify-content-between"><span className="count-up" data-count="451"><CountUp
                                                end={124}
                                                start={0}
                                                duration={4.94}
                                            /></span><span className="badge bg-success fw-normal ms-2 fs-10 align-middle">
                                                    5,221
                                                </span> </h4>
                                            <p className="text-muted fs-11 mb-0 lh-1">
                                                <span className="text-danger me-2 fw-medium d-inline-flex">
                                                    <i className="ri-arrow-down-s-line me-1 align-middle"></i>1.16%
                                                </span>
                                                <span>this month</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom gap-3 d-flex border-block-end-dashed">
                                <div className="task-icon-background bg-secondary-transparent text-secondary mx-auto">
                                    <i className="ri-progress-5-line fs-22"></i>
                                </div>
                                <div className="flex-fill">
                                    <h6 className="mb-1 fs-12">Ongoing Transactions</h6>
                                    <div className="pb-0 mt-0">
                                        <div>
                                            <h4 className="fs-18 fw-medium mb-2 d-flex align-items-center justify-content-between"><span className="count-up" data-count="124">   <CountUp
                                                end={125}
                                                start={0}
                                                duration={4.94}
                                            /></span><span className="badge bg-secondary fw-normal ms-2 fs-10 align-middle">
                                                    2,457
                                                </span> </h4>
                                            <p className="text-muted fs-11 mb-0 lh-1">
                                                <span className="text-danger me-2 fw-medium d-inline-flex">
                                                    <i className="ri-arrow-down-s-line me-1 align-middle"></i>0.46%
                                                </span>
                                                <span>this month</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 pb-2">
                                <p className="fs-15 fw-semibold">Transactions Statistics <span className="text-muted fw-normal">(Last 6 months) :</span></p>
                                <div id="transactions"><InvoiceStats /></div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={9}>
                    <Card className=" custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Transaction History
                            </Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <div>
                                    <Form.Control className=" form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <Dropdown>
                                    <Dropdown.Toggle className="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sort By
                                        <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as='ul' role="menu">
                                        <Dropdown.Item as='li' href="#!">This Week</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!">This Month</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!">This Year</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <div>
                                    <Button className="btn btn-secondary btn-sm btn-wave">View All</Button>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <table className="table text-nowrap table-bordered">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th scope="col">Sender</th>
                                            <th scope="col">Transaction Hash</th>
                                            <th scope="col">Coin</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">Receiver</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Historydata.map((idx) => (
                                            <tr key={Math.random()}>
                                                <td>
                                                    <span className="avatar avatar-sm avatar-rounded bg-light">
                                                        <i className={`ti ti-arrow-narrow-${idx.class} text-${idx.color1} fw-semibold fs-16`}></i>
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src={idx.src1} alt="" />
                                                        </span>
                                                        <div className="fw-semibold">{idx.name}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>#{idx.cell}</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src={idx.src2} alt="" />
                                                        </span>
                                                        <div className="fw-semibold">{idx.coin}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>{idx.date}</span>
                                                </td>
                                                <td>
                                                    <span className={`text-${idx.color1}`}>{idx.amount}</span>
                                                </td>
                                                <td>
                                                    <span>{idx.text1}</span>
                                                </td>
                                                <td>
                                                    <span className={`badge bg-${idx.color2}-transparent`}>{idx.text2}</span>
                                                </td>
                                                <td>
                                                    <Button variant='' className="btn btn-primary-light btn-icon btn-sm">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>download</Tooltip>}>
                                                            <i className="ri-download-2-line"></i></OverlayTrigger>
                                                    </Button>
                                                    <Button variant='' className="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                            <i className="ri-delete-bin-5-line"></i>
                                                        </OverlayTrigger>
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <Pagination className="pagination justify-content-end">
                                <Pagination.Item className=" disabled">
                                    Previous
                                </Pagination.Item>
                                <Pagination.Item className="">1</Pagination.Item>
                                <Pagination.Item className="active">2</Pagination.Item>
                                <Pagination.Item className="">3</Pagination.Item>
                                <Pagination.Item className="">
                                    Next
                                </Pagination.Item>
                            </Pagination>
                        </Card.Footer>
                    </Card>
                </Col>

            </Row>
        </Fragment>
    );
};

export default Transcations;
