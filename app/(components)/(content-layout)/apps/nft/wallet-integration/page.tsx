"use client";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

const WalletIntegration = () => {
    return (
        <Fragment>
            <Seo title={"Wallet Integration"} />
            <Row>
                <Col xl={9}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Choose Wallet
                            </div>
                            <div>
                                <button className="btn btn-secondary btn-wave">Add New Wallet</button>
                            </div>
                        </div>
                        <Card.Body className="p-4">
                            <Row className="justify-content-center">
                                <Col xxl={3}>
                                    <Card className="custom-card nft-wallet active">
                                        <Card.Body className="p-3">
                                            <Link href="#!" scroll={false} className="stretched-link"></Link>
                                            <div className="d-flex align-items-center justify-content-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-rounded p-2 bg-light">
                                                        <img src="../../../assets/images/nft-images/27.png" alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <h6 className="fw-medium mb-0">MetaMask</h6>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xxl={3}>
                                    <Card className="custom-card nft-wallet">
                                        <Card.Body className="p-3">
                                            <Link href="#!" scroll={false} className="stretched-link"></Link>
                                            <div className="d-flex align-items-center justify-content-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-rounded p-2 bg-light">
                                                        <img src="../../../assets/images/nft-images/28.png" alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <h6 className="fw-medium mb-0">Enjin Wallet</h6>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xxl={3}>
                                    <Card className="custom-card nft-wallet">
                                        <Card.Body className="p-3">
                                            <Link href="#!" scroll={false} className="stretched-link"></Link>
                                            <div className="d-flex align-items-center justify-content-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-rounded bg-light">
                                                        <img src="../../../assets/images/nft-images/26.png" alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <h6 className="fw-medium mb-0">Trust Wallet</h6>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xxl={3}>
                                    <Card className="custom-card nft-wallet">
                                        <Card.Body className="p-3">
                                            <Link href="#!" scroll={false} className="stretched-link"></Link>
                                            <div className="d-flex align-items-center justify-content-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-rounded bg-light p-2">
                                                        <img src="../../../assets/images/nft-images/40.png" alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <h6 className="fw-medium mb-0">Coinbase Wallet</h6>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xxl={3}>
                                    <Card className="custom-card nft-wallet">
                                        <Card.Body className="p-3">
                                            <Link href="#!" scroll={false} className="stretched-link"></Link>
                                            <div className="d-flex align-items-center justify-content-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-rounded bg-light p-2">
                                                        <img src="../../../assets/images/nft-images/25.png" alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <h6 className="fw-medium mb-0">Lido</h6>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xxl={3}>
                                    <Card className="custom-card nft-wallet">
                                        <Card.Body className="p-3">
                                            <Link href="#!" scroll={false} className="stretched-link"></Link>
                                            <div className="d-flex align-items-center justify-content-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-rounded bg-light">
                                                        <img src="../../../assets/images/nft-images/7.png" alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <h6 className="fw-medium mb-0">Huobi Wallet</h6>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Card.Body>
                        <div className="card-footer">
                            <div>
                                <button className="btn btn-success float-end btn-wave">Connect Wallet</button>
                            </div>
                        </div>
                    </Card>
                </Col>
                <div className="col-xl-3">
                    <div className="card custom-card overflow-hidden">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="card-header">
                            <div className="card-title">
                                Choose Network
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <ul className="list-group list-group-flush nft-list">
                                <li className="list-group-item">
                                    <Link href="#!" scroll={false} className="stretched-link"></Link>
                                    <div className="d-flex align-items-center gap-2">
                                        <div>
                                            <span className="avatar avatar-rounded avatar-sm bg-light p-1">
                                                <img src="../../../assets/images/nft-images/34.png" alt="" />
                                            </span>
                                        </div>
                                        <div className="fs-14 fw-medium">Ethereum</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <Link href="#!" scroll={false} className="stretched-link"></Link>
                                    <div className="d-flex align-items-center gap-2">
                                        <div>
                                            <span className="avatar avatar-rounded avatar-sm bg-light p-1">
                                                <img src="../../../assets/images/nft-images/35.png" alt="" />
                                            </span>
                                        </div>
                                        <div className="fs-14 fw-medium">Binance</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <Link href="#!" scroll={false} className="stretched-link"></Link>
                                    <div className="d-flex align-items-center gap-2">
                                        <div>
                                            <span className="avatar avatar-rounded avatar-sm bg-light p-1">
                                                <img src="../../../assets/images/nft-images/36.png" alt="" />
                                            </span>
                                        </div>
                                        <div className="fs-14 fw-medium">Solana</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <Link href="#!" scroll={false} className="stretched-link"></Link>
                                    <div className="d-flex align-items-center gap-2">
                                        <div>
                                            <span className="avatar avatar-rounded avatar-sm bg-light p-1">
                                                <img src="../../../assets/images/nft-images/39.png" alt="" />
                                            </span>
                                        </div>
                                        <div className="fs-14 fw-medium">Tezos</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <Link href="#!" scroll={false} className="stretched-link"></Link>
                                    <div className="d-flex align-items-center gap-2">
                                        <div>
                                            <span className="avatar avatar-rounded avatar-sm bg-light p-1">
                                                <img src="../../../assets/images/nft-images/37.png" alt="" />
                                            </span>
                                        </div>
                                        <div className="fs-14 fw-medium">Avalanche</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <Link href="#!" scroll={false} className="stretched-link"></Link>
                                    <div className="d-flex align-items-center gap-2">
                                        <div>
                                            <span className="avatar avatar-rounded avatar-sm bg-light p-1">
                                                <img src="../../../assets/images/nft-images/38.png" alt="" />
                                            </span>
                                        </div>
                                        <div className="fs-14 fw-medium">Cardano</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Row>
        </Fragment>
    );
};

export default WalletIntegration;
