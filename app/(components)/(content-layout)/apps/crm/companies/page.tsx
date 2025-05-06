"use client";
import React, { Fragment, useRef, useState } from 'react';
import { Card, Badge, Button, Dropdown, Form, Row, Col, Modal, Offcanvas } from 'react-bootstrap';
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });
import Link from 'next/link';
import { Companydata, Selectdata1, Selectdata2 } from '@/shared/data/apps/crm/companiesdata';
import Seo from '@/shared/layout-components/seo/seo';

const Companies = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    //Delete Function
    const [Data, setData] = useState(Companydata);
    function handleDelete(id: string) {
        const updatedInvoiceData = Data.filter((idx) => idx.id !== id);
        setData(updatedInvoiceData);
    }
    const [selectedImage, setSelectedImage] = useState("../../../assets/images/company-logos/4.png");
    const fileInputRef: any = useRef(null);
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

    return (
        <Fragment>
            <Seo title={"Companies"} />
            <Row>
                <Col xl={12}>
                    <Card className=" custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Companies <Badge bg="light" text="default" className="rounded ms-1 fs-12 align-middle">27</Badge>
                            </Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <Button variant="primary" size="sm" className="btn-wave" data-bs-toggle="modal" data-bs-target="#create-contact" onClick={handleShow1}>
                                    <i className="ri-add-line me-1 fw-semibold align-middle"></i>Add Company
                                </Button>
                                <Button variant="success-light" size="sm" className="btn-wave">
                                    Export As CSV
                                </Button>
                                <Dropdown>
                                    <Dropdown.Toggle variant="light" size="sm" className="btn-wave no-caret">
                                        Sort By
                                        <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul">
                                        <Dropdown.Item as="li">Newest</Dropdown.Item>
                                        <Dropdown.Item as="li">Date Added</Dropdown.Item>
                                        <Dropdown.Item as="li">A - Z</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className="pt-4 p-0">
                            <div className="table-responsive">
                                <table className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                <Form.Check type="checkbox" id="checkboxNoLabel" aria-label="..." />
                                            </th>
                                            <th scope="col">Company Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Industry</th>
                                            <th scope="col">Company Size</th>
                                            <th scope="col">Key Contact</th>
                                            <th scope="col">Total Deals</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Data.map((idx) => (
                                            <tr className="crm-contact" key={Math.random()}>
                                                <td>
                                                    <Form.Check className="" type="checkbox" id="checkboxNoLabel1" value="" aria-label="..." />
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-sm p-1 bg-light avatar-rounded">
                                                                <img src={idx.src2} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <Link onClick={handleShow} data-bs-toggle="offcanvas" href="#offcanvasExample"
                                                                role="button" aria-controls="offcanvasExample">{idx.text1}</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <span className="d-block mb-1"><i className="ri-mail-line me-2 align-middle fs-14 text-muted"></i>
                                                            {idx.mail}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <span className="d-block"><i className="ri-phone-line me-2 align-middle fs-14 text-muted"></i>{idx.cell}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    {idx.text2}
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center flex-wrap gap-1">
                                                        <span className={`badge bg-${idx.color} ${idx.class}`}>{idx.badge}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-rounded avatar-sm">
                                                                <img src={idx.src1} alt="" />
                                                            </span>
                                                        </div>
                                                        <div >
                                                            <span className="d-block fw-semibold"  >{idx.name}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {idx.score}
                                                </td>
                                                <td>
                                                    <div className="btn-list">
                                                        <Button variant='warning-light' href="#offcanvasExample" onClick={handleShow}
                                                            role="button" className="btn btn-sm btn-icon">
                                                            <i className="ri-eye-line"></i></Button>
                                                        <Button variant='' className="btn btn-sm btn-info-light btn-icon"><i className="ri-pencil-line"></i></Button>
                                                        <Button variant='' className="btn btn-sm btn-danger-light btn-icon contact-delete" onClick={() => handleDelete(idx.id)}><i className="ri-delete-bin-line"></i></Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <Card.Footer className=" border-top-0">
                            <div className="d-flex align-items-center">
                                <div>
                                    Showing 10 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <ul className="pagination mb-0">
                                            <li className="page-item disabled">
                                                <Link className="page-link" href="#!" scroll={false}>
                                                    Prev
                                                </Link>
                                            </li>
                                            <li className="page-item active"><Link className="page-link" href="#!" scroll={false}>1</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#!" scroll={false}>2</Link></li>
                                            <li className="page-item">
                                                <Link className="page-link text-primary" href="#!" scroll={false}>
                                                    next
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Offcanvas show={show} onHide={handleClose} placement='end' className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasExample"
                aria-labelledby="offcanvasExample">
                <div className="offcanvas-body p-0">
                    <div className="d-sm-flex align-items-top p-4 border-bottom border-block-end-dashed main-profile-cover">
                        <div>
                            <span className="avatar avatar-xxl avatar-rounded me-3 bg-light-transparent p-2 border">
                                <img src="../../../assets/images/company-logos/1.png" alt="" />
                            </span>
                        </div>
                        <div className="flex-fill main-profile-info">
                            <div className="d-flex align-items-center justify-content-between">
                                <h6 className="fw-semibold mb-1 text-fixed-white">Spruko Technologies</h6>
                                <Button onClick={handleClose} variant='' type="button" className="btn-close crm-contact-close-btn" data-bs-dismiss="offcanvas" aria-label="Close"></Button>
                            </div>
                            <p className="mb-1 text-muted text-fixed-white op-7">Telecommunications</p>
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
                                <b className="text-default">Spruko SOFTWARE Private Ltd</b> Technologies is a leading technology company specializing in innovative software solutions for businesses worldwide. With a strong focus on cutting-edge technologies and a team of skilled professionals.
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
                                    Wctechnologies2981@gmail.com
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <div className="me-2">
                                    <span className="avatar avatar-sm avatar-rounded bg-light text-muted">
                                        <i className="ri-phone-line align-middle fs-14"></i>
                                    </span>
                                </div>
                                <div>
                                    5771-57152-969
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
                    <div className="p-4 border-bottom border-block-end-dashed d-flex align-items-center gap-3">
                        <div className="fs-14 fw-semibold">Company Size:</div>
                        <div>
                            <span className="badge bg-primary-transparent m-1">Corporate</span> - 1200+ Employees
                        </div>
                    </div>
                    <div className="p-4 d-flex align-items-center gap-3">
                        <div className="fs-14 fw-semibold">
                            Key Contact :
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <div className="lh-1">
                                <span className="avatar avatar-rounded avatar-sm">
                                    <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                </span>
                            </div>
                            <div className="fw-semibold">Lisa Convay</div>
                        </div>
                    </div>
                </div>
            </Offcanvas>
            <Modal show={show1} onHide={handleClose1} className="modal fade" id="create-contact" tabIndex={-1} aria-hidden="true">
                <div className="">
                    <div className="">
                        <Modal.Header closeButton className="modal-header">
                            <h6 className="modal-title">Add Company</h6>
                        </Modal.Header>
                        <Modal.Body className="px-4">
                            <div className="row gy-3">
                                <Col xl={12}>
                                    <div className="mb-0 text-center">
                                        <span className="avatar avatar-xxl avatar-rounded p-2 bg-light">
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
                                    <Form.Label htmlFor="company-name">Company Name</Form.Label>
                                    <Form.Control type="text" id="company-name" placeholder="Contact Name" />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="company-lead-score">Total Deals</Form.Label>
                                    <Form.Control type="number" id="company-lead-score" placeholder="Total Deals" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label htmlFor="company-mail">Email</Form.Label>
                                    <Form.Control type="email" id="company-mail" placeholder="Enter Email" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label htmlFor="company-phone">Phone No</Form.Label>
                                    <Form.Control type="tel" id="company-phone" placeholder="Enter Phone Number" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label htmlFor="key-contact">Key Contact</Form.Label>
                                    <Form.Control type="text" id="key-contact" placeholder="Contact Name" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label>Industry</Form.Label>
                                    <Select name="colors" options={Selectdata2} className="basic-multi-select"
                                        menuPlacement='auto' classNamePrefix="Select2" placeholder="Select Industry" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label>Company Size</Form.Label>
                                    <Select name="colors" options={Selectdata1} className="basic-multi-select"
                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectdata1[0]]} />
                                </Col>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant='' type="button" className="btn btn-light" onClick={handleClose1}
                                data-bs-dismiss="modal">Cancel</Button>
                            <Button variant='' type="button" className="btn btn-primary">Create Contact</Button>
                        </Modal.Footer>
                    </div>
                </div>
            </Modal>

        </Fragment>
    );
};

export default Companies;
