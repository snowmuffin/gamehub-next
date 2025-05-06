"use client";
import { carousel1, carousel2, carousel3, carousel4, carousel5, carousel6, carousel7, carousel8 } from "@/shared/data/prismdata/advanceui-prism";
import Seo from "@/shared/layout-components/seo/seo";
import ShowCode from "@/shared/layout-components/showcode/showcode";
import React, { Fragment } from "react";
import { Carousel, Col, Row } from "react-bootstrap";

const Carousels = () => {
	return (
		<Fragment>
			<Seo title={"Carousel"} />
			<Row>
				<Col xxl={4} lg={6} md={6} sm={12} className="basic-curousel">
					<ShowCode title="Slides Only" customCardHeaderClass="" code={carousel1}>
						<Carousel>
							<Carousel.Item>
								<img src="../../assets/images/media/media-26.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item>
								<img src="../../assets/images/media/media-27.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item>
								<img src="../../assets/images/media/media-33.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
						</Carousel>
					</ShowCode>

				</Col>
				<Col xxl={4} lg={6} md={6} sm={12}>
					<ShowCode title="With controls" customCardHeaderClass="" code={carousel2}>
						<Carousel indicators={false}>
							<Carousel.Item className="">
								<img src="../../assets/images/media/media-28.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item>
								<img src="../../assets/images/media/media-31.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item>
								<img src="../../assets/images/media/media-29.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
						</Carousel>
					</ShowCode>

				</Col>
				<Col xxl={4} lg={6} md={6} sm={12}>
					<ShowCode title="With indicators" customCardHeaderClass="" code={carousel3}>
						<Carousel id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
							<Carousel.Item className="">
								<img src="../../assets/images/media/media-25.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item>
								<img src="../../assets/images/media/media-29.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item>
								<img src="../../assets/images/media/media-30.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
						</Carousel>
					</ShowCode>
				</Col>
				<Col xxl={4} lg={6} md={6} sm={12}>
					<ShowCode title="Individual .carousel-item interval" customCardHeaderClass="" code={carousel6}>
						<Carousel id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" indicators={false}>
							<Carousel.Item interval={1000} className="" >
								<img src="../../assets/images/media/media-40.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item interval={2000}>
								<img src="../../assets/images/media/media-41.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item >
								<img src="../../assets/images/media/media-42.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
						</Carousel>
					</ShowCode>
				</Col>
				<Col xxl={4} lg={6} md={6} sm={12}>
					<ShowCode title="With captions" customCardHeaderClass="" code={carousel4}>
						<Carousel id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
							<Carousel.Item className="">
								<img src="../../assets/images/media/media-59.jpg" className="d-block w-100" alt="..." />
								<Carousel.Caption className="d-none d-md-block">
									<h5 className='text-fixed-white'>First slide label</h5>
									<p>Some representative placeholder content for the first slide.</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img src="../../assets/images/media/media-60.jpg" className="d-block w-100" alt="..." />
								<Carousel.Caption className="d-none d-md-block">
									<h5 className='text-fixed-white'>Second slide label</h5>
									<p>Some representative placeholder content for the second slide.</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img src="../../assets/images/media/media-61.jpg" className="d-block w-100" alt="..." />
								<Carousel.Caption className="d-none d-md-block">
									<h5 className='text-fixed-white'>Third slide label</h5>
									<p>Some representative placeholder content for the third slide.</p>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</ShowCode>
				</Col>
				<Col xxl={4} lg={6} md={6} sm={12}>
					<ShowCode title="Crossfade" customCardHeaderClass="" code={carousel5}>
						<Carousel fade id="carouselExampleFade" className="carousel slide carousel-fade" indicators={false}>
							<Carousel.Item className="">
								<img src="../../assets/images/media/media-43.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item>
								<img src="../../assets/images/media/media-44.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item>
								<img src="../../assets/images/media/media-45.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
						</Carousel>
					</ShowCode>
				</Col>
				<Col xxl={4} md={6}>
					<ShowCode title="Disable touch swiping" customCardHeaderClass="" code={carousel7}>
						<Carousel touch={false} id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" indicators={false}
							data-bs-interval="false">
							<Carousel.Item className="">
								<img src="../../assets/images/media/media-13.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item>
								<img src="../../assets/images/media/media-14.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item>
								<img src="../../assets/images/media/media-18.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
						</Carousel>
					</ShowCode>
				</Col>
				<Col xxl={4} md={6}>
					<ShowCode title="Dark variant" customCardHeaderClass="" code={carousel8}>
						<Carousel id="carouselExampleDark" className="carousel slide">
							<Carousel.Item className="" data-bs-interval="10000">
								<img src="../../assets/images/media/media-63.jpg" className="d-block w-100"
									alt="..." />
								<Carousel.Caption className="d-none d-md-block">
									<h5 className='text-fixed-white'>First slide label</h5>
									<p className="op-7">Some representative placeholder content for the first slide.</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item data-bs-interval="2000">
								<img src="../../assets/images/media/media-64.jpg" className="d-block w-100"
									alt="..." />
								<Carousel.Caption className="d-none d-md-block">
									<h5 className='text-fixed-white'>Second slide label</h5>
									<p className="op-7">Some representative placeholder content for the second slide.</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img src="../../assets/images/media/media-62.jpg" className="d-block w-100"
									alt="..." />
								<Carousel.Caption className="d-none d-md-block">
									<h5 className='text-fixed-white'>Third slide label</h5>
									<p className="op-7">Some representative placeholder content for the third slide.</p>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</ShowCode>
				</Col>
			</Row>
		</Fragment>
	);
};

export default Carousels;
