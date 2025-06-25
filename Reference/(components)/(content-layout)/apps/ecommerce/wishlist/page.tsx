"use client"
import { Wishlistdata } from "@/shared/data/apps/ecommerce/wishlistdata";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Pagination, Row } from "react-bootstrap";
import Swal from 'sweetalert2';

const Wishlist = () => {

    const [wishlist, setWishlist] = useState(Wishlistdata);

    const handleClick = (id: string) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result:any) => {
            if (result.isConfirmed) {
                handleDelete(id);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelled', 'Your file is safe :)', 'error');
            }
        });
    };

    const handleDelete = (id: string) => {
        const updatedData = wishlist.filter((idx) => idx.id !== id);
        setWishlist(updatedData);

        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
    };

    return (
        <Fragment>
            <Seo title={"Wishlist"} />
            <Row>
                {wishlist.map((idx) => (
                    <Col xxl={3} xl={6} lg={6} md={6} sm={12} className="" key={Math.random()}>
                        <Card className="custom-card product-card">
                            <div className="top-left"></div>
                            <div className="top-right"></div>
                            <div className="bottom-left"></div>
                            <div className="bottom-right"></div>
                            <div className="card-body text-center">
                                <Link href="#!" scroll={false} className="product-image">
                                    <img src={idx.preview} className="card-img mb-3" alt="..." />

                                </Link>
                                <div className="product-icons">
                                    <Link href="#!" onClick={() => handleClick(idx.id)} scroll={false} className="wishlist btn-delete"><i
                                        className="ri-close-line"></i></Link>
                                </div>
                                <p className="product-name fw-medium mb-0">{idx.title}</p>
                                <p className="product-description fs-11 text-muted mb-2">{idx.description}</p>
                                <p className="fs-12 mb-2">
                                    <i className="bx bxs-star me-1 text-warning align-center"></i>
                                    <i className="bx bxs-star me-1 text-warning align-center"></i>
                                    <i className="bx bxs-star me-1 text-warning align-center"></i>
                                    <i className="bx bxs-star me-1 text-warning align-center"></i>
                                    <i className="bx bxs-star me-1-half text-warning align-center"></i>
                                    <span className="fw-600 text-muted ms-1">4.3<Link className="text-info" href="#!" scroll={false}> (2.4k)</Link></span>
                                </p>
                                <p className="mb-0 fw-medium fs-18"><span>{idx.newpr}<span className="text-muted text-decoration-line-through ms-1 d-inline-block op-6">{idx.oldpr}</span></span></p>
                                <span className="fs-11 text-success fw-medium"> Offer Price {idx.newpr} </span>
                            </div>
                            <Card.Footer className="text-center d-flex gap-1 flex-wrap">
                                <Link href="/apps/ecommerce/cart" className="btn btn-outline-primary flex-fill"><i
                                    className="ri-shopping-cart-2-line me-2 align-middle d-inline-block"></i>Move To
                                    Cart</Link>
                                <Link href="/apps/ecommerce/product-details" className="btn btn-outline-success flex-fill"><i
                                    className="ri-eye-line me-2 align-middle d-inline-block"></i>View Product</Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Pagination as="ul" className="justify-content-end">
                <Pagination as="li" className=" disabled">
                    <Link href="#!" scroll={false} className="page-link">Previous</Link>
                </Pagination>
                <Pagination as="li" className=""><Link className="page-link" href="#!" scroll={false}>1</Link></Pagination>
                <Pagination as="li" className=""><Link className="page-link" href="#!" scroll={false}>2</Link></Pagination>
                <Pagination as="li" className=""><Link className="page-link" href="#!" scroll={false}>3</Link></Pagination>
                <Pagination as="li" className="">
                    <Link className="page-link" href="#!" scroll={false}>Next</Link>
                </Pagination>
            </Pagination>
        </Fragment>
    );
};

export default Wishlist;
