"use client";
import Editor from "@/shared/data/forms/form-editor/editor";
import Editor1 from "@/shared/data/forms/form-editor/editor1";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

const QuillEditor = () => {
    return (
        <Fragment>
            <Seo title={"Quill-Editor"} />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                Quill Bubble Editor
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="editor1">
                                <Editor1 placeholder={"Write something..."} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="card-header">
                            <div className="card-title">
                                Quill Snow Editor
                            </div>
                        </div>
                        <Card.Body>
                            <div id="editor">
                                <Editor placeholder={"Write something..."} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default QuillEditor;
