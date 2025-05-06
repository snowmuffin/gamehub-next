"use client";
import { Basicradar, Multipleradar, Polygonradar } from "@/shared/data/charts/apexchartdata/radarchartdata";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

const RadarCharts = () => {
	return (
		<Fragment>
			<Seo title={"Radar-Charts"} />
			<Row>
				<Col xl={6}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header>
							<div className="card-title">Basic Radar Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="radar-basic">
								<Basicradar />
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
							<div className="card-title">Radar Chart-Multiple Series</div>
						</Card.Header>
						<Card.Body>
							<div id="radar-multiple">
								<Multipleradar />
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
							<div className="card-title">Radar Chart Polygon Fill</div>
						</Card.Header>
						<Card.Body>
							<div id="radar-polygon">
								<Polygonradar />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
};

export default RadarCharts;
