"use client";
import { Basictreemap, Colorrangetree, Distributedtree, Multidimensional } from "@/shared/data/charts/apexchartdata/treemapdata";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

const TreemapCharts = () => {
	return (
		<Fragment>
			<Seo title={"Treemap-Charts"} />
			<Row>
				<Col xl={6}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header>
							<div className="card-title">Basic Treemap Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="treemap-basic">
								<Basictreemap />
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
							<div className="card-title">Multi Dimensional Treemap Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="treemap-multi">
								<Multidimensional />
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
							<div className="card-title">Distributed Treemap Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="treemap-distributed">
								<Distributedtree />
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
							<div className="card-title">Treemap with color ranges</div>
						</Card.Header>
						<Card.Body>
							<div id="treemap-colorranges">
								<Colorrangetree />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
};

export default TreemapCharts;
