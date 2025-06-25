"use client";
import { Basicscatter, Datetimescatter, Imagefillescatter } from "@/shared/data/charts/apexchartdata/scatterchartdata";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

const ScatterCharts = () => {
	return (
		<Fragment>
			<Seo title={"Sacatter-Charts"} />
			<Row>
				<Col xl={6}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header>
							<div className="card-title">Basic Scatter Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="scatter-basic">
								<Basicscatter />
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
							<div className="card-title">Datetime Scatter Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="scatter-datetime">
								<Datetimescatter />
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
							<div className="card-title">Image Fill Scatter Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="scatter-image">
								<Imagefillescatter />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
};

export default ScatterCharts;
