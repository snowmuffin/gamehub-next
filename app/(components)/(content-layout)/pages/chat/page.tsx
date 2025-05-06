"use client";

import { Photosmediadata, chatData } from '@/shared/data/pages/chatdata';
import Seo from '@/shared/layout-components/seo/seo';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import { Button, Card, Col, Dropdown, Form, InputGroup, Nav, Row, Tab, TabContainer, TabContent } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';

const Chat = () => {

    const [activeUser, setActiveUser] = useState({ name: "Emiley Jackson", image: "../../assets/images/faces/2.jpg" });

    const handleUserClick = (name: any, image: any) => {
        setActiveUser({ name, image });
    };

    const mainChartWrapper = () => (
        document.querySelector(".main-chart-wrapper")?.classList.add("responsive-chat-open")
    )
    const mainChartWrapper1 = () => (
        document.querySelector(".main-chart-wrapper")?.classList.remove("responsive-chat-open")
    )
    const Chartuser = () => (
        document.querySelector(".chat-user-details")?.classList.add("open")
    )
    const Chartuser1 = () => (
        document.querySelector(".chat-user-details")?.classList.remove("open")
    )
    return (
        <Fragment>
            <Seo title={"Chat"} />
            <div className="container-fluid">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"></Form.Group>
                <div className="main-chart-wrapper p-2 gap-2 d-lg-flex">
                    <div className="chat-info border">
                        <Link aria-label="anchor" href="#!" scroll={false} className="btn btn-secondary btn-icon rounded-circle chat-add-icon">
                            <i className="ri-add-line"></i>
                        </Link>
                        <div className="d-flex align-items-center justify-content-between w-100 p-3 border-bottom">
                            <div>
                                <h5 className="fw-semibold mb-0">Messages</h5>
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle variant='light' className="btn btn-icon btn-secondary-light btn-wave waves-light waves-effect waves-light no-caret" type="button">
                                    <i className="ri-settings-3-line"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-end">
                                    <Dropdown.Item as='li' href="#!">Action</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!">Another action</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!">Something else here</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="chat-search p-3 border-bottom">
                            <InputGroup>
                                <Form.Control type="text" className="bg-light border-0" placeholder="Search Chat"
                                    aria-describedby="button-addon2" />
                                <Button variant='primary' aria-label="button" className="btn" type="button" id="button-addon2"><i
                                    className="ri-search-line text-fixed-black"></i></Button>
                            </InputGroup>
                        </div>
                        <TabContainer defaultActiveKey="first">
                            <Nav className=" nav-tabs tab-style-2 nav-justified mb-0 border-bottom d-flex"
                            >
                                <Nav.Item className="border-end me-0">
                                    <Nav.Link href="#!" eventKey="first" className="h-100">
                                        <i className="ri-history-line me-1 align-middle d-inline-block"></i>Recent
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="border-end me-0">
                                    <Nav.Link className="h-100" href="#!" eventKey="second">
                                        <i className="ri-group-2-line me-1 align-middle d-inline-block"></i>Groups
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#!" className="h-100" eventKey="third">
                                        <i className="ri-phone-line me-1 align-middle d-inline-block"></i>Calls
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content className="" id="myTabContent">
                                <Tab.Pane eventKey="first" className="fade border-0 chat-users-tab" id="users-tab-pane"
                                    role="tabpanel" aria-labelledby="users-tab" tabIndex={0}>

                                    <SimpleBar id="chat-msg-scroll" className="chat-users-tab">
                                        {chatData.map((section: any, index: any) => (
                                            <ul className="list-unstyled mb-0 mt-2" key={index} onClick={mainChartWrapper}>
                                                <li className="pb-0" >
                                                    <p className="text-muted fs-11 fw-semibold mb-2 op-7">{section.heading}</p>
                                                </li>
                                                {section.users.map((chatUser: any, userIndex: any) => (
                                                    <li className={chatUser.class} key={userIndex}>
                                                        <Link href="#!" scroll={false} onClick={() => handleUserClick(chatUser.name, chatUser.image)}>
                                                            <div className="d-flex align-items-top">
                                                                <div className="me-1 lh-1">
                                                                    <span className={`avatar avatar-md ${chatUser.online} me-2 avatar-rounded`}>
                                                                        <img src={chatUser.image} alt="img" />
                                                                    </span>
                                                                </div>
                                                                <div className="flex-fill">
                                                                    <p className="mb-0 fw-semibold">
                                                                        {chatUser.name} <span
                                                                            className="float-end text-muted fw-normal fs-11">{chatUser.time}</span>
                                                                    </p>
                                                                    <p className="fs-12 mb-0">
                                                                        <span className="chat-msg text-truncate">{chatUser.message}</span>
                                                                        {chatUser.icon}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        ))}
                                    </SimpleBar>
                                </Tab.Pane>

                                <Tab.Pane className=" fade border-0 chat-groups-tab" eventKey="second" id="groups-tab-pane"
                                    role="tabpanel" aria-labelledby="groups-tab" tabIndex={0}>
                                    <SimpleBar>
                                        <ul className="list-unstyled mb-0 mt-2 chat-groups-tab">
                                            <li className="pb-0">
                                                <p className="text-muted fs-11 fw-semibold mb-1 op-7">MY CHAT GROUPS</p>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div>
                                                        <p className="mb-0">1 Family Together</p>
                                                        <p className="mb-0"><span className="badge bg-success-transparent">4
                                                            Online</span></p>
                                                    </div>
                                                    <div className="avatar-list-stacked my-auto">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../assets/images/faces/10.jpg" alt="img" />
                                                        </span>
                                                        <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                            href="#!" scroll={false}>
                                                            +19
                                                        </Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div>
                                                        <p className="mb-0">2 Work Buddies </p>
                                                        <p className="mb-0"><span className="badge bg-secondary-transparent">32
                                                            Online</span></p>
                                                    </div>
                                                    <div className="avatar-list-stacked my-auto">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../assets/images/faces/1.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../assets/images/faces/7.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../assets/images/faces/3.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../assets/images/faces/9.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../assets/images/faces/12.jpg" alt="img" />
                                                        </span>
                                                        <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                            href="#!" scroll={false}>
                                                            +123
                                                        </Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div>
                                                        <p className="mb-0">3 Friends Forever</p>
                                                        <p className="mb-0"><span className="badge bg-warning-transparent">3
                                                            Online</span></p>
                                                    </div>
                                                    <div className="avatar-list-stacked my-auto">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../assets/images/faces/4.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../assets/images/faces/13.jpg" alt="img" />
                                                        </span>
                                                        <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                            href="#!" scroll={false}>
                                                            +15
                                                        </Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div>
                                                        <p className="mb-0">4 Social Media Deals</p>
                                                        <p className="mb-0"><span className="badge bg-danger-transparent">5
                                                            Online</span></p>
                                                    </div>
                                                    <div className="avatar-list-stacked my-auto">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../assets/images/faces/1.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../assets/images/faces/7.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../assets/images/faces/4.jpg" alt="img" />
                                                        </span>
                                                        <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                            href="#!" scroll={false}>
                                                            +28
                                                        </Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div>
                                                        <p className="mb-0">4 Apartment Group</p>
                                                        <p className="mb-0"><span className="badge bg-light text-dark">0 Online</span>
                                                        </p>
                                                    </div>
                                                    <div className="avatar-list-stacked my-auto">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../assets/images/faces/5.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../assets/images/faces/6.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../assets/images/faces/12.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../assets/images/faces/3.jpg" alt="img" />
                                                        </span>
                                                        <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                            href="#!" scroll={false}>
                                                            +53
                                                        </Link>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="pb-0">
                                                <p className="text-muted fs-11 fw-semibold mb-1 op-7">GROUP CHATS</p>
                                            </li>
                                            <li className="checkforactive">
                                                <Link href="#!" scroll={false}
                                                >
                                                    <div className="d-flex align-items-top">
                                                        <div className="me-1 lh-1">
                                                            <span className="avatar avatar-md online me-2 avatar-rounded">
                                                                <img src="../../assets/images/faces/17.jpg" alt="img" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="mb-0 fw-semibold" >
                                                                Family Together &#128525; <span
                                                                    className="float-end text-muted fw-normal fs-11">12:24PM</span>
                                                            </p>
                                                            <p className="fs-12 mb-0 chat-msg-typing ">
                                                                <span className="chat-msg text-truncate">Hira Typing...</span>
                                                                <span className="chat-read-icon float-end align-middle"><i
                                                                    className="ri-check-double-fill"></i></span>
                                                                <span
                                                                    className="badge bg-success-transparent rounded-circle float-end">2</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="chat-msg-unread checkforactive" >
                                                <Link href="#!" scroll={false}
                                                >
                                                    <div className="d-flex align-items-top">
                                                        <div className="me-1 lh-1">
                                                            <span className="avatar avatar-md online me-2 avatar-rounded">
                                                                <img src={"../../assets/images/faces/18.jpg"} alt="img" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="mb-0 fw-semibold" >
                                                                Work Buddies <span
                                                                    className="float-end text-muted fw-normal fs-11">1:16PM</span>
                                                            </p>
                                                            <p className="fs-12 mb-0">
                                                                <span className="chat-msg text-truncate"><span
                                                                    className="group-indivudial">Rams:</span>Happy to be part of
                                                                    this group</span>
                                                                <span className="chat-read-icon float-end align-middle"><i
                                                                    className="ri-check-double-fill"></i></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="chat-inactive checkforactive" >
                                                <Link href="#!" scroll={false}
                                                >
                                                    <div className="d-flex align-items-top">
                                                        <div className="me-1 lh-1">
                                                            <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                                <img src="../../assets/images/faces/19.jpg" alt="img" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="mb-0 fw-semibold">
                                                                Friends Forever &#128526; <span
                                                                    className="float-end text-muted fw-normal fs-11">3 days
                                                                    ago</span>
                                                            </p>
                                                            <p className="fs-12 mb-0">
                                                                <span
                                                                    className="chat-msg text-truncate">Simon,Melissa,Amanda,Patrick,Siddique</span>
                                                                <span className="chat-read-icon float-end align-middle"><i
                                                                    className="ri-check-double-fill"></i></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="chat-inactive checkforactive" >
                                                <Link href="#!" scroll={false}
                                                >
                                                    <div className="d-flex align-items-top">
                                                        <div className="me-1 lh-1">
                                                            <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                                <img src="../../assets/images/faces/20.jpg" alt="img" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="mb-0 fw-semibold">
                                                                Social Media Deals <span
                                                                    className="float-end text-muted fw-normal fs-11">5 days
                                                                    ago</span>
                                                            </p>
                                                            <p className="fs-12 mb-0">
                                                                <span
                                                                    className="chat-msg text-truncate">Kamalan,Subha,Ambrose,Kiara,Jackson</span>
                                                                <span className="chat-read-icon float-end align-middle"><i
                                                                    className="ri-check-double-fill"></i></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="chat-inactive checkforactive" >
                                                <Link href="#!" scroll={false}
                                                >
                                                    <div className="d-flex align-items-top">
                                                        <div className="me-1 lh-1">
                                                            <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                                <img src="../../assets/images/faces/21.jpg" alt="img" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="mb-0 fw-semibold">
                                                                Apartment Group <span
                                                                    className="float-end text-muted fw-normal fs-11">12 days
                                                                    ago</span>
                                                            </p>
                                                            <p className="fs-12 mb-0">
                                                                <span
                                                                    className="chat-msg text-truncate">Subman,Rajen,Kairo,Dibasha,Alexa</span>
                                                                <span className="chat-read-icon float-end align-middle"><i
                                                                    className="ri-check-double-fill"></i></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </SimpleBar>
                                </Tab.Pane>
                                <Tab.Pane className="fade border-0 chat-calls-tab" id="calls-tab-pane" eventKey="third"
                                >
                                    <SimpleBar>
                                        <ul className="list-unstyled mb-0 mt-2 chat-calls-tab">
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md online me-2 avatar-rounded">
                                                            <img src="../../assets/images/faces/5.jpg" alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill my-auto">
                                                        <p className="mb-0 fw-semibold">
                                                            Sujika
                                                            <span className="ms-1 incoming-call-success"><i
                                                                className="ti ti-arrow-down-left"></i></span>
                                                        </p>
                                                        <p className="fs-12 mb-0">
                                                            <span className="text-muted text-truncate">Today,12:47PM</span>
                                                        </p>
                                                    </div>
                                                    <div className="">
                                                        <Button variant='' aria-label="button" type="button" className="btn btn-sm btn-icon btn-primary-light">
                                                            <i className="ti ti-phone"></i>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li >
                                                <div className="d-flex align-items-center">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md online me-2 avatar-rounded">
                                                            <img src="../../assets/images/faces/7.jpg" alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill my-auto">
                                                        <p className="mb-0 fw-semibold">
                                                            Melissa
                                                            <span className="ms-1 outgoing-call-failed"><i
                                                                className="ti ti-arrow-up-right"></i></span>
                                                        </p>
                                                        <p className="fs-12 mb-0">
                                                            <span className="text-muted text-truncate">Today,10:27AM</span>
                                                        </p>
                                                    </div>
                                                    <div className="">
                                                        <Button variant='' aria-label="button" type="button" className="btn btn-sm btn-icon btn-primary-light">
                                                            <i className="ti ti-phone"></i>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                            <img src="../../assets/images/faces/21.jpg" alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill my-auto">
                                                        <p className="mb-0 fw-semibold">
                                                            Sharukh Sam
                                                            <span className="ms-1 outgoing-call-success"><i
                                                                className="ti ti-arrow-up-right"></i></span>
                                                        </p>
                                                        <p className="fs-12 mb-0">
                                                            <span className="text-muted text-truncate">Yesterday,12:45PM</span>
                                                        </p>
                                                    </div>
                                                    <div className="">
                                                        <Button variant='' aria-label="button" type="button" className="btn btn-sm btn-icon btn-primary-light">
                                                            <i className="ti ti-video"></i>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                            <img src="../../assets/images/faces/15.jpg" alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill my-auto">
                                                        <p className="mb-0 fw-semibold">
                                                            Kiram Kumal
                                                            <span className="ms-1 incoming-call-success"><i
                                                                className="ti ti-arrow-down-left"></i></span>
                                                        </p>
                                                        <p className="fs-12 mb-0">
                                                            <span className="text-muted text-truncate">3 Days ago</span>
                                                        </p>
                                                    </div>
                                                    <div className="">
                                                        <Button variant='' aria-label="button" type="button" className="btn btn-sm btn-icon btn-primary-light">
                                                            <i className="ti ti-phone"></i>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                            <img src="../../assets/images/faces/4.jpg" alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill my-auto">
                                                        <p className="mb-0 fw-semibold">
                                                            Amanda Sams
                                                            <span className="ms-1 incoming-call-success"><i
                                                                className="ti ti-arrow-down-left"></i></span>
                                                        </p>
                                                        <p className="fs-12 mb-0">
                                                            <span className="text-muted text-truncate">22, Oct 2022</span>
                                                        </p>
                                                    </div>
                                                    <div className="">
                                                        <Button variant='' aria-label="button" type="button" className="btn btn-sm btn-icon btn-primary-light">
                                                            <i className="ti ti-video"></i>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                            <img src="../../assets/images/faces/16.jpg" alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill my-auto">
                                                        <p className="mb-0 fw-semibold">
                                                            Azimo Peter
                                                            <span className="ms-1 incoming-call-failed"><i
                                                                className="ti ti-arrow-up-right"></i></span>
                                                        </p>
                                                        <p className="fs-12 mb-0">
                                                            <span className="text-muted text-truncate">24, Oct 2022</span>
                                                        </p>
                                                    </div>
                                                    <div className="">
                                                        <Button variant='' aria-label="button" type="button" className="btn btn-sm btn-icon btn-primary-light">
                                                            <i className="ti ti-phone"></i>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                            <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill my-auto">
                                                        <p className="mb-0 fw-semibold">
                                                            Sierra Adams
                                                            <span className="ms-1 incoming-call-success"><i
                                                                className="ti ti-arrow-down-left"></i></span>
                                                        </p>
                                                        <p className="fs-12 mb-0">
                                                            <span className="text-muted text-truncate">22, Oct 2022</span>
                                                        </p>
                                                    </div>
                                                    <div className="">
                                                        <Button variant='' aria-label="button" type="button" className="btn btn-sm btn-icon btn-primary-light">
                                                            <i className="ti ti-phone"></i>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md online me-2 avatar-rounded">
                                                            <img src="../../assets/images/faces/3.jpg" alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill my-auto">
                                                        <p className="mb-0 fw-semibold">
                                                            Dimple Kanns
                                                            <span className="ms-1 incoming-call-success"><i
                                                                className="ti ti-arrow-down-left"></i></span>
                                                        </p>
                                                        <p className="fs-12 mb-0">
                                                            <span className="text-muted text-truncate">13, Oct 2022</span>
                                                        </p>
                                                    </div>
                                                    <div className="">
                                                        <Button variant='' aria-label="button" type="button" className="btn btn-sm btn-icon btn-primary-light">
                                                            <i className="ti ti-video"></i>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md online me-2 avatar-rounded">
                                                            <img src="../../assets/images/faces/9.jpg" alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill my-auto">
                                                        <p className="mb-0 fw-semibold">
                                                            Adrea Jaremiah
                                                            <span className="ms-1 outgoing-call-failed"><i
                                                                className="ti ti-arrow-up-right"></i></span>
                                                        </p>
                                                        <p className="fs-12 mb-0">
                                                            <span className="text-muted text-truncate">13, Sep 2022</span>
                                                        </p>
                                                    </div>
                                                    <div className="">
                                                        <Button variant='' aria-label="button" type="button" className="btn btn-sm btn-icon btn-primary-light">
                                                            <i className="ti ti-phone"></i>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                            <img src="../../assets/images/faces/21.jpg" alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill my-auto">
                                                        <p className="mb-0 fw-semibold">
                                                            Anjaneliyu
                                                            <span className="ms-1 outgoing-call-success"><i
                                                                className="ti ti-arrow-up-right"></i></span>
                                                        </p>
                                                        <p className="fs-12 mb-0">
                                                            <span className="text-muted text-truncate">10, July 2022</span>
                                                        </p>
                                                    </div>
                                                    <div className="">
                                                        <Button variant='' aria-label="button" type="button" className="btn btn-sm btn-icon btn-primary-light">
                                                            <i className="ti ti-phone"></i>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                            <img src="../../assets/images/faces/14.jpg" alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill my-auto">
                                                        <p className="mb-0 fw-semibold">
                                                            Jason Steph
                                                            <span className="ms-1 incoming-call-success"><i
                                                                className="ti ti-arrow-down-left"></i></span>
                                                        </p>
                                                        <p className="fs-12 mb-0">
                                                            <span className="text-muted text-truncate">1, Apr 2022</span>
                                                        </p>
                                                    </div>
                                                    <div className="">
                                                        <Button variant='' aria-label="button" type="button" className="btn btn-sm btn-icon btn-primary-light">
                                                            <i className="ti ti-phone"></i>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </SimpleBar>

                                </Tab.Pane>
                            </Tab.Content>
                        </TabContainer>
                    </div>
                    <div className="main-chat-area border">

                        <div className="d-flex align-items-center p-2 border-bottom">
                            <div className="me-2 lh-1">
                                <span className="avatar avatar-lg online me-2 avatar-rounded chatstatusperson">
                                    <img className="chatimageperson" src={activeUser.image} alt="img" />
                                </span>
                            </div>
                            <div className="flex-fill" onClick={Chartuser}>
                                <p className="mb-0 fw-semibold fs-14">
                                    <Link href="#!" scroll={false} className="chatnameperson responsive-userinfo-open">{activeUser.name}</Link>
                                </p>
                                <p className="text-muted mb-0 chatpersonstatus">online</p>
                            </div>
                            <div className="d-sm-flex rightIcons">
                                <Button variant='' aria-label="button" type="button" className="btn btn-icon btn-primary-light my-1 ms-2">
                                    <i className="ti ti-phone"></i>
                                </Button>
                                <Button variant='' aria-label="button" type="button" className="btn btn-icon btn-primary-light my-1 ms-2">
                                    <i className="ti ti-video"></i>
                                </Button>
                                <Button variant='' aria-label="button" type="button" className="btn btn-icon btn-primary-light my-1 ms-2 responsive-userinfo-open">
                                    <i className="ti ti-user-circle" id="responsive-chat-close"></i>
                                </Button>
                                <Dropdown className='d-inline-block'>
                                    <Dropdown.Toggle variant='transparent' className="btn btn-icon btn-primary-light no-caret my-1 btn-wave waves-light ms-2">
                                        <i className="ti ti-dots-vertical "></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu-end">
                                        <Dropdown.Item as='li' href="#!">Profile</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!">Clear Chat</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!">Delete User</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!">Block User</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!">Report</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Button variant='' onClick={mainChartWrapper1} aria-label="button" type="button" className="btn btn-icon btn-outline-light my-1 ms-2 responsive-chat-close">
                                    <i className="ri-close-line"></i>
                                </Button>
                            </div>
                        </div>
                        <div className="chat-content p-0" id="main-chat-content">
                            <SimpleBar>
                                <ul className="list-unstyled chat-content">
                                    <li className="chat-day-label">
                                        <span>Today</span>
                                    </li>
                                    <li className="chat-item-start">
                                        <div className="chat-list-inner">
                                            <div className="chat-user-profile">
                                                <span className="avatar avatar-md online avatar-rounded chatstatusperson">
                                                    <img className="chatimageperson" src={activeUser.image} alt="img" />
                                                </span>
                                            </div>
                                            <div className="ms-3">
                                                <span className="chatting-user-info">
                                                    <span className="chatnameperson">{activeUser.name}</span> <span className="msg-sent-time">11:48PM</span>
                                                </span>
                                                <div className="main-chat-msg">
                                                    <div>
                                                        <p className="mb-0">Nice to meet you &#128512;</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="chat-item-end">
                                        <div className="chat-list-inner">
                                            <div className="me-3">
                                                <span className="chatting-user-info">
                                                    <span className="msg-sent-time"><span className="chat-read-mark align-middle d-inline-flex"><i
                                                        className="ri-check-double-line"></i></span>11:50PM</span> You
                                                </span>
                                                <div className="main-chat-msg">
                                                    <div>
                                                        <p className="mb-0">It is a long established fact that a reader will be
                                                            distracted by the readable content of a page when looking at its
                                                            layout</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat-user-profile">
                                                <span className="avatar avatar-md online avatar-rounded">
                                                    <img src="../../assets/images/faces/15.jpg" alt="img" />
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="chat-item-start">
                                        <div className="chat-list-inner">
                                            <div className="chat-user-profile">
                                                <span className="avatar avatar-md online avatar-rounded chatstatusperson">
                                                    <img className="chatimageperson" src={activeUser.image} alt="img" />
                                                </span>
                                            </div>
                                            <div className="ms-3">
                                                <span className="chatting-user-info">
                                                    <span className="chatnameperson">{activeUser.name}</span> <span className="msg-sent-time">11:51PM</span>
                                                </span>
                                                <div className="main-chat-msg">
                                                    <div>
                                                        <p className="mb-0">Who are you ?</p>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0">I {`don't`} know anyone named jeremiah.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="chat-item-end">
                                        <div className="chat-list-inner">
                                            <div className="me-3">
                                                <span className="chatting-user-info">
                                                    <span className="msg-sent-time"><span className="chat-read-mark align-middle d-inline-flex"><i
                                                        className="ri-check-double-line"></i></span>11:52PM</span> You
                                                </span>
                                                <div className="main-chat-msg">
                                                    <div>
                                                        <p className="mb-0">Some of the recent images taken are nice &#128076;</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat-user-profile">
                                                <span className="avatar avatar-md online avatar-rounded">
                                                    <img src="../../assets/images/faces/15.jpg" alt="img" />
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="chat-item-start">
                                        <div className="chat-list-inner">
                                            <div className="chat-user-profile">
                                                <span className="avatar avatar-md online avatar-rounded chatstatusperson">
                                                    <img className="chatimageperson" src={activeUser.image} alt="img" />
                                                </span>
                                            </div>
                                            <div className="ms-3">
                                                <span className="chatting-user-info">
                                                    <span className="chatnameperson">{activeUser.name}</span> <span className="msg-sent-time">11:55PM</span>
                                                </span>
                                                <div className="main-chat-msg">
                                                    <div>
                                                        <p className="mb-0">Here are some of them have a look</p>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 d-sm-flex d-block">
                                                            <Link href="/apps/gallery/" className="avatar avatar-xl m-1"><img src="../../assets/images/media/media-64.jpg" alt="" /></Link>
                                                            <Link href="/apps/gallery/" className="avatar avatar-xl m-1"><img src="../../assets/images/media/media-63.jpg" alt="" /></Link>
                                                            <Link href="/apps/gallery/" className="avatar avatar-xl m-1"><img src="../../assets/images/media/media-62.jpg" alt="" /></Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="chat-item-end">
                                        <div className="chat-list-inner">
                                            <div className="me-3">
                                                <span className="chatting-user-info">
                                                    <span className="msg-sent-time"><span className="chat-read-mark align-middle d-inline-flex"><i
                                                        className="ri-check-double-line"></i></span>11:52PM</span> You
                                                </span>
                                                <div className="main-chat-msg">
                                                    <div className="">
                                                        <Link aria-label="anchor" href="#!" scroll={false} className="text-fixed-black"><i
                                                            className="ri-play-circle-line align-middle"></i></Link>
                                                        <span className="mx-1">
                                                            <svg width="20" height="20">
                                                                <defs></defs>
                                                                <g transform="matrix(1,0,0,1,0,0)"><svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    data-name="Layer 3" viewBox="0 0 24 24" width="20"
                                                                    height="20">
                                                                    <path
                                                                        d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                        fill="rgba(255, 255, 255, 0.5)"
                                                                        className="fill-primary"></path>
                                                                </svg></g>
                                                            </svg>
                                                            <svg className="chat_audio" width="20" height="20">
                                                                <defs></defs>
                                                                <g transform="matrix(1,0,0,1,0,0)"><svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    data-name="Layer 3" viewBox="0 0 24 24" width="20"
                                                                    height="20">
                                                                    <path
                                                                        d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                        fill="rgba(255, 255, 255, 0.5)"
                                                                        className="fill-primary"></path>
                                                                </svg></g>
                                                            </svg>
                                                            <svg className="chat_audio" width="20" height="20">
                                                                <defs></defs>
                                                                <g transform="matrix(1,0,0,1,0,0)"><svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    data-name="Layer 3" viewBox="0 0 24 24" width="20"
                                                                    height="20">
                                                                    <path
                                                                        d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                        fill="rgba(255, 255, 255, 0.5)"
                                                                        className="fill-primary"></path>
                                                                </svg></g>
                                                            </svg>
                                                            <svg className="chat_audio" width="20" height="20">
                                                                <defs></defs>
                                                                <g transform="matrix(1,0,0,1,0,0)"><svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    data-name="Layer 3" viewBox="0 0 24 24" width="20"
                                                                    height="20">
                                                                    <path
                                                                        d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                        fill="rgba(255, 255, 255, 0.5)"
                                                                        className="fill-primary"></path>
                                                                </svg></g>
                                                            </svg>
                                                            <svg className="chat_audio" width="20" height="20">
                                                                <defs></defs>
                                                                <g transform="matrix(1,0,0,1,0,0)"><svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    data-name="Layer 3" viewBox="0 0 24 24" width="20"
                                                                    height="20">
                                                                    <path
                                                                        d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                        fill="rgba(255, 255, 255, 0.5)"
                                                                        className="fill-primary"></path>
                                                                </svg></g>
                                                            </svg>
                                                            <svg className="chat_audio" width="20" height="20">
                                                                <defs></defs>
                                                                <g transform="matrix(1,0,0,1,0,0)"><svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    data-name="Layer 3" viewBox="0 0 24 24" width="20"
                                                                    height="20">
                                                                    <path
                                                                        d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                        fill="rgba(255, 255, 255, 0.5)"
                                                                        className="fill-primary"></path>
                                                                </svg></g>
                                                            </svg>
                                                            <svg className="chat_audio" width="20" height="20">
                                                                <defs></defs>
                                                                <g transform="matrix(1,0,0,1,0,0)"><svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    data-name="Layer 3" viewBox="0 0 24 24" width="20"
                                                                    height="20">
                                                                    <path
                                                                        d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                        fill="rgba(255, 255, 255, 0.5)"
                                                                        className="fill-primary"></path>
                                                                </svg></g>
                                                            </svg>
                                                            <svg className="chat_audio" width="20" height="20">
                                                                <defs></defs>
                                                                <g transform="matrix(1,0,0,1,0,0)"><svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    data-name="Layer 3" viewBox="0 0 24 24" width="20"
                                                                    height="20">
                                                                    <path
                                                                        d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                        fill="rgba(255, 255, 255, 0.5)"
                                                                        className="fill-primary"></path>
                                                                </svg></g>
                                                            </svg>
                                                            <svg className="chat_audio" width="20" height="20">
                                                                <defs></defs>
                                                                <g transform="matrix(1,0,0,1,0,0)"><svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    data-name="Layer 3" viewBox="0 0 24 24" width="20"
                                                                    height="20">
                                                                    <path
                                                                        d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                        fill="rgba(255, 255, 255, 0.5)"
                                                                        className="fill-primary"></path>
                                                                </svg></g>
                                                            </svg>
                                                            <svg className="chat_audio" width="20" height="20">
                                                                <defs></defs>
                                                                <g transform="matrix(1,0,0,1,0,0)"><svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    data-name="Layer 3" viewBox="0 0 24 24" width="20"
                                                                    height="20">
                                                                    <path
                                                                        d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                        fill="rgba(255, 255, 255, 0.5)"
                                                                        className="fill-primary"></path>
                                                                </svg></g>
                                                            </svg>
                                                        </span>
                                                        <Link aria-label="anchor" href="#!" scroll={false} className="text-fixed-black"><i
                                                            className="ri-download-2-line align-middle"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat-user-profile">
                                                <span className="avatar avatar-md online avatar-rounded">
                                                    <img src="../../assets/images/faces/15.jpg" alt="img" />
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="chat-item-start">
                                        <div className="chat-list-inner">
                                            <div className="chat-user-profile">
                                                <span className="avatar avatar-md online avatar-rounded">
                                                    <img className="chatimageperson" src={activeUser.image} alt="img" />
                                                </span>
                                            </div>
                                            <div className="ms-3">
                                                <span className="chatting-user-info chatnameperson">
                                                    {activeUser.name} <span className="msg-sent-time">11:45PM</span>
                                                </span>
                                                <div className="main-chat-msg">
                                                    <div>
                                                        <p className="mb-0">Happy to talk with you,chat you later &#128075;</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </SimpleBar >
                        </div>
                        <Card.Footer className='chat-footer'>
                            <Form.Control className="" placeholder="Type your message here..." type="text" />
                            <Link aria-label="anchor" className="btn btn-icon mx-2 btn-success-light" href="#!" scroll={false}>
                                <i className="ri-emotion-line"></i>
                            </Link>
                            <Link aria-label="anchor" className="btn btn-primary btn-icon btn-send" href="#!" scroll={false}>
                                <i className="ri-send-plane-2-line"></i>
                            </Link>
                        </Card.Footer>

                    </div>
                    <div className="chat-user-details border" id="chat-user-details">
                        <SimpleBar>
                            <div>
                                <Button variant='' aria-label="button" onClick={Chartuser1} type="button" className="btn btn-icon btn-primary-light my-1 ms-2 responsive-chat-close2">
                                    <i className="ri-close-line"></i>
                                </Button>
                                <div className="text-center mb-5">
                                    <span className="avatar avatar-rounded online avatar-xxl me-2 mb-3 chatstatusperson">
                                        <img className="chatimageperson" src={activeUser.image} alt="img" />
                                    </span>
                                    <p className="mb-1 fs-15 fw-semibold text-dark lh-1 chatnameperson">{activeUser.name}</p>
                                    <p className="fs-12 text-muted"><span className="chatnameperson">emaileyjackson2134</span>@gmail.com</p>
                                    <p className="text-center mb-0">
                                        <Button variant='' type="button" aria-label="button" className="btn btn-icon rounded-pill btn-primary-light"><i
                                            className="ri-phone-line"></i></Button>
                                        <Button variant='' type="button" aria-label="button" className="btn btn-icon rounded-pill btn-primary-light ms-2"><i
                                            className="ri-video-add-line"></i></Button>
                                        <Button variant='' type="button" aria-label="button" className="btn btn-icon rounded-pill btn-primary-light ms-2"><i
                                            className="ri-chat-1-line"></i></Button>
                                    </p>
                                </div>
                                <div className="mb-5">
                                    <div className="fw-semibold mb-4">Shared Files
                                        <span className="badge bg-primary-transparent rounded-circle ms-1">4</span>
                                        <span className="float-end fs-11"><Link href="#!" scroll={false} className="link-primary text-underline"><u>View All</u></Link></span>
                                    </div>

                                    <ul className="shared-files list-unstyled">
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="shared-file-icon">
                                                        <i className="ti ti-file-text"></i>
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fs-12 fw-semibold mb-0">Project Details.pdf</p>
                                                    <p className="mb-0 text-muted fs-11">24,Oct 2022 - 14:24PM</p>
                                                </div>
                                                <div className="fs-18">
                                                    <Link aria-label="anchor" href="#!" scroll={false}><i className="ri-download-2-line text-muted"></i></Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="shared-file-icon">
                                                        <i className="ri-image-line"></i>
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fs-12 fw-semibold mb-0">Img_02.Jpg</p>
                                                    <p className="mb-0 text-muted fs-11">22,Oct 2022 - 10:19AM</p>
                                                </div>
                                                <div className="fs-18">
                                                    <Link aria-label="anchor" href="#!" scroll={false}><i className="ri-download-2-line text-muted"></i></Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="shared-file-icon">
                                                        <i className="ri-image-line"></i>
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fs-12 fw-semibold mb-0">Img_15.Jpg</p>
                                                    <p className="mb-0 text-muted fs-11">22,Oct 2022 - 10:18AM</p>
                                                </div>
                                                <div className="fs-18">
                                                    <Link aria-label="anchor" href="#!" scroll={false}><i className="ri-download-2-line text-muted"></i></Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="shared-file-icon">
                                                        <i className="ri-video-line"></i>
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fs-12 fw-semibold mb-0">Video_15_02_2022.MP4</p>
                                                    <p className="mb-0 text-muted fs-11">22,Oct 2022 - 10:18AM</p>
                                                </div>
                                                <div className="fs-18">
                                                    <Link href="#!" scroll={false}><i className="ri-download-2-line text-muted"></i></Link>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mb-0">
                                    <div className="fw-semibold mb-4">Photos & Media
                                        <span className="badge bg-primary-transparent rounded-circle ms-1">22</span>
                                        <span className="float-end fs-11"><Link href="#!" scroll={false} className="link-primary text-underline"><u>View All</u></Link></span>
                                    </div>
                                    <Row className='me-0'>
                                        {Photosmediadata.map((idx) => (
                                            <Col xl={4} lg={4} md={4} sm={4} key={Math.random()}>
                                                <Link aria-label="anchor" href="/apps/gallery/" className="chat-media">
                                                    <img src={idx.src} alt="" />
                                                </Link>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            </div>
                        </SimpleBar>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default Chat;

