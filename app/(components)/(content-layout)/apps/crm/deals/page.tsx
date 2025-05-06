"use client";
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Button, Card, Col, Dropdown, Form, InputGroup, Modal, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';

const Deals = () => {

    const firstContainerRef = useRef(null);
    const leftContainerRef = useRef(null);
    const rightContainerRef = useRef(null);
    const topContainerRef = useRef(null);
    const bottomContainerRef = useRef(null);
    const lastContainerRef = useRef(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const dragula = require("dragula");
            const windowElement = window;

            if (leftContainerRef.current && rightContainerRef.current && topContainerRef.current && bottomContainerRef.current && lastContainerRef.current && firstContainerRef.current) {
                const containers = [
                    firstContainerRef.current,
                    leftContainerRef.current,
                    rightContainerRef.current,
                    topContainerRef.current,
                    bottomContainerRef.current,
                    lastContainerRef.current,
                ];
                const drake = dragula(containers);

                if (document.querySelector(".firstdrag")?.classList.contains("task-Null")) {
                    console.log("aaa");
                    document.querySelector(".view-more-button")?.classList.add("d-none");
                }
            }

            OnDivChange();
        }
    }, []);

    const elementsToModify = [
        firstContainerRef,
        leftContainerRef,
        rightContainerRef,
        topContainerRef,
        bottomContainerRef,
        lastContainerRef,
    ];

    const OnDivChange = () => {
        elementsToModify.forEach((elementId) => {
            const element: any = elementId.current;
            if (element?.children.length <= 0) {
                element?.classList.add("task-Null");
                element?.parentNode.parentElement.parentElement.querySelector(".view-more-button")?.classList.add("d-none");
            } else {
                element?.classList.remove("task-Null");
                element?.parentNode.parentElement.parentElement.querySelector(".view-more-button")?.classList.remove("d-none");
            }
        });
    };


    const [startDate, setStartDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [selectedImage, setSelectedImage] = useState("../../../assets/images/faces/9.jpg");
    const fileInputRef: any = useRef(null);
    const openFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const handleImageChange = (e: any) => {
        const selectedFile = e.target.files && e.target.files[0];

        if (selectedFile) {
            // You can handle the file here, for example, upload it to a server.
            const reader = new FileReader();
            reader.onload = (event: any) => {
                setSelectedImage(event.target?.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleDateChange = (date: React.SetStateAction<Date>) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };

    return (
        <Fragment>
            <Seo title={"Deals"} />
            <Row>
                <Col xl={12} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="">
                            <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                <div className="d-flex align-items-center">
                                    <span className="fw-medium fs-16 me-1">Deals</span><span className="badge bg-light text-default align-middle">16</span>
                                </div>
                                <div className="d-flex flex-wrap gap-2">
                                    <Button variant='' onClick={handleShow} className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#create-contact"><i className="ri-add-line me-1 fw-medium align-middle"></i>New Deal</Button>
                                    <Button variant='' className="btn btn-success-light btn-sm">Export As CSV</Button>
                                    <Dropdown>
                                        <Dropdown.Toggle as="a" href="#!" className="btn btn-light btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                            Sort By<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-menu dropdown-menu-end" role="menu">
                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Newest</Link></Dropdown.Item>
                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Date Added</Link></Dropdown.Item>
                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>A - Z</Link></Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xxl={2} md={4}>
                    <Card className="custom-card">
                        <Card.Body className="p-3">
                            <div className="fw-medium fs-15 d-flex gap-2 justify-content-center align-items-center lead-discovered"><div className="dot-icon"></div>Leads Discovered</div>
                            <div className="d-flex align-items-center gap-2 flex-wrap justify-content-center">
                                <span className="badge bg-light text-default">32 Leads</span><span className="text-primary fw-medium">$13,581</span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={2} md={4}>
                    <Card className="custom-card">
                        <Card.Body className="p-3">
                            <div className="fw-medium fs-15 d-flex gap-2 justify-content-center align-items-center lead-qualified"><div className="dot-icon"></div>Qualified Leads</div>
                            <div className="d-flex align-items-center gap-2 flex-wrap justify-content-center">
                                <span className=" badge bg-light text-default">18 Leads</span><span className="text-primary fw-medium">$54,141</span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={2} md={4}>
                    <Card className="custom-card">
                        <Card.Body className="p-3">
                            <div className="fw-medium fs-15 d-flex gap-2 justify-content-center align-items-center contact-initiated"><div className="dot-icon"></div>Contact Initiated</div>
                            <div className="d-flex align-items-center gap-2 flex-wrap justify-content-center">
                                <span className=" badge bg-light text-default">08 Leads</span><span className="text-primary fw-medium">$14,841</span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={2} md={4}>
                    <Card className="custom-card">
                        <Card.Body className="p-3">
                            <div className="fw-medium fs-15 d-flex gap-2 justify-content-center align-items-center need-identified"><div className="dot-icon"></div>Needs Identified</div>
                            <div className="d-flex align-items-center gap-2 flex-wrap justify-content-center">
                                <span className=" badge bg-light text-default">58 Leads</span><span className="text-primary fw-medium">$41,842</span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={2} md={4}>
                    <Card className="custom-card">
                        <Card.Body className="p-3">
                            <div className="fw-medium fs-15 d-flex gap-2 justify-content-center align-items-center negotiation"><span className="dot-icon"></span>Negotiation</div>
                            <div className="d-flex align-items-center gap-2 justify-content-center">
                                <span className=" badge bg-light text-default">88 Leads</span><span className="text-primary fw-medium">$32,411</span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={2} md={4}>
                    <Card className="custom-card">
                        <Card.Body className="p-3">
                            <div className="fw-medium fs-15 d-flex gap-2 justify-content-center align-items-center deal-finalized"><div className="dot-icon"></div>Deal Finalized</div>
                            <div className="d-flex align-items-center gap-2 justify-content-center">
                                <span className=" badge bg-light text-default">151Leads</span><span className="text-primary fw-medium">$14,852</span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="crm-deals">
                <Col xxl={2} className="" id="leads-discovered" ref={firstContainerRef} onMouseEnter={OnDivChange}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="text-center">
                            <div className="d-flex align-items-center fw-medium justify-content-center gap-1 flex-wrap">
                                <div className="d-flex align-items-center">
                                    <div className="lh-1 me-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/12.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">Service Upgrade</div>
                                </div>
                            </div>
                            <div>$3000</div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" scroll={false} className="company-name">Nexis Technologies</Link>
                                </div>
                                <div className="text-muted fs-12">15,Oct 2023 - 12:18PM</div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="text-center">
                            <div className="d-flex align-items-center fw-medium justify-content-center gap-1 flex-wrap">
                                <div className="d-flex align-items-center">
                                    <div className="lh-1 me-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/5.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">Product Demo</div>
                                </div>
                            </div>
                            <div>$50,000</div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" scroll={false} className="company-name">MarbelsIntech solution</Link>
                                </div>
                                <div className="text-muted fs-12">18,Nov 2023 - 11:12AM</div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="text-center">
                            <div className="d-flex align-items-center fw-medium justify-content-center gap-1 flex-wrap">
                                <div className="d-flex align-items-center">
                                    <div className="lh-1 me-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/15.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">Website Redesign</div>
                                </div>
                            </div>
                            <div>$25,000</div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" scroll={false} className="company-name">Embark Technologies</Link>
                                </div>
                                <div className="text-muted fs-12">12,Aug 2023 - 10:15AM</div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="text-center">
                            <div className="d-flex align-items-center fw-medium justify-content-center gap-1 flex-wrap">
                                <div className="d-flex align-items-center">
                                    <div className="lh-1 me-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/6.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">Consulting Services</div>
                                </div>
                            </div>
                            <div>$15,000</div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" scroll={false} className="company-name">Adam Johnson</Link>
                                </div>
                                <div className="text-muted fs-12">29,Aug 2023 - 4:18PM</div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <div className="col-xxl-2" id="leads-qualified" ref={leftContainerRef} onMouseEnter={OnDivChange}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="text-center">
                            <div className="d-flex align-items-center fw-medium justify-content-center gap-1 flex-wrap">
                                <div className="d-flex align-items-center">
                                    <div className="lh-1 me-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/11.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">Event Sponsorship</div>
                                </div>
                            </div>
                            <div>$15,000</div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" scroll={false} className="company-name">Internatinal Indus</Link>
                                </div>
                                <div className="text-muted fs-12">21,Sep 2023 - 10:25AM</div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="text-center">
                            <div className="d-flex align-items-center fw-medium justify-content-center gap-1 flex-wrap">
                                <div className="d-flex align-items-center">
                                    <div className="lh-1 me-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/11.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">Sales Training</div>
                                </div>
                            </div>
                            <div>$7,000</div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" scroll={false} className="company-name">Travels Services</Link>
                                </div>
                                <div className="text-muted fs-12">10,Sep 2023 - 9:20AM</div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="text-center">
                            <div className="d-flex align-items-center fw-medium justify-content-center gap-1 flex-wrap">
                                <div className="d-flex align-items-center">
                                    <div className="lh-1 me-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/14.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">Content Creation</div>
                                </div>
                            </div>
                            <div>$4,000</div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" scroll={false} className="company-name">Janvi Industries</Link>
                                </div>
                                <div className="text-muted fs-12">25,Mar 2023 - 3:38PM</div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-xxl-2" id="contact-initiated" ref={rightContainerRef} onMouseEnter={OnDivChange}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="text-center">
                            <div className="d-flex align-items-center fw-medium justify-content-center gap-1 flex-wrap">
                                <div className="d-flex align-items-center">
                                    <div className="lh-1 me-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/3.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">E-commerce Integration</div>
                                </div>
                            </div>
                            <div>$13,000</div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" scroll={false} className="company-name">Classic Marketing</Link>
                                </div>
                                <div className="text-muted fs-12">15,Sep 2023 - 8:32PM</div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="text-center">
                            <div className="d-flex align-items-center fw-medium justify-content-center gap-1 flex-wrap">
                                <div className="d-flex align-items-center">
                                    <div className="lh-1 me-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/16.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">Ad Campaign</div>
                                </div>
                            </div>
                            <div>$6,500</div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" scroll={false} className="company-name">Umbrella Corp</Link>
                                </div>
                                <div className="text-muted fs-12">17,Oct 2023 - 10:54AM</div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-xxl-2" id="needs-identified" ref={topContainerRef} onMouseEnter={OnDivChange}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="text-center">
                            <div className="d-flex align-items-center fw-medium justify-content-center gap-1 flex-wrap">
                                <div className="d-flex align-items-center">
                                    <div className="lh-1 me-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/10.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">Webinar Series</div>
                                </div>
                            </div>
                            <div>$9,500</div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" scroll={false} className="company-name">Convention Prime</Link>
                                </div>
                                <div className="text-muted fs-12">16,Sep 2023 - 11:56AM</div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="text-center">
                            <div className="d-flex align-items-center fw-medium justify-content-center gap-1 flex-wrap">
                                <div className="d-flex align-items-center">
                                    <div className="lh-1 me-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/13.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">SEO Audit</div>
                                </div>
                            </div>
                            <div>$4,000</div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" scroll={false} className="company-name">Indusakis Services</Link>
                                </div>
                                <div className="text-muted fs-12">27,Nov 2023 - 5:18PM</div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="text-center">
                            <div className="d-flex align-items-center fw-medium justify-content-center gap-1 flex-wrap">
                                <div className="d-flex align-items-center">
                                    <div className="lh-1 me-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/8.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">Loyalty Program</div>
                                </div>
                            </div>
                            <div>$13,000</div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" scroll={false} className="company-name">Mankind Corp</Link>
                                </div>
                                <div className="text-muted fs-12">26,Aug 2023 - 5:28AM</div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="text-center">
                            <div className="d-flex align-items-center fw-medium justify-content-center gap-1 flex-wrap">
                                <div className="d-flex align-items-center">
                                    <div className="lh-1 me-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/9.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">CRM Integration</div>
                                </div>
                            </div>
                            <div>$15,000</div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" scroll={false} className="company-name">Dolpin Consulting</Link>
                                </div>
                                <div className="text-muted fs-12">14,Sep 2023 - 11:29PM</div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-xxl-2" id="negotiation" ref={bottomContainerRef} onMouseEnter={OnDivChange}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="text-center">
                            <div className="d-flex align-items-center fw-medium justify-content-center gap-1 flex-wrap">
                                <div className="d-flex align-items-center">
                                    <div className="lh-1 me-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/16.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">Media Analytics</div>
                                </div>
                            </div>
                            <div>$10,000</div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" scroll={false} className="company-name">Multi Networks</Link>
                                </div>
                                <div className="text-muted fs-12">18,Mar 2023 - 2:32PM</div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="text-center">
                            <div className="d-flex align-items-center fw-medium justify-content-center gap-1 flex-wrap">
                                <div className="d-flex align-items-center">
                                    <div className="lh-1 me-1">
                                        <span className="avatar avatar-sm avatar-rounded bg-light">
                                            <img src="../../../assets/images/faces/21.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">Lead Nurturing Strategy</div>
                                </div>
                            </div>
                            <div>$5,000</div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" scroll={false} className="company-name">Globis Solutions</Link>
                                </div>
                                <div className="text-muted fs-12">16,Aug 2023 - 7:53AM</div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="text-center">
                            <div className="d-flex align-items-center fw-medium justify-content-center gap-1 flex-wrap">
                                <div className="d-flex align-items-center">
                                    <div className="lh-1 me-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            PL
                                        </span>
                                    </div>
                                    <div className="fs-14">Website Maintenance</div>
                                </div>
                            </div>
                            <div>$8,000</div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" scroll={false} className="company-name">Canvas Industries</Link>
                                </div>
                                <div className="text-muted fs-12">30,Aug 2023 - 6:30AM</div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="text-center">
                            <div className="d-flex align-items-center fw-medium justify-content-center gap-1 flex-wrap">
                                <div className="d-flex align-items-center">
                                    <div className="lh-1 me-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/2.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">Newsletter Campaign</div>
                                </div>
                            </div>
                            <div>$3,000</div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" scroll={false} className="company-name">Hiktech Solutions</Link>
                                </div>
                                <div className="text-muted fs-12">12,Sep 2023 - 10:18AM</div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="text-center">
                            <div className="d-flex align-items-center fw-medium justify-content-center gap-1 flex-wrap">
                                <div className="d-flex align-items-center">
                                    <div className="lh-1 me-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/17.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">Graphic Design</div>
                                </div>
                            </div>
                            <div>$5,000</div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" scroll={false} className="company-name">Premier Services</Link>
                                </div>
                                <div className="text-muted fs-12">10,Aug 2023 - 10:18PM</div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-xxl-2" id="deal-finalized" ref={lastContainerRef} onMouseEnter={OnDivChange}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="text-center">
                            <div className="d-flex align-items-center fw-medium justify-content-center gap-1 flex-wrap">
                                <div className="d-flex align-items-center">
                                    <div className="lh-1 me-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/1.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">CRM Training</div>
                                </div>
                            </div>
                            <div>$5,200</div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" scroll={false} className="company-name">Mountain Industries</Link>
                                </div>
                                <div className="text-muted fs-12">15,Sep 2023 - 8:20AM</div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="text-center">
                            <div className="d-flex align-items-center fw-medium justify-content-center gap-1 flex-wrap">
                                <div className="d-flex align-items-center">
                                    <div className="lh-1 me-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/10.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">Market Research</div>
                                </div>
                            </div>
                            <div>$11,500</div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" scroll={false} className="company-name">Skyflow Solutions</Link>
                                </div>
                                <div className="text-muted fs-12">28,Oct 2023 - 9:27PM</div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Row>
            <Modal show={show} onHide={handleClose} className="modal fade" id="create-contact" tabIndex={-1} aria-hidden="true">
                <div className="">
                    <div className="">
                        <Modal.Header closeButton>
                            <h6 className="modal-title">New Deal</h6>
                        </Modal.Header>
                        <Modal.Body className="modal-body px-4">
                            <div className="row gy-3">
                                <Col xl={12}>
                                    <div className="mb-0 text-center">
                                        <span className="avatar avatar-xxl avatar-rounded">
                                            <img src={selectedImage || ''} alt="" id="profile-img" />
                                            <span className="badge rounded-pill bg-primary avatar-badge" onClick={openFileInput}>
                                                <input
                                                    type="file"
                                                    name="photo"
                                                    className="position-absolute w-100 h-100 op-0"
                                                    id="profile-change"
                                                    ref={fileInputRef}
                                                    onChange={handleImageChange}
                                                    style={{ display: 'none' }}
                                                />
                                                <i className="fe fe-camera"></i>
                                            </span>
                                        </span>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="deal-name" className="form-label">Contact Name</Form.Label>
                                    <Form.Control type="text" className="form-control" id="deal-name" placeholder="Contact Name" />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="deal-lead-score" className="form-label">Deal Value</Form.Label>
                                    <Form.Control type="number" className="form-control" id="deal-lead-score" placeholder="Deal Value" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label htmlFor="company-name" className="form-label">Company Name</Form.Label>
                                    <Form.Control type="text" className="form-control" id="company-name" placeholder="Company Name" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label className="form-label">Last Contacted</Form.Label>
                                    <div className="form-group">
                                        <InputGroup className="input-group">
                                            <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </InputGroup.Text>
                                            <DatePicker
                                                placeholderText='Choose date and time'
                                                selected={startDate}
                                                onChange={handleDateChange}
                                                timeInputLabel="Time:"
                                                dateFormat="MM/dd/yyyy h:mm aa"
                                                showTimeInput
                                            />
                                        </InputGroup>
                                    </div>
                                </Col>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant='' type="button" className="btn btn-light" onClick={handleClose}
                                data-bs-dismiss="modal">Cancel</Button>
                            <Button variant='' type="button" className="btn btn-primary">Create Deal</Button>
                        </Modal.Footer>
                    </div>
                </div>
            </Modal>
        </Fragment>
    );
};

export default Deals;
