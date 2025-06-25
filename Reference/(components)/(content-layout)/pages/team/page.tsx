"use client";
import { TeamData } from "@/shared/data/pages/searchpagedata";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Form, InputGroup, Modal, Pagination, Row } from "react-bootstrap";

const Team = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Fragment>
            <Seo title={"Team"} />
            <Row>
                <Col xl={12}>
                    <div className="d-flex justify-content-between mb-3">
                        <div className="h5 fw-medium">Team</div>
                        <div>
                            <Button onClick={handleShow} variant="" className="btn btn-sm btn-success-light btn-wave" data-bs-toggle="modal" data-bs-target="#add-member"><i className="ri-add-line me-2"></i> Add Member</Button>
                        </div>
                    </div>
                    <Row>
                        {TeamData.map((idx) => (
                            <Col xxl={3} lg={6} key={Math.random()}>
                                <Card className="custom-card border rounded">
                                    <div className="top-left"></div>
                                    <div className="top-right"></div>
                                    <div className="bottom-left"></div>
                                    <div className="bottom-right"></div>
                                    <Card.Body className="p-4 text-center">
                                        <span className="avatar avatar-xl team-avatar p-1 mb-3">
                                            <img src={idx.src1} alt="" />
                                        </span>
                                        <div className="team-member-details">
                                            <span className="mb-0 fw-medium fs-16 text-truncate d-block">
                                                <Link href="#!" scroll={false}>{idx.heading}</Link>
                                            </span>
                                            <span className="mb-0 fs-13 text-muted d-block">{idx.mail}</span>
                                            <div className="btn-list mt-2">
                                                <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light">
                                                    <i className="ri-facebook-line fw-bold"></i>
                                                </Button>
                                                <Button variant="" className="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light">
                                                    <i className="ri-twitter-x-line fw-bold"></i>
                                                </Button>
                                                <Button variant="" className="btn btn-sm btn-icon btn-warning-light btn-wave waves-effect waves-light">
                                                    <i className="ri-instagram-line fw-bold"></i>
                                                </Button>
                                                <Button variant="" className="btn btn-sm btn-icon btn-success-light btn-wave waves-effect waves-light">
                                                    <i className="ri-github-line fw-bold"></i>
                                                </Button>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer className="border-block-start-dashed border-top text-center p-0">
                                        <div className="d-flex">
                                            <div className="text-center p-3 border-end border-inline-end-dashed flex-fill">
                                                <Link href="#!" scroll={false} className="text-secondary fs-13"><i className="ri-eye-line me-1 d-inline-block"></i> View</Link>
                                            </div>
                                            <div className="text-center p-3 flex-fill">
                                                <Link href="#!" scroll={false} className="text-primary fs-13"><i className="ri-file-list-line me-1 d-inline-block"></i> Assign</Link>
                                            </div>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <Pagination className="justify-content-center">
                        <Pagination.Item disabled>
                            Prev
                        </Pagination.Item>
                        <Pagination.Item >1</Pagination.Item>
                        <Pagination.Item className="" active>2
                        </Pagination.Item>
                        <Pagination.Item >3</Pagination.Item>
                        <Pagination.Item className=" page-next">
                            Nex
                        </Pagination.Item>
                    </Pagination>
                </Col>
            </Row>
            <Modal centered show={show} onHide={handleClose} className="fade" id="add-member" tabindex="-1" aria-labelledby="addmemberLabel" aria-modal="true" role="dialog">
                <div className="modal-content">
                    <Modal.Header className="">
                        <Modal.Title className="" id="addmemberLabel">Add Member</Modal.Title>
                        <Button variant="" onClick={handleClose} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></Button>
                    </Modal.Header>
                    <Modal.Body className="px-4">
                        <Row>
                            <Col xl={12}>
                                <Form.Label htmlFor="team-name01" className="">Name</Form.Label>
                                <Form.Control type="text" className="mb-3" id="team-name01" placeholder="Enter Name" />
                            </Col>
                            <Col xl={12}>
                                <Form.Label htmlFor="team-mail01" className="">Mail ID</Form.Label>
                                <Form.Control type="text" className="" id="team-mail01" placeholder="Enter Mail Address" />
                            </Col> </Row>
                    </Modal.Body>
                    <div className="modal-footer">
                        <Button variant="" type="button" className="btn btn-sm btn-light" onClick={handleClose} data-bs-dismiss="modal">Cancel</Button>
                        <Button variant="" type="button" className="btn btn-sm btn-primary">Add</Button>
                    </div>
                </div>
            </Modal>
        </Fragment>
    );
};

export default Team;
