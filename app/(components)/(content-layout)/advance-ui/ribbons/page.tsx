"use client";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Ribbons = () => {

    return (
        <Fragment>
            <Seo title={"Ribbons"} />
            <div className="container-lg">
                <Row>
                    <div className="mb-3 fs-16 fw-semibold">Ribbons Style 1</div>
                    <Col xxl={3} lg={6} md={12} className="">
                        <Card className="ribbone-card custom-card">
                            <div className="power-ribbone power-ribbone-top-left text-warning"><span className="bg-warning"><i className="ri-flashlight-line"></i></span></div>
                            <Card.Body className="ribbon-cards">
                                <h6 className="card-subtitle mb-2 text-muted">Ribbon Styles</h6>
                                <p className="card-text">Easily apply quick ribbon styles to enhance the visual appeal of your card with ready-to-use options.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} lg={6} md={12} className="">
                        <Card className="ribbone-card custom-card">
                            <div className="power-ribbone power-ribbone-bottom-left text-primary"><span className="bg-primary"><i className="ri-flashlight-line"></i></span></div>
                            <Card.Body className="ribbon-cards">
                                <h6 className="card-subtitle mb-2 text-muted">Ribbon Styles</h6>
                                <p className="card-text">Easily apply quick ribbon styles to enhance the visual appeal of your card with ready-to-use options.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} lg={6} md={12} className="">
                        <Card className="ribbone-card custom-card">
                            <div className="power-ribbone power-ribbone-top-right text-danger"><span className="bg-danger"><i className="ri-flashlight-line"></i></span></div>
                            <Card.Body className="ribbon-cards">
                                <h6 className="card-subtitle mb-2 text-muted">Ribbon Styles</h6>
                                <p className="card-text">Easily apply quick ribbon styles to enhance the visual appeal of your card with ready-to-use options.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} lg={6} md={12} className="">
                        <Card className="ribbone-card custom-card">
                            <div className="power-ribbone power-ribbone-bottom-right text-success"><span className="bg-success"><i className="ri-flashlight-line"></i></span></div>
                            <Card.Body className="ribbon-cards">
                                <h6 className="card-subtitle mb-2 text-muted">Ribbon Styles</h6>
                                <p className="card-text">Easily apply quick ribbon styles to enhance the visual appeal of your card with ready-to-use options.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <div className="row">
                    <div className="mb-3 fs-16 fw-semibold">Ribbons Style 2</div>
                    <Col xxl={3} lg={6} md={12} className="">
                        <Card className="ribbone-card custom-card">
                            <div className="ribbone ribbone-top-left text-primary"><span className="bg-primary">sold out</span></div>
                            <Card.Body className="ribbon-cards">
                                <h6 className="card-subtitle mb-2 text-muted">Ribbon Styles</h6>
                                <p className="card-text">Easily apply quick ribbon styles to enhance the visual appeal of your card with ready-to-use options.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} lg={6} md={12} className="">
                        <Card className="ribbone-card custom-card">
                            <div className="ribbone ribbone-bottom-left text-success"><span className="bg-success">Update</span></div>
                            <Card.Body className="ribbon-cards">
                                <h6 className="card-subtitle mb-2 text-muted">Ribbon Styles</h6>
                                <p className="card-text">Easily apply quick ribbon styles to enhance the visual appeal of your card with ready-to-use options.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} lg={6} md={12} className="">
                        <Card className="ribbone-card custom-card  sold-out">
                            <div className="ribbone ribbone-top-right text-warning"><span className="bg-warning">Open</span></div>
                            <Card.Body className="ribbon-cards">
                                <h6 className="card-subtitle mb-2 text-muted">Ribbon Styles</h6>
                                <p className="card-text">Easily apply quick ribbon styles to enhance the visual appeal of your card with ready-to-use options.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} lg={6} md={12} className="">
                        <Card className="ribbone-card custom-card  sold-out">
                            <div className="ribbone ribbone-bottom-right text-danger"><span className="bg-danger">Offer</span></div>
                            <Card.Body className="ribbon-cards">
                                <h6 className="card-subtitle mb-2 text-muted">Ribbon Styles</h6>
                                <p className="card-text">Easily apply quick ribbon styles to enhance the visual appeal of your card with ready-to-use options.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>
                <div className="row">
                    <div className="mb-3 fs-16 fw-semibold">Ribbons Style 3</div>
                    <Col xxl={3} lg={6} md={12} className="">
                        <Card className="ribbone-card ribbons-style custom-card">
                            <div className="arrow-ribbone-left bg-secondary">Sale</div>
                            <Card.Body className="ribbon-cards">
                                <h6 className="card-subtitle mb-2 text-muted">Ribbon Styles</h6>
                                <p className="card-text">Easily apply quick ribbon styles to enhance the visual appeal of your card with ready-to-use options.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} lg={6} md={12} className="">
                        <Card className="ribbone-card ribbons-style custom-card">
                            <div className="arrow-ribbone-right bg-info">Price</div>
                            <Card.Body className="ribbon-cards">
                                <h6 className="card-subtitle mb-2 text-muted">Ribbon Styles</h6>
                                <p className="card-text">Easily apply quick ribbon styles to enhance the visual appeal of your card with ready-to-use options.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} lg={6} md={12} className="">
                        <Card className="ribbone-card ribbons-style custom-card">
                            <div className="arrow-ribbone-left bg-warning">Service</div>
                            <Card.Body className="ribbon-cards">
                                <h6 className="card-subtitle mb-2 text-muted">Ribbon Styles</h6>
                                <p className="card-text">Easily apply quick ribbon styles to enhance the visual appeal of your card with ready-to-use options.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} lg={6} md={12} className="">
                        <Card className="ribbone-card ribbons-style custom-card">
                            <div className="arrow-ribbone-right bg-teal">Offer</div>
                            <Card.Body className="ribbon-cards">
                                <h6 className="card-subtitle mb-2 text-muted">Ribbon Styles</h6>
                                <p className="card-text">Easily apply quick ribbon styles to enhance the visual appeal of your card with ready-to-use options.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>
                <div className="row">
                    <div className="mb-3 fs-16 fw-semibold">Ribbons Style 4</div>
                    <Col xxl={3} lg={6} md={12} className="">
                        <Card className="custom-card">
                            <span className="ribbone-success-left">
                                <span><i className="fe fe-zap"></i></span>
                            </span>
                            <Card.Body className="ribbon-cards">
                                <h6 className="card-subtitle mb-2 text-muted">Ribbon Styles</h6>
                                <p className="card-text">Easily apply quick ribbon styles to enhance the visual appeal of your card with ready-to-use options.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} lg={6} md={12} className="">
                        <Card className="custom-card">
                            <span className="ribbone-warning-right">
                                <span>offer</span>
                            </span>
                            <Card.Body className="ribbon-cards">
                                <h6 className="card-subtitle mb-2 text-muted">Ribbon Styles</h6>
                                <p className="card-text">Easily apply quick ribbon styles to enhance the visual appeal of your card with ready-to-use options.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} lg={6} md={12} className="">
                        <Card className="custom-card">
                            <span className="ribbone-info-left">
                                <span><i className="fe fe-zap"></i></span>
                            </span>
                            <Card.Body className="ribbon-cards">
                                <h6 className="card-subtitle mb-2 text-muted">Ribbon Styles</h6>
                                <p className="card-text">Easily apply quick ribbon styles to enhance the visual appeal of your card with ready-to-use options.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} lg={6} md={12} className="">
                        <Card className="custom-card">
                            <span className="ribbone-danger-right">
                                <span><i className="fe fe-zap"></i></span>
                            </span>
                            <Card.Body className="ribbon-cards">
                                <h6 className="card-subtitle mb-2 text-muted">Ribbon Styles</h6>
                                <p className="card-text">Easily apply quick ribbon styles to enhance the visual appeal of your card with ready-to-use options.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>
                <div className="row">
                    <div className="mb-3 fs-16 fw-semibold">Ribbons Style 5</div>
                    <Col xxl={3} lg={6} md={12} className="">
                        <Card className="custom-card">
                            <span className="bookmark-ribbone-danger-left">
                                <span>Offer</span>
                            </span>
                            <Card.Body className="ribbon-cards">
                                <h6 className="card-subtitle mb-2 text-muted">Ribbon Styles</h6>
                                <p className="card-text">Easily apply quick ribbon styles to enhance the visual appeal of your card with ready-to-use options.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} lg={6} md={12} className="">
                        <Card className="custom-card">
                            <span className="bookmark-ribbone-secondary-right">
                                <span><i className="fe fe-zap"></i></span>
                            </span>
                            <Card.Body className="ribbon-cards">
                                <h6 className="card-subtitle mb-2 text-muted">Ribbon Styles</h6>
                                <p className="card-text">Easily apply quick ribbon styles to enhance the visual appeal of your card with ready-to-use options.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} lg={6} md={12} className="">
                        <Card className="custom-card">
                            <span className="bookmark-sideleft-ribbone-success-left">
                                <span><i className="fe fe-zap"></i></span>
                            </span>
                            <Card.Body className="ribbon-cards">
                                <h6 className="card-subtitle mb-2 text-muted">Ribbon Styles</h6>
                                <p className="card-text">Easily apply quick ribbon styles to enhance the visual appeal of your card with ready-to-use options.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} lg={6} md={12} className="">
                        <Card className="custom-card">
                            <span className="bookmark-sideright-ribbone-primary-right">
                                <span>Sold out</span>
                            </span>
                            <Card.Body className="ribbon-cards">
                                <h6 className="card-subtitle mb-2 text-muted">Ribbon Styles</h6>
                                <p className="card-text">Easily apply quick ribbon styles to enhance the visual appeal of your card with ready-to-use options.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>
                <Row>
                    <h5 className="mb-3 fs-16 fw-semibold">Ribbon Style 6</h5>
                    <Col xxl={2} md={4} className="mx-0 mx-md-5  px-5 px-md-0 ">
                        <Card className="ribbons-style-6 custom-card">
                            <div className="ribbon-style-6 fullwidth-secondary-ribbons">
                                <div className="bar">
                                    CSS Ribbon
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <Card.Body className="ribbon-cards">
                                <h6 className="card-subtitle mb-2 text-muted">Ribbon Styles</h6>
                                <p className="card-text">Easily apply quick ribbon styles to enhance the visual appeal of your card with ready-to-use options.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={2} md={4} className="mx-0 mx-md-5  px-5 px-md-0 ">
                        <Card className="ribbons-style-6 custom-card">
                            <div className="ribbon-style-6 fullwidth-warning-ribbons">

                                <div className="bar">
                                    CSS Ribbon
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <Card.Body className="ribbon-cards">
                                <h6 className="card-subtitle mb-2 text-muted">Ribbon Styles</h6>
                                <p className="card-text">Easily apply quick ribbon styles to enhance the visual appeal of your card with ready-to-use options.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={2} md={4} className="mx-0 mx-md-5  px-5 px-md-0 ">
                        <Card className="ribbons-style-6 custom-card">
                            <div className="ribbon-style-6 fullwidth-primary-ribbons">

                                <div className="bar">
                                    CSS Ribbon
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <Card.Body className="ribbon-cards">
                                <h6 className="card-subtitle mb-2 text-muted">Ribbon Styles</h6>
                                <p className="card-text">Easily apply quick ribbon styles to enhance the visual appeal of your card with ready-to-use options.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={2} md={4} className="mx-0 mx-md-5  px-5 px-md-0 ">
                        <Card className="ribbons-style-6 custom-card">
                            <div className="ribbon-style-6 fullwidth-success-ribbons">

                                <div className="bar">
                                    CSS Ribbon
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <Card.Body className="ribbon-cards">
                                <h6 className="card-subtitle mb-2 text-muted">Ribbon Styles</h6>
                                <p className="card-text">Easily apply quick ribbon styles to enhance the visual appeal of your card with ready-to-use options.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <div className="row">
                    <div className="mb-3 fs-16 fw-semibold">Ribbons Style 7</div>
                    <Col xxl={3} lg={6} md={12} className="">
                        <Card className="custom-card">
                            <span className="ribbon-badge-right success">
                                <span className="ribbon-badge-icon"><i className="fe fe-zap"></i></span>
                                <span className="ribbon-style-7"></span>
                            </span>
                            <Card.Body className="ribbon-cards">
                                <h6 className="card-subtitle mb-2 text-muted">Ribbon Styles</h6>
                                <p className="card-text">Easily apply quick ribbon styles to enhance the visual appeal of your card with ready-to-use options.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} lg={6} md={12} className="">
                        <Card className="custom-card">
                            <span className="ribbon-badge-right secondary">
                                <span className="ribbon-badge-icon"><i className="fe fe-zap"></i></span>
                                <span className="ribbon-style-7"></span>
                            </span>
                            <Card.Body className="ribbon-cards">
                                <h6 className="card-subtitle mb-2 text-muted">Ribbon Styles</h6>
                                <p className="card-text">Easily apply quick ribbon styles to enhance the visual appeal of your card with ready-to-use options.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} lg={6} md={12} className="">
                        <Card className="custom-card">
                            <span className="ribbon-badge-right warning">
                                <span className="ribbon-badge-icon text-fixed-black"><i className="fe fe-zap"></i></span>
                                <span className="ribbon-style-7"></span>
                            </span>
                            <Card.Body className="ribbon-cards">
                                <h6 className="card-subtitle mb-2 text-muted">Ribbon Styles</h6>
                                <p className="card-text">Easily apply quick ribbon styles to enhance the visual appeal of your card with ready-to-use options.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} lg={6} md={12} className="">
                        <Card className="custom-card">
                            <span className="ribbon-badge-right danger">
                                <span className="ribbon-badge-icon"><i className="fe fe-zap"></i></span>
                                <span className="ribbon-style-7"></span>
                            </span>
                            <Card.Body className="ribbon-cards">
                                <h6 className="card-subtitle mb-2 text-muted">Ribbon Styles</h6>
                                <p className="card-text">Easily apply quick ribbon styles to enhance the visual appeal of your card with ready-to-use options.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>
            </div>
        </Fragment>
    );
};

export default Ribbons;
