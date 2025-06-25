"use client";
import React, { Fragment } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';

registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

const CreateNft = () => {

    const Data1 = [
        { value: 'Choose Royalities', label: 'Choose Royalities' },
        { value: 'Flat Royalty', label: 'Flat Royalty' },
        { value: 'Graduated Royalty', label: 'Graduated Royalty' },
        { value: 'Tiered Royalty', label: 'Tiered Royalty' },
        { value: 'Time-Limited Royalty', label: 'Time-Limited Royalty' },
        { value: 'Customized Royalty', label: 'Customized Royalty' },
    ];

    return (
        <Fragment>
            <Seo title={"Create NFT"} />
            <Row>
                <Col xxl={9} xl={8} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">Create NFT</div>
                        </Card.Header>
                        <Card.Body>
                            <div className="row gy-3 justify-content-between">
                                <Col xxl={12} xl={12}>
                                    <div className="row gy-3">
                                        <Col xl={12}>
                                            <Form.Label htmlFor="input-placeholder" className="">NFT Title</Form.Label>
                                            <Form.Control type="text" className="" id="input-placeholder" placeholder="eg:Neo-Nebulae" />
                                        </Col>
                                        <Col xl={12}>
                                            <Form.Label htmlFor="nft-description" className="">NFT Description</Form.Label>
                                            <Form.Control as="textarea" className="" id="nft-description" rows={3} placeholder="Enter Description" />
                                        </Col>
                                        <Col xl={12}>
                                            <Form.Label htmlFor="nft-link" className="">External Link</Form.Label>
                                            <Form.Control type="text" className="" id="nft-link" placeholder="External Link Here" />
                                        </Col>
                                    </div>
                                </Col>
                                <div className="col-xl-12">
                                </div>
                                <Col xxl={3} xl={12}>
                                    <div className="create-nft-item">
                                        <Form.Label className="form-label">Upload NFT</Form.Label>
                                        <FilePond className="filepond" labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>'
                                            stylePanelLayout='compact circle' styleLoadIndicatorPosition='center bottom'
                                            styleButtonRemoveItemPosition='center bottom' />
                                    </div>
                                </Col>
                                <Col xxl={8} xl={12} className="">
                                    <div className="row gy-4">
                                        <Col xl={6}>
                                            <Form.Label htmlFor="nft-creator-name" className="">Creator Name</Form.Label>
                                            <Form.Control type="text" id="nft-creator-name" placeholder="Enter Name" />
                                        </Col>
                                        <Col xl={6}>
                                            <Form.Label htmlFor="nft-price" className="">NFT Price</Form.Label>
                                            <Form.Control type="text" id="nft-price" placeholder="Enter Price" />
                                        </Col>
                                        <Col xl={4}>
                                            <Form.Label htmlFor="nft-size" className="">NFT Size</Form.Label>
                                            <Form.Control type="text" id="nft-size" placeholder="Enter Size" />
                                        </Col>
                                        <Col xl={4}>
                                            <Form.Label htmlFor="nft-royality" className="">Royality</Form.Label>
                                            <Select options={Data1} classNamePrefix='Select2' menuPlacement='auto' className="multi-select"
                                                placeholder="Choose Royalities" />
                                        </Col>
                                        <Col xl={4}>
                                            <Form.Label htmlFor="nft-property" className="">Property</Form.Label>
                                            <Form.Control type="text" id="nft-property" placeholder="Enter Property" />
                                        </Col>
                                        <Col xl={12}>
                                            <Form.Label className=" d-block">Method</Form.Label>
                                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                <input type="radio" className="btn-check" name="strap-material" id="strap1" defaultChecked />
                                                <Form.Label className="btn btn-sm btn-outline-primary text-default z-0" htmlFor="strap1"><i className="ti ti-tag me-1 align-middle fs-15 d-inline-block"></i>Fixed Price</Form.Label>
                                                <input type="radio" className="btn-check" name="strap-material" id="strap2" />
                                                <Form.Label className="btn btn-sm btn-outline-primary text-default z-0" htmlFor="strap2"><i className="ti ti-users fs-15 me-1 align-middle d-inline-block"></i>Open For Bids</Form.Label>
                                                <input type="radio" className="btn-check" name="strap-material" id="strap3" />
                                                <Form.Label className="btn btn-sm btn-outline-primary text-default z-0" htmlFor="strap3"><i className="ti ti-hourglass-low fs-15 me-1 align-middle d-inline-block"></i>Timed Auction</Form.Label>
                                            </div>
                                        </Col>
                                    </div>
                                </Col>
                            </div>
                        </Card.Body>
                        <Card.Footer className="text-end">
                            <Link href="#!" scroll={false} className="btn btn-primary btn-wave waves-effect waves-light">Create NFT</Link>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={3} xl={4}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="card-header">
                            <div className="card-title">
                                NFT Preview Here
                            </div>
                        </div>
                        <Card.Body>
                            <div className="card custom-card shadow-none border-0 overflow-hidden mb-0">
                                <img src="../../../assets/images/nft-images/29.png" className="card-img-top nft-image" alt="..." />
                                <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                    <div className="flex-fill">
                                        <Button variant='' className="btn btn-sm btn-icon btn-success rounded-pill btn-wave">
                                            <i className="ri-heart-fill"></i>
                                        </Button>
                                    </div>
                                    <div>
                                        <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>2.45k</span>
                                    </div>
                                </div>
                                <div className="card-body nft-body">
                                    <div className="mb-0 text-fixed-white nft-auction-time">
                                        06hrs : 38m : 53s
                                    </div>
                                    <p className="fw-medium text-fixed-white">Ninja Abstracts - NFT</p>
                                    <div className="d-flex flex-wrap text-fixed-white align-items-center gap-2">
                                        <span className="avatar avatar-rounded avatar-md">
                                            <img src="../../../assets/images/faces/12.jpg" alt="" />
                                        </span>
                                        <div className="">
                                            <p className="mb-0 fw-medium">CarosArt NFT</p>
                                            <p className="fs-12 op-8 mb-0">@carosart11</p>
                                        </div>
                                        <div className="ms-auto">
                                            <div className="text-success fw-medium">
                                                0.14ETH
                                            </div>
                                            <p className="fs-12 op-8 mb-0">Current Bid</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default CreateNft;
