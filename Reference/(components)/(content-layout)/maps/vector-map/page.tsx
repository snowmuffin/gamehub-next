"use client";
import { MapAnnotation, Shapeworldmap, USState, WorldMap } from "@/shared/data/maps/vectormapdata";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const VectorMap = () => {
	const [content, setContent] = useState("");
	return (
		<Fragment>
			<Seo title={"Vector-maps"} />
			<Row>
				<Col xl={6}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header>
							<div className="card-title">Basic Vector Map</div>
						</Card.Header>
						<Card.Body  >
							<div id="vector-map">
								<WorldMap setTooltipContent={setContent} />
								{content}
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
							<div className="card-title">Map With Markers</div>
						</Card.Header>
						<Card.Body  >
							<div id="marker-map">
								<Shapeworldmap />
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
							<div className="card-title">Map With Image Markers</div>
						</Card.Header>
						<Card.Body  >
							<div id="marker-image-map">
								<MapAnnotation />
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
							<div className="card-title">Map With Lines</div>
						</Card.Header>
						<Card.Body  >
							<div id="lines-map">
								<USState />
							</div>
						</Card.Body>
					</Card>
				</Col>

			</Row>
		</Fragment>
	);
};

export default VectorMap;
