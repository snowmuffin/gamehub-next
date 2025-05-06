"use client";
import { Selectdata, Selectdata1 } from "@/shared/data/pages/profilesettingsdata";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { ChangeEvent, Fragment, useRef, useState } from "react";
import { Button, Card, Col, Form, Nav, Row, Tab } from "react-bootstrap";
import Select from 'react-select';

const ProfileSettings = () => {

    const [selectedImage, setSelectedImage] = useState<string | null>("../../assets/images/faces/22.jpg");
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
            <Seo title={"Profile-Settings"} />
            <Row className="justify-content-center">
                <Col xl={9}>
                    <div className="mb-4">
                        <h5 className="fw-medium mb-0">Profile Settings</h5>
                        <div className="text-muted fs-13 op-8 mb-3">
                            Update your profile settings
                        </div>
                    </div>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body>
                            <div className="row mt-4 justify-content-center">
                                <Tab.Container defaultActiveKey="profile">
                                    <div className="col-md-3">
                                        <Nav className="flex-column nav-pills me-3 tab-style-7" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                            <h6 className="fw-medium mb-3 text-info  fs-12 pb-1 d-inline-block">
                                                GENERAL
                                            </h6>
                                            <Nav.Item>
                                                <Nav.Link eventKey="profile" className="text-start" id="main-profile-tab" data-bs-toggle="pill" data-bs-target="#main-profile" type="button" role="tab" aria-controls="main-profile" aria-selected="true"><i className="ri-user-settings-line me-2 align-middle d-inline-block"></i>Profile Info</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="password" className="text-start" id="man-password-tab" data-bs-toggle="pill" data-bs-target="#man-password" type="button" role="tab" aria-controls="man-password" aria-selected="false" tabIndex={-1}><i className="ri-key-fill me-2 align-middle d-inline-block"></i>Change Password</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="security" className="text-start" id="main-security-tab" data-bs-toggle="pill" data-bs-target="#main-security" type="button" role="tab" aria-controls="main-security" aria-selected="false" tabIndex={-1}><i className="ri-lock-2-line me-2 align-center d-inline-block"></i>Security</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="contacts" className="text-start" id="main-contacts-tab" data-bs-toggle="pill" data-bs-target="#main-contacts" type="button" role="tab" aria-controls="main-contacts" aria-selected="false" tabIndex={-1}><i className="ri-contacts-book-2-line me-2 align-middle d-inline-block"></i>Contacts</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="users" className="text-start" id="main-permissions-tab" data-bs-toggle="pill" data-bs-target="#main-permissions" type="button" role="tab" aria-controls="main-permissions" aria-selected="false"><i className="ri-door-lock-line me-2 align-middle d-inline-block"></i>Users and Permissions</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="notify" className="text-start" id="main-notifications-tab" data-bs-toggle="pill" data-bs-target="#main-notifications" type="button" role="tab" aria-controls="main-notifications" aria-selected="false" tabIndex={-1}><i className="ri-notification-3-line me-2 align-center d-inline-block"></i>Notifications</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                    <Col md={9}>
                                        <Tab.Content className="" id="v-pills-tabContent">
                                            <Tab.Pane eventKey="profile" id="main-profile" role="tabpanel" tabIndex={0} aria-labelledby="main-profile-tab">
                                                <div className="mb-4 d-sm-flex align-items-center gap-1 flex-wrap">
                                                    <span className="mb-0 me-3 avatar avatar-xxl">
                                                        <img src={selectedImage || ""} alt="" id="profile-img" />
                                                        <span className="badge bg-primary avatar-badge cursor-pointer" onClick={openFileInput}>
                                                            <Form.Control type="file"
                                                                name="photo"
                                                                id="profile-change"
                                                                ref={fileInputRef}
                                                                onChange={handleImageChange}
                                                                style={{ display: "none" }} className="position-absolute w-100 op-0 profile-change" />
                                                            <i className="fe fe-camera"></i>
                                                        </span>
                                                    </span>
                                                    <div>
                                                        <div className="fw-medium lh-1"> Anthony Richel</div>
                                                        <div className="fs-12 text-muted">@anthonyrich144</div>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <div className="d-flex gap-2">
                                                            <div className="upload-btn-wrapper">
                                                                <Button variant="" className="btn btn-primary-light"><i className="fe fe-upload me-2 d-inline-block" onClick={openFileInput}></i>Upload Photo</Button>
                                                                <Form.Control type="file"
                                                                    id="profile-change"
                                                                    ref={fileInputRef}
                                                                    onChange={handleImageChange}
                                                                    style={{ display: "none" }} className="profile-change" name="myfile" />
                                                            </div>
                                                            <Button variant="" className="btn btn-danger-light"><i className="fe fe-x me-2 d-inline-block"></i>Delete Photo</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row gy-4 mb-4">
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="first-name" className="">First Name :</Form.Label>
                                                        <Form.Control type="text" className="" id="first-name" placeholder="First Name" />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="last-name" className="">Last Name :</Form.Label>
                                                        <Form.Control type="text" className="" id="last-name" placeholder="Last Name" />
                                                    </Col>
                                                    <Col xl={12}>
                                                        <Form.Label htmlFor="user-name" className="">User Name :</Form.Label>
                                                        <Form.Control type="text" className="" id="user-name" placeholder="Anthony Richel" />
                                                    </Col>
                                                </div>
                                                <div className="row mb-4">
                                                    <h6 className="fw-medium mb-3">
                                                        About Information :
                                                    </h6>
                                                    <Col xl={12} className=" mb-4">
                                                        <Form.Label htmlFor="about" className="">Bio :</Form.Label>
                                                        <Form.Control as="textarea" className="" id="about" rows={5} defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit impedit, officiis non minima saepe voluptates a magnam enim sequi porro veniam ea suscipit dolorum vel mollitia voluptate iste nemo!" />
                                                    </Col>
                                                    <Col xl={12} className=" mb-4">
                                                        <Form.Label htmlFor="language" className="">Language :</Form.Label>
                                                        <Select isMulti name="colors" options={Selectdata1} className="basic-multi-select"
                                                            menuPlacement='auto' classNamePrefix="Select2" defaultValue={Selectdata1[0]}
                                                        />
                                                    </Col>
                                                    <Col xl={12} className="">
                                                        <Form.Label className="">Country :</Form.Label>
                                                        <Select name="colors" options={Selectdata} className="basic-multi-select" placeholder="Usa"
                                                            menuPlacement='auto' classNamePrefix="Select2"
                                                        />
                                                    </Col>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="password" id="man-password" role="tabpanel" tabIndex={0} aria-labelledby="man-password-tab">
                                                <div>
                                                    <p className="fs-12 text-muted"><i className="ri-information-line me-2 align-middle d-inline-block text-info"></i>Password should be min of <b className="text-success">8 digits<sup>*</sup></b>,atleast <b className="text-success">One Capital letter<sup>*</sup></b> and <b className="text-success">One Special Character<sup>*</sup></b> included.</p>
                                                    <div className="mb-2">
                                                        <Form.Label htmlFor="current-password" className="">Current Password</Form.Label>
                                                        <Form.Control type="password" className="" id="current-password" placeholder="Current Password" />
                                                    </div>
                                                    <div className="mb-2">
                                                        <Form.Label htmlFor="new-password" className="">New Password</Form.Label>
                                                        <Form.Control type="password" className="" id="new-password" placeholder="New Password" />
                                                    </div>
                                                    <div className="mb-4">
                                                        <Form.Label htmlFor="confirm-password" className="">Confirm Password</Form.Label>
                                                        <Form.Control type="password" className="" id="confirm-password" placeholder="Confirm PAssword" />
                                                    </div>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-primary">Change Password</Button>
                                                        <Button variant="" className="btn btn-primary-light">Cancel</Button>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="security" id="main-security" role="tabpanel" aria-labelledby="main-security-tab" tabIndex={0}>
                                                <div className="d-sm-flex d-block align-items-top mb-4 justify-content-between px-2">
                                                    <div>
                                                        <p className="fs-14 mb-1 fw-medium">Authenticator</p>
                                                        <p className="fs-12 text-muted mb-0">Authentication through apps</p>
                                                    </div>
                                                    <Link className="text-primary fw-semibold fs-13 text-decoration-underline" href="#!" scroll={false}>
                                                        Setup Now
                                                    </Link>
                                                </div>
                                                <div className="d-sm-flex d-block align-items-top mb-4 justify-content-between px-2">
                                                    <div>
                                                        <p className="fs-14 mb-1 fw-medium">Two-Factor Authentication</p>
                                                        <p className="fs-12 text-muted mb-0">Enable authentication to verify that is you.</p>
                                                    </div>
                                                    <div className="custom-toggle-switch ms-sm-2 ms-0">
                                                        <Form.Control id="two-step-01" name="toggleswitchsize" type="checkbox" />
                                                        <Form.Label htmlFor="two-step-01" className="label-primary mb-1"></Form.Label>
                                                    </div>
                                                </div>
                                                <div className="d-sm-flex d-block align-items-center mb-4 justify-content-between px-2">
                                                    <div>
                                                        <p className="fs-14 mb-1 fw-medium">Deactive account</p>
                                                        <p className="fs-12 text-muted mb-0">The account will remain deactivated until you reactivate it by signing in.</p>
                                                    </div>
                                                    <Link className="btn btn-outline-info fw-semibold fs-13" href="#!" scroll={false}>
                                                        Deactivate
                                                    </Link>
                                                </div>
                                                <div className="d-sm-flex d-block align-items-center mb-4 justify-content-between px-2">
                                                    <div>
                                                        <p className="fs-14 mb-1 fw-medium">Remove account</p>
                                                        <p className="fs-12 text-muted mb-0">If you remove this, the account will no longer be visible.</p>
                                                    </div>
                                                    <Link className="btn btn-outline-danger fw-semibold fs-13" href="#!" scroll={false}>
                                                        Remove
                                                    </Link>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="contacts" id="main-contacts" role="tabpanel" aria-labelledby="main-contacts-tab" tabIndex={0}>
                                                <Form.Label htmlFor="phone-number" className="">Phone Number :</Form.Label>
                                                <div className="d-flex gap-2 align-items-end flex-wrap">
                                                    <div className="flex-grow-1">
                                                        <div className="input-group">
                                                            <span className="input-group-text bg-primary-transparent" id="basic-addon1"><i className="ri-phone-line align-middle"></i></span>
                                                            <Form.Control type="number" className="" id="phone-number" placeholder="1100 110 011" />
                                                        </div>
                                                    </div>
                                                    <div className="btn btn-primary-light"><i className="ri-add-line me-2 d-inline-block"></i>Add Another Number</div>
                                                </div>
                                                <Form.Label htmlFor="mail-address1" className="form-label mt-4">Email Address :</Form.Label>
                                                <div className="d-flex gap-2 align-items-end flex-wrap">
                                                    <div className="flex-grow-1">
                                                        <div className="input-group">
                                                            <span className="input-group-text bg-primary-transparent" id="basic-addon2"><i className="ri-mail-line align-middle"></i></span>
                                                            <Form.Control type="text" className="" id="mail-address1" placeholder="xyz@gmail.com" />
                                                        </div>
                                                    </div>
                                                    <div className="btn btn-primary-light"><i className="ri-add-line me-2 d-inline-block"></i>Add Another Address</div>
                                                </div>
                                                <div className="mt-4">
                                                    <Form.Label htmlFor="location" className="">Location :</Form.Label>
                                                    <Form.Control as="textarea" className="" id="location" rows={2} defaultValue="H.No: 154-14/A , XYZ Street, New Town,London -512151" />
                                                </div>
                                                <div className="mt-4">
                                                    <Form.Label htmlFor="links" className="">Links :</Form.Label>
                                                    <Form.Control type="email" className="" id="links" placeholder="http://www.newsite.com" />
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="users" id="main-permissions" role="tabpanel" aria-labelledby="main-permissions-tab" tabIndex={0}>
                                                <div className="d-sm-flex d-block align-items-top mb-4 justify-content-between px-2">
                                                    <div>
                                                        <p className="fs-14 mb-1 fw-medium">Search Privacy</p>
                                                        <p className="fs-12 text-muted mb-0">Hide your profile from searches.</p>
                                                    </div>
                                                    <div className="custom-toggle-switch ms-sm-2 ms-0">
                                                        <Form.Control id="two-step-02" name="toggleswitchsize" type="checkbox" defaultChecked />
                                                        <Form.Label htmlFor="two-step-02" className="label-primary mb-1"></Form.Label>
                                                    </div>
                                                </div>
                                                <div className="d-sm-flex d-block align-items-top mb-4 justify-content-between px-2">
                                                    <div>
                                                        <p className="fs-14 mb-1 fw-medium">Personalized Ads</p>
                                                        <p className="fs-12 text-muted mb-0">Ads show based on your interest only</p>
                                                    </div>
                                                    <div className="custom-toggle-switch ms-sm-2 ms-0">
                                                        <Form.Control id="two-step-03" name="toggleswitchsize" type="checkbox" defaultChecked />
                                                        <Form.Label htmlFor="two-step-03" className="label-primary mb-1"></Form.Label>
                                                    </div>
                                                </div>
                                                <div className="d-sm-flex d-block align-items-top mb-4 justify-content-between px-2">
                                                    <div>
                                                        <p className="fs-14 mb-1 fw-medium">Clear Cache</p>
                                                        <p className="fs-12 text-muted mb-0">Remove all data in the cache</p>
                                                    </div>
                                                    <div className="custom-toggle-switch ms-sm-2 ms-0">
                                                        <Form.Control id="two-step-04" name="toggleswitchsize" type="checkbox" defaultChecked />
                                                        <Form.Label htmlFor="two-step-04" className="label-primary mb-1"></Form.Label>
                                                    </div>
                                                </div>
                                                <h6 className="mb-4">Accessibilty :</h6>
                                                <div className="form-check d-flex ps-2 pe-3 gap-2 align-items-center">
                                                    <Form.Label className="form-check-label fs-14" htmlFor="access-open1">
                                                        Private
                                                        <span className="fs-12 text-muted mb-0"> Only people you know can access or view your profile.</span>
                                                    </Form.Label>
                                                    <input className="form-check-input ms-auto" type="radio" name="access-open" id="access-open1" />
                                                </div>
                                                <div className="form-check d-flex ps-2 pe-3 gap-2 align-items-center mt-3">
                                                    <Form.Label className="form-check-label fs-14" htmlFor="access-hide2">
                                                        Public
                                                        <span className="fs-12 text-muted mb-0">Anyone can access or view your profile.</span>
                                                    </Form.Label>
                                                    <input className="form-check-input ms-auto" type="radio" name="access-open" id="access-hide2" defaultChecked />
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="notify" id="main-notifications" role="tabpanel" aria-labelledby="main-notifications-tab" tabIndex={0}>
                                                <h6 className="mb-4">Email Notifications :</h6>
                                                <div className="d-sm-flex d-block align-items-top mb-4 justify-content-between px-2">
                                                    <div>
                                                        <p className="fs-14 mb-1 fw-medium">Comments</p>
                                                        <p className="fs-12 text-muted mb-0">You will receive notifications when someone comments on your post.</p>
                                                    </div>
                                                    <div className="custom-toggle-switch ms-sm-2 ms-0">
                                                        <Form.Control id="email-comments" name="toggleswitchsize" type="checkbox" defaultChecked />
                                                        <Form.Label htmlFor="email-comments" className="label-primary mb-1"></Form.Label>
                                                    </div>
                                                </div>
                                                <div className="d-sm-flex d-block align-items-top mb-4 justify-content-between px-2">
                                                    <div>
                                                        <p className="fs-14 mb-1 fw-medium">News and Updates</p>
                                                        <p className="fs-12 text-muted mb-0">You will receive notifications for news and any updates.</p>
                                                    </div>
                                                    <div className="custom-toggle-switch ms-sm-2 ms-0">
                                                        <Form.Control id="email-update" name="toggleswitchsize" type="checkbox" />
                                                        <Form.Label htmlFor="email-update" className="label-primary mb-1"></Form.Label>
                                                    </div>
                                                </div>
                                                <div className="d-sm-flex d-block align-items-top mb-4 justify-content-between px-2">
                                                    <div>
                                                        <p className="fs-14 mb-1 fw-medium">Remaiders</p>
                                                        <p className="fs-12 text-muted mb-0">This will enable when the notification is pushed on your device</p>
                                                    </div>
                                                    <div className="custom-toggle-switch ms-sm-2 ms-0">
                                                        <Form.Control id="email-notify" name="toggleswitchsize" type="checkbox" defaultChecked />
                                                        <Form.Label htmlFor="email-notify" className="label-primary mb-1"></Form.Label>
                                                    </div>
                                                </div>
                                                <h6 className="mb-4">Push Notifications :</h6>
                                                <div className="d-sm-flex d-block align-items-top mb-4 justify-content-between px-2">
                                                    <div>
                                                        <p className="fs-14 mb-1 fw-medium">Comments</p>
                                                        <p className="fs-12 text-muted mb-0">You will receive notifications when someone comments on your post.</p>
                                                    </div>
                                                    <div className="custom-toggle-switch ms-sm-2 ms-0">
                                                        <Form.Control id="push-comments" name="toggleswitchsize" type="checkbox" defaultChecked />
                                                        <Form.Label htmlFor="push-comments" className="label-primary mb-1"></Form.Label>
                                                    </div>
                                                </div>
                                                <div className="d-sm-flex d-block align-items-top mb-4 justify-content-between px-2">
                                                    <div>
                                                        <p className="fs-14 mb-1 fw-medium">Remaiders</p>
                                                        <p className="fs-12 text-muted mb-0">You will receive notifications for remainders.</p>
                                                    </div>
                                                    <div className="custom-toggle-switch ms-sm-2 ms-0">
                                                        <Form.Control id="push-update" name="toggleswitchsize" type="checkbox" />
                                                        <Form.Label htmlFor="push-update" className="label-primary mb-1"></Form.Label>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Tab.Container>

                            </div>
                        </Card.Body>
                        <Card.Footer className="text-end">
                            <div className="btn-list">
                                <Button variant="" className="btn btn-primary">Save Changes</Button>
                                <Button variant="" className="btn btn-primary-light">Cancel</Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default ProfileSettings;
