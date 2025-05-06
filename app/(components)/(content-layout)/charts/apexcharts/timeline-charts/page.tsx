"use client";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Advancedmultirange, Basictimeline, Multiplecolored, Timelinegrouped, Timelinegrouped1 } from "../../../../../../shared/data/charts/apexchartdata/timelinedata";
import Seo from "@/shared/layout-components/seo/seo";

const TimelineCharts = () => {
	return (
		<Fragment>
			<Seo title={"Timeline-Charts"} />
			<Row>
				<Col xl={6}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header>
							<div className="card-title">Basic Timeline Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="timeline-basic">
								<Basictimeline />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header>
							<div className="card-title">Multiple Colored TImeline Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="timeline-colors">
								<Multiplecolored />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header>
							<div className="card-title">Multi Series Timeline Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="timeline-multi">
								<Timelinegrouped1 />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header>
							<div className="card-title">Advanced Timeline Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="timeline-advanced">
								<Advancedmultirange />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header>
							<div className="card-title">Timeline-Grouped Rows</div>
						</Card.Header>
						<div className="p-0 p-sm-4">
							<div id="timeline-grouped">
								<Timelinegrouped />
							</div>
						</div>
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
};

export default TimelineCharts;
