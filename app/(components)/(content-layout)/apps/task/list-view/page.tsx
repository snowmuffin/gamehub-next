"use client";
import { InvoiceStats, Listviewdata } from "@/shared/data/apps/tasks/listviewdata";
import DatePicker from "react-datepicker";
import Select from 'react-select';
import React, { Fragment, useState } from "react";
import { Badge, Button, Card, Col, Dropdown, Form, InputGroup, Modal, OverlayTrigger, Row, Table, Tooltip } from "react-bootstrap";
import Link from "next/link";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
const CountUp = dynamic(() => import("react-countup"), { ssr: false });

const ListView = () => {
    const [startDate, setStartDate] = useState(new Date());
    const handleDateChange = (date: React.SetStateAction<Date>) => {
        if (date) {
            setStartDate(date);
        }
    };
    const [startDate1, setStartDate1] = useState(new Date());
    const handleDateChange1 = (date: React.SetStateAction<Date>) => {
        if (date) {
            setStartDate1(date);
        }
    };
    const [selected1, setSelected1] = useState([]);
    const Selectdata = [
        { value: 'Angelina May', label: 'Angelina May' },
        { value: 'Kiara advain', label: 'Kiara advain' },
        { value: 'Hercules Jhon', label: 'Hercules Jhon' },
        { value: 'Mayor Kim', label: 'Mayor Kim' },
    ];
    const Option1 = [
        { value: 'New', label: 'New' },
        { value: 'Completed', label: 'Completed' },
        { value: 'Inprogress', label: 'Inprogress' },
        { value: 'Pending', label: 'Pending' }
    ];
    const Option2 = [
        { value: 'High', label: 'High' },
        { value: 'Low', label: 'Low' },
        { value: 'Medium', label: 'Medium' },
    ];

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [list, setList] = useState(Listviewdata)
    const handleDelete = (id: string) => {
        const updatedData = list.filter((idx) => idx.id !== id);
        setList(updatedData);
    };

    return (
        <Fragment>
            <Seo title={"List View"} />
            <Row>
                <Col xxl={3} xl={4}>
                    <Card className=" custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="p-0">
                            <div className="p-3 border-bottom gap-3 d-flex border-block-end-dashed">
                                <div className="task-icon-background bg-primary-transparent text-primary mx-auto">
                                    <i className="ri-calendar-check-fill fs-22"></i>
                                </div>
                                <div className="flex-fill">
                                    <h6 className="mb-1 fs-12">New Tasks</h6>
                                    <div className="pb-0 mt-0">
                                        <div>
                                            <h4 className="fs-18 fw-medium mb-2 d-flex align-items-center justify-content-between"><span className="count-up" data-count="548"><CountUp
                                                end={549}
                                                start={0}
                                                duration={4.94}
                                            /></span><span className="badge bg-primary fw-normal ms-2 fs-10 align-middle">
                                                    15,487
                                                </span> </h4>
                                            <p className="text-muted fs-11 mb-0 lh-1">
                                                <span className="text-success me-1 fw-medium">
                                                    <i className="ri-arrow-up-s-line me-1 align-middle"></i>3.25%
                                                </span>
                                                <span>this month</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom gap-3 d-flex border-block-end-dashed">
                                <div className="task-icon-background bg-success-transparent text-success mx-auto">
                                    <i className="ri-checkbox-circle-fill fs-22"></i>
                                </div>
                                <div className="flex-fill">
                                    <h6 className="mb-1 fs-12">Completed Tasks</h6>
                                    <div className="pb-0 mt-0">
                                        <div>
                                            <h4 className="fs-18 fw-medium mb-2 d-flex align-items-center justify-content-between"><span className="count-up" data-count="451"><CountUp
                                                end={451}
                                                start={0}
                                                duration={4.94}
                                            /></span><span className="badge bg-success fw-normal ms-2 fs-10 align-middle">
                                                    5,221
                                                </span> </h4>
                                            <p className="text-muted fs-11 mb-0 lh-1">
                                                <span className="text-danger me-1 fw-medium">
                                                    <i className="ri-arrow-down-s-line me-1 align-middle"></i>1.16%
                                                </span>
                                                <span>this month</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom gap-3 d-flex border-block-end-dashed">
                                <div className="task-icon-background bg-warning-transparent text-warning mx-auto">
                                    <i className="ri-hourglass-fill fs-22"></i>
                                </div>
                                <div className="flex-fill">
                                    <h6 className="mb-1 fs-12">Pending Tasks</h6>
                                    <div className="pb-0 mt-0">
                                        <div>
                                            <h4 className="fs-18 fw-medium mb-2 d-flex align-items-center justify-content-between"><span className="count-up" data-count="124"><CountUp
                                                end={124}
                                                start={0}
                                                duration={4.94}
                                            /></span><span className="badge bg-warning fw-normal ms-2 fs-10 align-middle">
                                                    12,115
                                                </span> </h4>
                                            <p className="text-muted fs-11 mb-0 lh-1">
                                                <span className="text-success me-1 fw-medium">
                                                    <i className="ri-arrow-up-s-line me-1 align-middle"></i>0.25%
                                                </span>
                                                <span>this month</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom gap-3 d-flex border-block-end-dashed">
                                <div className="task-icon-background bg-secondary-transparent text-secondary mx-auto">
                                    <i className="ri-progress-5-line fs-22"></i>
                                </div>
                                <div className="flex-fill">
                                    <h6 className="mb-1 fs-12">Ongoing Tasks</h6>
                                    <div className="pb-0 mt-0">
                                        <div>
                                            <h4 className="fs-18 fw-medium mb-2 d-flex align-items-center justify-content-between"><span className="count-up" data-count="457"><CountUp
                                                end={458}
                                                start={0}
                                                duration={4.94}
                                            /></span><span className="badge bg-secondary fw-normal ms-2 fs-10 align-middle">
                                                    2,457
                                                </span> </h4>
                                            <p className="text-muted fs-11 mb-0 lh-1">
                                                <span className="text-danger me-1 fw-medium">
                                                    <i className="ri-arrow-down-s-line me-1 align-middle"></i>0.46%
                                                </span>
                                                <span>this month</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 pb-2">
                                <p className="fs-15 fw-semibold">Tasks Statistics <span className="text-muted fw-normal">(Last 6 months) :</span></p>
                                <div id="task-list-stats"><InvoiceStats /></div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={9} xl={8}>
                    <Card className=" custom-card overflow-hidden">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Total Tasks
                            </Card.Title>
                            <div className="d-flex">
                                <Button variant='primary' size="sm" onClick={handleShow} className=" btn-wave waves-light" data-bs-toggle="modal" data-bs-target="#create-task"><i className="ri-add-line fw-semibold align-middle me-1"></i> Create Task</Button>
                                <Modal show={show} onHide={handleClose} className="modal fade" id="create-task" tabIndex={-1} aria-hidden="true">
                                    <Modal.Header closeButton>
                                        <h6 className="modal-title">Add Task</h6>
                                    </Modal.Header>
                                    <Modal.Body className="px-4">
                                        <div className="row gy-2">
                                            <Col xl={6}>
                                                <Form.Label htmlFor="task-name">Task Name</Form.Label>
                                                <Form.Control type="text" id="task-name" placeholder="Task Name" />
                                            </Col>
                                            <Col xl={6}>
                                                <Form.Label htmlFor="task-id">Task ID</Form.Label>
                                                <Form.Control type="text" id="task-id" placeholder="Task ID" />
                                            </Col>
                                            <Col xl={6}>
                                                <Form.Label>Assigned Date</Form.Label>
                                                <div className="form-group">
                                                    <InputGroup>
                                                        <InputGroup.Text className="text-muted"> <i className="ri-calendar-line"></i> </InputGroup.Text>
                                                        <DatePicker
                                                            selected={startDate}
                                                            onChange={handleDateChange}
                                                            timeInputLabel="Time:"
                                                            dateFormat="yy/MM/dd h:mm aa"
                                                            placeholderText='Choose date and time'
                                                            showTimeInput
                                                        />
                                                    </InputGroup>
                                                </div>
                                            </Col>
                                            <Col xl={6}>
                                                <Form.Label>Due Date</Form.Label>
                                                <div className="form-group">
                                                    <InputGroup>
                                                        <InputGroup.Text className="text-muted"> <i className="ri-calendar-line"></i> </InputGroup.Text>
                                                        <DatePicker
                                                            selected={startDate1}
                                                            onChange={handleDateChange1}
                                                            timeInputLabel="Time:"
                                                            dateFormat="yy/MM/dd h:mm aa"
                                                            placeholderText='Choose date and time'
                                                            showTimeInput
                                                        />
                                                    </InputGroup>
                                                </div>
                                            </Col>
                                            <Col xl={6}>
                                                <Form.Label>Status</Form.Label>
                                                <Select name="colors" options={Option1} className="basic-multi-select"
                                                    menuPlacement='auto' classNamePrefix="Select2" placeholder="" defaultValue={[Option1[0]]}
                                                />
                                            </Col>
                                            <Col xl={6}>
                                                <Form.Label>Priority</Form.Label>
                                                <Select name="colors" options={Option2} className="basic-multi-select"
                                                    menuPlacement='auto' classNamePrefix="Select2" placeholder="" defaultValue={[Option2[0]]}
                                                />
                                            </Col>
                                            <Col xl={12}>
                                                <Form.Label>Assigned To</Form.Label>
                                                <Select name="colors" options={Selectdata} className="basic-multi-select"
                                                    menuPlacement='auto' classNamePrefix="Select2" placeholder="" defaultValue={[Selectdata[0]]}
                                                />
                                            </Col>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant='' type="button" className="btn btn-light" onClick={handleClose}>Cancel</Button>
                                        <Button variant='' type="button" className="btn btn-primary">Add Task</Button>
                                    </Modal.Footer>
                                </Modal>
                                <Dropdown className=" ms-2">
                                    <Dropdown.Toggle variant='' size="sm" className="btn btn-icon btn-secondary-light btn-wave waves-light no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ti ti-dots-vertical "></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as='ul'>
                                        <Dropdown.Item as='li' href="#!">New Tasks</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!">Pending Tasks</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!">Completed Tasks</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!">Inprogress Tasks</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className="px-0">
                            <div className="table-responsive">
                                <Table className="text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>
                                                <input className="form-check-input check-all" type="checkbox" id="all-tasks" value="" aria-label="..." />
                                            </th>
                                            <th scope="col">Task</th>
                                            <th scope="col">Task ID</th>
                                            <th scope="col">Assigned Date</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Due Date</th>
                                            <th scope="col">Priority</th>
                                            <th scope="col">Assigned To</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {list.map((idx) => (
                                            <tr className="task-list" key={Math.random()}>
                                                <td className="task-checkbox"><input className="form-check-input" type="checkbox" value="" aria-label="..." /></td>
                                                <td>
                                                    <span className="fw-semibold">{idx.title}</span>
                                                </td>
                                                <td>
                                                    <span className="fw-semibold">{idx.taskid}</span>
                                                </td>
                                                <td>
                                                    {idx.assigndate}
                                                </td>
                                                <td>
                                                    <span className={`fw-semibold text-${idx.color}`}>{idx.status}</span>
                                                </td>
                                                <td>
                                                    {idx.duedate}
                                                </td>
                                                <td>
                                                    <Badge bg={`${idx.color1}-transparent`}>{idx.priority}</Badge>
                                                </td>
                                                {idx.src}
                                                <td>
                                                    <OverlayTrigger placement='top' overlay={<Tooltip>Edit</Tooltip>}>
                                                        <Button variant='primary-light' size="sm" className=" btn-icon ">
                                                            <i className="ri-edit-line"></i></Button>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger placement='top' overlay={<Tooltip>Delete</Tooltip>}>
                                                        <Button variant="danger-light" onClick={() => handleDelete(idx.id)} size="sm" className=" btn-icon ms-1 task-delete-btn">
                                                            <i className="ri-delete-bin-5-line"></i></Button>
                                                    </OverlayTrigger>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <nav aria-label="Page navigation">
                                <ul className="pagination mb-0 float-end">
                                    <li className="page-item disabled"> <Link href="#!" className="page-link">Previous</Link> </li>
                                    <li className="page-item"><Link className="page-link" href="#!">1</Link></li>
                                    <li className="page-item active" aria-current="page"> <Link className="page-link" href="#!">2</Link> </li>
                                    <li className="page-item"><Link className="page-link" href="#!">3</Link></li>
                                    <li className="page-item"> <Link className="page-link" href="#!">Next</Link> </li>
                                </ul>
                            </nav>
                        </Card.Footer>
                    </Card>
                </Col>

            </Row>
        </Fragment>
    );
};

export default ListView;
