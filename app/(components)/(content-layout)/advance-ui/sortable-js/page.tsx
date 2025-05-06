"use client";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

const SortableJs = () => {

    return (
        <Fragment>
            <Seo title={"Sortable-Js"} />
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                SIMPLE LIST
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ol className="list-group sortable-list list-group-numbered" id="simple-list">
                                <li className="list-group-item">Design logo for fictional company</li>
                                <li className="list-group-item">Draft 300-word blog post</li>
                                <li className="list-group-item">Create project plan with milestones</li>
                                <li className="list-group-item">Develop sample interview questions</li>
                                <li className="list-group-item">Generate customer feedback for product.</li>
                                <li className="list-group-item">Write email template for newsletter.</li>
                            </ol>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={8}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">SHARED LISTS</div>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xl={6}>
                                    <ol className="list-group sortable-list list-group-numbered" id="shared-left">
                                        <li className="list-group-item">Sketch a website homepage</li>
                                        <li className="list-group-item">Plan team-building activity.</li>
                                        <li className="list-group-item">Summarize meeting minutes.</li>
                                        <li className="list-group-item">Code a simple webpage.</li>
                                        <li className="list-group-item">Create survey questions.</li>
                                        <li className="list-group-item">Schedule team meeting.</li>
                                    </ol>
                                </Col>
                                <Col xl={6}>
                                    <ol className="list-group sortable-list list-group-numbered" id="shared-right">
                                        <li className="list-group-item">Edit product description.</li>
                                        <li className="list-group-item">Brainstorm marketing ideas.</li>
                                        <li className="list-group-item">Write slogan for brand.</li>
                                        <li className="list-group-item">Update contact information.</li>
                                        <li className="list-group-item">Proofread blog post.</li>
                                        <li className="list-group-item">Analyze sales data.</li>
                                    </ol>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                SORTING WITH HANDLE
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ol className="list-group sortable-list list-item-numbered" id="sorting-with-handle">
                                <li className="list-group-item"><i className="ri-drag-move-2-fill me-2 text-dark fs-16 handle lh-1"></i>Analyze market trends.</li>
                                <li className="list-group-item"><i className="ri-drag-move-2-fill me-2 text-dark fs-16 handle lh-1"></i>Edit video content.</li>
                                <li className="list-group-item"><i className="ri-drag-move-2-fill me-2 text-dark fs-16 handle lh-1"></i>Plan social media calendar.</li>
                                <li className="list-group-item"><i className="ri-drag-move-2-fill me-2 text-dark fs-16 handle lh-1"></i>Update company policies.</li>
                                <li className="list-group-item"><i className="ri-drag-move-2-fill me-2 text-dark fs-16 handle lh-1"></i>Compile sales reports.</li>
                                <li className="list-group-item"><i className="ri-drag-move-2-fill me-2 text-dark fs-16 handle lh-1"></i>Schedule client calls.</li>
                            </ol>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                SORTING WITH FILTER
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-group sortable-list" id="sorting-with-filter">
                                <li className="list-group-item">Analyze market trends.</li>
                                <li className="list-group-item">Edit video content.</li>
                                <li className="list-group-item">Plan social media calendar.</li>
                                <li className="list-group-item filtered">Update company policies.</li>
                                <li className="list-group-item">Compile sales reports.</li>
                                <li className="list-group-item">Schedule client calls.</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                CLONING
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xl={6}>
                                    <ul className="list-group sortable-list" id="cloning-left">
                                        <li className="list-group-item">Update social media profiles.</li>
                                        <li className="list-group-item">Draft project budget.</li>
                                        <li className="list-group-item">Brainstorm domain names.</li>
                                        <li className="list-group-item">Revise resume content.</li>
                                        <li className="list-group-item">Test website functionality.</li>
                                        <li className="list-group-item">Edit meeting agenda.</li>
                                    </ul>
                                </Col>
                                <Col xl={6}>
                                    <ul className="list-group sortable-list" id="cloning-right">
                                        <li className="list-group-item">Create mood board.</li>
                                        <li className="list-group-item">Design event flyer.</li>
                                        <li className="list-group-item">Research industry trends.</li>
                                        <li className="list-group-item">Format spreadsheet cells.</li>
                                        <li className="list-group-item">Outline marketing strategy.</li>
                                        <li className="list-group-item">Compile data report.</li>
                                    </ul>
                                </Col>
                            </Row>
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
                                DISABLING SORTING
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xl={6}>
                                    <ul className="list-group sortable-list" id="disabling-sorting-left">
                                        <li className="list-group-item">Write customer service script.</li>
                                        <li className="list-group-item">Schedule team training.</li>
                                        <li className="list-group-item">Edit presentation slides.</li>
                                        <li className="list-group-item">Generate weekly schedule.</li>
                                        <li className="list-group-item">Review expense reports.</li>
                                        <li className="list-group-item">Create product catalog.</li>
                                    </ul>
                                </Col>
                                <Col xl={6}>
                                    <ul className="list-group sortable-list" id="disabling-sorting-right">
                                        <li className="list-group-item">Brainstorm blog topics.</li>
                                        <li className="list-group-item">Draft press release.</li>
                                        <li className="list-group-item">Update employee handbook.</li>
                                        <li className="list-group-item">Design event tickets.</li>
                                        <li className="list-group-item">Summarize research findings.</li>
                                        <li className="list-group-item">Plan office layout.</li>
                                    </ul>
                                </Col>
                            </Row>
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
                        <Card.Header>
                            <div className="card-title">
                                SORTABLE GRID
                            </div>
                        </Card.Header>
                        <div className="card-body" id="sortable-grid">
                            <div className="grid-square">
                                <span className="fw-medium">Item-1</span>
                            </div>
                            <div className="grid-square">
                                <span className="fw-medium">Item-2</span>
                            </div>
                            <div className="grid-square">
                                <span className="fw-medium">Item-3</span>
                            </div>
                            <div className="grid-square">
                                <span className="fw-medium">Item-4</span>
                            </div>
                            <div className="grid-square">
                                <span className="fw-medium">Item-5</span>
                            </div>
                            <div className="grid-square">
                                <span className="fw-medium">Item-6</span>
                            </div>
                            <div className="grid-square">
                                <span className="fw-medium">Item-7</span>
                            </div>
                            <div className="grid-square">
                                <span className="fw-medium">Item-8</span>
                            </div>
                            <div className="grid-square">
                                <span className="fw-medium">Item-9</span>
                            </div>
                            <div className="grid-square">
                                <span className="fw-medium">Item-10</span>
                            </div>
                            <div className="grid-square">
                                <span className="fw-medium">Item-11</span>
                            </div>
                            <div className="grid-square">
                                <span className="fw-medium">Item-12</span>
                            </div>
                            <div className="grid-square">
                                <span className="fw-medium">Item-13</span>
                            </div>
                            <div className="grid-square">
                                <span className="fw-medium">Item-14</span>
                            </div>
                            <div className="grid-square">
                                <span className="fw-medium">Item-15</span>
                            </div>
                            <div className="grid-square">
                                <span className="fw-medium">Item-16</span>
                            </div>
                            <div className="grid-square">
                                <span className="fw-medium">Item-17</span>
                            </div>
                            <div className="grid-square">
                                <span className="fw-medium">Item-18</span>
                            </div>
                            <div className="grid-square">
                                <span className="fw-medium">Item-19</span>
                            </div>
                            <div className="grid-square">
                                <span className="fw-medium">Item-20</span>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                NESTED SORTABLE
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="nestedSortables" className="list-group col nested-sortable">
                                <div className="list-group-item nested-1">Item 1.1
                                    <div className="list-group nested-sortable">
                                        <div className="list-group-item nested-2">Item 2.1</div>
                                        <div className="list-group-item nested-2">Item 2.2
                                            <div className="list-group nested-sortable">
                                                <div className="list-group-item nested-3" draggable="false">Item 3.3</div><div className="list-group-item nested-3">Item 3.1</div>
                                                <div className="list-group-item nested-3">Item 3.2</div>

                                                <div className="list-group-item nested-3">Item 3.4</div>
                                            </div>
                                        </div>
                                        <div className="list-group-item nested-2">Item 2.3</div>
                                        <div className="list-group-item nested-2">Item 2.4</div>
                                    </div>
                                </div>
                                <div className="list-group-item nested-1">Item 1.2</div>
                                <div className="list-group-item nested-1">Item 1.3</div>
                                <div className="list-group-item nested-1">Item 1.4
                                    <div className="list-group nested-sortable">
                                        <div className="list-group-item nested-2" draggable="false">Item 2.4</div><div className="list-group-item nested-2">Item 2.1</div>
                                        <div className="list-group-item nested-2">Item 2.2</div>
                                        <div className="list-group-item nested-2">Item 2.3</div>
                                    </div>
                                </div>
                                <div className="list-group-item nested-1">Item 1.5</div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Row>
                        <div className="col-xl-12">
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Header>
                                    <div className="card-title">
                                        MULTIPLE DRAG
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <ul className="list-group sortable-list" id="multiple-drag">
                                        <li className="list-group-item">Update website images.</li>
                                        <li className="list-group-item">Create marketing banners.</li>
                                        <li className="list-group-item">Revise product descriptions.</li>
                                        <li className="list-group-item">Set up client meetings.</li>
                                        <li className="list-group-item">Check email for urgent messages.</li>
                                        <li className="list-group-item">Proofread customer communications.</li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-xl-12">
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Header>
                                    <div className="card-title">
                                        SWAP
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <ul className="list-group sortable-list" id="sortable-swap">
                                        <li className="list-group-item">Test software functionality.</li>
                                        <li className="list-group-item">Brainstorm team-building activities.</li>
                                        <li className="list-group-item">Format spreadsheet cells.</li>
                                        <li className="list-group-item">Plan virtual team event.</li>
                                        <li className="list-group-item">Edit meeting agenda.</li>
                                        <li className="list-group-item">Compile weekly progress report.</li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    );
};

export default SortableJs;
