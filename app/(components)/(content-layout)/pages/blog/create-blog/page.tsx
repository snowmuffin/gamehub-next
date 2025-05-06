
"use client";
import React, { Fragment, useState } from "react";
import dynamic from "next/dynamic";
import { Recentblogdata, Selectdata1, Selectdata2, Selectdata3 } from "@/shared/data/pages/blog/createblogdata";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const Select = dynamic(() => import("react-select"), { ssr: false });
import DatePicker from "react-datepicker";
//filepond
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import { Button, Card, Col, Form, ListGroup, Row } from "react-bootstrap";
import Link from "next/link";
import Seo from "@/shared/layout-components/seo/seo";
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

const CreateBlog = () => {

    const [value1, setValue1] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const handleDateChange = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };
    const [files, setFiles] = useState<any>([]);

    return (
        <Fragment>
            <Seo title={"Create Blog"} />
            <Row>
                <Col xxl={8} xl={12} lg={12} md={12} sm={12} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">New Blog</div>
                        </Card.Header>
                        <Card.Body>
                            <div className="row gy-3">
                                <Col xl={12}>
                                    <Form.Label htmlFor="blog-title" className="">Blog Title</Form.Label>
                                    <Form.Control type="text" className="" id="blog-title" placeholder="Blog Title" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label htmlFor="blog-category" className="">Blog Category</Form.Label>
                                    <Select name="colors" options={Selectdata1} className="basic-multi-select"
                                        menuPlacement='auto' classNamePrefix="Select2" placeholder="Select Category"
                                    />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="blog-author" className="">Blog Author</Form.Label>
                                    <Form.Control type="text" className="" id="blog-author" placeholder="Enter Name" />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="blog-author-email" className="">Email</Form.Label>
                                    <Form.Control type="text" className="" id="blog-author-email" placeholder="Enter Email" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label className="">Blog Content</Form.Label>
                                    <ReactQuill theme="snow" value={value1} onChange={setValue1} />
                                </Col>
                                <Col xl={12} className="blog-images-container">
                                    <Form.Label htmlFor="blog-author-email" className="">Blog Images</Form.Label>
                                    <FilePond
                                        files={files}
                                        onupdatefiles={setFiles}
                                        allowMultiple={true}
                                        maxFiles={3}
                                        server="/api"
                                        name="files" /* sets the file input name, it's filepond by default */
                                        labelIdle='Drag & Drop your file here or click '
                                    />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label className="">Blog Type</Form.Label>
                                    <div className="d-flex align-items-center">
                                        <div className="form-check me-3">
                                            <input className="form-check-input" type="radio" name="blog-type" id="blog-free1" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="blog-free1">
                                                Free
                                            </Form.Label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="blog-type" id="blog-paid1" />
                                            <Form.Label className="form-check-label" htmlFor="blog-paid1">
                                                Paid
                                            </Form.Label>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="publish-date" className="form-label">Publish Date</Form.Label>
                                    <DatePicker placeholderText='Choose date'
                                        selected={startDate}
                                        onChange={handleDateChange} className='' />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="publish-time" className="form-label">Publish Time</Form.Label>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={handleDateChange}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        timeCaption="Time"
                                        dateFormat="h:mm aa"
                                    />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="product-status-add" className="form-label">Published Status</Form.Label>
                                    <Select name="colors" options={Selectdata2} className="basic-multi-select"
                                        menuPlacement='auto' classNamePrefix="Select2" placeholder="Select Category"
                                    />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="blog-tags" className="form-label">Blog Tags</Form.Label>
                                    <Select isMulti name="colors" options={Selectdata3} className="basic-multi-select"
                                        menuPlacement='auto' classNamePrefix="Select2" placeholder="Select Category" defaultValue={[Selectdata3[0], Selectdata3[3]]}
                                    />
                                </Col>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <div className="btn-list text-end">
                                <Button variant="" type="button" className="btn btn-sm btn-primary-light">Save As Draft</Button>
                                <Button variant="" type="button" className="btn btn-sm btn-primary">Post Blog</Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={4} xl={12} lg={12} md={12} sm={12}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                Recent Blogs
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup>
                                {Recentblogdata.map((idx) => (
                                    <ListGroup.Item key={Math.random()}>
                                        <div className="d-flex align-items-start">
                                            <span className="avatar avatar-xxl me-3 flex-shrink-0">
                                                <img src={idx.src} className="img-fluid" alt="..." />
                                            </span>
                                            <div className="flex-fill my-auto">
                                                <Link href="#!" scroll={false} className="fs-10 fw-medium mb-2 text-primary badge bg-primary-transparent">{idx.title}</Link>
                                                <p className="mb-1">
                                                    There are many variations of passages...
                                                </p>
                                                <span className="text-muted fs-11"> <i className="fe fe-calendar me-1 d-inline-block"></i>{idx.time} - <i className="fe fe-clock"></i> {idx.data}</span>
                                            </div>
                                            <Link href="#!" scroll={false} className="ms-auto fs-12 text-decoration-underline text-primary text-end align-self-end">View</Link>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                                <li className="list-group-item text-center">
                                    <Button variant="" className="btn btn-primary-light">Load more</Button>
                                </li>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default CreateBlog;
