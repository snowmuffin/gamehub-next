"use client";
import React, { ChangeEvent, Fragment, useRef, useState } from "react";
import { Button, Card, Col, Dropdown, Form, ListGroup, Nav, Row, Tab } from "react-bootstrap";
import dynamic from "next/dynamic";
import { Accountoptions, Countryoptions, Languageoptions, MaxLimitoptions, Maximumoptions } from "@/shared/data/pages/mail/mailsettingsdata";
import Link from "next/link";
import Seo from "@/shared/layout-components/seo/seo";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const Select = dynamic(() => import("react-select"), { ssr: false });

const MailSettings = () => {

	const [selectedImage, setSelectedImage] = useState<string | null>("../../../assets/images/faces/8	.jpg"); // Set the default image URL here
    const fileInputRef = useRef<HTMLInputElement | null>(null);
  
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
      const selectedFile = e.target.files && e.target.files[0];
  
      if (selectedFile) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setSelectedImage(event.target?.result as string);
        };
        reader.readAsDataURL(selectedFile);
      }
    };
  
    const openFileInput = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };
	return (
		<Fragment>
			<Seo title={"Mail-Settings"} />
			<div className="row mb-5">
				<Col xl={12}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Body>
							<Row>
								<Tab.Container defaultActiveKey="first">
									<Col xl={2} lg={3}>
										<Nav className="nav-tabs flex-column tab-style-7 border-block-end-0" role="tablist">
											<Nav.Link eventKey="first" className="" data-bs-toggle="tab" role="tab" aria-current="page" href="#personal-info" aria-selected="true"><i className="bx bx-cog me-2 fs-18 align-middle"></i>Personal Information</Nav.Link>
											<Nav.Link eventKey="second" className="mt-3" data-bs-toggle="tab" role="tab" aria-current="page" href="#email-settings" aria-selected="false" tabIndex={-1}><i className="bx bx-envelope me-2 fs-18 align-middle"></i>Email</Nav.Link>
											<Nav.Link eventKey="third" className="mt-3" data-bs-toggle="tab" role="tab" aria-current="page" href="#labels" aria-selected="false" tabIndex={-1}><i className="bx bx-label me-2 fs-18 align-middle"></i>Labels</Nav.Link>
											<Nav.Link eventKey="fourth" className="mt-3" data-bs-toggle="tab" role="tab" aria-current="page" href="#notification-settings" aria-selected="false" tabIndex={-1}><i className="bx bx-notification me-2 fs-18 align-middle"></i>Notifications</Nav.Link>
											<Nav.Link eventKey="fifth" className="mt-3" data-bs-toggle="tab" role="tab" aria-current="page" href="#security" aria-selected="false" tabIndex={-1}><i className="bx bx-shield-plus me-2 fs-18 align-middle"></i>Security</Nav.Link>
											<Nav.Link eventKey="sixth" className="mt-3" data-bs-toggle="tab" role="tab" aria-current="page" href="#account-settings" aria-selected="false" tabIndex={-1}><i className="bx bx-coin-stack me-2 fs-18 align-middle"></i>Account Settings</Nav.Link>
										</Nav>
									</Col>
									<Col xl={10} lg={9}>
										<Tab.Content className="mail-setting-tab mt-4 mt-lg-0">
											<Tab.Pane eventKey="first" className="text-muted" id="personal-info" role="tabpanel">
												<div className="p-3">
													<h6 className="fw-semibold mb-3">
														Basic Information :
													</h6>
													<div className="mb-4">
														<div className="mb-0 me-sm-5 d-sm-flex align-items-end gap-3">
															<span className="avatar avatar-xxl ">
																<img src={selectedImage || ""} alt="" id="profile-img" />
																<span className="badge bg-primary avatar-badge cursor-pointer" onClick={openFileInput}>
																	<input
																	type="file"
																		name="photo"
																		className="position-absolute w-100 h-100 op-0"
																		id="profile-change"
																		ref={fileInputRef}
																		onChange={handleImageChange}
																		style={{ display: "none" }}
																	/>
																	<i className="fe fe-camera"></i>
																</span>
															</span>
															<div className="d-flex gap-2 py-1">
																<div className="upload-btn-wrapper" onClick={openFileInput}>
																	<Button variant="" className="btn btn-primary-light"><i className="fe fe-upload me-2 d-inline-block"></i>Upload Photo</Button>
																	<input
																	type="file"
																		name="photo"
																		className="position-absolute w-100 h-100 op-0"
																		id="profile-change"
																		ref={fileInputRef}
																		onChange={handleImageChange}
																		style={{ display: "none" }}
																	/>
																</div>
																<Button variant="" className="btn btn-primary-light"><i className="fe fe-x me-2 d-inline-block"></i>Delete Photo</Button>
															</div>
														</div>
													</div>
													<div className="row gy-4 mb-4">
														<Col xl={6}>
															<Form.Label htmlFor="first-name" className="form-label">First Name</Form.Label>
															<Form.Control type="text" className="" id="first-name" placeholder="First Name" />
														</Col>
														<Col xl={6}>
															<Form.Label htmlFor="last-name" className="form-label">Last Name</Form.Label>
															<Form.Control type="text" className="" id="last-name" placeholder="Last Name" />
														</Col>
													</div>
													<h6 className="mb-3">
														Contact Information :
													</h6>
													<div className="row gy-4 mb-4">
														<Col xl={6}>
															<Form.Label htmlFor="email-address" className="form-label">Email Address :</Form.Label>
															<Form.Control type="text" className="" id="email-address" placeholder="xyz@gmail.com" />
														</Col>
														<Col xl={6}>
															<Form.Label htmlFor="Contact-Details" className="form-label">Contact Details :</Form.Label>
															<Form.Control type="text" className="" id="Contact-Details" placeholder="contact details" />
														</Col>

														<h6 className="">
															About Information :
														</h6>
														<Col xl={6} className="mt-2">
															<Form.Label htmlFor="language" className="form-label">Language :</Form.Label>
															<Select isMulti name="colors" options={Languageoptions} className="basic-multi-select"
																menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Languageoptions[0]]}
															/>
														</Col>
														<Col xl={6} className="mt-2">
															<Form.Label className="form-label">Country :</Form.Label>
															<Select name="colors" options={Countryoptions} className="basic-multi-select"
																menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Countryoptions[0]]}
															/>
														</Col>
														<Col xl={12}>
															<Form.Label htmlFor="bio" className="form-label">About :</Form.Label>
															<Form.Control as="textarea" className="" id="bio" rows={5} defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit impedit, officiis non minima saepe voluptates a magnam enim sequi porro veniam ea suscipit dolorum vel mollitia voluptate iste nemo!" />

														</Col>
													</div>
												</div>
											</Tab.Pane>
											<Tab.Pane eventKey="second" className="text-muted p-0" id="email-settings" role="tabpanel">
												<ListGroup className="list-group-flush">
													<ListGroup.Item>
														<div className="row gy-2 d-sm-flex align-items-center justify-content-between">
															<Col xl={3} lg={3} md={3} sm={12} className="">
																<span className="fs-14 fw-semibold mb-0">Menu View :</span>
															</Col>
															<Col xl={4}>
																<div className="form-check">
																	<Form.Check className="" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
																	<Form.Label className="form-check-label" htmlFor="flexRadioDefault1">
																		Default View
																	</Form.Label>
																</div>
																<div className="form-check">
																	<Form.Check className="" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
																	<Form.Label className="form-check-label" htmlFor="flexRadioDefault2">
																		Advanced View
																	</Form.Label>
																</div>
															</Col>
															<Col xl={5}>
																<div className="custom-toggle-switch float-sm-end">
																	<input id="menu-view" name="toggleswitchsize" type="checkbox" defaultChecked />
																	<label htmlFor="menu-view" className="label-primary mb-1"></label>
																</div>
															</Col>
														</div>
													</ListGroup.Item>
													<ListGroup.Item>
														<div className="row gy-3 d-sm-flex align-items-center justify-content-between">
															<div className="col-xl-3">
																<span className="fs-14 fw-semibold mb-0">Language :</span>
															</div>
															<Col xl={4}>
																<Form.Label htmlFor="mail-language" className="form-label">Languages :</Form.Label>
																<Select isMulti name="colors" options={Languageoptions} className="basic-multi-select"
																	menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Languageoptions[0], Languageoptions[1]]}
																/>
															</Col>
															<Col xl={5}>
																<div className="custom-toggle-switch float-sm-end"> '
																	<input id="mail-languages" name="toggleswitchsize" type="checkbox" />
																	<label htmlFor="mail-languages" className="label-primary mb-1"></label>
																</div>
															</Col>
														</div>
													</ListGroup.Item>
													<ListGroup.Item>
														<div className="row gy-2 d-sm-flex align-items-center justify-content-between">
															<Col xl={3}>
																<span className="fs-14 fw-semibold mb-0">Images :</span>
															</Col>
															<Col xl={4}>
																<div className="form-check">
																	<Form.Check className="" type="radio" name="images-open" id="images-open1" />
																	<Form.Label className="form-check-label" htmlFor="images-open1">
																		Always Open Images
																	</Form.Label>
																</div>
																<div className="form-check">
																	<Form.Check className="" type="radio" name="images-open" id="images-hide2" defaultChecked />
																	<Form.Label className="form-check-label" htmlFor="images-hide2">
																		Ask For Permission
																	</Form.Label>
																</div>
															</Col>
															<Col xl={5}>
																<div className="custom-toggle-switch float-sm-end">
																	<input id="mails-images" name="toggleswitchsize" type="checkbox" />
																	<label htmlFor="mails-images" className="label-primary mb-1"></label> </div>
															</Col>
														</div>
													</ListGroup.Item>
													<ListGroup.Item>
														<div className="row gy-2 d-sm-flex align-items-center justify-content-between">
															<div className="col-xl-3">
																<span className="fs-14 fw-semibold mb-0">Keyboard Shortcuts :</span>
															</div>
															<Col xl={4}>
																<div className="form-check">
																	<Form.Check className="" type="radio" name="keyboard-enable" id="keyboard-enable1" />
																	<Form.Label className="form-check-label" htmlFor="keyboard-enable1">
																		Keyboard Shortcuts Enable
																	</Form.Label>
																</div>
																<div className="form-check">
																	<Form.Check className="" type="radio" name="keyboard-enable" id="keyboard-disable2" defaultChecked />
																	<Form.Label className="form-check-label" htmlFor="keyboard-disable2">
																		Keyboard Shortcuts Disable
																	</Form.Label>
																</div>
															</Col>
															<Col xl={5}>
																<div className="custom-toggle-switch float-sm-end">
																	<input id="keyboard-shortcuts" name="toggleswitchsize" type="checkbox" />
																	<label htmlFor="keyboard-shortcuts" className="label-primary mb-1"></label> </div>
															</Col>
														</div>
													</ListGroup.Item>
													<ListGroup.Item>
														<div className="row gy-2 d-sm-flex align-items-center justify-content-between">
															<div className="col-xl-3">
																<span className="fs-14 fw-semibold mb-0">Notifications :</span>
															</div>
															<Col xl={4}>
																<div className="form-check">
																	<Form.Check className="" type="checkbox" defaultValue="" id="desktop-notifications" defaultChecked />
																	<Form.Label className="form-check-label" htmlFor="desktop-notifications">
																		Desktop Notifications
																	</Form.Label>
																</div>
																<div className="form-check">
																	<Form.Check className="" type="checkbox" defaultValue="" id="mobile-notifications" />
																	<Form.Label className="form-check-label" htmlFor="mobile-notifications">
																		Mobile Notifications
																	</Form.Label>
																</div>
															</Col>
															<Col xl={5}>
																<div className="float-sm-end">
																	<Link href="#!" scroll={false} className="btn btn-success-ghost btn-sm">Learn-more</Link>
																</div>
															</Col>
														</div>
													</ListGroup.Item>
													<ListGroup.Item>
														<div className="row gy-3 d-sm-flex align-items-center justify-content-between">
															<Col xl={3}>
																<span className="fs-14 fw-semibold mb-0">Maximum Mails Per Page :</span>
															</Col>
															<Col xl={4}>

																<Select name="colors" options={Maximumoptions} className="basic-multi-select"
																	menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Maximumoptions[0]]}
																/>
															</Col>
															<Col xl={5}>
																<div className="custom-toggle-switch float-sm-end">
																	<input id="mails-per-page" name="toggleswitchsize" type="checkbox" />
																	<label htmlFor="mails-per-page" className="label-primary mb-1"></label>
																</div>
															</Col>
														</div>
													</ListGroup.Item>
													<ListGroup.Item>
														<div className="row gy-2 d-sm-flex align-items-center justify-content-between">
															<Col xl={3}>
																<span className="fs-14 fw-semibold mb-0">Mail Composer :</span>
															</Col>
															<Col xl={4}>
																<div className="form-check">
																	<Form.Check className="" type="radio" name="mail-composeron" id="mail-composeron1" />
																	<Form.Label className="form-check-label" htmlFor="mail-composeron1">
																		Mail Composer On
																	</Form.Label>
																</div>
																<div className="form-check">
																	<Form.Check className="" type="radio" name="mail-composeron" id="mail-composeroff2" defaultChecked />
																	<Form.Label className="form-check-label" htmlFor="mail-composeroff2">
																		Mail Composer Off
																	</Form.Label>
																</div>
															</Col>
															<Col xl={5}>
																<div className="custom-toggle-switch float-sm-end">
																	<input id="mail-composer" name="toggleswitchsize" type="checkbox" />
																	<label htmlFor="mail-composer" className="label-primary mb-1"></label>
																</div>
															</Col>
														</div>
													</ListGroup.Item>
													<ListGroup.Item>
														<div className="row gy-2 d-sm-flex align-items-center justify-content-between">
															<div className="col-xl-3">
																<span className="fs-14 fw-semibold mb-0">Auto Correct :</span>
															</div>
															<Col xl={4}>
																<div className="form-check">
																	<Form.Check className="" type="radio" name="auto-correcton" id="auto-correcton1" />
																	<Form.Label className="form-check-label" htmlFor="auto-correcton1">
																		Auto Correct On
																	</Form.Label>
																</div>
																<div className="form-check">
																	<Form.Check className="" type="radio" name="auto-correcton" id="auto-correctoff2" defaultChecked />
																	<Form.Label className="form-check-label" htmlFor="auto-correctoff2">
																		Auto Correct Off
																	</Form.Label>
																</div>
															</Col>
															<Col xl={5}>
																<div className="custom-toggle-switch float-sm-end">
																	<input id="auto-correct" name="toggleswitchsize" type="checkbox" />
																	<label htmlFor="auto-correct" className="label-primary mb-1"></label>
																</div>
															</Col>
														</div>
													</ListGroup.Item>
													<ListGroup.Item>
														<div className="row gy-2 d-sm-flex align-items-center justify-content-between">
															<Col xl={3}>
																<span className="fs-14 fw-semibold mb-0">Mail Send Action :</span>
															</Col>
															<Col xl={4}>
																<div className="form-check">
																	<Form.Check className="" type="checkbox" defaultValue="" id="on-keyboard" defaultChecked />
																	<Form.Label className="form-check-label" htmlFor="on-keyboard">
																		On Keyboard Action
																	</Form.Label>
																</div>
																<div className="form-check">
																	<Form.Check className="" type="checkbox" defaultValue="" id="on-buttonclick" />
																	<Form.Label className="form-check-label" htmlFor="on-buttonclick">
																		On Button Click
																	</Form.Label>
																</div>
															</Col>
															<Col xl={5}>
																<div className="float-sm-end">
																	<Link href="#!" scroll={false} className="btn btn-success-ghost btn-sm">Learn-more</Link>
																</div>
															</Col>
														</div>
													</ListGroup.Item>
												</ListGroup>
											</Tab.Pane>
											<Tab.Pane eventKey="third" className="p-4 text-muted" id="labels" role="tabpanel">
												<p className="fs-14 fw-semibold mb-3">Mail Labels :</p>
												<div className="row gy-2">
													<Col xl={4}>
														<Card className="custom-card shadow-none border">
															<Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
																<div className="">
																	<span className="fw-medium">All Mails</span>
																</div>
																<div>
																	<div className="custom-toggle-switch float-sm-end">
																		<input id="all-mails" name="toggleswitchsize" type="checkbox" defaultChecked />
																		<Form.Label htmlFor="all-mails" className="label-primary mb-1"></Form.Label>
																	</div>
																</div>
															</Card.Body>
														</Card>
													</Col>
													<Col xl={4}>
														<Card className="custom-card shadow-none border">
															<Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
																<div className="">
																	<span className="fw-medium">Inbox</span>
																</div>
																<div>
																	<div className="custom-toggle-switch float-sm-end">
																		<input id="mail-inbox" name="toggleswitchsize" type="checkbox" />
																		<Form.Label htmlFor="mail-inbox" className="label-primary mb-1"></Form.Label>
																	</div>
																</div>
															</Card.Body>
														</Card>
													</Col>
													<Col xl={4}>
														<Card className="custom-card shadow-none border">
															<Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
																<div className="">
																	<span className="fw-medium">Sent</span>
																</div>
																<div>
																	<div className="custom-toggle-switch float-sm-end">
																		<input id="mail-sent" name="toggleswitchsize" type="checkbox" defaultChecked />
																		<Form.Label htmlFor="mail-sent" className="label-primary mb-1"></Form.Label>
																	</div>
																</div>
															</Card.Body>
														</Card>
													</Col>
													<Col xl={4}>
														<Card className="custom-card shadow-none border">
															<Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
																<div className="">
																	<span className="fw-medium">Drafts</span>
																</div>
																<div>
																	<div className="custom-toggle-switch float-sm-end">
																		<input id="mail-drafts" name="toggleswitchsize" type="checkbox" />
																		<Form.Label htmlFor="mail-drafts" className="label-primary mb-1"></Form.Label>
																	</div>
																</div>
															</Card.Body>
														</Card>
													</Col>
													<Col xl={4}>
														<Card className="custom-card shadow-none border">
															<Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
																<div className="">
																	<span className="fw-medium">Spam</span>
																</div>
																<div>
																	<div className="custom-toggle-switch float-sm-end">
																		<input id="mail-spam" name="toggleswitchsize" type="checkbox" />
																		<Form.Label htmlFor="mail-spam" className="label-primary mb-1"></Form.Label>
																	</div>
																</div>
															</Card.Body>
														</Card>
													</Col>
													<Col xl={4}>
														<Card className="custom-card shadow-none border">
															<Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
																<div className="">
																	<span className="fw-medium">Important</span>
																</div>
																<div>
																	<div className="custom-toggle-switch float-sm-end">
																		<input id="mail-imp" name="toggleswitchsize" type="checkbox" defaultChecked />
																		<Form.Label htmlFor="mail-imp" className="label-primary mb-1"></Form.Label>
																	</div>
																</div>
															</Card.Body>
														</Card>
													</Col>
													<Col xl={4}>
														<Card className="custom-card shadow-none border">
															<Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
																<div className="">
																	<span className="fw-medium">Trash</span>
																</div>
																<div>
																	<div className="custom-toggle-switch float-sm-end">
																		<input id="mail-trash" name="toggleswitchsize" type="checkbox" />
																		<Form.Label htmlFor="mail-trash" className="label-primary mb-1"></Form.Label>
																	</div>
																</div>
															</Card.Body>
														</Card>
													</Col>
													<Col xl={4}>
														<Card className="custom-card shadow-none border">
															<Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
																<div className="">
																	<span className="fw-medium">Archive</span>
																</div>
																<div>
																	<div className="custom-toggle-switch float-sm-end">
																		<input id="mail-archieve" name="toggleswitchsize" type="checkbox" defaultChecked />
																		<Form.Label htmlFor="mail-archieve" className="label-primary mb-1"></Form.Label>
																	</div>
																</div>
															</Card.Body>
														</Card>
													</Col>
													<Col xl={4}>
														<Card className="custom-card shadow-none border">
															<Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
																<div className="">
																	<span className="fw-medium">Starred</span>
																</div>
																<div>
																	<div className="custom-toggle-switch float-sm-end">
																		<input id="mail-starred" name="toggleswitchsize" type="checkbox" defaultChecked />
																		<Form.Label htmlFor="mail-starred" className="label-primary mb-1"></Form.Label>
																	</div>
																</div>
															</Card.Body>
														</Card>
													</Col>
												</div>
												<p className="fs-14 fw-semibold mb-3">Custom Labels :</p>
												<Row>
													<Col xxl={3} xl={4} md={6} className="">
														<Card className="custom-card shadow-none border">
															<Card.Body className="align-items-center d-flex justify-content-between flex-wrap">
																<div className="mb-1">
																	<span className="fw-semibold">Mail</span>
																</div>
																<div>
																	<div className="btn-group" role="group" aria-label="Basic radio toggle button group">
																		<input type="radio" className="btn-check" name="label-custom-mail" id="custom-mail-enable" defaultChecked />
																		<label className="btn btn-sm btn-outline-primary" htmlFor="custom-mail-enable">Enable</label>
																		<input type="radio" className="btn-check" name="label-custom-mail" id="custom-mail-disable" />
																		<label className="btn btn-sm btn-outline-primary" htmlFor="custom-mail-disable">Disable</label>
																	</div>
																</div>
															</Card.Body>
														</Card>
													</Col>
													<Col xxl={3} xl={4} md={6} className="">
														<Card className="custom-card shadow-none border">
															<Card.Body className="align-items-center d-flex justify-content-between flex-wrap">
																<div className="mb-1">
																	<span className="fw-semibold">Home</span>
																</div>
																<div>
																	<div className="btn-group" role="group" aria-label="Basic radio toggle button group"> <input type="radio" className="btn-check" name="label-custom-home" id="custom-home-enable" /> <label className="btn btn-sm btn-outline-primary" htmlFor="custom-home-enable">Enable</label> <input type="radio" className="btn-check" name="label-custom-home" id="custom-home-disable" defaultChecked /> <label className="btn btn-sm btn-outline-primary" htmlFor="custom-home-disable">Disable</label> </div>
																</div>
															</Card.Body>
														</Card>
													</Col>
													<Col xxl={3} xl={4} md={6} className="">
														<Card className="custom-card shadow-none border">
															<Card.Body className="align-items-center  d-flex justify-content-between flex-wrap">
																<div className="mb-1">
																	<span className="fw-semibold">Work</span>
																</div>
																<div>
																	<div className="btn-group" role="group" aria-label="Basic radio toggle button group"> <input type="radio" className="btn-check" name="label-custom-work" id="custom-work-enable" defaultChecked /> <label className="btn btn-sm btn-outline-primary" htmlFor="custom-work-enable">Enable</label> <input type="radio" className="btn-check" name="label-custom-work" id="custom-work-disable" /> <label className="btn btn-sm btn-outline-primary" htmlFor="custom-work-disable">Disable</label> </div>
																</div>
															</Card.Body>
														</Card>
													</Col>
													<Col xxl={3} xl={4} md={6} className="">
														<Card className="custom-card shadow-none border">
															<Card.Body className="align-items-center d-flex justify-content-between flex-wrap">
																<div className="mb-1">
																	<span className="fw-semibold">Friends</span>
																</div>
																<div>
																	<div className="btn-group" role="group" aria-label="Basic radio toggle button group"> <input type="radio" className="btn-check" name="label-custom-frds" id="custom-frds-enable" defaultChecked /> <label className="btn btn-sm btn-outline-primary" htmlFor="custom-frds-enable">Enable</label> <input type="radio" className="btn-check" name="label-custom-frds" id="custom-frds-disable" /> <label className="btn btn-sm btn-outline-primary" htmlFor="custom-frds-disable">Disable</label> </div>
																</div>
															</Card.Body>
														</Card>
													</Col>
												</Row>
												<p className="fs-14 fw-semibold mb-3">Settings :</p>
												<Row>
													<Col xxl={3} xl={4} md={6} className="">
														<Card className="custom-card shadow-none border">
															<Card.Body className="align-items-center d-flex justify-content-between flex-wrap">
																<div className="mb-1">
																	<span className="fw-semibold">Settings</span>
																</div>
																<div>
																	<div className="custom-toggle-switch float-sm-end">
																		<input id="setting" name="toggleswitchsize" type="checkbox" defaultChecked />
																		<Form.Label htmlFor="setting" className="label-primary mb-1"></Form.Label>
																	</div>
																</div>
															</Card.Body>
														</Card>
													</Col>
												</Row>

											</Tab.Pane>
											<Tab.Pane eventKey="fourth" className="text-muted p-0" id="notification-settings" role="tabpanel">
												<ListGroup className="list-group-flush list-unstyled rounded">
													<ListGroup.Item>
														<div className="row gx-5">
															<Col xl={5}>
																<p className="fs-16 mb-1 fw-semibold">Email Notifications</p>
																<p className="fs-12 mb-0 text-muted">Email notifications are the notifications you will receeive when you are offline, you can customize them by enabling or disabling them.</p>
															</Col>
															<Col xl={7}>
																<div className="d-flex align-items-top justify-content-between mt-sm-0 mt-3">
																	<div className="mail-notification-settings">
																		<p className="fs-14 mb-1 fw-semibold">Updates &amp; Features</p>
																		<p className="fs-12 mb-0 text-muted">Notifications about new updates and their features.</p>
																	</div>
																	<div>
																		<div className="custom-toggle-switch float-sm-end">
																			<input id="update-features" type="checkbox" defaultChecked />
																			<Form.Label htmlFor="update-features" className="label-primary mb-1"></Form.Label>
																		</div>
																	</div>
																</div>
																<div className="d-flex align-items-top justify-content-between mt-3">
																	<div className="mail-notification-settings">
																		<p className="fs-14 mb-1 fw-semibold">Early Access</p>
																		<p className="fs-12 mb-0 text-muted">Users are selected for beta testing of new update,notifications relating or participate in any of paid product promotion.</p>
																	</div>
																	<div>
																		<div className="custom-toggle-switch float-sm-end">
																			<input id="early-access" type="checkbox" />
																			<Form.Label htmlFor="early-access" className="label-primary mb-1"></Form.Label>
																		</div>
																	</div>
																</div>
																<div className="d-flex align-items-top justify-content-between mt-3">
																	<div className="mail-notification-settings">
																		<p className="fs-14 mb-1 fw-semibold">Email Shortcuts</p>
																		<p className="fs-12 mb-0 text-muted">Shortcut notifications for email.</p>
																	</div>
																	<div>
																		<div className="custom-toggle-switch float-sm-end">
																			<input id="email-shortcut" type="checkbox" defaultChecked />
																			<Form.Label htmlFor="email-shortcut" className="label-primary mb-1"></Form.Label>
																		</div>
																	</div>
																</div>
																<div className="d-flex align-items-top justify-content-between mt-3">
																	<div className="mail-notification-settings">
																		<p className="fs-14 mb-1 fw-semibold">New Mails</p>
																		<p className="fs-12 mb-0 text-muted">Notifications related to new mails received.</p>
																	</div>
																	<div>
																		<div className="custom-toggle-switch float-sm-end">
																			<input id="new-mails" type="checkbox" defaultChecked />
																			<Form.Label htmlFor="new-mails" className="label-primary mb-1"></Form.Label>
																		</div>
																	</div>
																</div>
																<div className="d-flex align-items-top justify-content-between mt-3">
																	<div className="mail-notification-settings">
																		<p className="fs-14 mb-1 fw-semibold">Mail Chat Messages</p>
																		<p className="fs-12 mb-0 text-muted">Any of new messages are received will be updated through notifications.</p>
																	</div>
																	<div>
																		<div className="custom-toggle-switch float-sm-end">
																			<input id="mail-chat-messages" type="checkbox" defaultChecked />
																			<Form.Label htmlFor="mail-chat-messages" className="label-primary mb-1"></Form.Label>
																		</div>
																	</div>
																</div>
															</Col>
														</div>
													</ListGroup.Item>
													<ListGroup.Item>
														<div className="row gx-5">
															<Col xl={5}>
																<p className="fs-16 mb-1 fw-semibold">Push Notifications</p>
																<p className="fs-12 mb-0 text-muted">Push notifications are recieved when you are online, you can customize them by enabling or disabling them.</p>
															</Col>
															<Col xl={7}>
																<div className="d-flex align-items-top justify-content-between mt-sm-0 mt-3">
																	<div className="mail-notification-settings">
																		<p className="fs-14 mb-1 fw-semibold">New Mails</p>
																		<p className="fs-12 mb-0 text-muted">Notifications related to new mails received.</p>
																	</div>
																	<div>
																		<div className="custom-toggle-switch float-sm-end">
																			<input id="push-new-mails" type="checkbox" defaultChecked />
																			<Form.Label htmlFor="push-new-mails" className="label-primary mb-1"></Form.Label>
																		</div>
																	</div>
																</div>
																<div className="d-flex align-items-top justify-content-between mt-3">
																	<div className="mail-notification-settings">
																		<p className="fs-14 mb-1 fw-semibold">Mail Chat Messages</p>
																		<p className="fs-12 mb-0 text-muted">Any of new messages are received will be updated through notifications.</p>
																	</div>
																	<div>
																		<div className="custom-toggle-switch float-sm-end">
																			<input id="push-mail-chat-messages" type="checkbox" defaultChecked />
																			<Form.Label htmlFor="push-mail-chat-messages" className="label-primary mb-1"></Form.Label>
																		</div>
																	</div>
																</div>
																<div className="d-flex align-items-top justify-content-between mt-3">
																	<div className="mail-notification-settings">
																		<p className="fs-14 mb-1 fw-semibold">Mail Extensions</p>
																		<p className="fs-12 mb-0 text-muted">Notifications related to the extensions received by new emails and thier propertied also been displayed.</p>
																	</div>
																	<div>
																		<div className="custom-toggle-switch float-sm-end">
																			<input id="mail-extensions" type="checkbox" />
																			<Form.Label htmlFor="mail-extensions" className="label-primary mb-1"></Form.Label>
																		</div>
																	</div>
																</div>
															</Col>
														</div>
													</ListGroup.Item>
												</ListGroup>
											</Tab.Pane>
											<Tab.Pane eventKey="fifth" className="text-muted p-0" id="security" role="tabpanel">
												<ul className="list-group list-group-flush list-unstyled">
													<ListGroup.Item>
														<div className="row gx-5">
															<Col xl={4}>
																<p className="fs-16 mb-1 fw-semibold">Logging In</p>
																<p className="fs-12 mb-0 text-muted">Security settings related to logging into our email account and taking down account if any mischevious action happended.</p>
															</Col>
															<div className="col-xl-8">
																<div className="d-sm-flex d-block align-items-top justify-content-between mt-sm-0 mt-3">
																	<div className="mail-security-settings">
																		<p className="fs-14 mb-1 fw-semibold">Max Limit for login attempts</p>
																		<p className="fs-12 mb-0 text-muted mb-3 mb-lg-0">Account will freeze for 24hrs while attempt to login with wrong credentials for selected number of times</p>
																	</div>
																	<div>
																		<Select name="colors" options={MaxLimitoptions} className="basic-multi-select"
																			menuPlacement='auto' classNamePrefix="Select2" defaultValue={[MaxLimitoptions[0]]}
																		/>
																	</div>
																</div>
																<div className="d-sm-flex d-block align-items-top justify-content-between mt-3">
																	<div>
																		<p className="fs-14 mb-1 fw-semibold">Account Freeze time management</p>
																		<p className="fs-12 mb-0 text-muted mb-3 mb-lg-0">You can change the time for the account freeze when attempts for </p>
																	</div>
																	<div className="ms-2">
																		<Select name="colors" options={Accountoptions} className="basic-multi-select"
																			menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Accountoptions[0]]}
																		/>
																	</div>
																</div>
															</div>
														</div>
													</ListGroup.Item>
													<ListGroup.Item>
														<div className="row gx-5">
															<Col xl={4}>
																<p className="fs-16 mb-1 fw-semibold">Password Requirements</p>
																<p className="fs-12 mb-0 text-muted">Security settings related to password strength.</p>
															</Col>
															<div className="col-xl-8">
																<div className="d-sm-flex d-block align-items-top justify-content-between mt-sm-0 mt-3">
																	<div className="mail-security-settings">
																		<p className="fs-14 mb-1 fw-semibold">Minimum number of characters in the password</p>
																		<p className="fs-12 mb-0 text-muted mb-3 mb-lg-0">There should be a minimum number of characters for a password to be validated that shouls be set here.</p>
																	</div>
																	<div>
																		<Form.Control type="text" className="form-control w-50 ms-auto" defaultValue="8" />
																	</div>
																</div>
																<div className="d-sm-flex d-block align-items-top justify-content-between mt-3">
																	<div>
																		<p className="fs-14 mb-1 fw-semibold">Contain A Number</p>
																		<p className="fs-12 mb-0 text-muted mb-3 mb-lg-0">Password should contain a number.</p>
																	</div>
																	<div>
																		<div className="custom-toggle-switch float-sm-end">
																			<input id="password-number" type="checkbox" />
																			<Form.Label htmlFor="password-number" className="label-primary mb-1"></Form.Label>
																		</div>
																	</div>
																</div>
																<div className="d-sm-flex d-block align-items-top justify-content-between mt-3">
																	<div>
																		<p className="fs-14 mb-1 fw-semibold">Contain A Special Character</p>
																		<p className="fs-12 mb-0 text-muted mb-3 mb-lg-0">Password should contain a special Character.</p>
																	</div>
																	<div>
																		<div className="custom-toggle-switch float-sm-end">
																			<input id="password-special-character" type="checkbox" defaultChecked />
																			<Form.Label htmlFor="password-special-character" className="label-primary mb-1"></Form.Label>
																		</div>
																	</div>
																</div>
																<div className="d-sm-flex d-block align-items-top justify-content-between mt-3">
																	<div>
																		<p className="fs-14 mb-1 fw-semibold">Atleast One Capital Letter</p>
																		<p className="fs-12 mb-0 text-muted mb-3 mb-lg-0">Password should contain atleast one capital letter.</p>
																	</div>
																	<div>
																		<div className="custom-toggle-switch float-sm-end">
																			<input id="password-capital" type="checkbox" defaultChecked />
																			<Form.Label htmlFor="password-capital" className="label-primary mb-1"></Form.Label>
																		</div>
																	</div>
																</div>
																<div className="d-sm-flex d-block align-items-top justify-content-between mt-3">
																	<div>
																		<p className="fs-14 mb-1 fw-semibold">Maximum Password Length</p>
																		<p className="fs-12 mb-0 text-muted mb-3 mb-lg-0">Maximum password lenth should be selected here.</p>
																	</div>
																	<div>
																		<Form.Control type="text" className="form-control w-50 ms-auto" defaultValue="16" />
																	</div>
																</div>
															</div>
														</div>
													</ListGroup.Item>
													<ListGroup.Item>
														<div className="row gx-5">
															<Col xl={4}>
																<p className="fs-16 mb-1 fw-semibold">Unknown Chats</p>
																<p className="fs-12 mb-0 text-muted mb-3 mb-lg-0">Security settings related to unknown chats.</p>
															</Col>
															<div className="col-xl-8">
																<div>
																	<div className="form-check">
																		<Form.Check className="" type="radio" name="unknown-messages-show" id="unknown-messages-show1" />
																		<Form.Label className="form-check-label" htmlFor="unknown-messages-show1">
																			Show
																		</Form.Label>
																	</div>
																	<div className="form-check">
																		<Form.Check className="" type="radio" name="unknown-messages-show" id="unknown-messages-hide2" defaultChecked />
																		<Form.Label className="form-check-label" htmlFor="unknown-messages-hide2">
																			Hide
																		</Form.Label>
																	</div>
																</div>
															</div>
														</div>
													</ListGroup.Item>
												</ul>
											</Tab.Pane>
											<Tab.Pane eventKey="sixth" className="p-sm-4 text-muted" id="account-settings" role="tabpanel">
												<Row className="gy-2">
													<Col xl={12}>
														<Card className="custom-card shadow-none mb-xl-0 border">
															<Card.Body>
																<div className="d-sm-flex d-block align-items-top mb-4 justify-content-between">
																	<div>
																		<p className="fs-14 mb-1 fw-semibold">Two Step Verification</p>
																		<p className="fs-12 text-muted mb-0">Two step verificatoin is very secured and restricts in happening faulty practices.</p>
																	</div>
																	<div className="custom-toggle-switch ms-sm-2 ms-0">
																		<input id="two-step" type="checkbox" defaultChecked />
																		<Form.Label htmlFor="two-step" className="label-primary mb-1"></Form.Label>
																	</div>
																</div>
																<div className="d-sm-flex d-block align-items-top mb-4 justify-content-between">
																	<div className="mb-2 mb-lg-0">
																		<p className="fs-14 mb-2 fw-semibold">Authentication</p>
																		<div className="mb-0">
																			<div className="btn-group mail-verification" role="group" aria-label="Basic radio toggle button group">
																				<input type="radio" className="btn-check" name="btnradio" id="btnradio1" defaultChecked />
																				<Form.Label className="btn btn-outline-primary d-sm-flex" htmlFor="btnradio1"><i className="ri-lock-unlock-line me-1 align-middle"></i>Pin</Form.Label>
																				<input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
																				<Form.Label className="btn btn-outline-primary d-sm-flex" htmlFor="btnradio2"><i className="ri-lock-password-line me-1 align-middle"></i>Password</Form.Label>
																				<input type="radio" className="btn-check" name="btnradio" id="btnradio3" />
																				<Form.Label className="btn btn-outline-primary d-sm-flex" htmlFor="btnradio3"><i className="ri-fingerprint-line me-1 align-middle"></i>Finger Print</Form.Label>
																			</div>
																		</div>
																	</div>
																	<div className="custom-toggle-switch ms-sm-2 ms-0">
																		<input id="authentication" type="checkbox" defaultChecked />
																		<Form.Label htmlFor="authentication" className="label-primary mb-1"></Form.Label>
																	</div>
																</div>
																<div className="d-sm-flex d-block align-items-top mb-4 justify-content-between">
																	<div>
																		<p className="fs-14 mb-1 fw-semibold">Recovery Mail</p>
																		<p className="fs-12 text-muted mb-0">Incase of forgetting password mails are sent to  heifo@gmail.com</p>
																	</div>
																	<div className="custom-toggle-switch ms-sm-2 ms-0">
																		<input id="recovery-mail" type="checkbox" defaultChecked />
																		<Form.Label htmlFor="recovery-mail" className="label-primary mb-1"></Form.Label>
																	</div>
																</div>
																<div className="d-sm-flex d-block align-items-top mb-4 justify-content-between">
																	<div>
																		<p className="fs-14 mb-1 fw-semibold">SMS Recovery</p>
																		<p className="fs-12 text-muted mb-0">SMS are sent to 9102312xx in case of recovery</p>
																	</div>
																	<div className="custom-toggle-switch ms-sm-2 ms-0">
																		<input id="sms-recovery" type="checkbox" defaultChecked />
																		<Form.Label htmlFor="sms-recovery" className="label-primary mb-1"></Form.Label>
																	</div>
																</div>
																<div className="d-flex align-items-top justify-content-between">
																	<div>
																		<p className="fs-14 mb-1 fw-semibold">Reset Password</p>
																		<p className="fs-12 text-muted">Password should be min of <b className="text-success">8 digits<sup>*</sup></b>,atleast <b className="text-success">One Capital letter<sup>*</sup></b> and <b className="text-success">One Special Character<sup>*</sup></b> included.</p>
																		<div className="mb-2">
																			<Form.Label htmlFor="current-password" className="form-label">Current Password</Form.Label>
																			<Form.Control type="text" className="" id="current-password" placeholder="Current Password" />
																		</div>
																		<div className="mb-2">
																			<Form.Label htmlFor="new-password" className="form-label">New Password</Form.Label>
																			<Form.Control type="text" className="" id="new-password" placeholder="New Password" />
																		</div>
																		<div className="mb-0">
																			<Form.Label htmlFor="confirm-password" className="form-label">Confirm Password</Form.Label>
																			<Form.Control type="text" className="" id="confirm-password" placeholder="Confirm Password" />
																		</div>
																	</div>
																</div>
															</Card.Body>
														</Card>
													</Col>
													<Col xl={12}>
														<Card className="custom-card shadow-none mb-0 border">
															<Card.Header className="justify-content-between d-sm-flex d-block">
																<Card.Title>Registered Devices</Card.Title>
																<div className="mt-sm-0 mt-2">
																	<Button variant='' type="button" className="btn btn-sm btn-primary m-1">Signout from all devices</Button>
																</div>
															</Card.Header>
															<Card.Body>
																<ListGroup>
																	<ListGroup.Item>
																		<div className="d-sm-flex d-block align-items-top">
																			<div className="lh-1"><i className="bi bi-phone me-2 fs-16 align-middle text-muted"></i></div>
																			<div className="lh-1 flex-fill">
																				<p className="mb-1">
																					<span className="fw-semibold">Mobile-LG-1023</span>
																				</p>
																				<p className="mb-0">
																					<span className="text-muted fs-11">Manchester, UK-Nov 30, 04:45PM</span>
																				</p>
																			</div>
																			<Dropdown className="mt-sm-0 mt-2">
																				<Dropdown.Toggle variant='' href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
																					<i className="fe fe-more-vertical"></i>
																				</Dropdown.Toggle>
																				<Dropdown.Menu>
																					<Dropdown.Item href="#!">Action</Dropdown.Item>
																					<Dropdown.Item href="#!">Another action</Dropdown.Item>
																					<Dropdown.Item href="#!">Something else here</Dropdown.Item>
																				</Dropdown.Menu>
																			</Dropdown>
																		</div>
																	</ListGroup.Item>
																	<ListGroup.Item>
																		<div className="d-sm-flex d-block align-items-top">
																			<div className="lh-1"><i className="bi bi-laptop me-2 fs-16 align-middle text-muted"></i></div>
																			<div className="lh-1 flex-fill">
																				<p className="mb-1">
																					<span className="fw-semibold">Lenovo-1291203</span>
																				</p>
																				<p className="mb-0">
																					<span className="text-muted fs-11">England, UK-Aug 12, 12:25PM</span>
																				</p>
																			</div>
																			<Dropdown className="mt-sm-0 mt-2">
																				<Dropdown.Toggle variant='' href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
																					<i className="fe fe-more-vertical"></i>
																				</Dropdown.Toggle>
																				<Dropdown.Menu>
																					<Dropdown.Item href="#!">Action</Dropdown.Item>
																					<Dropdown.Item href="#!">Another action</Dropdown.Item>
																					<Dropdown.Item href="#!">Something else here</Dropdown.Item>
																				</Dropdown.Menu>
																			</Dropdown>
																		</div>
																	</ListGroup.Item>
																	<ListGroup.Item>
																		<div className="d-sm-flex d-block align-items-top">
																			<div className="lh-1"><i className="bi bi-laptop me-2 fs-16 align-middle text-muted"></i></div>
																			<div className="lh-1 flex-fill">
																				<p className="mb-1">
																					<span className="fw-semibold">Macbook-Suzika</span>
																				</p>
																				<p className="mb-0">
																					<span className="text-muted fs-11">Brightoon, UK-Jul 18, 8:34AM</span>
																				</p>
																			</div>
																			<Dropdown className="mt-sm-0 mt-2">
																				<Dropdown.Toggle variant='' href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
																					<i className="fe fe-more-vertical"></i>
																				</Dropdown.Toggle>
																				<Dropdown.Menu>
																					<Dropdown.Item href="#!">Action</Dropdown.Item>
																					<Dropdown.Item href="#!">Another action</Dropdown.Item>
																					<Dropdown.Item href="#!">Something else here</Dropdown.Item>
																				</Dropdown.Menu>
																			</Dropdown>
																		</div>
																	</ListGroup.Item>
																	<ListGroup.Item>
																		<div className="d-sm-flex d-block align-items-top">
																			<div className="lh-1"><i className="bi bi-pc-display-horizontal me-2 fs-16 align-middle text-muted"></i></div>
																			<div className="lh-1 flex-fill">
																				<p className="mb-1">
																					<span className="fw-semibold">Apple-Desktop</span>
																				</p>
																				<p className="mb-0">
																					<span className="text-muted fs-11">Darlington, UK-Jan 14, 11:14AM</span>
																				</p>
																			</div>
																			<Dropdown className="mt-sm-0 mt-2">
																				<Dropdown.Toggle variant='' href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
																					<i className="fe fe-more-vertical"></i>
																				</Dropdown.Toggle>
																				<Dropdown.Menu>
																					<Dropdown.Item href="#!">Action</Dropdown.Item>
																					<Dropdown.Item href="#!">Another action</Dropdown.Item>
																					<Dropdown.Item href="#!">Something else here</Dropdown.Item>
																				</Dropdown.Menu>
																			</Dropdown>
																		</div>
																	</ListGroup.Item>
																</ListGroup>
															</Card.Body>
														</Card>
													</Col>
												</Row>
											</Tab.Pane>
										</Tab.Content>
									</Col>
								</Tab.Container>
							</Row>
						</Card.Body>
						<Card.Footer>
							<div className="float-end">
								<Button variant="" className="btn btn-light m-1">
									Set to Default
								</Button>
								<Button variant="primary" className="btn m-1">
									Save Changes
								</Button>
							</div>
						</Card.Footer>
					</Card>
				</Col>
			</div>
		</Fragment>
	);
};

export default MailSettings;
