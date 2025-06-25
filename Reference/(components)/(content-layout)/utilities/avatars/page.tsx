"use client";
import { avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9 } from "@/shared/data/prismdata/utilities-prism";
import { avtaricon, avtarnumber, avtarsize, stackedavatar } from "@/shared/data/utilities/avatarsdata";
import Seo from "@/shared/layout-components/seo/seo";
import ShowCode from "@/shared/layout-components/showcode/showcode";
import Link from "next/link";
import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";

const Avatars = () => {
    return (
        <Fragment>
            <Seo title={"Avatars"} />
            <Row>
                <Col xl={12} md={12} sm={12} className="">
                    <ShowCode title="Avatars" className="card custom-card" code={avatar1}>
                        <div className="">
                            <span className="avatar me-2 avatar-radius-0">
                                <img src="../../assets/images/faces/1.jpg" alt="img" />
                            </span>
                            <span className="avatar me-2">
                                <img src="../../assets/images/faces/2.jpg" alt="img" />
                            </span>
                            <span className="avatar me-2 avatar-rounded">
                                <img src="../../assets/images/faces/3.jpg" alt="img" />
                            </span>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={12} md={12} sm={12} className="">
                    <ShowCode title="Avatar Sizes  <p class='subtitle text-muted fs-12 fw-normal'> Avatar of different sizes </p>" code={avatar2} className="custom-card">
                        <div className="">
                            {avtarsize.map((idx) => (
                                <span className={`avatar avatar-${idx.size} me-2`} key={Math.random()}>
                                    <img src={idx.src} alt="img" />
                                </span>
                            ))}
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={12} md={12} sm={12} className="">
                    <ShowCode code={avatar3} title=" Avatar With Icons <p class='subtitle text-muted fs-12 fw-normal'> Avatar contains icons to perform respective action. </p>" className="custom-card">
                        <div className="">
                            {avtaricon.map((idx) => (
                                <span className={`avatar avatar-${idx.size} me-2 avatar-rounded`} key={Math.random()}>
                                    <img src={idx.src} alt="img" />
                                    <Link href="#!" scroll={false} className={`badge bg-${idx.color} rounded-pill avatar-badge`}><i className={`fe fe-${idx.data}`}></i></Link>
                                </span>
                            ))}
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={12} md={12} sm={12} className="">
                    <ShowCode code={avatar4} title=" Avatar With Online Status Indicators
                                <p class='subtitle text-muted fs-12 fw-normal'>
                                    avatars having online status indicator.
                                </p>" className="custom-card">
                        <div className="">
                            <span className="avatar avatar-xs me-2 online avatar-rounded">
                                <img src="../../assets/images/faces/8.jpg" alt="img" />
                            </span>
                            <span className="avatar avatar-sm online me-2 avatar-rounded">
                                <img src="../../assets/images/faces/10.jpg" alt="img" />
                            </span>
                            <span className="avatar avatar-md me-2 online avatar-rounded">
                                <img src="../../assets/images/faces/12.jpg" alt="img" />
                            </span>
                            <span className="avatar avatar-lg me-2 online avatar-rounded">
                                <img src="../../assets/images/faces/13.jpg" alt="img" />
                            </span>
                            <span className="avatar avatar-xl me-2 online avatar-rounded">
                                <img src="../../assets/images/faces/14.jpg" alt="img" />
                            </span>
                            <span className="avatar avatar-xxl me-2 online avatar-rounded">
                                <img src="../../assets/images/faces/15.jpg" alt="img" />
                            </span>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={12} md={12} sm={12} className="">
                    <ShowCode code={avatar5} title="  Avatar With Offline Status Indicators
                                <p class='subtitle text-muted fs-12 fw-normal'>
                                    avatars having a offline status indicator.
                                </p>" className="card custom-card">
                        <div className="">
                            <span className="avatar avatar-xs me-2 offline avatar-rounded">
                                <img src="../../assets/images/faces/2.jpg" alt="img" />
                            </span>
                            <span className="avatar avatar-sm offline me-2 avatar-rounded">
                                <img src="../../assets/images/faces/3.jpg" alt="img" />
                            </span>
                            <span className="avatar avatar-md me-2 offline avatar-rounded">
                                <img src="../../assets/images/faces/4.jpg" alt="img" />
                            </span>
                            <span className="avatar avatar-lg me-2 offline avatar-rounded">
                                <img src="../../assets/images/faces/5.jpg" alt="img" />
                            </span>
                            <span className="avatar avatar-xl me-2 offline avatar-rounded">
                                <img src="../../assets/images/faces/6.jpg" alt="img" />
                            </span>
                            <span className="avatar avatar-xxl me-2 offline avatar-rounded">
                                <img src="../../assets/images/faces/7.jpg" alt="img" />
                            </span>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={12} md={12} sm={12} className="">
                    <ShowCode code={avatar6} title=" Avatars With Number Badges
                                <p class='subtitle text-muted fs-12 fw-normal'>
                                    Avatar numbers indicates the no. of unread notififactions/messages.
                                </p>" className="card custom-card">
                        <div className="">
                            {avtarnumber.map((idx) => (
                                <span className={`avatar avatar-${idx.size} me-2 avatar-rounded`} key={Math.random()}>
                                    <img src={idx.src} alt="img" />
                                    <span className={`badge rounded-pill bg-${idx.color} avatar-badge`}>{idx.data}</span>
                                </span>
                            ))}
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={12} lg={6} md={12} sm={12} className="">
                    <ShowCode code={avatar7} title=" Avatar With Initials
                                <p class='subtitle text-muted fs-12 fw-normal'>
                                    Avatar contains intials when user profile doesn't exist.
                                </p>" className="card custom-card">
                        <div className="">
                            <span className="avatar avatar-xs m-2 bg-primary">
                                xs
                            </span>
                            <span className="avatar avatar-sm m-2 bg-secondary">
                                SM
                            </span>
                            <span className="avatar avatar-md m-2 bg-warning">
                                MD
                            </span>
                            <span className="avatar avatar-lg m-2 bg-danger">
                                LG
                            </span>
                            <span className="avatar avatar-xl m-2 bg-success">
                                XL
                            </span>
                            <span className="avatar avatar-xxl m-2 bg-info">
                                XXL
                            </span>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={12} lg={6} md={12} sm={12} className="">
                    <ShowCode code={avatar8} className="custom-card" title=" Stacked Avatars
                                <p class='subtitle text-muted fs-12 fw-normal'>
                                    Group of avatars stacked together.
                                </p>">
                        <div className="">
                            <div className="avatar-list-stacked">
                                {stackedavatar.map((idx) => (
                                    <span className="avatar" key={Math.random()}>
                                        <img src={idx.src} alt="img" />
                                    </span>
                                ))}
                                <Link className="avatar bg-primary text-fixed-black" href="#!" scroll={false}>
                                    +8
                                </Link>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={12} lg={6} md={12} sm={12} className="">
                    <ShowCode code={avatar9} className="custom-card" title="Rounded Stacked Avatars
                                <p class='subtitle text-muted fs-12 fw-normal'>
                                    Group of avatars stacked together.
                                </p>">
                        <div className="">
                            <div className="avatar-list-stacked avatar-rounded">
                                {stackedavatar.map((idx) => (
                                    <span className="avatar avatar-rounded" key={Math.random()}>
                                        <img src={idx.src} alt="img" />
                                    </span>
                                ))}
                                <Link className="avatar avatar-rounded bg-primary text-fixed-black" href="#!" scroll={false}>
                                    +8
                                </Link>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Avatars;
