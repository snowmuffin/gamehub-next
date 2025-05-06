"use client";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, Form, Pagination, Row } from "react-bootstrap";

const Orders = () => {
    return (
        <Fragment>
            <Seo title={"Orders"} />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className=" d-flex align-items-center flex-wrap">
                            <div className="flex-fill">
                                <span className="mb-0 fs-14 text-muted">Total number of orders placed : <span className="fw-medium text-success">32</span></span>
                            </div>
                            <Dropdown className="">
                                <Dropdown.Toggle className="btn btn-light dropdown-toggle m-1" variant="light" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sort By
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Date</Link></Dropdown.Item>
                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Price</Link></Dropdown.Item>
                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Category</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <div className="d-flex align-items-center m-1" role="search">
                                <Form.Control className="" type="search" placeholder="Search" aria-label="Search" />
                                <Button variant="light" className="btn ms-2" type="submit">Search</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6} sm={12} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header className="text-default border-bottom border-block-end-dashed pb-3 justify-content-between">
                            <div className="">
                                <div className="fs-14 fw-medium">ORDER PLACED: </div>
                                <div className="fs-13 op-8">25 Nov 2023</div>
                            </div>
                            <div className="">
                                <div className="fs-14 fw-medium">SHIP TO: </div>
                                <div className="fs-13 op-8">A-454-B/5 Willow Lane, Riverroad, Springfield, US</div>
                            </div>
                            <div className="">
                                <div className="fs-14 fw-medium">TOTAL PRICE: </div>
                                <div className="fs-13 op-8">$499.89</div>
                            </div>
                            <div className="">
                                <div className="fs-14 fw-medium">ORDER ID: </div>
                                <div className="fs-13 op-8">#SPK-12034115</div>
                            </div>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="d-sm-flex d-block">
                                <div className="me-3">
                                    <span className="avatar bg-light avatar-xxl mb-1 mb-sm-0">
                                        <img src="../../../assets/images/ecommerce/jpg/1.jpg" alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <Link href="#!" scroll={false}>
                                        <span className="fs-14 fw-medium">Lumina X5 (Midnight Black, 3GB RAM)</span>
                                    </Link>
                                    <ul className="list-unstyled mb-0">
                                        <li className="text-muted fs-12">64GB storage</li>
                                        <li className="text-muted fs-12">MVH Fast Charging technology</li>
                                        <li className="text-muted fs-12">High-resolution camera</li>
                                    </ul>
                                </div>
                                <div className="d-flex align-self-end gap-2">
                                    <span className="fs-14 fw-medium">Order Status :</span>
                                    <span className="d-sm-block"><span className="badge bg-success-transparent">Shipped</span></span>
                                </div>
                            </div>
                        </Card.Body>
                        <div className="card-footer d-sm-flex d-block align-items-center justify-content-between border-block-start-dashed border-top">
                            <div><span className="fw-medium me-2 fs-14">Delivery Date:</span><span className="fs-13 op-8">28 Nov 202</span>3</div>
                            <div className="mt-sm-0 mt-2">
                                <Button variant="" className="btn btn-sm btn-outline-danger">Cancel Order</Button>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xxl={6} sm={12} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header className="text-default border-bottom border-block-end-dashed pb-3 justify-content-between">
                            <div className="">
                                <div className="fs-14 fw-medium">ORDER PLACED: </div>
                                <div className="fs-13 op-8">28 Nov 2023</div>
                            </div>
                            <div className="">
                                <div className="fs-14 fw-medium">SHIP TO: </div>
                                <div className="fs-13 op-8">A-454-B/5 Willow Lane, Riverroad, Springfield, US</div>
                            </div>
                            <div className="">
                                <div className="fs-14 fw-medium">TOTAL PRICE: </div>
                                <div className="fs-13 op-8">$1,548.89</div>
                            </div>
                            <div className="">
                                <div className="fs-14 fw-medium">ORDER ID: </div>
                                <div className="fs-13 op-8">#SPK-12784106</div>
                            </div>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="d-sm-flex d-block">
                                <div className="me-3">
                                    <span className="avatar bg-light avatar-xxl mb-1 mb-sm-0">
                                        <img src="../../../assets/images/ecommerce/jpg/2.jpg" alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <Link href="#!" scroll={false}>
                                        <span className="fs-14 fw-medium">Harmony Pro Wireless Headphone</span>
                                    </Link>
                                    <ul className="list-unstyled mb-0">
                                        <li className="text-muted fs-12">Bluetooth 5 Connectivity</li>
                                        <li className="text-muted fs-12">2X speed</li>
                                        <li className="text-muted fs-12">18hrs Battery Life</li>
                                    </ul>
                                </div>
                                <div className="d-flex align-self-end gap-2">
                                    <span className="fs-14 fw-medium">Order Status :</span>
                                    <span className="d-sm-block"><span className="badge bg-secondary-transparent">Confirmed</span></span>
                                </div>
                            </div>
                        </Card.Body>
                        <div
                            className="card-footer d-sm-flex d-block align-items-center justify-content-between border-block-start-dashed border-top">
                            <div><span className="fw-medium me-2 fs-14">Delivery Date:</span><span className="fs-13 op-8">03 Dec 2023</span>
                            </div>
                            <div className="mt-sm-0 mt-2">
                                <Button variant="" className="btn btn-sm btn-outline-danger">Cancel Order</Button>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xxl={6} sm={12} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header className="text-default border-bottom border-block-end-dashed pb-3 justify-content-between">
                            <div className="">
                                <div className="fs-14 fw-medium">ORDER PLACED: </div>
                                <div className="fs-13 op-8">12 Dec 2023</div>
                            </div>
                            <div className="">
                                <div className="fs-14 fw-medium">SHIP TO: </div>
                                <div className="fs-13 op-8">A-454-B/5 Willow Lane, Riverroad, Springfield, US</div>
                            </div>
                            <div className="">
                                <div className="fs-14 fw-medium">TOTAL PRICE: </div>
                                <div className="fs-13 op-8">$203.00</div>
                            </div>
                            <div className="">
                                <div className="fs-14 fw-medium">ORDER ID: </div>
                                <div className="fs-13 op-8">#SPK-845722210</div>
                            </div>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="d-sm-flex d-block">
                                <div className="me-3">
                                    <span className="avatar bg-light avatar-xxl mb-1 mb-sm-0">
                                        <img src="../../../assets/images/ecommerce/jpg/3.jpg" alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <Link href="#!" scroll={false}>
                                        <span className="fs-14 fw-medium">ZenTime Analog Alarm Clock</span>
                                    </Link>
                                    <ul className="list-unstyled mb-0">
                                        <li className="text-muted fs-12">Metal Platted</li>
                                        <li className="text-muted fs-12">8.8 x 12.6 x 6.6 cm</li>
                                        <li className="text-muted fs-12">Snooze buzzer</li>
                                    </ul>
                                </div>
                                <div className="d-flex align-self-end gap-2">
                                    <span className="fs-14 fw-medium">Order Status :</span>
                                    <span className="d-sm-block"><span className="badge bg-secondary-transparent">Confirmed</span></span>
                                </div>
                            </div>
                        </Card.Body>
                        <div
                            className="card-footer d-sm-flex d-block align-items-center justify-content-between border-block-start-dashed border-top">
                            <div><span className="fw-medium me-2 fs-14">Delivery Date:</span><span className="fs-13 op-8">20 Dec 2023</span>
                            </div>
                            <div className="mt-sm-0 mt-2">
                                <Button variant="" className="btn btn-sm btn-outline-danger">Cancel Order</Button>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xxl={6} sm={12} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header className="text-default border-bottom border-block-end-dashed pb-3 justify-content-between">
                            <div className="">
                                <div className="fs-14 fw-medium">ORDER PLACED: </div>
                                <div className="fs-13 op-8">10 Dec 2023</div>
                            </div>
                            <div className="">
                                <div className="fs-14 fw-medium">SHIP TO: </div>
                                <div className="fs-13 op-8">A-454-B/5 Willow Lane, Riverroad, Springfield, US</div>
                            </div>
                            <div className="">
                                <div className="fs-14 fw-medium">TOTAL PRICE: </div>
                                <div className="fs-13 op-8">$1,999.00</div>
                            </div>
                            <div className="">
                                <div className="fs-14 fw-medium">ORDER ID: </div>
                                <div className="fs-13 op-8">#SPK-144140041</div>
                            </div>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="d-sm-flex d-block">
                                <div className="me-3">
                                    <span className="avatar bg-light avatar-xxl mb-1 mb-sm-0">
                                        <img src="../../../assets/images/ecommerce/jpg/4.jpg" alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <Link href="#!" scroll={false}>
                                        <span className="fs-14 fw-medium">Opulent Blossom Elegance Perfume For Women</span>
                                    </Link>
                                    <ul className="list-unstyled mb-0">
                                        <li className="text-muted fs-12">Eternal Florals</li>
                                        <li className="text-muted fs-12">Long-Lasting Fragrance</li>
                                        <li className="text-muted fs-12">100ml Liquid </li>
                                    </ul>
                                </div>
                                <div className="d-flex align-self-end gap-2">
                                    <span className="fs-14 fw-medium">Order Status :</span>
                                    <span className="d-sm-block"><span className="badge bg-danger-transparent">Cancelled</span></span>
                                </div>
                            </div>
                        </Card.Body>
                        <div
                            className="card-footer d-sm-flex d-block align-items-center justify-content-between border-block-start-dashed border-top">
                            <div className="mt-sm-0 mt-2 ms-auto">
                                <Button variant="" className="btn btn-sm btn-danger disabled me-2">Cancelled Order</Button>
                                <Button variant="" className="btn btn-sm btn-outline-primary">Buy Now</Button>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xxl={6} sm={12} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header className="text-default border-bottom border-block-end-dashed pb-3 justify-content-between">
                            <div className="">
                                <div className="fs-14 fw-medium">ORDER PLACED: </div>
                                <div className="fs-13 op-8">12 Dec 2023</div>
                            </div>
                            <div className="">
                                <div className="fs-14 fw-medium">SHIP TO: </div>
                                <div className="fs-13 op-8">A-454-B/5 Willow Lane, Riverroad, Springfield, US</div>
                            </div>
                            <div className="">
                                <div className="fs-14 fw-medium">TOTAL PRICE: </div>
                                <div className="fs-13 op-8">$3,459.99</div>
                            </div>
                            <div className="">
                                <div className="fs-14 fw-medium">ORDER ID: </div>
                                <div className="fs-13 op-8">#SPK-7841241110</div>
                            </div>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="d-sm-flex d-block">
                                <div className="me-3">
                                    <span className="avatar bg-light avatar-xxl mb-1 mb-sm-0">
                                        <img src="../../../assets/images/ecommerce/jpg/5.jpg" alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <Link href="#!" scroll={false}>
                                        <span className="fs-14 fw-medium"> NexusLink AI Connect Smart Watch( Black )</span>
                                    </Link>
                                    <ul className="list-unstyled mb-0">
                                        <li className="text-muted fs-12">2.18 inch Display</li>
                                        <li className="text-muted fs-12">5G SIM/Wi-Fi</li>
                                        <li className="text-muted fs-12">Apps control, Free Size </li>
                                    </ul>
                                </div>
                                <div className="d-flex align-self-end gap-2">
                                    <span className="fs-14 fw-medium">Order Status :</span>
                                    <span className="d-sm-block"><span className="badge bg-success-transparent">Delivered</span></span>
                                </div>
                            </div>
                        </Card.Body>
                        <div
                            className="card-footer d-sm-flex d-block align-items-center justify-content-between border-block-start-dashed border-top">
                            <div><span className="fw-medium me-2 fs-14">Delivered Date:</span><span className="fs-13 op-8">13 Dec 2023</span>
                            </div>
                            <div className="mt-sm-0 mt-2 ms-auto">
                                <Button variant="" className="btn btn-sm btn-outline-primary">Rate Product<i className="bi bi-star-fill ms-2 fs-12 text-warning"></i></Button>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xxl={6} sm={12} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header className="text-default border-bottom border-block-end-dashed pb-3 justify-content-between">
                            <div className="">
                                <div className="fs-14 fw-medium">ORDER PLACED: </div>
                                <div className="fs-13 op-8">18 Dec 2023</div>
                            </div>
                            <div className="">
                                <div className="fs-14 fw-medium">SHIP TO: </div>
                                <div className="fs-13 op-8">A-454-B/5 Willow Lane, Riverroad, Springfield, US</div>
                            </div>
                            <div className="">
                                <div className="fs-14 fw-medium">TOTAL PRICE: </div>
                                <div className="fs-13 op-8">$4,450.00</div>
                            </div>
                            <div className="">
                                <div className="fs-14 fw-medium">ORDER ID: </div>
                                <div className="fs-13 op-8">#SPK-45871555000</div>
                            </div>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="d-sm-flex d-block">
                                <div className="me-3">
                                    <span className="avatar bg-light avatar-xxl mb-1 mb-sm-0">
                                        <img src="../../../assets/images/ecommerce/jpg/6.jpg" alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <Link href="#!" scroll={false}>
                                        <span className="fs-14 fw-medium"> SwiftFlex Performance Pro Sports Shoes</span>
                                    </Link>
                                    <ul className="list-unstyled mb-0">
                                        <li className="text-muted fs-12">Dynamic Cushioning</li>
                                        <li className="text-muted fs-12">Size: 5, Grey Color</li>
                                        <li className="text-muted fs-12">Multi-Sport Versatility</li>
                                    </ul>
                                </div>
                                <div className="d-flex align-self-end gap-2">
                                    <span className="fs-14 fw-medium">Order Status :</span>
                                    <span className="d-sm-block"><span className="badge bg-success-transparent">Shipped</span></span>
                                </div>
                            </div>
                        </Card.Body>
                        <div
                            className="card-footer d-sm-flex d-block align-items-center justify-content-between border-block-start-dashed border-top">
                            <div><span className="fw-medium me-2 fs-14">Delivery Date:</span><span className="fs-13 op-8">31 Dec 2023</span>
                            </div>
                            <div className="mt-sm-0 mt-2 ms-auto">
                                <Button variant="" className="btn btn-sm btn-outline-danger">Cancel Order</Button>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xxl={6} sm={12} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header className="text-default border-bottom border-block-end-dashed pb-3 justify-content-between">
                            <div className="">
                                <div className="fs-14 fw-medium">ORDER PLACED: </div>
                                <div className="fs-13 op-8">26 Dec 2023</div>
                            </div>
                            <div className="">
                                <div className="fs-14 fw-medium">SHIP TO: </div>
                                <div className="fs-13 op-8">A-454-B/5 Willow Lane, Riverroad, Springfield, US</div>
                            </div>
                            <div className="">
                                <div className="fs-14 fw-medium">TOTAL PRICE: </div>
                                <div className="fs-13 op-8">$1,599.00</div>
                            </div>
                            <div className="">
                                <div className="fs-14 fw-medium">ORDER ID: </div>
                                <div className="fs-13 op-8">#SPK-68441141580</div>
                            </div>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="d-sm-flex d-block">
                                <div className="me-3">
                                    <span className="avatar bg-light avatar-xxl mb-1 mb-sm-0">
                                        <img src="../../../assets/images/ecommerce/jpg/7.jpg" alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <Link href="#!" scroll={false}>
                                        <span className="fs-14 fw-medium">LuxeSolo Comfort Single Pink Chair </span>
                                    </Link>
                                    <ul className="list-unstyled mb-0">
                                        <li className="text-muted fs-12">Living Room Chair</li>
                                        <li className="text-muted fs-12">Support Back</li>
                                        <li className="text-muted fs-12">50 x 42 x 80 Centimeters</li>
                                    </ul>
                                </div>
                                <div className="d-flex align-self-end gap-2">
                                    <span className="fs-14 fw-medium">Order Status :</span>
                                    <span className="d-sm-block"><span className="badge bg-warning-transparent">Out For Delivery</span></span>
                                </div>
                            </div>
                        </Card.Body>
                        <div
                            className="card-footer d-sm-flex d-block align-items-center justify-content-between border-block-start-dashed border-top">
                            <div><span className="fw-medium me-2 fs-14">Delivery Date:</span><span className="fs-13 op-8">02 Jan 2024</span>
                            </div>
                            <div className="mt-sm-0 mt-2 ms-auto">
                                <Button variant="" className="btn btn-sm btn-outline-danger">Cancel Order</Button>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xxl={6} sm={12} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header className="text-default border-bottom border-block-end-dashed pb-3 justify-content-between">
                            <div className="">
                                <div className="fs-14 fw-medium">ORDER PLACED: </div>
                                <div className="fs-13 op-8">05 Jan 2024</div>
                            </div>
                            <div className="">
                                <div className="fs-14 fw-medium">SHIP TO: </div>
                                <div className="fs-13 op-8">A-454-B/5 Willow Lane, Riverroad, Springfield, US</div>
                            </div>
                            <div className="">
                                <div className="fs-14 fw-medium">TOTAL PRICE: </div>
                                <div className="fs-13 op-8">$1,390.00</div>
                            </div>
                            <div className="">
                                <div className="fs-14 fw-medium">ORDER ID: </div>
                                <div className="fs-13 op-8">#SPK-35254433317</div>
                            </div>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="d-sm-flex d-block">
                                <div className="me-3">
                                    <span className="avatar bg-light avatar-xxl mb-1 mb-sm-0">
                                        <img src="../../../assets/images/ecommerce/jpg/8.jpg" alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <Link href="#!" scroll={false}>
                                        <span className="fs-14 fw-medium">AquaFiber Blue Ceramic Pot </span>
                                    </Link>
                                    <ul className="list-unstyled mb-0">
                                        <li className="text-muted fs-12">1 Piece</li>
                                        <li className="text-muted fs-12">Indoor Plant</li>
                                        <li className="text-muted fs-12">Size: 3.5" wide</li>
                                    </ul>
                                </div>
                                <div className="d-flex align-self-end gap-2">
                                    <span className="fs-14 fw-medium">Order Status :</span>
                                    <span className="d-sm-block"><span className="badge bg-success-transparent">Shipped</span></span>
                                </div>
                            </div>
                        </Card.Body>
                        <div
                            className="card-footer d-sm-flex d-block align-items-center justify-content-between border-block-start-dashed border-top">
                            <div><span className="fw-medium me-2 fs-14">Delivery Date:</span><span className="fs-13 op-8">12 Jan 2024</span>
                            </div>
                            <div className="mt-sm-0 mt-2 ms-auto">
                                <Button variant="" className="btn btn-sm btn-outline-danger">Cancel Order</Button>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
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
        </Fragment>
    );
};

export default Orders;
