"use client";
import { CandidatePerformance, Candidateschart, Pending } from "@/shared/data/dashboard/jobsdata";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";

const Jobs = () => {
    return (
        <Fragment>
            <Seo title={"Jobs"} />
            <Row>
                <Col xxl={7}>
                    <Card className="card custom-card overflow-hidden">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <div className="card-header d-flex justify-content-between">
                            <div className="card-title">Candidates Performance</div>
                            <Button variant="" type="button" className="ms-auto btn btn-sm btn-primary btn-wave d-inline-flex">
                                <span><i className="ri-download-2-line"></i></span>
                                <span className="ms-2">Download</span>
                            </Button>
                        </div>
                        <Card.Body>
                            <div id="candidatePerformance">
                                <CandidatePerformance />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={5}>
                    <Row>
                        <Col xl={6} lg={6} md={6} sm={12} className="">
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="top-right"></div>
                                <Card.Body>
                                    <div className="d-flex">
                                        <div>
                                            <p className="fw-medium mb-2">Total Job Posted</p>
                                            <h4 className="fw-semibold mb-0">248 <span className="fw-normal fs-10">THIS
                                                MONTH</span></h4>
                                        </div>
                                        <div className="avatar avatar-lg bg-primary-transparent ms-auto">
                                            <i className="ri-git-repository-private-line fs-20"></i>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mt-2">
                                        <Link href="#!" scroll={false}
                                            className="fs-12 text-primary d-inline-flex align-items-center"><span>Show
                                                full status</span><i
                                                    className="ti ti-chevron-right rtl-icon-transform ms-1"></i></Link>
                                        <span className="badge bg-primary-transparent ms-auto"><i
                                            className="ti ti-caret-up me-1 align-middle"></i>16%</span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12} className="">
                            <Card className="custom-card overflow-hidden">
                                <div className="top-left"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="top-right"></div>
                                <Card.Body>
                                    <div className="d-flex">
                                        <div>
                                            <p className="fw-medium mb-2">Applied Candidates</p>
                                            <h4 className="fw-semibold mb-0">2K <span className="fw-normal fs-10">THIS
                                                MONTH</span></h4>
                                        </div>
                                        <div className="avatar avatar-lg bg-primary-transparent ms-auto">
                                            <i className="ri-parent-line fs-20"></i>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mt-2">
                                        <Link href="#!" scroll={false}
                                            className="fs-12 text-primary d-inline-flex align-items-center"><span>Show
                                                full status</span><i
                                                    className="ti ti-chevron-right rtl-icon-transform ms-1"></i></Link>
                                        <span className="badge bg-primary-transparent ms-auto"><i
                                            className="ti ti-caret-up me-1 align-middle"></i>2.03%</span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12} className="">
                            <Card className="custom-card overflow-hidden">
                                <div className="top-left"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="top-right"></div>
                                <Card.Body>
                                    <div className="d-flex">
                                        <div>
                                            <p className="fw-medium mb-2">Got Hired</p>
                                            <h4 className="fw-semibold mb-0">120 <span className="fw-normal fs-10">THIS
                                                MONTH</span></h4>
                                        </div>
                                        <div className="avatar avatar-lg bg-primary-transparent ms-auto">
                                            <i className="ri-bell-line fs-20"></i>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mt-2">
                                        <Link href="#!" scroll={false}
                                            className="fs-12 text-primary d-inline-flex align-items-center"><span>Show
                                                full status</span><i
                                                    className="ti ti-chevron-right rtl-icon-transform ms-1"></i></Link>
                                        <span className="badge bg-primary-transparent ms-auto"><i
                                            className="ti ti-caret-up me-1"></i>0.04%</span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12} className="">
                            <Card className="custom-card overflow-hidden">
                                <div className="top-left"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="top-right"></div>
                                <Card.Body>
                                    <div className="d-flex">
                                        <div>
                                            <p className="fw-medium mb-2">Today Interviews</p>
                                            <h4 className="fw-semibold mb-0">56 <span
                                                className="fw-normal fs-10">TODAY</span></h4>
                                        </div>
                                        <div className="avatar avatar-lg bg-primary-transparent ms-auto">
                                            <i className="ri-stack-line fs-20"></i>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mt-2">
                                        <Link href="#!" scroll={false}
                                            className="fs-12 text-primary d-inline-flex align-items-center"><span>Show
                                                full status</span><i
                                                    className="ti ti-chevron-right rtl-icon-transform ms-1"></i></Link>
                                        <span className="badge bg-primary-transparent ms-auto"><i
                                            className="ti ti-caret-up me-1"></i>0.12%</span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12} lg={6} md={12} sm={12} className="">
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="top-right"></div>
                                <Card.Body>
                                    <div className="d-flex mb-3">
                                        <div className="fw-semibold fs-15 mb-0">Applicants Summary</div>
                                        <Link href="#!" scroll={false} className="d-inline-flex ms-auto text-primary">
                                            <span><i className="ri-alarm-line"></i></span>
                                            <span className="ms-1 fw-semibold fs-13">Send reminder</span>
                                        </Link>
                                    </div>
                                    <div
                                        className="d-block d-sm-inline-flex justify-content-between w-100 align-items-center">
                                        <span className="fw-semibold fs-13 marker text-gray-700 me-5">Full Time</span>
                                        <span className="fw-semibold fs-13 marker2 text-gray-700 me-5">Part Time</span>
                                        <span className="fw-semibold fs-13 marker3 text-gray-700">Internship</span>
                                    </div>
                                    <div className="progress progress-xl bg-white">
                                        <div className="progress-bar progress-border bg-primary-transparent border-end"
                                            role="progressbar" style={{ width: "25%" }} aria-valuenow={25}
                                            aria-valuemin={0} aria-valuemax={100}>25%</div>
                                        <div className="progress-bar progress-border bg-primary-transparent border-end"
                                            role="progressbar" style={{ width: "35%" }} aria-valuenow={35}
                                            aria-valuemin={0} aria-valuemax={100}>35%</div>
                                        <div className="progress-bar progress-border bg-primary-transparent"
                                            role="progressbar" style={{ width: "40%" }} aria-valuenow={40}
                                            aria-valuemin={0} aria-valuemax={100}>40%</div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xxl={3} lg={6} md={6} sm={12} className="">
                    <Card className="custom-card overflow-hidden">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <div className="card-header">
                            <div className="card-title">Job Statistics</div>
                        </div>
                        <Card.Body>
                            <div id="candidates-chart">
                                <Candidateschart />
                            </div>
                        </Card.Body>
                        <Card.Footer className="p-0 border-top-0">
                            <div className="row row-cols-12 border-top border-block-start-dashed">
                                <div className="col">
                                    <div className="p-3 border-end border-inline-end-dashed">
                                        <div className="text-muted fs-12 text-center mb-1">Male Candidates </div>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <span className="me-3 fs-26 fw-semibold">1,234</span>
                                            <span className="text-success fw-semibold"><i
                                                className="ri-arrow-up-s-fill align-middle me-1"></i>0.3%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="p-3">
                                        <div className="text-muted fs-12 text-center mb-1">Female Candidates </div>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <span className="me-3 fs-26 fw-semibold">1,754</span>
                                            <span className="text-danger fw-semibold"><i
                                                className="ri-arrow-down-s-fill align-middle me-1"></i>0.11%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={3} lg={6} md={6} sm={12} className="">
                    <Card className="custom-card overflow-hidden">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <div className="card-header">
                            <div className="card-title">Recent Applicants</div>
                        </div>
                        <Card.Body>
                            <ul className="list-unstyled mb-0 recent-applications-list">
                                <li>
                                    <div className="d-flex align-items-start gap-1">
                                        <div className="avatar avatar-sm me-2">
                                            <img src="../../assets/images/faces/15.jpg" alt="img" />
                                        </div>
                                        <div className="flex-fill lh-1">
                                            <p className="mb-1 fw-medium">Mackeil Jepf</p>
                                            <span className="fs-11">Designer</span>
                                        </div>
                                        <div>
                                            <Link href="#!" scroll={false}
                                                className="btn btn-sm btn-outline-primary">Schedule</Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-start gap-1">
                                        <div className="avatar avatar-sm me-2">
                                            <img src="../../assets/images/faces/8.jpg" alt="img" />
                                        </div>
                                        <div className="flex-fill lh-1">
                                            <p className="mb-1 fw-medium">Rosen Begh</p>
                                            <span className="fs-11">Project Manager</span>
                                        </div>
                                        <div>
                                            <Link href="#!" scroll={false}
                                                className="btn btn-sm btn-primary">Scheduled</Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-start gap-1">
                                        <div className="avatar avatar-sm me-2">
                                            <img src="../../assets/images/faces/4.jpg" alt="img" />
                                        </div>
                                        <div className="flex-fill lh-1">
                                            <p className="mb-1 fw-medium">Rojesh Marfph</p>
                                            <span className="fs-11">Team Lead</span>
                                        </div>
                                        <div>
                                            <Link href="#!" scroll={false}
                                                className="btn btn-sm btn-outline-primary">Schedule</Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-start gap-1">
                                        <div className="avatar avatar-sm me-2">
                                            <img src="../../assets/images/faces/13.jpg" alt="img" />
                                        </div>
                                        <div className="flex-fill lh-1">
                                            <p className="mb-1 fw-medium">Joseph George</p>
                                            <span className="fs-11">senior Developer</span>
                                        </div>
                                        <div>
                                            <Link href="#!" scroll={false}
                                                className="btn btn-sm btn-primary">Scheduled</Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-start gap-1">
                                        <div className="avatar avatar-sm me-2">
                                            <img src="../../assets/images/faces/16.jpg" alt="img" />
                                        </div>
                                        <div className="flex-fill lh-1">
                                            <p className="mb-1 fw-medium">Daniel Jackson</p>
                                            <span className="fs-11">Designer</span>
                                        </div>
                                        <div>
                                            <Link href="#!" scroll={false}
                                                className="btn btn-sm btn-outline-primary">Schedule</Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-start gap-1">
                                        <div className="avatar avatar-sm me-2">
                                            <img src="../../assets/images/faces/15.jpg" alt="img" />
                                        </div>
                                        <div className="flex-fill lh-1">
                                            <p className="mb-1 fw-medium">Mackeil Jepf</p>
                                            <span className="fs-11">Designer</span>
                                        </div>
                                        <div>
                                            <Link href="#!" scroll={false}
                                                className="btn btn-sm btn-outline-primary">Schedule</Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6} md={12} sm={12} className="">
                    <Card className="custom-card overflow-hidden">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <div className="card-header">
                            <div className="card-title">Recent Hirings</div>
                        </div>
                        <Card.Body>
                            <div className="table-responsive">
                                <table className="table table-striped text-nowrap table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="row" className="text-center ps-4"><input className="form-check-input"
                                                type="checkbox" id="checkboxNoLabel02" value="" aria-label="..." />
                                            </th>
                                            <th scope="col" className="ps-3">Interviewer</th>
                                            <th scope="col">Job Title</th>
                                            <th scope="col">Shortlisted</th>
                                            <th scope="col">Date of Joing</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row" className="text-center ps-4"><input className="form-check-input"
                                                type="checkbox" id="checkboxNoLabel03" value="" aria-label="..."
                                                defaultChecked /></th>
                                            <td className="ps-3">
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar avatar-sm me-3">
                                                        <img src="../../assets/images/faces/6.jpg" alt="img" />
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold">Joanna Smith</p>
                                                        <span className="fs-12 ">joannasmith14@gmail.com</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-primary-transparent">Product Manager</span>
                                            </td>
                                            <td>
                                                16
                                            </td>
                                            <td className="pe-3">
                                                02.10.2024
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="text-center ps-4"><input className="form-check-input"
                                                type="checkbox" id="checkboxNoLabel01" value="" aria-label="..." />
                                            </th>
                                            <td className="ps-3">
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar avatar-sm me-3">
                                                        <img src="../../assets/images/faces/12.jpg" alt="img" />
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold">Nada Wael</p>
                                                        <span className="fs-12 ">nadawael20@gmail.com</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-primary-transparent">Lead Developer</span>
                                            </td>
                                            <td>
                                                04
                                            </td>
                                            <td className="pe-3">
                                                14.02.2024
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="text-center ps-4"><input className="form-check-input"
                                                type="checkbox" id="checkboxNoLabel04" value="" aria-label="..."
                                                defaultChecked /></th>
                                            <td className="ps-3">
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar avatar-sm me-3">
                                                        <img src="../../assets/images/faces/4.jpg" alt="img" />
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold">Sara Ahmed</p>
                                                        <span className="fs-12 ">saraahmed08@gmail.com</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-primary-transparent">Manager</span></td>
                                            <td>
                                                12
                                            </td>
                                            <td className="pe-3">
                                                12.04.2024
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="text-center ps-4"><input className="form-check-input"
                                                type="checkbox" id="checkboxNoLabel05" value="" aria-label="..."
                                                defaultChecked /></th>
                                            <td className="ps-3">
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar avatar-sm me-3">
                                                        <img src="../../assets/images/faces/14.jpg" alt="img" />
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold">Ghone Doe</p>
                                                        <span className="fs-12 ">ghonedoe10@gmail.com</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-primary-transparent">Lead UI/UX
                                                Designer</span></td>
                                            <td>
                                                05
                                            </td>
                                            <td className="pe-3">
                                                24.10.2024
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="card custom-card overflow-hidden">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <div className="card-header d-flex justify-content-between">
                            <div className="card-title">Pending Request Approvals</div>
                            <Button variant="" type="button" className="btn btn-sm btn-primary-light btn-wave">
                                View All
                            </Button>
                        </div>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table text-nowrap table-striped table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="w-15">Position</th>
                                            <th scope="col" className="w-15">Experience</th>
                                            <th scope="col">Department</th>
                                            <th scope="col" className="w-15">Profile Rating</th>
                                            <th scope="col" className="w-15">No.of Vacancies</th>
                                            <th scope="col">Apply Date</th>
                                            <th scope="col">Status</th>
                                            <th scope="col" className="w-10">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Pending.map((idx) => (
                                            <tr key={Math.random()}>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className={`avatar avatar-sm me-2 bg-${idx.color}-transparent`}>
                                                            <i className={`${idx.icon} fs-14`}></i>
                                                        </div>
                                                        <div className="lh-1">
                                                            <p className="fw-semibold mb-0">{idx.title}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{idx.experience}</td>
                                                <td>{idx.department}</td>
                                                <td>
                                                    <span className="badge bg-light text-primary">{idx.profile}</span>
                                                </td>
                                                <td>{idx.vacancies}</td>
                                                <td>{idx.date}</td>
                                                <td>
                                                    <span className={`badge bg-${idx.color1}-transparent`}>{idx.status}</span>
                                                </td>
                                                <td>
                                                    <div className="btn-list">
                                                        <Button variant="" type="button"
                                                            className="btn btn-sm btn-primary-light btn-wave">Reject</Button>
                                                        <Button variant="" type="button"
                                                            className="btn btn-sm btn-outline-primary btn-wave">Accept</Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Jobs;
