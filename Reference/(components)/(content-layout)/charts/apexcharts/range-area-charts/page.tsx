"use client";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Basicrangearea, Comborangearea } from "../../../../../../shared/data/charts/apexchartdata/rangeareadata";
import Seo from "@/shared/layout-components/seo/seo";

const RangeAreaCharts = () => {
	return (
		<Fragment>
			<Seo title={"Range-Area-Charts"} />
			<Row>
				<Col xl={6}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header>
							<div className="card-title">
								Basic Range Area Chart
							</div>
						</Card.Header>
						<Card.Body>
							<div id="rangearea-basic">
								<Basicrangearea />
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
							<div className="card-title">
								Combo Range Area Chart
							</div>
						</Card.Header>
						<Card.Body>
							<div id="rangearea-combo">
								<Comborangearea />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
};

export default RangeAreaCharts;
