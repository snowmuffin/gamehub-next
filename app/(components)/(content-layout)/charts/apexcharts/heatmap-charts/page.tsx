"use client";
import { Basiheatmap, Colorrange, Multiseriesheatmap, Shadesheatmap } from "@/shared/data/charts/apexchartdata/heatmapdata";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

const HeatmapCharts = () => {
	return (
		<Fragment>
			<Seo title={"Heatmap-Charts"} />
			<Row>
				<Col xl={6}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header>
							<div className="card-title">Basic Heatmap Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="heatmap-basic">
								<Basiheatmap />
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
							<div className="card-title">Multi Series Heatmap Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="heatmap-multiseries">
								<Multiseriesheatmap />
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
							<div className="card-title">Color Range Heatmap Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="heatmap-colorrange">
								<Colorrange />
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
							<div className="card-title">Heatmap Range Without Shades</div>
						</Card.Header>
						<Card.Body>
							<div id="heatmap-range">
								<Shadesheatmap />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
};

export default HeatmapCharts;
