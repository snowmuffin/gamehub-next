"use client";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Basiccandlestick, Candlebrush, Candleline, Candlexaxis } from "../../../../../../shared/data/charts/apexchartdata/candlestickdata";
import Seo from "@/shared/layout-components/seo/seo";

const CandlestickCharts = () => {
	return (
		<Fragment>
			<Seo title={"Candlestick-Charts"} />
			<Row>
				<Col xl={6}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header>
							<div className="card-title">Basic Candlestick Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="candlestick-basic">
								<Basiccandlestick />
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
							<div className="card-title">Candlestick Synced With Brush Chart</div>
						</Card.Header>
						<Card.Body>
							<Candlebrush />
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
							<div className="card-title">Candlestick With Cateory X-axis</div>
						</Card.Header>
						<Card.Body>
							<div id="candlestick-categoryx">
								<Candlexaxis />
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
							<div className="card-title">Candlestick With Line Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="candlestick-line">
								<Candleline />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
};

export default CandlestickCharts;
