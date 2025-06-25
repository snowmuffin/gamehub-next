"use client"
import { Cartdata } from "@/shared/data/apps/ecommerce/cartdata";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Form, OverlayTrigger, Row, Table, Tooltip } from "react-bootstrap";
import Swal from 'sweetalert2';

const Cart = () => {

    const [cart, setCart] = useState(Cartdata);

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
        const updatedData = cart.filter((idx) => idx.id !== id);
        setCart(updatedData);

        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
    };
    //value add and remove function

    function dec(el: any) {
        let unit = el.currentTarget.parentElement.querySelector("input").value;

        if (Number(unit) === 0) {
            return false;
        } else {
            el.currentTarget.parentElement.querySelector("input").value--;
        }
    }
    function inc(el: any) {
        el.currentTarget.parentElement.querySelector("input").value++;

    }


    return (
        <Fragment>
            <Seo title={"Cart"} />
            <Row>
                <Col xl={12}>
                    <h5 className="text-primary fw-medium">Cart Items</h5>
                    <Row>
                        <Col xxl={9}>
                            <Card className="custom-card overflow-hidden shadow-none border" id="cart-container-delete">
                                <Card.Body className="p-0">
                                    <div className="table-responsive">
                                        <Table className="text-nowrap">
                                            <thead>
                                                <tr>
                                                    <th>
                                                        Product Name
                                                    </th>
                                                    <th>
                                                        Price
                                                    </th>
                                                    <th>
                                                        Quantity
                                                    </th>
                                                    <th>
                                                        Total
                                                    </th>
                                                    <th>
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cart.map((idx) => (
                                                    <tr key={Math.random()}>

                                                        <td>
                                                            <div className="d-flex align-items-start">
                                                                <div className="me-3">
                                                                    <span className="avatar avatar-xxl bg-light">
                                                                        <img src={idx.src1} alt="" />
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <div className="mb-1 fs-14 fw-medium">
                                                                        <Link href="#!" scroll={false}> {idx.title}</Link>
                                                                    </div>
                                                                    <div className="mb-1">
                                                                        <span className={`text-${idx.color}`}>{idx.stock}</span>
                                                                    </div>
                                                                    <div className="mb-2">
                                                                        <span className="me-1">Color:</span><span className="fw-normal text-muted">White</span>
                                                                    </div>
                                                                    <div className="d-flex gap-3">
                                                                        {idx.off}
                                                                        <div className="vr"></div>
                                                                        <Link href="#!" scroll={false} className="fs-12 link-primary fw-normal">Save for later</Link>
                                                                        <div className="vr"></div>
                                                                        <Link href="#!" scroll={false} className="link-primary fw-normal fs-12">Share</Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td>
                                                            <div className="fs-14 fw-medium">
                                                                {idx.price}
                                                            </div>
                                                        </td>
                                                        <td className="product-quantity-container">
                                                            <div className="input-group rounded flex-nowrap">
                                                                <button onClick={dec} className="btn btn-icon btn-outline-light bg-transparent border input-group-text flex-fill product-quantity-minus border-end-0" ><i className="ri-subtract-line"></i></button>
                                                                <Form.Control type="text" className="form-control-sm text-center w-100" aria-label="quantity" id="product-quantity" defaultValue="2" />
                                                                <button onClick={inc} className="btn btn-icon btn-outline-light bg-transparent border input-group-text flex-fill product-quantity-plus border-start-0" ><i className="ri-add-line"></i></button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="fs-14 fw-medium">
                                                                {idx.total}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add To Wishlist</Tooltip>}>
                                                                <Link href="/apps/ecommerce/wishlist" className="btn btn-icon btn-success-ghost me-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Wishlist"><i className="ri-heart-line"></i></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Remove From Cart</Tooltip>}>
                                                                <button onClick={() => handleClick(idx.id)} className="btn btn-icon btn-danger-ghost btn-delete" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Remove From cart">
                                                                    <i className="ri-delete-bin-line"></i>
                                                                </button>
                                                            </OverlayTrigger>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="custom-card d-none" id="cart-empty-cart">
                                <div className="card-header">
                                    <div className="card-title">
                                        Empty Cart
                                    </div>
                                </div>
                                <Card.Body className="">
                                    <div className="cart-empty text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="svg-muted" width="24" height="24" viewBox="0 0 24 24"><path d="M18.6 16.5H8.9c-.9 0-1.6-.6-1.9-1.4L4.8 6.7c0-.1 0-.3.1-.4.1-.1.2-.1.4-.1h17.1c.1 0 .3.1.4.2.1.1.1.3.1.4L20.5 15c-.2.8-1 1.5-1.9 1.5zM5.9 7.1 8 14.8c.1.4.5.8 1 .8h9.7c.5 0 .9-.3 1-.8l2.1-7.7H5.9z" /><path d="M6 10.9 3.7 2.5H1.3v-.9H4c.2 0 .4.1.4.3l2.4 8.7-.8.3zM8.1 18.8 6 11l.9-.3L9 18.5z" /><path d="M20.8 20.4h-.9V20c0-.7-.6-1.3-1.3-1.3H8.9c-.7 0-1.3.6-1.3 1.3v.5h-.9V20c0-1.2 1-2.2 2.2-2.2h9.7c1.2 0 2.2 1 2.2 2.2v.4z" /><path d="M8.9 22.2c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2c1.2 0 2.2 1 2.2 2.2s-1 2.2-2.2 2.2zm0-3.5c-.7 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.8 0 1.3-.6 1.3-1.3 0-.7-.5-1.3-1.3-1.3zM18.6 22.2c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2c1.2 0 2.2 1 2.2 2.2s-.9 2.2-2.2 2.2zm0-3.5c-.8 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.7 0 1.3-.6 1.3-1.3 0-.7-.5-1.3-1.3-1.3z" /></svg>
                                        <h3 className="fw-bold mb-1">Your Cart is Empty</h3>
                                        <h5 className="mb-3">Add some items to make me happy :)</h5>
                                        <Link href="#!" scroll={false} className="btn btn-primary btn-wave m-3" data-abc="true">continue shopping <i className="bi bi-arrow-right ms-1"></i></Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <div className="col-xxl-3">
                            <Card className="custom-card shadow-none">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="p-3 border-bottom d-block">
                                    <div className="card-title mb-0">Cart Summary</div>
                                </div>
                                <Card.Body className="p-0">
                                    <div className="p-3 border-bottom border-block-end-dashed">
                                        <label htmlFor="promo-code" className="form-label"> Have a Promo Code?</label>
                                        <div className="input-group mb-1">
                                            <input type="text" id="promo-code" className="form-control form-control-sm" placeholder="Enter Coupon Code" aria-label="coupon-code" aria-describedby="coupons" />
                                            <button className="btn btn-primary input-group-text" id="coupons">Apply</button>
                                        </div>
                                        <Link href="#!" scroll={false} className="fs-12 text-success ps-1">10% off on first purchase</Link>
                                        <div className="d-flex gap-4 flex-wrap mt-3">
                                            <div className="fs-14"><i className="ri-truck-line"></i> Free Shipping </div>
                                            <div className="fs-14"><i className="ri-arrow-go-forward-fill"></i> Easy Return </div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-bottom border-block-end-dashed">
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <div className="text-muted op-7">Sub Total</div>
                                            <div className="fw-medium fs-14">$2,198</div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <div className="text-muted op-7">Discount</div>
                                            <div className="fw-medium fs-14 text-success">12% - $132</div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <div className="text-muted op-7">Delivery Charges</div>
                                            <div className="fw-medium fs-14 text-danger">- $32</div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <div className="text-muted op-7">Service Tax (17%)</div>
                                            <div className="fw-medium fs-14">- $154</div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="text-muted op-7">Total :</div>
                                            <div className="fw-medium fs-14 text-primary"> $1,912</div>
                                        </div>
                                    </div>
                                    <div className="p-3 d-flex btn-list ">
                                        <Link href="/apps/ecommerce/products" className="btn btn-secondary btn-wave w-100">Keep Shopping</Link>
                                        <Link href="/apps/ecommerce/checkout" className="btn btn-primary btn-wave w-100 me-0">Checkout</Link>
                                    </div>
                                </Card.Body>
                                <div className="p-3 border-top d-block">
                                    <div className="alert alert-success text-center" role="alert">
                                        <span className="text-default">Offer Ends in</span> <span className="fw-medium fs-14 text-success ms-1">20 Hours : 12 Minutes</span>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <Col xxl={9}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="card-header">
                                    <div className="card-title">
                                        Save for later <span className="text-default">(2 items)</span>
                                    </div>
                                </div>
                                <Card.Body className="">
                                    <div className="row mx-0">
                                        <div className="col-xxl-6">
                                            <div className="p-3 border">
                                                <div className="d-flex gap-4 flex-wrap">
                                                    <span className="avatar avatar-xxl bg-primary-transparent flex-shrink-0">
                                                        <img src="../../../assets/images/ecommerce/jpg/14.jpg" alt="" />
                                                    </span>
                                                    <div>
                                                        <div className="mb-1 fs-14 fw-medium">
                                                            <Link href="#!" scroll={false}>Analog Watches Set - For Couple </Link>
                                                        </div>
                                                        <div className="mb-1 d-flex gap-2 fs-12">
                                                            <span className="text-success">In stock</span>
                                                            <div className="vr"></div>
                                                            <span className="me-1">Quantity:</span><span className="fw-normal text-muted">1</span>
                                                        </div>
                                                        <div className="mb-1 fs-12">
                                                            <span className="me-1">Color:</span><span className="fw-normal text-muted">Sky Blue</span>
                                                        </div>
                                                        <div className="d-flex gap-3 mb-3 align-items-center flex-wrap">
                                                            <span>Price:<span className="fw-normal text-muted"><span className="text-muted text-decoration-line-through ms-1 d-inline-block op-6 me-2">$898</span>$549</span></span>
                                                            <div className="vr"></div>
                                                            <span className="badge bg-secondary align-middle">15% off</span>
                                                            <div className="vr"></div>
                                                            <Link href="#!" scroll={false} className="fs-12 link-primary fw-normal">Compare</Link>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                                            <Link href="#!" scroll={false} className="btn btn-sm btn-outline-primary btn-wave btn-w-md"><i className="ri-shopping-cart-2-line me-1 align-middle d-inline-block"></i>Move To cart</Link>
                                                            <Link href="#!" scroll={false} className="btn btn-sm btn-outline-danger btn-wave btn-w-md"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Remove</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Col xxl={6}>
                                            <div className="p-3 border">
                                                <div className="d-flex gap-4 flex-wrap">
                                                    <span className="avatar avatar-xxl bg-primary-transparent flex-shrink-0">
                                                        <img src="../../../assets/images/ecommerce/jpg/2.jpg" alt="" />
                                                    </span>
                                                    <div>
                                                        <div className="mb-1 fs-14 fw-medium">
                                                            <Link href="#!" scroll={false}>Wireless Earphones with Bluetooth Connectivity</Link>
                                                        </div>
                                                        <div className="mb-1 d-flex gap-2 fs-12">
                                                            <span className="text-success">In stock</span>
                                                            <div className="vr"></div>
                                                            <span className="me-1">Quantity:</span><span className="fw-normal text-muted">1</span>
                                                        </div>
                                                        <div className="mb-1 fs-12">
                                                            <span className="me-1">Color:</span><span className="fw-normal text-muted">White</span>
                                                        </div>
                                                        <div className="d-flex gap-3 mb-3 align-items-center flex-wrap">
                                                            <span>Price:<span className="fw-normal text-muted"><span className="text-muted text-decoration-line-through ms-1 d-inline-block op-6 me-2"> $299</span> $112</span></span>
                                                            <div className="vr"></div>
                                                            <span className="badge bg-secondary align-middle">10% off</span>
                                                            <div className="vr"></div>
                                                            <Link href="#!" scroll={false} className="fs-12 link-primary fw-normal">Compare</Link>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                                            <Link href="#!" scroll={false} className="btn btn-sm btn-outline-primary btn-wave btn-w-md"><i className="ri-shopping-cart-2-line me-1 align-middle d-inline-block"></i>Move To cart</Link>
                                                            <Link href="#!" scroll={false} className="btn btn-sm btn-outline-danger btn-wave btn-w-md"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Remove</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Cart;
