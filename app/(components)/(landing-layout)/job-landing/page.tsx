"use client";
import React, { Fragment, useEffect } from "react";
import { Accordion, Button, Card, Col, Dropdown, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { connect } from "react-redux";
import { SwiperSlide, Swiper } from "swiper/react";
import { ThemeChanger } from "@/shared/redux/action";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import store from "@/shared/redux/store";
import { Featuredjobs, JobCategory } from "@/shared/data/pages/landingdata";
import Seo from "@/shared/layout-components/seo";

const Joblanding = ({ ThemeChanger }: any) => {
  useEffect(() => {
    const theme = store.getState().local_variable;
    ThemeChanger({
      ...theme,
      dataNavStyle: "menu-click",
      dataNavLayout: "horizontal",
      body: "landing-body job-landing"
    });

    return () => {
      ThemeChanger({
        ...theme,
        dataNavStyle: "",
        dataNavLayout: `${localStorage.ynexlayout === "horizontal" ? "horizontal" : "vertical"}`
      });
    };
  }, [ThemeChanger]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 992) {
        const theme = store.getState().local_variable;
        ThemeChanger({ ...theme, dataToggled: "close", dataNavLayout: "horizontal" });
      } else {
        const theme = store.getState().local_variable;
        ThemeChanger({ ...theme, dataToggled: "open", dataNavLayout: "horizontal" });
      }
    }

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);
    // handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [ThemeChanger]);

  function toggleNavigation() {
    if (window.innerWidth <= 992) {
      const theme = store.getState().local_variable;
      ThemeChanger({ ...theme, dataToggled: "open", dataNavLayout: "horizontal" });
    }
  }

  function handleClick() {
    const theme = store.getState().local_variable;
    ThemeChanger({ ...theme, dataToggled: "close", dataNavLayout: "horizontal" });
    if (document.querySelector(".offcanvas-end")?.classList.contains("show")) {
      document.querySelector(".offcanvas-end")?.classList.remove("show");
    }
  }

  const Switchericon = () => {
    document.querySelector(".offcanvas-end")?.classList.toggle("show");
    const Rightside: any = document.querySelector(".offcanvas-end");
    Rightside.style.insetInlineEnd = "0px";
    if (document.querySelector(".switcher-backdrop")?.classList.contains("d-none")) {
      document.querySelector(".switcher-backdrop")?.classList.add("d-block");
      document.querySelector(".switcher-backdrop")?.classList.remove("d-none");
    }
  };
  useEffect(() => {
    const rootDiv = document.getElementById("root");
    return () => {
      if (rootDiv) {
        rootDiv.className = ""; // Remove the className when component unmounts
      }
    };
  }, []);
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 30 && document.querySelector(".landing-body")) {
        const Scolls = document.querySelectorAll(".sticky");
        Scolls.forEach(e => {
          e.classList.add("sticky-pin");
        });
      } else {
        const Scolls = document.querySelectorAll(".sticky");
        Scolls.forEach(e => {
          e.classList.remove("sticky-pin");
        });
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  const onScroll = () => {
    const sections = document.querySelectorAll(".side-menu__item");
    const scrollPos =
      window.scrollY || document.documentElement.scrollTop || document.querySelector("body")?.scrollTop || 0;

    sections.forEach(elem => {
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
      spaceBetween: 20
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  };
  return (
    <Fragment>
      <Seo title={"Job-landing"} />
      <header className="app-header">
        <div className="main-header-container container-fluid">
          <div className="header-content-left">
            <div className="header-element">
              <div className="horizontal-logo">
                <Link href="/dashboard/gaming" className="header-logo">
                  <Image src="/assets/images/brand-logos/toggle-dark.png" alt="logo" className="toggle-dark" width={120} height={40} />
                </Link>
              </div>
            </div>
            <div className="header-element">
              <Link
                href="#!"
                scroll={false}
                className="sidemenu-toggle header-link"
                data-bs-toggle="sidebar"
                onClick={toggleNavigation}
              >
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
                <Button
                  variant=""
                  className="btn btn-wave btn-icon btn-success switcher-icon"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#switcher-canvas"
                >
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
                    <Image src="/assets/images/brand-logos/desktop-logo.png" alt="logo" className="desktop-logo" width={150} height={50} />
                    <Image src="/assets/images/brand-logos/desktop-dark.png" alt="logo" className="desktop-dark" width={150} height={50} />
                  </Link>
                </div>
              </div>
              <div className="slide-left" id="slide-left">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24">
                  {" "}
                  <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>{" "}
                </svg>
              </div>
              <ul className="main-menu">
                <li className="slide">
                  <Link className="side-menu__item" href="#home">
                    <span className="side-menu__label">Home</span>
                  </Link>
                </li>
                <li className="slide">
                  <Link href="#jobs" className="side-menu__item">
                    <span className="side-menu__label">Jobs</span>
                  </Link>
                </li>
                <li className="slide">
                  <Link href="#blog" className="side-menu__item">
                    <span className="side-menu__label">Blog</span>
                  </Link>
                </li>
                <li className="slide">
                  <Link href="#employers" className="side-menu__item">
                    <span className="side-menu__label">For Employers</span>
                  </Link>
                </li>
                <li className="slide">
                  <Link href="#career-advice" className="side-menu__item">
                    <span className="side-menu__label">Career Advice</span>
                  </Link>
                </li>
              </ul>
              <div className="slide-right" id="slide-right">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24">
                  {" "}
                  <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>{" "}
                </svg>
              </div>
              <div className="d-lg-flex d-none">
                <div className="btn-list mt-lg-2 mt-xl-0 mt-0">
                  <Link href="/authentication/sign-in/signin-basic" className="btn btn-wave btn-primary">
                    Sign Up
                  </Link>
                  <Link href="/apps/jobs/job-post" className="btn btn-wave btn-secondary">
                    Job Post
                  </Link>
                  <Link
                    href="#!"
                    scroll={false}
                    className="btn btn-wave btn-icon btn-info-light switcher-icon h-auto"
                    onClick={() => Switchericon()}
                    data-bs-toggle="offcanvas"
                    data-bs-target="#switcher-canvas"
                  >
                    <i className="ri-settings-3-line"></i>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </aside>
      <div className="main-content p-0 landing-main">
        <div className="landing-banner" id="home">
          <section className="section pb-0">
            <div className="container main-banner-container">
              <div className="row justify-content-center text-center">
                <Col xxl={6} xl={7} lg={8} className="">
                  <div className="">
                    <h5 className="landing-banner-heading mb-1">Discover Your Dream </h5>
                    <h5 className="landing-banner-heading mb-3">
                      <span className="text-warning">Job that Matches You </span> Perfectly !
                    </h5>
                    <p className="fs-16 mb-5 op-8 fw-normal text-fixed-white">
                      Be part of our community and discover a world of opportunities customized for you, with over 3.25
                      million active users!
                    </p>
                  </div>
                </Col>
                <Col xxl={7} xl={7} lg={8} className="mb-3">
                  <div className=" custom-form-group mb-2">
                    <input
                      type="text"
                      className="form-control form-control-lg shadow-sm"
                      placeholder="Job title, Keywords or Company.."
                      aria-label="Recipient's username"
                    />
                    <div className="custom-form-btn bg-transparent">
                      <Link href="#!" scroll={false} className="gps-location">
                        <i className="ti ti-current-location"></i>
                      </Link>
                      <Button variant="" className="btn btn-primary border-0 fw-medium" type="button">
                        <span>Find Job</span>
                        <i className="ri-search-2-line ms-sm-2 d-inline-block"></i>
                      </Button>
                    </div>
                  </div>
                  <span className="fs-12 fw-medium">
                    Top-Picked Categories:{" "}
                    <span className="op-8 fw-normal">
                      Development, Fullstack, Design, Manager, Account, Support, Java
                    </span>
                  </span>
                </Col>
              </div>
            </div>
          </section>
        </div>
        <section className="section section-bg " id="jobs">
          <div className="container">
            <div className="d-flex align-items-center justify-content-center flex-wrap gap-3 mb-5 text-center">
              <div>
                <p className="fs-12 fw-medium mb-1">
                  <span className="landing-section-heading text-success">Jobs</span>
                </p>
                <h3 className="fw-medium mb-0">Top Job Categories</h3>
                <span className="text-muted fs-15 fw-normal d-block">
                  Nam posuere tellus ut consequat rutrum. Sed ac leo est. Proin quis arcu lorem
                </span>
              </div>
            </div>
            <Row>
              {JobCategory.map(idx => (
                <Col lg={2} md={6} className="col-12" key={Math.random()}>
                  <Card className="custom-card border shadow-none job-category-card">
                    <Card.Body>
                      <div className="p-2 border border-dashed d-inline-flex mb-3 job-category-icon">
                        <i className="ri-briefcase-fill fs-4 job-icon-shadow text-primary"></i>
                      </div>
                      <h5 className="card-title fw-medium mb-1 text-nowarp text-truncate">{idx.heading}</h5>
                      <p className="fs-14 op-8">
                        <span className="text-default fw-medium">{idx.data} Jobs</span> available
                      </p>
                      <Link className="text-primary fw-medium fs-14" href="#!" scroll={false}>
                        Find Jobs<i className="ri-arrow-right-s-line align-middle transform-arrow lh-1"></i>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <div className="text-center">
              <Link href="#!" scroll={false} className="btn btn-wave btn-primary">
                View All Categories <i className="ri-arrow-right-circle-line"></i>
              </Link>
            </div>
          </div>
        </section>
        <section className="section" id="steps">
          <div className="container text-center">
            <div className="row justify-content-center text-center mb-5">
              <Col xl={6}>
                <p className="fs-12 fw-medium mb-1">
                  <span className="landing-section-heading text-success">STEPS</span>
                </p>
                <h3 className="fw-medium mb-2">How does it works ?</h3>
                <span className="text-muted fs-15 fw-normal d-block">
                  Nam posuere tellus ut consequat rutrum. Sed ac leo est. Proin quis arcu lorem
                </span>
              </Col>
            </div>
            <Row>
              <Col md={4} className="col-12">
                <div className="mb-4 landing-steps">
                  <span className="avatar avatar-lg border border-dashed text-primary fw-medium">01</span>
                </div>
                <Card className="custom-card landing-card text-center">
                  <div className="top-left"></div>
                  <div className="top-right"></div>
                  <div className="bottom-left"></div>
                  <div className="bottom-right"></div>
                  <Card.Body className=" rounded">
                    <h5 className="fw-medium">
                      <i className="ri-login-circle-line me-2 d-inline-block text-primary align-middle fs-14"></i>Signup
                      Your Account
                    </h5>
                    <p className="op-8 fs-14">
                      Suspendisse tempor ultricies mi, vitae rhoncus nibh faucibus pretium. Duis maximus, elit
                    </p>
                    <Link className="mx-1 text-primary fw-medium" href="#!" scroll={false}>
                      Register Now<i className="ri-arrow-right-s-line align-middle transform-arrow lh-1"></i>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="col-12">
                <div className="mb-4 landing-steps">
                  <span className="avatar avatar-lg border border-dashed text-primary fw-medium">02</span>
                </div>
                <Card className="custom-card landing-card text-center">
                  <div className="top-left"></div>
                  <div className="top-right"></div>
                  <div className="bottom-left"></div>
                  <div className="bottom-right"></div>
                  <Card.Body className=" rounded">
                    <h5 className="fw-medium">
                      <i className="ri-edit-2-line me-2 d-inline-block text-primary align-middle fs-14"></i>Update
                      Profile
                    </h5>
                    <p className="op-8 fs-14">
                      Suspendisse tempor ultricies mi, vitae rhoncus nibh faucibus pretium. Duis maximus, elit
                    </p>
                    <Link className="mx-1 text-primary fw-medium" href="#!" scroll={false}>
                      Update Profile<i className="ri-arrow-right-s-line align-middle transform-arrow lh-1"></i>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="col-12">
                <div className="mb-4">
                  <span className="avatar avatar-lg border border-dashed text-primary fw-medium">03</span>
                </div>
                <Card className="custom-card landing-card text-center">
                  <div className="top-left"></div>
                  <div className="top-right"></div>
                  <div className="bottom-left"></div>
                  <div className="bottom-right"></div>
                  <Card.Body className=" rounded">
                    <h5 className="fw-medium">
                      <i className="ri-file-list-3-line me-2 d-inline-block text-primary align-middle fs-14"></i>Apply
                      Job
                    </h5>
                    <p className="op-8 fs-14">
                      Suspendisse tempor ultricies mi, vitae rhoncus nibh faucibus pretium. Duis maximus, elit
                    </p>
                    <Link className="mx-1 text-primary fw-medium" href="#!" scroll={false}>
                      Apply Now<i className="ri-arrow-right-s-line align-middle transform-arrow lh-1"></i>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </section>
        <section className="section bg-banner-2 text-fixed-white py-0">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7 col-xl-8 text-center">
                <div className="my-4">
                  <h2 className="fw-medium mb-3 text-fixed-white">
                    Finding a Career oppurtunity ? Just{" "}
                    <Link href="#!" scroll={false} className="text-warning">
                      {" "}
                      <u>Signup</u>{" "}
                    </Link>{" "}
                    Now.
                  </h2>
                  <p className="mb-4 fs-15 op-8 fw-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse velit erat, eleifend nec turpis
                    venenatis, molestie porta urna. Vivamus eu est vel justo eleifend pretium id
                  </p>
                  <Link href="#!" scroll={false} className="btn btn-warning btn-lg">
                    <i className="ri-login-box-line me-2 align-middle d-inline-block"></i> Sign Up for free
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="features">
          <div className="container">
            <div className="row justify-content-center text-center mb-5">
              <Col xl={6}>
                <p className="fs-12 fw-medium mb-1">
                  <span className="landing-section-heading text-success">FIND JOBS</span>
                </p>
                <h3 className="fw-medium mb-2">Featured Jobs</h3>
                <span className="text-muted fs-15 fw-normal d-block">
                  Nam posuere tellus ut consequat rutrum. Sed ac leo est. Proin quis arcu lorem
                </span>
              </Col>
            </div>
            <Row className="mb-3">
              {Featuredjobs.map(idx => (
                <Col lg={4} className="" key={Math.random()}>
                  <Card className="custom-card featured-jobs shadow-none">
                    <div className="top-left"></div>
                    <div className="top-right"></div>
                    <div className="bottom-left"></div>
                    <div className="bottom-right"></div>
                    <Card.Body>
                      <div className="d-sm-flex mb-3">
                        <div className="">
                          <h6 className="fw-medium mb-1 d-flex align-items-center fs-18">
                            <Link href="#!" scroll={false} className="text-primary">
                              <i className={`ri-${idx.icon}-line`}></i> {idx.heading}
                            </Link>
                          </h6>
                          <div className="popular-tags d-flex gap-2 op-8">
                            <Link href="#!" scroll={false} className="fs-10 rounded-pill">
                              <i className="bi bi-mortarboard me-1"></i> Graduate
                            </Link>
                            <Link href="#!" scroll={false} className="fs-10 rounded-pill">
                              <i className="bi bi-clock me-1"></i> Min - {idx.year}Years
                            </Link>
                          </div>
                        </div>
                        <Dropdown className="ms-auto">
                          <Dropdown.Toggle
                            as="a"
                            href="#!"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            className="btn btn-primary-light btn-icon btn-sm bg-transparent no-caret"
                          >
                            <i className="ri-more-2-fill"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul" className="dropdown-menu">
                            <Dropdown.Item as="li">
                              <Link className="" href="#!" scroll={false}>
                                <i className="ri-share-line me-2 align-middle d-inline-block"></i>Share
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item as="li">
                              <Link className="" href="#!" scroll={false}>
                                <i className="ri-file-list-line me-2 align-middle d-inline-block"></i>View Details
                              </Link>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div className="d-sm-flex pt-2 align-items-center">
                        <span className="avatar avatar-sm bg-primary-transparent avatar-rounded">
                          <Image src={idx.src1} alt="" width={32} height={32} />
                        </span>
                        <div className="ms-2">
                          <p className="fw-medium mb-0 d-flex align-items-center fs-14 op-8">
                            <Link href="#!" scroll={false}>
                              {idx.heading1}
                            </Link>
                          </p>
                          <p className="fw-medium mb-0 d-flex align-items-center fs-11 op-5">
                            <span>
                              <i className="ri-map-pin-line me-1 d-inline-block align-middle"></i>Hyderabad
                            </span>
                            <span className="ps-2">
                              <i className="ri-briefcase-3-line me-1 d-inline-block align-middle"></i>
                              {idx.opening} Openings
                            </span>
                          </p>
                        </div>
                      </div>
                    </Card.Body>
                    <div className="card-footer border-top border-block-start-dashed">
                      <div className="d-flex justify-content-between text-center gap-3 align-items-center">
                        Apply Now
                        <Link
                          href="#!"
                          scroll={false}
                          className="btn btn-primary fw-medium btn-icon btn-sm rounded-circle text-center"
                        >
                          <i className="ri-arrow-right-line transform-arrow"></i>
                        </Link>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
            <div className="text-center">
              <Link href="#!" scroll={false} className="btn btn-lg btn-wave btn-primary-light btn-w-lg">
                View All Jobs <i className="ri-arrow-right-circle-line"></i>
              </Link>
            </div>
          </div>
        </section>
        <section className="section landing-Features">
          <div className="container">
            <div className="row justify-content-center text-center mb-5 text-fixed-white">
              <Col xl={6}>
                <h3 className="fw-medium mb-2 text-fixed-white">Which type of job do you prefer?</h3>
                <span className="fs-15 fw-normal d-block op-8">
                  Nam posuere tellus ut consequat rutrum. Sed ac leo est. Proin quis arcu lorem
                </span>
              </Col>
            </div>
            <Row>
              <Col xl={3} md={6} sm={6} className="">
                <div className="feature-style landing-card text-center mb-2 mb-xl-0">
                  <div className="p-2">
                    <Link href="#!" scroll={false} className="stretched-link"></Link>
                    <div className="d-flex gap-2 align-items-center">
                      <div className="feature-style-icon bg-primary-transparent text-warning">
                        <i className="ri-home-8-line fs-4"></i>
                      </div>
                      <div className="text-start">
                        <h5 className="mb-1 fw-medium text-default">Work From Home</h5>
                        <Link className="text-primary fs-14 fw-medium" href="#!" scroll={false}>
                          Find Jobs Now<i className="ri-arrow-right-s-line align-middle transform-arrow lh-1"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={3} md={6} sm={6} className="">
                <div className="feature-style landing-card text-center mb-2 mb-xl-0">
                  <div className="p-2">
                    <Link href="#!" scroll={false} className="stretched-link"></Link>
                    <div className="d-flex gap-2 align-items-center">
                      <div className="feature-style-icon bg-primary-transparent text-warning">
                        <i className="ri-shake-hands-line fs-4"></i>
                      </div>
                      <div className="text-start">
                        <h5 className="mb-1 fw-medium text-default">Intern</h5>
                        <Link className="text-primary fs-14 fw-medium" href="#!" scroll={false}>
                          Find Jobs Now
                          <i className="ri-arrow-right-s-line align-middle transform-arrow lh-1"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={3} md={6} sm={6} className="">
                <div className="feature-style landing-card text-center mb-2 mb-xl-0">
                  <div className="p-2">
                    <Link href="#!" scroll={false} className="stretched-link"></Link>
                    <div className="d-flex gap-2 align-items-center">
                      <div className="feature-style-icon bg-primary-transparent text-warning">
                        <i className="ri-star-half-line fs-4"></i>
                      </div>
                      <div className="text-start">
                        <h5 className="mb-1 fw-medium text-default">Part Time</h5>
                        <Link className="text-primary fs-14 fw-medium" href="#!" scroll={false}>
                          Find Jobs Now<i className="ri-arrow-right-s-line align-middle transform-arrow lh-1"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={3} md={6} sm={6} className="">
                <div className="feature-style landing-card text-center">
                  <div className="p-2">
                    <Link href="#!" scroll={false} className="stretched-link"></Link>
                    <div className="d-flex gap-2 align-items-center">
                      <div className="feature-style-icon bg-primary-transparent text-warning">
                        <i className="ri-time-line fs-4"></i>
                      </div>
                      <div className="text-start">
                        <h5 className="mb-1 fw-medium text-default">Full Time</h5>
                        <Link className="text-primary fs-14 fw-medium" href="#!" scroll={false}>
                          Find Jobs Now<i className="ri-arrow-right-s-line align-middle transform-arrow lh-1"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
        <section className="section" id="blog">
          <div className="container">
            <div className="row mb-5 justify-content-center text-center">
              <p className="fs-12 fw-medium mb-1">
                <span className="landing-section-heading text-success">OUR BLOG</span>{" "}
              </p>
              <h3 className="fw-medium mb-2">Latest Articles </h3>
              <Col xl={9}>
                <span className="b-block fw-normal fs-15 text-muted">
                  Nam posuere tellus ut consequat rutrum. Sed ac leo est. Proin quis arcu lorem
                </span>
              </Col>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <Card className="custom-card border shadow-none">
                  <div className="top-left"></div>
                  <div className="top-right"></div>
                  <div className="bottom-left"></div>
                  <div className="bottom-right"></div>
                  <Link href="#!" scroll={false}>
                    <Image src="/assets/images/media/jobs-landing/blog/1.jpg" className="card-img-top" alt="..." width={300} height={200} />
                  </Link>
                  <Card.Body className="">
                    <span className="badge bg-secondary mb-2">Career</span>
                    <h5 className="fw-medium mb-1">How to build your Career?</h5>
                    <p className="card-text mb-2">
                      Start by understanding your interests, strengths, and values. What are you passionate about?
                    </p>
                    <div className="fw-medium mb-3 d-flex align-items-center fs-11 op-5">
                      <span>
                        <i className="ri-calendar-line me-1 d-inline-block align-middle"></i>12 January, 2023
                      </span>
                      <span className="ps-2">
                        <i className="ri-time-line me-1 d-inline-block align-middle"></i>1 Day ago
                      </span>
                    </div>
                    <Link
                      className="text-primary fw-medium d-flex align-items-center justify-content-end"
                      href="#!"
                      scroll={false}
                    >
                      Read More<i className="ri-arrow-right-s-line align-middle transform-arrow lh-1"></i>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
              <div className="col">
                <Card className="custom-card border shadow-none">
                  <div className="top-left"></div>
                  <div className="top-right"></div>
                  <div className="bottom-left"></div>
                  <div className="bottom-right"></div>
                  <Link href="#!" scroll={false}>
                    <Image src="/assets/images/media/jobs-landing/blog/2.jpg" className="card-img-top" alt="..." width={300} height={200} />
                  </Link>
                  <Card.Body className="">
                    <span className="badge bg-danger mb-2">Employment</span>
                    <h5 className="fw-medium mb-1">Exploring Avenues of Occupational Pursuit</h5>
                    <p className="card-text mb-2">
                      Diverse realms of professional engagement. Discover pathways, strategies, and insights to
                      navigate.{" "}
                    </p>
                    <div className="fw-medium mb-3 d-flex align-items-center fs-11 op-5">
                      <span>
                        <i className="ri-calendar-line me-1 d-inline-block align-middle"></i>12 January, 2023
                      </span>
                      <span className="ps-2">
                        <i className="ri-time-line me-1 d-inline-block align-middle"></i>1 Day ago
                      </span>
                    </div>
                    <Link
                      className="text-primary fw-medium d-flex align-items-center justify-content-end"
                      href="#!"
                      scroll={false}
                    >
                      Read More<i className="ri-arrow-right-s-line align-middle transform-arrow lh-1"></i>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
              <div className="col">
                <Card className="custom-card border shadow-none">
                  <div className="top-left"></div>
                  <div className="top-right"></div>
                  <div className="bottom-left"></div>
                  <div className="bottom-right"></div>
                  <Link href="#!" scroll={false}>
                    <Image src="/assets/images/media/jobs-landing/blog/3.jpg" className="card-img-top" alt="..." width={300} height={200} />
                  </Link>
                  <Card.Body className="">
                    <span className="badge bg-warning mb-2">Skill Development</span>
                    <h5 className="fw-medium mb-1">Empower Your Journey</h5>
                    <p className="card-text mb-2">
                      Transformative impact of honing your abilities, staying relevant in your field, and unlocking
                      doors to new opportunities.
                    </p>
                    <div className="fw-medium mb-3 d-flex align-items-center fs-11 op-5">
                      <span>
                        <i className="ri-calendar-line me-1 d-inline-block align-middle"></i>12 January, 2023
                      </span>
                      <span className="ps-2">
                        <i className="ri-time-line me-1 d-inline-block align-middle"></i>1 Day ago
                      </span>
                    </div>
                    <Link
                      className="text-primary fw-medium d-flex align-items-center justify-content-end"
                      href="#!"
                      scroll={false}
                    >
                      Read More<i className="ri-arrow-right-s-line align-middle transform-arrow lh-1"></i>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="section bg-banner-2 text-fixed-white" id="employers">
          <div className="container">
            <Row>
              <Col lg={9}>
                <h2 className="fw-medium text-fixed-white">Let's help you find the perfect job!</h2>
                <span className="d-block fw-normal fs-15 op-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque quis leo ut convallis.
                  Integer vulputate nunc quis diam luctus, eu rutrum odio placerat.
                </span>
              </Col>
              <div className="col-lg-3 text-end my-auto">
                <Link href="#!" scroll={false} className="btn btn-lg btn-danger">
                  Upload Your Resume
                </Link>
              </div>
            </Row>
          </div>
        </section>
        <section className="section section-bg job-faqs-section">
          <div className="container text-center">
            <div className="row mb-5 justify-content-center text-center">
              <p className="fs-12 fw-medium mb-1">
                <span className="landing-section-heading text-success">FAQ'S</span>
              </p>
              <h3 className="fw-medium mb-2">Frequently Asked Questions?</h3>
              <Col xl={9}>
                <span className="b-block fw-normal fs-15 text-muted">
                  Nam posuere tellus ut consequat rutrum. Sed ac leo est. Proin quis arcu lorem
                </span>
              </Col>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-xl-4">
                <i className="ri-question-line op-2 faq-icon align-middle lh-1"></i>
              </div>
              <div className="col-xl-8 text-start">
                <Accordion
                  className="accordion-customicon1 accordion-primary accordions-items-seperate"
                  id="accordionFAQ1"
                  defaultActiveKey=""
                >
                  <Accordion.Item className="" eventKey="1">
                    <Accordion.Header className="" id="headingcustomicon1One">
                      How do I integrate the template into my project?
                    </Accordion.Header>
                    <div
                      id="collapsecustomicon1One"
                      className="accordion-collapse "
                      aria-labelledby="headingcustomicon1One"
                      data-bs-parent="#accordionFAQ1"
                    >
                      <Accordion.Body className="">
                        Integration <strong>instructions </strong> are usually provided in the template's documentation.
                        Follow the step-by-step guide to include the necessary <code>.css</code> files, scripts, and
                        html files in your project.You can manually integrate the admin template by downloading the
                        template files and adding them to your project directory. Follow the step-by-step instructions
                        provided in the documentation for a seamless integration process.
                      </Accordion.Body>
                    </div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className="" id="headingcustomicon1Two">
                      Can I customize the appearance of the admin template?
                    </Accordion.Header>
                    <div
                      id="collapsecustomicon1Two"
                      className="accordion-collapse"
                      aria-labelledby="headingcustomicon1Two"
                      data-bs-parent="#accordionFAQ1"
                    >
                      <Accordion.Body>
                        Yes, most admin templates are designed to be customizable. You can modify colors, fonts,
                        layouts, and styles according to your project's branding guidelines. Refer to the documentation
                        for customization options.
                      </Accordion.Body>
                    </div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header className="" id="headingcustomicon1Three">
                      How frequently is the template updated?
                    </Accordion.Header>
                    <div
                      id="collapsecustomicon1Three"
                      className="accordion-collapse"
                      aria-labelledby="headingcustomicon1Three"
                      data-bs-parent="#accordionFAQ1"
                    >
                      <Accordion.Body>
                        Check the template provider's website or documentation for information on updates. Regular
                        updates may include bug fixes, new features, or compatibility improvements.
                      </Accordion.Body>
                    </div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header className="" id="headingcustomicon1Four">
                      Can I upgrade or downgrade my subscription plan?
                    </Accordion.Header>
                    <div
                      id="collapsecustomicon1Four"
                      className="accordion-collapse"
                      aria-labelledby="headingcustomicon1Four"
                      data-bs-parent="#accordionFAQ1"
                    >
                      <Accordion.Body>
                        Yes, you can upgrade or downgrade your subscription plan at any time. Visit your account
                        settings or contact our support team to make changes to your subscription level.
                      </Accordion.Body>
                    </div>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </section>
        <section className="section landing-testimonials">
          <div className="container text-center">
            <div className="row mb-5 justify-content-center text-center">
              <p className="fs-12 fw-medium mb-1">
                <span className="landing-section-heading text-success">TESTIMONIALS</span>{" "}
              </p>
              <h3 className="fw-medium mb-2">What Our Clients Say About Us</h3>
              <Col xl={9}>
                <span className="b-block fw-normal fs-15 text-muted">
                  Here are reviews shared by our satisfied customers. Discover what they have to say.
                </span>
              </Col>
            </div>
            <div className="swiper pagination-dynamic text-start">
              <Swiper
                breakpoints={breakpoints}
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={false}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ dynamicBullets: true, clickable: true }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Card className="custom-card featured-card-1 border shadow-none text-center">
                    <div className="top-left"></div>
                    <div className="top-right"></div>
                    <div className="bottom-left"></div>
                    <div className="bottom-right"></div>
                    <Card.Body className=" p-4">
                      <span className="review-quote">
                        <i className="ri-double-quotes-r"></i>
                      </span>
                      <span className="avatar avatar-lg avatar-rounded mb-2">
                        <Image src="/assets/images/faces/11.jpg" alt="" width={64} height={64} />
                      </span>
                      <div>
                        <p className="mb-0 fw-medium fs-16 text-primary">James Lucas</p>
                        <p className="fs-10 fw-medium text-muted mb-1">MANAGER</p>
                        <div className="mb-3 d-flex justify-content-center">
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-line align-middle lh-1 text-warning fs-14"></i>
                        </div>
                      </div>
                      <span className="fs-14">
                        - Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est.
                        Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labor
                      </span>
                      <div className="text-end fs-13 op-6">-- 5 days ago</div>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card className="custom-card featured-card-1 border shadow-none text-center">
                    <div className="top-left"></div>
                    <div className="top-right"></div>
                    <div className="bottom-left"></div>
                    <div className="bottom-right"></div>
                    <Card.Body className=" p-4">
                      <span className="review-quote">
                        <i className="ri-double-quotes-r"></i>
                      </span>
                      <span className="avatar avatar-lg avatar-rounded mb-2">
                        <Image src="/assets/images/faces/1.jpg" alt="" width={64} height={64} />
                      </span>
                      <div>
                        <p className="mb-0 fw-medium fs-16 text-primary">Aldous Cason</p>
                        <p className="fs-10 fw-medium text-muted mb-1">MANAGER</p>
                        <div className="mb-3 d-flex justify-content-center">
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-line align-middle lh-1 text-warning fs-14"></i>
                        </div>
                      </div>
                      <span className="fs-14">
                        - Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est.
                        Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labor
                      </span>
                      <div className="text-end fs-13 op-6">-- 5 days ago</div>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card className="custom-card featured-card-1 border shadow-none text-center">
                    <div className="top-left"></div>
                    <div className="top-right"></div>
                    <div className="bottom-left"></div>
                    <div className="bottom-right"></div>
                    <Card.Body className=" p-4">
                      <span className="review-quote">
                        <i className="ri-double-quotes-r"></i>
                      </span>
                      <span className="avatar avatar-lg avatar-rounded mb-2">
                        <Image src="/assets/images/faces/14.jpg" alt="" width={64} height={64} />
                      </span>
                      <div>
                        <p className="mb-0 fw-medium fs-16 text-primary">Kiara Advain</p>
                        <p className="fs-10 fw-medium text-muted mb-1">CEO</p>
                        <div className="mb-3 d-flex justify-content-center">
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-line align-middle lh-1 text-warning fs-14"></i>
                        </div>
                      </div>
                      <span className="fs-14">
                        - Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est.
                        Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labor
                      </span>
                      <div className="text-end fs-13 op-6">-- 5 days ago</div>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card className="custom-card featured-card-1 border shadow-none text-center">
                    <div className="top-left"></div>
                    <div className="top-right"></div>
                    <div className="bottom-left"></div>
                    <div className="bottom-right"></div>
                    <Card.Body className=" p-4">
                      <span className="review-quote">
                        <i className="ri-double-quotes-r"></i>
                      </span>
                      <span className="avatar avatar-lg avatar-rounded mb-2">
                        <Image src="/assets/images/faces/8.jpg" alt="" width={64} height={64} />
                      </span>
                      <div>
                        <p className="mb-0 fw-medium fs-16 text-primary">Jhonson Smith</p>
                        <p className="fs-10 fw-medium text-muted mb-1">CHIEF EXECUTIVE</p>
                        <div className="mb-3 d-flex justify-content-center">
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-line align-middle lh-1 text-warning fs-14"></i>
                        </div>
                      </div>
                      <span className="fs-14">
                        - Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est.
                        Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labor
                      </span>
                      <div className="text-end fs-13 op-6">-- 5 days ago</div>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card className="custom-card featured-card-1 border shadow-none text-center">
                    <div className="top-left"></div>
                    <div className="top-right"></div>
                    <div className="bottom-left"></div>
                    <div className="bottom-right"></div>
                    <Card.Body className=" p-4">
                      <span className="review-quote">
                        <i className="ri-double-quotes-r"></i>
                      </span>
                      <span className="avatar avatar-lg avatar-rounded mb-2">
                        <Image src="/assets/images/faces/4.jpg" alt="" width={64} height={64} />
                      </span>
                      <div>
                        <p className="mb-0 fw-medium fs-16 text-primary">Nitheri Morgan</p>
                        <p className="fs-10 fw-medium text-muted mb-1">HR MANAGER</p>
                        <div className="mb-3 d-flex justify-content-center">
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-line align-middle lh-1 text-warning fs-14"></i>
                        </div>
                      </div>
                      <span className="fs-14">
                        - Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est.
                        Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labor
                      </span>
                      <div className="text-end fs-13 op-6">-- 5 days ago</div>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card className="custom-card featured-card-1 border shadow-none text-center">
                    <div className="top-left"></div>
                    <div className="top-right"></div>
                    <div className="bottom-left"></div>
                    <div className="bottom-right"></div>
                    <Card.Body className=" p-4">
                      <span className="review-quote">
                        <i className="ri-double-quotes-r"></i>
                      </span>
                      <span className="avatar avatar-lg avatar-rounded mb-2">
                        <Image src="/assets/images/faces/9.jpg" alt="" width={64} height={64} />
                      </span>
                      <div>
                        <p className="mb-0 fw-medium fs-16 text-primary">Natalie Miller</p>
                        <p className="fs-10 fw-medium text-muted mb-1">GM BRAND</p>
                        <div className="mb-3 d-flex justify-content-center">
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-line align-middle lh-1 text-warning fs-14"></i>
                        </div>
                      </div>
                      <span className="fs-14">
                        - Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est.
                        Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labor
                      </span>
                      <div className="text-end fs-13 op-6">-- 5 days ago</div>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card className="custom-card featured-card-1 border shadow-none text-center">
                    <div className="top-left"></div>
                    <div className="top-right"></div>
                    <div className="bottom-left"></div>
                    <div className="bottom-right"></div>
                    <Card.Body className=" p-4">
                      <span className="review-quote">
                        <i className="ri-double-quotes-r"></i>
                      </span>
                      <span className="avatar avatar-lg avatar-rounded mb-2">
                        <Image src="/assets/images/faces/10.jpg" alt="" width={64} height={64} />
                      </span>
                      <div>
                        <p className="mb-0 fw-medium fs-16 text-primary">Dolph MR</p>
                        <p className="fs-10 fw-medium text-muted mb-1">CHEIF ENGINEER</p>
                        <div className="mb-3 d-flex justify-content-center">
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-line align-middle lh-1 text-warning fs-14"></i>
                        </div>
                      </div>
                      <span className="fs-14">
                        - Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est.
                        Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labor
                      </span>
                      <div className="text-end fs-13 op-6">-- 5 days ago</div>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card className="custom-card featured-card-1 border shadow-none text-center">
                    <div className="top-left"></div>
                    <div className="top-right"></div>
                    <div className="bottom-left"></div>
                    <div className="bottom-right"></div>
                    <Card.Body className=" p-4">
                      <span className="review-quote">
                        <i className="ri-double-quotes-r"></i>
                      </span>
                      <span className="avatar avatar-lg avatar-rounded mb-2">
                        <Image src="/assets/images/faces/13.jpg" alt="" width={64} height={64} />
                      </span>
                      <div>
                        <p className="mb-0 fw-medium fs-16 text-primary">Evelyn Anna</p>
                        <p className="fs-10 fw-medium text-muted mb-1">CEO WEFTY</p>
                        <div className="mb-3 d-flex justify-content-center">
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-line align-middle lh-1 text-warning fs-14"></i>
                        </div>
                      </div>
                      <span className="fs-14">
                        - Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est.
                        Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labor
                      </span>
                      <div className="text-end fs-13 op-6">-- 5 days ago</div>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card className="custom-card featured-card-1 border shadow-none text-center">
                    <div className="top-left"></div>
                    <div className="top-right"></div>
                    <div className="bottom-left"></div>
                    <div className="bottom-right"></div>
                    <Card.Body className=" p-4">
                      <span className="review-quote">
                        <i className="ri-double-quotes-r"></i>
                      </span>
                      <span className="avatar avatar-lg avatar-rounded mb-2">
                        <Image src="/assets/images/faces/6.jpg" alt="" width={64} height={64} />
                      </span>
                      <div>
                        <p className="mb-0 fw-medium fs-16 text-primary">Aldous Cason</p>
                        <p className="fs-10 fw-medium text-muted mb-1">MANAGER DIRECTOR</p>
                        <div className="mb-3 d-flex justify-content-center">
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-fill align-middle lh-1 text-warning fs-14"></i>
                          <i className="ri-star-s-line align-middle lh-1 text-warning fs-14"></i>
                        </div>
                      </div>
                      <span className="fs-14">
                        - Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est.
                        Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labor
                      </span>
                      <div className="text-end fs-13 op-6">-- 5 days ago</div>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
              </Swiper>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>
        <section className="section bg-banner" id="career-advice">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="mb-4">
                <h4 className="fw-medium mb-2 text-fixed-white">&#128073; Hurry Up! Job is Waiting For You</h4>
              </div>
              <span className="fs-14 fw-normal op-8 d-block mb-4 px-lg-0 px-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque quis leo ut convallis.
                Integer vulputate.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque quis leo
                ut convallis. Integer vulputate.
              </span>
              <Link href="#!" scroll={false} className="btn btn-lg btn-warning btn-w-lg m-1">
                <i className="bi bi-search me-1"></i> Search Jobs
              </Link>
            </div>
          </div>
        </section>
        <div className="landing-main-footer py-4">
          <div className="container">
            <div className="text-center gap-2 align-items-center justify-content">
              <p className="fw-medium mb-3">
                <Link href="/dashboard/gaming">
                  <Image src="/assets/images/brand-logos/desktop-dark.png" alt="" className="landing-footer-logo" width={150} height={50} />
                </Link>
              </p>
              <div className="mb-4">
                <span className="text-fixed-white op-7 fs-14">
                  {" "}
                  © Copyright <span id="year"></span>{" "}
                  <Link href="#!" scroll={false} className="text-primary fs-15 fw-medium">
                    SciFi
                  </Link>
                  .
                </span>
              </div>
              <div>
                <ul className="list-unstyled fw-normal landing-footer-list mb-5">
                  <li>
                    <Link href="#!" scroll={false} className="text-fixed-white op-6 text-decoration-underline">
                      Terms Of Service
                    </Link>
                  </li>
                  <li>
                    <div className="vr"></div>
                  </li>
                  <li>
                    <Link href="#!" scroll={false} className="text-fixed-white op-6 text-decoration-underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <div className="vr"></div>
                  </li>
                  <li>
                    <Link href="#!" scroll={false} className="text-fixed-white op-6 text-decoration-underline">
                      Legal
                    </Link>
                  </li>
                  <li>
                    <div className="vr"></div>
                  </li>
                  <li>
                    <Link href="#!" scroll={false} className="text-fixed-white op-6 text-decoration-underline">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <div className="vr"></div>
                  </li>
                  <li>
                    <Link href="#!" scroll={false} className="text-fixed-white op-6 text-decoration-underline">
                      Report Abuse
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <div className="d-flex gap-3  justify-content-center fw-normal landing-footer-list mb-0">
                  <Link
                    aria-label="anchor"
                    href="#!"
                    scroll={false}
                    className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light"
                  >
                    <i className="ri-twitter-x-line align-middle"></i>
                  </Link>
                  <Link
                    aria-label="anchor"
                    href="#!"
                    scroll={false}
                    className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light"
                  >
                    <i className="ri-facebook-line align-middle"></i>
                  </Link>
                  <Link
                    aria-label="anchor"
                    href="#!"
                    scroll={false}
                    className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light"
                  >
                    <i className="ri-instagram-line align-middle"></i>
                  </Link>
                  <Link
                    aria-label="anchor"
                    href="#!"
                    scroll={false}
                    className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light"
                  >
                    <i className="ri-linkedin-line align-middle"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  local_variable: state.local_variable
});

export default connect(mapStateToProps, { ThemeChanger })(Joblanding);
