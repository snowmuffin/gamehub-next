import Link from "next/link";
import React, { Children, Component, Fragment, useState } from "react";
const Select = dynamic(() => import('react-select'), { ssr: false });
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from '@mui/material/StepLabel';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Card, Col, Form } from "react-bootstrap";
import dynamic from "next/dynamic";

const steps1 = ['Personal Information', 'Select Service User', 'Appointment Details', 'Payment', 'Confirmation'];

export default function HorizontalLinearStepper() {

const Countrydata = [
    {value:"India", label:"India"},
    {value:"India", label:"India"},
    {value:"India", label:"India"},
    {value:"India", label:"India"},
    {value:"India", label:"India"},
]

const Selectdata = [
    {value:"India", label:"India"},
    {value:"USA", label:"USA"},
    {value:"Australia", label:"Australia"},
]

const Maledata = [
    {value:"Male", label:"Male"},
    {value:"Female", label:"Female"},
]

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());

    const isStepOptional = (step: number) => {
        return step === 1;
    };

    const isStepSkipped = (step: number) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps1.map((label, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: { optional?: React.ReactNode } = {};
                    if (isStepOptional(index)) {
                        // labelProps.optional = (
                        //   <Typography variant="caption">Optional</Typography>
                        // );
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={index} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

            {activeStep === 0 && ( // Render the following HTML only on the first step
                <div className="wizard-tab wizard-step">
                    <div className="row justify-content-center">
                        <div className="col-xl-12">
                            <div className="register-page wizard-content container">
                                <h6 className="mb-3">Registration :</h6>
                                <div className="row gy-3">
                                    <div className="col-xl-6">
                                        <label htmlFor="Customer" className="form-label">First Name</label>
                                        <input type="text" className="form-control " id="Customer"
                                            placeholder="Enter First Name" />
                                    </div>
                                    <div className="col-xl-6">
                                        <label htmlFor="last-name" className="form-label">Last Name</label>
                                        <input type="text" className="form-control " id="last-name"
                                            placeholder="Enter Last Name" />
                                    </div>
                                    <div className="col-xl-6">
                                        <label htmlFor="Email" className="form-label">Email Address</label>
                                        <input type="email" className="form-control " id="Email"
                                            placeholder="Enter Email Adress" />
                                    </div>
                                    <div className="col-xl-6">
                                        <label htmlFor="Ph-Number" className="form-label">Phone Number</label>
                                        <div className="input-group">
                                            <span className="input-group-text"
                                                id="inputGroup-sizing-default">+99</span>
                                            <input type="text" className="form-control " id="Ph-Number"
                                                placeholder="Enter Phone Number"
                                                aria-label="Sizing example input"
                                                aria-describedby="inputGroup-sizing-default" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <label htmlFor="dob" className="form-label">Date of Birth</label>
                                        <div className="input-group">
                                            <div className="input-group-text text-muted">
                                                <i className="ri-calendar-line"></i>
                                            </div> <input type="text"
                                                className="form-control flatpickr-input active"
                                                id="date" placeholder="Select DOB"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <label htmlFor="gender" className="form-label">Select Gender
                                            :</label>
                                            <Select name="colors" options={Maledata} className="basic-multi-select"
                                menuPlacement='auto' classNamePrefix="Select2" placeholder="Male"
                            />
                                    </div>
                                    <div className="col-lg-6">
                                        <label htmlFor="country"
                                            className="form-label">Country</label>
                                <Select name="colors" options={Countrydata} className="basic-multi-select"
                                menuPlacement='auto' classNamePrefix="Select2" placeholder="India"
                            />
                                    </div>
                                    <div className="col-xl-6">
                                        <label htmlFor="select-city" className="form-label">Select City
                                            :</label>
                                            <Select name="colors" options={Selectdata} className="basic-multi-select"
                                menuPlacement='auto' classNamePrefix="Select2" placeholder="India"
                            />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <div className="login-page d-none">
                                <h6 className="mb-3">Sign In :</h6>
                                <div className="row justify-content-center gy-4">
                                    <div className="col-xl-12">
                                        <label htmlFor="email-adress" className="form-label">Email
                                            Address</label>
                                        <input type="text" className="form-control " id="email-adress"
                                            placeholder="Enter Email Adress" />
                                    </div>
                                    <div className="col-xl-12">
                                        <label htmlFor="password" className="form-label">Enter
                                            Password</label>
                                        <input type="text" className="form-control " id="password"
                                            placeholder="Enter Password" />
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="d-grid">
                                            <a href="#!"
                                                className="btn btn-primary px-4">Login</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {activeStep === 1 && (
                <div className=" wizard-step wizard-tab active">
                    <div className="row gy-4 wizard-content container">
                        <div className="col-xl-3">
                            <div className="col" >
                                <div className="form-check d-flex align-items-center gap-3 p-2 border">
                                    <div>
                                        <span className="avatar avatar-lg bg-primary-transparent">
                                            <i className="bi bi-hospital fs-5"></i>
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <label className="form-check-label d-block fw-medium fs-15" htmlFor="flexCheckChecked">Cardio Check</label>
                                        <span className="fs-12 text-muted">$249</span>
                                    </div>
                                    <div>
                                        <input className="form-check-input form-checked-primary rounded-circle" type="checkbox" defaultValue="" id="flexCheckChecked" defaultChecked />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="col">
                                <div className="form-check d-flex align-items-center gap-3 p-2 border">
                                    <div>
                                        <span className="avatar avatar-lg bg-secondary-transparent">
                                            <i className="bi bi-hospital fs-5"></i>
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <label className="form-check-label d-block fw-medium fs-15" htmlFor="flexCheckChecked1">Ortho Consult</label>
                                        <span className="fs-12 text-muted">$120</span>
                                    </div>
                                    <div>
                                        <input className="form-check-input form-checked-secondary rounded-circle" type="checkbox" defaultValue="" id="flexCheckChecked1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="col">
                                <div className="form-check d-flex align-items-center gap-3 p-2 border">
                                    <div>
                                        <span className="avatar avatar-lg bg-success-transparent">
                                            <i className="bi bi-hospital fs-5"></i>
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <label className="form-check-label d-block fw-medium fs-15" htmlFor="flexCheckChecked2">Gyn Exam</label>
                                        <span className="fs-12 text-muted">$100</span>
                                    </div>
                                    <div>
                                        <input className="form-check-input form-checked-success rounded-circle" type="checkbox" defaultValue="" id="flexCheckChecked2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="col">
                                <div className="form-check d-flex align-items-center gap-3 p-2 border">
                                    <div>
                                        <span className="avatar avatar-lg bg-orange-transparent">
                                            <i className="bi bi-hospital fs-5"></i>
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <label className="form-check-label d-block fw-medium fs-15" htmlFor="flexCheckChecked3">Pediatric Vaccines</label>
                                        <span className="fs-12 text-muted">$50</span>
                                    </div>
                                    <div>
                                        <input className="form-check-input form-checked-orange rounded-circle" type="checkbox" defaultValue="" id="flexCheckChecked3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="col">
                                <div className="form-check d-flex align-items-center gap-3 p-2 border">
                                    <div>
                                        <span className="avatar avatar-lg bg-info-transparent">
                                            <i className="bi bi-hospital fs-5"></i>
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <label className="form-check-label d-block fw-medium fs-15" htmlFor="flexCheckChecked4">Dental Checkup</label>
                                        <span className="fs-12 text-muted">$80</span>
                                    </div>
                                    <div>
                                        <input className="form-check-input form-checked-info rounded-circle" type="checkbox" defaultValue="" id="flexCheckChecked4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="col">
                                <div className="form-check d-flex align-items-center gap-3 p-2 border">
                                    <div>
                                        <span className="avatar avatar-lg bg-warning-transparent">
                                            <i className="bi bi-hospital fs-5"></i>
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <label className="form-check-label d-block fw-medium fs-15" htmlFor="flexCheckChecked5">X-ray Imaging</label>
                                        <span className="fs-12 text-muted">$80</span>
                                    </div>
                                    <div>
                                        <input className="form-check-input form-checked-warning rounded-circle" type="checkbox" defaultValue="" id="flexCheckChecked5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="col">
                                <div className="form-check d-flex align-items-center gap-3 p-2 border">
                                    <div>
                                        <span className="avatar avatar-lg bg-danger-transparent">
                                            <i className="bi bi-hospital fs-5"></i>
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <label className="form-check-label d-block fw-medium fs-15" htmlFor="flexCheckChecked6">Blood Tests</label>
                                        <span className="fs-12 text-muted">Varies</span>
                                    </div>
                                    <div>
                                        <input className="form-check-input form-checked-danger rounded-circle" type="checkbox" defaultValue="" id="flexCheckChecked6" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="col">
                                <div className="form-check d-flex align-items-center gap-3 p-2 border">
                                    <div>
                                        <span className="avatar avatar-lg bg-dark-transparent">
                                            <i className="bi bi-hospital fs-5"></i>
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <label className="form-check-label d-block fw-medium fs-15" htmlFor="flexCheckChecked7">Eye Exam</label>
                                        <span className="fs-12 text-muted">$90</span>
                                    </div>
                                    <div>
                                        <input className="form-check-input form-checked-dark rounded-circle" type="checkbox" defaultValue="" id="flexCheckChecked7" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {activeStep === 2 && (
                <div className="wizard-step wizard-tab">
                    <div className="row justify-content-center summary-view wizard-content container">
                        <div className="col-xl-7">
                            <div className="border border-bottom-0 rounded-1 mb-3 ">
                                <div className="card-body p-0">
                                    <div className="table-responsive">
                                        <table className="table  text-nowrap">
                                            <thead>
                                                <tr className="bg-light">
                                                    <th scope="col">Appointment Details</th>
                                                    <th scope="col"></th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="w-25">
                                                        <span
                                                            className="d-block fw-semibold">Category</span>
                                                    </td>
                                                    <td className="w-10">:</td>
                                                    <td className="text-start  text-muted">
                                                        Neuro Clinic
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="w-25">
                                                        <span
                                                            className="d-block fw-semibold">Service</span>
                                                    </td>
                                                    <td className="w-10">:</td>
                                                    <td className="text-start text-muted">
                                                        Brain, spinal cord, nerves, and muscles.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="w-25">
                                                        <span className="d-block fw-semibold">Service
                                                            providers</span>
                                                    </td>
                                                    <td className="w-10">:</td>
                                                    <td className="text-start text-muted">
                                                        Amanto Sento
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="w-25">
                                                        <span
                                                            className="d-block fw-semibold">Branch</span>
                                                    </td>
                                                    <td className="w-10">:</td>
                                                    <td className="text-start text-muted">
                                                        India
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="w-25">
                                                        <span
                                                            className="d-block fw-semibold">Appointment
                                                            Date</span>
                                                    </td>
                                                    <td className="w-10">:</td>
                                                    <td className="text-start text-muted">
                                                        12-Sep-2023
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="w-25">
                                                        <span
                                                            className="d-block fw-semibold">Appointment
                                                            Time</span>
                                                    </td>
                                                    <td className="w-10">:</td>
                                                    <td className="text-start text-muted">
                                                        10:00 AM
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <div className="border border-bottom-0 rounded-1 mb-3 ">
                                <div className="card-body p-0">
                                    <div className="table-responsive">
                                        <table className="table text-nowrap">
                                            <thead>
                                                <tr className="bg-light">
                                                    <th scope="col">Persional Details</th>
                                                    <th scope="col"></th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="w-25">
                                                        <span className="d-block fw-semibold">First
                                                            Name</span>
                                                    </td>
                                                    <td className="w-10">:</td>
                                                    <td className="text-start  text-muted">
                                                        Martin Brown
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="w-25">
                                                        <span className="d-block fw-semibold">Last Name
                                                        </span>
                                                    </td>
                                                    <td className="w-10">:</td>
                                                    <td className="text-start text-muted">
                                                        Martin Brown
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="w-25">
                                                        <span className="d-block fw-semibold">Email
                                                            Address</span>
                                                    </td>
                                                    <td className="w-10">:</td>
                                                    <td className="text-start text-muted">
                                                        Martin12@gamil.com
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="w-25">
                                                        <span className="d-block fw-semibold">Phone
                                                            Number</span>
                                                    </td>
                                                    <td className="w-10">:</td>
                                                    <td className="text-start text-muted">
                                                        98765433221
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="w-25">
                                                        <span className="d-block fw-semibold">Country
                                                        </span>
                                                    </td>
                                                    <td className="w-10">:</td>
                                                    <td className="text-start text-muted">
                                                        India
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-xl-7">
                            <div className="border border-bottom-0 rounded-1 mb-3 ">
                                <div className="card-body p-0">
                                    <div className="table-responsive">
                                        <table className="table text-nowrap">
                                            <thead>
                                                <tr className="bg-light">
                                                    <th scope="col">Payment Details</th>
                                                    <th scope="col"></th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="w-25">
                                                        <span className="d-block fw-semibold">Mode of
                                                            Payment</span>
                                                    </td>
                                                    <td className="w-10">:</td>
                                                    <td className="text-start  text-muted">
                                                        Paypal
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-xl-7">
                            <div className="p-3 rounded-2 bg-light">
                                <label className="mb-1 fw-semibold">Source Information:</label>
                                <div className="d-flex align-items-center flex-wrap">
                                    <div className="form-check-sm me-2">
                                        <input className="form-check-input" type="radio" name="Radio"
                                            id="Radio-sm" />
                                        <label className="form-check-label ms-1" htmlFor="Radio-sm"> Google
                                        </label>
                                    </div>
                                    <div className="form-check-sm  me-2">
                                        <input className="form-check-input" type="radio" name="Radio"
                                            id="Radio-md" />
                                        <label className="form-check-label  ms-1" htmlFor="Radio-md">
                                            Advertisement </label>
                                    </div>
                                    <div className="form-check-sm  me-2">
                                        <input className="form-check-input" type="radio" name="Radio"
                                            id="Radio-s" />
                                        <label className="form-check-label  ms-1" htmlFor="Radio-s"> Other</label>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {activeStep === 3 && (
                <div className="wizard-step wizard-tab">
                    <div className="row wizard-content container">
                        <div className="col-xl-12">
                            <div>
                                <div className="fs-15 fw-medium d-sm-flex d-block align-items-center justify-content-between mb-3">
                                    <div>Payment Details :</div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="mb-3">
                                            <label className="form-label">Delivery Address</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Address" aria-label="address" aria-describedby="payment-address" value="1234 Elm Street,Anytown, USA,12345" />
                                                <button type="button" className="btn btn-info-light input-group-text" id="payment-address">Change</button>
                                            </div>
                                        </div>
                                        <div className="card custom-card border shadow-none mb-3">
                                            <Card.Header className="">
                                                <div className="card-title">
                                                    Payment Methods
                                                </div>
                                            </Card.Header>
                                            <Card.Body className="">
                                                <div className="btn-group mb-3 d-sm-flex d-block" role="group" aria-label="Basic radio toggle button group">
                                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" />
                                                    <label className="btn btn-outline-light text-default mt-sm-0 mt-1" htmlFor="btnradio1">C.O.D(Cash on delivery)</label>
                                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                                                    <label className="btn btn-outline-light text-default mt-sm-0 mt-1" htmlFor="btnradio2">UPI</label>
                                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio3" defaultChecked />
                                                    <label className="btn btn-outline-light text-default mt-sm-0 mt-1" htmlFor="btnradio3">Credit/Debit Card</label>
                                                </div>
                                                <div className="row gy-3">
                                                    <div className="col-xl-12">
                                                        <label htmlFor="payment-card-number" className="form-label">Card Number</label>
                                                        <input type="text" className="form-control" id="payment-card-number" placeholder="Card Number" defaultValue="1245 - 5447 - 8934 - XXXX" />
                                                    </div>
                                                    <div className="col-xl-12">
                                                        <label htmlFor="payment-card-name" className="form-label">Name On Card</label>
                                                        <input type="text" className="form-control" id="payment-card-name" placeholder="Name On Card" defaultValue="Toni Stark" />
                                                    </div>
                                                    <div className="col-xl-4">
                                                        <label htmlFor="payment-cardexpiry-date" className="form-label">Expiration Date</label>
                                                        <input type="text" className="form-control" id="payment-cardexpiry-date" placeholder="MM/YY" defaultValue="08/2024" />
                                                    </div>
                                                    <div className="col-xl-4">
                                                        <label htmlFor="payment-cvv" className="form-label">CVV</label>
                                                        <input type="text" className="form-control" id="payment-cvv" placeholder="XXX" defaultValue="341" />
                                                    </div>
                                                    <div className="col-xl-4">
                                                        <label htmlFor="payment-security" className="form-label">O.T.P</label>
                                                        <input type="text" className="form-control" id="payment-security" placeholder="XXXXXX" defaultValue="183467" />
                                                        <label htmlFor="payment-security" className="form-label mt-1 text-success fs-11"><sup><i className="ri-star-s-fill"></i></sup>Do not share O.T.P with anyone</label>
                                                    </div>
                                                    <div className="col-xl-12">
                                                        <div className="form-check">
                                                            <input className="form-check-input form-checked-success" type="checkbox" defaultValue="" id="payment-card-save" defaultChecked />
                                                            <label className="form-check-label" htmlFor="payment-card-save">
                                                                Save this card
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                            <div className="card-footer">
                                                <div className="row gy-3">
                                                    <p className="fs-15 fw-medium mb-1">Saved Cards :</p>
                                                    <Col xl={6}>
                                                        <div className="form-check payment-card-container mb-0 lh-1 saved-cards">
                                                            <input id="payment-card1" name="payment-cards" type="radio" className="form-check-input" defaultChecked />
                                                            <div className="form-check-label pe-5">
                                                                <div className="d-sm-flex d-block align-items-center justify-content-between">
                                                                    <div className="me-2 lh-1">
                                                                        <span className="avatar avatar-md">
                                                                            <img src="../../assets/images/ecommerce/png/6.png" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="saved-card-details">
                                                                        <p className="mb-0 fw-medium">XXXX - XXXX - XXXX - 7557</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xl={6}>
                                                        <div className="form-check payment-card-container mb-0 lh-1 saved-cards">
                                                            <input id="payment-card2" name="payment-cards" type="radio" className="form-check-input" />
                                                            <div className="form-check-label pe-5">
                                                                <div className="d-sm-flex d-block align-items-center justify-content-between">
                                                                    <div className="me-2 lh-1">
                                                                        <span className="avatar avatar-md">
                                                                            <img src="../../assets/images/ecommerce/png/25.png" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="saved-card-details">
                                                                        <p className="mb-0 fw-medium">XXXX - XXXX - XXXX - 5741</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {activeStep === 4 && (
                <div className="wizard-step wizard-tab">
                    <div className="row wizard-content container">
                        <div className="col-xl-12">
                            <div className="checkout-payment-success">
                                <div className="mb-4">
                                    <h5 className="text-success fw-medium">Appointment Booked...</h5>
                                </div>
                                <div className="mb-4">
                                    <img src="../../assets/images/ecommerce/png/24.png" alt="" className="img-fluid" />
                                </div>
                                <div className="mb-4">
                                    <p className="mb-1 fs-14">You will get the appointment details with appointment id <b>SPK#1FR</b> to <Link className="link-success" href="#!" scroll={false}><u>Martin12@gamil.com</u></Link></p>
                                    <p className="text-muted">Thank you for booking an appointment .</p>
                                </div>
                                <Link href="#!" scroll={false} className="btn btn-success">Book Another Appointment</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {activeStep === steps1.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}> Step{activeStep + 1}</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            style={{ marginRight: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {isStepOptional(activeStep) && (
                            <Button className="me-2" color="inherit" onClick={handleSkip} style={{ marginRight: 1 }}>
                                Skip
                            </Button>
                        )}
                        <Button onClick={handleNext}>
                            {activeStep === steps1.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}