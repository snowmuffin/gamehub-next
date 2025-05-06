"use client";
import { Applicant, Attendencesummary, Employeeroles, Jobsapplied, Todotask, Upcoming } from "@/shared/data/dashboard/hrmdata";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, Row } from "react-bootstrap";

const Hrm = () => {
    return (
        <Fragment>
            <Seo title={"HRM"} />
            <Row>
                <Col xxl={6}>
                    <Row>
                        <Col xl={6} md={6}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="top-right"></div>
                                <Card.Body>
                                    <div className="d-flex align-items-start justify-content-between mb-3">
                                        <h6>Total Employees</h6>
                                        <Dropdown>
                                            <Dropdown.Toggle as="a" aria-label="anchor" href="#!" className="op-4 no-caret" data-bs-toggle="dropdown" aria-expanded="true">
                                                <i className="bi bi-grid text-primary"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu" role="menu" data-popper-placement="bottom-start">
                                                <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Day</Link></Dropdown.Item>
                                                <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Week</Link></Dropdown.Item>
                                                <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Year</Link></Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="d-flex align-items-end justify-content-between">
                                        <div>
                                            <h4 className="fw-semibold mb-1">2,982<span className="text-success fs-11 ms-2  d-inline-flex">+0.27%<i className="ri-arrow-up-line"></i></span></h4>
                                            <span className="d-block fs-12 op-7">(Last 7 Days)</span>
                                        </div>
                                        <div>
                                            <span className="avatar bg-primary-transparent">
                                                <i className="ri-group-line"></i>
                                            </span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6} md={6}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="top-right"></div>
                                <Card.Body>
                                    <div className="d-flex align-items-start justify-content-between mb-3">
                                        <h6>New Employees</h6>
                                        <Dropdown>
                                            <Dropdown.Toggle as="a" aria-label="anchor" href="#!" className="op-4 no-caret" data-bs-toggle="dropdown" aria-expanded="true">
                                                <i className="bi bi-grid text-primary"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu" role="menu" data-popper-placement="bottom-start">
                                                <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Day</Link></Dropdown.Item>
                                                <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Week</Link></Dropdown.Item>
                                                <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Year</Link></Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="d-flex align-items-end justify-content-between">
                                        <div>
                                            <h4 className="fw-semibold mb-1">364<span className="text-danger fs-11 ms-2 d-inline-flex">-1.82%<i className="ri-arrow-down-line"></i></span></h4>
                                            <span className="d-block fs-12 op-7">(Last 7 Days)</span>
                                        </div>
                                        <div>
                                            <span className="avatar bg-primary-transparent">
                                                <i className="ri-user-add-line"></i>
                                            </span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6} md={6}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="top-right"></div>
                                <Card.Body>
                                    <div className="d-flex align-items-start justify-content-between mb-3">
                                        <h6>Resigned Employees</h6>
                                        <Dropdown>
                                            <Dropdown.Toggle as="a" aria-label="anchor" href="#!" className="op-4 no-caret" data-bs-toggle="dropdown" aria-expanded="true">
                                                <i className="bi bi-grid text-primary"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu" role="menu" data-popper-placement="bottom-start">
                                                <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Day</Link></Dropdown.Item>
                                                <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Week</Link></Dropdown.Item>
                                                <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Year</Link></Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="d-flex align-items-end justify-content-between">
                                        <div>
                                            <h4 className="fw-semibold mb-1">592<span className="text-success fs-11 ms-2  d-inline-flex">+0.67%<i className="ri-arrow-up-line"></i></span></h4>
                                            <span className="d-block fs-12 op-7">(Last 7 Days)</span>
                                        </div>
                                        <div>
                                            <span className="avatar bg-primary-transparent">
                                                <i className="ri-user-unfollow-line"></i>
                                            </span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6} md={6}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="top-right"></div>
                                <Card.Body>
                                    <div className="d-flex align-items-start justify-content-between mb-3">
                                        <h6>Job Applicants</h6>
                                        <Dropdown>
                                            <Dropdown.Toggle as="a" aria-label="anchor" href="#!" className="op-4 no-caret" data-bs-toggle="dropdown" aria-expanded="true">
                                                <i className="bi bi-grid text-primary"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu" role="menu" data-popper-placement="bottom-start">
                                                <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Day</Link></Dropdown.Item>
                                                <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Week</Link></Dropdown.Item>
                                                <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Year</Link></Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="d-flex align-items-end justify-content-between">
                                        <div>
                                            <h4 className="fw-semibold mb-1">1,798<span className="text-success fs-11 ms-2  d-inline-flex">+2.53%<i className="ri-arrow-up-line"></i></span></h4>
                                            <span className="d-block fs-12 op-7">(Last 7 Days)</span>
                                        </div>
                                        <div>
                                            <span className="avatar bg-primary-transparent">
                                                <i className="ri-profile-line"></i>
                                            </span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={6}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <Card.Header className="justify-content-between">
                            <div className="card-title">Announcements</div>
                            <div className="btn-list">
                                <Button variant="" type="button" className="btn btn-sm btn-outline-primary me-2"><i className="ri-add-line me-1 align-middle"></i>Add New</Button>
                                <Button variant="" type="button" className="btn btn-sm btn-primary-light ms-1">View All</Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <table className="table table-borderless table-striped text-nowrap">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div>
                                                    <h6 className="mb-1 fw-medium">Dec</h6>
                                                    <span className="fs-12">15, 2024</span>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-primary-transparent">Policy Updates</span></td>
                                            <td>
                                                <p className="mb-0 text-wrap">
                                                    Announcements regarding changes or updates to HR policies, procedures, and guidelines.
                                                </p>
                                            </td>
                                            <td><Link aria-label="anchor" href="#!" scroll={false}> <span><i className="ri-arrow-right-s-line fs-18 rtl-icon-transform"></i></span> </Link></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div>
                                                    <h6 className="mb-1 fw-medium">Dec</h6>
                                                    <span className="fs-12">24, 2024</span>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-danger-transparent">HR Reminders</span></td>
                                            <td>
                                                <p className="mb-0 text-wrap">
                                                    Providing timely reminders for important HR-related tasks.
                                                </p>
                                            </td>
                                            <td><Link aria-label="anchor" href="#!" scroll={false}> <span><i className="ri-arrow-right-s-line fs-18 rtl-icon-transform"></i></span> </Link></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div>
                                                    <h6 className="mb-1 fw-medium">Dec</h6>
                                                    <span className="fs-12">31, 2024</span>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-warning-transparent">Company Events</span></td>
                                            <td>
                                                <p className="mb-0 text-wrap">
                                                    Announcements about company-wide events, such as team-building activities, or social gatherings.
                                                </p>
                                            </td>
                                            <td><Link aria-label="anchor" href="#!" scroll={false}> <span><i className="ri-arrow-right-s-line fs-18 rtl-icon-transform"></i></span> </Link></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xxl={6}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Todo Tasks
                            </div>
                            <Button variant="" type="button" className="btn btn-sm btn-primary-light">View All</Button>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <table className="table table-striped text-nowrap table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                <span> <input className="form-check-input" type="checkbox" id="checkAll" value="" aria-label="..." /> </span>
                                            </th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Due Date</th>
                                            <th scope="col" className="text-center">Assigned To</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Todotask.map((idx) => (
                                            <tr key={Math.random()}>
                                                <td>
                                                    <span>
                                                        {idx.check}
                                                    </span>
                                                </td>
                                                <td>
                                                    {idx.title}
                                                </td>
                                                <td>
                                                    <span className={`badge bg-${idx.color}-transparent`}>{idx.status}</span>
                                                </td>
                                                <td>
                                                    {idx.date}
                                                </td>
                                                <td className="text-center">
                                                    <div className="avatar-list-stacked">
                                                        <span className="avatar avatar-xs">
                                                            <img src={idx.src1} alt="img" />
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <div className="card-header">
                            <div className="card-title">
                                Attendance Summary
                            </div>
                        </div>
                        <Card.Body>
                            <div id="attendance-summary">
                                <Attendencesummary />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <div className="col-xxl-3">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <div className="card-header">
                            <div className="card-title">
                                Jobs Applied
                            </div>
                        </div>
                        <Card.Body>
                            <div id="jobs-applied">
                                <Jobsapplied />
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <Col xxl={6}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Upcoming Interviews
                            </div>
                            <Button variant="" type="button" className="btn btn-sm btn-primary-light">View All</Button>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <table className="table table-striped text-nowrap table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Role Applied</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Scheduled Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Upcoming.map((idx) => (
                                            <tr key={Math.random()}>
                                                <td>
                                                    <Link href="#!" scroll={false}>
                                                        <div className="d-flex align-items-center gap-2">
                                                            <span className="avatar avatar-xs">
                                                                <img src={idx.src1} alt="" />
                                                            </span>
                                                            {idx.title}
                                                        </div>
                                                    </Link>
                                                </td>
                                                <td>
                                                    {idx.role}
                                                </td>
                                                <td>
                                                    {idx.date}
                                                </td>
                                                <td>
                                                    <span className="badge bg-primary-transparent">{idx.shedule}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <div className="col-xxl-3">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <div className="card-header">
                            <div className="card-title">
                                Employee Roles
                            </div>
                        </div>
                        <div className="card-body px-0">
                            <div id="employee-roles">
                                <Employeeroles />
                            </div>
                        </div>
                        <div className="card-footer p-0">
                            <div className="row row-cols-12 justify-content-center mx-0">
                                <div className="col pe-0 ps-2 text-center">
                                    <div className="py-sm-3 px-sm-1 p-2 ">
                                        <span className="text-muted fs-11">Developer</span>
                                        <span className="d-block fs-16 fw-semibold">68.3%</span>
                                    </div>
                                </div>
                                <div className="col px-0 text-center">
                                    <div className="py-sm-3 px-sm-1 p-2 ">
                                        <span className="text-muted fs-11">Designer</span>
                                        <span className="d-block fs-16 fw-semibold">17.68%</span>
                                    </div>
                                </div>
                                <div className="col px-0 text-center">
                                    <div className="py-sm-3 px-sm-1 p-2 ">
                                        <span className="text-muted fs-11">Lead</span>
                                        <span className="d-block fs-16 fw-semibold">10.5%</span>
                                    </div>
                                </div>
                                <div className="col ps-0 pe-2 text-center">
                                    <div className="py-sm-3 px-sm-1 p-2 ">
                                        <span className="text-muted fs-11">Hr Role</span>
                                        <span className="d-block fs-16 fw-semibold">5.16%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Applicant Details
                            </div>
                            <Button variant="" type="button" className="btn btn-sm btn-primary-light">View All</Button>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <table className="table text-nowrap table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="row" className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabel1" value="" aria-label="..." /></th>
                                            <th scope="col">Application ID</th>
                                            <th scope="col">Applicant Name</th>
                                            <th scope="col">Position Applied</th>
                                            <th scope="col">Date Of Application</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Work Experience</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Applicant.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row" className="ps-4">{idx.check}</th>
                                                <td>
                                                    {idx.applicantid}
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm me-2">
                                                            <img src={idx.src1} alt="img" />
                                                        </span>{idx.title}
                                                    </div>
                                                </td>
                                                <td>{idx.position}</td>
                                                <td>{idx.date}</td>
                                                <td>
                                                    {idx.mail}
                                                </td>
                                                <td>{idx.work}</td>
                                                <td>
                                                    <span className={`badge bg-${idx.color}-transparent`}>{idx.status}</span>
                                                </td>
                                                <td>
                                                    <div className="hstack gap-2 fs-15">
                                                        <Link aria-label="anchor" href="#!" scroll={false} className="btn btn-icon waves-effect waves-light btn-sm btn-success-light "><i className="ri-phone-line"></i></Link>
                                                        <Link aria-label="anchor" href="#!" scroll={false} className="btn btn-icon waves-effect waves-light btn-sm btn-primary-light "><i className="ri-edit-line"></i></Link>
                                                        <Link aria-label="anchor" href="#!" scroll={false} className="btn btn-icon btn-wave waves-effect waves-light btn-sm btn-danger-light "><i className="ri-delete-bin-line"></i></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Hrm;
