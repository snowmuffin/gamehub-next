"use client";
import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import Seo from "@/shared/layout-components/seo/seo";

const ComingSoonKo = () => (
    <Fragment>
        <Seo title={"곧 업데이트 예정"} />
        <Row className="authentication coming-soon justify-content-center my-auto g-0 mx-0 coming-soon-main pt-4">
            <Col xxl={7} xl={8} lg={8} className="col-12 my-auto">
                <div className="authentication-cover my-5">
                    <div className="aunthentication-cover-content text-center m-3 card custom-card">
                        <div className="row justify-content-center align-items-center mx-0 g-0">
                            <Col xxl={7} xl={8} lg={8} md={12} sm={12} className="col-12 mb-md-0 mb-5">
                                <div className="d-flex align-items-center mb-3 justify-content-center gap-1">
                                    <h1 className="construction-gradient-title mb-0">곧 업데이트 예정</h1>
                                </div>
                                <p className="mb-4 fs-14">
                                    업데이트 예정입니다!
                                </p>
                                <div className="mt-5">
                                    <Link href="/dashboard/gaming">
                                        <img src="../../assets/images/brand-logos/desktop-dark.png" alt="" className="authentication-brand" />
                                    </Link>
                                </div>
                            </Col>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </Fragment>
);

export default ComingSoonKo;
