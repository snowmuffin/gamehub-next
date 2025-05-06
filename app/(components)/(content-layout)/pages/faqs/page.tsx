"use client";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Accordion, Button, Card, Col, Form, Nav, Row, Tab, TabContainer } from "react-bootstrap";

const Faqs = () => {
    return (
        <Fragment>
            <Seo title={"Faq's"} />
            <Row className="justify-content-center mb-5">
                <Col xl={12}>
                    <div className="row justify-content-center">
                        <Col xl={6}>
                            <div className="text-center p-3 faq-header mb-4">
                                <h5 className="mb-1 text-primary op-5 fw-medium">FAQ's</h5>
                                <h4 className="mb-1 fw-medium">Frequently Asked Questions</h4>
                                <p className="fs-15 text-muted op-7">We have put together Link list of common questions to
                                    assist you in finding the information you require. </p>
                            </div>
                        </Col>
                    </div>
                </Col>
                <Col xl={10}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <TabContainer defaultActiveKey="general">
                            <Card.Header
                                className="d-sm-flex d-block border-block-end-dashed justify-content-center text-center">
                                <Nav className="nav-tabs nav-tabs-header mb-0 d-sm-flex d-block" role="tablist">
                                    <Nav.Item className="m-1">
                                        <Nav.Link eventKey="general" className="" data-bs-toggle="tab" role="tab" aria-current="page"
                                            href="#!" aria-selected="true">General</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="m-1">
                                        <Nav.Link eventKey="support" className="" data-bs-toggle="tab" role="tab" aria-current="page"
                                            href="#!" aria-selected="true">Support</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="m-1">
                                        <Nav.Link eventKey="others" className="" data-bs-toggle="tab" role="tab" aria-current="page"
                                            href="#!" aria-selected="true">Others</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Card.Header>
                            <Card.Body>
                                <Tab.Content className="">
                                    <Tab.Pane eventKey="general" className="pb-0 border-0" id="general-faqs" role="tabpanel">
                                        <Card.Header className="">
                                            <div className="card-title">
                                                General Topics ?
                                            </div>
                                        </Card.Header>
                                        <Card.Body>
                                            <Accordion className="accordion-customicon1 accordion-primary"
                                                id="accordionFAQ1" defaultActiveKey="1">
                                                <Accordion.Item className="" eventKey="1">
                                                    <Accordion.Header className="accordion-header" id="headingcustomicon2One">
                                                        <i
                                                            className="ri-question-line me-2 text-primary fs-16"></i>How
                                                        do I integrate the template into my project?
                                                    </Accordion.Header>
                                                    <div id="collapsecustomicon2One"
                                                        className="accordion-collapse"
                                                        aria-labelledby="headingcustomicon2One"
                                                        data-bs-parent="#accordionFAQ1">
                                                        <Accordion.Body className="accordion-body">
                                                            Integration <strong>instructions </strong> are usually
                                                            provided in the template's documentation.
                                                            Follow the step-by-step guide to include the necessary
                                                            <code>.css</code> files, scripts, and html files in your
                                                            project.You can manually integrate the admin template by
                                                            downloading the template files and adding them to your
                                                            project directory.
                                                            Follow the step-by-step instructions provided in the
                                                            documentation for Link seamless integration process.
                                                        </Accordion.Body>
                                                    </div>
                                                </Accordion.Item>
                                                <Accordion.Item className="" eventKey="2">
                                                    <Accordion.Header className="" id="headingcustomicon2Two">

                                                        <i
                                                            className="ri-question-line me-2 text-primary fs-16"></i>Can
                                                        I customize the appearance of the template?
                                                    </Accordion.Header>
                                                    <div id="collapsecustomicon2Two"
                                                        className="accordion-collapse"
                                                        aria-labelledby="headingcustomicon2Two"
                                                        data-bs-parent="#accordionFAQ1">
                                                        <Accordion.Body className="accordion-body">
                                                            Yes, most admin templates are designed to be
                                                            customizable. You can modify colors, fonts, layouts, and
                                                            styles according to your project's branding guidelines.
                                                            Refer to the documentation for customization options.
                                                        </Accordion.Body>
                                                    </div>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="3" className="accordion-item">
                                                    <Accordion.Header className="" id="headingcustomicon2Three">
                                                        <i
                                                            className="ri-question-line me-2 text-primary fs-16"></i>How
                                                        frequently is the admin template updated?
                                                    </Accordion.Header>
                                                    <div id="collapsecustomicon2Three"
                                                        className="accordion-collapse"
                                                        aria-labelledby="headingcustomicon2Three"
                                                        data-bs-parent="#accordionFAQ1">
                                                        <Accordion.Body className="">
                                                            Check the template provider's website or documentation
                                                            for information on updates. Regular updates may include
                                                            bug fixes, new features, or compatibility improvements.
                                                        </Accordion.Body>
                                                    </div>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="4">
                                                    <Accordion.Header className="accordion-header" id="headingcustomicon2Four">
                                                        <i className="ri-question-line me-2 text-primary fs-16"></i>
                                                        How do I track the performance Link page?
                                                    </Accordion.Header>
                                                    <div id="collapsecustomicon2Four" className="accordion-collapse" aria-labelledby="headingcustomicon2Four" data-bs-parent="#accordionFAQ1">
                                                        <Accordion.Body className="accordion-body">
                                                            Donec ornare, lectus vitae sollicitudin faucibus, diam
                                                            sem efficitur lorem, eu elementum ipsum leo in tellus.
                                                            Pellentesque nulla ex, mollis eu suscipit ut, commodo.
                                                        </Accordion.Body>
                                                    </div>
                                                </Accordion.Item>
                                            </Accordion>
                                        </Card.Body>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="support" className="pb-0 border-0" id="support-faqs" role="tabpanel">
                                        <Card.Header className="">
                                            <div className="card-title">
                                                Customer Support ?
                                            </div>
                                        </Card.Header>
                                        <Card.Body>
                                            <Accordion defaultActiveKey="1" className="accordion accordion-customicon1 accordion-primary"
                                                id="accordionFAQ3">
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header className="accordion-header" id="headingcustomicon3One">

                                                        <i
                                                            className="ri-question-line me-2 text-primary fs-16"></i>Is
                                                        there Link policy for subscriptions?
                                                    </Accordion.Header>
                                                    <div id="collapsecustomicon3One" className="accordion-collapse" aria-labelledby="headingcustomicon3One" data-bs-parent="#accordionFAQ3">
                                                        <Accordion.Body>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Vestibulum lobortis ante eget diam euismod, eu
                                                            condimentum mauris tempus. Suspendisse elementum ac diam
                                                            sit amet
                                                        </Accordion.Body>
                                                    </div>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="2">
                                                    <Accordion.Header className="accordion-header" id="headingcustomicon3Two">

                                                        <i
                                                            className="ri-question-line me-2 text-primary fs-16"></i>Are
                                                        there pre-built data visualization components?
                                                    </Accordion.Header>
                                                    <div id="collapsecustomicon3Two" className="accordion-collapse" aria-labelledby="headingcustomicon3Two" data-bs-parent="#accordionFAQ3">
                                                        <Accordion.Body>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Vestibulum lobortis ante eget diam euismod, eu
                                                            condimentum mauris tempus. Suspendisse elementum ac diam
                                                            sit amet
                                                        </Accordion.Body>
                                                    </div>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="3">
                                                    <Accordion.Header className="accordion-header" id="headingcustomicon3Three">

                                                        <i className="ri-question-line me-2 text-primary fs-16"></i>
                                                        Is there Link free trial available?
                                                    </Accordion.Header>
                                                    <div id="collapsecustomicon3Three" className="accordion-collapse" aria-labelledby="headingcustomicon3Three" data-bs-parent="#accordionFAQ3">
                                                        <Accordion.Body>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Vestibulum lobortis ante eget diam euismod, eu
                                                            condimentum mauris tempus. Suspendisse elementum ac diam
                                                            sit amet
                                                        </Accordion.Body>
                                                    </div>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="4">
                                                    <Accordion.Header className="accordion-header" id="headingcustomicon3Four">

                                                        <i
                                                            className="ri-question-line me-2 text-primary fs-16"></i>What
                                                        support options are available for landing page services?
                                                    </Accordion.Header>
                                                    <div id="collapsecustomicon3Four" className="accordion-collapse" aria-labelledby="headingcustomicon3Four" data-bs-parent="#accordionFAQ3">
                                                        <Accordion.Body>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Vestibulum lobortis ante eget diam euismod, eu
                                                            condimentum mauris tempus. Suspendisse elementum ac diam
                                                            sit amet
                                                        </Accordion.Body>
                                                    </div>
                                                </Accordion.Item>
                                            </Accordion>
                                        </Card.Body>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="others" className="pb-0 border-0" id="others-faqs" role="tabpanel">
                                        <Card.Header className="">
                                            <div className="card-title">
                                                Others ?
                                            </div>
                                        </Card.Header>
                                        <Card.Body>
                                            <Accordion defaultActiveKey="1" className="accordion accordion-customicon1 accordion-primary"
                                                id="accordionFAQ4">
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header className="accordion-header" id="headingcustomicon4Two">
                                                        <i
                                                            className="ri-question-line me-2 text-primary fs-16"></i>What
                                                        if I have specific customization needs for my page?
                                                    </Accordion.Header>
                                                    <div id="collapsecustomicon4Two" className="accordion-collapse" aria-labelledby="headingcustomicon4Two" data-bs-parent="#accordionFAQ4">
                                                        <Accordion.Body>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Vestibulum lobortis ante eget diam euismod, eu
                                                            condimentum mauris tempus. Suspendisse elementum ac diam
                                                            sit amet
                                                        </Accordion.Body>
                                                    </div>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="2">
                                                    <Accordion.Header className="accordion-header" id="headingcustomicon4One">
                                                        <i
                                                            className="ri-question-line me-2 text-primary fs-16"></i>How
                                                        do I get technical assistance for issues with my page?
                                                    </Accordion.Header>
                                                    <div id="collapsecustomicon4One" className="accordion-collapse" aria-labelledby="headingcustomicon4One" data-bs-parent="#accordionFAQ4">
                                                        <Accordion.Body>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Vestibulum lobortis ante eget diam euismod, eu
                                                            condimentum mauris tempus. Suspendisse elementum ac diam
                                                            sit amet
                                                        </Accordion.Body>
                                                    </div>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="3">
                                                    <Accordion.Header className="accordion-header" id="headingcustomicon4Three">
                                                        <i
                                                            className="ri-question-line me-2 text-primary fs-16"></i>What
                                                        is included in the subscription service?
                                                    </Accordion.Header>
                                                    <div id="collapsecustomicon4Three" className="accordion-collapse" aria-labelledby="headingcustomicon4Three" data-bs-parent="#accordionFAQ4">
                                                        <Accordion.Body>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Vestibulum lobortis ante eget diam euismod, eu
                                                            condimentum mauris tempus. Suspendisse elementum ac diam
                                                            sit amet
                                                        </Accordion.Body>
                                                    </div>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="4">
                                                    <Accordion.Header className="accordion-header" id="headingcustomicon4Four">
                                                        <i
                                                            className="ri-question-line me-2 text-primary fs-16"></i>How
                                                        to know the subscription plan?
                                                    </Accordion.Header>
                                                    <div id="collapsecustomicon4Four" className="accordion-collapse" aria-labelledby="headingcustomicon4Four" data-bs-parent="#accordionFAQ4">
                                                        <Accordion.Body>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Vestibulum lobortis ante eget diam euismod, eu
                                                            condimentum mauris tempus. Suspendisse elementum ac diam
                                                            sit amet
                                                        </Accordion.Body>
                                                    </div>
                                                </Accordion.Item>
                                            </Accordion>
                                        </Card.Body>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Card.Body>
                        </TabContainer>
                        <div className="card-footer text-center border-block-start-dashed border-top">
                            <Link href="#!" scroll={false}
                                className="text-decoration-underline text-primary text-center"> Load More</Link>
                        </div>
                    </Card>
                </Col>
                <Col xl={10}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header className="justify-content-center">
                            <div className="card-title mb-3 text-center">
                                Do you still have any questions ?
                                <span className="subtitle fw-normal text-muted d-block fs-12">
                                    Drop your questions here, Our support team is ready to assist you.
                                </span>
                            </div>
                        </Card.Header>
                        <Card.Body className="pb-4">
                            <div className="row gy-3 justify-content-center">
                                <div className="col-xl-8">
                                    <div className="p-3 border mb-2">
                                        <Form.Label htmlFor="user-name" className="">Your Name</Form.Label>
                                        <Form.Control type="text" className="" id="user-name"
                                            placeholder="Enter Your Name" />
                                        <Form.Label htmlFor="user-email" className=" mt-3">Email Id</Form.Label>
                                        <Form.Control type="text" className="" id="user-email"
                                            placeholder="Enter Email" />
                                        <Form.Label htmlFor="text-area" className=" mt-3">Textarea</Form.Label>
                                        <Form.Control as="textarea" className="" placeholder="Enter your question here"
                                            id="text-area" rows={2} />
                                        <Button variant="primary" className="btn btn-wave mt-3">Post Your Question</Button>
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

export default Faqs;
