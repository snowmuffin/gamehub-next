import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Form, Modal, Row } from "react-bootstrap";
import Select from 'react-select';

const Citydata = [
    { value: 'Georgetown', label: 'Georgetown' },
    { value: 'Alexandria', label: 'Alexandria' },
    { value: 'Rockville', label: 'Rockville' },
    { value: 'Frederick', label: 'Frederick' }
];

const Statedata = [
    { value: 'Washington,D.C', label: 'Washington,D.C' },
    { value: 'California', label: 'California' },
    { value: 'Texas', label: 'Texas' },
    { value: 'Alaska', label: 'Alaska' }
];

//Basic start
const Wizard = ({ step: currentIndex, ...props }: any) => {
    const steps: any = React.Children.toArray(props.children);
    const prevStep: any = currentIndex !== 0 && steps[currentIndex - 1].props;
    const nextStep: any = currentIndex !== steps.length - 1 && steps[currentIndex + 1].props;

    return (
        <Fragment>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card custom-card">
                        <nav className="steps basicsteps  flex-wrap">
                            {steps.map((step: any, index: any) => (
                                <Button
                                    key={step.props.number}
                                    onClick={() => props.onChange(index)}
                                    className={getClsNavBtn(index === currentIndex)}
                                >
                                    <span className="number me-2 d-inline-block">{step.props.number}</span>
                                    <b>{step.props.title}</b>
                                </Button>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
            <div className="card custom-card mb-0">
                <div className="top-left"></div>
                <div className="top-right"></div>
                <div className="bottom-left"></div>
                <div className="bottom-right"></div>
                <div>
                    {steps[currentIndex]}

                    <div className=" p-3 d-flex justify-content-between  ">
                        <Button
                            visible={prevStep}
                            onClick={() => props.onChange(currentIndex - 1)}
                            title={prevStep.description}
                        >
                            Back
                        </Button>
                        <Button
                            visible={nextStep}
                            onClick={() => props.onChange(currentIndex + 1)}
                            title={nextStep.description}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        </Fragment>

    );
};
const Step = ({ children }: any) => children;

function getClsNavBtn(active: any) {
    return "btn" + (active ? " active" : " me-4");
}
function Button({ visible, ...props }: any) {
    return (

        <button
            className={visible ? "btn btn-primary " : "invisible"}
            {...props}
        />

    );
}
interface State {
    showModal: boolean;
    step: number;
}
export class Basicwizard extends React.Component<{}, State>{
    constructor(props: {}) {
        super(props);
        this.state = {
            showModal: false,
            step: 0,
        };
    }

    openModal = () => {
        this.setState({ showModal: true });
    };

    closeModal = () => {
        this.setState({ showModal: false });
    };

    handleStep = (step: number) => {
        this.setState({ step });
    };

    render() {

        return (
            <Wizard step={this.state.step} onChange={this.handleStep}>
                <Step title="Shipping" number="1">
                    <section className="Basicwizard ">
                        <div className="p-4">
                            <p className="mb-1 fw-semibold text-muted op-5 fs-20">01</p>
                            <div className="fs-15 fw-medium d-sm-flex d-block align-items-center justify-content-between mb-3">
                                                <div>Shipping Address:</div>
                                                <div className="mt-sm-0 mt-2">
                                                    <button type="button" onClick={this.openModal} className="btn btn-outline-primary btn-sm"  data-bs-toggle="modal" data-bs-target="#modal-new-address"><i className="ri-add-line me-1 align-middle fs-14 fw-medium d-inline-block"></i>Add Shipping Address</button>
                                                    <Modal size="lg" centered className="" show={this.state.showModal} onHide={this.closeModal}>
                                                                <Modal.Header className="">
                                                                    <h6 className="modal-title" id="staticBackdropLabel1">New Address
                                                                    </h6>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </Modal.Header>
                                                                <Modal.Body>
                                                                    <div className="row gy-4 mb-4">
                                                                        <div className="col-xl-6">
                                                                            <div className="form-floating">
                                                                                <input type="text" className="form-control" id="fullname-add" placeholder="Name"/>
                                                                                <label htmlFor="fullname-add">Full Name</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-xl-6">
                                                                            <div className="form-floating">
                                                                                <input type="email" className="form-control" id="email-add" placeholder="name@example.com"/>
                                                                                <label htmlFor="email-add">Email</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-xl-6">
                                                                            <div className="form-floating">
                                                                                <input type="email" className="form-control is-valid" id="phoneno-add" placeholder="1234-XX-XXXX"/>
                                                                                <label htmlFor="phoneno-add">Phone No</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-xl-6">
                                                                            <div className="form-floating">
                                                                                <textarea className="form-control" placeholder="Address Here" id="address-add"></textarea>
                                                                                <label htmlFor="address-add">Address</label>
                                                                            </div>
                                                                            <div className="form-check mt-1">
                                                                                <input className="form-check-input form-checked-outline form-checked-success" type="checkbox" defaultValue="" id="invalidCheck" required defaultChecked/>
                                                                                <label className="form-check-label text-success" htmlFor="invalidCheck">
                                                                                    Same as Billing Address ?
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-xl-12">
                                                                            <div className="row gy-2">
                                                                                <div className="col-xl-3">
                                                                                    <div className="form-floating">
                                                                                        <input type="text" className="form-control is-valid" id="pincode-add" placeholder="Name"/>
                                                                                        <label htmlFor="pincode-add">Pin Code</label>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-xl-3">
                                                                                    <div className="form-floating">
                                                                                        <input type="text" className="form-control" id="city-add" placeholder="Name"/>
                                                                                        <label htmlFor="city-add">City</label>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-xl-3">
                                                                                    <div className="form-floating">
                                                                                        <input type="text" className="form-control" id="state-add" placeholder="Name"/>
                                                                                        <label htmlFor="state-add">State</label>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-xl-3">
                                                                                    <div className="form-floating">
                                                                                        <input type="text" className="form-control" id="country-add" placeholder="Name"/>
                                                                                        <label htmlFor="country-add">Country</label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Modal.Body>
                                                                <Modal.Footer>
                                                                    <button type="button" className="btn btn-light" data-bs-dismiss="modal" onClick={this.closeModal}>Close</button>
                                                                    <button type="button" className="btn btn-success">Save
                                                                        Changes</button>
                                                                </Modal.Footer>
                                                    </Modal>
                                                </div>
                                            </div>
                                            <div className="row gy-3">
                                                <div className="col-xxl-6">
                                                    <div className="card-body border">
                                                        <div className="d-sm-flex d-block align-items-center justify-content-between mb-2">
                                                            <div className="text-primary">Shipping Address <span className="text-default">(Default)</span>:</div>
                                                            <div className="mt-sm-0 mt-2">
                                                                <a href="" className="fs-14 btn btn-sm btn-secondary-transparent" data-bs-toggle="modal" data-bs-target="#modal-edit-address"><i></i>Edit Address</a>
                                                                <Modal className="modal"  id="modal-edit-address" tabIndex={-1} aria-labelledby="modal-edit-address" aria-hidden="true">
                                                                    <div className="modal-dialog modal-lg modal-dialog-centered">
                                                                        <div className="modal-content">
                                                                            <Modal.Header className="">
                                                                                <h6 className="modal-title" id="staticBackdropLabel2">Edit Address
                                                                                </h6>
                                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                            </Modal.Header>
                                                                            <Modal.Body>
                                                                                <div className="row gy-3">
                                                                                    <div className="col-xl-6">
                                                                                        <label htmlFor="fullname-new" className="form-label">Full Name</label>
                                                                                        <input type="text" className="form-control" id="fullname-new" placeholder="Full Name" defaultValue="Alice Wills"/>
                                                                                    </div>
                                                                                    <div className="col-xl-6">
                                                                                        <label htmlFor="email-new" className="form-label">Email</label>
                                                                                        <input type="email" className="form-control" id="email-new" placeholder="email" defaultValue="alicewills123@mail.com"/>
                                                                                    </div>
                                                                                    <div className="col-xl-6">
                                                                                        <label htmlFor="phonenumber-new" className="form-label">Phone Number</label>
                                                                                        <input type="text" className="form-control" id="phonenumber-new" placeholder="Phone" defaultValue="(121) 145 4624"/>
                                                                                    </div>
                                                                                    <div className="col-xl-6">
                                                                                        <label htmlFor="address-new" className="form-label">Address</label>
                                                                                        <input type="text" className="form-control" id="address-new" placeholder="Address" defaultValue="34A/45-354, B-Block, PNN Street"/>
                                                                                    </div>
                                                                                    <div className="col-xl-12">
                                                                                        <div className="row">
                                                                                            <div className="col-xl-3">
                                                                                                <label htmlFor="pincode-new" className="form-label">Pincode</label>
                                                                                                <input type="number" className="form-control" id="pincode-new" placeholder="Pinicode" defaultValue="120000"/>
                                                                                            </div>
                                                                                            <div className="col-xl-3">
                                                                                                <label htmlFor="city-new" className="form-label">City</label>
                                                                                                <input type="text" className="form-control" id="city-new" placeholder="City" defaultValue="AnyTown"/>
                                                                                            </div>
                                                                                            <div className="col-xl-3">
                                                                                                <label htmlFor="state-new" className="form-label">State</label>
                                                                                                <input type="text" className="form-control" id="state-new" placeholder="State" defaultValue="New California, Texas"/>
                                                                                            </div>
                                                                                            <div className="col-xl-3">
                                                                                                <label htmlFor="country-new" className="form-label">Country</label>
                                                                                                <input type="text" className="form-control" id="country-new" placeholder="Country" defaultValue="USA"/>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </Modal.Body>
                                                                            <Modal.Footer>
                                                                                <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                                                                                <button type="button" className="btn btn-success">Save
                                                                                    Changes</button>
                                                                            </Modal.Footer>
                                                                        </div>
                                                                    </div>
                                                                </Modal>
                                                            </div>
                                                        </div>
                                                        <div className="ps-3">
                                                            <div>Alice Wills</div>
                                                            <div>Mail: <span className="fs-13 op-8">alicewills123@mail.com</span></div>
                                                            <div>Phone: <span className="fs-13 op-8">(121) 145 4624</span></div>
                                                            <div>Address: <span className="fs-13 op-8">34A/45-354, B-Block, PNN Street, Anytown</span></div>
                                                            <div><span className="fs-13 op-8">New California, Texas,USA, 1200000.</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-6">
                                                    <div className="card-body border">
                                                        <div className="d-sm-flex d-block align-items-center justify-content-between mb-2">
                                                            <div className="text-primary">Billing Address :</div>
                                                            <div className="mt-sm-0 mt-2">
                                                                <a href="" className="fs-14 btn btn-sm btn-secondary-transparent" data-bs-toggle="modal" data-bs-target="#modal-editbill-address"><i></i>Edit Address</a>
                                                                <div className="modal"  id="modal-editbill-address" tabIndex={-1} aria-labelledby="modal-editbill-address" aria-hidden="true">
                                                                    <div className="modal-dialog modal-lg modal-dialog-centered">
                                                                        <div className="modal-content">
                                                                            <div className="modal-header">
                                                                                <h6 className="modal-title" id="staticBackdropLabel3">Edit Address
                                                                                </h6>
                                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                            </div>
                                                                            <div className="modal-body">
                                                                                <div className="row gy-3">
                                                                                    <div className="col-xl-6">
                                                                                        <label htmlFor="fullname-new1" className="form-label">Full Name</label>
                                                                                        <input type="text" className="form-control" id="fullname-new1" placeholder="Full Name" defaultValue="Alice Wills"/>
                                                                                    </div>
                                                                                    <div className="col-xl-6">
                                                                                        <label htmlFor="email-new1" className="form-label">Email</label>
                                                                                        <input type="email" className="form-control" id="email-new1" placeholder="email" defaultValue="alicewills123@mail.com"/>
                                                                                    </div>
                                                                                    <div className="col-xl-6">
                                                                                        <label htmlFor="phonenumber-new1" className="form-label">Phone Number</label>
                                                                                        <input type="text" className="form-control" id="phonenumber-new1" placeholder="Phone" defaultValue="(121) 145 4624"/>
                                                                                    </div>
                                                                                    <div className="col-xl-6">
                                                                                        <label htmlFor="address-new1" className="form-label">Address</label>
                                                                                        <input type="text" className="form-control" id="address-new1" placeholder="Address" defaultValue="34A/45-354, B-Block, PNN Street"/>
                                                                                    </div>
                                                                                    <div className="col-xl-12">
                                                                                        <div className="row">
                                                                                            <div className="col-xl-3">
                                                                                                <label htmlFor="pincode-new1" className="form-label">Pincode</label>
                                                                                                <input type="number" className="form-control" id="pincode-new1" placeholder="Pinicode" defaultValue="120000"/>
                                                                                            </div>
                                                                                            <div className="col-xl-3">
                                                                                                <label htmlFor="city-new1" className="form-label">City</label>
                                                                                                <input type="text" className="form-control" id="city-new1" placeholder="City" defaultValue="AnyTown"/>
                                                                                            </div>
                                                                                            <div className="col-xl-3">
                                                                                                <label htmlFor="state-new1" className="form-label">State</label>
                                                                                                <input type="text" className="form-control" id="state-new1" placeholder="State" defaultValue="New California, Texas"/>
                                                                                            </div>
                                                                                            <div className="col-xl-3">
                                                                                                <label htmlFor="country-new1" className="form-label">Country</label>
                                                                                                <input type="text" className="form-control" id="country-new1" placeholder="Country" defaultValue="USA"/>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="modal-footer">
                                                                                <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                                                                                <button type="button" className="btn btn-success">Save
                                                                                    Changes</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ps-3">
                                                            <div>Alice Wills</div>
                                                            <div>Mail: <span className="fs-13 op-8">alicewills123@mail.com</span></div>
                                                            <div>Phone: <span className="fs-13 op-8">(121) 145 4624</span></div>
                                                            <div>Address: <span className="fs-13 op-8">34A/45-354, B-Block, PNN Street, Anytown</span></div>
                                                            <div><span className="fs-13 op-8">New California, Texas,USA, 1200000.</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                            <div className="row gy-3">
                                <p className="fs-15 fw-semibold mb-1">Shipping Methods :</p>
                                <Col xl={6}>
                                    <div className="form-check shipping-method-container mb-0">
                                        <Form.Check id="shipping-method1" name="shipping-methods" type="radio" className="" defaultChecked />
                                        <div className="form-check-label">
                                            <div className="d-sm-flex align-items-center justify-content-between">
                                                <div className="me-2 ms-5">
                                                    <span className="avatar avatar-md">
                                                        <img src="../../../assets/images/ecommerce/png/21.png" alt="" />
                                                    </span>
                                                </div>
                                                <div className="shipping-partner-details me-sm-5 me-0">
                                                    <p className="mb-0 fw-semibold">UPS</p>
                                                    <p className="text-muted fs-11 mb-0">Delivered By 24,Nov 2022</p>
                                                </div>
                                                <div className="fw-semibold me-sm-5 me-0">
                                                    $9.99
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <div className="form-check shipping-method-container mb-0">
                                        <Form.Check id="shipping-method2" name="shipping-methods" type="radio" className="" />
                                        <div className="form-check-label">
                                            <div className="d-sm-flex align-items-center justify-content-between">
                                                <div className="me-2 ms-5">
                                                    <span className="avatar avatar-md">
                                                        <img src="../../../assets/images/ecommerce/png/22.png" alt="" />
                                                    </span>
                                                </div>
                                                <div className="shipping-partner-details me-sm-5 me-0">
                                                    <p className="mb-0 fw-semibold">USPS</p>
                                                    <p className="text-muted fs-11 mb-0">Delivered By 22,Nov 2022</p>
                                                </div>
                                                <div className="fw-semibold me-sm-5 me-0">
                                                    $10.49
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <div className="form-check shipping-method-container mb-0">
                                        <Form.Check id="shipping-method3" name="shipping-methods" type="radio" className="" />
                                        <div className="form-check-label">
                                            <div className="d-sm-flex align-items-center justify-content-between">
                                                <div className="me-2 ms-5">
                                                    <span className="avatar avatar-md">
                                                        <img src="../../../assets/images/ecommerce/png/21.png" alt="" />
                                                    </span>
                                                </div>
                                                <div className="shipping-partner-details me-sm-5 me-0">
                                                    <p className="mb-0 fw-semibold">FedEx</p>
                                                    <p className="text-muted fs-11 mb-0">Delivered Tomorrow</p>
                                                </div>
                                                <div className="fw-semibold me-sm-5 me-0">
                                                    $12.29
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <div className="form-check shipping-method-container mb-0">
                                        <Form.Check id="shipping-method4" name="shipping-methods" type="radio" className="" />
                                        <div className="form-check-label">
                                            <div className="d-sm-flex align-items-center justify-content-between">
                                                <div className="me-2 ms-5">
                                                    <span className="avatar avatar-md">
                                                        <img src="../../../assets/images/ecommerce/png/22.png" alt="" />
                                                    </span>
                                                </div>
                                                <div className="shipping-partner-details me-sm-5 me-0">
                                                    <p className="mb-0 fw-semibold">DHL</p>
                                                    <p className="text-muted fs-11 mb-0">Delivered Today</p>
                                                </div>
                                                <div className="fw-semibold me-sm-5 me-0">
                                                    $18.99
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </div>
                    </section>
                </Step>

                <Step title="Personal Details" number="2">
                    <section className="card-body Basicwizard p-0 ">
                        <div className="p-4">
                            <p className="mb-1 fw-semibold text-muted op-5 fs-20">02</p>
                            <div className="fs-15 fw-semibold d-sm-flex d-block align-items-center justify-content-between mb-3">
                                <div>Personal Details :</div>
                            </div>
                            <div className="row gy-4">
                                <Col xl={6}>
                                    <Form.Label htmlFor="firstname-personal" className="form-label">First Name</Form.Label>
                                    <Form.Control type="text" className="form-control" id="firstname-personal" placeholder="First Name" defaultValue="Toni" />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="lastname-personal" className="form-label">Last Name</Form.Label>
                                    <Form.Control type="text" className="form-control" id="lastname-personal" placeholder="Last Name" defaultValue="Anthony" />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="email-personal" className="form-label">Email</Form.Label>
                                    <Form.Control type="email" className="form-control" id="email-personal" placeholder="xyz@example.com" defaultValue="" />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="phoneno-personal" className="form-label">Phone no</Form.Label>
                                    <Form.Control type="text" className="form-control" id="phoneno-personal" placeholder="(555)-555-1234" defaultValue="" />
                                </Col>
                                <Col xxl={2}>
                                    <Form.Label htmlFor="pincode-personal" className="form-label">Pincode</Form.Label>
                                    <Form.Control type="text" className="form-control" id="pincode-personal" placeholder="200017" defaultValue="" />
                                </Col>
                                <Col xxl={4}>
                                    <Form.Label htmlFor="choices-single-default" className="form-label">City</Form.Label>
                                    <Select isSearchable name="colors" options={Citydata} className="basic-multi-select"
                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Citydata[0]]}
                                    />
                                </Col>
                                <Col xxl={4}>
                                    <Form.Label htmlFor="choices-single-default1" className="form-label">State</Form.Label>
                                    <Select isSearchable name="colors" options={Statedata} className="basic-multi-select"
                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Statedata[1]]}
                                    />
                                </Col>
                                <Col xxl={2}>
                                    <Form.Label htmlFor="country-personal" className="form-label">Country</Form.Label>
                                    <Form.Control type="text" className="form-control" id="country-personal" placeholder="Country" defaultValue="USA" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label htmlFor="text-area" className="form-label">Address</Form.Label>
                                    <Form.Control as="textarea" className="form-control" id="text-area" rows={4}></Form.Control>
                                    <div className="form-check mt-1">
                                        <input className="form-check-input form-checked-outline form-checked-success" type="checkbox" defaultValue="" id="invalidCheck1" required defaultChecked />
                                        <Form.Label className="form-check-label text-success fs-12" htmlFor="invalidCheck1">
                                            Same as Shipping Address Address ?
                                        </Form.Label>
                                    </div>
                                </Col>
                            </div>
                        </div>
                    </section>
                </Step>
                <Step title="Payment" number="3">
                    <section className="card-body Basicwizard p-0 ">
                        <div className="p-4">
                            <p className="mb-1 fw-semibold text-muted op-5 fs-20">03</p>
                            <div className="fs-15 fw-semibold d-sm-flex d-block align-items-center justify-content-between mb-3">
                                <div>Payment Details :</div>
                            </div>
                            <Row>
                                <Col xl={12}>
                                    <div className="mb-3">
                                        <Form.Label className="form-label">Delivery Address</Form.Label>
                                        <div className="input-group">
                                            <Form.Control type="text" className="form-control" placeholder="Address" aria-label="address" aria-describedby="payment-address" defaultValue="MIG-1-11,Monroe Street,Washington D.C,USA" />
                                            <Button variant="" type="button" className="btn btn-info-light input-group-text" id="payment-address">Change</Button>
                                        </div>
                                    </div>
                                    <Card className="custom-card border shadow-none mb-3">
                                        <Card.Header>
                                            <Card.Title>
                                                Payment Methods
                                            </Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                            <div className="btn-group mb-3 d-sm-flex d-block" role="group" aria-label="Basic radio toggle button group">
                                                <Form.Control type="radio" className="btn-check" name="btnradio" id="btnradio1" />
                                                <Form.Label className="btn btn-outline-light text-default" htmlFor="btnradio1">C.O.D(Cash on delivery)</Form.Label>
                                                <Form.Control type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                                                <Form.Label className="btn btn-outline-light text-default" htmlFor="btnradio2">UPI</Form.Label>
                                                <Form.Control type="radio" className="btn-check" name="btnradio" id="btnradio3" defaultChecked />
                                                <Form.Label className="btn btn-outline-light text-default" htmlFor="btnradio3">Credit/Debit Card</Form.Label>
                                            </div>
                                            <div className="row gy-3">
                                                <Col xl={12}>
                                                    <Form.Label htmlFor="payment-card-number" className="form-label">Card Number</Form.Label>
                                                    <Form.Control type="text" className="form-control" id="payment-card-number" placeholder="Card Number" defaultValue="1245 - 5447 - 8934 - XXXX" />
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Label htmlFor="payment-card-name" className="form-label">Name On Card</Form.Label>
                                                    <Form.Control type="text" className="form-control" id="payment-card-name" placeholder="Name On Card" defaultValue="JSON TAYLOR" />
                                                </Col>
                                                <Col xl={4}>
                                                    <Form.Label htmlFor="payment-cardexpiry-date" className="form-label">Expiration Date</Form.Label>
                                                    <Form.Control type="text" className="form-control" id="payment-cardexpiry-date" placeholder="MM/YY" defaultValue="08/2024" />
                                                </Col>
                                                <Col xl={4}>
                                                    <Form.Label htmlFor="payment-cvv" className="form-label">CVV</Form.Label>
                                                    <Form.Control type="text" className="form-control" id="payment-cvv" placeholder="XXX" defaultValue="341" />
                                                </Col>
                                                <Col xl={4}>
                                                    <Form.Label htmlFor="payment-security" className="form-label">O.T.P</Form.Label>
                                                    <Form.Control type="text" className="form-control" id="payment-security" placeholder="XXXXXX" defaultValue="183467" />
                                                    <Form.Label htmlFor="payment-security" className="form-label mt-1 text-success fs-11"><sup><i className="ri-star-s-fill"></i></sup>Do not share O.T.P with anyone</Form.Label>
                                                </Col>
                                                <Col xl={12}>
                                                    <div className="form-check">
                                                        <input className="form-check-input form-checked-success" type="checkbox" defaultValue="" id="payment-card-save" defaultChecked />
                                                        <Form.Label className="form-check-label" htmlFor="payment-card-save">
                                                            Save this card
                                                        </Form.Label>
                                                    </div>
                                                </Col>
                                            </div>
                                        </Card.Body>
                                        <Card.Footer className="card-footer">
                                            <div className="row gy-3">
                                                <p className="fs-15 fw-semibold mb-1">Saved Cards :</p>
                                                <Col xl={6}>
                                                    <div className="form-check payment-card-container mb-0 lh-1">
                                                        <Form.Check id="payment-card1" name="payment-cards" type="radio" className="" defaultChecked />
                                                        <div className="form-check-label ps-5">
                                                            <div className="d-sm-flex d-block align-items-center justify-content-between gap-2">
                                                                <div className="saved-card-details">
                                                                    <p className="mb-0 fw-semibold">XXXX - XXXX - XXXX - 7646</p>
                                                                </div>
                                                                <div className="ms-auto lh-1">
                                                                    <span className="avatar avatar-md">
                                                                        <img src="../../../assets/images/ecommerce/png/6.png" alt="" />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xl={6}>
                                                    <div className="form-check payment-card-container mb-0 lh-1">
                                                        <Form.Check id="payment-card2" name="payment-cards" type="radio" className="" />
                                                        <div className="form-check-label ps-5">
                                                            <div className="d-sm-flex d-block align-items-center justify-content-between gap-2">
                                                                <div className="saved-card-details">
                                                                    <p className="mb-0 fw-semibold">XXXX - XXXX - XXXX - 9556</p>
                                                                </div>
                                                                <div className="me-2 lh-1">
                                                                    <span className="avatar avatar-md">
                                                                        <img src="../../../assets/images/ecommerce/png/25.png" alt="" />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </div>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            </Row>
                        </div>

                    </section>
                </Step>
                <Step title="Confirmation" number="4">
                    <section className="card-body Basicwizard ">
                        <div className="p-5 checkout-payment-success my-3">
                            <div className="mb-5">
                                <h5 className="text-success fw-semibold">Payment Successful...&#129309;</h5>
                            </div>
                            <div className="mb-5">
                                <img src="../../../assets/images/ecommerce/png/24.png" alt="" className="img-fluid" />
                            </div>
                            <div className="mb-4">
                                <p className="mb-1 fs-14">You can track your order with Order Id <b>SPK#1FR</b> from <Link className="link-success" href="#!" scroll={false}><u>Track Order</u></Link></p>
                                <p className="text-muted">Thankyou for shopping with us.</p>
                            </div>
                            <Link href={`/apps/ecommerce/products/`} className="btn btn-success">Continue Shopping<i className="bi bi-cart ms-2"></i></Link>
                        </div>
                    </section>
                </Step>
            </Wizard>
        );
    }
}
//Basic end
