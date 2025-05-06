"use client";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const SignupBasic = () => {

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
            <Seo title={"Signup-Basic"} />
            <div className="container-lg">
                <Row className="justify-content-center align-items-center authentication authentication-basic h-100">
                    <Col xxl={5} xl={5} lg={5} md={6} sm={8} className="col-12">
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
                                <p className="h5 mb-2 text-center">Sign Up</p>
                                <p className="mb-4 text-muted op-7 fw-normal text-center fs-14">Welcome! Begin by creating your account.</p>
                                <div className="d-flex mb-3 justify-content-between gap-2 flex-wrap">
                                    <Button variant="" className="btn btn-lg btn-light-ghost border d-flex align-items-center justify-content-center flex-fill">
                                        <span className="avatar avatar-xs flex-shrink-0">
                                            <img src="../../../assets/images/media/apps/google.png" alt="" />
                                        </span>
                                        <span className="lh-1 ms-2 fs-13 text-default">Signup with Google</span>
                                    </Button>
                                    <Button variant="" className="btn btn-lg btn-light-ghost border d-flex align-items-center justify-content-center flex-fill">
                                        <span className="avatar avatar-xs flex-shrink-0 invert-1">
                                            <img src="../../../assets/images/media/apps/apple.png" alt="" />
                                        </span>
                                        <span className="lh-1 ms-2 fs-13 text-default">Signup with Apple</span>
                                    </Button>
                                </div>
                                <div className="text-center my-3 authentication-barrier">
                                    <span>OR</span>
                                </div>
                                <div className="row gy-3">
                                    <Col xl={12}>
                                        <Form.Label htmlFor="signup-firstname" className="text-default">Full Name<sup>*</sup></Form.Label>
                                        <Form.Control type="text" className="" id="signup-firstname" placeholder="full name" />
                                    </Col>
                                    <Col xl={12}>
                                        <Form.Label htmlFor="create-password" className="text-default">Password<sup>*</sup></Form.Label>
                                        <div className="position-relative">
                                            <Form.Control type={(passwordshow1) ? "text" : "password"} className="form-control create-password-input" id="create-password" placeholder="Password" />
                                            <Link href="#!" scroll={false} aria-label="button" type="button" className="show-password-button text-muted"
                                                onClick={() => setpasswordshow1(!passwordshow1)}>
                                                <i className={`${passwordshow1 ? "ri-eye-line" : "ri-eye-off-line"} align-middle`} aria-hidden="true"></i></Link>
                                        </div>
                                    </Col>
                                    <Col xl={12}>
                                        <Form.Label htmlFor="create-password" className="text-default">Password<sup>*</sup></Form.Label>
                                        <div className="position-relative">
                                            <Form.Control type={(passwordshow2) ? "text" : "password"} className="form-control create-password-input" id="create-password" placeholder="Password" />
                                            <Link href="#!" scroll={false} aria-label="button" type="button" className="show-password-button text-muted"
                                                onClick={() => setpasswordshow2(!passwordshow2)}>
                                                <i className={`${passwordshow2 ? "ri-eye-line" : "ri-eye-off-line"} align-middle`} aria-hidden="true"></i></Link>
                                        </div>
                                        <div className="form-check mt-3">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                            <label className="form-check-label text-muted fw-normal fs-14" htmlFor="defaultCheck1">
                                            </label>
                                            By creating a account you agree to our
                                            <Link href="/pages/terms-conditions" className="text-success"><u> Terms & Conditions</u></Link> and <Link href="#!" scroll={false} className="text-success"><u>Privacy Policy</u></Link>
                                        </div>
                                    </Col>
                                </div>
                                <div className="d-grid mt-4">
                                    <Button variant="" className="btn btn-primary">Create Account</Button>
                                </div>
                                <div className="text-center">
                                    <p className="text-muted mt-3 mb-0">Already have an account? <Link href="/authentication/sign-in/signin-basic" className="text-primary">Sign In</Link></p>
                                </div>
                                <div className="btn-list text-center mt-3">
                                    <Button variant="" className="btn btn-icon btn-sm btn-wave authentication-social-btn">
                                        <i className="ri-facebook-line fw-bold"></i>
                                    </Button>
                                    <Button variant="" className="btn btn-icon btn-sm btn-wave authentication-social-btn">
                                        <i className="ri-twitter-x-line fw-bold"></i>
                                    </Button>
                                    <Button variant="" className="btn btn-icon btn-sm btn-wave authentication-social-btn">
                                        <i className="ri-instagram-line fw-bold"></i>
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};

export default SignupBasic;
