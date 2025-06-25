"use client"
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const Wallet = () => {
    return (
        <Fragment>
            <Seo title={"Wallet"} />
            <Row>
                <Col xxl={3} md={6} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header className="">
                            <div className="card-title">
                                BTC WALLET
                            </div>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="d-flex align-items-center flex-wrap gap-2">
                                <div className="lh-1">
                                    <span className="avatar avatar-rounded">
                                        <img src="../../../assets/images/crypto-currencies/square-color/Bitcoin.svg" alt="" />
                                    </span>
                                </div>
                                <div>
                                    <span className="d-block text-muted fs-12 fw-normal">Available BTC</span>
                                    <span className="fw-medium">0.04437 BTC</span>
                                </div>
                                <div className="ms-auto">
                                    <span className="fw-medium text-primary">$1646.4 USD</span>
                                    <span className="d-block text-muted fs-12 fw-normal">In USD</span>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="">
                            <div className="text-center d-flex flex-wrap gap-2">
                                <Button variant="" className="btn btn-primary-light btn-w-sm btn-wave flex-fill">Deposit</Button>
                                <Button variant="" className="btn btn-success-light btn-wave btn-w-md flex-fill">Withdraw</Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={3} md={6} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header className="">
                            <div className="card-title">
                                ETH WALLET
                            </div>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="d-flex align-items-center flex-wrap gap-2">
                                <div className="lh-1">
                                    <span className="avatar avatar-rounded">
                                        <img src="../../../assets/images/crypto-currencies/square-color/Ethereum.svg" alt="" />
                                    </span>
                                </div>
                                <div>
                                    <span className="d-block text-muted fs-12 fw-normal">Available ETH</span>
                                    <span className="fw-medium">1.3892 ETH</span>
                                </div>
                                <div className="ms-auto">
                                    <span className="fw-medium text-primary">$4581.24 USD</span>
                                    <span className="d-block text-muted fs-12 fw-normal">In USD</span>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="">
                            <div className="text-center d-flex flex-wrap gap-2">
                                <Button variant="" className="btn btn-primary-light btn-w-sm btn-wave flex-fill">Deposit</Button>
                                <Button variant="" className="btn btn-success-light btn-wave btn-w-md flex-fill">Withdraw</Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={3} md={6} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header className="">
                            <div className="card-title">
                                XRP WALLET
                            </div>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="d-flex align-items-center flex-wrap gap-2">
                                <div className="lh-1">
                                    <span className="avatar avatar-rounded">
                                        <img src="../../../assets/images/crypto-currencies/square-color/Ripple.svg" alt="" />
                                    </span>
                                </div>
                                <div>
                                    <span className="d-block text-muted fs-12 fw-normal">Available XRP</span>
                                    <span className="fw-medium">134.943 XRP</span>
                                </div>
                                <div className="ms-auto">
                                    <span className="fw-medium text-primary">$192.29 USD</span>
                                    <span className="d-block text-muted fs-12 fw-normal">In USD</span>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="">
                            <div className="text-center d-flex flex-wrap gap-2">
                                <Button variant="" className="btn btn-primary-light btn-w-sm btn-wave flex-fill">Deposit</Button>
                                <Button variant="" className="btn btn-success-light btn-wave btn-w-md flex-fill">Withdraw</Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={3} md={6} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header className="">
                            <div className="card-title">
                                LTC WALLET
                            </div>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="d-flex align-items-center flex-wrap gap-2">
                                <div className="lh-1">
                                    <span className="avatar avatar-rounded">
                                        <img src="../../../assets/images/crypto-currencies/square-color/Litecoin.svg" alt="" />
                                    </span>
                                </div>
                                <div>
                                    <span className="d-block text-muted fs-12 fw-normal">Available LTC</span>
                                    <span className="fw-medium">27.254 LTC</span>
                                </div>
                                <div className="ms-auto">
                                    <span className="fw-medium text-primary">$3519.01 USD</span>
                                    <span className="d-block text-muted fs-12 fw-normal">In USD</span>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="">
                            <div className="text-center d-flex flex-wrap gap-2">
                                <Button variant="" className="btn btn-primary-light btn-w-sm btn-wave flex-fill">Deposit</Button>
                                <Button variant="" className="btn btn-success-light btn-wave btn-w-md flex-fill">Withdraw</Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                BTC Wallet Address
                            </div>
                            <div>
                                <Button variant="" className="btn btn-primary-ghost btn-wave">Connect</Button>
                            </div>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="d-flex align-items-end flex-wrap justify-content-between gap-4 mb-3">
                                <div className="flex-fill">
                                    <label htmlFor="btc-wallet-address1" className="form-label">Wallet Address</label>
                                    <div className="input-group">
                                        <Form.Control type="text" className="" id="btc-wallet-address1" defaultValue="afb0dc8bc87472481559ffsd415c86ef43ed8df" placeholder="Placeholder" />
                                        <Button variant="" className="btn btn-primary">Copy</Button>
                                    </div>
                                </div>
                                <div className="avatar avatar-lg border p-1">
                                    <img src="../../../assets/images/media/media-68.png" className="qr-image" alt="" />
                                </div>
                            </div>
                            <div className="p-3 border border-dashed">
                                <div className="row gy-3">
                                    <Col xl={4} className="">
                                        <div className="">
                                            <div className="d-flex align-items-center flex-wrap gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar bg-success-transparent">
                                                        <i className="ti ti-arrow-narrow-down fs-20"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="d-block text-muted">Received</span>
                                                    <span className="d-block fw-medium">5.2834 <span className="fs-12 text-muted fw-normal">BTC</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={4} className="">
                                        <div className="">
                                            <div className="d-flex align-items-center flex-wrap gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar bg-danger-transparent">
                                                        <i className="ti ti-arrow-narrow-up fs-20"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="d-block text-muted">Sent</span>
                                                    <span className="d-block fw-medium">1.7382 <span className="fs-12 text-muted fw-normal">BTC</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={4} className="">
                                        <div className="">
                                            <div className="d-flex align-items-center flex-wrap gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar bg-secondary-transparent">
                                                        <i className="ti ti-wallet fs-20"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="d-block text-muted">Wallet Balance</span>
                                                    <span className="d-block fw-medium">13.5232 <span className="fs-12 text-muted fw-normal">BTC</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                ETH Wallet Address
                            </div>
                            <div>
                                <Button variant="" className="btn btn-primary-ghost btn-wave">Connect</Button>
                            </div>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="d-flex align-items-end flex-wrap justify-content-between gap-4 mb-3">
                                <div className="flex-fill">
                                    <label htmlFor="btc-wallet-address2" className="form-label">Wallet Address</label>
                                    <div className="input-group">
                                        <Form.Control type="text" className="" id="btc-wallet-address2" defaultValue="afb0dc8bc87472481559ffsd415c86ef43ed8df" placeholder="Placeholder" />
                                        <Button variant="" className="btn btn-primary">Copy</Button>
                                    </div>
                                </div>
                                <div className="avatar avatar-lg border p-1">
                                    <img src="../../../assets/images/media/media-68.png" className="qr-image" alt="" />
                                </div>
                            </div>
                            <div className="p-3 border border-dashed">
                                <div className="row gy-3">
                                    <Col xl={4} className="">
                                        <div className="">
                                            <div className="d-flex align-items-center flex-wrap gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar bg-success-transparent">
                                                        <i className="ti ti-arrow-narrow-down fs-20"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="d-block text-muted">Received</span>
                                                    <span className="d-block fw-medium">5.2834 <span className="fs-12 text-muted fw-normal">ETH</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={4} className="">
                                        <div className="">
                                            <div className="d-flex align-items-center flex-wrap gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar bg-danger-transparent">
                                                        <i className="ti ti-arrow-narrow-up fs-20"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="d-block text-muted">Sent</span>
                                                    <span className="d-block fw-medium">1.7382 <span className="fs-12 text-muted fw-normal">ETH</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={4} className="">
                                        <div className="">
                                            <div className="d-flex align-items-center flex-wrap gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar bg-secondary-transparent">
                                                        <i className="ti ti-wallet fs-20"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="d-block text-muted">Wallet Balance</span>
                                                    <span className="d-block fw-medium">13.5232 <span className="fs-12 text-muted fw-normal">ETH</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                LTC Wallet Address
                            </div>
                            <div>
                                <Button variant="" className="btn btn-primary-ghost btn-wave">Connect</Button>
                            </div>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="d-flex align-items-end flex-wrap justify-content-between gap-4 mb-3">
                                <div className="flex-fill">
                                    <label htmlFor="btc-wallet-address3" className="form-label">Wallet Address</label>
                                    <div className="input-group">
                                        <Form.Control type="text" className="" id="btc-wallet-address03" defaultValue="afb0dc8bc87472481559ffsd415c86ef43ed8df" placeholder="Placeholder" />
                                        <Button variant="" className="btn btn-primary">Copy</Button>
                                    </div>
                                </div>
                                <div className="avatar avatar-lg border p-1">
                                    <img src="../../../assets/images/media/media-68.png" className="qr-image" alt="" />
                                </div>
                            </div>
                            <div className="p-3 border border-dashed">
                                <div className="row gy-3">
                                    <Col xl={4} className="">
                                        <div className="">
                                            <div className="d-flex align-items-center flex-wrap gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar bg-success-transparent">
                                                        <i className="ti ti-arrow-narrow-down fs-20"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="d-block text-muted">Received</span>
                                                    <span className="d-block fw-medium">5.2834 <span className="fs-12 text-muted fw-normal">LTC</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={4} className="">
                                        <div className="">
                                            <div className="d-flex align-items-center flex-wrap gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar bg-danger-transparent">
                                                        <i className="ti ti-arrow-narrow-up fs-20"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="d-block text-muted">Sent</span>
                                                    <span className="d-block fw-medium">1.7382 <span className="fs-12 text-muted fw-normal">LTC</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={4} className="">
                                        <div className="">
                                            <div className="d-flex align-items-center flex-wrap gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar bg-secondary-transparent">
                                                        <i className="ti ti-wallet fs-20"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="d-block text-muted">Wallet Balance</span>
                                                    <span className="d-block fw-medium">13.5232 <span className="fs-12 text-muted fw-normal">LTC</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                XRP Wallet Address
                            </div>
                            <div>
                                <Button variant="" className="btn btn-primary-ghost btn-wave">Connect</Button>
                            </div>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="d-flex align-items-end flex-wrap justify-content-between gap-4 mb-3">
                                <div className="flex-fill">
                                    <label htmlFor="btc-wallet-address3" className="form-label">Wallet Address</label>
                                    <div className="input-group">
                                        <Form.Control type="text" className="" id="btc-wallet-address3" defaultValue="afb0dc8bc87472481559ffsd415c86ef43ed8df" placeholder="Placeholder" />
                                        <Button variant="" className="btn btn-primary">Copy</Button>
                                    </div>
                                </div>
                                <div className="avatar avatar-lg border p-1">
                                    <img src="../../../assets/images/media/media-68.png" className="qr-image" alt="" />
                                </div>
                            </div>
                            <div className="p-3 border border-dashed">
                                <div className="row gy-3">
                                    <Col xl={4} className="">
                                        <div className="">
                                            <div className="d-flex align-items-center flex-wrap gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar bg-success-transparent">
                                                        <i className="ti ti-arrow-narrow-down fs-20"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="d-block text-muted">Received</span>
                                                    <span className="d-block fw-medium">5.2834 <span className="fs-12 text-muted fw-normal">LTC</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={4} className="">
                                        <div className="">
                                            <div className="d-flex align-items-center flex-wrap gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar bg-danger-transparent">
                                                        <i className="ti ti-arrow-narrow-up fs-20"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="d-block text-muted">Sent</span>
                                                    <span className="d-block fw-medium">1.7382 <span className="fs-12 text-muted fw-normal">LTC</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={4} className="">
                                        <div className="">
                                            <div className="d-flex align-items-center flex-wrap gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar bg-secondary-transparent">
                                                        <i className="ti ti-wallet fs-20"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="d-block text-muted">Wallet Balance</span>
                                                    <span className="d-block fw-medium">13.5232 <span className="fs-12 text-muted fw-normal">LTC</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Wallet;
