"use client";
import React, { Fragment, useState } from 'react';
import { Badge, Card, Col, ProgressBar, Row, Table } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Tabledata } from '@/shared/data/apps/nft/nftdetailsdata';
import Seo from '@/shared/layout-components/seo/seo';

const NftDetails = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState<any>(false);

    return (
        <Fragment>
            <Seo title={"NFT Details"} />
            <Row className="justify-content-center">
                <Col xl={12}>
                    <Card className="custom-card overflow-hidden">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body>
                            <div className="row gx-5">
                                <Col xxl={4} xl={12}>
                                    <Row>
                                        <Col xxl={12} sm={12} className="mb-md-5 mb-3">
                                            <Swiper
                                                loop={true}
                                                spaceBetween={10}
                                                navigation={true}
                                                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                                modules={[FreeMode, Navigation, Thumbs]}
                                                className="mySwiper2  swiper-preview-details bg-light product-details-page"
                                            >
                                                <SwiperSlide>
                                                    <img className="img-fluid" src="../../../assets/images/nft-images/30.png" alt="img" />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img className="img-fluid" src="../../../assets/images/nft-images/31.png" alt="img" />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img className="img-fluid" src="../../../assets/images/nft-images/30.png" alt="img" />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img className="img-fluid" src="../../../assets/images/nft-images/33.png" alt="img" />
                                                </SwiperSlide>
                                            </Swiper>

                                            <Swiper
                                                onSwiper={setThumbsSwiper}
                                                loop={true}
                                                spaceBetween={10}
                                                slidesPerView={4}
                                                freeMode={true}
                                                watchSlidesProgress={true}
                                                modules={[FreeMode, Navigation, Thumbs]}
                                                className="mySwiper swiper swiper-view-details mt-2"
                                            >
                                                <SwiperSlide>
                                                    <img className="img-fluid" src="../../../assets/images/nft-images/32.png" alt="img" />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img className="img-fluid" src="../../../assets/images/nft-images/31.png" alt="img" />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img className="img-fluid" src="../../../assets/images/nft-images/30.png" alt="img" />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img className="img-fluid" src="../../../assets/images/nft-images/33.png" alt="img" />
                                                </SwiperSlide>
                                            </Swiper>
                                            <div className="d-grid mt-4">
                                                <button className="btn btn-primary btn-wave">Place a bid</button>
                                            </div>
                                        </Col>
                                        <Col xxl={12} sm={12} className=" d-md-block d-none">
                                            <p className="fs-15 fw-semibold mb-2">Top Collections :</p>
                                            <div className="table-responsive overflow-hidden">
                                                <table className="table table-bordered text-nowrap">
                                                    <tbody>
                                                        {Tabledata.map((idx) => (
                                                            <tr key={Math.random()}>
                                                                <td>
                                                                    <Link href="#!" scroll={false}>
                                                                        <div className="d-flex align-items-top">
                                                                            <div className="avatar me-2">
                                                                                <img src={idx.src} alt="" />
                                                                            </div>
                                                                            <div className="flex-fill">
                                                                                <p className="mb-1 fs-14 fw-semibold similar-product-name text-truncate">{idx.text1}</p>
                                                                                <p className="mb-0">
                                                                                    <span className="badge bg-success">{idx.text2}<i className="ri-heart-3-fill align-middle ms-1"></i></span>
                                                                                    <span className="text-muted ms-2">{idx.text3}</span>
                                                                                </p>
                                                                            </div>
                                                                            <div className="text-center">
                                                                                <p className="mb-0 fs-16 fw-semibold">
                                                                                    <span className="avatar avatar-xs avatar-rounded p-1">
                                                                                        <img src="../../../assets/images/crypto-currencies/regular/Ethereum.svg" alt="" /></span>{idx.text4}
                                                                                </p>
                                                                                <p className="mb-0 text-muted">
                                                                                    <s><span className="avatar avatar-xs avatar-rounded p-1">
                                                                                        <img src="../../../assets/images/crypto-currencies/regular/Ethereum.svg" alt="" /></span>{idx.text5}</s>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                        <tr>
                                                            <td className="d-grid">
                                                                <button className="btn btn-primary-light">View All{` NFT's`}</button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xxl={8} xl={12}>
                                    <div className="row gx-5">
                                        <Col xl={12} className="mt-xxl-0 mt-3">
                                            <div>
                                                <div className="d-flex justify-content-between gap-2 mb-4">
                                                    <h4 className="fw-medium mb-0 text-primary">Digital Brain-by Quantum Mindscape - NFT Digital Art</h4>
                                                    <div className="btn-list">
                                                        <Link href="#!" scroll={false} className="btn btn-danger-light btn-sm btn-icon"><i className="ri-heart-3-line align-middle"></i></Link>
                                                        <Link href="#!" scroll={false} className="btn btn-info-light btn-sm btn-icon"><i className="ri-share-line align-middle"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="row mb-3 align-items-center gy-2">
                                                    <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="">
                                                        <div className="d-flex gap-2 align-items-center">
                                                            <p className="mb-0 lh-1 fs-13 fw-medium text-muted">Versions :</p>
                                                            <p className="mb-0 fs-14 mb-0 align-middle">12 Versions Avaliable</p>
                                                        </div>
                                                        <div className="d-flex gap-2 align-items-center">
                                                            <p className="mb-0 lh-1 fs-13 fw-medium text-muted">Published On :</p>
                                                            <p className="mb-0 fs-14 mb-0 align-middle">08, Sep 2023 - 03:45PM</p>
                                                        </div>
                                                    </Col>
                                                    <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="">
                                                        <div className="d-flex gap-2 align-items-center">
                                                            <span className="avatar avatar-sm"><img src="../../../assets/images/faces/11.jpg" alt="" /></span>
                                                            <div>
                                                                <p className="mb-0 lh-1 fs-11 op-8 fw-medium text-muted">Created By :</p>
                                                                <p className="fs-14 mb-0 align-middle">James Lucas</p>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="">
                                                        <div className="d-flex gap-2 align-items-center">
                                                            <span className="avatar avatar-sm"><img src="../../../assets/images/faces/16.jpg" alt="" /></span>
                                                            <div>
                                                                <p className="mb-0 lh-1 fs-11 op-8 fw-medium text-muted">Owned By :</p>
                                                                <p className="fs-14 mb-0 align-middle">Mateo Daniel </p>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xxl={12} xl={12} className="mb-1 mt-3">
                                                        <div className="d-flex gap-2 align-items-center mb-3">
                                                            <p className="mb-0 lh-1 fs-13 fw-medium text-muted">Price :</p>
                                                            <p className="mb-1">
                                                                <span className="h5">
                                                                    <i className="ri-eth-line me-2"></i>
                                                                    <span className=" text-success me-2">0.578ETH
                                                                        <span className="mb-0 text-muted fs-13 op-8 ms-2">
                                                                            <s>0.869ETH</s>
                                                                        </span>
                                                                    </span>
                                                                    <span className=''>- Highest Bid</span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div className="d-flex gap-4 align-items-center">
                                                            <p className="mb-0 lh-1 fs-13 fw-medium text-muted">Aution Ends In :</p>
                                                            <div className="d-flex gap-2 border p-2 border-dashed">
                                                                <div>
                                                                    <h4 className="mb-0">48 <span className="fs-13 fw-normal text-warning">Hrs</span></h4>
                                                                </div>
                                                                <div className="mx-2">:</div>
                                                                <div>
                                                                    <h4 className="mb-0">25 <span className="fs-13 fw-normal text-warning">Mins</span></h4>
                                                                </div>
                                                                <div className="mx-2">:</div>
                                                                <div>
                                                                    <h4 className="mb-0">15 <span className="fs-13 fw-normal text-warning">Sec</span></h4>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </div>
                                                <div className="mb-4">
                                                    <p className="fs-15 fw-medium mb-1">Description :</p>
                                                    <p className="text-muted mb-0 fs-14">
                                                        Dive into the intricate complexities of the mind with 'The Digital Brain,' an exclusive NFT artwork crafted by the visionary digital artist, Quantum Mindscape. This piece is a visual representation of the synapses firing and neural networks connecting within the vast expanse of the digital realm. Quantum Mindscape skillfully combines geometric patterns and vibrant hues to create a mesmerizing portrayal of the interplay between technology and cognition.
                                                    </p>
                                                </div>
                                                <div className="mb-4">
                                                    <p className="fs-15 fw-medium mb-2">Additional Details :</p>
                                                    <Row>
                                                        <Col xl={10}>
                                                            <div className="table-responsive">
                                                                <Table className="table table-bordered text-nowrap">
                                                                    <tbody>
                                                                        <tr>
                                                                            <th scope="row" className="fw-medium">
                                                                                Artist Name
                                                                            </th>
                                                                            <td>James Lucas</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row" className="fw-medium">
                                                                                Artwork Type
                                                                            </th>
                                                                            <td>
                                                                                Digital Collage
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row" className="fw-medium">
                                                                                Edition
                                                                            </th>
                                                                            <td>
                                                                                2 of 12
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row" className="fw-medium">
                                                                                Current Owner
                                                                            </th>
                                                                            <td>
                                                                                Nikki Jones
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row" className="fw-medium">
                                                                                Dimensions
                                                                            </th>
                                                                            <td>
                                                                                2048 x 2048 pixels
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row" className="fw-medium">
                                                                                Platform
                                                                            </th>
                                                                            <td>
                                                                                Solana blockchain
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row" className="fw-medium">
                                                                                File Format
                                                                            </th>
                                                                            <td>
                                                                                GIF
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <div className="mb-4">
                                                    <p className="fs-15 fw-medium mb-2">Features :</p>
                                                    <div className="row">
                                                        <Col xl={6}>
                                                            <ul className="mb-0 ps-3 fs-14">
                                                                <li className="text-muted mb-2">
                                                                    NFT Title: "The Digital Brain"
                                                                </li>
                                                                <li className="text-muted mb-2">
                                                                    Edition: 2 of 12
                                                                </li>
                                                                <li className="text-muted mb-2">
                                                                    Medium: Digital Collage
                                                                </li>
                                                                <li className="text-muted mb-2">
                                                                    Smart Contract Address: ABCD@011
                                                                </li>
                                                                <li className="text-muted mb-2">
                                                                    Minting Date: January 1, 2024
                                                                </li>
                                                                <li className="text-muted mb-2">
                                                                    Average Rating: 4.7/5
                                                                </li>
                                                                <li className="text-muted">
                                                                    Dimensions: 2048 x 2048 pixels
                                                                </li>
                                                            </ul>
                                                        </Col>
                                                        <Col xl={6}>
                                                            <ul className="mb-0 fs-14">
                                                                <li className="text-muted mb-2">
                                                                    Animation: 60 frames per second (fps)
                                                                </li>
                                                                <li className="text-muted mb-2">
                                                                    Tags: #digital, #brain, #digitalCatch, #mindful
                                                                </li>
                                                                <li className="text-muted mb-2">
                                                                    Country of origin: Canada
                                                                </li>
                                                                <li className="text-muted">
                                                                    Exhibition History: Digital Art Expo 2023 - Gallery XYZ, New York City
                                                                </li>
                                                            </ul>
                                                        </Col>
                                                    </div>
                                                </div>
                                                <div className="mb-0">
                                                    <p className="fs-15 fw-medium mb-3">Ratings :</p>
                                                    <div className="row">
                                                        <Col xxl={6} xl={12} lg={12} md={12} sm={12} className="">
                                                            <div className="d-flex align-items-top mb-3">
                                                                <div className="me-2 lh-1">
                                                                    <i className="ri-star-fill fs-25 text-warning"></i>
                                                                </div>
                                                                <div className="lh-1">
                                                                    <p className="mb-1">4.3 out of 5</p>
                                                                    <p className="mb-0 text-muted fs-11">Overall Rating</p>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-3">
                                                                <div className="progress progress-xs flex-fill">
                                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: "85%" }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                                                                    </div>
                                                                </div>
                                                                <div className="text-muted ms-2 fs-12">(10K Rated)</div>
                                                            </div>
                                                        </Col>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </div>
                                </Col>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default NftDetails;
