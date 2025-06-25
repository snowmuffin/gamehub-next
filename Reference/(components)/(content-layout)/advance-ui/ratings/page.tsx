"use client";
import React, { Fragment, useState } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import StarsIcon from "@mui/icons-material/Stars";
import { Button, Card, Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import Seo from "@/shared/layout-components/seo/seo";

const Ratings = () => {

	const [ratingValue, setRatingValue] = useState<number | null>(null);
	const handleRatingChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
		setRatingValue(newValue); // Update the rating value when the user clicks
	};

	const handleResetRating = () => {
		setRatingValue(null); // Clear the rating when the button is clicked
	};

	const [value, setValue] = useState<number | null>(2);
	const [hover, setHover] = useState<any>(-1);

	const labels = ["Poor", "Fair", "Good", "Excellent", "Perfect"];
	function getLabelText(value: number) {
		return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
	}

	return (
		<Fragment>
			<Seo title={"Ratings"} />
			<Row>
				<Col xxl={6} xl={6}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header>
							<div className="card-title">
								Basic Rater
							</div>
						</Card.Header>
						<Card.Body className="text-center basic-rating">
							<div className="d-flex flex-wrap align-items-center justify-content-between">
								<h6 className="fs-14 fw-semibold">Show Some <span className="text-danger">&#10084;</span> with rating </h6>
								<Box sx={{ "& > legend": { mt: 2 } }} >
									<Rating name="no-value" size="large" value={0} max={5} />
								</Box>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={6} xl={6}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header>
							<div className="card-title">
								5 star rater with steps
							</div>
						</Card.Header>
						<Card.Body className="text-center">
							<div className="d-flex flex-wrap align-items-center justify-content-between">
								<h6 className="fs-14 fw-semibold">Dont forget to rate the product </h6>
								<Box sx={{ "& > legend": { mt: 2 } }} >
									<Rating name="no-value" size="large" value={0} max={5} />
								</Box>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={6} xl={6} className="">
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header>
							<div className="card-title">
								Unlimited number of stars readOnly
							</div>
						</Card.Header>
						<Card.Body className="text-center">
							<div className="d-flex flex-wrap align-items-center justify-content-between">
								<h6 className="fs-14  fw-semibold">Thanks for rating</h6>
								<Stack spacing={1} className="rating-stars block my-rating-7">
									<Rating id="stars-unlimited" name="half-rating-read" value={6} max={10} size="large" readOnly />
								</Stack>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={6} xl={6}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header>
							<div className="card-title">
								5 Star rater with custom isBusyText and simulated backend
							</div>
						</Card.Header>
						<Card.Body className="text-center">
							<div className="d-flex flex-wrap align-items-center justify-content-between">
								<h6 className="fs-14 fw-semibold">Thanks for rating</h6>
								<Box sx={{ "& > legend": { mt: 2 } }} >
									<Rating name="no-value" size="large" value={0} max={5} />
								</Box>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={6} xl={6}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header>
							<div className="card-title">
								On hover event
							</div>
						</Card.Header>
						<Card.Body className="text-center">
							<div className="d-flex flex-wrap align-items-center justify-content-between">
								<h6 className="fs-14  fw-semibold">Please give your valuable rating</h6>
								<div className="d-flex flex-wrap align-items-center justify-content-center">
									<Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
										<Rating
											name="hover-feedback"
											value={value}
											precision={0.5}
											getLabelText={getLabelText}
											onChange={(_event, newValue) => {
												setValue(newValue);
											}}
											onChangeActive={(_event, newHover) => {
												setHover(newHover);
											}}
											emptyIcon={<StarsIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
										/>
										{value !== null && (
											<Box className="rating-stars my-rating-9 rating-9" sx={{ ml: 2 }}>
												<span className="live-rating badge bg-success-transparent ms-3">
													{labels[hover !== -1 ? hover : value]}
												</span>
											</Box>
										)}
									</Box>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={6} xl={6}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header>
							<div className="card-title">
								Clear/reset rater
							</div>
						</Card.Header>
						<Card.Body className="text-center">
							<div className="d-flex flex-wrap align-items-center justify-content-between">
								<p className="fs-14 mb-0 fw-semibold">Thank You so much for your support :</p>
								<div className="d-flex flex-wrap align-items-center justify-content-center">
									<Rating
										name="clickable-rating"
										value={ratingValue}
										onChange={handleRatingChange} // Handle rating change when the user clicks
									/>
									<Button
										variant='danger-light'
										className="btn btn-icon btn-sm ms-3"
										id="rater-reset-button"
										data-bs-toggle="tooltip"
										data-bs-placement="top"
										data-bs-title="Reset"
										onClick={handleResetRating}
									>
										<OverlayTrigger placement="top" overlay={<Tooltip>Reset</Tooltip>}>
											<i className="ri-restart-line"></i>
										</OverlayTrigger>

									</Button>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={6} xl={6}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header>
							<div className="card-title">
								Custom messages
							</div>
						</Card.Header>
						<Card.Body className="text-center">
							<div className="d-flex flex-wrap align-items-center justify-content-between">
								<h6 className="fs-14 fw-semibold">Your rating is much appreciated&#128079; </h6>
								<Box sx={{ "& > legend": { mt: 2 } }} >
									<Rating name="no-value" size="large" value={4} max={5} />
								</Box>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
};

export default Ratings;
