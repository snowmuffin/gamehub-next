"use client";
import React, { Fragment, SetStateAction, useEffect, useRef, useState } from "react";
import { FilePond } from 'react-filepond';
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });
import DatePicker from "react-datepicker";
import { Button, Card, Col, Dropdown, Form, InputGroup, Modal, Row } from "react-bootstrap";
import Link from "next/link";
import Seo from "@/shared/layout-components/seo/seo";
import SimpleBar from "simplebar-react";

const KanbanBoard = () => {

    const leftContainerRef = useRef(null);
    const rightContainerRef = useRef(null);
    const topContainerRef = useRef(null);
    const bottomContainerRef = useRef(null);
    const lastContainerRef = useRef(null);
    useEffect(() => {
        if (typeof window !== "undefined") {
            const dragula = require("dragula");
            const windowElement = window;

            if (leftContainerRef.current && rightContainerRef.current) {
                const containers = [
                    leftContainerRef.current,
                    rightContainerRef.current,
                    topContainerRef.current,
                    bottomContainerRef.current,
                    lastContainerRef.current
                ];
                const drake = dragula(containers);

                // Your other dragula-related logic here...

                if (document.querySelector(".firstdrag")?.classList.contains("task-Null")) {
                    console.log("aaa");
                    document.querySelector(".view-more-button")?.classList.add("d-none");
                }
            }

            OnDivChange();
        }
    }, []);

    const elementsToModify = [
        leftContainerRef,
        rightContainerRef,
        topContainerRef,
        bottomContainerRef,
        lastContainerRef
    ];

    const OnDivChange = () => {
        elementsToModify.forEach((elementId) => {
            const element: any = elementId.current;
            if (element && element.children) {
                if (element.children.length <= 0) {
                    element.classList.add("task-Null");
                    element.parentNode.parentElement.parentElement.querySelector(".view-more-button")?.classList.add("d-none");
                } else {
                    element.classList.remove("task-Null");
                    element.parentNode.parentElement.parentElement.querySelector(".view-more-button")?.classList.remove("d-none");
                }
            }
        });
    };


    const Option1 = [
        { value: 'Sort By', label: 'Sort By' },
        { value: 'Newest', label: 'Newest' },
        { value: 'Date Added', label: 'Date Added' },
        { value: 'Type', label: 'Type' },
        { value: 'A - Z', label: 'A - Z' },
    ];
    const Option2 = [
        { value: 'Angelina May', label: 'Angelina May' },
        { value: 'Kiara advain', label: 'Kiara advain' },
        { value: 'Hercules Jhon', label: 'Hercules Jhon' },
        { value: 'Mayor Kim', label: 'Mayor Kim' }
    ];
    const Option3 = [
        { value: 'Select Tag', label: 'Select Tag' },
        { value: 'UI/UX', label: 'UI/UX' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Finance', label: 'Finance' },
        { value: 'Designing', label: 'Designing' },
        { value: 'Admin', label: 'Admin' },
        { value: 'Authentication', label: 'Authentication' },
        { value: 'Product', label: 'Product' },
        { value: 'Development', label: 'Development' }
    ];
    //filepond
    const [files, setFiles] = useState<any>([]);
    const [startDate, setStartDate] = useState(new Date());
    const handleDateChange = (date: SetStateAction<Date>) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };
    //
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    return (
        <Fragment>
            <Seo title={"Kanban-Board"} />
            <Row>
                <Col xl={12} >
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="p-3">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                <div>
                                    <div className="fs-15 fw-medium mb-2">Members OnBoard :</div>
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/10.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/4.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/13.jpg" alt="img" />
                                        </span>
                                        <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-dark" href="#!" scroll={false}>
                                            +8
                                        </Link>
                                    </div>
                                </div>
                                <div className="d-flex gap-2 flex-wrap flex-lg-nowrap task-karbon-header">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search Here" aria-describedby="button-addon01" />
                                        <button className="btn btn-ghost-light border" type="button" id="button-addon01"><i className="ri-search-line text-muted"></i></button>
                                    </div>
                                    <div className="choices" data-type="select-one" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">
                                        <Select name="colors" options={Option1} className="basic-multi-select" placeholder="Sort By"
                                            menuPlacement='auto' classNamePrefix="Select2"
                                        />
                                    </div>
                                    <button className="btn btn-primary text-nowrap btn-sm" onClick={handleShow} data-bs-toggle="modal" data-bs-target="#add-board"><i className="ri-add-line me-1 fw-medium align-middle"></i>New Board</button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <div className="SciFi-kanban-board">
                <div className="kanban-tasks-type todo" id="todo-tasks">
                    <div className="pe-3 mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="d-block fw-semibold fs-15">TODO - 36</span>
                            <div>
                                <Button variant='white' onClick={handleShow1} href="#!" className="btn btn-sm btn-outline-light btn-wave waves-effect waves-light">
                                    <i className="ri-add-line align-middle me-1 fw-semibold"></i>Add Task
                                </Button>
                            </div>
                        </div>
                    </div>
                        <SimpleBar className="kanban-tasks" id="new-tasks">
                            <div ref={rightContainerRef} onMouseEnter={OnDivChange}
                                id="todo-tasks-draggable"
                                data-view-btn="todo-tasks">
                                <Card className="custom-card">
                                    <div className="top-left"></div>
                                    <div className="top-right"></div>
                                    <div className="bottom-left"></div>
                                    <div className="bottom-right"></div>
                                    <Card.Body className="p-0">
                                        <div className="p-3 kanban-board-head">
                                            <div className="d-flex text-muted justify-content-between gap-2">
                                                <div><h6 className="fw-medium mb-0">Implementation of New Pages.</h6></div>

                                                <Dropdown>
                                                    <Dropdown.Toggle variant='light' className="btn btn-icon btn-sm no-caret">
                                                        <i className="fe fe-more-vertical"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                                                        <Dropdown.Item href="#!"><i className="ri-eye-line me-1 align-middle d-inline-block"></i>View</Dropdown.Item>
                                                        <Dropdown.Item href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                                        <Dropdown.Item href="#!"><i className="ri-edit-line me-1 align-middle d-inline-block"></i>Edit</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <div className="task-badges"><span className="badge bg-primary-transparent">#TSKN0 - 87</span><span className="ms-1 badge bg-danger-transparent">Profile</span></div>
                                        </div>
                                        <div className="kanban-content mt-2">
                                            <div className="d-flex justify-content-between gap-2">
                                                <div className="fs-11 mb-1"><i className="ri-calendar-line me-1 align-middle d-inline-block op-7"></i>Due Date: 05-01-24 </div>
                                                <div className="fs-11"><i className="ri-progress-5-line me-1 align-middle d-inline-block op-7"></i>Status: <span className="text-warning">0% </span></div>
                                            </div>
                                            <div className="kanban-task-description op-8 mb-1">Lorem primis in faucibus orci luctus et ultrices posuere <br />cubilia cur </div>
                                        </div>
                                        <div className="p-3 border-top border-block-start-dashed">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/9.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/14.jpg" alt="img" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <Link href="#!" scroll={false} className="me-2 text-secondary">
                                                        <span className="me-1"><i className="ri-attachment-2 align-middle fw-normal"></i></span><span className="fw-medium fs-12">12</span>
                                                    </Link>
                                                    <Link href="#!" scroll={false} className="text-primary">
                                                        <span className="me-1"><i className="ri-chat-1-line align-middle fw-normal"></i></span><span className="fw-medium fs-12">08</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card">
                                    <div className="top-left"></div>
                                    <div className="top-right"></div>
                                    <div className="bottom-left"></div>
                                    <div className="bottom-right"></div>
                                    <Card.Body className="p-0">
                                        <div className="p-3 kanban-board-head">
                                            <div className="d-flex text-muted justify-content-between gap-2">
                                                <div><h6 className="fw-medium mb-0">Redesign E-commerce Pages.</h6></div>

                                                <Dropdown>
                                                    <Dropdown.Toggle variant='light' className="btn btn-icon btn-sm no-caret">
                                                        <i className="fe fe-more-vertical"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                                                        <Dropdown.Item href="#!"><i className="ri-eye-line me-1 align-middle d-inline-block"></i>View</Dropdown.Item>
                                                        <Dropdown.Item href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                                        <Dropdown.Item href="#!"><i className="ri-edit-line me-1 align-middle d-inline-block"></i>Edit</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <div className="task-badges"><span className="badge bg-primary-transparent">#TSKN0 - 62</span><span className="ms-1 badge bg-success-transparent">Designing</span></div>
                                        </div>
                                        <div className="kanban-content mt-2">
                                            <div className="d-flex justify-content-between gap-2">
                                                <div className="fs-11 mb-1"><i className="ri-calendar-line me-1 align-middle d-inline-block op-7"></i>Due Date: 05-01-24 </div>
                                                <div className="fs-11"><i className="ri-progress-5-line me-1 align-middle d-inline-block op-7"></i>Status: <span className="text-warning">0% </span></div>
                                            </div>
                                            <div className="ms-1 badge bg-success-transparent">
                                                <img src="../../../assets/images/media/media-41.jpg" className="img-fluid rounded kanban-image" alt="" />
                                            </div>
                                        </div>
                                        <div className="p-3 border-top border-block-start-dashed">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/5.jpg" alt="img" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <Link href="#!" scroll={false} className="me-2 text-secondary">
                                                        <span className="me-1"><i className="ri-attachment-2 align-middle fw-normal"></i></span><span className="fw-medium fs-12">46</span>
                                                    </Link>
                                                    <Link href="#!" scroll={false} className="text-primary">
                                                        <span className="me-1"><i className="ri-chat-1-line align-middle fw-normal"></i></span><span className="fw-medium fs-12">15</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </SimpleBar>
                    <div className="d-grid view-more-button mt-3">
                        <Button variant='primary-light' className="btn btn-wave">View More</Button>
                    </div>
                </div>
                <div className="kanban-tasks-type in-progress">
                    <div className="pe-3 mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="d-block fw-semibold fs-15">ON GOING - 25</span>
                            <div>
                                <Button variant='white' onClick={handleShow1} href="#!" className="btn btn-sm btn-outline-light btn-wave waves-effect waves-light">
                                    <i className="ri-add-line align-middle me-1 fw-semibold"></i>Add Task
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="kanban-tasks" id="inprogress-tasks">
                        <SimpleBar style={{maxHeight:"600px"}}>
                        <div ref={leftContainerRef} onMouseEnter={OnDivChange}>
                            <Card className="custom-card">
                                <Card.Body className="p-0">
                                    <div className="p-3 kanban-board-head">
                                        <div className="d-flex text-muted justify-content-between mb-1 fs-12 fw-semibold">
                                            <div><i className="ri-time-line me-1 align-middle"></i>Created - 02 Jun</div>
                                            <div>5 days left</div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="task-badges"><span className="badge bg-light text-default">#SPK - 13</span><span className="ms-1 badge bg-primary-transparent">UI Design</span><span className="ms-1 badge bg-danger-transparent">Development</span></div>
                                            <Dropdown>
                                                <Dropdown.Toggle variant='light' className="btn btn-icon btn-sm no-caret">
                                                    <i className="fe fe-more-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu-end">
                                                    <Dropdown.Item href="#!"><i className="ri-eye-line me-1 align-middle d-inline-block"></i>View</Dropdown.Item>
                                                    <Dropdown.Item href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                                    <Dropdown.Item href="#!"><i className="ri-edit-line me-1 align-middle d-inline-block"></i>Edit</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className="kanban-content mt-2">
                                            <h6 className="fw-semibold mb-1 fs-15">Create Calendar & Mail pages.</h6>
                                            <div className="kanban-task-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta </div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-top border-block-start-dashed">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <Link href="#!" className="me-2 text-primary">
                                                    <span className="me-1"><i className="ri-thumb-up-fill align-middle fw-normal"></i></span><span className="fw-semibold fs-12">05</span>
                                                </Link>
                                                <Link href="#!" scroll={false} className="text-muted">
                                                    <span className="me-1"><i className="ri-message-2-line align-middle fw-normal"></i></span><span className="fw-semibold fs-12">13</span>
                                                </Link>
                                            </div>
                                            <div className="avatar-list-stacked">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../../assets/images/faces/13.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../../assets/images/faces/6.jpg" alt="img" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="custom-card">
                                <Card.Body className="p-0">
                                    <div className="p-3 kanban-board-head">
                                        <div className="d-flex text-muted justify-content-between mb-1 fs-12 fw-semibold">
                                            <div><i className="ri-time-line me-1 align-middle"></i>Created - 03 Jun</div>
                                            <div>12 days left</div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="task-badges"><span className="badge bg-light text-default ms-1">#SPK - 09</span><span className="ms-1 badge bg-teal-transparent">Product</span></div>
                                            <Dropdown>
                                                <Dropdown.Toggle variant='light' className="btn btn-icon btn-sm no-caret">
                                                    <i className="fe fe-more-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu-end">
                                                    <Dropdown.Item href="#!"><i className="ri-eye-line me-1 align-middle d-inline-block"></i>View</Dropdown.Item>
                                                    <Dropdown.Item href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                                    <Dropdown.Item href="#!"><i className="ri-edit-line me-1 align-middle d-inline-block"></i>Edit</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className="kanban-content mt-2">
                                            <h6 className="fw-semibold mb-1 fs-15">Project design Figma,Sketch.</h6>
                                            <div className="kanban-task-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta </div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-top border-block-start-dashed">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <Link href="#!" scroll={false} className="me-2 text-primary">
                                                    <span className="me-1"><i className="ri-thumb-up-fill align-middle fw-normal"></i></span><span className="fw-semibold fs-12">02</span>
                                                </Link>
                                                <Link href="#!" scroll={false} className="text-muted">
                                                    <span className="me-1"><i className="ri-message-2-line align-middle fw-normal"></i></span><span className="fw-semibold fs-12">0</span>
                                                </Link>
                                            </div>
                                            <div className="avatar-list-stacked">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../../assets/images/faces/12.jpg" alt="img" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        </SimpleBar>
                        <div className="d-grid view-more-button mt-3">
                            <Button variant='' className="btn btn-primary-light btn-wave">View More</Button>
                        </div>

                    </div>
                </div>
                <div className="kanban-tasks-type inreview">
                    <div className="pe-3 mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="d-block fw-semibold fs-15">IN REVIEW - 02</span>
                            <div>
                                <Button variant='white' onClick={handleShow1} href="#!" className="btn btn-sm btn-outline-light btn-wave waves-effect waves-light">
                                    <i className="ri-add-line align-middle me-1 fw-semibold"></i>Add Task
                                </Button>
                            </div>
                        </div>
                    </div>
                        <div className="kanban-tasks" id="inreview-tasks">
                            <SimpleBar style={{maxHeight:"600px"}}>
                            <div ref={bottomContainerRef} onMouseEnter={OnDivChange}>
                                <Card className="custom-card">
                                    <Card.Body className="p-0">
                                        <div className="p-3 kanban-board-head">
                                            <div className="d-flex text-muted justify-content-between mb-1 fs-12 fw-semibold">
                                                <div><i className="ri-time-line me-1 align-middle"></i>Created - 05 Jun</div>
                                                <div>14 days left</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="task-badges"><span className="badge bg-light text-default">#SPK - 15</span><span className="ms-1 badge bg-purple-transparent">Review</span></div>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant='light' className="btn btn-icon btn-sm no-caret">
                                                        <i className="fe fe-more-vertical"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                                                        <Dropdown.Item href="#!"><i className="ri-eye-line me-1 align-middle d-inline-block"></i>View</Dropdown.Item>
                                                        <Dropdown.Item href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                                        <Dropdown.Item href="#!"><i className="ri-edit-line me-1 align-middle d-inline-block"></i>Edit</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <div className="kanban-content mt-2">
                                                <div className="task-image mt-2">
                                                    <img src="../../../assets/images/media/media-43.jpg" className="img-fluid rounded kanban-image" alt="" />
                                                </div>
                                                <h6 className="fw-semibold mb-0 mt-2">Design Architecture strategy.</h6>
                                            </div>
                                        </div>
                                        <div className="p-3 border-top border-block-start-dashed">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <Link href="#!" scroll={false} className="me-2 text-primary">
                                                        <span className="me-1"><i className="ri-thumb-up-fill align-middle fw-normal"></i></span><span className="fw-semibold fs-12">09</span>
                                                    </Link>
                                                    <Link href="#!" scroll={false} className="text-muted">
                                                        <span className="me-1"><i className="ri-message-2-line align-middle fw-normal"></i></span><span className="fw-semibold fs-12">35</span>
                                                    </Link>
                                                </div>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/3.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/5.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/7.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            </SimpleBar>
                            <div className="d-grid view-more-button mt-3">
                                <Button variant='' className="btn btn-primary-light btn-wave">View More</Button>
                            </div>
                        </div>
                </div>
                <div className="kanban-tasks-type completed">
                    <div className="pe-3 mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="d-block fw-semibold fs-15">COMPLETED - 36</span>
                            <div>
                                <Button variant='white' onClick={handleShow1} href="#!" className="btn btn-sm btn-outline-light btn-wave waves-effect waves-light">
                                    <i className="ri-add-line align-middle me-1 fw-semibold"></i>Add Task
                                </Button>
                            </div>
                        </div>
                    </div>
                        <div className="kanban-tasks" id="completed-tasks">
                            <SimpleBar style={{maxHeight:"600px"}}>
                            <div ref={lastContainerRef} onMouseEnter={OnDivChange}>
                                <Card className="custom-card">
                                    <Card.Body className="p-0">
                                        <div className="p-3 kanban-board-head">
                                            <div className="d-flex text-muted justify-content-between mb-1 fs-12 fw-semibold">
                                                <div><i className="ri-time-line me-1 align-middle"></i>Created - 12 Jun</div>
                                                <div className="text-success"><i className="ri-check-fill me-1 align-middle d-inline-block"></i>Done</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="task-badges"><span className="badge bg-light text-default">#SPK - 04</span><span className="ms-1 badge bg-success-transparent">UI/UX</span></div>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant='light' className="btn btn-icon btn-sm no-caret">
                                                        <i className="fe fe-more-vertical"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu-end">
                                                        <Dropdown.Item href="#!"><i className="ri-eye-line me-1 align-middle d-inline-block"></i>View</Dropdown.Item>
                                                        <Dropdown.Item href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                                        <Dropdown.Item href="#!"><i className="ri-edit-line me-1 align-middle d-inline-block"></i>Edit</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <div className="kanban-content mt-2">
                                                <h6 className="fw-semibold mb-1 fs-15">Sash project update.</h6>
                                                <div className="kanban-task-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta </div>
                                            </div>
                                        </div>
                                        <div className="p-3 border-top border-block-start-dashed">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <Link href="#!" scroll={false} className="me-2 text-primary">
                                                        <span className="me-1"><i className="ri-thumb-up-fill align-middle fw-normal"></i></span><span className="fw-semibold fs-12">18</span>
                                                    </Link>
                                                    <Link href="#!" scroll={false} className="text-muted">
                                                        <span className="me-1"><i className="ri-message-2-line align-middle fw-normal"></i></span><span className="fw-semibold fs-12">03</span>
                                                    </Link>
                                                </div>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/6.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/13.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card">
                                    <Card.Body className="p-0">
                                        <div className="p-3 kanban-board-head">
                                            <div className="d-flex text-muted justify-content-between mb-1 fs-12 fw-semibold">
                                                <div><i className="ri-time-line me-1 align-middle"></i>Created - 10 Jun</div>
                                                <div className="text-success"><i className="ri-check-fill me-1 align-middle d-inline-block"></i>Done</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="task-badges"><span className="badge bg-light text-default">#SPK - 10</span><span className="ms-1 badge bg-info-transparent">Development</span></div>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant='light' className="btn btn-icon btn-sm no-caret">
                                                        <i className="fe fe-more-vertical"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu-end">
                                                        <Dropdown.Item href="#!"><i className="ri-eye-line me-1 align-middle d-inline-block"></i>View</Dropdown.Item>
                                                        <Dropdown.Item href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                                        <Dropdown.Item href="#!"><i className="ri-edit-line me-1 align-middle d-inline-block"></i>Edit</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <div className="kanban-content mt-2">
                                                <h6 className="fw-semibold mb-1 fs-15">React JS new version update.</h6>
                                                <div className="kanban-task-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta </div>
                                            </div>
                                        </div>
                                        <div className="p-3 border-top border-block-start-dashed">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <Link href="#!" scroll={false} className="me-2 text-primary">
                                                        <span className="me-1"><i className="ri-thumb-up-fill align-middle fw-normal"></i></span><span className="fw-semibold fs-12">22</span>
                                                    </Link>
                                                    <Link href="#!" scroll={false} className="text-muted">
                                                        <span className="me-1"><i className="ri-message-2-line align-middle fw-normal"></i></span><span className="fw-semibold fs-12">12</span>
                                                    </Link>
                                                </div>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/10.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/11.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/1.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card">
                                    <Card.Body className="p-0">
                                        <div className="p-3 kanban-board-head">
                                            <div className="d-flex text-muted justify-content-between mb-1 fs-12 fw-semibold">
                                                <div><i className="ri-time-line me-1 align-middle"></i>Created - 07 Jun</div>
                                                <div className="text-success"><i className="ri-check-fill me-1 align-middle d-inline-block"></i>Done</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="task-badges"><span className="badge bg-light text-default">#SPK - 16</span><span className="ms-1 badge bg-primary-transparent">Discussion</span></div>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant='light' className="btn btn-icon btn-sm no-caret">
                                                        <i className="fe fe-more-vertical"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu-end">
                                                        <Dropdown.Item href="#!"><i className="ri-eye-line me-1 align-middle d-inline-block"></i>View</Dropdown.Item>
                                                        <Dropdown.Item href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                                        <Dropdown.Item href="#!"><i className="ri-edit-line me-1 align-middle d-inline-block"></i>Edit</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <div className="kanban-content mt-2">
                                                <div className="task-image mt-2">
                                                    <img src="../../../assets/images/media/media-69.jpg" className="img-fluid rounded kanban-image bg-light" alt="" />
                                                </div>
                                                <h6 className="fw-semibold mb-0 mt-2">Project discussion with client.</h6>
                                            </div>
                                        </div>
                                        <div className="p-3 border-top border-block-start-dashed">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <Link href="#!" scroll={false} className="me-2 text-primary">
                                                        <span className="me-1"><i className="ri-thumb-up-fill align-middle fw-normal"></i></span><span className="fw-semibold fs-12">11</span>
                                                    </Link>
                                                    <Link href="#!" scroll={false} className="text-muted">
                                                        <span className="me-1"><i className="ri-message-2-line align-middle fw-normal"></i></span><span className="fw-semibold fs-12">05</span>
                                                    </Link>
                                                </div>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/4.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            </SimpleBar>
                            <div className="d-grid view-more-button mt-3">
                                <Button variant='' className="btn btn-primary-light btn-wave">View More</Button>
                            </div>
                        </div>
                </div>
            </div>

            <Modal centered className=" fade" id="add-board" tabIndex={-1} aria-hidden="true" show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton className="modal-header">
                    <h6 className="modal-title">Add Board</h6>
                </Modal.Header>
                <Modal.Body className="px-4">
                    <Row>
                        <Col xl={12}>
                            <Form.Label htmlFor="board-title" className="form-label">Task Board Title</Form.Label>
                            <Form.Control type="text" className="form-control" id="board-title" placeholder="Board Title" />
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='light' type="button" className="btn" onClick={handleClose}>Cancel</Button>
                    <Button variant='primary' type="button" className="btn">Add Board</Button>
                </Modal.Footer>
            </Modal>
            <Modal className=" fade" id="add-task" tabIndex={-1} aria-hidden="true" show={show1} onHide={handleClose1} animation={false}>
                <Modal.Header closeButton className="">
                    <h6 className="modal-title">Add Task</h6>
                </Modal.Header>
                <Modal.Body className=" px-4">
                    <div className="row gy-2">
                        <Col xl={6}>
                            <Form.Label htmlFor="task-name" className="form-label">Task Name</Form.Label>
                            <Form.Control type="text" className="form-control" id="task-name" placeholder="Task Name" />
                        </Col>
                        <Col xl={6}>
                            <Form.Label htmlFor="task-id" className="form-label">Task ID</Form.Label>
                            <Form.Control type="text" className="form-control" id="task-id" placeholder="Task ID" />
                        </Col>
                        <Col xl={12}>
                            <Form.Label htmlFor="text-area" className="form-label">Task Description</Form.Label>
                            <Form.Control as="textarea" className="form-control" id="text-area" rows={2} placeholder="Write Description"></Form.Control>
                        </Col>

                        <Col xl={12}>
                            <Form.Label htmlFor="text-area" className="form-label">Task Images</Form.Label>
                            <FilePond
                                files={files}
                                onupdatefiles={setFiles}
                                allowMultiple={true}
                                maxFiles={3}
                                server="/api"
                                name="files" /* sets the file input name, it's filepond by default */
                                labelIdle='Drag & Drop your file here or click '
                            />
                        </Col>
                        <Col xl={12}>
                            <Form.Label className="form-label">Assigned To</Form.Label>
                            <Select isMulti name="colors" options={Option2} className="basic-multi-select"
                                menuPlacement='auto' classNamePrefix="Select2"
                            />
                        </Col>
                        <Col xl={7}>
                            <Form.Label className="form-label">Target Date</Form.Label>
                            <div className="form-group">
                                <InputGroup>
                                    <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={handleDateChange}
                                        timeInputLabel="Time:"
                                        dateFormat="MM/dd/yyyy h:mm aa"
                                        showTimeInput
                                        placeholderText='Choose date and time'
                                    />
                                </InputGroup>
                            </div>
                        </Col>
                        <Col xl={5}>
                            <Form.Label className="form-label">Tags</Form.Label>
                            <Select isMulti name="colors" options={Option3} className="basic-multi-select"
                                menuPlacement='auto' classNamePrefix="Select2"
                            />
                        </Col>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='light' type="button" className="btn" onClick={handleClose1}>Cancel</Button>
                    <Button variant='primary' type="button" className="btn">Add Task</Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
};

export default KanbanBoard;
