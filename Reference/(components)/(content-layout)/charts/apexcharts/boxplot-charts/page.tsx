"use client";
import { Basicboxplot, Boxplothorizontal, Boxplotscatter } from "@/shared/data/charts/apexchartdata/boxplotdata";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

const BoxplotCharts = () => {
	return (
		<Fragment>
			<Seo title={"Boxplot-Charts"} />
			<Row>
				<Col xl={6}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header>
							<div className="card-title">Basic Boxplot Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="boxplot-basic">
								<Basicboxplot />
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
							<div className="card-title">Boxplot With Scatter Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="boxplot-scatter">
								<Boxplotscatter />
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
							<div className="card-title">Horizontal Boxplot Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="boxplot-horizontal">
								<Boxplothorizontal />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
};

export default BoxplotCharts;
