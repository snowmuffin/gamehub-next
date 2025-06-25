"use client";
import React, { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs, FreeMode, Navigation } from 'swiper/modules';
import Link from "next/link";
import Seo from "@/shared/layout-components/seo/seo";
import { Card, Col, Collapse, Row, Table } from "react-bootstrap";
const ProductDetails = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    const breakpoints: any = {
        0: {
            direction: "horizontal",
            spaceBetween: 5,
        },
        768: {
            direction: "vertical"
        }
    }

    const [open, setOpen] = useState(false);

    return (
        <Fragment>
            <Seo title={"Product Details"} />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body>
                            <Row className="gx-5">
                                <Col xxl={6} xl={12} className="">
                                    <div className="row productdetails-leftsection">
                                        <Col xxl={12} lg={12} md={12} sm={12} className="">
                                            <div className="mySwiper2 swiper-gallery-container">
                                                <Swiper className="swiper-preview-details product-details-page" spaceBetween={10} autoplay={{ delay: 2500, disableOnInteraction: false, }} navigation={true}
                                                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                                    modules={[FreeMode, Navigation, Thumbs, Autoplay]}>
                                                    <SwiperSlide className="" id="img-container">
                                                        <img className="img-fluid" src="../../../assets/images/ecommerce/png/1.png" alt="img" />
                                                    </SwiperSlide>
                                                    <SwiperSlide className=" image-container">
                                                        <img className="img-fluid" src="../../../assets/images/ecommerce/png/2.png" alt="img" />
                                                    </SwiperSlide>
                                                    <SwiperSlide className=" image-container">
                                                        <img className="img-fluid" src="../../../assets/images/ecommerce/png/3.png" alt="img" />
                                                    </SwiperSlide>
                                                    <SwiperSlide className=" image-container">
                                                        <img className="img-fluid" src="../../../assets/images/ecommerce/png/4.png" alt="img" />
                                                    </SwiperSlide>
                                                </Swiper>
                                                <Swiper onSwiper={setThumbsSwiper} breakpoints={breakpoints} autoplay={{ delay: 2500, disableOnInteraction: false, }} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true}
                                                    modules={[FreeMode, Navigation, Thumbs, Autoplay]} className=" mySwiper swiper swiper-view-details productdetails-swiper mt-2">
                                                    <SwiperSlide className="">
                                                        <img className="img-fluid" src="../../../assets/images/ecommerce/png/1.png" alt="img" />
                                                    </SwiperSlide>
                                                    <SwiperSlide className="">
                                                        <img className="img-fluid" src="../../../assets/images/ecommerce/png/2.png" alt="img" />
                                                    </SwiperSlide>
                                                    <SwiperSlide className="">
                                                        <img className="img-fluid" src="../../../assets/images/ecommerce/png/3.png" alt="img" />
                                                    </SwiperSlide>
                                                    <SwiperSlide className="">
                                                        <img className="img-fluid" src="../../../assets/images/ecommerce/png/4.png" alt="img" />
                                                    </SwiperSlide>
                                                </Swiper>
                                            </div>
                                            <div className="mt-md-4 mt-3">
                                                <div className="mb-4">
                                                    <p className="fs-15 fw-medium mb-1">Description :</p>
                                                    <p className="text-muted mb-0 fs-14">
                                                        Elevate your seating experience with the SereneComfort Premium Ball Chair, designed for optimal comfort and posture support. Its innovative ball-shaped structure promotes active sitting, enhancing core strength and relaxation, making it an ideal choice for a balanced and comfortable seating solution.
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="fs-15 fw-medium mb-3">Specifications :</p>
                                            <div className="table-responsive">
                                                <Table className="table-bordered text-nowrap">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row" className="fw-medium">
                                                                Brand
                                                            </th>
                                                            <td>SereneComfort</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" className="fw-medium">
                                                                Model Name
                                                            </th>
                                                            <td>
                                                                Ball Chair
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" className="fw-medium">
                                                                Color
                                                            </th>
                                                            <td>
                                                                Lemon Yellow
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" className="fw-medium">
                                                                Style
                                                            </th>
                                                            <td>
                                                                Rounded
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" className="fw-medium">
                                                                Special Features
                                                            </th>
                                                            <td>
                                                                Satin Serenity
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Col>
                                    </div>
                                </Col>
                                <Col xxl={6} xl={12} className="">
                                    <Row className="gx-5">
                                        <Col xl={12} className="mt-xxl-0 mt-3">
                                            <div>
                                                <p className="fs-3 fw-medium mb-2 productdetail-title">SereneComfort Premium Ball Chair with Flat and soft Cushion for Convenient Support and Stylish Comfort</p>
                                                <p className="fs-18 mb-4">
                                                    <i className="ri-star-s-fill text-warning align-middle"></i>
                                                    <i className="ri-star-s-fill text-warning align-middle"></i>
                                                    <i className="ri-star-s-fill text-warning align-middle"></i>
                                                    <i className="ri-star-s-fill text-warning align-middle"></i>
                                                    <i className="ri-star-half-s-fill text-warning align-middle"></i>
                                                    <span className="fw-medium text-muted ms-1">4.4<Link className="text-secondary" href="#!" scroll={false}> (3.2k Reviews)</Link></span>
                                                </p>
                                                <div className="row mb-3 gx-3">
                                                    <div className="col-xxl-12 col-xl-12">
                                                        <div className="d-flex gap-3 align-items-center mb-3 flex-wrap">
                                                            <p className="fs-15 fw-medium mb-0">Price :</p>
                                                            <p className="mb-0"><span className="h2"><sup className="fs-14">$</sup>3,499<sup className="fs-14">.00</sup></span></p>
                                                            <p className="mb-0 text-muted fs-13">M.R.P-<s>$2,599.00</s></p>
                                                            <p className="lh-1 fs-11 badge bg-success-transparent fw-medium mb-0">Special Offer: 30% off on Category</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-12 col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                                        <div className="d-flex gap-3">
                                                            <p className="fs-15 fw-medium mb-2">Colors :</p>
                                                            <p className="mb-0 d-flex">
                                                                <Link className="color-1 product-colors selected" href="#!" scroll={false}>
                                                                    <i className="ri-checkbox-blank-fill"></i>
                                                                </Link>
                                                                <Link className="color-2 product-colors" href="#!" scroll={false}>
                                                                    <i className="ri-checkbox-blank-fill"></i>
                                                                </Link>
                                                                <Link className="color-3 product-colors" href="#!" scroll={false}>
                                                                    <i className="ri-checkbox-blank-fill"></i>
                                                                </Link>
                                                                <Link className="color-4 product-colors" href="#!" scroll={false}>
                                                                    <i className="ri-checkbox-blank-fill"></i>
                                                                </Link>
                                                            </p>
                                                        </div>
                                                        <div className="d-flex gap-3 mt-3">
                                                            <p className="fs-15 fw-medium mb-1">Number of Chairs :</p>
                                                            <p className="mb-0">1</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <div className="row justify-content-center">
                                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                                            <p className="fs-15 fw-medium mb-0"><i className="ri-truck-line text-primary me-2"></i>Free Shipping Available</p>
                                                        </div>
                                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 mt-sm-0 mt-3">
                                                            <p className="fs-15 fw-medium mb-0"><i className="ri-secure-payment-line text-primary me-2"></i>100% Secure Payment</p>
                                                        </div>
                                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 mt-sm-0 mt-3">
                                                            <p className="fs-15 fw-medium mb-0"><i className="ri-shake-hands-line text-primary me-2"></i>Guaranteed Quality</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-4 btn-list">
                                                    <Link href="/apps/ecommerce/checkout" className="btn btn-primary btn-w-lg mb-2">Buy Now</Link>
                                                    <Link href="/apps/ecommerce/cart" className="btn btn-secondary-transparent btn-w-lg mb-2">Add To Cart</Link>
                                                    <Link href="/apps/ecommerce/wishlist" className="btn btn-outline-danger mb-2"><i className="ri-heart-line"></i> Add to wishlist</Link>
                                                </div>
                                                <div className="mb-4">
                                                    <p className="fs-15 fw-medium mb-3">Features :</p>
                                                    <Row>
                                                        <Col xl={6}>
                                                            <ul className="mb-0 list-unstyled">
                                                                <li className="text-muted mb-3 d-flex gap-2">
                                                                    <span>Material</span> - Plastic
                                                                </li>
                                                                <li className="text-muted mb-3 d-flex gap-2">
                                                                    <span>Dimensions</span> - 50 cm x 70 cm x 78 cm
                                                                </li>
                                                                <li className="text-muted mb-3 d-flex gap-2">
                                                                    <span>Wheels</span> - Available at Bottom
                                                                </li>
                                                            </ul>
                                                        </Col>
                                                        <Col xl={6}>
                                                            <ul className="mb-0 list-unstyled">
                                                                <li className="text-muted mb-3 d-flex gap-2">
                                                                    <span>Weight</span> - 2.1kg
                                                                </li>
                                                                <li className="text-muted mb-3 d-flex gap-2">
                                                                    <span>Cushion Dimensions</span> - 20 cm x 40 cm (2)
                                                                </li>
                                                                <li className="text-muted mb-3 d-flex gap-2">
                                                                    <span>Cushion Weight</span> - 1.5kg
                                                                </li>
                                                            </ul>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <Row>
                                                    <Col xl={6}>
                                                        <div className="mb-4">
                                                            <div className="offer-promotion mb-4 rounded-2 border border-warning border-opacity-10">
                                                                <div className="d-xxl-flex d-lg-block d-sm-flex flex-wrap justify-content-between align-items-center gap-2">
                                                                    <div className="text-warning my-auto">Use Code <span className="promotion-code fw-medium">ONBUY</span><Link className="fs-10 text-warning ms-1 d-inline-block" href="#!" scroll={false}>T&C.</Link></div>
                                                                    <div className="my-2">
                                                                        <span className="bg-warning-transparent text-default fs-12 offer-details mb-0 rounded-2">Get it for <span className="text-success fw-medium">$2,199</span></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="mb-4">
                                                                <p className="text-danger mb-0 fs-16 fw-medium">Only 3 left in stock.</p>
                                                                <p className="mb-0 fs-12 lh-lg">Sold by <span className="text-primary me-1"><u>Elegance Home Decor LTD </u></span> and quality checked by <span className="text-primary"><u>Spruko Tchnologies</u>.</span></p>
                                                            </div>
                                                        </div>
                                                        <div className="alert alert-primary mb-4 fs-12 text-muted rounded-0" role="alert">
                                                            <Link href="#!" scroll={false}><i className="ri-map-pin-line me-1 align-middle text-primary fs-15 d-inline-block"></i></Link>Choose a destination to determine the estimated delivery date.
                                                        </div>
                                                    </Col>
                                                    <Col xl={6}>
                                                        <div className="mb-4">
                                                            <ul className="list-group">
                                                                <li className="list-group-item">
                                                                    <div className="lh-1">
                                                                        <span className="text-success fw-medium fs-14 d-flex align-items-center"><i className="ti ti-discount-2 fs-18 me-1"></i>3 Available offers</span>
                                                                    </div>
                                                                </li>
                                                                <li className="list-group-item">
                                                                    <div className="fs-12 text-default">
                                                                        <span className="text-success me-1 fw-medium">Bank Offer:</span><span className="flex-fill">6% off upto 700 on min purchase of $1,999<Link href="#!" scroll={false} className="text-primary ms-1 d-inline-flex">View.</Link></span>
                                                                    </div>
                                                                </li>
                                                                <li className="list-group-item">
                                                                    <div className="fs-12 text-default">
                                                                        <span className="text-success me-1 fw-medium">Emi:</span><span className="flex-fill">No cost EMI on selected bank card on min purchase of $599<Link href="#!" scroll={false} className="text-primary ms-1  d-inline-flex">View.</Link></span>
                                                                    </div>
                                                                </li>
                                                                <Collapse in={open}>
                                                                    <li className="list-group-item p-0">
                                                                        <ul className="list-group" id="offers-more">
                                                                            <li className="list-group-item border-0">
                                                                                <div className="fs-12 text-default">
                                                                                    <span className="text-success me-1 fw-medium">Promotion:</span><span className="flex-fill">Offer upto 25% on Home products on purchase of this item<Link href="#!" className="text-primary ms-1">T&C.</Link></span>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </Collapse>
                                                                <li className="list-group-item border-top-0">
                                                                    <Link scroll={false} onClick={() => setOpen(!open)} data-bs-toggle="collapse" className="text-success fs-12" href="#offers-more" role="button" aria-expanded="false" aria-controls="offers-more"><u>More Offers</u></Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <div className="mb-4">
                                                    <p className="mb-0 fw-medium">Returns:</p>
                                                    <p className="fs-12 text-muted">Please be informed that our return and exchange policy entails a minimum duration of 7 days. It's important to note that return policies may vary depending on the specific products and ongoing promotions. For a detailed understanding of our returns policies, kindly refer to the full details available  <Link href="#!" scroll={false} className="text-primary">click here</Link>․</p>
                                                </div>
                                                <div className="mb-4">
                                                    <p className="fs-15 fw-medium mb-3">Reviews & Ratings :</p>
                                                    <Row>
                                                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} className="mb-4">
                                                            <div className="d-flex align-items-top mb-3">
                                                                <div className="me-2 lh-1">
                                                                    <i className="ri-star-fill fs-25 text-warning"></i>
                                                                </div>
                                                                <div className="lh-1">
                                                                    <p className="mb-1">4.2 out of 5</p>
                                                                    <p className="mb-0 text-muted fs-11">Based on (23,435) ratings</p>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-3">
                                                                <div className="fs-12 me-2 fw-medium">5 <i className="ri-star-fill fs-10"></i></div>
                                                                <div className="progress progress-xs flex-fill">
                                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: "55%" }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}>
                                                                    </div>
                                                                </div>
                                                                <div className="text-muted ms-2 fs-12">(10,893)</div>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-3">
                                                                <div className="fs-12 me-2 fw-medium">4 <i className="ri-star-fill fs-10"></i></div>
                                                                <div className="progress progress-xs flex-fill">
                                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: "22%" }} aria-valuenow={22} aria-valuemin={0} aria-valuemax={100}>
                                                                    </div>
                                                                </div>
                                                                <div className="text-muted ms-2 fs-12">(6,534)</div>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-3">
                                                                <div className="fs-12 me-2 fw-medium">3 <i className="ri-star-fill fs-10"></i></div>
                                                                <div className="progress progress-xs flex-fill">
                                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: "8%" }} aria-valuenow={8} aria-valuemin={0} aria-valuemax={100}>
                                                                    </div>
                                                                </div>
                                                                <div className="text-muted ms-2 fs-12">(4,342)</div>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-3">
                                                                <div className="fs-12 me-2 fw-medium">2 <i className="ri-star-fill fs-10"></i></div>
                                                                <div className="progress progress-xs flex-fill">
                                                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: "9%" }} aria-valuenow={9} aria-valuemin={0} aria-valuemax={100}>
                                                                    </div>
                                                                </div>
                                                                <div className="text-muted ms-2 fs-12">(1,432)</div>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <div className="fs-12 me-2 fw-medium">1 <i className="ri-star-fill fs-10"></i></div>
                                                                <div className="progress progress-xs flex-fill">
                                                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: "6%" }} aria-valuenow={6} aria-valuemin={0} aria-valuemax={100}>
                                                                    </div>
                                                                </div>
                                                                <div className="text-muted ms-2 fs-12">(1,453)</div>
                                                            </div>
                                                        </Col>
                                                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} className="mt-xxl-0">
                                                            <div className="border rounded p-3">
                                                                <div className="d-sm-flex d-block align-items-top mb-3">
                                                                    <div className="d-flex flex-fill">
                                                                        <div className="me-2">
                                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                                <img src="../../../assets/images/faces/15.jpg" alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="lh-1 me-2">
                                                                            <p className="mb-1 fw-medium fs-14">Reva Shaan</p>
                                                                            <div className="mb-1">
                                                                                <i className="ri-star-s-fill text-warning align-middle fs-12"></i>
                                                                                <i className="ri-star-s-fill text-warning align-middle fs-12"></i>
                                                                                <i className="ri-star-s-fill text-warning align-middle fs-12"></i>
                                                                                <i className="ri-star-s-fill text-warning align-middle fs-12"></i>
                                                                                <i className="ri-star-s-line text-warning align-middle fs-12"></i>
                                                                            </div>
                                                                            <div className="fs-11 text-muted">
                                                                                Reviewed on 24 Nov,2023
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="ps-sm-0 mt-sm-0 mt-3 ps-sm-0 ps-2">
                                                                        <span className="badge bg-success">Verified Purchase</span>
                                                                    </div>
                                                                </div>
                                                                <div className="ps-sm-4 ps-0 mb-3">
                                                                    <p className="fw-medium mb-1 ps-2">Absolutely delighted with the Premium Ball Chair!&#128512;</p>
                                                                    <p className="mb-0 fs-11 text-muted ps-2"> The craftsmanship is superb, ensuring durability for daily use.
                                                                        The unparalleled support it offers, especially in promoting a healthy posture, is truly exceptional. A remarkable addition to my home office –
                                                                        providing both comfort and effectiveness. Highly recommended!&#128077;  </p>
                                                                </div>
                                                                <div className="product-images ps-sm-4 ps-0 mb-3">
                                                                    <div className="row">
                                                                        <Col xl={6}>
                                                                            <div className="products-review-images">
                                                                                <Link href="#!" scroll={false}>
                                                                                    <img src="../../../assets/images/ecommerce/png/13.png" alt="" />
                                                                                </Link>
                                                                                <Link href="#!" scroll={false}>
                                                                                    <img src="../../../assets/images/ecommerce/png/15.png" alt="" />
                                                                                </Link>
                                                                            </div>
                                                                        </Col>
                                                                        <div className="col-xl-6 d-flex align-items-end justify-content-sm-end mt-sm-0 mt-2">
                                                                            <button className="btn btn-sm btn-light me-2">Report abuse</button>
                                                                            <button className="btn btn-sm btn-icon btn-primary-light me-2">
                                                                                <i className="ri-thumb-up-line"></i>
                                                                            </button>
                                                                            <button className="btn btn-sm btn-icon btn-primary-light">
                                                                                <i className="ri-thumb-down-line"></i>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <Link href="#!" scroll={false} className="text-primary text-decoration-underline text-center ps-sm-4 ps-0">See More Reviews</Link>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <p className="fs-15 fw-medium mb-4">Similar Products :<Link href="#!" scroll={false} className="text-primary float-end text-decoration-underline">View More Products</Link></p>

                                                <Row>
                                                    <Col xl={4} lg={6} md={6} className="mb-3 mb-xl-0">
                                                        <div className="text-center position-relative p-2 border">
                                                            <Link href="#!" scroll={false} className="stretched-link"></Link>
                                                            <div className="similar-products-image mb-3">
                                                                <img src="../../../assets/images/ecommerce/png/7.png" className="img-fluid" alt="" />
                                                            </div>
                                                            <h5 className="mb-2 fs-14 fw-medium mt-1"> Haven Lounge Chair</h5>
                                                            <h5 className="mb-0 fw-medium"> $766 </h5>
                                                            <div className="d-flex justify-content-center align-items-center gap-1">
                                                                <p className="mb-0 text-muted"> <span className="text-success fs-11 ms-1">25% off</span>
                                                                </p>
                                                                <div className="badge bg-warning align-middle">4.3
                                                                    <i className="ri-star-s-fill align-middle"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xl={4} lg={6} md={6} className="mb-3 mb-xl-0">
                                                        <div className="text-center position-relative p-2 border">
                                                            <Link href="#!" scroll={false} className="stretched-link"></Link>
                                                            <div className="similar-products-image mb-3">
                                                                <img src="../../../assets/images/ecommerce/png/9.png" className="img-fluid" alt="" />
                                                            </div>
                                                            <h5 className="mb-2 fs-14 fw-medium mt-1">Essen Living Chair</h5>
                                                            <h5 className="mb-0 fw-medium"> $1,548 </h5>
                                                            <div className="d-flex justify-content-center align-items-center gap-1">
                                                                <p className="mb-0 text-muted"> <span className="text-success fs-11 ms-1">25% off</span>
                                                                </p>
                                                                <div className="badge bg-warning align-middle">4.3
                                                                    <i className="ri-star-s-fill align-middle"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xl={4} lg={6} md={6} className="mb-3 mb-xl-0">
                                                        <div className="text-center position-relative p-2 border">
                                                            <Link href="#!" scroll={false} className="stretched-link"></Link>
                                                            <div className="similar-products-image mb-3">
                                                                <img src="../../../assets/images/ecommerce/png/8.png" className="img-fluid" alt="" />
                                                            </div>
                                                            <h5 className="mb-2 fs-14 fw-medium mt-1">Modern Chair</h5>
                                                            <h5 className="mb-0 fw-medium"> $1,366 </h5>
                                                            <div className="d-flex justify-content-center align-items-center gap-1">
                                                                <p className="mb-0 text-muted"> <span className="text-success fs-11 ms-1">25% off</span>
                                                                </p>
                                                                <div className="badge bg-warning align-middle">4.3
                                                                    <i className="ri-star-s-fill align-middle"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default ProductDetails;
