"use client";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Dropdown, Form, InputGroup, Nav, Offcanvas, Pagination, Row, Tab } from "react-bootstrap";
const Select = dynamic(() => import('react-select'), { ssr: false });
import DatePicker from 'react-datepicker';


const Todolist = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [startDate1, setStartDate1] = useState(new Date());

    const handleDateChange = (date: React.SetStateAction<Date>) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };

    const handleDateChange1 = (date: React.SetStateAction<Date>) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate1(date);
        }
    };


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Selectdata = [
        { value: "Angelina May", label: "Angelina May" },
        { value: "Kiara advain", label: "Kiara advain" },
        { value: "Hercules Jhon", label: "Hercules Jhon" },
        { value: "Mayor Kim", label: "Mayor Kim" },

    ];
    const Selectdata1 = [
        { value: "Select", label: "Select" },
        { value: "Critical", label: "Critical" },
        { value: "High", label: "High" },
        { value: "Medium", label: "Medium" },
        { value: "Low", label: "Low" }
    ]
    return (
        <Fragment>
            <Seo title={"Todolist"} />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="p-0">
                            <div className="p-3">
                                <div className="d-sm-flex gap-3">
                                    <InputGroup className="mb-2 mb-sm-0">
                                        <Form.Control type="text" className="" placeholder="Search Task Here" aria-describedby="button-addon01" />
                                        <Button variant="" className="btn btn-ghost-light border" type="button" id="button-addon01"><i className="ri-search-line text-muted"></i></Button>
                                    </InputGroup>
                                    <Button onClick={handleShow} variant="" className="btn btn-primary d-flex align-items-center justify-content-center flex-shrink-0" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                        <i className="ri-add-circle-line fs-16 align-middle me-1"></i>Create New Task
                                    </Button>
                                    <Offcanvas placement='end' show={show} onHide={handleClose} className="offcanvas-end" tabIndex={-1} id="offcanvasExample"
                                        aria-labelledby="offcanvasExampleLabel">
                                        <Offcanvas.Header className="offcanvas-header border-bottom border-block-end-dashed">
                                            <h6 className="offcanvas-title" id="offcanvasExampleLabel">Create Task</h6>
                                            <Button variant="" type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                                onClick={handleClose}></Button>
                                        </Offcanvas.Header>
                                        <Offcanvas.Body className="">
                                            <div className="row gy-2 mb-4">
                                                <Col xl={12}>
                                                    <Form.Label htmlFor="task-name" className="form-label">Task Name</Form.Label>
                                                    <Form.Control type="text" className="" id="task-name" placeholder="Task Name" />
                                                </Col>
                                                <Col xl={12}>
                                                    <label className="form-label">Assigned To</label>
                                                    <Select name="colors" options={Selectdata} className="basic-multi-select"
                                                        menuPlacement='auto' classNamePrefix="Select2" placeholder="Select Industry" />
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Label className="">Assigned Date</Form.Label>
                                                    <Form.Group>
                                                        <InputGroup>
                                                            <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                                            <DatePicker
                                                                selected={startDate}
                                                                onChange={handleDateChange}
                                                                timeInputLabel="Time:"
                                                                dateFormat="yy/MM/dd h:mm aa"
                                                                placeholderText='Choose date and time'
                                                                showTimeInput
                                                            />
                                                        </InputGroup>
                                                    </Form.Group>
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Label className="form-label">End Date</Form.Label>
                                                    <Form.Group>
                                                        <InputGroup>
                                                            <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                                            <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" selected={startDate1} onChange={handleDateChange1} />
                                                        </InputGroup>
                                                    </Form.Group>
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Label className="">Priority</Form.Label>
                                                    <Select name="colors" options={Selectdata1} className="basic-multi-select"
                                                        menuPlacement='auto' classNamePrefix="Select2" placeholder="Select Industry" />
                                                </Col>
                                            </div>
                                            <Button variant="" type="button" className="btn btn-light me-2"
                                                data-bs-dismiss="offcanvas">Cancel</Button>
                                            <Button variant="" type="button" className="btn btn-primary">Create</Button>
                                        </Offcanvas.Body>
                                    </Offcanvas>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Row>
                        <Tab.Container defaultActiveKey="all">
                            <Col xl={12}>
                                <div className="d-flex pb-3 align-items-center justify-content-between gap-1 flex-wrap">
                                    <div>
                                        <Nav className="nav-tabs nav-tabs-header mb-0 d-flex flex-wrap" role="tablist">
                                            <Nav.Item className="m-1">
                                                <Nav.Link eventKey="all" className="" data-bs-toggle="tab" role="tab" aria-current="page"
                                                    href="#all-tasks" aria-selected="true">All Tasks</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="m-1">
                                                <Nav.Link eventKey="pending" className="" data-bs-toggle="tab" role="tab" aria-current="page"
                                                    href="#pending" aria-selected="true">Pending</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="m-1">
                                                <Nav.Link eventKey="progress" className="" data-bs-toggle="tab" role="tab" aria-current="page"
                                                    href="#in-progress" aria-selected="true">In Progress</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="m-1">
                                                <Nav.Link eventKey="complete" className="" data-bs-toggle="tab" role="tab" aria-current="page"
                                                    href="#completed" aria-selected="true">Completed</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                    <div className="ms-auto">
                                        <Dropdown>
                                            <Dropdown.Toggle as="a" className="btn btn-sm btn-secondary-light btn-wave waves-light waves-effect no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                More <i className="ti ti-chevron-down ms-1 align-middle"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu as="ul" className="dropdown-menu">
                                                <li><Link className="dropdown-item" href="#!" scroll={false}>Select All</Link></li>
                                                <li><Link className="dropdown-item" href="#!" scroll={false}>Share All</Link></li>
                                                <li><Link className="dropdown-item" href="#!" scroll={false}>Delete All</Link></li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </Col>
                            <Tab.Content className="task-tabs-container">
                                <Tab.Pane eventKey="all" className="p-0" id="all-tasks"
                                    role="tabpanel">
                                    <div className="row" id="tasks-container">
                                        <Col xl={4} className="task-card">
                                            <Card className="custom-card task-pending-card">
                                                <div className="top-left"></div>
                                                <div className="top-right"></div>
                                                <div className="bottom-left"></div>
                                                <div className="bottom-right"></div>
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2 mb-2">
                                                        <div>
                                                            <p className="fw-medium mb-2 d-flex align-items-center">Title: Design new wireframe</p>
                                                            <p className="mb-0 fs-14">Status : <span className="badge bg-success-transparent align-middle fs-10">40% Completed</span></p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                                                        <p className="mb-0 fs-14">End Date : <span className="fs-12 mb-1 text-muted">13,Jan 2024</span></p>
                                                        <p className="mb-0">
                                                            <span className="fs-14">Priority :</span> <span className="badge bg-warning align-middle">High</span>
                                                        </p>
                                                    </div>
                                                </Card.Body>
                                                <Card.Footer className="border-top border-block-start-dashed">
                                                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                                        <div className="avatar-list-stacked">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/10.jpg" alt="img" />
                                                            </span>
                                                            <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-black" href="#!" scroll={false}>
                                                                +8
                                                            </Link>
                                                        </div>

                                                        <p className="mb-0 fs-14">
                                                            Assign Team
                                                        </p>
                                                    </div>
                                                </Card.Footer>
                                            </Card>
                                            <Card className="custom-card task-inprogress-card">
                                                <div className="top-left"></div>
                                                <div className="top-right"></div>
                                                <div className="bottom-left"></div>
                                                <div className="bottom-right"></div>
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2 mb-2">
                                                        <div>
                                                            <p className="fw-medium mb-2 d-flex align-items-center">Title: Plugin Implementation</p>
                                                            <p className="mb-0 fs-14">Status : <span className="badge bg-success-transparent align-middle fs-10">20% Completed</span></p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                                                        <p className="mb-0 fs-14">End Date : <span className="fs-12 mb-1 text-muted">13,Jan 2024</span></p>
                                                        <p className="mb-0">
                                                            <span className="fs-14">Priority :</span> <span className="badge bg-success align-middle">Low</span>
                                                        </p>
                                                    </div>
                                                </Card.Body>
                                                <Card.Footer className="border-top border-block-start-dashed">
                                                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                                        <div className="avatar-list-stacked">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/10.jpg" alt="img" />
                                                            </span>
                                                            <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-black" href="#!" scroll={false}>
                                                                +8
                                                            </Link>
                                                        </div>

                                                        <p className="mb-0 fs-14">
                                                            Assign Team
                                                        </p>
                                                    </div>
                                                </Card.Footer>
                                            </Card>
                                            <Card className="custom-card task-completed-card">
                                                <div className="top-left"></div>
                                                <div className="top-right"></div>
                                                <div className="bottom-left"></div>
                                                <div className="bottom-right"></div>
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2 mb-2">
                                                        <div>
                                                            <p className="fw-medium mb-2 d-flex align-items-center">Title: Plugin Implementation</p>
                                                            <p className="mb-0 fs-14">Status : <span className="badge bg-success-transparent align-middle fs-10">15% Completed</span></p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                                                        <p className="mb-0 fs-14">End Date : <span className="fs-12 mb-1 text-muted">13,Jan 2024</span></p>
                                                        <p className="mb-0">
                                                            <span className="fs-14">Priority :</span> <span className="badge bg-secondary align-middle">medium</span>
                                                        </p>
                                                    </div>
                                                </Card.Body>
                                                <Card.Footer className="border-top border-block-start-dashed">
                                                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                                        <div className="avatar-list-stacked">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/5.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/11.jpg" alt="img" />
                                                            </span>
                                                            <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-black" href="#!" scroll={false}>
                                                                +2
                                                            </Link>
                                                        </div>

                                                        <p className="mb-0 fs-14">
                                                            Assign Team
                                                        </p>
                                                    </div>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                        <Col xl={4} className="task-card">
                                            <Card className="custom-card task-inprogress-card">
                                                <div className="top-left"></div>
                                                <div className="top-right"></div>
                                                <div className="bottom-left"></div>
                                                <div className="bottom-right"></div>
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2 mb-2">
                                                        <div>
                                                            <p className="fw-medium mb-2 d-flex align-items-center">Title: All pages validation</p>
                                                            <p className="mb-0 fs-14">Status : <span className="badge bg-success-transparent align-middle fs-10">15% Completed</span></p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                                                        <p className="mb-0 fs-14">End Date : <span className="fs-12 mb-1 text-muted">28,Dec 2023</span></p>
                                                        <p className="mb-0">
                                                            <span className="fs-14">Priority :</span> <span className="badge bg-secondary align-middle">medium</span>
                                                        </p>
                                                    </div>
                                                </Card.Body>
                                                <Card.Footer className="border-top border-block-start-dashed">
                                                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                                        <div className="avatar-list-stacked">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/1.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/5.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/12.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/15.jpg" alt="img" />
                                                            </span>
                                                        </div>
                                                        <p className="mb-0 fs-14">
                                                            Assign Team
                                                        </p>
                                                    </div>
                                                </Card.Footer>
                                            </Card>
                                            <Card className="custom-card task-completed-card">
                                                <div className="top-left"></div>
                                                <div className="top-right"></div>
                                                <div className="bottom-left"></div>
                                                <div className="bottom-right"></div>
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2 mb-2">
                                                        <div>
                                                            <p className="fw-medium mb-2 d-flex align-items-center">Title: Design and update project</p>
                                                            <p className="mb-0 fs-14">Status : <span className="badge bg-success-transparent align-middle fs-10">Not Started</span></p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                                                        <p className="mb-0 fs-14">End Date : <span className="fs-12 mb-1 text-muted">21,Dec 2023</span></p>
                                                        <p className="mb-0">
                                                            <span className="fs-14">Priority :</span> <span className="badge bg-success align-middle">Low</span>
                                                        </p>
                                                    </div>
                                                </Card.Body>
                                                <Card.Footer className="border-top border-block-start-dashed">
                                                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                                        <div className="avatar-list-stacked">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/3.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/9.jpg" alt="img" />
                                                            </span>
                                                            <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-black" href="#!" scroll={false}>
                                                                +1
                                                            </Link>
                                                        </div>

                                                        <p className="mb-0 fs-14">
                                                            Assign Team
                                                        </p>
                                                    </div>
                                                </Card.Footer>
                                            </Card>
                                            <Card className="custom-card task-completed-card">
                                                <div className="top-left"></div>
                                                <div className="top-right"></div>
                                                <div className="bottom-left"></div>
                                                <div className="bottom-right"></div>
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2 mb-2">
                                                        <div>
                                                            <p className="fw-medium mb-2 d-flex align-items-center">Title: Adding policies in main Landing page</p>
                                                            <p className="mb-0 fs-14">Status : <span className="badge bg-success-transparent align-middle fs-10">10% Completed</span></p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                                                        <p className="mb-0 fs-14">End Date : <span className="fs-12 mb-1 text-muted">03,Jan 2024</span></p>
                                                        <p className="mb-0">
                                                            <span className="fs-14">Priority :</span> <span className="badge bg-danger align-middle">Critical</span>
                                                        </p>
                                                    </div>
                                                </Card.Body>
                                                <Card.Footer className="border-top border-block-start-dashed">
                                                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                                        <div className="avatar-list-stacked">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/10.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/11.jpg" alt="img" />
                                                            </span>
                                                            <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-black" href="#!" scroll={false}>
                                                                +4
                                                            </Link>
                                                        </div>

                                                        <p className="mb-0 fs-14">
                                                            Assign Team
                                                        </p>
                                                    </div>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                        <Col xl={4} className="task-card">
                                            <Card className="custom-card task-pending-card">
                                                <div className="top-left"></div>
                                                <div className="top-right"></div>
                                                <div className="bottom-left"></div>
                                                <div className="bottom-right"></div>
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2 mb-2">
                                                        <div>
                                                            <p className="fw-medium mb-2 d-flex align-items-center">Title: Update all Plugins</p>
                                                            <p className="mb-0 fs-14">Status : <span className="badge bg-success-transparent align-middle fs-10">80% Completed</span></p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                                                        <p className="mb-0 fs-14">End Date : <span className="fs-12 mb-1 text-muted">07,Jan 2024</span></p>
                                                        <p className="mb-0">
                                                            <span className="fs-14">Priority :</span> <span className="badge bg-warning align-middle">High</span>
                                                        </p>
                                                    </div>
                                                </Card.Body>
                                                <Card.Footer className="border-top border-block-start-dashed">
                                                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                                        <div className="avatar-list-stacked">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/14.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/13.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/21.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/16.jpg" alt="img" />
                                                            </span>
                                                        </div>

                                                        <p className="mb-0 fs-14">
                                                            Assign Team
                                                        </p>
                                                    </div>
                                                </Card.Footer>
                                            </Card>
                                            <Card className="custom-card task-completed-card">
                                                <div className="top-left"></div>
                                                <div className="top-right"></div>
                                                <div className="bottom-left"></div>
                                                <div className="bottom-right"></div>
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2 mb-2">
                                                        <div>
                                                            <p className="fw-medium mb-2 d-flex align-items-center">Title: Update Images in a new Template</p>
                                                            <p className="mb-0 fs-14">Status : <span className="badge bg-success-transparent align-middle fs-10">30% Completed</span></p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                                                        <p className="mb-0 fs-14">End Date : <span className="fs-12 mb-1 text-muted">01,Dec 2023</span></p>
                                                        <p className="mb-0">
                                                            <span className="fs-14">Priority :</span> <span className="badge bg-success align-middle">Low</span>
                                                        </p>
                                                    </div>
                                                </Card.Body>
                                                <Card.Footer className="border-top border-block-start-dashed">
                                                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                                        <div className="avatar-list-stacked">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/1.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/3.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/6.jpg" alt="img" />
                                                            </span>
                                                            <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-black" href="#!" scroll={false}>
                                                                +5
                                                            </Link>
                                                        </div>

                                                        <p className="mb-0 fs-14">
                                                            Assign Team
                                                        </p>
                                                    </div>
                                                </Card.Footer>
                                            </Card>
                                            <Card className="custom-card task-inprogress-card">
                                                <div className="top-left"></div>
                                                <div className="top-right"></div>
                                                <div className="bottom-left"></div>
                                                <div className="bottom-right"></div>
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2 mb-2">
                                                        <div>
                                                            <p className="fw-medium mb-2 d-flex align-items-center">Title: Update Images in a new Template</p>
                                                            <p className="mb-0 fs-14">Status : <span className="badge bg-success-transparent align-middle fs-10">30% Completed</span></p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                                                        <p className="mb-0 fs-14">End Date : <span className="fs-12 mb-1 text-muted">26,Jan 2024</span></p>
                                                        <p className="mb-0">
                                                            <span className="fs-14">Priority :</span> <span className="badge bg-secondary align-middle">medium</span>
                                                        </p>
                                                    </div>
                                                </Card.Body>
                                                <Card.Footer className="border-top border-block-start-dashed">
                                                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                                        <div className="avatar-list-stacked">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/9.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/13.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/12.jpg" alt="img" />
                                                            </span>
                                                        </div>

                                                        <p className="mb-0 fs-14">
                                                            Assign Team
                                                        </p>
                                                    </div>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="pending" className=" p-0" id="pending"
                                    role="tabpanel">
                                    <Row>
                                        <Col xl={4}>
                                            <Card className="custom-card task-pending-card">
                                                <div className="top-left"></div>
                                                <div className="top-right"></div>
                                                <div className="bottom-left"></div>
                                                <div className="bottom-right"></div>
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2 mb-2">
                                                        <div>
                                                            <p className="fw-medium mb-2 d-flex align-items-center">Title: Design new wireframe</p>
                                                            <p className="mb-0 fs-14">Status : <span className="badge bg-success-transparent align-middle fs-10">10% Completed</span></p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                                                        <p className="mb-0 fs-14">End Date : <span className="fs-12 mb-1 text-muted">12,Nov 2023</span></p>
                                                        <p className="mb-0">
                                                            <span className="fs-14">Priority :</span> <span className="badge bg-warning align-middle">High</span>
                                                        </p>
                                                    </div>
                                                </Card.Body>
                                                <Card.Footer className="border-top border-block-start-dashed">
                                                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                                        <div className="avatar-list-stacked">
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
                                                        </div>

                                                        <p className="mb-0 fs-14">
                                                            Assign Team
                                                        </p>
                                                    </div>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                        <Col xl={4}>
                                            <Card className="custom-card task-pending-card">
                                                <div className="top-left"></div>
                                                <div className="top-right"></div>
                                                <div className="bottom-left"></div>
                                                <div className="bottom-right"></div>
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2 mb-2">
                                                        <div>
                                                            <p className="fw-medium mb-2 d-flex align-items-center">Title:Update all Plugins</p>
                                                            <p className="mb-0 fs-14">Status : <span className="badge bg-success-transparent align-middle fs-10">10% Completed</span></p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                                                        <p className="mb-0 fs-14">End Date : <span className="fs-12 mb-1 text-muted">03,Jan 2024</span></p>
                                                        <p className="mb-0">
                                                            <span className="fs-14">Priority :</span> <span className="badge bg-warning align-middle">High</span>
                                                        </p>
                                                    </div>
                                                </Card.Body>
                                                <Card.Footer className="border-top border-block-start-dashed">
                                                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                                        <div className="avatar-list-stacked">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/14.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/13.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/21.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/16.jpg" alt="img" />
                                                            </span>
                                                        </div>

                                                        <p className="mb-0 fs-14">
                                                            Assign Team
                                                        </p>
                                                    </div>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="progress" className=" p-0" id="in-progress"
                                    role="tabpanel">
                                    <Row>
                                        <Col xl={4}>
                                            <Card className="custom-card task-inprogress-card">
                                                <div className="top-left"></div>
                                                <div className="top-right"></div>
                                                <div className="bottom-left"></div>
                                                <div className="bottom-right"></div>
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2 mb-2">
                                                        <div>
                                                            <p className="fw-medium mb-2 d-flex align-items-center">Title: Adding policies in main Landing page</p>
                                                            <p className="mb-0 fs-14">Status : <span className="badge bg-success-transparent align-middle fs-10">10% Completed</span></p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                                                        <p className="mb-0 fs-14">End Date : <span className="fs-12 mb-1 text-muted">15,Dec 2023</span></p>
                                                        <p className="mb-0">
                                                            <span className="fs-14">Priority :</span> <span className="badge bg-secondary align-middle">medium</span>
                                                        </p>
                                                    </div>
                                                </Card.Body>
                                                <Card.Footer className="border-top border-block-start-dashed">
                                                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                                        <div className="avatar-list-stacked">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/1.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/5.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/12.jpg" alt="img" />
                                                            </span>
                                                        </div>

                                                        <p className="mb-0 fs-14">
                                                            Assign Team
                                                        </p>
                                                    </div>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                        <Col xl={4}>
                                            <Card className="custom-card task-inprogress-card">
                                                <div className="top-left"></div>
                                                <div className="top-right"></div>
                                                <div className="bottom-left"></div>
                                                <div className="bottom-right"></div>
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2 mb-2">
                                                        <div>
                                                            <p className="fw-medium mb-2 d-flex align-items-center">Title: Integrate Wireframes for New Projects</p>
                                                            <p className="mb-0 fs-14">Status : <span className="badge bg-success-transparent align-middle fs-10">20% Completed</span></p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                                                        <p className="mb-0 fs-14">End Date : <span className="fs-12 mb-1 text-muted">18,Nov 2023</span></p>
                                                        <p className="mb-0">
                                                            <span className="fs-14">Priority :</span> <span className="badge bg-success align-middle">Low</span>
                                                        </p>
                                                    </div>
                                                </Card.Body>
                                                <Card.Footer className="border-top border-block-start-dashed">
                                                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                                        <div className="avatar-list-stacked">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/6.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/15.jpg" alt="img" />
                                                            </span>
                                                        </div>
                                                        <p className="mb-0 fs-14">
                                                            Assign Team
                                                        </p>
                                                    </div>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                        <Col xl={4}>
                                            <Card className="custom-card task-inprogress-card">
                                                <div className="top-left"></div>
                                                <div className="top-right"></div>
                                                <div className="bottom-left"></div>
                                                <div className="bottom-right"></div>
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2 mb-2">
                                                        <div>
                                                            <p className="fw-medium mb-2 d-flex align-items-center">Title: Design new wireframe</p>
                                                            <p className="mb-0 fs-14">Status : <span className="badge bg-success-transparent align-middle fs-10">40% Completed</span></p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                                                        <p className="mb-0 fs-14">End Date : <span className="fs-12 mb-1 text-muted">26,Jan 2024</span></p>
                                                        <p className="mb-0">
                                                            <span className="fs-14">Priority :</span> <span className="badge bg-secondary align-middle">medium</span>
                                                        </p>
                                                    </div>
                                                </Card.Body>
                                                <Card.Footer className="border-top border-block-start-dashed">
                                                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                                        <div className="avatar-list-stacked">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/9.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/12.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                            </span>
                                                            <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-black" href="#!" scroll={false}>
                                                                +6
                                                            </Link>
                                                        </div>

                                                        <p className="mb-0 fs-14">
                                                            Assign Team
                                                        </p>
                                                    </div>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="complete" className=" p-0" id="completed"
                                    role="tabpanel">
                                    <Row>
                                        <Col xl={4}>
                                            <Card className="custom-card task-completed-card">
                                                <div className="top-left"></div>
                                                <div className="top-right"></div>
                                                <div className="bottom-left"></div>
                                                <div className="bottom-right"></div>
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2 mb-2">
                                                        <div>
                                                            <p className="fw-medium mb-2 d-flex align-items-center">Title: Adding policies in main Landing page</p>
                                                            <p className="mb-0 fs-14">Status : <span className="badge bg-success-transparent align-middle fs-10">40% Completed</span></p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                                                        <p className="mb-0 fs-14">End Date : <span className="fs-12 mb-1 text-muted">26,Jan 2024</span></p>
                                                        <p className="mb-0">
                                                            <span className="fs-14">Priority :</span> <span className="badge bg-success align-middle">Low</span>
                                                        </p>
                                                    </div>
                                                </Card.Body>
                                                <Card.Footer className="border-top border-block-start-dashed">
                                                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                                        <div className="avatar-list-stacked">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/3.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/9.jpg" alt="img" />
                                                            </span>
                                                            <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-black" href="#!" scroll={false}>
                                                                +3
                                                            </Link>
                                                        </div>

                                                        <p className="mb-0 fs-14">
                                                            Assign Team
                                                        </p>
                                                    </div>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                        <Col xl={4}>
                                            <Card className="custom-card task-completed-card">
                                                <div className="top-left"></div>
                                                <div className="top-right"></div>
                                                <div className="bottom-left"></div>
                                                <div className="bottom-right"></div>
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2 mb-2">
                                                        <div>
                                                            <p className="fw-medium mb-2 d-flex align-items-center">Title: Adding policies in main Landing page</p>
                                                            <p className="mb-0 fs-14">Status : <span className="badge bg-success-transparent align-middle fs-10">40% Completed</span></p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                                                        <p className="mb-0 fs-14">End Date : <span className="fs-12 mb-1 text-muted">18,Dec 2023</span></p>
                                                        <p className="mb-0">
                                                            <span className="fs-14">Priority :</span> <span className="badge bg-danger align-middle">Critical</span>
                                                        </p>
                                                    </div>
                                                </Card.Body>
                                                <Card.Footer className="border-top border-block-start-dashed">
                                                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                                        <div className="avatar-list-stacked">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/10.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/11.jpg" alt="img" />
                                                            </span>
                                                            <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-black" href="#!" scroll={false}>
                                                                +1
                                                            </Link>
                                                        </div>

                                                        <p className="mb-0 fs-14">
                                                            Assign Team
                                                        </p>
                                                    </div>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                        <Col xl={4}>
                                            <Card className="custom-card task-completed-card">
                                                <div className="top-left"></div>
                                                <div className="top-right"></div>
                                                <div className="bottom-left"></div>
                                                <div className="bottom-right"></div>
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2 mb-2">
                                                        <div>
                                                            <p className="fw-medium mb-2 d-flex align-items-center">Title: Plugin Implementation</p>
                                                            <p className="mb-0 fs-14">Status : <span className="badge bg-success-transparent align-middle fs-10">60% Completed</span></p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                                                        <p className="mb-0 fs-14">End Date : <span className="fs-12 mb-1 text-muted">05,Dec 2023</span></p>
                                                        <p className="mb-0">
                                                            <span className="fs-14">Priority :</span> <span className="badge bg-secondary align-middle">medium</span>
                                                        </p>
                                                    </div>
                                                </Card.Body>
                                                <Card.Footer className="border-top border-block-start-dashed">
                                                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                                        <div className="avatar-list-stacked">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/5.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/11.jpg" alt="img" />
                                                            </span>
                                                            <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-black" href="#!" scroll={false}>
                                                                +2
                                                            </Link>
                                                        </div>

                                                        <p className="mb-0 fs-14">
                                                            Assign Team
                                                        </p>
                                                    </div>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                        <Col xl={4}>
                                            <Card className="custom-card task-completed-card">
                                                <div className="top-left"></div>
                                                <div className="top-right"></div>
                                                <div className="bottom-left"></div>
                                                <div className="bottom-right"></div>
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2 mb-2">
                                                        <div>
                                                            <p className="fw-medium mb-2 d-flex align-items-center">Title: Update Images in a new Template</p>
                                                            <p className="mb-0 fs-14">Status : <span className="badge bg-success-transparent align-middle fs-10">40% Completed</span></p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant="" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                                                        <p className="mb-0 fs-14">End Date : <span className="fs-12 mb-1 text-muted">03,Jan 2024</span></p>
                                                        <p className="mb-0">
                                                            <span className="fs-14">Priority :</span> <span className="badge bg-success align-middle">Low</span>
                                                        </p>
                                                    </div>
                                                </Card.Body>
                                                <Card.Footer className="border-top border-block-start-dashed">
                                                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                                        <div className="avatar-list-stacked">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/1.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/3.jpg" alt="img" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/11.jpg" alt="img" />
                                                            </span>
                                                            <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-black" href="#!" scroll={false}>
                                                                +3
                                                            </Link>
                                                        </div>

                                                        <p className="mb-0 fs-14">
                                                            Assign Team
                                                        </p>
                                                    </div>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Row>
                    <Pagination className="justify-content-end">
                        <Pagination.Item disabled>
                            Previous
                        </Pagination.Item>
                        <Pagination.Item className="">1</Pagination.Item>
                        <Pagination.Item className="">2</Pagination.Item>
                        <Pagination.Item className="">3</Pagination.Item>
                        <Pagination.Item className="">
                            Next
                        </Pagination.Item>
                    </Pagination>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Todolist;
