
"use client";
import { Filemanagerlist, Myfilesdata, Recentdata } from "@/shared/data/apps/filemanager/filemanagerdata";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Card, Col, Dropdown, Form, InputGroup, Modal, Offcanvas, Pagination, ProgressBar, Row, Table } from "react-bootstrap";

const FileManager = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [Data, setData] = useState(Filemanagerlist);

    const userdata: any[] = [];

    const myfunction = (idx: string) => {
        let Data;
        for (Data of Filemanagerlist) {
            if (Data.text[0] == " ") {
                Data.text = Data.text.trim();
            }
            if (Data.text.toLowerCase().includes(idx.toLowerCase())) {
                if (Data.text.toLowerCase().startsWith(idx.toLowerCase())) {
                    userdata.push(Data);
                }
            }

        }
        setData(userdata);
    };

    const [isFoldersOpen, setFoldersOpen] = useState(false);
    const [isDetailsOpen, setDetailsOpen] = useState(false);

    const handleResize = () => {
        const windowWidth = window.innerWidth;
        // Handle folders and details visibility
        if (windowWidth <= 575) {
            setFoldersOpen(true);
            setDetailsOpen(false);
        } else if (windowWidth <= 1200) {
            setDetailsOpen(true);
        } else {
            setFoldersOpen(false);
            setDetailsOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleToggleFolders = () => {
        if (window.innerWidth <= 575) {
            setFoldersOpen(true);
            setDetailsOpen(false);
        }
    };

    const handleToggleFoldersClose = () => {
        setFoldersOpen(false);
    };

    const handleToggleDetails = () => {
        if (window.innerWidth <= 1200) {
            setDetailsOpen(true);
        }
    };

    const handleToggleDetailsClose = () => {
        setDetailsOpen(false);
    };

    return (
        <Fragment>
            <Seo title={"File Manager"} />
            <div className="file-manager-container p-2 gap-2 d-sm-flex">
                <div className={`file-manager-navigation ${isFoldersOpen ? 'close' : ''}`}>
                    <div className="d-flex align-items-center justify-content-between w-100 p-3 border-bottom">
                        <div>
                            <h6 className="fw-semibold mb-0">File Manager</h6>
                        </div>
                        <Dropdown>
                            <Dropdown.Toggle as='a' href="#!" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-light no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="ri-settings-3-line"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu as='ul'>
                                <Dropdown.Item as='li' href="#!">Hidden Files</Dropdown.Item>
                                <Dropdown.Item as='li' href="#!">Another action</Dropdown.Item>
                                <Dropdown.Item as='li' href="#!">Something else here</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="p-3 border-bottom">
                        <InputGroup>
                            <Form.Control type="text" className="form-control bg-light border-0" placeholder="Search Files" aria-describedby="button-addon2" />
                            <Button variant='' className="btn btn-light" type="button" id="button-addon2"><i className="ri-search-line"></i></Button>
                        </InputGroup>
                    </div>
                    <div>
                        <ul className="list-unstyled files-main-nav" id="files-main-nav" onClick={handleToggleFolders}>
                            {Data.map((idx) => (
                                <li className={idx.class} key={Math.random()}>
                                    <Link href="#!" scroll={false} >
                                        <div className="d-flex align-items-center">
                                            <div className="me-2">
                                                <i className={idx.icon}></i>
                                            </div>
                                            <span className="flex-fill text-nowrap">
                                                {idx.text}
                                            </span>
                                            <span className="badge bg-primary">{idx.badge}</span>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                            <li className="mb-4 file-internal-storage">
                                <div className="d-flex">
                                    <div className="me-2 float-end">
                                        <span className="avatar avatar-xs">
                                            <img src="../../../assets/images/media/file-manager/1.png" alt="" />
                                        </span>
                                    </div>
                                    <h5 className="fw-medium">Internal Storage</h5>
                                </div>
                                <div className="text-muted mb-2 d-flex align-items-center justify-content-between">
                                    <p className="mb-0"><span className="fw-bold fs-14">69.42GB</span> Used</p>
                                    <p className="fs-12 mb-0">63% Used</p></div>
                                <div className="">
                                    <ProgressBar variant="" now={63} className="progress progress-xs" role="progressbar" aria-valuenow={63} aria-valuemin={0} aria-valuemax={100} />
                                </div> <p className="fs-12 mt-2 mb-0"> 51.04GB free</p></li>
                            <li className="p-0"> <div className="filemanager-upgrade-storage gap-2 justify-content-around flex-wrap"> <span>
                                <img src="../../../assets/images/media/file-manager/2.png" alt="" /> </span> <div className="text-default"> <span className="fw-medium">Looking for storage options?</span> <div className="mt-2 d-grid"> <button className="btn btn-primary">Upgrade Now</button> </div> </div> </div> </li>
                        </ul>
                    </div>
                </div>
                <div className={`file-manager-folders ${isFoldersOpen ? 'open' : ''}`}>
                    <div className="d-flex p-3 flex-wrap gap-2 align-items-center justify-content-between border-bottom">
                        <div>
                            <h6 className="fw-medium mb-0">All Files</h6>
                        </div>
                        <div className="d-flex gap-2">
                            <Button variant="" id="folders-close-btn" onClick={handleToggleFoldersClose} className="d-sm-none d-block btn btn-icon btn-sm btn-danger-light">
                                <i className="ri-close-fill"></i>
                            </Button>
                            <Button variant="primary" onClick={handleShow} className="btn btn-sm d-flex align-items-center justify-content-center btn-wave waves-light"
                                data-bs-toggle="modal" data-bs-target="#create-folder">
                                <i className="ri-add-circle-line align-middle me-1"></i>Create Folder
                            </Button>
                            <Modal aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose} className="fade" id="create-folder" tabIndex={-1} data-bs-keyboard="false" aria-hidden="true">
                                <div className="">
                                    <Modal.Header>
                                        <h6 className="modal-title" id="staticBackdropLabel">Create Folder
                                        </h6>
                                        <Button variant="" onClick={handleClose} type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></Button>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form.Label htmlFor="create-folder1" className="">Folder Name</Form.Label>
                                        <Form.Control type="text" className="" id="create-folder1" placeholder="Folder Name" />
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="" type="button" onClick={handleClose} className="btn btn-sm btn-icon btn-light"
                                            data-bs-dismiss="modal"><i className="ri-close-fill"></i></Button>
                                        <Button variant="" type="button" className="btn btn-sm btn-success">Create</Button>
                                    </Modal.Footer>
                                </div>
                            </Modal>
                            <Button variant="" onClick={handleShow1} className="btn btn-sm btn-outline-secondary d-flex align-items-center justify-content-center btn-wave waves-light"
                                data-bs-toggle="modal" data-bs-target="#create-file">
                                <i className="ri-add-circle-line align-middle me-1"></i>Create File
                            </Button>
                            <Modal aria-labelledby="contained-modal-title-vcenter" centered show={show1} onHide={handleClose1} className="fade" id="create-file" tabIndex={-1} data-bs-keyboard="false" aria-hidden="true">
                                <div className="">
                                    <Modal.Header>
                                        <h6 className="modal-title" id="staticBackdropLabel1">Create File
                                        </h6>
                                        <Button variant="" onClick={handleClose1} type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></Button>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form.Label htmlFor="create-file1" className="">File Name</Form.Label>
                                        <Form.Control type="text" className="" id="create-file1" placeholder="File Name" />
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="" onClick={handleClose1} type="button" className="btn btn-sm btn-icon btn-light"
                                            data-bs-dismiss="modal"><i className="ri-close-fill"></i></Button>
                                        <Button variant="" type="button" className="btn btn-sm btn-success">Create</Button>
                                    </Modal.Footer>
                                </div>
                            </Modal>
                        </div>
                    </div>
                    <div className="p-3 file-folders-container overflow-auto" id="file-folders-container">
                        <div className="d-flex mb-3 align-items-center justify-content-between">
                            <p className="mb-0 fw-medium fs-14">My Files</p>
                            <button className="btn btn-sm btn-primary-light">View All</button>
                        </div>
                        <Row className="mb-2">
                            {Myfilesdata.map((idx) => (
                                <Col xxl={2} xl={6} lg={6} md={6} className="" key={Math.random()}>
                                    <Card className="custom-card shadow-none">
                                        <div className="top-left"></div>
                                        <div className="top-right"></div>
                                        <div className="bottom-left"></div>
                                        <div className="bottom-right"></div>
                                        <Card.Body className="p-3">
                                            <Link href="#!" scroll={false}>
                                                <div className="text-center">
                                                    <div className="file-format-icon text-primary">
                                                        <i className={`ri-${idx.icon}`}></i>
                                                    </div>
                                                    <div>
                                                        <span className="fw-medium mb-1">
                                                            {idx.data}
                                                        </span>
                                                        <span className="fs-11 d-block text-muted">
                                                            {idx.files} Files
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                        <div className="d-flex mb-3 align-items-center justify-content-between">
                            <p className="mb-0 fw-medium fs-14">Folders</p>
                            <button className="btn btn-sm btn-primary-light">View All</button>
                        </div>
                        <Row className="mb-2">
                            <Col xxl={4} xl={6} lg={6} md={6} className="">
                                <Card className="custom-card shadow-none">
                                    <div className="top-left"></div>
                                    <div className="top-right"></div>
                                    <div className="bottom-left"></div>
                                    <div className="bottom-right"></div>
                                    <Card.Body>
                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                            <div className="folder-svg-container">
                                                <div className="svg-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path opacity="1" d="M19.97586,10V9a3,3,0,0,0-3-3H10.69678l-.31622-.94868A3,3,0,0,0,7.53451,3H3.97586a3,3,0,0,0-3,3V19a2,2,0,0,0,2,2H3.3067a2,2,0,0,0,1.96774-1.64223l1.40283-7.71554A2,2,0,0,1,8.645,10Z" /><path opacity="0.3" d="M22.02386,10H8.645a2,2,0,0,0-1.96777,1.64221L5.27441,19.35773A2,2,0,0,1,3.3067,21H19.55292a2,2,0,0,0,1.96771-1.64227l1.48712-8.17884A1,1,0,0,0,22.02386,10Z" /></svg>
                                                </div>
                                            </div>
                                            <div className="ms-3">
                                                <p className="fs-14 fw-medium mb-1 lh-1">
                                                    <Link href="#!" scroll={false}>Images</Link>
                                                </p>
                                                <div className="text-muted fs-12">
                                                    451 Files
                                                </div>
                                            </div>
                                            <div className="text-default fw-medium ms-5">
                                                147.45MB
                                            </div>
                                            <div className="ms-auto">
                                                <Dropdown>
                                                    <Dropdown.Toggle as="a" className="btn btn-sm btn-icon btn-primary-transparent btn-wave waves-light no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="ri-more-2-fill"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu as="ul">
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Delete</Link></Dropdown.Item>
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Rename</Link></Dropdown.Item>
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Hide Folder</Link></Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={4} xl={6} lg={6} md={6} className="">
                                <Card className="custom-card shadow-none">
                                    <div className="top-left"></div>
                                    <div className="top-right"></div>
                                    <div className="bottom-left"></div>
                                    <div className="bottom-right"></div>
                                    <Card.Body>
                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                            <div className="folder-svg-container">
                                                <div className="svg-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path opacity="1" d="M19.97586,10V9a3,3,0,0,0-3-3H10.69678l-.31622-.94868A3,3,0,0,0,7.53451,3H3.97586a3,3,0,0,0-3,3V19a2,2,0,0,0,2,2H3.3067a2,2,0,0,0,1.96774-1.64223l1.40283-7.71554A2,2,0,0,1,8.645,10Z" /><path opacity="0.3" d="M22.02386,10H8.645a2,2,0,0,0-1.96777,1.64221L5.27441,19.35773A2,2,0,0,1,3.3067,21H19.55292a2,2,0,0,0,1.96771-1.64227l1.48712-8.17884A1,1,0,0,0,22.02386,10Z" /></svg>
                                                </div>
                                            </div>
                                            <div className="ms-3">
                                                <p className="fs-14 fw-medium mb-1 lh-1">
                                                    <Link href="#!" scroll={false}>Docs</Link>
                                                </p>
                                                <div className="text-muted fs-12">
                                                    21 Files
                                                </div>
                                            </div>
                                            <div className="text-default fw-medium ms-5">
                                                547.24KB
                                            </div>
                                            <div className="ms-auto">
                                                <Dropdown>
                                                    <Dropdown.Toggle as="a" className="btn btn-sm btn-icon btn-primary-transparent btn-wave waves-light no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="ri-more-2-fill"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu as="ul">
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Delete</Link></Dropdown.Item>
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Rename</Link></Dropdown.Item>
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Hide Folder</Link></Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={4} lg={12}>
                                <Card className="custom-card shadow-none">
                                    <div className="top-left"></div>
                                    <div className="top-right"></div>
                                    <div className="bottom-left"></div>
                                    <div className="bottom-right"></div>
                                    <Card.Body>
                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                            <div className="folder-svg-container">
                                                <div className="svg-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path opacity="1" d="M19.97586,10V9a3,3,0,0,0-3-3H10.69678l-.31622-.94868A3,3,0,0,0,7.53451,3H3.97586a3,3,0,0,0-3,3V19a2,2,0,0,0,2,2H3.3067a2,2,0,0,0,1.96774-1.64223l1.40283-7.71554A2,2,0,0,1,8.645,10Z" /><path opacity="0.3" d="M22.02386,10H8.645a2,2,0,0,0-1.96777,1.64221L5.27441,19.35773A2,2,0,0,1,3.3067,21H19.55292a2,2,0,0,0,1.96771-1.64227l1.48712-8.17884A1,1,0,0,0,22.02386,10Z" /></svg>
                                                </div>
                                            </div>
                                            <div className="ms-3">
                                                <p className="fs-14 fw-medium mb-1 lh-1">
                                                    <Link href="#!" scroll={false}>Downloads</Link>
                                                </p>
                                                <div className="text-muted fs-12">
                                                    874 Files
                                                </div>
                                            </div>
                                            <div className="text-default fw-medium ms-5">
                                                5.10GB
                                            </div>
                                            <div className="ms-auto">
                                                <Dropdown>
                                                    <Dropdown.Toggle as="a" className="btn btn-sm btn-icon btn-primary-transparent btn-wave waves-light no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="ri-more-2-fill"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu as="ul">
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Delete</Link></Dropdown.Item>
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Rename</Link></Dropdown.Item>
                                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Hide Folder</Link></Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <div className="d-flex mb-3 align-items-center justify-content-between">
                            <p className="mb-0 fw-semibold fs-14">Recents Files</p>
                            <Button variant='' className="btn btn-sm btn-primary-light">View All</Button>
                        </div>
                        <Row>
                            <Col xl={12}>
                                <div className="table-responsive border border-bottom-0">
                                    <Table className="table text-nowrap table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">File Name</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Size</th>
                                                <th scope="col">Date Modified</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="files-list">
                                            {Recentdata.map((idx) => (
                                                <tr className="table" key={Math.random()} onClick={handleToggleDetails}>
                                                    <th scope="row">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-xs">
                                                                    <img src={idx.img} alt="" />
                                                                </span>
                                                            </div>
                                                            <div onClick={handleShow2}>{idx.text1}
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>{idx.text2}</td>
                                                    <td>{idx.text3}</td>
                                                    <td>{idx.text4}</td>
                                                    <td>
                                                        <div className="hstack gap-2 fs-15">
                                                            <Link href="#!" scroll={false} className="btn btn-sm btn-info-transparent"><i className="ri-eye-line"></i></Link>
                                                            <Link href="#!" scroll={false} className="btn btn-sm btn-danger-transparent"><i className="ri-delete-bin-line"></i></Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan={5}>
                                                    <nav aria-label="Page navigation">
                                                        <Pagination className="justify-content-end mb-0">
                                                            <Pagination.Item disabled href="#!">Previous</Pagination.Item>
                                                            <Pagination.Item href="#!">1</Pagination.Item>
                                                            <Pagination.Item href="#!">2</Pagination.Item>
                                                            <Pagination.Item href="#!">Next</Pagination.Item>
                                                        </Pagination>
                                                    </nav>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </Table>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <Offcanvas className="offcanvas-end" placement="end" tabIndex={-1} id="offcanvasRight" show={show2} onHide={handleClose2}>
                <Offcanvas.Body className="p-0">
                    <div className="selected-file-details">
                        <div className="d-flex p-3 align-items-center justify-content-between border-bottom">
                            <div>
                                <h6 className="fw-medium mb-0">File Details</h6>
                            </div>
                            <div className="d-flex align-items-center">
                                <Dropdown className="me-1">
                                    <Dropdown.Toggle as="a" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-light waves-effect waves-light no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul">
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Share</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Copy</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Move</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Delete</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Raname</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button variant="" type="button" onClick={handleClose2} className="btn btn-sm btn-icon btn-outline-light border" data-bs-dismiss="offcanvas"
                                    aria-label="Close"><i className="ri-close-line"></i></Button>
                            </div>
                        </div>
                        <div className="filemanager-file-details" id="filemanager-file-details">
                            <div className="p-3 text-center border-bottom border-block-end-dashed">
                                <div className="file-details mb-3">
                                    <img src="../../../assets/images/media/file-manager/3.png" alt="" />
                                </div>
                                <div>
                                    <p className="mb-0 fw-medium fs-16">AMB-2012.zip</p>
                                    <p className="mb-0 text-muted fs-10">422KB | 23,Nov 2023</p>
                                </div>
                            </div>
                            <div className="p-3 border-bottom border-block-end-dashed">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <div>
                                            <span className="fw-medium">File Format : </span><span className="fs-12 text-muted">zip</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div>
                                            <p className="fw-medium mb-0">File Description : </p>
                                            <span className="fs-12 text-muted">This file contains 3 folder SCIFI.main & SCIFI.premium & SCIFI.featured and 42 images and layout styles are added in this update.</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <p className="fw-medium mb-0">File Location : </p>
                                        <span className="fs-12 text-muted">Device/Storage/Archives/AMB-2012.zip</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-3 border-bottom border-block-end-dashed">
                                <p className="mb-1 fw-medium fs-14">Downloaded from :</p>
                                <Link className="text-primary fw-medium text-break" href="https://themeforest.net/user/spruko/portfolio" target="_blank" rel="noreferrer">
                                    <u>https://themeforest.net/user/spruko/portfolio</u>
                                </Link>
                            </div>
                            <div className="p-3">
                                <p className="mb-2 fw-medium fs-14">Shared With :</p>
                                <div className="d-flex align-items-center p-2 mb-1">
                                    <span className="avatar avatar-sm me-2">
                                        <img src="../../../assets/images/faces/1.jpg" alt="" />
                                    </span>
                                    <span className="fw-medium flex-fill">Akira Susan</span>
                                    <span className="badge bg-success-transparent fw-normal">28,Nov 2023</span>
                                </div>
                                <div className="d-flex align-items-center p-2 mb-1">
                                    <span className="avatar avatar-sm me-2">
                                        <img src="../../../assets/images/faces/15.jpg" alt="" />
                                    </span>
                                    <span className="fw-medium flex-fill">Khalid Ahmad</span>
                                    <span className="badge bg-success-transparent fw-normal">16,Oct 2023</span>
                                </div>
                                <div className="d-flex align-items-center p-2 mb-1">
                                    <span className="avatar avatar-sm me-2">
                                        <img src="../../../assets/images/faces/8.jpg" alt="" />
                                    </span>
                                    <span className="fw-medium flex-fill">Jeremiah Jackson</span>
                                    <span className="badge bg-success-transparent fw-normal">05,Dec 2023</span>
                                </div>
                                <div className="d-flex align-items-center p-2">
                                    <span className="avatar avatar-sm me-2">
                                        <img src="../../../assets/images/faces/13.jpg" alt="" />
                                    </span>
                                    <span className="fw-medium flex-fill">Brigo Jhonson</span>
                                    <span className="badge bg-success-transparent fw-normal">13,Nov 2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </Fragment>
    );
};

export default FileManager;
