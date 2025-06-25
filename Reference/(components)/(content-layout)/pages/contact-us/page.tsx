"use client";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const Contactus = () => {
    return (
        <Fragment>
            <Seo title={"Contact Us"} />
            <Row className="justify-content-center">
                <Col xxl={12} xl={12} lg={12} md={12} xm={12} className="">
                    <Card className="custom-card overflow-hidden">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="p-0">
                            <div className="contact-page-banner text-center mb-5">
                                <div className="text- mb-2 px-5 px-xxl-0">
                                    <h3 className="fw-medium text-fixed-white">Contact US !</h3>
                                    <h6 className="text-fixed-white mb-4 fw-normal op-8 text-wrap">Have any questions ? We would love to hear from
                                        you. </h6>
                                </div>
                            </div>
                            <Row className="mx-xl-3 px-xl-5 p-3 pt-0 pb-4">
                                <Col xxl={6} xl={6} lg={12} md={12} sm={12} className="">
                                    <Card className="custom-card contactus-form contactus-form-left overflow-hidden">
                                        <div className="top-left"></div>
                                        <div className="top-right"></div>
                                        <div className="bottom-left"></div>
                                        <div className="bottom-right"></div>
                                        <Card.Header className="px-4 px-xl-5 pt-5">
                                            <div className="card-title">
                                                Contact Information
                                            </div>
                                        </Card.Header>
                                        <Card.Body className="text-start px-xl-5 px-4 py-4">
                                            <div className="mb-3"><i className="ri-map-pin-fill me-2 text-primary"></i> D.No: 1352/A-12, Street,
                                                Hyderabad.</div>
                                            <div className="mb-3"><i className="ri-phone-fill text-primary"></i> +122 1234 32422</div>
                                            <div className="mb-4"><i className="ri-mail-fill text-primary"></i> carolinahanna424@example.com</div>
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d30444.274596168965!2d78.54114692513858!3d17.48198883339408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d17.4886524!2d78.5495041!4m5!1s0x3bcb9c7ec139a15d%3A0x326d1c90786b2ab6!2sspruko%20technologies!3m2!1d17.474805099999998!2d78.570258!5e0!3m2!1sen!2sin!4v1670225507254!5m2!1sen!2sin"
                                                height="214" style={{ border: "0" }} loading="lazy"
                                            ></iframe>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xxl={6} xl={6} lg={12} md={12} sm={12} className="">
                                    <Card className="custom-card contactus-form contactus-form-right overflow-hidden">
                                        <div className="top-left"></div>
                                        <div className="top-right"></div>
                                        <div className="bottom-left"></div>
                                        <div className="bottom-right"></div>
                                        <Card.Header className="px-xl-5 px-4 pt-5">
                                            <div className="card-title">
                                                Get In Touch !
                                            </div>
                                        </Card.Header>
                                        <Card.Body className="p-xl-5 p-4 pt-xl-4">
                                            <div className="row gy-3 text-start">
                                                <Col xl={12}>
                                                    <Form.Label htmlFor="contact-address-firstname" className="">First Name :</Form.Label>
                                                    <Form.Control type="text" className="" id="contact-address-firstname"
                                                        placeholder="Enter Name" />
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Label htmlFor="contact-address-email" className="">Email Id :</Form.Label>
                                                    <Form.Control type="email" className="" id="contact-address-email"
                                                        placeholder="Enter Email Id" />
                                                </Col>
                                                <Col xl={6}>
                                                    <Form.Label htmlFor="contact-address-address" className="">Address :</Form.Label>
                                                    <Form.Control as="textarea" className="" id="contact-address-address" rows={2} />
                                                </Col>
                                                <Col xl={6}>
                                                    <Form.Label htmlFor="contact-mail-message" className="">Message :</Form.Label>
                                                    <Form.Control as="textarea" className="" id="contact-mail-message" rows={2} />
                                                </Col>
                                            </div>
                                            <div className=" mt-4">
                                                <Button variant="" className="btn btn-primary-light btn-wave btn-grid w-100">Send Message</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Contactus;
