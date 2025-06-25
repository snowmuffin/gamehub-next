"use client";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Dropdown, Pagination, Row, Table } from "react-bootstrap";
import Link from "next/link";
import { Manageinvoices } from "@/shared/data/pages/invoice/invoivelistdata";
import dynamic from "next/dynamic";
import Seo from "@/shared/layout-components/seo/seo";
const CountUp = dynamic(() => import("react-countup"), { ssr: false });

const InvoiceList = () => {

    const [allData, setAllData] = useState(Manageinvoices);

    function handleRemove(id: number) {
        const newList = allData.filter((idx) => idx.id !== id);
        setAllData(newList);
    }

    return (
        <Fragment>
            <Seo title={"Invoice-List"} />
            <Row>
                <Col xl={9}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title className="">
                                Manage Invoices
                            </Card.Title>
                            <div className="d-flex">
                                <Button variant='' className="btn btn-sm btn-primary btn-wave waves-light"><i className="ri-add-line fw-semibold align-middle me-1"></i> Create Invoice</Button>
                                <Dropdown className="ms-2">
                                    <Dropdown.Toggle variant='' className="btn btn-icon btn-secondary-light btn-sm btn-wave waves-light no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ti ti-dots-vertical"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul">
                                        <Dropdown.Item href="#!">All Invoices</Dropdown.Item>
                                        <Dropdown.Item href="#!">Paid Invoices</Dropdown.Item>
                                        <Dropdown.Item href="#!">Pending Invoices</Dropdown.Item>
                                        <Dropdown.Item href="#!">Overdue Invoices</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="text-nowrap table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Client</th>
                                            <th scope="col">Invoice ID</th>
                                            <th scope="col">Issued Date</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">Status</th>

                                            <th scope="col">Due Date</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {allData.map((idx) => (
                                            <tr key={Math.random()}>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src={idx.src} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 fw-semibold">{idx.name}</p>
                                                            <p className="mb-0 fs-12 text-muted">{idx.mail}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <Link href="#!" scroll={false} className="fw-semibold text-primary">
                                                        {idx.invoiceid}
                                                    </Link>
                                                </td>
                                                <td>
                                                    {idx.date}
                                                </td>
                                                <td>
                                                    {idx.amount}
                                                </td>
                                                <td>
                                                    <span className={`badge bg-${idx.color}-transparent`}>{idx.status}</span>
                                                </td>

                                                <td>
                                                    {idx.duedate}
                                                </td>
                                                <td>
                                                    <Button variant='primary-light' className="btn  btn-icon btn-sm" data-bs-toggle="tooltip"
                                                        data-bs-placement="top" data-bs-title="Print"><i className="ri-printer-line"></i></Button>
                                                    <Button variant='danger-light' className="btn btn-icon ms-1 btn-sm" data-bs-toggle="tooltip" onClick={() => handleRemove(idx.id)}
                                                        data-bs-placement="top" data-bs-title="Delete"><i className="ri-delete-bin-5-line"></i></Button>

                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                        <div className="card-footer">
                            <nav aria-label="Page navigation">
                                <Pagination className="mb-0 float-end">
                                    <Pagination.Item disabled>Previous
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">1</Pagination.Item>
                                    <Pagination.Item active href="#!">2</Pagination.Item>
                                    <Pagination.Item href="#!">3</Pagination.Item>
                                    <Pagination.Item href="#!">Next</Pagination.Item>
                                </Pagination>
                            </nav>
                        </div>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
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
                                    <h6 className="mb-1 fs-12">Total Invoices</h6>
                                    <div className="pb-0 mt-0">
                                        <div>
                                            <h4 className="fs-18 fw-medium mb-2 d-flex align-items-center justify-content-between"><span className="count-up" data-count="548"><CountUp
                                                end={548}
                                                start={0}
                                                duration={4.94}
                                            /></span><span className="badge bg-primary fw-normal ms-2 fs-10 align-middle">
                                                    15,487
                                                </span> </h4>
                                            <p className="text-muted fs-11 mb-0 lh-1">
                                                <span className="text-success me-1 fw-medium d-inline-block">
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
                                    <h6 className="mb-1 fs-12">Paid Invoices</h6>
                                    <div className="pb-0 mt-0">
                                        <div>
                                            <h4 className="fs-18 fw-medium mb-2 d-flex align-items-center justify-content-between"><span className="count-up" data-count="451"><CountUp
                                                end={451}
                                                start={0}
                                                duration={4.94}
                                            /></span><span className="badge bg-success fw-normal ms-2 fs-10 align-middle">
                                                    5,221
                                                </span> </h4>
                                            <p className="text-muted fs-11 mb-0 lh-1">
                                                <span className="text-danger me-1 fw-medium d-inline-block">
                                                    <i className="ri-arrow-down-s-line me-1 align-middle"></i>1.16%
                                                </span>
                                                <span>this month</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom gap-3 d-flex border-block-end-dashed">
                                <div className="task-icon-background bg-warning-transparent text-warning mx-auto">
                                    <i className="ri-hourglass-fill fs-22"></i>
                                </div>
                                <div className="flex-fill">
                                    <h6 className="mb-1 fs-12"> Pending Invoices</h6>
                                    <div className="pb-0 mt-0">
                                        <div>
                                            <h4 className="fs-18 fw-medium mb-2 d-flex align-items-center justify-content-between"><span className="count-up" data-count="124"><CountUp
                                                end={124}
                                                start={0}
                                                duration={4.94}
                                            /></span><span className="badge bg-warning fw-normal ms-2 fs-10 align-middle">
                                                    12,115
                                                </span> </h4>
                                            <p className="text-muted fs-11 mb-0 lh-1">
                                                <span className="text-success me-1 fw-medium d-inline-block">
                                                    <i className="ri-arrow-up-s-line me-1 align-middle"></i>0.25%
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
                                    <h6 className="mb-1 fs-12">Overdue Invoices</h6>
                                    <div className="pb-0 mt-0">
                                        <div>
                                            <h4 className="fs-18 fw-medium mb-2 d-flex align-items-center justify-content-between"><span className="count-up" data-count="124"><CountUp
                                                end={124}
                                                start={0}
                                                duration={4.94}
                                            /></span><span className="badge bg-secondary fw-normal ms-2 fs-10 align-middle">
                                                    2,457
                                                </span> </h4>
                                            <p className="text-muted fs-11 mb-0 lh-1">
                                                <span className="text-danger me-1 fw-medium d-inline-block">
                                                    <i className="ri-arrow-down-s-line me-1 align-middle"></i>0.46%
                                                </span>
                                                <span>this month</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default InvoiceList;
