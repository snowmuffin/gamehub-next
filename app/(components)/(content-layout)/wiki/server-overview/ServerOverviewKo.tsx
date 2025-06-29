"use client";
import Seo from "@/shared/layout-components/seo";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

const ServerOverviewKo = () => (
    <Fragment>
        <Seo title="서버 개요" />
        <Row className="justify-content-center">
            <Col xl={12}>
                <Card className="custom-card overflow-hidden">
                    <div className="top-left"></div>
                    <div className="top-right"></div>
                    <div className="bottom-left"></div>
                    <div className="bottom-right"></div>
                    <Card.Body className="p-5">
                        <div className="text-primary h5 fw-medium mb-4">
                            SEK 서버 - 개요
                        </div>
                        <div className="server-overview border p-3 overflow-scroll">
                            <div className="mb-4 fs-14">
                                <p className="mb-3">
                                    <span className="fw-medium text-default">SEK 서버에 오신 것을 환영합니다!</span>
                                </p>
                            </div>
                            <h5 className="fw-medium pb-3 text-primary"><span>주요 특징 :</span></h5>
                            <ol className="fs-14">
                                <li className="mb-4">
                                    <p className="fw-medium mb-2 fs-14 text-primary">업그레이드 모듈</p>
                                    <p className="mb-0 text-muted">
                                        업그레이드 모듈을 적용하여 그리드의 성능을 자유롭게 개조하고, 창의적인 설계를 실현할 수 있습니다.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <p className="fw-medium mb-2 fs-14 text-primary">웹 인벤토리</p>
                                    <p className="mb-0 text-muted">
                                        웹페이지에서 별도의 인벤토리를 통해 인게임 아이템을 업로드/다운로드할 수 있어, 아이템 관리가 매우 편리합니다.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <p className="fw-medium mb-2 fs-14 text-primary">웹 거래</p>
                                    <p className="mb-0 text-muted">
                                        웹사이트 기반의 거래 시스템(곧 오픈 예정)으로 안전하고 간편하게 아이템을 교환할 수 있습니다.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <p className="fw-medium mb-2 fs-14 text-primary">랭킹 시스템</p>
                                    <p className="mb-0 text-muted">
                                        웹사이트에서 실시간으로 집계되는 랭킹을 통해 다른 유저들과 경쟁하고 자신의 성과를 확인할 수 있습니다.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <p className="fw-medium mb-2 fs-14 text-primary">프라임 블럭</p>
                                    <p className="mb-0 text-muted">
                                        프라임 매터라는 희귀 자원으로 제작되는 고급 블럭을 만나보세요.
                                    </p>
                                </li>
                                <li>
                                    <p className="fw-medium mb-2 fs-14 text-primary">추가 컨텐츠</p>
                                    <p className="mb-0 text-muted">
                                        앞으로도 새로운 기능과 컨텐츠가 지속적으로 추가될 예정입니다.
                                    </p>
                                </li>
                            </ol>
                 
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Fragment>
);

export default ServerOverviewKo;
