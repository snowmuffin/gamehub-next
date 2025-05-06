"use client";
import React, { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

//filepond
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import { fileupload1 } from "@/shared/data/prismdata/forms-prism";
import ShowCode from "@/shared/layout-components/showcode/showcode";
import Seo from "@/shared/layout-components/seo/seo";
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

const FileUploads = () => {

    const [files, setFiles] = useState<any>([]);
    const [files1, setFiles1] = useState<any>([]);
    const [files2, setFiles2] = useState<any>([]);

    return (
        <Fragment>
            <Seo title={"File-Uploads"} />
            <Row>
                <Col xl={12}>
                    <ShowCode title="Bootstrap File Input" customCardClass="custom-card" customCardBodyClass="" code={fileupload1}>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Default file input example</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label>Multiple files input example</Form.Label>
                            <Form.Control type="file" multiple />
                        </Form.Group>
                        <Form.Group controlId="formFileDisabled" className="mb-3">
                            <Form.Label>Disabled file input example</Form.Label>
                            <Form.Control type="file" disabled />
                        </Form.Group>
                        <Form.Group controlId="formFileSm" className="mb-3">
                            <Form.Label>Small file input example</Form.Label>
                            <Form.Control type="file" size="sm" />
                        </Form.Group>
                        <Form.Group controlId="formFileLg" className="mb-3">
                            <Form.Label>Large file input example</Form.Label>
                            <Form.Control type="file" size="lg" />
                        </Form.Group>
                    </ShowCode>
                </Col>
                <Col xl={12}>
                    <h6 className="mb-3">Filepond:</h6>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Header>
                                    <div className="card-title">
                                        Multiple Upload
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <FilePond className="multiple-filepond"
                                        files={files}
                                        onupdatefiles={setFiles}
                                        allowMultiple={true}
                                        maxFiles={3}
                                        server="/api"
                                        name="files" /* sets the file input name, it's filepond by default */
                                        labelIdle='Drag & Drop your file here or click '
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Header>
                                    <div className="card-title">
                                        Dropzone
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <FilePond className="multiple-filepond"
                                        files={files2}
                                        onupdatefiles={setFiles2}
                                        allowMultiple={true}
                                        maxFiles={3}
                                        server="/api"
                                        name="files" /* sets the file input name, it's filepond by default */
                                        labelIdle='Drag & Drop your file here or click '
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Header>
                                    <div className="card-title">
                                        Single Upload
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <FilePond className="multiple-filepond single-fileupload"
                                        files={files1}
                                        onupdatefiles={setFiles1}
                                        allowMultiple={true}
                                        maxFiles={1}
                                        server="/api"
                                        name="files" /* sets the file input name, it's filepond by default */
                                        labelIdle='Drag & Drop your file here or click '
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    );
};

export default FileUploads;
