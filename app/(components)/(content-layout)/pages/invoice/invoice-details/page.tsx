"use client";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Form, Row, Table } from "react-bootstrap";

const InvoiceDetails = () => {
	const print = () => {
		window.print();
	};
	return (
		<Fragment>
			<Seo title={"Invoice-Details"} />
			<Row>
				<Col xl={9}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header className="d-md-flex d-block">
							<div className="h5 mb-0 d-sm-flex d-bllock align-items-center">
								<div className="avatar avatar-sm">
									<img src="../../../assets/images/brand-logos/toggle-logo.png" alt="" />
								</div>
								<div className="ms-sm-2 ms-0 mt-sm-0 mt-2">
									<div className="h6 fw-semibold mb-0">SHOPPING INVOICE : <span className="text-primary">#8140-2099</span></div>
								</div>
							</div>
							<div className="ms-auto mt-md-0 mt-2">
								<Button variant='' className="btn btn-sm btn-secondary me-1" onClick={() => print()}>Print<i className="ri-printer-line ms-1 align-middle d-inline-flex"></i></Button>
								<Button variant='' className="btn btn-sm btn-primary">Save As PDF<i className="ri-file-pdf-line ms-1 align-middle d-inline-flex"></i></Button>
							</div>
						</Card.Header>
						<Card.Body>
							<div className="row gy-3">
								<Col xl={12}>
									<Row>
										<Col xl={3}>
											<p className="fw-semibold text-muted mb-1">Invoice ID :</p>
											<p className="fs-15 mb-1">#SPTA47512151</p>
										</Col>
										<Col xl={3}>
											<p className="fw-semibold text-muted mb-1">Date Issued :</p>
											<p className="fs-15 mb-1">11,Dec 2023 - <span className="text-muted fs-12">01:58PM</span></p>
										</Col>
										<Col xl={3}>
											<p className="fw-semibold text-muted mb-1">Due Date :</p>
											<p className="fs-15 mb-1">18,Dec 2023</p>
										</Col>
										<Col xl={3}>
											<p className="fw-semibold text-muted mb-1">Due Amount :</p>
											<p className="fs-16 mb-1 fw-semibold">$1,245.08</p>
										</Col>
										<Col xl={4} lg={4} md={6} sm={6} className="">
											<p className="text-muted mb-2">
												Billing From :
											</p>
											<p className="fw-bold mb-1">
												SPRUKO TECHNOLOGIES
											</p>
											<p className="mb-1 text-muted fs-14">
												123 Oak Lane,
											</p>
											<p className="mb-1 text-muted fs-14">
												Springfield, IL, USA, 62704451
											</p>
											<p className="mb-1 text-muted fs-14">
												sprukotrust.HMD@gmail.com
											</p>
											<p className="mb-1 text-muted fs-14">
												(245) 1111-45411
											</p>
											<p className="text-muted">For more information check for <Link href="#!" scroll={false} className="text-primary fw-semibold"><u>GSTIN</u></Link> Details.</p>
										</Col>
										<Col xl={3} lg={4} md={6} sm={6} className="ms-auto">
											<p className="text-muted mb-2">
												Billing To :
											</p>
											<p className="fw-bold mb-1">
												James Lucas
											</p>
											<p className="text-muted mb-1 fs-14">
												789 Maple Avenue
											</p>
											<p className="text-muted mb-1 fs-14">
												Lexington, KY, USA, 40502451
											</p>
											<p className="text-muted mb-1 fs-14">
												jameslucas6262@gmail.com
											</p>
											<p className="text-muted">
												+1 1425-1425-444
											</p>
										</Col>
									</Row>
								</Col>

								<Col xl={12}>
									<div className="table-responsive">
										<Table className="table nowrap text-nowrap border mt-4">
											<thead>
												<tr>
													<th>BRAND NAME</th>
													<th>DESCRIPTION</th>
													<th>QUANTITY</th>
													<th>PRICE PER UNIT</th>
													<th>TOTAL</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<div className="fw-semibold">
															Long lengthy Chair
														</div>
													</td>
													<td>
														<div className="text-muted">
															Compact stylish seating
														</div>
													</td>
													<td className="product-quantity-container">
														1
													</td>
													<td>
														$145
													</td>
													<td>
														$133
													</td>
												</tr>
												<tr>
													<td>
														<div className="fw-semibold">
															Analog Watches
														</div>
													</td>
													<td>
														<div className="text-muted">
															Times elegance with Watches
														</div>
													</td>
													<td className="product-quantity-container">
														1
													</td>
													<td>
														$243
													</td>
													<td>
														$220
													</td>
												</tr>
												<tr>
													<td>
														<div className="fw-semibold">
															Ceramic pot
														</div>
													</td>
													<td>
														<div className="text-muted">
															Ceramic pot
														</div>
													</td>
													<td className="product-quantity-container">
														1
													</td>
													<td>
														$600
													</td>
													<td>
														$540
													</td>
												</tr>
												<tr>
													<td>
														<div className="fw-semibold">
															Digital Camera
														</div>
													</td>
													<td>
														<div className="text-muted">
															Prefect high-quality photography
														</div>
													</td>
													<td className="product-quantity-container">
														2
													</td>
													<td>
														$145
													</td>
													<td>
														$524
													</td>
												</tr>
												<tr>
													<td>
														<div className="fw-semibold">
															Handy Bag
														</div>
													</td>
													<td>
														<div className="text-muted">
															Effortlessly carry your essentials
														</div>
													</td>
													<td className="product-quantity-container">
														1
													</td>
													<td>
														$699
													</td>
													<td>
														$599
													</td>
												</tr>
												<tr>
													<td colSpan={3}></td>
													<td colSpan={2}>
														<table className="table table-sm text-nowrap mb-0 table-borderless">
															<tbody>
																<tr>
																	<th scope="row">
																		<p className="mb-0">Sub Total :</p>
																	</th>
																	<td>
																		<p className="mb-0 fw-semibold fs-15">$5,656</p>
																	</td>
																</tr>
																<tr>
																	<th scope="row">
																		<p className="mb-0">Avail Discount :</p>
																	</th>
																	<td>
																		<p className="mb-0 fw-semibold fs-15">$14.89</p>
																	</td>
																</tr>
																<tr>
																	<th scope="row">
																		<p className="mb-0">Coupon Discount <span className="text-success">(12%)</span> :</p>
																	</th>
																	<td>
																		<p className="mb-0 fw-semibold fs-15">$461.15</p>
																	</td>
																</tr>
																<tr>
																	<th scope="row">
																		<p className="mb-0">Vat <span className="text-danger">(10%)</span> :</p>
																	</th>
																	<td>
																		<p className="mb-0 fw-semibold fs-15">$477.00</p>
																	</td>
																</tr>
																<tr>
																	<th scope="row">
																		<p className="mb-0">Due Till Date :</p>
																	</th>
																	<td>
																		<p className="mb-0 fw-semibold fs-15">$0</p>
																	</td>
																</tr>
																<tr>
																	<th scope="row">
																		<p className="mb-0 fs-14">Total :</p>
																	</th>
																	<td>
																		<p className="mb-0 fw-semibold fs-16 text-success">$3,647.98</p>
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
											</tbody>
										</Table>
									</div>
								</Col>
								<Col xl={12}>
									<div>
										<Form.Label htmlFor="invoice-note" className="form-label">Note:</Form.Label>
										<Form.Control as="textarea" className="form-control form-control-light" id="invoice-note" rows={3} defaultValue="Once the invoice has been verified by the accounts payable team and recorded, the only task left is to send it for approval before releasing the payment"
										/>
									</div>
								</Col>
							</div>
						</Card.Body>
						<div className="card-footer text-end">
							<Button variant='' className="btn btn-success">Download <i className="ri-download-2-line ms-1 align-middle"></i></Button>
						</div>
					</Card>
				</Col>
				<Col xl={3}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header>
							<div className="card-title">
								Mode Of Payment
							</div>
						</Card.Header>
						<Card.Body>
							<div className="row gy-3">
								<Col xl={12}>
									<p className="fs-14 fw-semibold">
										Credit/Debit Card
									</p>
									<p>
										<span className="fw-semibold text-muted fs-12">Name On Card :</span> James Lucas
									</p>
									<p>
										<span className="fw-semibold text-muted fs-12">Card Number :</span> 1234 5678 9087 XXXX
									</p>
									<p>
										<span className="fw-semibold text-muted fs-12">Total Amount :</span> <span className="text-success fw-semibold fs-14">$3,647.98</span>
									</p>
									<p>
										<span className="fw-semibold text-muted fs-12">Due Date :</span>  05,Jan 2023- <span className="text-danger fs-12 fw-semibold">30 days due</span>
									</p>
									<p>
										<span className="fw-semibold text-muted fs-12">Invoice Status : <span className="badge bg-warning-transparent">Pending</span></span>
									</p>
									<div className="alert alert-success" role="alert">
										Please pay the invoice within 30 days.
									</div>
								</Col>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
};

export default InvoiceDetails;
