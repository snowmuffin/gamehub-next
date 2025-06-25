"use client";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Linearea, Linecolumnarea, Mixedlinecolumn} from "../../../../../../shared/data/charts/apexchartdata/mixedchartdata";
import Seo from "@/shared/layout-components/seo/seo";

const MixedCharts = () => {
	return (
		<Fragment>
			<Seo title={"Mixed-Charts"} />
			<Row>
				<Col xl={6}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header>
							<div className="card-title">Line &amp; Column Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="mixed-linecolumn">
								<Mixedlinecolumn />
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
							<div className="card-title">Line &amp; Area Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="mixed-linearea">
								<Linearea />
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
							<div className="card-title">Line,Column &amp; Area Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="mixed-all">
								<Linecolumnarea />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
};

export default MixedCharts;
