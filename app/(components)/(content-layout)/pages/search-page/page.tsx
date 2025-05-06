"use client";
import { Relatedtags, Serchimages } from "@/shared/data/pages/searchpagedata";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, Form, InputGroup, Nav, Pagination, Row, Tab } from "react-bootstrap";

const Searchpage = () => {
    return (
        <Fragment>
            <Seo title={"Search-Page"} />
            <Row>
                <Col sm={12} xl={9}>
                    <Tab.Container defaultActiveKey="all">
                        <Card className="custom-card search-page">
                            <Card.Body className="pb-lg-0">
                                <InputGroup className="mb-2">
                                    <Form.Control type="text" className="" placeholder="Searching....." />
                                    <Button variant="primary" className="btn ripple" type="button">Search</Button>
                                </InputGroup>
                                <p className="text-muted op-7">Results Shows: 5,150 found from 2,75,841 results</p>
                                <div className="d-flex justify-content-between gap-2 flex-wrap align-items-center">
                                    <Nav className="nav-style-1 nav-pills search-nav-tabs gap-1" role="tablist">
                                        <Nav.Item role="presentation">
                                            <Nav.Link eventKey="all" data-bs-toggle="tab" role="tab" href="#searchtab1" aria-selected="true">All</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item role="presentation">
                                            <Nav.Link eventKey="images" data-bs-toggle="tab" role="tab" href="#searchtab2" aria-selected="false" tabIndex={-1}>Images</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="nav-item active" role="presentation">
                                            <Nav.Link eventKey="books" data-bs-toggle="tab" role="tab" href="#searchtab3" aria-selected="false" tabIndex={-1}>Books</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item role="presentation">
                                            <Nav.Link eventKey="videos" data-bs-toggle="tab" role="tab" href="#searchtab4" aria-selected="false" tabIndex={-1}>Videos</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item role="presentation">
                                            <Nav.Link eventKey="news" data-bs-toggle="tab" role="tab" href="#searchtab5" aria-selected="false" tabIndex={-1}>News</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <div className="ms-auto d-flex gap-2">
                                        <Dropdown className="btn-group d-xxl-flex d-block">
                                            <Dropdown.Toggle as="a" variant="" className="btn btn-sm btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Filter By
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                                <li><Link className="dropdown-item" href="#!" scroll={false}>Images</Link></li>
                                                <li><Link className="dropdown-item" href="#!" scroll={false}>Videos</Link></li>
                                                <li><Link className="dropdown-item active" href="#!" scroll={false}>Websites</Link></li>
                                                <li><Link className="dropdown-item" href="#!" scroll={false}>Newest</Link></li>
                                                <li><Link className="dropdown-item" href="#!" scroll={false}>Ratings</Link></li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Dropdown className="btn-group d-xxl-flex d-block">
                                            <Dropdown.Toggle as="a" variant="" className="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Sort By
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                                <li><Link className="dropdown-item" href="#!" scroll={false}>Date</Link></li>
                                                <li><Link className="dropdown-item" href="#!" scroll={false}>Time</Link></li>
                                                <li><Link className="dropdown-item active" href="#!" scroll={false}>Rating</Link></li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Tab.Content className="">
                            <Tab.Pane eventKey="all" className="text-muted p-0 border-0" id="searchtab1" role="tabpanel">
                                <Card className="custom-card search-tabs">
                                    <div className=" border-top p-4 ">
                                        <div className="mb-2 d-flex align-items-center gap-2 mb-2">
                                            <span className="avatar avatar-sm bg-secondary-transparent avatar-rounded flex-shrink-0"><img src="../../assets/images/company-logos/4.png" alt="" /></span>
                                            <Link href="#!" scroll={false} className="h6 mb-0 text-truncate">HTML5 Admin Template Dashboard Design...</Link>
                                            <Dropdown className="ms-auto">
                                                <Dropdown.Toggle as="a" aria-label="anchor" href="#!" data-bs-toggle="dropdown" className="p-1 border lh-1 fs-13 no-caret">
                                                    <i className="fe fe-more-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu-end" role="menu">
                                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Action</Link></Dropdown.Item>
                                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Something</Link></Dropdown.Item>
                                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Anything</Link></Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <Link href="#!" scroll={false}
                                            className="fs-14 text-primary">https://themeforest.net/user/spruko/portfolio</Link>
                                        <p className="text-muted mt-2 mb-2 op-8 fs-14">Nemo enim ipsam voluptatem quia voluptas sit
                                            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                                            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                                            ipsum
                                            quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                                            modi
                                            tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                                            <div className="fs-13">
                                                <i className="fe fe-calendar d-inline-block me-1"></i>
                                                <span>Published On: 05 March 2024</span>
                                            </div>
                                            <div className="d-inline-flex align-items-center">
                                                <Link href="#!" scroll={false}><i
                                                    className="ri-star-fill align-middle text-warning fs-14"></i></Link>
                                                <Link href="#!" scroll={false}><i
                                                    className="ri-star-fill align-middle text-warning fs-14"></i></Link>
                                                <Link href="#!" scroll={false}><i
                                                    className="ri-star-fill align-middle text-warning fs-14"></i></Link>
                                                <Link href="#!" scroll={false}><i
                                                    className="ri-star-fill align-middle text-warning fs-14"></i></Link>
                                                <Link href="#!" scroll={false}><i
                                                    className="ri-star-half-fill align-middle text-warning fs-14"></i></Link>
                                                <Link href="#!" scroll={false} className="ms-2 fs-13"> (48) Reviews</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" border-top p-4">
                                        <div className="mb-2 d-flex align-items-center gap-2 mb-2">
                                            <span className="avatar avatar-sm bg-secondary-transparent avatar-rounded flex-shrink-0"><img src="../../assets/images/company-logos/2.png" alt="" /></span>
                                            <Link href="#!" scroll={false} className="h6 mb-0 text-truncate">Admin Responsive Bootstrap HTML Dashboard Template...</Link>
                                            <Dropdown className="ms-auto">
                                                <Dropdown.Toggle as="a" aria-label="anchor" href="#!" data-bs-toggle="dropdown" className="p-1 border lh-1 fs-13 no-caret">
                                                    <i className="fe fe-more-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu-end" role="menu">
                                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Action</Link></Dropdown.Item>
                                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Something</Link></Dropdown.Item>
                                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Anything</Link></Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <Link href="#!" scroll={false}
                                            className="text-primary">https://www.spruko.com/demo/html/</Link>
                                        <p className="text-muted mt-2 mb-1 op-8 fs-14">Treal Template included in 30 versions. In the
                                            demo
                                            30 versions is shown in 4 floders. And In the final each version has single
                                            floder corresponding to that ...</p>
                                        <p className="text-muted  mb-2 op-8 text-truncate fs-14">Tags: admin, admin dashboard, admin panel, admin
                                            template, backright, bootstrap, bootstrap 4, clean, dashboard, flat, jquery,
                                            modern, premium admin templates ...</p>
                                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                                            <div className="fs-13">
                                                <i className="fe fe-calendar d-inline-block me-1"></i>
                                                <span>Published On: 05 March 2024</span>
                                            </div>
                                            <div className="d-inline-flex align-items-center">
                                                <Link href="#!" scroll={false}><i
                                                    className="ri-star-fill align-middle text-warning fs-14"></i></Link>
                                                <Link href="#!" scroll={false}><i
                                                    className="ri-star-fill align-middle text-warning fs-14"></i></Link>
                                                <Link href="#!" scroll={false}><i
                                                    className="ri-star-fill align-middle text-warning fs-14"></i></Link>
                                                <Link href="#!" scroll={false}><i
                                                    className="ri-star-fill align-middle text-warning fs-14"></i></Link>
                                                <Link href="#!" scroll={false}><i
                                                    className="ri-star-half-fill align-middle text-warning fs-14"></i></Link>
                                                <Link href="#!" scroll={false} className="ms-2 fs-13"> (48) Reviews</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" border-top p-4">
                                        <div className="mb-2 d-flex align-items-center gap-2 mb-2">
                                            <span className="avatar avatar-sm bg-secondary-transparent avatar-rounded flex-shrink-0"><img src="../../assets/images/company-logos/7.png" alt="" /></span>
                                            <Link href="#!" scroll={false} className="h6 mb-0 text-truncate">New Website Templates from Innovatepix</Link>
                                            <Dropdown className="ms-auto">
                                                <Dropdown.Toggle as="a" aria-label="anchor" href="#!" data-bs-toggle="dropdown" className="p-1 border lh-1 fs-13 no-caret">
                                                    <i className="fe fe-more-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu-end" role="menu">
                                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Action</Link></Dropdown.Item>
                                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Something</Link></Dropdown.Item>
                                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Anything</Link></Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <Link href="#!" scroll={false}
                                            className="text-primary">https://spruko.com/demo/html/</Link>
                                        <p className="text-muted mt-2 mb-2 op-8 fs-14">Nemo enim ipsam voluptatem quia voluptas sit
                                            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                                            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                                            ipsum
                                            quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                                            modi
                                            tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                                            <div className="fs-13">
                                                <i className="fe fe-calendar d-inline-block me-1"></i>
                                                <span>Published On: 05 March 2024</span>
                                            </div>
                                            <div className="d-inline-flex align-items-center">
                                                <Link href="#!" scroll={false}><i
                                                    className="ri-star-fill align-middle text-warning fs-14"></i></Link>
                                                <Link href="#!" scroll={false}><i
                                                    className="ri-star-fill align-middle text-warning fs-14"></i></Link>
                                                <Link href="#!" scroll={false}><i
                                                    className="ri-star-fill align-middle text-warning fs-14"></i></Link>
                                                <Link href="#!" scroll={false}><i
                                                    className="ri-star-fill align-middle text-warning fs-14"></i></Link>
                                                <Link href="#!" scroll={false}><i
                                                    className="ri-star-half-fill align-middle text-warning fs-14"></i></Link>
                                                <Link href="#!" scroll={false} className="ms-2 fs-13"> (48) Reviews</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" border-top p-4">
                                        <div className="mb-2 d-flex align-items-center gap-2 mb-2">
                                            <span className="avatar avatar-sm bg-secondary-transparent avatar-rounded flex-shrink-0"><img src="../../assets/images/company-logos/6.png" alt="" /></span>
                                            <Link href="#!" scroll={false} className="h6 mb-0 text-truncate">Web Hosting HTML Creative Responsive Clean Template From DigitalIntech</Link>
                                            <Dropdown className="ms-auto">
                                                <Dropdown.Toggle as="a" aria-label="anchor" href="#!" data-bs-toggle="dropdown" className="p-1 border lh-1 fs-13 no-caret">
                                                    <i className="fe fe-more-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu-end" role="menu">
                                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Action</Link></Dropdown.Item>
                                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Something</Link></Dropdown.Item>
                                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Anything</Link></Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <Link href="#!" scroll={false}
                                            className="text-primary">https://www.spruko.com/demo/html/</Link>
                                        <p className="text-muted mt-2 mb-1 op-8 fs-14"> HostOne - Web Hosting HTML Creative Responsive
                                            Clean Template by sprukosoft HostOne -HTML Templates is a Clean, Simple
                                            Responsive Template Design.</p>
                                        <p className="text-muted  mb-2 op-8 text-truncate fs-14">Neque porro quisquam est, qui dolorem ipsum quia
                                            dolor
                                            sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                                            tempora
                                            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
                                            minima veniam, quis nostrum exercitationem ullam corporis suscipit
                                            laboriosam,
                                            nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
                                            reprehrighterit qui in ea voluptate velit esse quam nihil molestiae
                                            consequatur,
                                            vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                                            <div className="fs-13">
                                                <i className="fe fe-calendar d-inline-block me-1"></i>
                                                <span>Published On: 05 March 2024</span>
                                            </div>
                                            <div className="d-inline-flex align-items-center">
                                                <Link href="#!" scroll={false}><i
                                                    className="ri-star-fill align-middle text-warning fs-14"></i></Link>
                                                <Link href="#!" scroll={false}><i
                                                    className="ri-star-fill align-middle text-warning fs-14"></i></Link>
                                                <Link href="#!" scroll={false}><i
                                                    className="ri-star-fill align-middle text-warning fs-14"></i></Link>
                                                <Link href="#!" scroll={false}><i
                                                    className="ri-star-fill align-middle text-warning fs-14"></i></Link>
                                                <Link href="#!" scroll={false}><i
                                                    className="ri-star-half-fill align-middle text-warning fs-14"></i></Link>
                                                <Link href="#!" scroll={false} className="ms-2 fs-13"> (48) Reviews</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center border-top">
                                        <div className="my-4">
                                            <ul className="pagination justify-content-center">
                                                <li className="page-item page-prev disabled">
                                                    <Link className="page-link" href="#!" scroll={false} tabIndex={-1}>Prev</Link>
                                                </li>
                                                <li className="page-item active"><Link className="page-link" href="#!" scroll={false}>1</Link></li>
                                                <li className="page-item"><Link className="page-link" href="#!" scroll={false}>2</Link>
                                                </li>
                                                <li className="page-item"><Link className="page-link" href="#!" scroll={false}>3</Link>
                                                </li>
                                                <li className="page-item page-next">
                                                    <Link className="page-link" href="#!" scroll={false}>Next</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="images" className="text-muted p-0 border-0" id="searchtab2" role="tabpanel">
                                <div className="row">
                                    {Serchimages.map((idx) => (
                                        <Col xl={3} lg={4} sm={6} className="col-12" key={Math.random()}>
                                            <div className="mb-3 border p-3">
                                                <Link href="#!" scroll={false}>
                                                    <img src={idx.src1} alt="image" className="img-fluid" />
                                                </Link>
                                                <div className="d-flex gap-1 align-items-center mt-2">
                                                    <span className="avatar avatar-sm me-2 bg-primary-transparent flex-shrink-0">PX</span>
                                                    <div className="text-truncate">
                                                        <p className="mb-0 fs-12">InfoPix.pvt.Ltd</p>
                                                        <p className="text-muted fs-13 mb-0 op-8 text-truncate">http://www.InfoPix.pvt.Ltd/</p>
                                                    </div>
                                                    <Dropdown className="ms-auto">
                                                        <Dropdown.Toggle as="a" aria-label="anchor" href="#!" data-bs-toggle="dropdown" className="p-1 border lh-1 fs-13 no-caret">
                                                            <i className="fe fe-more-vertical"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className="dropdown-menu-end" role="menu">
                                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Action</Link></Dropdown.Item>
                                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Something</Link></Dropdown.Item>
                                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Anything</Link></Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </div>
                                <div className="my-4">
                                    <Pagination className="justify-content-center">
                                        <Pagination.Item disabled>
                                            Prev
                                        </Pagination.Item>
                                        <Pagination.Item active>1</Pagination.Item>
                                        <Pagination.Item className="">2
                                        </Pagination.Item>
                                        <Pagination.Item className="page-next">
                                            Next
                                        </Pagination.Item>
                                    </Pagination>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="books" className="text-muted p-0 border-0" id="searchtab3" role="tabpanel">
                                <Card className="custom-card">
                                    <div className=" border-top p-4 ">
                                        <div className="row">
                                            <Col xl={2} md={2} sm={3} className="">
                                                <img src="../../assets/images/media/media-78.jpg" alt="" className="img-fluid" />
                                            </Col>
                                            <Col xl={10} md={10} sm={9} className="mt-3 mt-sm-0">
                                                <div className="mb-2 d-flex align-items-center gap-2 mb-2">
                                                    <Link href="#!" scroll={false} className="h6 mb-0 text-primary">Admin Bliss:A Guide to Sleek Dashboard Designs</Link>
                                                    <Dropdown className="ms-auto">
                                                        <Dropdown.Toggle as="a" aria-label="anchor" href="#!" data-bs-toggle="dropdown" className="p-1 border lh-1 fs-13 no-caret">
                                                            <i className="fe fe-more-vertical"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className="dropdown-menu-end" role="menu">
                                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Action</Link></Dropdown.Item>
                                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Something</Link></Dropdown.Item>
                                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Anything</Link></Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                                <div className="d-flex gap-2 align-items-center mb-1 op-9">
                                                    <div className="fs-13">
                                                        <i className="ri-book-2-line d-inline-block"></i>
                                                        <span>Author: William Sam</span>
                                                    </div>
                                                    <div className="fs-13">
                                                        <i className="fe fe-calendar d-inline-block me-1"></i>
                                                        <span>Published On: 05 March 2024</span>
                                                    </div>
                                                </div>
                                                <div className="d-inline-flex align-items-center mb-1">
                                                    <Link href="#!" scroll={false}><i
                                                        className="ri-star-fill align-middle text-warning fs-14"></i></Link>
                                                    <Link href="#!" scroll={false}><i
                                                        className="ri-star-fill align-middle text-warning fs-14"></i></Link>
                                                    <Link href="#!" scroll={false}><i
                                                        className="ri-star-fill align-middle text-warning fs-14"></i></Link>
                                                    <Link href="#!" scroll={false}><i
                                                        className="ri-star-fill align-middle text-warning fs-14"></i></Link>
                                                    <Link href="#!" scroll={false}><i
                                                        className="ri-star-half-fill align-middle text-warning fs-14"></i></Link>
                                                    <Link href="#!" scroll={false} className="ms-2 fs-13"> 4.1</Link>
                                                </div>
                                                <p className="text-muted mb-0 op-8 fs-14">Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                                                    quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                                                    modi
                                                    tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                            </Col>
                                        </div>
                                    </div>
                                    <div className=" border-top p-4 ">
                                        <div className="row">
                                            <Col xl={2} md={2} sm={3}>
                                                <img src="../../assets/images/media/media-77.jpg" alt="" className="img-fluid" />
                                            </Col>
                                            <Col xl={10} md={10} sm={9} className="mt-3 mt-sm-0">
                                                <div className="mb-2 d-flex align-items-center gap-2 mb-2">
                                                    <Link href="#!" scroll={false} className="h6 mb-0 text-primary">Dashboard Dazzle: Mastering Admin Template Aesthetics</Link>
                                                    <Dropdown className="ms-auto">
                                                        <Dropdown.Toggle as="a" aria-label="anchor" href="#!" data-bs-toggle="dropdown" className="p-1 border lh-1 fs-13 no-caret">
                                                            <i className="fe fe-more-vertical"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className="dropdown-menu-end" role="menu">
                                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Action</Link></Dropdown.Item>
                                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Something</Link></Dropdown.Item>
                                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Anything</Link></Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                                <div className="d-flex gap-2 align-items-center mb-1 op-9">
                                                    <div className="fs-13">
                                                        <i className="ri-book-2-line d-inline-block"></i>
                                                        <span>Author: William Sam</span>
                                                    </div>
                                                    <div className="fs-13">
                                                        <i className="fe fe-calendar d-inline-block me-1"></i>
                                                        <span>Published On: 05 March 2024</span>
                                                    </div>
                                                </div>
                                                <div className="d-inline-flex align-items-center mb-1">
                                                    <Link href="#!" scroll={false}><i
                                                        className="ri-star-fill align-middle text-warning fs-14"></i></Link>
                                                    <Link href="#!" scroll={false}><i
                                                        className="ri-star-fill align-middle text-warning fs-14"></i></Link>
                                                    <Link href="#!" scroll={false}><i
                                                        className="ri-star-fill align-middle text-warning fs-14"></i></Link>
                                                    <Link href="#!" scroll={false}><i
                                                        className="ri-star-fill align-middle text-warning fs-14"></i></Link>
                                                    <Link href="#!" scroll={false}><i
                                                        className="ri-star-half-fill align-middle text-warning fs-14"></i></Link>
                                                    <Link href="#!" scroll={false} className="ms-2 fs-13"> 4.1</Link>
                                                </div>
                                                <p className="text-muted mb-0 op-8 fs-14">Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                                                    quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                                                    modi
                                                    tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                            </Col>
                                        </div>
                                    </div>
                                    <div className="text-center border-top">
                                        <div className="my-4">
                                            <Pagination className="justify-content-center">
                                                <Pagination.Item disabled>
                                                   Prev
                                                </Pagination.Item>
                                                <Pagination.Item active>1</Pagination.Item>
                                                <Pagination.Item className="">2
                                                </Pagination.Item>
                                                <Pagination.Item className=" page-next">
                                                    Next
                                                </Pagination.Item>
                                            </Pagination>
                                        </div>
                                    </div>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="videos" className="text-muted p-0 border-0" id="searchtab4" role="tabpanel">
                                <Card className="custom-card">
                                    <div className=" border-top p-4 ">
                                        <div className="d-flex gap-3 flex-xl-nowrap flex-wrap">
                                            <iframe src="https://www.youtube.com/embed/JP_os1DC1MQ?si=qyUJRBl7ZJBhR_P5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                                            <div className="text-wrap">
                                                <div className="mb-2 d-flex align-items-center gap-2 mb-2">
                                                    <Link href="#!" scroll={false} className="h6 mb-0 text-primary">Admin Template Showcase and Features Overview</Link>
                                                    <Dropdown className="ms-auto">
                                                        <Dropdown.Toggle as="a" aria-label="anchor" href="#!" data-bs-toggle="dropdown" className="p-1 border lh-1 fs-13 no-caret">
                                                            <i className="fe fe-more-vertical"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className="dropdown-menu-end" role="menu">
                                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Action</Link></Dropdown.Item>
                                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Something</Link></Dropdown.Item>
                                                            <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Anything</Link></Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                                <p className="text-muted mb-0 op-8 fs-14">Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                                                    quia dolor sit amet.</p>
                                                <div className="fs-13 mb-3">
                                                    <span>Posted By: <span className="text-fixed-white fw-medium">Vincy Harvey</span> </span>
                                                </div>
                                                <div className="d-flex gap-2 align-items-center op-9">
                                                    <div className="fs-13">
                                                        <i className="fe fe-calendar d-inline-block me-1"></i>
                                                        <span>Published On: 05 March 2024</span>
                                                    </div>
                                                    <div className="d-inline-flex align-items-center ms-auto">
                                                        <Link href="#!" scroll={false}><i className="ri-star-fill align-middle text-warning fs-14"></i></Link>
                                                        <Link href="#!" scroll={false} className="ms-2 fs-13"> 4.1</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center border-top">
                                        <div className="my-4">
                                            <Pagination className="justify-content-center">
                                                <Pagination.Item disabled>
                                                    Prev
                                                </Pagination.Item>
                                                <Pagination.Item active>1</Pagination.Item>
                                                <Pagination.Item className="">2
                                                </Pagination.Item>
                                                <Pagination.Item className=" page-next">
                                                    Next
                                                </Pagination.Item>
                                            </Pagination>
                                        </div>
                                    </div>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="news" className="text-muted p-0 border-0" id="searchtab5" role="tabpanel">
                                <Card className="custom-card">
                                    <div className=" border-top p-4 ">
                                        <div className="mb-2 d-flex align-items-center gap-2 mb-2">
                                            <Link href="#!" scroll={false} className="h5 mb-0 text-primary">Admins Stunned as Admin Template Introduces 4D Graphs <span className="badge bg-warning">Latest</span></Link>
                                            <Dropdown className="ms-auto">
                                                <Dropdown.Toggle as="a" aria-label="anchor" href="#!" data-bs-toggle="dropdown" className="p-1 border lh-1 fs-13 no-caret">
                                                    <i className="fe fe-more-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className=" dropdown-menu-end" role="menu">
                                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Action</Link></Dropdown.Item>
                                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Something</Link></Dropdown.Item>
                                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Anything</Link></Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                                            <div className="fs-13">
                                                <i className="fe fe-calendar d-inline-block me-1"></i>
                                                <span>Published On: 1 Day Ago</span>
                                            </div>
                                        </div>
                                        <p className="text-muted mt-2 mb-2 op-8 fs-14">Nemo enim ipsam voluptatem quia voluptas sit
                                            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                                            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                                            ipsum
                                            quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                                            modi
                                            tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                    </div>
                                    <div className=" border-top p-4 ">
                                        <div className="mb-2 d-flex align-items-center gap-2 mb-2">
                                            <Link href="#!" scroll={false} className="h5 mb-0 text-primary">New Font Added to Admin Dashboard!</Link>
                                            <Dropdown className="ms-auto">
                                                <Dropdown.Toggle as="a" aria-label="anchor" href="#!" data-bs-toggle="dropdown" className="p-1 border lh-1 fs-13 no-caret">
                                                    <i className="fe fe-more-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-end" role="menu">
                                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Action</Link></Dropdown.Item>
                                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Something</Link></Dropdown.Item>
                                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Anything</Link></Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                                            <div className="fs-13">
                                                <i className="fe fe-calendar d-inline-block me-1"></i>
                                                <span>Published On: 2 Days Ago</span>
                                            </div>
                                        </div>
                                        <p className="text-muted mt-2 mb-2 op-8 fs-14">Nemo enim ipsam voluptatem quia voluptas sit
                                            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                                            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                                            ipsum
                                            quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                                            modi
                                            tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                    </div>
                                    <div className="text-center border-top">
                                        <div className="my-4">
                                            <ul className="pagination justify-content-center">
                                                <li className="page-item page-prev disabled">
                                                    <Link className="page-link" href="#!" scroll={false} tabIndex={-1}>Prev</Link>
                                                </li>
                                                <li className="page-item active"><Link className="page-link" href="#!" scroll={false}>1</Link></li>
                                                <li className="page-item"><Link className="page-link" href="#!" scroll={false}>2</Link>
                                                </li>
                                                <li className="page-item page-next">
                                                    <Link className="page-link" href="#!" scroll={false}>Next</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Card>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>

                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="card-header">
                            <div className="card-title">
                                Related Searches
                            </div>
                        </div>
                        <Card.Body>
                            <div className="">
                                <div className="border p-2 mb-2">
                                    <Link href="#!" scroll={false}>
                                        <span className="fs-13"><i className="fe fe-search me-2 fs-13 op-3 d-inline-block"></i>Lorem Ipsum is simply dummy text</span>
                                    </Link>
                                </div>
                                <div className="border p-2 mb-2">
                                    <Link href="#!" scroll={false}>
                                        <span className="fs-13"><i className="fe fe-search me-2 fs-13 op-3 d-inline-block"></i>Words which don't look</span>
                                    </Link>
                                </div>
                                <div className="border p-2 mb-2">
                                    <Link href="#!" scroll={false}>
                                        <span className="fs-13"><i className="fe fe-search me-2 fs-13 op-3 d-inline-block"></i>There are many variations..</span>
                                    </Link>
                                </div>
                                <div className="border p-2 mb-2">
                                    <Link href="#!" scroll={false}>
                                        <span className="fs-13"><i className="fe fe-search me-2 fs-13 op-3 d-inline-block"></i>Where can I get some?</span>
                                    </Link>
                                </div>
                                <div className="border p-2 mb-2">
                                    <Link href="#!" scroll={false}>
                                        <span className="fs-13"><i className="fe fe-search me-2 fs-13 op-3 d-inline-block"></i>The standard Lorem Ipsum passage</span>
                                    </Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card products-navigation-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="p-0">
                            <div className="p-4 border-bottom">
                                <p className="fw-medium text-muted">Related Tags</p>
                                <div className="text-muted fs-12 d-flex gap-1 align-items-center flex-wrap">
                                    {Relatedtags.map((idx) => (
                                        <Link href="#!" scroll={false} key={Math.random()}>
                                            <span className="badge bg-light text-muted p-1">{idx.data}<i className="fe fe-x ms-2 fs-13 op-3 d-inline-block"></i></span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Searchpage;
