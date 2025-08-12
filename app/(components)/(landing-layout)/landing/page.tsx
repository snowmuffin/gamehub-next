"use client";
import { ThemeChanger } from '@/shared/redux/action';
import store from '@/shared/redux/store';
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Accordion, Button, Card, Col, Form, Row } from 'react-bootstrap';
import Link from 'next/link';
import { Amazingteam, Ourbest } from '@/shared/data/pages/landingdata';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Seo from '@/shared/layout-components/seo';

const Landing = ({ local_variable, ThemeChanger }: any) => {

    useEffect(() => {

        const theme = store.getState().local_variable;
        ThemeChanger({

            ...theme,
            "dataNavStyle": "menu-click",
            "dataNavLayout": "horizontal",
            "body": "landing-body"
        });

        return () => {
            ThemeChanger({
                ...theme,
                "dataNavStyle": "",
                "dataNavLayout": `${localStorage.ynexlayout == "horizontal" ? "horizontal" : "vertical"}`
            });
        };
    }, [ThemeChanger]);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 992) {
                const theme = store.getState().local_variable;
                ThemeChanger({ ...theme, "dataToggled": "close", "dataNavLayout": "horizontal" });
            } else {
                const theme = store.getState().local_variable;
                ThemeChanger({ ...theme, "dataToggled": "open", "dataNavLayout": "horizontal" });
            }
        }

        handleResize(); // Initial check

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [ThemeChanger]);
    function toggleNavigation() {
        if (window.innerWidth <= 992) {
            const theme = store.getState().local_variable;
            ThemeChanger({ ...theme, "dataToggled": "open", "dataNavLayout": "horizontal" });
        }
    }

    function handleClick() {
        const theme = store.getState().local_variable;
        ThemeChanger({ ...theme, "dataToggled": "close", "dataNavLayout": "horizontal" });
        if (document.querySelector(".offcanvas-end")?.classList.contains("show")) {
            document.querySelector(".offcanvas-end")?.classList.remove("show");
        }
    }

    const Switchericon = () => {
        document.querySelector(".offcanvas-end")?.classList.toggle("show");
        const Rightside: any = document.querySelector(".offcanvas-end");
        Rightside.style.insetInlineEnd = "0px";
        if (document.querySelector(".switcher-backdrop")?.classList.contains('d-none')) {
            document.querySelector(".switcher-backdrop")?.classList.add("d-block");
            document.querySelector(".switcher-backdrop")?.classList.remove("d-none");
        }
    };

    useEffect(() => {
        const rootDiv = document.getElementById('root');
        return () => {
            if (rootDiv) {
                rootDiv.className = ''; // Remove the className when component unmounts
            }
        };
    }, []);
    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > 30 && document.querySelector(".landing-body")) {
                const Scolls = document.querySelectorAll(".sticky");
                Scolls.forEach((e) => {
                    e.classList.add("sticky-pin");
                });
            } else {
                const Scolls = document.querySelectorAll(".sticky");
                Scolls.forEach((e) => {
                    e.classList.remove("sticky-pin");
                });
            }
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);

    const onScroll = () => {
        const sections = document.querySelectorAll(".side-menu__item");
        const scrollPos =
            window.scrollY ||
            document.documentElement.scrollTop ||
            (document.querySelector("body")?.scrollTop || 0);

        sections.forEach((elem) => {
            const value = elem.getAttribute("href") ?? "";
            const fragmentIndex = value.indexOf("#");
            const fragment = fragmentIndex !== -1 ? value.substring(fragmentIndex + 1) : "";

            if (fragment) {
                const refElement = document.getElementById(fragment);

                if (refElement) {
                    const scrollTopMinus = scrollPos + 73;
                    if (
                        refElement.offsetTop <= scrollTopMinus &&
                        refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
                    ) {
                        elem.classList.add("active");
                    } else {
                        elem.classList.remove("active");
                    }
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    //
    const breakpoints = {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    };
    return (

        <Fragment>
            <Seo title={"Landing"} />
            <header className="app-header">
                <div className="main-header-container container-fluid">
                    <div className="header-content-left">
                        <div className="header-element">
                            <div className="horizontal-logo">
                                <Link href="/dashboard/gaming" className="header-logo">
                                    <img src="../assets/images/brand-logos/toggle-dark.png" alt="logo" className="toggle-dark" />
                                </Link>
                            </div>
                        </div>
                        <div className="header-element">
                            <Link href="#!" scroll={false} className="sidemenu-toggle header-link" data-bs-toggle="sidebar" onClick={toggleNavigation}>
                                <span className="open-toggle">
                                    <i className="ri-menu-3-line fs-20"></i>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="header-content-right">
                        <div className="header-element align-items-center">
                            <div className="btn-list d-lg-none d-block">
                                <Link href="/authentication/sign-in/signin-basic" className="btn btn-primary-light">
                                    Sign Up
                                </Link>
                                <Button variant='' className="btn btn-wave btn-icon btn-success switcher-icon" data-bs-toggle="offcanvas" data-bs-target="#switcher-canvas" onClick={() => Switchericon()}>
                                    <i className="ri-settings-3-line"></i>
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>

            </header>
            <aside className="app-sidebar sticky" id="sidebar">

                <div className="container-xl">
                    <div className="main-sidebar">
                        <nav className="main-menu-container nav nav-pills sub-open">
                            <div className="landing-logo-container">
                                <div className="horizontal-logo">
                                    <Link href="/dashboard/gaming" className="header-logo">
                                        <img src="../assets/images/brand-logos/desktop-logo.png" alt="logo" className="desktop-logo" />
                                        <img src="../assets/images/brand-logos/desktop-dark.png" alt="logo" className="desktop-dark" />
                                    </Link>
                                </div>
                            </div>
                            <div className="slide-left" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path> </svg></div>
                            <ul className="main-menu">
                                <li className="slide">
                                    <Link className="side-menu__item" href="#home">
                                        <span className="side-menu__label">Home</span>
                                    </Link>
                                </li>
                                <li className="slide">
                                    <Link href="#glance" className="side-menu__item">
                                        <span className="side-menu__label">Glance</span>
                                    </Link>
                                </li>
                                <li className="slide">
                                    <Link href="#pricing" className="side-menu__item">
                                        <span className="side-menu__label">Pricing</span>
                                    </Link>
                                </li>
                                <li className="slide">
                                    <Link href="#testimonials" className="side-menu__item">
                                        <span className="side-menu__label">Testimonials</span>
                                    </Link>
                                </li>
                                <li className="slide">
                                    <Link href="#faqs" className="side-menu__item">
                                        <span className="side-menu__label">FAQ's</span>
                                    </Link>
                                </li>
                                <li className="slide">
                                    <Link href="#team" className="side-menu__item">
                                        <span className="side-menu__label">Team</span>
                                    </Link>
                                </li>
                                <li className="slide">
                                    <Link href="#contact" className="side-menu__item">
                                        <span className="side-menu__label">Contact Us</span>
                                    </Link>
                                </li>
                            </ul>
                            <div className="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path> </svg></div>
                            <div className="d-lg-flex d-none">
                                <div className="btn-list d-lg-flex d-none mt-lg-2 mt-xl-0 mt-0">
                                    <Link href="/authentication/sign-in/signin-basic" className="btn btn-wave btn-primary">
                                        Sign Up
                                    </Link>
                                    <Button variant='' className="btn btn-wave btn-icon btn-success switcher-icon" onClick={() => Switchericon()} data-bs-toggle="offcanvas" data-bs-target="#switcher-canvas">
                                        <i className="ri-settings-3-line"></i>
                                    </Button>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

            </aside>
            <div className="main-content landing-main px-0" onClick={handleClick}>
                <div className="landing-banner" id="home">
                    <section className="section">
                        <div className="container main-banner-container pb-lg-0">
                            <Row>
                                <Col xxl={7} xl={7} lg={7} md={8} className="">
                                    <div className="py-lg-5">
                                        <div className="mb-3">
                                            <h6 className="fw-medium text-fixed-white op-8 fs-14">- Level Up Your Design Universe</h6>
                                        </div>
                                        <p className="landing-banner-heading mb-3">Empower your vision with our <span className="text-warning">SCIFI Template!</span> Design</p>
                                        <div className="fs-15 mb-5 text-fixed-white op-7">SCIFI -  Turn imagination into reality as you explore a realm where ideas flourish, and designs come to life. Elevate your brand and redefine excellence through our creative designs.</div>
                                        <Link href="/dashboard/gaming" className="m-1 btn btn-lg btn-secondary">
                                            <i className="ri-eye-line me-2 align-middle"></i>
                                            View Demos
                                        </Link>
                                        <Link href="/dashboard/gaming" className="m-1 btn btn-lg bg-primary-transparent">
                                            <i className="ri-arrow-right-line me-2 align-middle"></i>
                                            Get Started
                                        </Link>
                                    </div>
                                </Col>
                                <Col xxl={5} xl={5} lg={5} md={4} className="my-auto">
                                    <div className="text-end landing-main-image landing-heading-img">
                                        <img src="../assets/images/media/landing/1.png" alt="" className="img-fluid" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </section>
                </div>
                <section className="section" id="glance">
                    <div className="container position-relative">
                        <div className="text-center">
                            <p className="fs-12 fw-medium text-success mb-1"><span className="landing-section-heading">-Glance-</span></p>
                            <h3 className="fw-medium mb-2">Why you choose us</h3>
                            <div className="row justify-content-center">
                                <Col xl={7}>
                                    <p className="text-muted fs-15 mb-5 fw-normal">Our mission is to support you in achieving your goals.</p>
                                </Col>
                            </div>
                        </div>
                        <Row>
                            <Col>
                                <Card className="custom-card landing-card border shadow-none text-center">
                                    <div className="top-left"></div>
                                    <div className="top-right"></div>
                                    <div className="bottom-left"></div>
                                    <div className="bottom-right"></div>
                                    <Card.Body>
                                        <div className="mb-4">
                                            <span className="avatar avatar-xl rounded-2 icon-shadow-primary bg-primary-transparent">
                                                <i className="ri-lightbulb-flash-line fs-3"></i>
                                            </span>
                                        </div>
                                        <h4 className="fw-medium">Creative Designs</h4>
                                        <p className="fs-14 text-muted">Nam rhoncus mauris id nisi semper tempor. Phasellus vulputate sit amet elit eu rutrum</p>
                                        <Link href="#!" scroll={false} className="fw-medium text-primary">Read More<i className="ti ti-arrow-narrow-right ms-2 fs-5 align-middle"></i></Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="custom-card landing-card border shadow-none text-center">
                                    <div className="top-left"></div>
                                    <div className="top-right"></div>
                                    <div className="bottom-left"></div>
                                    <div className="bottom-right"></div>
                                    <Card.Body>
                                        <div className="mb-4">
                                            <span className="avatar avatar-xl rounded-2 icon-shadow-info bg-info-transparent">
                                                <i className="ri-customer-service-2-line fs-3"></i>
                                            </span>
                                        </div>
                                        <h4 className="fw-medium">24/7 Customer Support</h4>
                                        <p className="fs-14 text-muted">Nam rhoncus mauris id nisi semper tempor. Phasellus vulputate sit amet elit eu rutrum</p>
                                        <Link href="#!" scroll={false} className="fw-medium text-info">Read More<i className="ti ti-arrow-narrow-right ms-2 fs-5 al align-middle"></i></Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="custom-card landing-card border shadow-none text-center">
                                    <div className="top-left"></div>
                                    <div className="top-right"></div>
                                    <div className="bottom-left"></div>
                                    <div className="bottom-right"></div>
                                    <Card.Body>
                                        <div className="mb-4">
                                            <span className="avatar avatar-xl rounded-2 icon-shadow-warning bg-warning-transparent">
                                                <i className="ri-vip-diamond-line fs-3"></i>
                                            </span>
                                        </div>
                                        <h4 className="fw-medium">Skilled Staff</h4>
                                        <p className="fs-14 text-muted">Nam rhoncus mauris id nisi semper tempor. Phasellus vulputate sit amet elit eu rutrum</p>
                                        <Link href="#!" scroll={false} className="fw-medium text-warning">Read More<i className="ti ti-arrow-narrow-right ms-2 fs-5 align-middle"></i></Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </section>
                <section className="section  section-bg" id="about-us">
                    <div className="container">
                        <div className="row gx-5 mx-0">
                            <Col>
                                <div className="home-proving-image">
                                    <img src="../assets/images/media/landing/2.png" alt="" className="img-fluid rounded" />
                                </div>
                                <div className="proving-pattern-1"></div>
                            </Col>
                            <div className="col-xl-8 my-auto">
                                <div className="heading-section text-start mb-4">
                                    <div className="heading-subtitle fw-medium"><span className="landing-section-heading text-success">-About Us-</span></div>
                                    <h4 className="heading-title">Where Innovation Meets Passion!</h4>
                                    <div className="heading-description fs-14 op-8">Welcome to SCIFI, where we offer a unique and tailored
                                        experience that is sure to exceed your expectations. Choose us and let us show you
                                        what true excellence looks like</div>
                                </div>
                                <div className="row gy-3 mb-0 ps-3">
                                    <Col xl={12}>
                                        <div className="d-flex align-items-top">
                                            <div className="me-2 home-prove-svg">
                                                <i className="ri-arrow-right-circle-line align-middle fs-16 text-secondary d-inline-block"></i>
                                            </div>
                                            <div>
                                                <span className="fs-14">
                                                    Benefiting from years of industry experience, we've forged a reputable standing in our field.Sed convallis lobortis nisl. Maecenas aliquet lorem turpis, nec vehicula ante finibus in. Donec id egestas eros.
                                                </span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={12}>
                                        <div className="d-flex align-items-top">
                                            <div className="me-2 home-prove-svg">
                                                <i className="ri-arrow-right-circle-line align-middle fs-16 text-secondary d-inline-block"></i>
                                            </div>
                                            <div>
                                                <span className="fs-14">
                                                    Comprising skilled and seasoned professionals, our team.Sed convallis lobortis nisl. Maecenas aliquet lorem turpis, nec vehicula ante finibus in. Donec id egestas eros.
                                                </span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={12}>
                                        <div className="d-flex align-items-top">
                                            <div className="me-2 home-prove-svg">
                                                <i className="ri-arrow-right-circle-line align-middle fs-16 text-secondary d-inline-block"></i>
                                            </div>
                                            <div>
                                                <span className="fs-14">
                                                    We customize our services to meet individual needs..Sed convallis lobortis nisl. Maecenas aliquet lorem turpis, nec vehicula ante finibus in. Donec id egestas eros.
                                                </span>
                                            </div>
                                        </div>
                                    </Col>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section" id="services">
                    <div className="container">
                        <div className="text-center">
                            <p className="fs-12 fw-medium text-success mb-1"><span className="landing-section-heading">-SERVICES-</span></p>
                            <h3 className="fw-medium mb-2">Our Best Services</h3>
                            <div className="row justify-content-center">
                                <Col xl={7}>
                                    <p className="text-muted fs-15 mb-5 fw-normal">Sed semper euismod, augue justo ullamcorper orci, eu imperdiet </p>
                                </Col>
                            </div>
                        </div>
                        <Row>
                            {Ourbest.map((idx) => (
                                <div className="col-xl-3" key={Math.random()}>
                                    <Card className="custom-card landing-card">
                                        <div className="top-left"></div>
                                        <div className="top-right"></div>
                                        <div className="bottom-left"></div>
                                        <div className="bottom-right"></div>
                                        <Card.Body>
                                            <div className="mb-3">
                                                <span className={`avatar avatar-lg bg-${idx.color}-transparent border border-${idx.color} border-opacity-10`}>
                                                    <i className={`ri-${idx.icon}-line fs-5`}></i>
                                                </span>
                                            </div>
                                            <h5 className="fw-medium">{idx.heading}</h5>
                                            <p className="fs-14 text-muted mb-0">Justo aliquyam duo vero clita aliquyam vero eirmod stet amet dolorem ipsum.</p>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))}
                        </Row>
                    </div>
                </section>
                <section className="section landing-Features" id="features">
                    <div className="container">
                        <div className="heading-section text-center mb-0">
                            <p className="fs-12 fw-medium text-success mb-1"><span className="landing-section-heading">-Features-</span></p>
                            <h2 className="text-fixed-white text-center fw-medium">Our Features</h2>
                            <div className="fs-16 text-fixed-white text-center op-8 mb-5">Ullamco ea commodo.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.perspiciatis unde omnis.</div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center trusted-companies sub-card-companies flex-wrap mb-3 mb-xl-0 gap-5">
                            <div className="trust-img"><img src="../assets/images/media/landing/web/1.png" alt="img" className="border-0" /></div>
                            <div className="trust-img"><img src="../assets/images/media/landing/web/2.png" alt="img" className="border-0" /></div>
                            <div className="trust-img"><img src="../assets/images/media/landing/web/3.png" alt="img" className="border-0" /></div>
                            <div className="trust-img"><img src="../assets/images/media/landing/web/4.png" alt="img" className="border-0" /></div>
                            <div className="trust-img"><img src="../assets/images/media/landing/web/5.png" alt="img" className="border-0" /></div>
                            <div className="trust-img"><img src="../assets/images/media/landing/web/6.png" alt="img" className="border-0" /></div>
                            <div className="trust-img me-0"><img src="../assets/images/media/landing/web/1.png" alt="img" className="border-0" /></div>
                        </div>
                    </div>
                </section>
                <section className="section" id="pricing">
                    <div className="container">
                        <div className="text-center">
                            <p className="fs-12 fw-medium text-success mb-1"><span className="landing-section-heading">-PRICING-</span></p>
                            <h3 className="fw-medium mb-2">Pricing Plans for You</h3>
                            <div className="row justify-content-center">
                                <Col xl={7}>
                                    <p className="text-muted fs-15 mb-5 fw-normal">Our user-friendly plans are carefully tailored to accommodate every category effectively.</p>
                                </Col>
                            </div>
                        </div>
                        <Row>
                            <Col xxl={3} lg={6} md={12} sm={12} className="col-12">
                                <Card className="custom-card landing-card pricing-card border shadow-none">
                                    <div className="top-left"></div>
                                    <div className="top-right"></div>
                                    <div className="bottom-left"></div>
                                    <div className="bottom-right"></div>
                                    <Card.Body>
                                        <div className="mb-4">
                                            <p className="fs-18 fw-medium mb-1">Intro</p>
                                            <p className="mb-1 fs-14 op-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
                                            <p className="text-justify fw-medium mb-1">
                                                <span className="fs-2">$</span><span className="fs-40 me-1">0</span>
                                                <span className="fs-20 op-6"><span className="fs-20">/</span> month</span>
                                            </p>
                                            <p className="fs-12 mb-2 text-info p-1 lh-1 bg-info-transparent d-inline-flex"><i className="ri-information-line align-middle me-1 d-inline-block fs-11"></i>Billed monthly on regular basis!</p>
                                        </div>
                                        <ul className="text-justify list-unstyled pricing-body ps-0">
                                            <li className="mb-3"><span className="me-1"><i className="fe fe-check-circle align-middle fs-14 text-success d-inline-block"></i></span> 6 Users
                                            </li>
                                            <li className="mb-3"><span className="me-1"><i className="fe fe-check-circle align-middle fs-14 text-success d-inline-block"></i></span>10 Days Pack
                                            </li>
                                            <li className="mb-3"><span className="me-1"><i className="fe fe-check-circle align-middle fs-14 text-success d-inline-block"></i></span> Basic services
                                            </li>
                                            <li className="mb-3"><span className="me-1"><i className="fe fe-check-circle align-middle fs-14 text-success d-inline-block"></i></span> Backups
                                            </li>
                                            <li className="mb-3"><span className="me-1"><i className="fe fe-x-circle align-middle fs-16 op-5 d-inline-block"></i></span> Advanced Security</li>
                                            <li className="mb-0"><span className="me-1"><i className="fe fe-x-circle align-middle fs-16 op-5 d-inline-block"></i></span> 24/7 support serivce</li>
                                        </ul>
                                        <div className="text-center border-top-0 pt-4 d-grid">
                                            <Button variant='' type="button" className="btn btn-lg btn-primary-light">
                                                <span className="ms-4 me-4">Get Plan Now</span>
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={3} lg={6} md={12} sm={12} className="col-12">
                                <Card className="custom-card landing-card pricing-card border shadow-none">
                                    <div className="top-left"></div>
                                    <div className="top-right"></div>
                                    <div className="bottom-left"></div>
                                    <div className="bottom-right"></div>
                                    <Card.Body>
                                        <div className="mb-4">
                                            <p className="fs-18 fw-medium mb-1">Basic</p>
                                            <p className="mb-1 fs-14 op-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
                                            <p className="text-justify fw-medium mb-1">
                                                <span className="fs-2">$</span><span className="fs-40 me-1">29</span>
                                                <span className="fs-20 op-6"><span className="fs-20">/</span> month</span>
                                            </p>
                                            <p className="fs-12 mb-2 text-info p-1 lh-1 bg-info-transparent d-inline-flex"><i className="ri-information-line align-middle me-1 d-inline-block fs-11"></i>Billed monthly on regular basis!</p>
                                        </div>
                                        <ul className="text-justify list-unstyled pricing-body ps-0">
                                            <li className="mb-3"><span className="me-1"><i className="fe fe-check-circle align-middle fs-14 text-success d-inline-block"></i></span> 8 Users
                                            </li>
                                            <li className="mb-3"><span className="me-1"><i className="fe fe-check-circle align-middle fs-14 text-success d-inline-block"></i></span>48 Days Pack
                                            </li>
                                            <li className="mb-3"><span className="me-1"><i className="fe fe-check-circle align-middle fs-14 text-success d-inline-block"></i></span> Basic services
                                            </li>
                                            <li className="mb-3"><span className="me-1"><i className="fe fe-check-circle align-middle fs-14 text-success d-inline-block"></i></span> Backups
                                            </li>
                                            <li className="mb-3"><span className="me-1"><i className="fe fe-x-circle align-middle fs-16 op-5 d-inline-block"></i></span> Advanced Security</li>
                                            <li className="mb-0"><span className="me-1"><i className="fe fe-x-circle align-middle fs-16 op-5 d-inline-block"></i></span> 24/7 support serivce</li>
                                        </ul>
                                        <div className="text-center border-top-0 pt-4 d-grid">
                                            <Button variant='' type="button" className="btn btn-lg btn-primary-light">
                                                <span className="ms-4 me-4">Get Plan Now</span>
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={3} lg={6} md={12} sm={12} className="col-12">
                                <div className="card pricing-card border custom-card landing-card border-primary shadow-none">
                                    <Card.Body>
                                        <span className="popular-pricing-badge"><i className="ri-flashlight-line me-1 d-inline-block"></i>Most Popluar</span>
                                        <div className="mb-4">
                                            <p className="fs-18 fw-medium mb-1">Popular</p>
                                            <p className="mb-1 fs-14 op-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
                                            <p className="text-justify fw-medium mb-1">
                                                <span className="fs-2">$</span><span className="fs-40 me-1">49</span>
                                                <span className="fs-20 op-6"><span className="fs-20">/</span> month</span>
                                            </p>
                                            <p className="fs-12 mb-2 text-info p-1 lh-1 bg-info-transparent d-inline-flex"><i className="ri-information-line align-middle me-1 d-inline-block fs-11"></i>Billed monthly on regular basis!</p>
                                        </div>
                                        <ul className="text-justify list-unstyled pricing-body ps-0">
                                            <li className="mb-3"><span className="me-1"><i className="fe fe-check-circle align-middle fs-14 text-success d-inline-block"></i></span> 8 Users
                                            </li>
                                            <li className="mb-3"><span className="me-1"><i className="fe fe-check-circle align-middle fs-14 text-success d-inline-block"></i></span> 28 Days Pack
                                            </li>
                                            <li className="mb-3"><span className="me-1"><i className="fe fe-check-circle align-middle fs-14 text-success d-inline-block"></i></span> Basic services
                                            </li>
                                            <li className="mb-3"><span className="me-1"><i className="fe fe-check-circle align-middle fs-14 text-success d-inline-block"></i></span> Backups
                                            </li>
                                            <li className="mb-3"><span className="me-1"><i className="fe fe-check-circle align-middle fs-14 text-success d-inline-block"></i></span> Advanced Security</li>
                                            <li className="mb-0"><span className="me-1"><i className="fe fe-check-circle align-middle fs-14 text-success d-inline-block"></i></span> 24/7 support serivce</li>
                                        </ul>
                                        <div className="text-center border-top-0 pt-4 d-grid">
                                            <Button variant='' type="button" className="btn btn-lg btn-primary">
                                                <span className="ms-4 me-4">Get Plan Now</span>
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </div>
                            </Col>
                            <Col xxl={3} lg={6} md={12} sm={12} className="col-12">
                                <Card className="custom-card landing-card pricing-card border shadow-none">
                                    <div className="top-left"></div>
                                    <div className="top-right"></div>
                                    <div className="bottom-left"></div>
                                    <div className="bottom-right"></div>
                                    <Card.Body>
                                        <div className="mb-4">
                                            <p className="fs-18 fw-medium mb-1">Advanced</p>
                                            <p className="mb-1 fs-14 op-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
                                            <p className="text-justify fw-medium mb-1">
                                                <span className="fs-2">$</span><span className="fs-40 me-1">29</span>
                                                <span className="fs-20 op-6"><span className="fs-20">/</span> month</span>
                                            </p>
                                            <p className="fs-12 mb-2 text-info p-1 lh-1 bg-info-transparent d-inline-flex"><i className="ri-information-line align-middle me-1 d-inline-block fs-11"></i>Billed monthly on regular basis!</p>
                                        </div>
                                        <ul className="text-justify list-unstyled pricing-body ps-0">
                                            <li className="mb-3"><span className="me-1"><i className="fe fe-check-circle align-middle fs-14 text-success d-inline-block"></i></span> 4 Users
                                            </li>
                                            <li className="mb-3"><span className="me-1"><i className="fe fe-check-circle align-middle fs-14 text-success d-inline-block"></i></span>28 Days Pack
                                            </li>
                                            <li className="mb-3"><span className="me-1"><i className="fe fe-check-circle align-middle fs-14 text-success d-inline-block"></i></span> Basic services
                                            </li>
                                            <li className="mb-3"><span className="me-1"><i className="fe fe-check-circle align-middle fs-14 text-success d-inline-block"></i></span> Backups
                                            </li>
                                            <li className="mb-3"><span className="me-1"><i className="fe fe-check-circle align-middle fs-14 text-success d-inline-block"></i></span> Advanced Security</li>
                                            <li className="mb-0"><span className="me-1"><i className="fe fe-x-circle align-middle fs-16 op-5 d-inline-block"></i></span> 24/7 support serivce</li>
                                        </ul>
                                        <div className="text-center border-top-0 pt-4 d-grid">
                                            <Button variant='' type="button" className="btn btn-lg btn-primary-light">
                                                <span className="ms-4 me-4">Get Plan Now</span>
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </section>
                <section className="section section-bg" id="testimonials">
                    <div className="container reviews-container">
                        <div className="text-center">
                            <p className="fs-12 fw-medium text-success mb-1"><span className="landing-section-heading">-Testimonials-</span></p>
                            <h3 className="fw-medium mb-2">What people think about us</h3>
                            <div className="row justify-content-center">
                                <Col xl={7}>
                                    <p className="text-muted fs-15 mb-5 fw-normal">Here are the testimonials shared by our highly satisfied customers about our product.</p>
                                </Col>
                            </div>
                        </div>
                        <div className="swiper pagination-dynamic testimonialSwiperService">
                            <Swiper spaceBetween={30} centeredSlides={false} breakpoints={breakpoints}
                                slidesPerView={3}
                                autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ dynamicBullets: true, clickable: true }} modules={[Pagination, Autoplay]} className="mySwiper">
                                <SwiperSlide>
                                    <Card className="custom-card text-fixed-white">
                                        <div className="top-left"></div>
                                        <div className="top-right"></div>
                                        <div className="bottom-left"></div>
                                        <div className="bottom-right"></div>
                                        <Card.Body>
                                            <i className="ri-double-quotes-l text-primary fs-2"></i>
                                            <div className="op-9 fs-14 mb-3">Nulla maximus nunc ut euismod condimentum. Nunc vel quam maximus, sagittis ante non, tempor risus. Suspendissei. Nam lacus risus.  --
                                                <Link href="#!" scroll={false} className="fw-medium fs-11 text-info" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" data-bs-placement="top" data-bs-title="Nulla maximus nunc ut euismod condimentum. Nunc vel quam maximus, sagittis ante non, tempor risus. Suspendissei. Nam lacus risus.">Read More</Link>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                <div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="text-warning d-block me-1">
                                                            <i className="ri-star-fill fs-14 align-middle lh-1"></i>
                                                            <i className="ri-star-fill fs-14 align-middle lh-1"></i>
                                                            <i className="ri-star-fill fs-14 align-middle lh-1"></i>
                                                            <i className="ri-star-fill fs-14 align-middle lh-1"></i>
                                                            <i className="ri-star-line fs-14 align-middle lh-1"></i>
                                                        </span>
                                                        <span className="op-8">4.5 </span>
                                                    </div>
                                                    <span className="fs-11 op-7">10 days ago</span>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <div className="text-end me-2">
                                                        <p className="mb-0 fw-medium fs-14">Violet Sofi</p>
                                                        <p className="mb-0 fs-11 fw-normal op-7">violetsofi@gmail.com</p>
                                                    </div>
                                                    <span className="avatar">
                                                        <img src="../assets/images/faces/3.jpg" alt="" className="img-fluid" />
                                                    </span>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="custom-card text-fixed-white">
                                        <div className="top-left"></div>
                                        <div className="top-right"></div>
                                        <div className="bottom-left"></div>
                                        <div className="bottom-right"></div>
                                        <Card.Body>
                                            <i className="ri-double-quotes-l text-primary fs-2"></i>
                                            <div className="op-9 fs-14 mb-3">Mauris quis dolor ut nisl mattis dignissim sed ac massa. Nunc ante nisi, malesuada id leo sit amet, pretium fringilla dolor.  --
                                                <Link href="#!" scroll={false} className="fw-medium fs-11 text-info" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" data-bs-placement="top" data-bs-title="Mauris quis dolor ut nisl mattis dignissim sed ac massa. Nunc ante nisi, malesuada id leo sit amet, pretium fringilla dolor.">Read More</Link>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                <div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="text-warning d-block me-1">
                                                            <i className="ri-star-fill fs-14 align-middle lh-1"></i>
                                                            <i className="ri-star-fill fs-14 align-middle lh-1"></i>
                                                            <i className="ri-star-fill fs-14 align-middle lh-1"></i>
                                                            <i className="ri-star-half-line fs-14 align-middle lh-1"></i>
                                                            <i className="ri-star-line fs-14 align-middle lh-1"></i>
                                                        </span>
                                                        <span className="op-8">4.3 </span>
                                                    </div>
                                                    <span className="fs-11 op-7">5 days ago</span>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <div className="text-end me-2">
                                                        <p className="mb-0 fw-medium fs-14">David John</p>
                                                        <p className="mb-0 fs-11 fw-normal op-7">davidjohn@gmail.com</p>
                                                    </div>
                                                    <span className="avatar">
                                                        <img src="../assets/images/faces/9.jpg" alt="" className="img-fluid" />
                                                    </span>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="custom-card text-fixed-white">
                                        <div className="top-left"></div>
                                        <div className="top-right"></div>
                                        <div className="bottom-left"></div>
                                        <div className="bottom-right"></div>
                                        <Card.Body>
                                            <i className="ri-double-quotes-l text-primary fs-2"></i>
                                            <div className="op-9 fs-14 mb-3">Nulla maximus nunc ut euismod condimentum. Nunc vel quam maximus, sagittis ante non, tempor risus. Suspendissei. Nam lacus risus.  --
                                                <Link href="#!" scroll={false} className="fw-medium fs-11 text-info" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" data-bs-placement="top" data-bs-title="Nulla maximus nunc ut euismod condimentum. Nunc vel quam maximus, sagittis ante non, tempor risus. Suspendissei. Nam lacus risus.">Read More</Link>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                <div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="text-warning d-block me-1">
                                                            <i className="ri-star-fill fs-14 align-middle lh-1"></i>
                                                            <i className="ri-star-fill fs-14 align-middle lh-1"></i>
                                                            <i className="ri-star-fill fs-14 align-middle lh-1"></i>
                                                            <i className="ri-star-fill fs-14 align-middle lh-1"></i>
                                                            <i className="ri-star-half-line fs-14 align-middle lh-1"></i>
                                                        </span>
                                                        <span className="op-8">4.3 </span>
                                                    </div>
                                                    <span className="fs-11 op-7">2 days ago</span>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <div className="text-end me-2">
                                                        <p className="mb-0 fw-medium fs-14">Arunima Alice</p>
                                                        <p className="mb-0 fs-11 fw-normal op-7">Arunimaalice@gmail.com</p>
                                                    </div>
                                                    <span className="avatar">
                                                        <img src="../assets/images/faces/8.jpg" alt="" className="img-fluid" />
                                                    </span>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="custom-card text-fixed-white">
                                        <div className="top-left"></div>
                                        <div className="top-right"></div>
                                        <div className="bottom-left"></div>
                                        <div className="bottom-right"></div>
                                        <Card.Body>
                                            <i className="ri-double-quotes-l text-primary fs-2"></i>
                                            <div className="op-9 fs-14 mb-3">Mauris quis dolor ut nisl mattis dignissim sed ac massa. Nunc ante nisi, malesuada id leo sit amet, pretium fringilla dolor.  --
                                                <Link href="#!" scroll={false} className="fw-medium fs-11 text-info" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" data-bs-placement="top" data-bs-title="Mauris quis dolor ut nisl mattis dignissim sed ac massa. Nunc ante nisi, malesuada id leo sit amet, pretium fringilla dolor.">Read More</Link>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                <div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="text-warning d-block me-1">
                                                            <i className="ri-star-fill fs-14 align-middle lh-1"></i>
                                                            <i className="ri-star-fill fs-14 align-middle lh-1"></i>
                                                            <i className="ri-star-fill fs-14 align-middle lh-1"></i>
                                                            <i className="ri-star-fill fs-14 align-middle lh-1"></i>
                                                            <i className="ri-star-half-line fs-14 align-middle lh-1"></i>
                                                        </span>
                                                        <span className="op-8">4.3 </span>
                                                    </div>
                                                    <span className="fs-11 op-7">17 days ago</span>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <div className="text-end me-2">
                                                        <p className="mb-0 fw-medium fs-14">Isaac Elias</p>
                                                        <p className="mb-0 fs-11 fw-normal op-7">isaacelias@gmail.com</p>
                                                    </div>
                                                    <span className="avatar">
                                                        <img src="../assets/images/faces/10.jpg" alt="" className="img-fluid" />
                                                    </span>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="custom-card text-fixed-white">
                                        <div className="top-left"></div>
                                        <div className="top-right"></div>
                                        <div className="bottom-left"></div>
                                        <div className="bottom-right"></div>
                                        <Card.Body>
                                            <i className="ri-double-quotes-l text-primary fs-2"></i>
                                            <div className="op-9 fs-14 mb-3">Nulla maximus nunc ut euismod condimentum. Nunc vel quam maximus, sagittis ante non, tempor risus. Suspendissei. Nam lacus risus.  --
                                                <Link href="#!" scroll={false} className="fw-medium fs-11 text-info" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" data-bs-placement="top" data-bs-title="Nulla maximus nunc ut euismod condimentum. Nunc vel quam maximus, sagittis ante non, tempor risus. Suspendissei. Nam lacus risus.">Read More</Link>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                <div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="text-warning d-block me-1">
                                                            <i className="ri-star-fill fs-14 align-middle lh-1"></i>
                                                            <i className="ri-star-fill fs-14 align-middle lh-1"></i>
                                                            <i className="ri-star-fill fs-14 align-middle lh-1"></i>
                                                            <i className="ri-star-fill fs-14 align-middle lh-1"></i>
                                                            <i className="ri-star-line fs-14 align-middle lh-1"></i>
                                                        </span>
                                                        <span className="op-8">4.1 </span>
                                                    </div>
                                                    <span className="fs-11 op-7">13 days ago</span>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <div className="text-end me-2">
                                                        <p className="mb-0 fw-medium fs-14">Stella Joy</p>
                                                        <p className="mb-0 fs-11 fw-normal op-7">Stellajoy@gmail.com</p>
                                                    </div>
                                                    <span className="avatar">
                                                        <img src="../assets/images/faces/2.jpg" alt="" className="img-fluid" />
                                                    </span>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="custom-card text-fixed-white">
                                        <div className="top-left"></div>
                                        <div className="top-right"></div>
                                        <div className="bottom-left"></div>
                                        <div className="bottom-right"></div>
                                        <Card.Body>
                                            <i className="ri-double-quotes-l text-primary fs-2"></i>
                                            <div className="op-9 fs-14 mb-3">Mauris quis dolor ut nisl mattis dignissim sed ac massa. Nunc ante nisi, malesuada id leo sit amet, pretium fringilla dolor.  --
                                                <Link href="#!" scroll={false} className="fw-medium fs-11 text-info" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" data-bs-placement="top" data-bs-title="Mauris quis dolor ut nisl mattis dignissim sed ac massa. Nunc ante nisi, malesuada id leo sit amet, pretium fringilla dolor.">Read More</Link>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                <div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="text-warning d-block me-1">
                                                            <i className="ri-star-fill fs-14 align-middle lh-1"></i>
                                                            <i className="ri-star-fill fs-14 align-middle lh-1"></i>
                                                            <i className="ri-star-fill fs-14 align-middle lh-1"></i>
                                                            <i className="ri-star-fill fs-14 align-middle lh-1"></i>
                                                            <i className="ri-star-half-line fs-14 align-middle lh-1"></i>
                                                        </span>
                                                        <span className="op-8">4.3 </span>
                                                    </div>
                                                    <span className="fs-11 op-7">2 days ago</span>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <div className="text-end me-2">
                                                        <p className="mb-0 fw-medium fs-14">Reva Saan</p>
                                                        <p className="mb-0 fs-11 fw-normal op-7">revasaan@gmail.com</p>
                                                    </div>
                                                    <span className="avatar">
                                                        <img src="../assets/images/faces/5.jpg" alt="" className="img-fluid" />
                                                    </span>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                            </Swiper>
                            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
                        </div>
                    </div>
                </section>
                <section className="section" id="faqs">
                    <div className="container text-center">
                        <p className="fs-12 fw-medium text-success mb-1"><span className="landing-section-heading">-F.A.Q-</span></p>
                        <h3 className="fw-medium mb-2">Frequently asked questions ?</h3>
                        <div className="row justify-content-center">
                            <Col xl={7}>
                                <p className="text-muted fs-15 mb-5 fw-normal">We have provided a list of commonly asked questions to assist you..</p>
                            </Col>
                        </div>
                        <div className="row text-start">
                            <Col xl={12}>
                                <div className="row gy-2">
                                    <Col xl={6}>
                                        <Accordion defaultActiveKey="1" className="accordion accordion-customicon1 accordion-primary accordions-items-seperate" id="accordionFAQ1">
                                            <Accordion.Item eventKey='1'>
                                                <Accordion.Header className="accordion-header" id="headingcustomicon1One">

                                                    How do I integrate the template into my project?

                                                </Accordion.Header>
                                                <div id="collapsecustomicon1One" className="accordion-collapse"
                                                    aria-labelledby="headingcustomicon1One"
                                                    data-bs-parent="#accordionFAQ1">
                                                    <Accordion.Body>
                                                        <strong>This is the first item's accordion body.</strong> It is shown by
                                                        default, until the collapse plugin adds the appropriate classes that we
                                                        use to style each element. These classes control the overall appearance,
                                                        as well as the showing and hiding via CSS transitions. You can modify
                                                        any of this with custom CSS or overriding our default variables. It's
                                                        also worth noting that just about any HTML can go within the
                                                        <code>.accordion-body</code>, though the transition does limit overflow.
                                                    </Accordion.Body>
                                                </div>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey='2'>
                                                <Accordion.Header className="accordion-header" id="headingcustomicon1Two">

                                                    How frequently is the template updated?
                                                </Accordion.Header>
                                                <div id="collapsecustomicon1Two" className="accordion-collapse "
                                                    aria-labelledby="headingcustomicon1Two"
                                                    data-bs-parent="#accordionFAQ1">
                                                    <Accordion.Body>
                                                        Check the template provider's website or documentation for information on updates. Regular updates may include bug fixes, new features, or compatibility improvements.
                                                    </Accordion.Body>
                                                </div>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey='3'>
                                                <Accordion.Header className="accordion-header" id="headingcustomicon1Three">
                                                    What support options are available for landing page services?
                                                </Accordion.Header>
                                                <div id="collapsecustomicon1Three" className="accordion-collapse"
                                                    aria-labelledby="headingcustomicon1Three"
                                                    data-bs-parent="#accordionFAQ1">
                                                    <Accordion.Body>
                                                        <strong>This is the first item's accordion body.</strong> It is shown by
                                                        default, until the collapse plugin adds the appropriate classes that we
                                                        use to style each element. These classes control the overall appearance,
                                                        as well as the showing and hiding via CSS transitions. You can modify
                                                        any of this with custom CSS or overriding our default variables. It's
                                                        also worth noting that just about any HTML can go within the
                                                        <code>.accordion-body</code>, though the transition does limit overflow.
                                                    </Accordion.Body>
                                                </div>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey='4'>
                                                <Accordion.Header className="accordion-header" id="headingcustomicon1Four">
                                                    Can I upgrade or downgrade my subscription plan?
                                                </Accordion.Header>
                                                <div id="collapsecustomicon1Four" className="accordion-collapse"
                                                    aria-labelledby="headingcustomicon1Four"
                                                    data-bs-parent="#accordionFAQ1">
                                                    <Accordion.Body>
                                                        Yes, you can upgrade or downgrade your subscription plan at any time. Visit your account settings or contact our support team to make changes to your subscription level.
                                                    </Accordion.Body>
                                                </div>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey='5'>
                                                <Accordion.Header className="accordion-header" id="headingcustomicon1Five">
                                                    How often will I be billed for my subscription?
                                                </Accordion.Header>
                                                <div id="collapsecustomicon1Five" className="accordion-collapse"
                                                    aria-labelledby="headingcustomicon1Five"
                                                    data-bs-parent="#accordionFAQ1">
                                                    <Accordion.Body>
                                                        Billing frequency depends on your chosen subscription plan. We offer monthly, quarterly, and annual billing options. Check your subscription details for the billing cycle information.
                                                    </Accordion.Body>
                                                </div>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey='6'>
                                                <Accordion.Header className="accordion-header" id="headingcustomicon1Six">
                                                    What is included in the subscription service?
                                                </Accordion.Header>
                                                <div id="collapsecustomicon1Six" className="accordion-collapse"
                                                    aria-labelledby="headingcustomicon1Six"
                                                    data-bs-parent="#accordionFAQ1">
                                                    <Accordion.Body>
                                                        Our subscription service typically provides access to premium features, exclusive content, and ongoing updates related to our landing page offerings.
                                                    </Accordion.Body>
                                                </div>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Col>
                                    <Col xl={6}>
                                        <Accordion defaultActiveKey="12" className="accordion accordion-customicon1 accordion-primary accordions-items-seperate" id="accordionFAQ2">
                                            <Accordion.Item eventKey='7'>
                                                <Accordion.Header className="accordion-header" id="headingcustomicon2Five">
                                                    How often will I be billed for my subscription?
                                                </Accordion.Header>
                                                <div id="collapsecustomicon2Five" className="accordion-collapse"
                                                    aria-labelledby="headingcustomicon2Five"
                                                    data-bs-parent="#accordionFAQ2">
                                                    <Accordion.Body>
                                                        Billing frequency depends on your chosen subscription plan. We offer monthly, quarterly, and annual billing options. Check your subscription details for the billing cycle information.
                                                    </Accordion.Body>
                                                </div>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey='8'>
                                                <Accordion.Header className="accordion-header" id="headingcustomicon2Six">
                                                    What is included in the subscription service?
                                                </Accordion.Header>
                                                <div id="collapsecustomicon2Six" className="accordion-collapse"
                                                    aria-labelledby="headingcustomicon2Six"
                                                    data-bs-parent="#accordionFAQ2">
                                                    <Accordion.Body>
                                                        Our subscription service typically provides access to premium features, exclusive content, and ongoing updates related to our landing page offerings.
                                                    </Accordion.Body>
                                                </div>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey='9'>
                                                <Accordion.Header className="accordion-header" id="headingcustomicon2One">
                                                    How do I integrate the template into my project?
                                                </Accordion.Header>
                                                <div id="collapsecustomicon2One" className="accordion-collapse "
                                                    aria-labelledby="headingcustomicon2One"
                                                    data-bs-parent="#accordionFAQ2">
                                                    <Accordion.Body>
                                                        <strong>This is the first item's accordion body.</strong> It is shown by
                                                        default, until the collapse plugin adds the appropriate classes that we
                                                        use to style each element. These classes control the overall appearance,
                                                        as well as the showing and hiding via CSS transitions. You can modify
                                                        any of this with custom CSS or overriding our default variables. It's
                                                        also worth noting that just about any HTML can go within the
                                                        <code>.accordion-body</code>, though the transition does limit overflow.
                                                    </Accordion.Body>
                                                </div>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey='10'>
                                                <Accordion.Header className="accordion-header" id="headingcustomicon2Two">
                                                    How frequently is the template updated?
                                                </Accordion.Header>
                                                <div id="collapsecustomicon2Two" className="accordion-collapse"
                                                    aria-labelledby="headingcustomicon2Two"
                                                    data-bs-parent="#accordionFAQ2">
                                                    <Accordion.Body>
                                                        Check the template provider's website or documentation for information on updates. Regular updates may include bug fixes, new features, or compatibility improvements.
                                                    </Accordion.Body>
                                                </div>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey='11'>
                                                <Accordion.Header className="accordion-header" id="headingcustomicon2Three">
                                                    What are your opening hours?
                                                </Accordion.Header>
                                                <div id="collapsecustomicon2Three" className="accordion-collapse"
                                                    aria-labelledby="headingcustomicon2Three"
                                                    data-bs-parent="#accordionFAQ2">
                                                    <Accordion.Body>
                                                        <strong>This is the first item's accordion body.</strong> It is shown by
                                                        default, until the collapse plugin adds the appropriate classes that we
                                                        use to style each element. These classes control the overall appearance,
                                                        as well as the showing and hiding via CSS transitions. You can modify
                                                        any of this with custom CSS or overriding our default variables. It's
                                                        also worth noting that just about any HTML can go within the
                                                        <code>.accordion-body</code>, though the transition does limit overflow.
                                                    </Accordion.Body>
                                                </div>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey='12'>
                                                <Accordion.Header className="accordion-header" id="headingcustomicon2Four">

                                                    Do I have the right to return an item?

                                                </Accordion.Header>
                                                <div id="collapsecustomicon2Four" className="accordion-collapse"
                                                    aria-labelledby="headingcustomicon2Four"
                                                    data-bs-parent="#accordionFAQ2">
                                                    <Accordion.Body>
                                                        <strong>This is the first item's accordion body.</strong> It is shown by
                                                        default, until the collapse plugin adds the appropriate classes that we
                                                        use to style each element. These classes control the overall appearance,
                                                        as well as the showing and hiding via CSS transitions. You can modify
                                                        any of this with custom CSS or overriding our default variables. It's
                                                        also worth noting that just about any HTML can go within the
                                                        <code>.accordion-body</code>, though the transition does limit overflow.
                                                    </Accordion.Body>
                                                </div>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Col>
                                </div>
                            </Col>
                        </div>
                    </div>
                </section>
                <section className="section section-bg" id="team">
                    <div className="container">
                        <div className="text-center">
                            <p className="fs-12 fw-medium text-success mb-1"><span className="landing-section-heading">-TEAM-</span></p>
                            <h3 className="fw-medium mb-2">Meet our amazing Team</h3>
                            <div className="row justify-content-center">
                                <Col xl={7}>
                                    <p className="text-muted fs-15 mb-5 fw-normal">Our team is made up of real people who are passionate about what they do.</p>
                                </Col>
                            </div>
                        </div>
                        <Row>
                            {Amazingteam.map((idx) => (
                                <Col xl={3} lg={3} md={6} sm={6} className="col-12 mb-lg-0 mb-4" key={Math.random()}>
                                    <Card className="custom-card  team-card text-center">
                                        <div className="top-left"></div>
                                        <div className="top-right"></div>
                                        <div className="bottom-left"></div>
                                        <div className="bottom-right"></div>
                                        <Card.Body>
                                            <img src={idx.src1} className="avatar avatar-xxl mb-4 mb-3 border p-1 bg-primary-transparent landing-team-img mt-2" alt="..." />
                                            <div className="text-center py-2">
                                                <h5 className="mb-0 fw-medium">{idx.heading}</h5>
                                                <p className="mb-1 fs-14 fw-medium text-primary">{idx.role}</p>
                                                <p className="mb-0 fs-13 text-muted op-8">Aliquam ullamcorper neque vitae dui ullamcorper, at varius erat feugiat. Proin aliquam, purus ut.</p>
                                                <div className="d-flex justify-content-center mt-4">
                                                    <Link aria-label="anchor" href="#!" scroll={false} className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light"><i className="ri-twitter-x-line align-middle"></i></Link>
                                                    <Link aria-label="anchor" href="#!" scroll={false} className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light ms-2"><i className="ri-facebook-line align-middle"></i></Link>
                                                    <Link aria-label="anchor" href="#!" scroll={false} className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light ms-2"><i className="ri-instagram-line align-middle"></i></Link>
                                                    <Link aria-label="anchor" href="#!" scroll={false} className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light ms-2"><i className="ri-linkedin-line align-middle"></i></Link>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </section>
                <section className="section" id="contact">
                    <div className="container text-center">
                        <p className="fs-12 fw-medium text-success mb-1"><span className="landing-section-heading">-CONTACT US-</span></p>
                        <h3 className="fw-medium mb-2">Do you have any questions?</h3>
                        <div className="row justify-content-center">
                            <div className="col-xl-9">
                                <p className="text-muted fs-15 mb-5 fw-normal"> Have questions, or need help with a product or service, contacting support allows you to connect with a dedicated team of professionals</p>
                            </div>
                        </div>
                        <Card className="custom-card  overflow-hidden section-bg border overflow-hidden shadow-none">
                            <div className="top-left"></div>
                            <div className="top-right"></div>
                            <div className="bottom-left"></div>
                            <div className="bottom-right"></div>
                            <Card.Body className="p-0">
                                <div className="row text-start align-items-center">
                                    <Col xxl={6} xl={6} lg={6} md={12} sm={12} className="">
                                        <div className="p-4">
                                            <div className="row mt-2 px-3">
                                                <Col xl={12}>
                                                    <div className="row gy-3">
                                                        <Col xl={12}>
                                                            <Form.Label htmlFor="contact-address-name" className="form-label ">Full Name :</Form.Label>
                                                            <Form.Control type="text" className="form-control " id="contact-address-name" placeholder="Enter Name" />
                                                        </Col>
                                                        <Col xl={12}>
                                                            <Form.Label htmlFor="contact-address-mail" className="form-label ">Mail Address :</Form.Label>
                                                            <Form.Control type="text" className="form-control " id="contact-address-mail" placeholder="Enter Mail Address" />
                                                        </Col>
                                                    </div>
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Label htmlFor="contact-address-message" className="form-label ">Message :</Form.Label>
                                                    <Form.Control as="textarea" className="form-control " id="contact-address-message" rows={2} placeholder="Type Here" />
                                                </Col>
                                                <Col xl={12}>
                                                    <div className="text-end mt-4">
                                                        <Button variant='' className="btn btn-primary btn-wave">Send Message</Button>
                                                    </div>
                                                </Col>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={12} sm={12} className="">
                                        <div className="p-4 landing-contact-info">
                                            <div className="p-3">
                                                <div className="fs-18 text-primary fw-medium mb-3">Contact Information</div>
                                                <div className="mb-3">
                                                    <i className="ri-map-pin-fill me-2 text-primary"></i> 1352/A-12, Abcd Street, KLM Town, Hyderabad.
                                                </div>
                                                <div className="d-flex mb-3">
                                                    <i className="ri-phone-fill me-2 d-inline-block text-primary"></i>
                                                    <div>
                                                        <div>+122 1234 32422</div>
                                                        <span>+121 1234 14511</span>
                                                    </div>
                                                </div>
                                                <div className="mb-4"><i className="ri-mail-fill me-2 d-inline-block text-primary"></i> carolinahanasandy4424@example.com</div>
                                            </div>
                                            <div className="p-3 pt-0">
                                                <Card className="custom-card border mb-0 shadow-none overflow-hidden">
                                                    <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d30444.274596168965!2d78.54114692513858!3d17.48198883339408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d17.4886524!2d78.5495041!4m5!1s0x3bcb9c7ec139a15d%3A0x326d1c90786b2ab6!2sspruko%20technologies!3m2!1d17.474805099999998!2d78.570258!5e0!3m2!1sen!2sin!4v1670225507254!5m2!1sen!2sin"
                                                        height="100" loading="lazy"></iframe>
                                                </Card>
                                            </div>
                                        </div>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </section>
                <section className="section landing-footer text-fixed-white">
                    <div className="container">
                        <Row>
                            <Col md={3} sm={6} className="col-12 mb-md-0 mb-3">
                                <div className="px-4">
                                    <p className="fw-medium mb-3"><Link href="/dashboard/gaming"><img src="../assets/images/brand-logos/desktop-dark.png" alt="" className="landing-footer-logo" /></Link></p>
                                    <p className="mb-2 op-6 fw-normal fs-14">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed. Reprehenderit et magnam, fuga est mollitia eius.
                                    </p>
                                    <p className="mb-0 op-6 fw-normal fs-14">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem ea esse ad</p>
                                </div>
                            </Col>
                            <Col md={2} sm={6} className="col-12">
                                <div className="px-4">
                                    <h6 className="fw-medium mb-3 text-fixed-white">PAGES</h6>
                                    <ul className="list-unstyled op-6 fw-normal landing-footer-list fs-14 mb-0">
                                        <li>
                                            <Link href="#!" scroll={false} className="text-fixed-white">Profile</Link>
                                        </li>
                                        <li>
                                            <Link href="#!" scroll={false} className="text-fixed-white">Timeline</Link>
                                        </li>
                                        <li>
                                            <Link href="#!" scroll={false} className="text-fixed-white">Email</Link>
                                        </li>
                                        <li>
                                            <Link href="#!" scroll={false} className="text-fixed-white">Contacts</Link>
                                        </li>
                                        <li>
                                            <Link href="#!" scroll={false} className="text-fixed-white">Projects</Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={2} sm={6} className=" col-12">
                                <div className="px-4">
                                    <h6 className="fw-medium text-fixed-white">INFO</h6>
                                    <ul className="list-unstyled op-6 fw-normal landing-footer-list fs-14 mb-0">
                                        <li>
                                            <Link href="#!" scroll={false} className="text-fixed-white">Contact US</Link>
                                        </li>
                                        <li>
                                            <Link href="#!" scroll={false} className="text-fixed-white">Services</Link>
                                        </li>
                                        <li>
                                            <Link href="#!" scroll={false} className="text-fixed-white">Our Team</Link>
                                        </li>
                                        <li>
                                            <Link href="#!" scroll={false} className="text-fixed-white">Blog</Link>
                                        </li>
                                        <li>
                                            <Link href="#!" scroll={false} className="text-fixed-white">About</Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={2} sm={6} className=" col-12">
                                <div className="px-4">
                                    <h6 className="fw-medium text-fixed-white">Social</h6>
                                    <ul className="list-unstyled fw-normal mb-0 landing-footer-list fs-14">
                                        <li className="d-flex gap-1 align-items-center">
                                            <Button variant='' className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light">
                                                <i className="ri-facebook-line fw-bold"></i>
                                            </Button>
                                            <div className="ms-2 op-8">Facebook</div>
                                        </li>
                                        <li className="d-flex gap-1 align-items-center">
                                            <Button variant='' className="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light">
                                                <i className="ri-twitter-x-line fw-bold"></i>
                                            </Button>
                                            <div className="ms-2 op-8">Twitter</div>
                                        </li>
                                        <li className="d-flex gap-1 align-items-center">
                                            <Button variant='' className="btn btn-sm btn-icon btn-warning-light btn-wave waves-effect waves-light">
                                                <i className="ri-instagram-line fw-bold"></i>
                                            </Button>
                                            <div className="ms-2 op-8">Instagram</div>
                                        </li>
                                        <li className="d-flex gap-1 align-items-center">
                                            <Button variant='' className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light">
                                                <i className="ri-youtube-line fw-bold"></i>
                                            </Button>
                                            <div className="ms-2 op-8">Youtube</div>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={3} sm={6} className="col-12">
                                <div className="px-4">
                                    <h6 className="fw-medium text-fixed-white">CONTACT INFO</h6>
                                    <ul className="list-unstyled fw-normal mb-0 landing-footer-list fs-14">
                                        <li>
                                            <Link href="#!" scroll={false} className="text-fixed-white op-6"><i className="ri-home-4-line me-1 align-middle"></i> New York, NY 10012, US</Link>
                                        </li>
                                        <li>
                                            <Link href="#!" scroll={false} className="text-fixed-white op-6"><i className="ri-mail-line me-1 align-middle"></i> info@fmail.com</Link>
                                        </li>
                                        <li>
                                            <Link href="#!" scroll={false} className="text-fixed-white op-6"><i className="ri-mail-line me-1 align-middle"></i> contact@fmail.com</Link>
                                        </li>
                                        <li>
                                            <Link href="#!" scroll={false} className="text-fixed-white op-6"><i className="ri-phone-line me-1 align-middle"></i> +(555)-1920 1831</Link>
                                        </li>
                                        <li>
                                            <Link href="#!" scroll={false} className="text-fixed-white op-6"><i className="ri-printer-line me-1 align-middle"></i> +(123) 1293 123</Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
                <div className="text-center landing-main-footer py-3">
                    <span className="text-muted fs-15"> Copyright © <span id="year">2024</span> <Link
                        href="#!" scroll={false} className="text-primary fw-medium"><u>SciFi</u></Link>.
                        Designed with <span className="ri-heart-fill text-danger"></span> by <Link href="#!" scroll={false} className="text-primary fw-medium"><u>
                            Spruko</u>
                        </Link> All
                        rights
                        reserved
                    </span>
                </div>

            </div>
        </Fragment>
    );
};

const mapStateToProps = (state: any) => ({
    local_variable: state.local_variable,
});

export default connect(mapStateToProps, { ThemeChanger })(Landing);
