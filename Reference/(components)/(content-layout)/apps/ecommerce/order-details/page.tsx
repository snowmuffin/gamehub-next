"use client";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Accordion, Button, Card, Col, Row, Table } from "react-bootstrap";

const OrderDetails = () => {

    const print = () => {
        window.print();
    };

    return (
        <Fragment>
            <Seo title={"Order Details"} />
            <Row>
                <Col xl={9}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Header className=" d-flex justify-content-between pb-3">
                                    <div className="card-title">
                                        Order No - <span className="text-primary">#SPK-5684</span>
                                    </div>
                                    <div>
                                        <span className="badge bg-primary-transparent">
                                            Estimated delivery : 12,Dec 2023
                                        </span>
                                    </div>
                                </Card.Header>
                                <Card.Body className=" p-0">
                                    <div className="table-responsive">
                                        <Table className="text-nowrap">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Item</th>
                                                    <th scope="col">Tracking ID</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Quantity</th>
                                                    <th scope="col">Total Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-start">
                                                            <div className="me-3">
                                                                <span className="avatar avatar-xxl bg-light">
                                                                    <img src="../../../assets/images/ecommerce/jpg/12.jpg" alt="" />
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <div className="mb-1 fs-14 fw-medium">
                                                                    <Link href="#!" scroll={false}> Wireless earbuds, 50H Battery Fast Charging</Link>
                                                                </div>
                                                                <div className="mb-2">
                                                                    <span className="me-1">Color:</span><span className="fw-normal text-muted">White</span>
                                                                </div>
                                                                <div className=" gap-3">
                                                                    <span className="me-1">Size:</span><span className="fw-normal text-muted">8mm</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td><Link href="#!" scroll={false} className="text-primary">SPK1218153635</Link></td>
                                                    <td>
                                                        <span className="fs-15 fw-medium">$2,199</span>
                                                    </td>
                                                    <td>1</td>
                                                    <td>$2,199</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-start">
                                                            <div className="me-3">
                                                                <span className="avatar avatar-xxl bg-light">
                                                                    <img src="../../../assets/images/ecommerce/jpg/15.jpg" alt="" />
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <div className="mb-1 fs-14 fw-medium">
                                                                    <Link href="#!" scroll={false}>Designed Small Mini Hang Bag for Women</Link>
                                                                </div>
                                                                <div className="mb-2">
                                                                    <span className="me-1">Color:</span><span className="fw-normal text-muted">Tri-color</span>
                                                                </div>
                                                                <div className=" gap-3">
                                                                    <span className="me-1">Size:</span><span className="fw-normal text-muted">15 inches</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td><Link href="#!" scroll={false} className="text-primary">SPK3789423789</Link></td>
                                                    <td>
                                                        <span className="fs-15 fw-medium">$299</span>
                                                    </td>
                                                    <td>2</td>
                                                    <td>$598</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-start">
                                                            <div className="me-3">
                                                                <span className="avatar avatar-xxl bg-light">
                                                                    <img src="../../../assets/images/ecommerce/jpg/9.jpg" alt="" />
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <div className="mb-1 fs-14 fw-medium">
                                                                    <Link href="#!" scroll={false}>Remote control drone with HD Camera 1000mh Mini Battery</Link>
                                                                </div>
                                                                <div className="mb-2">
                                                                    <span className="me-1">Color:</span><span className="fw-normal text-muted">Smoke White</span>
                                                                </div>
                                                                <div className=" gap-3">
                                                                    <span className="me-1">Size:</span><span className="fw-normal text-muted"> Medium </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td><Link href="#!" scroll={false} className="text-primary">SPK1120324532</Link></td>
                                                    <td>
                                                        <span className="fs-15 fw-medium">$648</span>
                                                    </td>
                                                    <td>1</td>
                                                    <td>$648</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card.Body>
                                <Row>
                                    <Col xxl={4}>
                                        <div className="p-3">
                                            <div className="fw-medium pb-2 border-bottom border-block-end-dashed">
                                                Delivery
                                            </div>
                                            <div className="d-flex gap-3 mt-3 align-items-start">
                                                <div className="fs-14 fw-medium">Address: </div>
                                                <div className="ms-auto">
                                                    <div className="fs-13 op-8">34A/45-354, B-Block, PNN Street, Anytown</div>
                                                    <div className="fs-13 op-8">New California, Texas,USA, 1200000.</div>
                                                </div>
                                            </div>
                                            <div className="d-flex gap-3 mt-3 align-items-start">
                                                <div className="fs-14 fw-medium">Method: </div>
                                                <div>
                                                    <div className="fs-13 op-8">FedEx</div>
                                                    <div className="fs-13 op-8">Delivered on 27 Nov 2023 (2 days after placing the order)</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={4}>
                                        <div className="p-3">
                                            <div className="fw-medium pb-2 border-bottom border-block-end-dashed">
                                                Order Info
                                            </div>
                                            <div className="d-flex gap-3 mt-3 align-items-center">
                                                <div className="fs-14 fw-medium">Order Date: </div>
                                                <div className="fs-13 op-8">25 Nov 2023</div>
                                            </div>
                                            <div className="d-flex gap-3 mt-3 align-items-center">
                                                <div className="fs-14 fw-medium">Order ID:</div>
                                                <div className="fs-13 op-8"> SPK1218153635 </div>
                                            </div>
                                            <div className="d-flex gap-3 mt-3 align-items-center">
                                                <div className="fs-14 fw-medium">Order Number:</div>
                                                <div className="fs-13 op-8"> #SPK-5684 </div>
                                            </div>
                                            <div className="d-flex gap-3 mt-3 align-items-center">
                                                <div className="fs-14 fw-medium">Order Status:</div>
                                                <div className="fs-13 op-8 text-success"> Dispatched </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={4}>
                                        <div className="p-3 border-inline-end border-block-start-dashed">
                                            <div className="fw-medium pb-2 border-bottom border-block-end-dashed">
                                                Order summary
                                            </div>
                                            <div className="table-responsive">
                                                <table className="table text-nowrap table-borderless">
                                                    <tbody>
                                                        <tr>
                                                            <td className="pb-0">
                                                                <div className="fw-medium">Sub Total(4 items) :</div>
                                                            </td>
                                                            <td className="pb-0">
                                                                $3,100
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="pb-0">
                                                                <div className="fw-medium">Applied Coupon :</div>
                                                            </td>
                                                            <td className="pb-0">
                                                                <span className="badge bg-success-transparent">SPKFIR</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="pb-0">
                                                                <div className="fw-medium">Delivery Fees :</div>
                                                            </td>
                                                            <td className="pb-0">
                                                                <span className="text-danger">+$29</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="pb-0">
                                                                <div className="fw-semibold">Order Total Price :</div>
                                                            </td>
                                                            <td className="pb-0">
                                                                <span className="fs-16 fw-semibold">$3,129</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Card.Footer>
                                    <div className="btn-list float-end">
                                        <Button variant="" className="btn btn-primary btn-wave btn-sm" onClick={() => print()}><i className="ri-printer-line me-1 align-middle d-inline-block"></i>Print</Button>
                                        <Button variant="" className="btn btn-secondary btn-wave btn-sm"><i className="ri-share-forward-line me-1 align-middle d-inline-block"></i>Share Details</Button>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header className="">
                            <div className="card-title">
                                Order Tracking
                            </div>
                            <div className="ms-auto text-success">#SPK1218153635</div>
                        </Card.Header>
                        <Card.Body>
                            <div className="order-track">
                                <Accordion className="" id="basicAccordion" defaultActiveKey="1">
                                    <Accordion.Item className="border-0 bg-transparent" eventKey="1">
                                        <Accordion.Header className="" id="headingOne">
                                            <Link className="px-0 pt-0" href="#!" scroll={false} role="button" data-bs-toggle="collapse" data-bs-target="#basicOne" aria-expanded="true" aria-controls="basicOne">
                                                <div className="d-flex mb-0">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../../assets/images/ecommerce/png/20.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-medium mb-0 fs-14 pt-1">Order Placed</p>
                                                        <span className="fs-11 text-success">Dec 07, 2023</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Accordion.Header>
                                        <Accordion.Body className="pt-0 ps-5">
                                            <div className="fs-11">
                                                <p className="mb-0"> Successfully placed an order by <Link href="#!" scroll={false} className="font-weight-semibold text-primary">	Jayan Glen</Link></p>
                                                <span className="text-muted op-5">Dec 07, 2023, 18:42</span>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <Accordion className="" id="basicAccordion1" defaultActiveKey="1">
                                    <Accordion.Item eventKey="1" className="accordion-item border-0 bg-transparent">
                                        <Accordion.Header className="" id="headingTwo">
                                            <Link className="px-0 pt-0" href="#!" scroll={false} role="button" data-bs-toggle="collapse" data-bs-target="#basicTwo" aria-expanded="true" aria-controls="basicTwo">
                                                <div className="d-flex mb-0">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../../assets/images/ecommerce/png/19.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-medium mb-0 fs-14">Picked</p>
                                                        <span className="fs-12">Dec 07, 18:20</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Accordion.Header>
                                        <div id="basicTwo" className="accordion-collapse show collapse border-top-0" aria-labelledby="headingTwo" data-bs-parent="#basicAccordion1">
                                            <Accordion.Body className="pt-0 ps-5">
                                                <div className="fs-11">
                                                    <p className="mb-0"><span className="font-weight-semibold">Modern Services </span>has successfully picked up your order.</p>
                                                    <span className="text-muted op-5">Dec 07, 2023, 18:42</span>
                                                </div>
                                            </Accordion.Body>
                                        </div>
                                    </Accordion.Item>
                                </Accordion>
                                <Accordion className="accordion" defaultActiveKey="1" id="basicAccordion2">
                                    <Accordion.Item eventKey="1" className="accordion-item border-0 bg-transparent">
                                        <Accordion.Header className="" id="headingThree">
                                            <Link className="px-0 pt-0" href="#!" scroll={false} role="button" data-bs-toggle="collapse" data-bs-target="#basicThree" aria-expanded="true" aria-controls="basicThree">
                                                <div className="d-flex mb-0">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../../assets/images/ecommerce/png/18.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-medium mb-0 fs-14">Shipping</p>
                                                        <span className="fs-12">Dec 07, 18:20</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Accordion.Header>
                                        <div id="basicThree" className="accordion-collapse show collapse border-top-0" aria-labelledby="headingThree" data-bs-parent="#basicAccordion2">
                                            <Accordion.Body className="pt-0 ps-5">
                                                <div className="fs-11 mb-3">
                                                    <p className="mb-0">Arrived <span className="font-weight-semibold">Mordern Services Warehouse</span></p>
                                                    <span className="text-muted op-5">Dec 07, 2023, 18:42</span>
                                                </div>
                                                <div className="fs-11 mb-3">
                                                    <p className="mb-0">Picked up by <span className="font-weight-semibold">Mordern Services Agent</span> and on the way to Hyderabad</p>
                                                    <span className="text-muted op-5">Dec 07, 2023, 18:42</span>
                                                </div>
                                                <div className="fs-11">
                                                    <p className="mb-0"> Arrived in Hyderabad, and the expected delivery is scheduled for <span className="font-weight-semibold">Apr 16, 2023</span> </p>
                                                    <span className="text-muted op-5">Dec 07, 2023, 18:42</span>
                                                </div>
                                            </Accordion.Body>
                                        </div>
                                    </Accordion.Item>
                                </Accordion>
                                <Accordion className="accordion" id="basicAccordion3">
                                    <div className="accordion-item border-0 bg-transparent next-step">
                                        <Accordion.Header className="" id="headingFour">
                                            <Link className="collapsed px-0 pt-0" href="#!" scroll={false} role="button" data-bs-toggle="collapse" data-bs-target="#basicFour" aria-expanded="true" aria-controls="basicFour">
                                                <div className="d-flex mb-2">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded bg-primary-transparent text-primary border"><i className="fe fe-package fs-12"></i></span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-medium mb-0 fs-14">Out For Delivery</p>
                                                        <span className="text-muted fs-12">Dec 07, 18:20 (expected)</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Accordion.Header>
                                        <div id="basicFour" className="accordion-collapse border-top-0" aria-labelledby="headingFour" data-bs-parent="#basicAccordion3">
                                            <Accordion.Body className="pt-0 ps-5">
                                                <div className="fs-11">
                                                    <p className="mb-0">Your order is out for delivery</p>
                                                    <span className="text-muted op-5">Dec 07, 2023, 18:42 (expected)</span>
                                                </div>
                                            </Accordion.Body>
                                        </div>
                                    </div>
                                </Accordion>
                                <Accordion className="accordion" id="basicAccordion4">
                                    <div className="accordion-item border-0 bg-transparent next-step">
                                        <Accordion.Header className="" id="headingFive">
                                            <Link className="collapsed px-0 pt-0" href="#!" scroll={false} role="button" data-bs-toggle="collapse" aria-expanded="true" >
                                                <div className="d-flex mb-2">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded bg-primary-transparent text-primary border"><i className="fe fe-package fs-12"></i></span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-medium mb-0 fs-14">Delivered</p>
                                                        <span className="fs-12 text-muted">Dec 07, 18:42</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Accordion.Header>
                                    </div>
                                </Accordion>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default OrderDetails;
