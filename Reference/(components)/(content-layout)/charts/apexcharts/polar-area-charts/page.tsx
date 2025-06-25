"use client";
import { Basicpolararea, Monochromepolar } from "@/shared/data/charts/apexchartdata/polarchartdata";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

const PolarAreaCharts = () => {
	return (
		<Fragment>
			<Seo title={"Polar-Area-Charts"} />
			<Row>
				<Col xl={6}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header>
							<div className="card-title">Basic Polar Area Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="polararea-basic">
								<Basicpolararea />
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
							<div className="card-title">Polar Area Monochrome Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="polararea-monochrome">
								<Monochromepolar />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
};

export default PolarAreaCharts;
