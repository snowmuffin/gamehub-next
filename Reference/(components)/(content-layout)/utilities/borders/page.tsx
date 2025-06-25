"use client";
import { border1, border2, border3, border4, border5, border6, border7, border8 } from "@/shared/data/prismdata/utilities-prism";
import Seo from "@/shared/layout-components/seo/seo";
import ShowCode from "@/shared/layout-components/showcode/showcode";
import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";

const Borders = () => {
	return (
		<Fragment>
			<Seo title={"Borders"} />
			<Row>
				<Col xl={6}>
					<ShowCode title="Borders" customCardClass="custom-card" customCardHeaderClass="justify-content-between" code={border1}>
						<span className="border border-container"></span>
						<span className="border-top border-container"></span>
						<span className="border-end border-container"></span>
						<span className="border-bottom border-container"></span>
						<span className="border-start border-container"></span>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Remove borders" customCardClass="custom-card" customCardHeaderClass="justify-content-between" code={border2}>
						<span className="border-0 border-container"></span>
						<span className="border border-top-0 border-container"></span>
						<span className="border border-end-0 border-container"></span>
						<span className="border border-bottom-0 border-container"></span>
						<span className="border border-start-0 border-container"></span>
					</ShowCode>

				</Col>
			</Row>
			<Row>
				<Col xl={12}>
					<ShowCode title="Border Widths" customCardClass="custom-card" customCardHeaderClass="justify-content-between" code={border3}>
						<span className="border border-container border-1"></span>
						<span className="border border-container border-2"></span>
						<span className="border border-container border-3"></span>
						<span className="border border-container border-4"></span>
						<span className="border border-container border-5"></span>
					</ShowCode>

				</Col>
				<Col xl={12}>
					<ShowCode title="Border colors" customCardClass="custom-card" customCardHeaderClass="justify-content-between" code={border4}>
						<span className="border border-container border-primary"></span>
						<span className="border border-container border-secondary"></span>
						<span className="border border-container border-success"></span>
						<span className="border border-container border-danger"></span>
						<span className="border border-container border-warning"></span>
						<span className="border border-container border-info"></span>
						<span className="border border-container border-light"></span>
						<span className="border border-container border-dark"></span>
						<span className="border border-container border-white"></span>
					</ShowCode>
				</Col>
			</Row>
			<Row>
				<Col xl={12}>
					<ShowCode title="Border color Styling" customCardClass="custom-card" customCardHeaderClass="justify-content-between" code={border5}>
						<div className="mb-4">
							<label htmlFor="exampleFormControlInput1" className="form-label">Email
								address</label>
							<input type="email" className="form-control border-success"
								id="exampleFormControlInput1" placeholder="name@example.com" />
						</div>
						<div className="h4 pb-3 mb-4 text-danger border-bottom border-danger">
							Below Shows Danger Border
						</div>
						<div
							className="text-fixed-white p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end mb-1">
							Customizing borders with background colors
						</div>
					</ShowCode>
				</Col>
				<Col xl={12}>
					<ShowCode title="Border with opacity" customCardClass="custom-card" customCardHeaderClass="justify-content-between" code={border6}>
						<div className="border border-success p-2 mb-2">This is default success border</div>
						<div className="border border-success p-2 mb-2 border-opacity-75">This is 75%
							opacity
							success border
						</div>
						<div className="border border-success p-2 mb-2 border-opacity-50">This is 50%
							opacity
							success border
						</div>
						<div className="border border-success p-2 mb-2 border-opacity-25">This is 25%
							opacity
							success border
						</div>
						<div className="border border-success p-2 border-opacity-10">This is 10% opacity
							success
							border
						</div>
					</ShowCode>
				</Col>
			</Row>
			<Row>
				<Col xl={6}>
					<ShowCode title="Border Radius" customCardClass="custom-card" customCardHeaderClass="justify-content-between" code={border7}>
						<img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded" alt="..." />
						<img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-top" alt="..." />
						<img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-end" alt="..." />
						<img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-bottom" alt="..." />
						<img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-start" alt="..." />
						<img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-circle" alt="..." />
						<img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-pill" alt="..." />
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Sizes" customCardClass="custom-card" customCardHeaderClass="justify-content-between" code={border8}>
						<img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-0" alt="..." />
						<img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-1" alt="..." />
						<img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-2" alt="..." />
						<img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-3" alt="..." />
						<img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-4" alt="..." />
						<img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-5" alt="..." />

					</ShowCode>
				</Col>
			</Row>
		</Fragment>
	);
};

export default Borders;
