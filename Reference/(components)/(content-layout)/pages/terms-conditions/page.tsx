"use client";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const Termsconditions = () => {
    return (
        <Fragment>
            <Seo title={"Terms & Conditions"} />
            <Row className="justify-content-center">
                <Col xl={12}>
                    <Card className="custom-card overflow-hidden">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="p-5">
                            <div className=" text-primary h5 fw-medium mb-4">SciFi  - Terms & Conditions
                            </div>
                            <div className="terms-conditions border p-3 overflow-scroll" id="terms-scroll">
                                <div className="mb-4 fs-14">
                                    <p className="mb-3">
                                        <span className="fw-medium text-default">If you reside in the USA, </span>the SciFi
                                        <Link className="text-primary" href="#!" scroll={false}><u className="mx-1">Terms and Conditions</u></Link>
                                        comprise the following rules, and the <Link className="text-primary" href="#!" scroll={false}><u className="mx-1">User Agreements</u></Link> encompass the specified policies. The
                                        <Link className="text-primary" href="#!" scroll={false}><u className="mx-1">SciFi Rules and Privacy Policies</u></Link> are integrated with the conditions outlined below.
                                    </p>
                                    <p className="mb-0">
                                        <span className="fw-medium text-default">If you reside outside the USA, </span>the SciFi <Link className="text-primary" href="#!" scroll={false}><u className="mx-1">Terms and Conditions</u></Link> include the following rules and <Link className="text-primary" href="#!" scroll={false}><u className="mx-1">User Agreements</u></Link> encompass the following policies. The <Link className="text-primary" href="#!" scroll={false}><u className="mx-1">SciFi Rules and Privacy Policies</u></Link> are integrated with the conditions outlined below.
                                    </p>
                                </div>
                                <h5 className="fw-medium pb-3 text-primary"><span>Terms & Services :</span></h5>
                                <ol className="fs-14">
                                    <li className="mb-4">
                                        <p className="fw-medium mb-2 fs-14 text-primary">Variations Lorem ipsum psum primis in faucibus.</p>
                                        <p className="mb-0 text-muted">
                                            Note that this agreement may be alternatively referred to as Terms of Use, User Agreement, or Terms of Service. These terms are interchangeable and denote the same type of agreement.
                                        </p>
                                    </li>
                                    <li className="mb-4">
                                        <p className="fw-medium mb-2 fs-14 text-primary"> Business Interactions, Consectetur adipisicing elit.</p>
                                        <p className="mb-2 text-muted">
                                            Although not mandated by law, establishing clear terms and conditions lays the foundation for a successful business relationship. By articulating these guidelines in writing, business owners can mitigate the risk of misunderstandings with their customers.
                                        </p>
                                        <p className="text-muted">
                                            It also empowers you to determine your acceptable standards and identify behaviors that may prompt the termination of a user relationship.
                                        </p>
                                    </li>
                                    <li className="mb-4">
                                        <p className="fw-medium mb-2 fs-14 text-primary">Limitation of Liability Disclaimers.</p>
                                        <p className="text-muted">
                                            The inclusion of limitation of liability disclaimers is a primary motivation for business owners to incorporate terms and conditions on their websites. When crafted reasonably and effectively, these clauses serve as a crucial safeguard, shielding your business from potential claims and lawsuits, thereby mitigating the financial impact of damages.
                                        </p>
                                    </li>
                                    <li className="mb-4">
                                        <p className="fw-medium mb-2 fs-14 text-primary">If you permit your users to share.</p>
                                        <p className="mb-2 text-muted">
                                            If you enable users to share comments, photos, or leave product reviews on your website, it is advisable to include a section in your terms of service outlining their behavior expectations and specifying acceptable and unacceptable actions.
                                        </p>
                                        <p className="mb-2 text-muted">
                                            In this provision, you have the option to retain the right to monitor user-generated content shared on your website. You may take steps to remove any content that violates your guidelines. It is advisable to explicitly instruct users not to post content containing obscene language, material deemed harmful or violent, or any infringement on someone else’s copyright.
                                        </p>
                                    </li>
                                    <li className="mb-0">
                                        <p className="fw-medium mb-2 fs-14 text-primary">You can also express it more explicitly.</p>
                                        <p className="mb-2 text-muted">
                                            You may explicitly state that you retain the right to suspend or delete the accounts of repeat infringers. This ensures a secure environment on your website, fostering a comfortable space for individuals to express their opinions. This is particularly crucial for the operation of a news site, blog, or forum.
                                        </p>
                                        <p className="mb-0 text-muted">
                                            From a business perspective, you may retain the right to utilize the submitted content for marketing purposes, a common practice among major retailers and eCommerce stores to showcase highly praised products. It's crucial for your customers to be informed about this intention, preventing any surprise when they see their words or photos featured in promotional materials.
                                        </p>
                                    </li>
                                </ol>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <div className="btn-list text-end">
                                <Button variant="" className="btn btn-outline-danger btn-wave btn-w-lg">DECLINE</Button>
                                <Button variant="" className="btn btn-primary btn-wave btn-w-lg">ACCEPT</Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Termsconditions;
