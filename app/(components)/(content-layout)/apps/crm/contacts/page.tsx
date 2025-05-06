"use client";
import React, { Fragment, useRef, useState } from 'react';
import { Button, Card, Col, Dropdown, Form, InputGroup, Modal, Offcanvas, OverlayTrigger, Pagination, Row, Table, Tooltip } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Data, Data1, Loopingdata } from '@/shared/data/apps/crm/contactsdata';
import Seo from '@/shared/layout-components/seo/seo';
const Select = dynamic(() => import('react-select'), { ssr: false });

const Contacts = () => {

    const [startDate1, setStartDate1] = useState(new Date());
    const [show1, setShow1] = useState(false);
    const fileInputRef: any = useRef(null);
    const [selectedImage, setSelectedImage] = useState("../../../assets/images/faces/9.jpg");

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [, setStartDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Delete function
    const [manageInvoiceData, setManageInvoiceData] = useState([...Loopingdata]);
    const handleDelete = (idToRemove: string) => {
        const updatedInvoiceData = manageInvoiceData.filter((item) => item.id !== idToRemove);
        setManageInvoiceData(updatedInvoiceData);
    };
    const openFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const handleImageChange = (e: any) => {

        const selectedFile = e.target.files && e.target.files[0];
        if (selectedFile) {
            // You can handle the file here, for example, upload it to a server.
            const reader = new FileReader();
            reader.onload = (event: any) => {
                setSelectedImage(event.target?.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    //Datepicker function
    const handleDateChange = (date: React.SetStateAction<Date>) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };

    return (
        <Fragment>
            <Seo title={"Contacts"} />
            <Row >
                <Col xl={12}>
                    <Card className="overflow-hidden custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header className="card-header d-flex align-items-center justify-content-between flex-wrap gap-3 pb-3 border-bottom">
                            <Card.Title>
                                Contacts<span className="badge bg-light text-default rounded ms-1 fs-12 align-middle">28</span>
                            </Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <Button variant='primary' className="btn  btn-sm" onClick={handleShow1}
                                    data-bs-target="#create-contact"><i className="ri-add-line me-1 fw-semibold align-middle"></i>Create Contact</Button>
                                <Button variant='success-light' className="btn  btn-sm">Export As CSV</Button>
                                <Dropdown>
                                    <Dropdown.Toggle variant='light' className="btn btn-light btn-sm btn-wave waves-effect waves-light no-caret">
                                        Sort By
                                        <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul">
                                        <Dropdown.Item as="li" href="#!">Newest</Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!">Date Added</Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!">A - Z</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <Table className=" text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                <Form.Check type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                                            </th>
                                            <th scope="col">Contact Name</th>
                                            <th scope="col">Lead Score</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Company</th>
                                            <th scope="col">Lead Source</th>
                                            <th scope="col">Tags</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {manageInvoiceData.map((idx) => (
                                            <tr className="crm-contact" key={Math.random()}>
                                                <td>
                                                    <Form.Check id={idx.id} className="" type="checkbox" value="" aria-label="..." />
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-rounded avatar-sm">
                                                                <img src={idx.src1} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <Link onClick={handleShow} data-bs-toggle="offcanvas" href="#offcanvasExample"
                                                                role="button" aria-controls="offcanvasExample"><span className="d-block fw-semibold">{idx.name}</span></Link>
                                                            <div className="btn-list float-end">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-primary'>Last Contacted</Tooltip>}>
                                                                    <span className="d-block text-muted fs-11" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" title="Last Contacted"><i className="ri-time-line me-1 align-middle"></i>{idx.time}</span></OverlayTrigger>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {idx.score}
                                                </td>
                                                <td>
                                                    <div>
                                                        <span className="d-block mb-1"><i className="ri-mail-line me-2 align-middle fs-14 text-muted"></i>{idx.mail}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <span className="d-block"><i className="ri-phone-line me-2 align-middle fs-14 text-muted"></i>{idx.cell}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-sm p-1 bg-light avatar-rounded">
                                                                <img src={idx.src2} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>{idx.text1}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {idx.text2}
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center flex-wrap gap-1">
                                                        <span className={`badge bg-${idx.color1}-transparent ${idx.class1}`}>{idx.text3}</span>
                                                        <span className={`badge bg-${idx.color2}-transparent ${idx.class2}`}>{idx.text4}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="btn-list">
                                                        <Button variant='warning-light' data-bs-toggle="offcanvas" href="#offcanvasExample" onClick={handleShow}
                                                            role="button" aria-controls="offcanvasExample" className="btn btn-sm btn-icon"><i className="ri-eye-line"></i></Button>
                                                        <Button variant='' className="btn btn-sm btn-info-light btn-icon"><i className="ri-pencil-line"></i></Button>
                                                        <Button variant='' className="btn btn-sm btn-danger-light btn-icon contact-delete"
                                                            onClick={() => handleDelete(idx.id)}
                                                        >
                                                            <i className="ri-delete-bin-line"></i></Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                        <Card.Footer className="border-top-0">
                            <div className="d-flex align-items-center">
                                <div>
                                    Showing 10 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <Pagination className="pagination mb-0">
                                            <Pagination.Item disabled href="#!"> Prev </Pagination.Item>
                                            <Pagination.Item active href="#!">1</Pagination.Item>
                                            <Pagination.Item href="#!">2</Pagination.Item>
                                            <Pagination.Item className="pagination-next" href="#!">next</Pagination.Item>
                                        </Pagination>
                                    </nav>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Offcanvas show={show} onHide={handleClose} placement='end' className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasExample"
                aria-labelledby="offcanvasExample">
                <Offcanvas.Body className="offcanvas-body p-0">
                    <div className="d-sm-flex align-items-top p-4 border-bottom border-block-end-dashed main-profile-cover">
                        <div>
                            <span className="avatar avatar-xxl avatar-rounded online me-3">
                                <img src="../../../assets/images/faces/4.jpg" alt="" />
                            </span>
                        </div>
                        <div className="flex-fill main-profile-info">
                            <div className="d-flex align-items-center justify-content-between">
                                <h6 className="fw-semibold mb-1 text-fixed-white">Lisa Convay</h6>
                                <Button variant='' className="btn-close crm-contact-close-btn"
                                    onClick={handleClose}
                                    data-bs-dismiss="offcanvas" aria-label="Close"></Button>
                            </div>
                            <p className="mb-1 text-muted text-fixed-white op-7">Chief Executive Officer (C.E.O)</p>
                            <p className="fs-12 text-fixed-white mb-4 op-5">
                                <span className="me-3"><i className="ri-building-line me-1 align-middle"></i>Georgia</span>
                                <span><i className="ri-map-pin-line me-1 align-middle"></i>Washington D.C</span>
                            </p>
                            <div className="d-flex mb-0">
                                <div className="me-4">
                                    <p className="fw-bold fs-20 text-fixed-white text-shadow mb-0">113</p>
                                    <p className="mb-0 fs-11 op-5 text-fixed-white">Deals</p>
                                </div>
                                <div className="me-4">
                                    <p className="fw-bold fs-20 text-fixed-white text-shadow mb-0">$12.2k</p>
                                    <p className="mb-0 fs-11 op-5 text-fixed-white">Contributions</p>
                                </div>
                                <div className="me-4">
                                    <p className="fw-bold fs-20 text-fixed-white text-shadow mb-0">$10.67k</p>
                                    <p className="mb-0 fs-11 op-5 text-fixed-white">Comitted</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 border-bottom border-block-end-dashed">
                        <div className="mb-0">
                            <p className="fs-15 mb-2 fw-semibold">Professional Bio :</p>
                            <p className="text-muted op-8 mb-0">
                                I am <b className="text-default">Alison Lisa,</b>  a seasoned entrepreneur with over two decades of experience in the tech industry. Currently, I serve as the CEO and founder of InnovateX Solutions, a cutting-edge software development firm specializing in AI-driven solutions for businesses worldwide.
                            </p>
                        </div>
                    </div>
                    <div className="p-4 border-bottom border-block-end-dashed">
                        <p className="fs-14 mb-2 me-4 fw-semibold">Contact Information :</p>
                        <div className="">
                            <div className="d-flex align-items-center mb-2">
                                <div className="me-2">
                                    <span className="avatar avatar-sm avatar-rounded bg-light text-muted">
                                        <i className="ri-mail-line align-middle fs-14"></i>
                                    </span>
                                </div>
                                <div>
                                    sonyataylor2531@gmail.com
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <div className="me-2">
                                    <span className="avatar avatar-sm avatar-rounded bg-light text-muted">
                                        <i className="ri-phone-line align-middle fs-14"></i>
                                    </span>
                                </div>
                                <div>
                                    +(555) 555-1234
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-0">
                                <div className="me-2">
                                    <span className="avatar avatar-sm avatar-rounded bg-light text-muted">
                                        <i className="ri-map-pin-line align-middle fs-14"></i>
                                    </span>
                                </div>
                                <div>
                                    MIG-1-11, Monroe Street, Georgetown, Washington D.C, USA,20071
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 border-bottom border-block-end-dashed d-sm-flex align-items-center">
                        <p className="fs-14 mb-0 me-4 fw-semibold">Social Networks :</p>
                        <div className="btn-list mb-0">
                            <Button variant='' className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light mb-0">
                                <i className="ri-facebook-line fw-semibold"></i>
                            </Button>
                            <Button variant='' className="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light mb-0">
                                <i className="ri-twitter-x-line fw-semibold"></i>
                            </Button>
                            <Button variant='' className="btn btn-sm btn-icon btn-warning-light btn-wave waves-effect waves-light mb-0">
                                <i className="ri-instagram-line fw-semibold"></i>
                            </Button>
                            <Button variant='' className="btn btn-sm btn-icon btn-success-light btn-wave waves-effect waves-light mb-0">
                                <i className="ri-github-line fw-semibold"></i>
                            </Button>
                            <Button variant='' className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light mb-0">
                                <i className="ri-youtube-line fw-semibold"></i>
                            </Button>
                        </div>
                    </div>
                    <div className="p-4 border-bottom border-block-end-dashed">
                        <p className="fs-14 mb-2 me-4 fw-semibold">Tags :</p>
                        <div>
                            <span className="badge bg-light text-muted m-1">New Lead</span>
                            <span className="badge bg-light text-muted m-1">Others</span>
                        </div>
                    </div>
                    <div className="p-4">
                        <p className="fs-14 mb-2 fw-semibold">Relationship Manager :
                            <Link className="fs-14 text-primary mb-0 float-end" href="#!" scroll={false}><i className="ri-add-line me-1 align-middle"></i>Add Manager</Link>
                        </p>
                        <div className="avatar-list-stacked">
                            <span className="avatar">
                                <img src="../../../assets/images/faces/2.jpg" alt="img" />
                            </span>
                            <span className="avatar">
                                <img src="../../../assets/images/faces/8.jpg" alt="img" />
                            </span>
                            <span className="avatar">
                                <img src="../../../assets/images/faces/2.jpg" alt="img" />
                            </span>
                            <span className="avatar">
                                <img src="../../../assets/images/faces/10.jpg" alt="img" />
                            </span>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
            <Modal show={show1} onHide={handleClose1} className="modal fade" id="create-contact" tabIndex={-1} aria-hidden="true">
                <div className="">
                    <div className="modal-content">
                        <Modal.Header closeButton className="">
                            <h6 className="modal-title">Create Contact</h6>
                        </Modal.Header>
                        <Modal.Body className="px-4">
                            <div className="row gy-3">
                                <Col xl={12}>
                                    <div className="mb-0 text-center">
                                        <span className="avatar avatar-xxl avatar-rounded">
                                            <img src={selectedImage || ''} alt="" id="profile-img" />
                                            <span className="badge rounded-pill bg-primary avatar-badge" onClick={openFileInput}>
                                                <input
                                                    type="file"
                                                    name="photo"
                                                    className="position-absolute w-100 h-100 op-0"
                                                    id="profile-change"
                                                    ref={fileInputRef}
                                                    onChange={handleImageChange}
                                                    style={{ display: 'none' }}
                                                />
                                                <i className="fe fe-camera"></i>
                                            </span>
                                        </span>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="deal-title">Deal Title</Form.Label>
                                    <Form.Control type="text" id="deal-title" placeholder="Deal Title" />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="contact-lead-score">Lead Score</Form.Label>
                                    <Form.Control type="number" id="contact-lead-score" placeholder="Lead Score" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label htmlFor="contact-mail">Email</Form.Label>
                                    <Form.Control type="email" id="contact-mail" placeholder="Enter Email" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label htmlFor="contact-phone">Phone No</Form.Label>
                                    <Form.Control type="tel" id="contact-phone" pattern="[0-9]*"
                                        placeholder="Enter Phone Number" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label htmlFor="company-name">Company Name</Form.Label>
                                    <Form.Control type="text" id="company-name" placeholder="Company Name" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label>Lead Source</Form.Label>
                                    <Select name="colors" options={Data1} className="basic-multi-select"
                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Data1[0]]}
                                    />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label>Last Contacted</Form.Label>
                                    <div className="form-group">
                                        <InputGroup>
                                            <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </InputGroup.Text>
                                            <DatePicker className="form-control flatpickr-input" showIcon selected={startDate1} onChange={handleDateChange} />
                                        </InputGroup>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <Form.Label>Tags</Form.Label>
                                    <Select isMulti name="colors" options={Data} className="basic-multi-select"
                                        menuPlacement='auto' classNamePrefix="Select2" placeholder="Select Tag"
                                    />
                                </Col>
                            </div>
                        </Modal.Body>
                        <div className="modal-footer">
                            <Button onClick={() => handleClose1()} variant='' type="button" className="btn btn-light"
                            >Cancel</Button>
                            <Button variant='' type="button" className="btn btn-primary">Create Contact</Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </Fragment>
    );
};

export default Contacts;
