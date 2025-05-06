"use client";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const Helpers = () => {
	return (
		<Fragment>
			<Seo title={"Helpers"} />
			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header>
							<div className="card-title">
								Vertical Stacking
							</div>
						</Card.Header>
						<Card.Body>
							<div className="vstack gap-3">
								<div className="bg-light border py-1 px-2 rounded">First item</div>
								<div className="bg-light border py-1 px-2 rounded">Second item</div>
								<div className="bg-light border py-1 px-2 rounded">Third item</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={12}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header>
							<div className="card-title">
								Horizontal Stacking
							</div>
						</Card.Header>
						<Card.Body>
							<div className="hstack gap-3 mb-3">
								<div className="bg-light border p-1 rounded">First item</div>
								<div className="bg-light border p-1 rounded">Second item</div>
								<div className="bg-light border p-1 rounded">Third item</div>
							</div>
							<div className="hstack gap-3 mb-3">
								<div className="bg-light border p-1 rounded">First item</div>
								<div className="bg-light border ms-auto p-1 rounded">Second item</div>
								<div className="bg-light border p-1 rounded">Third item</div>
							</div>
							<div className="hstack gap-3">
								<div className="bg-light border p-1 rounded">First item</div>
								<div className="bg-light border ms-auto p-1 rounded">Second item</div>
								<div className="vr"></div>
								<div className="bg-light border p-1 rounded">Third item</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xxl={12} xl={12} lg={12} md={12} sm={12}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header>
							<div className="card-title">
								Colors With backgrounds
							</div>
						</Card.Header>
						<Card.Body>
							<div className="text-bg-primary p-3">Primary with contrasting color</div>
							<div className="text-bg-secondary p-3">Secondary with contrasting color</div>
							<div className="text-bg-success p-3">Success with contrasting color</div>
							<div className="text-bg-danger p-3">Danger with contrasting color</div>
							<div className="text-bg-warning p-3">Warning with contrasting color</div>
							<div className="text-bg-info p-3">Info with contrasting color</div>
							<div className="text-bg-light p-3 text-default">Light with contrasting color</div>
							<div className="text-bg-dark p-3 text-white">Dark with contrasting color</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={9} xl={9} lg={6} md={6} sm={12}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header>
							<div className="card-title">With Other Components</div>
						</Card.Header>
						<Card.Body>
							<h6 className="fw-semibold mb-3">Badges:</h6>
							<span className="badge text-bg-primary me-2">Primary</span>
							<span className="badge text-bg-info mb-4">Info</span>
							<h6 className="fw-semibold mb-3">cards:</h6>
							<div className="card text-bg-success mb-3" style={{ maxWidth: "18rem" }}>
								<div className="card-header border-bottom-0">
									<div className="card-title text-fixed-white">
										Header
									</div>
								</div>
								<Card.Body className="pt-0">
									<p className="card-text text-fixed-white">Some quick example text to build on the card title
										and
										make up the bulk of the card's content.</p>
								</Card.Body>
							</div>
							<Card className="text-bg-danger mb-3" style={{ maxWidth: "18rem" }}>
								<Card.Header className="border-bottom-0">
									<Card.Title className="text-fixed-white">
										Header
									</Card.Title>
								</Card.Header>
								<Card.Body className="pt-0">
									<p className="card-text text-fixed-white">Some quick example text to build on the card title
										and
										make up the bulk of the card's content.</p>
								</Card.Body>
							</Card>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={3} xl={3} lg={6} md={6} sm={12}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header>
							<div className="card-title">
								Card With Stretched Links
							</div>
						</Card.Header>
						<Card.Body>
							<img className="bd-placeholder-img card-img-top card-img" src="../../assets/images/media/media-4.jpg" alt="..." />
							<div className="card-body pb-0">
								<div className="card-title">Card with stretched links</div>
								<p className="card-text">
									<Link href="#!" scroll={false} className="stretched-link text-danger"
										style={{ position: "relative" }}>Stretched link will not work
										here,
										because <code>position: relative</code> is added to the
										link</Link>
								</p>
								<p className="card-text bg-light mb-0 p-1 rounded" style={{ transform: "rotate(0)" }}>
									This <Link href="#!" scroll={false} className="text-warning stretched-link">stretched
										link </Link>
									will only be spread over the <code>p</code>-tag, because a
									transform is
									applied to it.
								</p>
							</div>
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
								Ratio
							</div>
						</Card.Header>
						<Card.Body>
							<div className="ratio ratio-16x9">
								<iframe width="560" height="315" src="https://www.youtube.com/embed/-lDlbQ7DiCI"
									title="YouTube video player" style={{ border: "0px" }}
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen></iframe>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Row>
						<Col xl={12}>
							<Card className="custom-card">
								<div className="top-left"></div>
								<div className="top-right"></div>
								<div className="bottom-left"></div>
								<div className="bottom-right"></div>
								<Card.Header>
									<div className="card-title">
										Aspect ratios
									</div>
								</Card.Header>
								<Card.Body className="bd-example-ratios">
									<div className="ratio ratio-1x1  me-2">
										<div className="d-flex align-items-center justify-content-center">1x1</div>
									</div>
									<div className="ratio ratio-4x3  me-2">
										<div className="d-flex align-items-center justify-content-center">4x3</div>
									</div>
									<div className="ratio ratio-16x9  me-2">
										<div className="d-flex align-items-center justify-content-center">16x9</div>
									</div>
									<div className="ratio ratio-21x9  me-2">
										<div className="d-flex align-items-center justify-content-center">21x9</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xl={12}>
							<Card className="custom-card">
								<div className="top-left"></div>
								<div className="top-right"></div>
								<div className="bottom-left"></div>
								<div className="bottom-right"></div>
								<Card.Header>
									<div className="card-title">
										Custom ratios
									</div>
								</Card.Header>
								<Card.Body className="bd-example-ratios bd-example-ratios-breakpoint">
									<div className="ratio me-2"
										style={{ aspectRatio: "1/0.5" }}
									>
										<div className="d-flex align-items-center justify-content-center">2x1</div>
									</div>
									<div className="ratio ratio-4x3 me-2">
										<div className="d-flex align-items-center justify-content-center">4x3, then 2x1</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
					</Row>

				</Col>
			</Row>
			<Row>
				<Col xl={4}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header>
							<div className="card-title">
								Vstack For Buttons
							</div>
						</Card.Header>
						<Card.Body>
							<div className="vstack gap-2 col-md-5 mx-auto">
								<Button variant='' type="button" className="btn btn-primary">Save
									changes</Button>
								<Button variant='' type="button" className="btn btn-outline-primary">Cancel</Button>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={4}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header>
							<div className="card-title">
								Inline Form With Hstack
							</div>
						</Card.Header>
						<Card.Body>
							<div className="hstack gap-3">
								<input className="form-control me-auto" type="text"
									placeholder="Add your item here..."
									aria-label="Add your item here..." />
								<Button variant='' type="button" className="btn btn-primary">Submit</Button>
								<div className="vr"></div>
								<Button variant='' type="button" className="btn btn-outline-danger">Reset</Button>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={4}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header>
							<div className="card-title">
								Text Truncation
							</div>
						</Card.Header>
						<Card.Body>
							<Row>
								<div className="col-2 text-truncate">
									This text is quite long, and will be truncated once displayed.
								</div>
							</Row>
							<span className="d-inline-block text-truncate" style={{ maxWidth: "150px" }}>
								This text is quite long, and will be truncated once displayed.
							</span>
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
								Clearfix
							</div>
						</Card.Header>
						<Card.Body>
							<div className="bg-light clearfix">
								<Button variant='primary' type="button" className="float-start m-1">Example Button
									floated left</Button>
								<Button variant='primary' type="button" className=" float-end m-1">Example Button
									floated
									right</Button>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={12}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header>
							<div className="card-title">
								Colored links
							</div>
						</Card.Header>
						<Card.Body>
							<div className="d-flex justify-content-evenly flex-wrap">
								<Link href="#!" scroll={false} className="link-primary fw-semibold fs-15 p-1">Primary</Link>
								<Link href="#!" scroll={false} className="link-secondary fw-semibold fs-15 p-1">Secondary</Link>
								<Link href="#!" scroll={false} className="link-success fw-semibold fs-15 p-1">Success</Link>
								<Link href="#!" scroll={false} className="link-danger fw-semibold fs-15 p-1">Danger</Link>
								<Link href="#!" scroll={false} className="link-warning fw-semibold fs-15 p-1">Warning</Link>
								<Link href="#!" scroll={false} className="link-info fw-semibold fs-15 p-1">Info</Link>
								<Link href="#!" scroll={false} className="link-light fw-semibold fs-15 p-1">Light</Link>
								<Link href="#!" scroll={false} className="link-dark fw-semibold fs-15 p-1">Dark</Link>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xl={6}>
					<Row>
						<Col xl={12}>
							<Card className="custom-card">
								<Card.Header>
									<div className="card-title">
										CUSTOM FOCUS RING
									</div>
								</Card.Header>
								<Card.Body>
									<Link href="#!" scroll={false} className="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2">
										Custom focus ring
									</Link>
								</Card.Body>
							</Card>
						</Col>
						<Col xl={12}>
							<Card className="custom-card">
								<Card.Header>
									<div className="card-title">
										CSS VARIABLE FOCUS RING
									</div>
								</Card.Header>
								<Card.Body>
									<Link href="#!" scroll={false} className="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2" >
										Green focus ring
									</Link>
								</Card.Body>
							</Card>
						</Col>
						<Col xl={12}>
							<Card className="custom-card">
								<Card.Header>
									<div className="card-title">
										BLURRY OFFSET FOCUS RING
									</div>
								</Card.Header>
								<div className="card-body p-4">
									<Link href="#!" scroll={false} className="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2">
										Blurry offset focus ring
									</Link>
								</div>
							</Card>
						</Col>
					</Row>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">
								FOCUS RING UTILITIES
							</div>
						</Card.Header>
						<Card.Body>
							<p><Link href="#!" scroll={false} className="d-inline-flex focus-ring focus-ring-primary py-1 px-2 text-decoration-none border rounded-2">Primary focus</Link></p>
							<p><Link href="#!" scroll={false} className="d-inline-flex focus-ring focus-ring-secondary py-1 px-2 text-decoration-none border rounded-2">Secondary focus</Link></p>
							<p><Link href="#!" scroll={false} className="d-inline-flex focus-ring focus-ring-success py-1 px-2 text-decoration-none border rounded-2">Success focus</Link></p>
							<p><Link href="#!" scroll={false} className="d-inline-flex focus-ring focus-ring-danger py-1 px-2 text-decoration-none border rounded-2">Danger focus</Link></p>
							<p><Link href="#!" scroll={false} className="d-inline-flex focus-ring focus-ring-warning py-1 px-2 text-decoration-none border rounded-2">Warning focus</Link></p>
							<p><Link href="#!" scroll={false} className="d-inline-flex focus-ring focus-ring-info py-1 px-2 text-decoration-none border rounded-2">Info focus</Link></p>
							<p><Link href="#!" scroll={false} className="d-inline-flex focus-ring focus-ring-light py-1 px-2 text-decoration-none border rounded-2">Light focus</Link></p>
							<p><Link href="#!" scroll={false} className="d-inline-flex focus-ring focus-ring-dark py-1 px-2 text-decoration-none border rounded-2">Dark focus</Link></p>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={12}>
					<Row>
						<Col xl={4}>
							<Card className="custom-card">
								<Card.Header>
									<div className="card-title">
										Icon Link
									</div>
								</Card.Header>
								<Card.Body>
									<div className="d-flex gap-3 flex-column">
										<Link className="icon-link text-decoration-underline link-primary" href="#!" scroll={false}>
											<i className="bi bi-house"></i>
											Icon link
										</Link>
										<Link className="icon-link text-decoration-underline link-secondary" href="#!" scroll={false}>
											Icon link
											<i className="bi bi-arrow-right"></i>
										</Link>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xl={4}>
							<Card className="custom-card">
								<Card.Header>
									<div className="card-title">
										Icon Link
									</div>
								</Card.Header>
								<Card.Body>
									<div className="d-flex gap-3 flex-column">
										<Link className="icon-link text-decoration-underline icon-link-hover link-success" href="#!" scroll={false}>
											Icon link
											<i className="bi bi-arrow-right"></i>
										</Link>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xl={4}>
							<Card className="custom-card">
								<Card.Header>
									<div className="card-title">
										Scss Utilities
									</div>
								</Card.Header>
								<Card.Body>
									<div className="d-flex gap-3 flex-column">
										<Link className="icon-link icon-link-hover link-info text-decoration-underline" href="#!" scroll={false}>
											<i className="bi bi-journal"></i>
											Icon link
										</Link>
										<Link className="icon-link icon-link-hover link-success text-decoration-underline link-underline-success link-underline-opacity-25" href="#!" scroll={false}>
											Icon link
											<i className="bi bi-arrow-right"></i>
										</Link>
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

export default Helpers;
