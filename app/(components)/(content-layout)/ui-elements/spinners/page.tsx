"use client";
import { spinner1, spinner10, spinner2, spinner3, spinner4, spinner5, spinner6, spinner7, spinner8, spinner9 } from "@/shared/data/prismdata/uielements-prism";
import ShowCode from "@/shared/layout-components/showcode/showcode";
import React, { Fragment } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Buttonspinner, Colorspinner } from "../../../../../shared/data/ui-elements/spinnersdata";
import Seo from "@/shared/layout-components/seo/seo";

const Spinners = () => {
	return (
		<Fragment>
			<Seo title={"Spinners"} />
			<Row>
				<Col xl={6}>
					<ShowCode title="Border spinner" customCardClass="custom-card" customCardBodyClass="" code={spinner1}>
						<div className="spinner-border  text-primary" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Growing spinner" customCardClass="custom-card" customCardBodyClass="" code={spinner3}>
						<div className="spinner-grow text-primary" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					</ShowCode>
				</Col>

			</Row>
			<Row>
				<Col xl={12}>
					<ShowCode title="Buttons" customCardClass="custom-card" customCardBodyClass="" code={spinner10}>
						<div className="btn-list">
							<Button variant='primary-light' className="btn" type="button" disabled>
								<span className="spinner-border spinner-border-sm align-middle" role="status"
									aria-hidden="true"></span>
								<span className="visually-hidden"> Loading...</span>
							</Button>
							<Button variant='primary-light' className="btn" type="button" disabled>
								<span className="spinner-border spinner-border-sm align-middle" role="status"
									aria-hidden="true"></span>
								Loading...
							</Button>
							<Button variant='primary-light' className="btn" type="button" disabled>
								<span className="spinner-grow spinner-grow-sm align-middle" role="status"
									aria-hidden="true"></span>
								<span className="visually-hidden"> Loading...</span>
							</Button>
							{Buttonspinner.map((idx) => (
								<Button variant={idx.color} className="" type="button" disabled key={Math.random()}>
									<span className="spinner-grow spinner-grow-sm align-middle" role="status"
										aria-hidden="true"></span>
									Loading...
								</Button>
							))}
						</div>
					</ShowCode>
				</Col>
			</Row>
			<Row>
				<Col xl={12}>
					<ShowCode title="Colors" customCardClass="custom-card" customCardBodyClass="" code={spinner2}>
						{Colorspinner.map((idx) => (
							<div className={`spinner-border me-2 text-${idx.color}`} role="status" key={Math.random()}>
								<span className="visually-hidden">Loading...</span>
							</div>
						))}
					</ShowCode>
				</Col>
				<Col xl={12}>
					<ShowCode title="Growing spinner" customCardClass="custom-card" customCardBodyClass="" code={spinner4}>
						{Colorspinner.map((idx) => (
							<div className={`spinner-grow me-1 text-${idx.color}`} role="status" key={Math.random()}>
								<span className="visually-hidden">Loading...</span>
							</div>
						))}
					</ShowCode>

				</Col>
			</Row>
			<Row>
				<Col xl={6}>
					<ShowCode title="Alignment Flex" customCardClass="custom-card" customCardBodyClass="" code={spinner5}>
						<div className="d-flex justify-content-center mb-4">
							<div className="spinner-border text-primary" role="status">
								<span className="visually-hidden">Loading...</span>
							</div>
						</div>
						<div className="d-flex align-items-center">
							<strong>Loading...</strong>
							<div className="spinner-border text-primary ms-auto" role="status" aria-hidden="true"></div>
						</div>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Alignment Float" customCardClass="custom-card" customCardBodyClass="" code={spinner6}>
						<div className="clearfix mb-4">
							<div className="spinner-border text-primary float-end" role="status">
								<span className="visually-hidden">Loading...</span>
							</div>
						</div>
						<div className="clearfix">
							<div className="spinner-border text-primary float-start" role="status">
								<span className="visually-hidden">Loading...</span>
							</div>
						</div>
					</ShowCode>
				</Col>
			</Row>
			<Row>
				<Col xl={6}>
					<ShowCode title="Alignment Text center" customCardClass="custom-card" customCardBodyClass="" code={spinner7}>
						<div className="text-center">
							<div className="spinner-border text-primary" role="status">
								<span className="visually-hidden">Loading...</span>
							</div>
						</div>
					</ShowCode>

					<ShowCode title="Spinner Sizes" customCardClass="custom-card" customCardBodyClass="d-flex align-items-center" code={spinner8}>
						<div className="spinner-border text-primary spinner-border-sm me-4" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
						<div className="spinner-grow text-primary spinner-grow-sm me-4" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
						<div className="spinner-border text-primary me-4" style={{ width: "3rem", height: "3rem" }}
							role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
						<div className="spinner-grow text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Alignment Margin" customCardClass="custom-card" customCardBodyClass="d-flex align-items-center" code={spinner9}>
						<div className="spinner-border text-primary m-5" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					</ShowCode>
				</Col>
			</Row>

		</Fragment>
	);
};

export default Spinners;
