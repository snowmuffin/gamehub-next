"use client";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const CreateBasic = () => {

    useEffect(() => {
        document.body.classList.add('authentication-background');
        return () => {
            document.body.classList.remove('authentication-background');
        };
    }, []);

    const [passwordshow1, setpasswordshow1] = useState(false);
    const [passwordshow2, setpasswordshow2] = useState(false);

    return (
        <Fragment>
            <Seo title={"Createpassword-Basic"} />
            <div className="container-lg">
                <Row className="justify-content-center authentication authentication-basic align-items-center h-100">
                    <Col xxl={4} xl={5} lg={5} md={6} sm={8} className="col-12">
                        <Card className="custom-card my-4">
                            <div className="top-left"></div>
                            <div className="top-right"></div>
                            <div className="bottom-left"></div>
                            <div className="bottom-right"></div>
                            <Card.Body className="p-5">
                                <div className="mb-3 d-flex justify-content-center">
                                    <Link href="/dashboard/gaming">
                                        <img src="../../../assets/images/brand-logos/desktop-logo.png" alt="logo" className="desktop-logo" />
                                        <img src="../../../assets/images/brand-logos/desktop-dark.png" alt="logo" className="desktop-dark" />
                                    </Link>
                                </div>
                                <p className="h5 mb-2 text-center">Create Password</p>
                                <p className="mb-4 text-muted fw-normal text-center fs-14">Hello Anthony!</p>
                                <div className="row gy-3">
                                    <Col xl={12}>
                                        <Form.Label htmlFor="create-password" className="text-default">Password<sup>*</sup></Form.Label>
                                        <div className="position-relative">
                                            <Form.Control type={(passwordshow1) ? "text" : "password"} className="form-control create-password-input" id="create-password" placeholder="Password" />
                                            <Link href="#!" scroll={false} aria-label="button" type="button" className="show-password-button text-muted"
                                                onClick={() => setpasswordshow1(!passwordshow1)}>
                                                <i className={`${passwordshow1 ? "ri-eye-line" : "ri-eye-off-line"} align-middle`} aria-hidden="true"></i></Link>
                                        </div>
                                    </Col>
                                    <Col xl={12} className="mb-2">
                                        <Form.Label htmlFor="create-confirmpassword" className="text-default">Confirm Password<sup>*</sup></Form.Label>
                                        <div className="position-relative">
                                            <Form.Control type={(passwordshow2) ? "text" : "password"} className="form-control create-password-input" id="create-password" placeholder="Password" />
                                            <Link href="#!" scroll={false} aria-label="button" type="button" className="show-password-button text-muted"
                                                onClick={() => setpasswordshow2(!passwordshow2)}>
                                                <i className={`${passwordshow2 ? "ri-eye-line" : "ri-eye-off-line"} align-middle`} aria-hidden="true"></i></Link>
                                        </div>
                                        <div className="mt-2">
                                            <div className="form-check">
                                                <Form.Check className="" type="checkbox" value="" id="defaultCheck1" />
                                                <Form.Label className="text-muted fw-normal" htmlFor="defaultCheck1">
                                                    Remember password ?
                                                </Form.Label>
                                            </div>
                                        </div>
                                    </Col>
                                </div>
                                <div className="d-grid mt-4">
                                    <Button variant="primary" className="btn">Save Password</Button>
                                </div>
                                <div className="text-center">
                                    <p className="text-muted mt-3 mb-0">Back to home ? <Link href="/dashboard/gaming" className="text-primary">Click Here</Link></p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>

        </Fragment>
    );
};

export default CreateBasic;
