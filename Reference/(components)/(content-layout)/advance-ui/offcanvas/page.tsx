"use client";
import { offcanvas1, offcanvas2, offcanvas3, offcanvas4, offcanvas5 } from "@/shared/data/prismdata/advanceui-prism";
import Seo from "@/shared/layout-components/seo/seo";
import ShowCode from "@/shared/layout-components/showcode/showcode";
import React, { Fragment, useState } from "react";
import { Button, Col, ListGroup, Offcanvas, Row } from "react-bootstrap";

const Offcanvass = () => {

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [show3, setShow3] = useState(false);

	const handleClose3 = () => setShow3(false);
	const handleShow3 = () => setShow3(true);

	// OffCanvas Enable
	const [show1, setShow1] = useState(false);

	const handleClose1 = () => setShow1(false);
	const handleShow1 = () => setShow1(true);

	//static
	const [show2, setShow2] = useState(false);

	const handleClose2 = () => setShow2(false);
	const handleShow2 = () => setShow2(true);

	//Placement
	const [showt, setShowt] = useState(false);

	const handleCloset = () => setShowt(false);
	const handleShowt = () => setShowt(true);

	//right

	const [showr, setShowr] = useState(false);

	const handleCloser = () => setShowr(false);
	const handleShowr = () => setShowr(true);

	//bottom

	const [showb, setShowb] = useState(false);

	const handleCloseb = () => setShowb(false);
	const handleShowb = () => setShowb(true);
	return (
		<Fragment>
			<Seo title={"Offcanvas"} />
			<Row>
				<Col xl={6}>
					<ShowCode title=" Live demo" customCardClass="custom-card" customCardBodyClass="" code={offcanvas1}>
						<Button variant='primary' className="me-2  my-1" data-bs-toggle="offcanvas" href="#offcanvasExample" onClick={handleShow}
							role="button" aria-controls="offcanvasExample">
							Link with href
						</Button>
						<Button variant='primary' className=" my-1" type="button" data-bs-toggle="offcanvas" onClick={handleShow}
							data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
							Button with data-bs-target
						</Button>
						<Offcanvas show={show} onHide={handleClose} className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
							<Offcanvas.Header className="offcanvas-header border-bottom border-block-end-dashed">
								<h5 className="offcanvas-title" id="offcanvasExampleLabel">Notifications</h5>
								<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleClose}></button>
							</Offcanvas.Header>
							<Offcanvas.Body className="offcanvas-body p-0">
								<div>
									<ListGroup className="list-group-flush mb-0">
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md bg-primary avatar-rounded">
														NW
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">New Website Created<span className="badge bg-light text-muted float-end">20 Nov 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md bg-danger avatar-rounded">
														CH
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md bg-info avatar-rounded">
														S
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md avatar-rounded">
														<img src="../../assets/images/faces/12.jpg" alt="" />
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md bg-success avatar-rounded">
														RC
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md avatar-rounded">
														<img src="../../assets/images/faces/1.jpg" alt="" />
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Brenda New product launching<span className="badge bg-light text-muted float-end">1 Jan 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md bg-secondary avatar-rounded">
														M
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Medeleine Hey! there i'm available<span className="badge bg-light text-muted float-end">5 Jan 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md bg-info avatar-rounded">
														OL
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Alexia New schedule release<span className="badge bg-light text-muted float-end">6 Jan 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md bg-warning avatar-rounded">
														A
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Kamala Preparing for new admin launch<span className="badge bg-light text-muted float-end">7 Jan 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md avatar-rounded">
														<img src="../../assets/images/faces/6.jpg" alt="" />
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Oisha Meeting with clinet for dinner<span className="badge bg-light text-muted float-end">10 Jan 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md bg-danger avatar-rounded">
														CH
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md bg-info avatar-rounded">
														S
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md avatar-rounded">
														<img src="../../assets/images/faces/14.jpg" alt="" />
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md bg-success avatar-rounded">
														RC
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
												</div>
											</div>
										</ListGroup.Item>
									</ListGroup>
								</div>
							</Offcanvas.Body>
						</Offcanvas>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Body scrolling" customCardClass="custom-card" customCardBodyClass="" code={offcanvas2}>
						<Button variant='primary' className="" type="button" data-bs-toggle="offcanvas" onClick={handleShow1}
							data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable
							body scrolling
						</Button>
						<Offcanvas show={show1} onHide={handleClose1} className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
							<Offcanvas.Header className="offcanvas-header border-bottom border-block-end-dashed">
								<h5 className="offcanvas-title" id="offcanvasExampleLabel">Notifications</h5>
								<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleClose1}></button>
							</Offcanvas.Header>
							<Offcanvas.Body className="offcanvas-body p-0">
								<div>
									<ul className="list-group list-group-flush mb-0">
										<ul className="list-group list-group-flush mb-0">
											<ListGroup.Item>
												<div className="d-flex align-items-center">
													<div className="me-2">
														<span className="avatar avatar-md bg-primary avatar-rounded">
															NW
														</span>
													</div>
													<div className="flex-fill">
														<p className="fw-medium mb-0">New Website Created<span className="badge bg-light text-muted float-end">20 Nov 2023</span></p>
														<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
													</div>
												</div>
											</ListGroup.Item>
											<ListGroup.Item>
												<div className="d-flex align-items-center">
													<div className="me-2">
														<span className="avatar avatar-md bg-danger avatar-rounded">
															CH
														</span>
													</div>
													<div className="flex-fill">
														<p className="fw-medium mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
														<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
													</div>
												</div>
											</ListGroup.Item>
											<ListGroup.Item>
												<div className="d-flex align-items-center">
													<div className="me-2">
														<span className="avatar avatar-md bg-info avatar-rounded">
															S
														</span>
													</div>
													<div className="flex-fill">
														<p className="fw-medium mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
														<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
													</div>
												</div>
											</ListGroup.Item>
											<ListGroup.Item>
												<div className="d-flex align-items-center">
													<div className="me-2">
														<span className="avatar avatar-md avatar-rounded">
															<img src="../../assets/images/faces/12.jpg" alt="" />
														</span>
													</div>
													<div className="flex-fill">
														<p className="fw-medium mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2023</span></p>
														<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
													</div>
												</div>
											</ListGroup.Item>
											<ListGroup.Item>
												<div className="d-flex align-items-center">
													<div className="me-2">
														<span className="avatar avatar-md bg-success avatar-rounded">
															RC
														</span>
													</div>
													<div className="flex-fill">
														<p className="fw-medium mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2023</span></p>
														<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
													</div>
												</div>
											</ListGroup.Item>
											<ListGroup.Item>
												<div className="d-flex align-items-center">
													<div className="me-2">
														<span className="avatar avatar-md avatar-rounded">
															<img src="../../assets/images/faces/1.jpg" alt="" />
														</span>
													</div>
													<div className="flex-fill">
														<p className="fw-medium mb-0">Brenda New product launching<span className="badge bg-light text-muted float-end">1 Jan 2023</span></p>
														<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
													</div>
												</div>
											</ListGroup.Item>
											<ListGroup.Item>
												<div className="d-flex align-items-center">
													<div className="me-2">
														<span className="avatar avatar-md bg-secondary avatar-rounded">
															M
														</span>
													</div>
													<div className="flex-fill">
														<p className="fw-medium mb-0">Medeleine Hey! there i'm available<span className="badge bg-light text-muted float-end">5 Jan 2023</span></p>
														<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
													</div>
												</div>
											</ListGroup.Item>
											<ListGroup.Item>
												<div className="d-flex align-items-center">
													<div className="me-2">
														<span className="avatar avatar-md bg-info avatar-rounded">
															OL
														</span>
													</div>
													<div className="flex-fill">
														<p className="fw-medium mb-0">Alexia New schedule release<span className="badge bg-light text-muted float-end">6 Jan 2023</span></p>
														<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
													</div>
												</div>
											</ListGroup.Item>
											<ListGroup.Item>
												<div className="d-flex align-items-center">
													<div className="me-2">
														<span className="avatar avatar-md bg-warning avatar-rounded">
															A
														</span>
													</div>
													<div className="flex-fill">
														<p className="fw-medium mb-0">Kamala Preparing for new admin launch<span className="badge bg-light text-muted float-end">7 Jan 2023</span></p>
														<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
													</div>
												</div>
											</ListGroup.Item>
											<ListGroup.Item>
												<div className="d-flex align-items-center">
													<div className="me-2">
														<span className="avatar avatar-md avatar-rounded">
															<img src="../../assets/images/faces/6.jpg" alt="" />
														</span>
													</div>
													<div className="flex-fill">
														<p className="fw-medium mb-0">Oisha Meeting with clinet for dinner<span className="badge bg-light text-muted float-end">10 Jan 2023</span></p>
														<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
													</div>
												</div>
											</ListGroup.Item>
											<ListGroup.Item>
												<div className="d-flex align-items-center">
													<div className="me-2">
														<span className="avatar avatar-md bg-danger avatar-rounded">
															CH
														</span>
													</div>
													<div className="flex-fill">
														<p className="fw-medium mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
														<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
													</div>
												</div>
											</ListGroup.Item>
											<ListGroup.Item>
												<div className="d-flex align-items-center">
													<div className="me-2">
														<span className="avatar avatar-md bg-info avatar-rounded">
															S
														</span>
													</div>
													<div className="flex-fill">
														<p className="fw-medium mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
														<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
													</div>
												</div>
											</ListGroup.Item>
											<ListGroup.Item>
												<div className="d-flex align-items-center">
													<div className="me-2">
														<span className="avatar avatar-md avatar-rounded">
															<img src="../../assets/images/faces/14.jpg" alt="" />
														</span>
													</div>
													<div className="flex-fill">
														<p className="fw-medium mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2023</span></p>
														<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
													</div>
												</div>
											</ListGroup.Item>
											<ListGroup.Item>
												<div className="d-flex align-items-center">
													<div className="me-2">
														<span className="avatar avatar-md bg-success avatar-rounded">
															RC
														</span>
													</div>
													<div className="flex-fill">
														<p className="fw-medium mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2023</span></p>
														<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
													</div>
												</div>
											</ListGroup.Item>
										</ul>
									</ul>
								</div>
							</Offcanvas.Body>
						</Offcanvas>
					</ShowCode>
				</Col>
				<Col xl={12}>
					<ShowCode title="Body scrolling and backdrop" customCardClass="custom-card" customCardBodyClass="" code={offcanvas4}>
						<Button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" onClick={handleShow3}
							data-bs-target="#offcanvasWithBothOptions"
							aria-controls="offcanvasWithBothOptions">Enable both scrolling &amp;
							backdrop</Button>
						<Offcanvas show={show3} onHide={handleClose3} backdrop={true} className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
							<Offcanvas.Header className="offcanvas-header border-bottom border-block-end-dashed">
								<h5 className="offcanvas-title" id="offcanvasExampleLabel">Notifications</h5>
								<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleClose3}></button>
							</Offcanvas.Header>
							<Offcanvas.Body className="offcanvas-body p-0">
								<div>
									<ul className="list-group list-group-flush mb-0">
										<ul className="list-group list-group-flush mb-0">
											<ListGroup.Item>
												<div className="d-flex align-items-center">
													<div className="me-2">
														<span className="avatar avatar-md bg-primary avatar-rounded">
															NW
														</span>
													</div>
													<div className="flex-fill">
														<p className="fw-medium mb-0">New Website Created<span className="badge bg-light text-muted float-end">20 Nov 2023</span></p>
														<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
													</div>
												</div>
											</ListGroup.Item>
											<ListGroup.Item>
												<div className="d-flex align-items-center">
													<div className="me-2">
														<span className="avatar avatar-md bg-danger avatar-rounded">
															CH
														</span>
													</div>
													<div className="flex-fill">
														<p className="fw-medium mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
														<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
													</div>
												</div>
											</ListGroup.Item>
											<ListGroup.Item>
												<div className="d-flex align-items-center">
													<div className="me-2">
														<span className="avatar avatar-md bg-info avatar-rounded">
															S
														</span>
													</div>
													<div className="flex-fill">
														<p className="fw-medium mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
														<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
													</div>
												</div>
											</ListGroup.Item>
											<ListGroup.Item>
												<div className="d-flex align-items-center">
													<div className="me-2">
														<span className="avatar avatar-md avatar-rounded">
															<img src="../../assets/images/faces/12.jpg" alt="" />
														</span>
													</div>
													<div className="flex-fill">
														<p className="fw-medium mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2023</span></p>
														<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
													</div>
												</div>
											</ListGroup.Item>
											<ListGroup.Item>
												<div className="d-flex align-items-center">
													<div className="me-2">
														<span className="avatar avatar-md bg-success avatar-rounded">
															RC
														</span>
													</div>
													<div className="flex-fill">
														<p className="fw-medium mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2023</span></p>
														<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
													</div>
												</div>
											</ListGroup.Item>
											<ListGroup.Item>
												<div className="d-flex align-items-center">
													<div className="me-2">
														<span className="avatar avatar-md avatar-rounded">
															<img src="../../assets/images/faces/1.jpg" alt="" />
														</span>
													</div>
													<div className="flex-fill">
														<p className="fw-medium mb-0">Brenda New product launching<span className="badge bg-light text-muted float-end">1 Jan 2023</span></p>
														<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
													</div>
												</div>
											</ListGroup.Item>
											<ListGroup.Item>
												<div className="d-flex align-items-center">
													<div className="me-2">
														<span className="avatar avatar-md bg-secondary avatar-rounded">
															M
														</span>
													</div>
													<div className="flex-fill">
														<p className="fw-medium mb-0">Medeleine Hey! there i'm available<span className="badge bg-light text-muted float-end">5 Jan 2023</span></p>
														<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
													</div>
												</div>
											</ListGroup.Item>
											<ListGroup.Item>
												<div className="d-flex align-items-center">
													<div className="me-2">
														<span className="avatar avatar-md bg-info avatar-rounded">
															OL
														</span>
													</div>
													<div className="flex-fill">
														<p className="fw-medium mb-0">Alexia New schedule release<span className="badge bg-light text-muted float-end">6 Jan 2023</span></p>
														<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
													</div>
												</div>
											</ListGroup.Item>
											<ListGroup.Item>
												<div className="d-flex align-items-center">
													<div className="me-2">
														<span className="avatar avatar-md bg-warning avatar-rounded">
															A
														</span>
													</div>
													<div className="flex-fill">
														<p className="fw-medium mb-0">Kamala Preparing for new admin launch<span className="badge bg-light text-muted float-end">7 Jan 2023</span></p>
														<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
													</div>
												</div>
											</ListGroup.Item>
											<ListGroup.Item>
												<div className="d-flex align-items-center">
													<div className="me-2">
														<span className="avatar avatar-md avatar-rounded">
															<img src="../../assets/images/faces/6.jpg" alt="" />
														</span>
													</div>
													<div className="flex-fill">
														<p className="fw-medium mb-0">Oisha Meeting with clinet for dinner<span className="badge bg-light text-muted float-end">10 Jan 2023</span></p>
														<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
													</div>
												</div>
											</ListGroup.Item>
											<ListGroup.Item>
												<div className="d-flex align-items-center">
													<div className="me-2">
														<span className="avatar avatar-md bg-danger avatar-rounded">
															CH
														</span>
													</div>
													<div className="flex-fill">
														<p className="fw-medium mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
														<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
													</div>
												</div>
											</ListGroup.Item>
											<ListGroup.Item>
												<div className="d-flex align-items-center">
													<div className="me-2">
														<span className="avatar avatar-md bg-info avatar-rounded">
															S
														</span>
													</div>
													<div className="flex-fill">
														<p className="fw-medium mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
														<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
													</div>
												</div>
											</ListGroup.Item>
											<ListGroup.Item>
												<div className="d-flex align-items-center">
													<div className="me-2">
														<span className="avatar avatar-md avatar-rounded">
															<img src="../../assets/images/faces/14.jpg" alt="" />
														</span>
													</div>
													<div className="flex-fill">
														<p className="fw-medium mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2023</span></p>
														<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
													</div>
												</div>
											</ListGroup.Item>
											<ListGroup.Item>
												<div className="d-flex align-items-center">
													<div className="me-2">
														<span className="avatar avatar-md bg-success avatar-rounded">
															RC
														</span>
													</div>
													<div className="flex-fill">
														<p className="fw-medium mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2023</span></p>
														<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
													</div>
												</div>
											</ListGroup.Item>
										</ul>
									</ul>
								</div>
							</Offcanvas.Body>
						</Offcanvas>
					</ShowCode>
				</Col>
				<Col xl={12}>
					<ShowCode title="Static backdrop" customCardClass="custom-card" customCardBodyClass="" code={offcanvas3}>
						<Button variant='primary' className="" type="button" data-bs-toggle="offcanvas" onClick={handleShow2}
							data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
							Toggle static offcanvas
						</Button>
						<Offcanvas show={show2} onHide={handleClose2} backdrop="static" className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
							<Offcanvas.Header className="offcanvas-header border-bottom border-block-end-dashed">
								<h5 className="offcanvas-title" id="offcanvasExampleLabel">Notifications</h5>
								<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleClose2}></button>
							</Offcanvas.Header>
							<Offcanvas.Body className="offcanvas-body p-0">
								<div>
									<ListGroup className="list-group-flush mb-0">
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md bg-primary avatar-rounded">
														NW
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">New Website Created<span className="badge bg-light text-muted float-end">20 Nov 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md bg-danger avatar-rounded">
														CH
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md bg-info avatar-rounded">
														S
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md avatar-rounded">
														<img src="../../assets/images/faces/12.jpg" alt="" />
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md bg-success avatar-rounded">
														RC
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md avatar-rounded">
														<img src="../../assets/images/faces/1.jpg" alt="" />
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Brenda New product launching<span className="badge bg-light text-muted float-end">1 Jan 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md bg-secondary avatar-rounded">
														M
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Medeleine Hey! there i'm available<span className="badge bg-light text-muted float-end">5 Jan 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md bg-info avatar-rounded">
														OL
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Alexia New schedule release<span className="badge bg-light text-muted float-end">6 Jan 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md bg-warning avatar-rounded">
														A
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Kamala Preparing for new admin launch<span className="badge bg-light text-muted float-end">7 Jan 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md avatar-rounded">
														<img src="../../assets/images/faces/6.jpg" alt="" />
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Oisha Meeting with clinet for dinner<span className="badge bg-light text-muted float-end">10 Jan 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md bg-danger avatar-rounded">
														CH
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md bg-info avatar-rounded">
														S
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md avatar-rounded">
														<img src="../../assets/images/faces/14.jpg" alt="" />
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md bg-success avatar-rounded">
														RC
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
												</div>
											</div>
										</ListGroup.Item>
									</ListGroup>
								</div>
							</Offcanvas.Body>
						</Offcanvas>
					</ShowCode>
				</Col>
				<Col xl={12}>
					<ShowCode title="Placement" customCardClass="custom-card" customCardBodyClass="" code={offcanvas5}>
						<Button variant='primary' className="m-1" type="button" data-bs-toggle="offcanvas" onClick={handleShowt}
							data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle top
							offcanvas</Button>
						<Offcanvas placement='top' show={showt} onHide={handleCloset} className="offcanvas-top" tabindex="-1" id="offcanvasTop"
							aria-labelledby="offcanvasTopLabel">
							<Offcanvas.Header closeButton className="offcanvas-header">
								<h5 className="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
							</Offcanvas.Header>
							<div className="px-4">
								...
							</div>
						</Offcanvas>
						<Button variant='primary' className="m-1" type="button" data-bs-toggle="offcanvas" onClick={handleShowr}
							data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right
							offcanvas</Button>
						<Offcanvas placement='end' show={showr} onHide={handleCloser} className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
							<Offcanvas.Header className="offcanvas-header border-bottom border-block-end-dashed">
								<h5 className="offcanvas-title" id="offcanvasExampleLabel">Notifications</h5>
								<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleCloser}></button>
							</Offcanvas.Header>
							<Offcanvas.Body className="offcanvas-body p-0">
								<div>
									<ListGroup className="list-group-flush mb-0">
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md bg-primary avatar-rounded">
														NW
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">New Website Created<span className="badge bg-light text-muted float-end">20 Nov 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md bg-danger avatar-rounded">
														CH
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md bg-info avatar-rounded">
														S
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md avatar-rounded">
														<img src="../../assets/images/faces/12.jpg" alt="" />
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md bg-success avatar-rounded">
														RC
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md avatar-rounded">
														<img src="../../assets/images/faces/1.jpg" alt="" />
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Brenda New product launching<span className="badge bg-light text-muted float-end">1 Jan 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md bg-secondary avatar-rounded">
														M
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Medeleine Hey! there i'm available<span className="badge bg-light text-muted float-end">5 Jan 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md bg-info avatar-rounded">
														OL
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Alexia New schedule release<span className="badge bg-light text-muted float-end">6 Jan 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md bg-warning avatar-rounded">
														A
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Kamala Preparing for new admin launch<span className="badge bg-light text-muted float-end">7 Jan 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md avatar-rounded">
														<img src="../../assets/images/faces/6.jpg" alt="" />
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Oisha Meeting with clinet for dinner<span className="badge bg-light text-muted float-end">10 Jan 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md bg-danger avatar-rounded">
														CH
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md bg-info avatar-rounded">
														S
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md avatar-rounded">
														<img src="../../assets/images/faces/14.jpg" alt="" />
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item>
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md bg-success avatar-rounded">
														RC
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-medium mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2023</span></p>
													<span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
												</div>
											</div>
										</ListGroup.Item>
									</ListGroup>
								</div>
							</Offcanvas.Body>
						</Offcanvas>
						<Button variant='primary' className="m-1" type="button" data-bs-toggle="offcanvas" onClick={handleShowb}
							data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Toggle
							bottom
							offcanvas</Button>
						<Offcanvas placement='bottom' show={showb} onHide={handleCloseb} className="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom"
							aria-labelledby="offcanvasBottomLabel">
							<Offcanvas.Header closeButton className="offcanvas-header">
								<h5 className="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom
								</h5>
							</Offcanvas.Header>
							<Offcanvas.Body className=" small">
								...
							</Offcanvas.Body>
						</Offcanvas>
					</ShowCode>
				</Col>
			</Row>

		</Fragment>
	);
};

export default Offcanvass;
