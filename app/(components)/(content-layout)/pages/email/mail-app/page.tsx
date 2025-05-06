"use client";
import { Mailoptions, Mails, Mailsdata } from "@/shared/data/pages/mail/mailappdata";
import React, { Fragment, useEffect, useState } from "react";
import { Badge, Button, Col, Dropdown, Form, InputGroup, Modal, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import dynamic from 'next/dynamic';
import Link from "next/link";
import Editors from "@/shared/data/pages/mail/mailappdata1";
import Seo from "@/shared/layout-components/seo/seo";
import SimpleBar from "simplebar-react";
const Select = dynamic(() => import('react-select'), { ssr: false });
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const MailApp = () => {

    const [value1, setValue1] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [Data, setData] = useState(Mailsdata);
    const userdata: any[] = [];

    const htmlWithTableImages = '<center>  </center>';

    const [value, setValue] = useState(htmlWithTableImages);

    const myfunction = (idx: string) => {
        let Data;
        for (Data of Mailsdata) {
            if (Data.name[0] == " ") {
                Data.name = Data.name.trim();
            }
            if (Data.name.toLowerCase().includes(idx.toLowerCase())) {
                if (Data.name.toLowerCase().startsWith(idx.toLowerCase())) {
                    userdata.push(Data);
                }
            }
        }
        setData(userdata);
    };

    const [isMailNavigationVisible, setMailNavigationVisible] = useState(false);
    const [isTotalMailsVisible, setTotalMailsVisible] = useState(true);
    const [isTotalMailsHidden, setTotalMailsHidden] = useState(false);
    const [isMailsInformationVisible, setMailsInformationVisible] = useState(true);

    const Toggle1 = () => {
        if (innerWidth <= 992) {
            setMailNavigationVisible(true);
            setTotalMailsVisible(false);
            // Set isTotalMailsHidden to true when clicking Toggle1
            setTotalMailsHidden(true);
        }
    };

    const Toggle2 = () => {
        if (innerWidth <= 992) {
            setTotalMailsVisible(true);
            setMailNavigationVisible(false);
            // Set isTotalMailsHidden to false when clicking Toggle2
            setTotalMailsHidden(false);
        }
    };

    const Medium = () => {
        if (innerWidth <= 1399) {
            setMailsInformationVisible(true);
            setTotalMailsVisible(false);
            // Set isTotalMailsHidden to true when clicking Medium
            setTotalMailsHidden(true);
        }
    };

    const Close = () => {
        if (innerWidth <= 1399) {
            setMailsInformationVisible(false);
            setTotalMailsVisible(true);
            // Set isTotalMailsHidden to false when clicking Close
            setTotalMailsHidden(false);
        }
    };
    const Removeclass = () => {
        setMailsInformationVisible(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1399 && !isMailsInformationVisible) {
                setMailsInformationVisible(true);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMailsInformationVisible]);

    return (
        <Fragment>
            <Seo title={"Mail-App"} />
            <div className="main-mail-container p-2 gap-2 d-flex">
                <div className={`mail-navigation  border ${isMailNavigationVisible ? 'd-block' : ''} `}>
                    <div className="d-grid align-items-top p-3 border-bottom">
                        <Button variant="secondary" className="btn d-flex align-items-center justify-content-center" data-bs-toggle="modal" onClick={handleShow}
                            data-bs-target="#mail-Compose">
                            <i className="ri-edit-2-line fs-16 align-middle me-1"></i>Compose Mail
                        </Button>
                        <Modal size="lg" className="fade" show={show} onHide={handleClose} id="mail-Compose" tabIndex={-1} aria-labelledby="mail-ComposeLabel" aria-hidden="true">
                            <div className="">
                                <Modal.Header className="">
                                    <h6 className="modal-title" id="mail-ComposeLabel">Compose Mail</h6>
                                    <Button variant="" onClick={handleClose} type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></Button>
                                </Modal.Header>
                                <Modal.Body className="px-4">
                                    <Row>
                                        <Col xl={6} className="mb-2">
                                            <Form.Label htmlFor="fromMail" className="">From<sup><i className="ri-star-s-fill text-success fs-8"></i></sup></Form.Label>
                                            <Form.Control type="email" className="" id="fromMail" placeholder="jameslucas2345@gmail.com" />
                                        </Col>
                                        <Col xl={6} className=" mb-2">
                                            <Form.Label htmlFor="toMail" className="">To<sup>
                                                <i className="ri-star-s-fill text-success fs-8"></i></sup></Form.Label>
                                            <Select isMulti name="colors" options={Mailoptions} className="basic-multi-select"
                                                menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Mailoptions[0]]}
                                            />
                                        </Col>
                                        <Col xl={6} className="mb-2">
                                            <Form.Label htmlFor="mailCC" className=" text-dark fw-semibold">Cc</Form.Label>
                                            <Form.Control type="email" className="" id="mailCC" />
                                        </Col>
                                        <Col xl={6} className=" mb-2">
                                            <Form.Label htmlFor="mailBcc" className=" text-dark fw-semibold">Bcc</Form.Label>
                                            <Form.Control type="email" className="" id="mailBcc" />
                                        </Col>
                                        <Col xl={12} className="mb-2">
                                            <Form.Label htmlFor="Subject" className="">Subject</Form.Label>
                                            <Form.Control type="text" className="" id="Subject" placeholder="Subject" />
                                        </Col>
                                        <Col xl={12}>
                                            <label className="col-form-label">Content :</label>
                                            <div className="mail-compose">
                                                <div id="mail-compose-editor">
                                                    <ReactQuill theme="snow" value={value1} onChange={setValue1} />
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant='light' type="button" className="btn" onClick={handleClose}
                                        data-bs-dismiss="modal">Cancel</Button>
                                    <Button variant='primary' type="button" className="btn">Send</Button>
                                </Modal.Footer>
                            </div>
                        </Modal>
                    </div>
                    <div className="p-3 text-center border-block-end-dashed border-bottom">
                        <div>
                            <span className="avatar avatar-md online avatar-rounded">
                                <img src="../../../assets/images/faces/22.jpg" alt="" />
                            </span>
                        </div>
                        <div>
                            <p className="fw-medium mb-0">Anthony</p>
                            <p className="fs-13 mb-0">Anthony1992@gmail.com</p>
                        </div>
                    </div>
                        <SimpleBar>
                            <ul  className="list-unstyled mail-main-nav" id="mail-main-nav">

                                <li className="px-0 pt-0">
                                    <span className="fs-11 text-muted op-7 fw-semibold">MAILS</span>
                                </li>
                                {Mails.map((idx) => (
                                    <li className={`mail-type ${idx.class1}`} key={Math.random()} onClick={() => Toggle2()}>
                                        <Link href="#!" scroll={false}>
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className={`ri-${idx.icon} align-middle text-[.875rem]`}></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    {idx.text1}
                                                </span>
                                                <span className={idx.class}>{idx.text2}</span>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                                <li className="px-0">
                                    <span className="fs-11 text-muted op-7 fw-semibold">SETTINGS</span>
                                </li>
                                <li>
                                    <Link href="#!" scroll={false}>
                                        <div className="d-flex align-items-center">
                                            <span className="me-2 lh-1">
                                                <i className="ri-settings-3-line align-middle fs-14"></i>
                                            </span>
                                            <span className="flex-fill text-nowrap">
                                                Settings
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="px-0">
                                    <span className="fs-11 text-muted op-7 fw-semibold">LABELS</span>
                                </li>
                                <li>
                                    <Link href="#!" scroll={false}>
                                        <div className="d-flex align-items-center">
                                            <span className="me-2 lh-1">
                                                <i
                                                    className="ri-price-tag-line align-middle fs-14 fw-semibold text-secondary"></i>
                                            </span>
                                            <span className="flex-fill text-nowrap">
                                                Mail
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#!" scroll={false}>
                                        <div className="d-flex align-items-center">
                                            <span className="me-2 lh-1">
                                                <i
                                                    className="ri-price-tag-line align-middle fs-14 fw-semibold text-danger"></i>
                                            </span>
                                            <span className="flex-fill text-nowrap">
                                                Home
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#!" scroll={false}>
                                        <div className="d-flex align-items-center">
                                            <span className="me-2 lh-1">
                                                <i
                                                    className="ri-price-tag-line align-middle fs-14 fw-semibold text-success"></i>
                                            </span>
                                            <span className="flex-fill text-nowrap">
                                                Work
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#!" scroll={false}>
                                        <div className="d-flex align-items-center">
                                            <span className="me-2 lh-1">
                                                <i
                                                    className="ri-price-tag-line align-middle fs-14 fw-semibold text-dark"></i>
                                            </span>
                                            <span className="flex-fill text-nowrap">
                                                Friends
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="px-0">
                                    <span className="fs-11 text-muted op-7 fw-semibold">ONLINE USERS</span>
                                </li>
                                <li>
                                    <Link href="#!" scroll={false}>
                                        <div className="d-flex align-items-top lh-1">
                                            <div className="me-2">
                                                <span className="avatar avatar-sm online avatar-rounded">
                                                    <img src="../../../assets/images/faces/4.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-default fw-semibold mb-1">Deborah</p>
                                                <p className="fs-12 text-muted mb-0">Hello, How are you?</p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#!" scroll={false}>
                                        <div className="d-flex align-items-top lh-1">
                                            <div className="me-2">
                                                <span className="avatar avatar-sm online avatar-rounded">
                                                    <img src="../../../assets/images/faces/6.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-default fw-semibold mb-1">Rexha</p>
                                                <p className="fs-12 text-muted mb-0">Thanks for sharing file &#128512;.</p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>

                            </ul>
                        </SimpleBar>
                </div>
                <div className={`total-mails border ${isTotalMailsVisible ? 'd-block' : ''} ${isTotalMailsHidden ? 'd-none' : ''}`}>
                    <div className="p-3 d-flex align-items-center border-bottom">
                        <div className="me-3">
                            <input className="form-check-input" type="checkbox" id="checkAll" value="" aria-label="..." />
                        </div>
                        <div className="flex-fill">
                            <h6 className="fw-semibold mb-0">All Mails</h6>
                        </div>
                        <Button variant='' onClick={() => Toggle1()} className="btn btn-icon btn-light me-1 d-lg-none d-block total-mails-close" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Close">
                            <i className="ri-close-line"></i>
                        </Button>

                        <Dropdown>
                            <Dropdown.Toggle variant='light' className="btn btn-icon btn-light btn-wave waves-light no-caret">
                                <i className="ti ti-dots-vertical"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                                <Dropdown.Item as='li' href="#!">Recent</Dropdown.Item>
                                <Dropdown.Item as='li' href="#!">Unread</Dropdown.Item>
                                <Dropdown.Item as='li' href="#!">Mark All Read</Dropdown.Item>
                                <Dropdown.Item as='li' href="#!">Spam</Dropdown.Item>
                                <Dropdown.Item as='li' href="#!">Delete All</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="p-3 border-bottom">
                        <InputGroup>
                            <Form.Control type="text" className="bg-light border-0" placeholder="Search Email" aria-describedby="button-addon2" />
                            <Button variant='' className="btn btn-light" type="button" id="button-addon2"><i className="ri-search-line text-muted"></i></Button>
                        </InputGroup>
                    </div>
                    <SimpleBar>
                        <div className="mail-messages" id="mail-messages">

                            <ul className="list-unstyled mb-0 mail-messages-container" >
                                {Data.map((idx) => (
                                    <li className={idx.active} key={Math.random()} onClick={() => Medium()}>
                                        <div className="d-flex align-items-top">
                                            <div className="me-3 mt-1">
                                                <input id={idx.id} className="form-check-input" type="checkbox" defaultChecked={idx.class === 'defaultChecked'} defaultValue="" aria-label="..." />
                                            </div>
                                            <div className="me-1 lh-1">
                                                <span
                                                    className="avatar avatar-md online me-2 avatar-rounded mail-msg-avatar">
                                                    <img src={idx.src} alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <Link href="#!" scroll={false}>
                                                    <p className="mb-1 fs-12">
                                                        {idx.name}
                                                        <Badge bg={idx.color} className="ms-1">{idx.badge}</Badge>
                                                        <span className="float-end text-muted fw-normal fs-11 d-inline-flex">
                                                            <span className="me-2"><i className={idx.icon}></i></span>{idx.time}</span>
                                                    </p>
                                                </Link>
                                                <p className="mail-msg mb-0">
                                                    <span className="d-block mb-0 fw-semibold text-break">{idx.title}</span>
                                                    <span
                                                        className="fs-11 text-muted text-wrap  text-break">{idx.data}
                                                        <Button variant='' className={`btn p-0 lh-1 mail-starred ${idx.star} border-0 float-end`}>
                                                            <i className="ri-star-fill fs-14"></i>
                                                        </Button>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </SimpleBar>
                </div>
                <div className={`mails-information border d-none d-xl-block`}
                    style={{ display: isMailsInformationVisible ? 'block' : 'none' }}>
                    <div className="mail-info-header d-flex flex-nowrap gap-2 align-items-center">
                        <div className="me-1">
                            <span className="avatar avatar-md online me-2 avatar-rounded mail-msg-avatar">
                                <img src="../../../assets/images/faces/12.jpg" alt="" />
                            </span>
                        </div>
                        <div className="flex-fill">
                            <h6 className="mb-0 fw-medium">Roberto</h6>
                            <span className="text-muted fs-12">Roberto1458@gmail.com</span>
                        </div>
                        <div className="mail-action-icons">
                            <OverlayTrigger placement="top" overlay={<Tooltip>Starred</Tooltip>}>
                                <Button variant='' className="btn btn-sm btn-light m-1">
                                    <i className="ri-star-line"></i>
                                </Button>
                            </OverlayTrigger>
                            <OverlayTrigger placement="top" overlay={<Tooltip>Archive</Tooltip>}>
                                <Button variant='' className="btn btn-sm btn-light m-1 ms-2" >
                                    <i className="ri-inbox-archive-line"></i>
                                </Button>
                            </OverlayTrigger>
                            <OverlayTrigger placement="top" overlay={<Tooltip>Report spam</Tooltip>}>
                                <Button variant='' className="btn btn-sm btn-light m-1 ms-2">
                                    <i className="ri-spam-2-line"></i>
                                </Button>
                            </OverlayTrigger>
                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                <Button variant='' className="btn btn-sm btn-light m-1 ms-2">
                                    <i className="ri-delete-bin-line"></i>
                                </Button>
                            </OverlayTrigger>
                            <OverlayTrigger placement="top" overlay={<Tooltip>Reply</Tooltip>}>
                                <Button variant='' className="btn btn-sm btn-light m-1 ms-2">
                                    <i className="ri-reply-line"></i>
                                </Button>
                            </OverlayTrigger>
                        </div>
                        <div className="responsive-mail-action-icons">
                            <Dropdown className="dropdown">
                                <Dropdown.Toggle className="btn btn-icon btn-light btn-wave waves-light waves-effect waves-light no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="ti ti-dots-vertical"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as='ul'>
                                    <Dropdown.Item as='li' href="#!"><i className="ri-star-line me-1 align-middle d-inline-block"></i>Starred</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!"><i className="ri-inbox-archive-line me-1 align-middle d-inline-block"></i>Archive</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!"><i className="ri-spam-2-line me-1 align-middle d-inline-block"></i>Report Spam</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!"><i className="ri-reply-line me-1 align-middle d-inline-block"></i>Reply</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Button onClick={Removeclass} variant='' className="btn btn-icon btn-light ms-1 close-button">
                                <OverlayTrigger placement="top" overlay={<Tooltip>Close</Tooltip>}>
                                    <i className="ri-close-line"></i></OverlayTrigger>
                            </Button>
                        </div>
                    </div>
                    <SimpleBar>
                        <div className="mail-info-body p-4" id="mail-info-body">
                            <div className="d-sm-flex d-block align-items-center justify-content-between mb-4 gap-1">
                                <div>
                                    <p className="fs-20 fw-medium mb-0">Insights and Next Steps for Our Upcoming Projects</p>
                                </div>
                                <div className="float-end">
                                    <span className="fs-10 text-muted op-8 text-nowrap">12 Dec 2023,02:00PM</span>
                                </div>
                            </div>
                            <div className="main-mail-content mb-4">
                                <p className="fs-14 fw-medium mb-4">Hi, Mr Anthony Greetings &#128075;</p>
                                <p className="mb-2 fs-12 text-muted">The comprehensive project update presentation, highlighting our recent accomplishments, ongoing initiatives, and upcoming milestones. Your valuable insights and feedback during our last meeting were instrumental in shaping the direction of our efforts.</p>
                                <p className="mb-2 fs-12 text-muted">Additionally, I've attached relevant documents, including the latest financial report and project timeline. </p>
                                <p className="mb-0 mt-4">
                                    <span className="d-block">Regards,</span>
                                    <span className="d-block">Roberto</span>
                                </p>
                            </div>
                            <div className="mail-attachments mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="mb-0">
                                        <span className="fs-14 fw-medium"><i className="ri-attachment-2 me-1 align-middle"></i>Attachments (1.45mb):</span>
                                    </div>
                                    <div>
                                        <Link href="#!" scroll={false} className="text-secondary fs-13">Download All</Link>
                                    </div>
                                </div>
                                <div className="mt-2 d-flex flex-wrap">
                                    <div className="mail-attachment flex-grow-1 border mb-1">
                                        <div className="attachment-icon"><svg xmlns="http://www.w3.org/2000/svg" baseProfile="tiny" viewBox="0 0 512 512"><path fill="#FFF" d="M422.3 477.9c0 7.6-6.2 13.8-13.8 13.8h-305c-7.6 0-13.8-6.2-13.8-13.8V34.1c0-7.6 6.2-13.8 13.8-13.8h230.1V109h88.7v368.9z" /><path fill="#2B669F" d="M333.6 6H103.5C88 6 75.4 18.6 75.4 34.1v443.8c0 15.5 12.6 28.1 28.1 28.1h305c15.5 0 28.1-12.6 28.1-28.1V109.1L333.6 6zm88.7 471.9c0 7.6-6.2 13.8-13.8 13.8h-305c-7.6 0-13.8-6.2-13.8-13.8V34.1c0-7.6 6.2-13.8 13.8-13.8h230.1V109h88.7v368.9z" /><path fill="#084272" d="M333.6 6v103.1h103z" /><g><path fill="#084272" d="M465.9 450.8H46.1V308c0-9.8 7.9-17.7 17.7-17.7h384.3c9.8 0 17.7 7.9 17.7 17.7v142.8z" /><path fill="#1A252D" d="M436.6 450.8v19.5l29.3-19.5zM75.4 450.8v19.5l-29.3-19.5z" /><path fill="#2B669F" d="M64.1 308.4h383.7v124.5H64.1z" /></g><g fill="#2B669F"><path d="M298.3 78.6h-177a6.7 6.7 0 010-13.4h177a6.7 6.7 0 010 13.4zM298.3 110.6h-177a6.7 6.7 0 010-13.4h177a6.7 6.7 0 010 13.4zM391.8 142.5H121.3a6.7 6.7 0 010-13.4h270.5a6.7 6.7 0 010 13.4zM391.8 174.5H121.3a6.7 6.7 0 010-13.4h270.5a6.7 6.7 0 010 13.4zM391.8 206.5H121.3a6.7 6.7 0 010-13.4h270.5a6.7 6.7 0 010 13.4zM391.8 238.4H121.3a6.7 6.7 0 010-13.4h270.5a6.7 6.7 0 010 13.4zM391.8 270.4H121.3a6.7 6.7 0 010-13.4h270.5a6.7 6.7 0 010 13.4z" /></g><g fill="#FFF"><path d="M229.3 373.3c0 6.9-1.6 12.5-4.7 16.7-3.1 4.2-7.5 6.3-13.2 6.3-2.2 0-4.2-.4-5.9-1.3-1.7-.9-3.2-2.1-4.5-3.7v21.8h-14.4v-63.8h13.6l.4 5c1.3-1.9 2.8-3.3 4.6-4.3 1.8-1 3.8-1.5 6.1-1.5 5.7 0 10.1 2.2 13.3 6.6 3.1 4.4 4.7 10.2 4.7 17.4v.8zm-14.3-.9c0-3.9-.6-7-1.7-9.4-1.1-2.4-3-3.5-5.4-3.5-1.6 0-3 .3-4.1.9-1.1.6-2 1.5-2.7 2.6v19.2c.7 1 1.6 1.7 2.7 2.2 1.1.5 2.5.7 4.1.7 2.5 0 4.3-1 5.4-3.1 1.1-2.1 1.6-5 1.6-8.7v-.9zM239.8 372.4c0-7.2 1.6-13 4.7-17.4 3.1-4.4 7.6-6.6 13.3-6.6 2.1 0 4 .5 5.8 1.5 1.7 1 3.3 2.4 4.6 4.2V329h14.4v66.4H270l-1-5.6c-1.4 2.1-3 3.7-4.9 4.8-1.9 1.1-4 1.7-6.4 1.7-5.7 0-10.1-2.1-13.2-6.3-3.1-4.2-4.7-9.7-4.7-16.6v-1zm14.4.9c0 3.7.5 6.7 1.6 8.7 1.1 2.1 2.9 3.1 5.5 3.1 1.5 0 2.8-.3 4-.8 1.1-.6 2.1-1.4 2.8-2.4v-18.6c-.7-1.2-1.7-2.2-2.8-2.8-1.1-.7-2.4-1-3.9-1-2.6 0-4.4 1.2-5.5 3.5-1.1 2.4-1.7 5.5-1.7 9.4v.9zM300 395.4v-36.1h-6.6v-10h6.6v-4.8c0-5.3 1.6-9.3 4.8-12.2 3.2-2.9 7.7-4.3 13.5-4.3 1.1 0 2.2.1 3.3.2 1.1.2 2.4.4 3.8.7l-1.1 10.6c-.8-.1-1.5-.2-2.1-.3-.6-.1-1.3-.1-2.2-.1-1.8 0-3.2.5-4.2 1.4-1 .9-1.4 2.3-1.4 4v4.8h9.1v10h-9.1v36.1H300z" /></g></svg>
                                        </div>
                                        <div className="lh-1">
                                            <p className="mb-1 attachment-name text-truncate">
                                                Project_Update_Presentation.pdf
                                            </p>
                                            <p className="mb-0 fs-11 text-muted">
                                                0.25MB
                                            </p>
                                        </div>
                                        <div className="ms-auto text-success me-2">
                                            <Link href="#!" scroll={false} data-bs-toggle="tooltip" data-bs-title="Download"><i className="ri-download-cloud-line"></i></Link>
                                        </div>
                                    </div>
                                    <div className="mail-attachment flex-grow-1 ms-2 border mb-1">
                                        <div className="attachment-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#FFF" d="M422.3 477.9c0 7.6-6.2 13.8-13.8 13.8h-305c-7.6 0-13.8-6.2-13.8-13.8V34.1c0-7.6 6.2-13.8 13.8-13.8h230.1V109h88.7v368.9z" /><path fill="#24A885" d="M333.6 6H103.5C88 6 75.4 18.6 75.4 34.1v443.8c0 15.5 12.6 28.1 27.1 28.1h305c16.5 0 29.1-12.6 29.1-28.1V109.1L333.6 6zm88.7 471.9c0 7.6-6.2 13.8-13.8 13.8h-305c-7.6 0-13.8-6.2-13.8-13.8V34.1c0-7.6 6.2-13.8 13.8-13.8h230.1V109h88.7v368.9z" /><path fill="#16876B" d="M333.6 6v103.1h103zM465.9 450.8H46.1V308c0-9.8 7.9-17.7 17.7-17.7h384.3c9.8 0 17.7 7.9 17.7 17.7v142.8z" /><path fill="#59E0B9" d="M436.6 450.8v19.5l29.3-19.5zM75.4 450.8v19.5l-29.3-19.5z" /><path fill="#2EBA98" d="M64.1 308.4h383.7v124.5H64.1z" /><path fill="#16876B" d="M298.3 78.6h-177a6.7 6.7 0 0 1 0-13.4h177a6.7 6.7 0 0 1 0 13.4zM298.3 110.6h-177a6.7 6.7 0 0 1 0-13.4h177a6.7 6.7 0 0 1 0 13.4zM391.8 142.5H121.3a6.7 6.7 0 0 1 0-13.4h270.5a6.7 6.7 0 0 1 0 13.4zM391.8 174.5H121.3a6.7 6.7 0 0 1 0-13.4h270.5a6.7 6.7 0 0 1 0 13.4zM391.8 206.5H121.3a6.7 6.7 0 0 1 0-13.4h270.5a6.7 6.7 0 0 1 0 13.4zM391.8 238.4H121.3a6.7 6.7 0 0 1 0-13.4h270.5a6.7 6.7 0 0 1 0 13.4zM391.8 270.4H121.3a6.7 6.7 0 0 1 0-13.4h270.5a6.7 6.7 0 0 1 0 13.4z" /><path fill="#FFF" d="M191.3 349.7v43.9c0 5.4-1.4 9.6-4.3 12.5-2.9 2.9-6.9 4.4-12.1 4.4-1.2 0-2.2-.1-3.2-.2s-2-.3-3.1-.5l.6-10.2c.8.2 1.4.3 2 .4s1.2.1 2.1.1c1.5 0 2.6-.5 3.4-1.6.8-1.1 1.2-2.7 1.2-4.8v-43.9h13.4zm-.2-10h-13.6v-9.1h13.6v9.1zM244.8 372.3c0 6.5-1.5 11.7-4.4 15.7-2.9 3.9-7.1 5.9-12.4 5.9-2.1 0-3.9-.4-5.5-1.2-1.6-.8-3-2-4.2-3.5v20.5h-13.5v-60h12.8l.4 4.7c1.2-1.8 2.6-3.1 4.3-4.1 1.7-1 3.6-1.4 5.7-1.4 5.4 0 9.5 2.1 12.5 6.2s4.4 9.6 4.4 16.3v.9zm-13.5-.8c0-3.7-.5-6.6-1.6-8.8-1.1-2.2-2.8-3.3-5.1-3.3-1.5 0-2.8.3-3.9.8-1.1.6-1.9 1.4-2.5 2.4v18.1c.6.9 1.5 1.6 2.5 2.1 1.1.5 2.4.7 3.9.7 2.4 0 4.1-1 5.1-2.9 1-2 1.5-4.7 1.5-8.2v-.9zM275.7 393.9c-6.6 0-11.7-2-15.4-6-3.7-4-5.6-9-5.6-15.1v-1.5c0-6.6 1.8-12 5.3-16.2 3.5-4.2 8.6-6.2 15.2-6.2 5.8 0 10.4 1.7 13.6 5.2 3.2 3.5 4.8 8.3 4.8 14.4v7.1h-24.8l-.1.2c.2 2.3 1.1 4.1 2.5 5.5 1.5 1.4 3.6 2.1 6.3 2.1 2.6 0 4.7-.2 6.5-.6 1.7-.4 3.7-1.1 5.9-2l3.2 8.3c-1.9 1.4-4.4 2.5-7.5 3.4-3.1 1-6.4 1.4-9.9 1.4zm-.5-34.5c-2.2 0-3.8.7-4.8 2.1-1 1.4-1.6 3.2-1.8 5.6l.1.2h11.7v-1c0-2.2-.4-3.9-1.2-5.1-.7-1.3-2.1-1.8-4-1.8zM303.3 371.5c0-6.8 1.5-12.2 4.4-16.3 3-4.1 7.1-6.2 12.5-6.2 2.3 0 4.3.5 6 1.6 1.7 1.1 3.2 2.6 4.5 4.6l.9-5.4h11.9v42.9c0 5.7-2 10.1-5.9 13.3-3.9 3.1-9.3 4.7-16.2 4.7-2.2 0-4.6-.3-7.1-.9-2.5-.6-4.8-1.4-7.1-2.5l2.3-10c1.9.9 3.8 1.5 5.6 1.9 1.8.4 3.8.6 6.1.6 2.9 0 5-.6 6.4-1.7 1.4-1.1 2.1-3 2.1-5.4v-3.4c-1.2 1.6-2.7 2.8-4.3 3.6-1.6.8-3.5 1.2-5.5 1.2-5.3 0-9.5-2-12.4-5.9-2.9-4-4.4-9.2-4.4-15.7v-1zm13.5.8c0 3.5.5 6.3 1.5 8.2 1 2 2.8 2.9 5.2 2.9 1.5 0 2.7-.2 3.8-.7 1.1-.5 1.9-1.1 2.6-2v-18.2c-.7-1-1.5-1.8-2.6-2.4-1-.5-2.3-.8-3.7-.8-2.4 0-4.1 1.1-5.2 3.3-1.1 2.2-1.6 5.2-1.6 8.8v.9z" /></svg>
                                        </div>
                                        <div className="lh-1">
                                            <p className="mb-1 attachment-name text-truncate">
                                                Financial_Report_Image.Jpeg
                                            </p>
                                            <p className="mb-0 fs-11 text-muted">
                                                512KB
                                            </p>
                                        </div>
                                        <div className="ms-auto text-success me-2">
                                            <Link href="#!" scroll={false} data-bs-toggle="tooltip" data-bs-title="Download"><i className="ri-download-cloud-line"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <span className="fs-14 fw-medium"><i className="ri-reply-all-line me-1 align-middle d-inline-block"></i>Reply:</span>
                            </div>
                            <div className="mail-reply">
                                <div id="mail-reply-editor">
                                    <Editors />
                                </div>
                            </div>
                        </div>
                    </SimpleBar>

                    <div className="mail-info-footer d-flex flex-wrap gap-2 align-items-center justify-content-between">
                        <div>
                            <Button variant='' className="btn btn-icon btn-light">
                                <OverlayTrigger placement="top" overlay={<Tooltip>Print</Tooltip>}>
                                    <i className="ri-printer-line"></i></OverlayTrigger>
                            </Button>
                            <Button variant='' className="btn btn-icon btn-light ms-1">
                                <OverlayTrigger placement="top" overlay={<Tooltip>Mark as read</Tooltip>}>
                                    <i className="ri-mail-open-line"></i></OverlayTrigger>
                            </Button>
                            <Button variant='' className="btn btn-icon btn-light ms-1">
                                <OverlayTrigger placement="top" overlay={<Tooltip>Reload</Tooltip>}>
                                    <i className="ri-refresh-line"></i></OverlayTrigger>
                            </Button>                            </div>
                        <div>
                            <Button variant='' className="btn btn-secondary">
                                <i className="ri-share-forward-line me-1 d-inline-block align-middle"></i>Forward
                            </Button>
                            <Button variant='' className="btn btn-danger ms-1">
                                <i className="ri-reply-all-line me-1 d-inline-block align-middle"></i>Reply
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default MailApp;
