"use client";
import { Bubble3D, Simplebubble } from "@/shared/data/charts/apexchartdata/bubblechartdata";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

const BubbleCharts = () => {
	return (
		<Fragment>
			<Seo title={"Bubble-Charts"} />
			<Row>
				<Col xl={6}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header>
							<div className="card-title">Simple Bubble Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="bubble-simple">
								<Simplebubble />
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
							<div className="card-title">3D Bubble Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="bubble-3d">
								<Bubble3D />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
};

export default BubbleCharts;
