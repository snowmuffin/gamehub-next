"use client";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment, useState } from "react";
import { Card, Col, InputGroup, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";

const DateTimePicker = () => {

    const [startDate, setStartDate] = useState(new Date());
    const handleDateChange = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };
    const [startDate1, setStartDate1] = useState(new Date());
    const handleDateChange1 = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate1(date);
        }
    };
    const [startDate2, setStartDate2] = useState(new Date());
    const handleDateChange2 = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate2(date);
        }
    };
    const [startDate3, setStartDate3] = useState(new Date());
    const handleDateChange3 = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate3(date);
        }
    };
    const [startDate4, setStartDate4] = useState(new Date());
    const handleDateChange4 = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate4(date);
        }
    };
    const [startDate5, setStartDate5] = useState<any>(new Date());
    const handleDateChange5 = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate5(date);
        }
    };
    const [startDatei, setStartDatei] = useState<any>(new Date());
    const [startDate6, setStartDate6] = useState(new Date());
    const handleDateChange6 = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate6(date);
        }
    };

    const currentDate = new Date();
    const startTime = new Date(currentDate);
    startTime.setHours(17);
    startTime.setMinutes(30);

    const [startDate7, setStartDate7] = useState(startTime);

    const [startDate8, setStartDate8] = useState(new Date());

    //color picker
    const [color, setColor] = useState<any>("#6c5ffc");
    const [showColorPicker, setShowColorPicker] = useState(false);
    const handleChangeComplete = (color: any) => {
        console.log(color);
    };

    return (
        <Fragment>
            <Seo title={"Date-Time-Picker"} />
            <Row>
                <Col xl={4}>
                    <Card className=" custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                Basic Date picker
                            </div>
                        </Card.Header>
                        <div className="card-body">
                            <div className="form-group">
                                <InputGroup className="">
                                    <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i>
                                    </InputGroup.Text>
                                    <DatePicker selected={startDate} onChange={handleDateChange} />
                                </InputGroup>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className=" custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                Date picker With Time
                            </div>
                        </Card.Header>
                        <div className="card-body">
                            <div className="form-group">
                                <InputGroup className="">
                                    <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </InputGroup.Text>
                                    <DatePicker
                                        selected={startDate1}
                                        onChange={handleDateChange1}
                                        timeInputLabel="Time:"
                                        dateFormat="yy/MM/dd h:mm aa"
                                        placeholderText='Choose date with time'
                                        showTimeInput
                                    />
                                </InputGroup>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className=" custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                Date range picker
                            </div>
                        </Card.Header>
                        <div className="card-body">
                            <div className="form-group">
                                <InputGroup className="">
                                    <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i>
                                    </InputGroup.Text>
                                    <DatePicker selected={startDate3} onChange={handleDateChange3} />
                                </InputGroup>
                            </div>
                        </div>
                    </Card>
                </Col>
                <div className="col-xl-12">
                    <Card className=" custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                Human Friendly dates
                            </div>
                        </Card.Header>
                        <div className="card-body">
                            <div className="form-group">
                                <InputGroup className="">
                                    <InputGroup.Text className="input-group-text text-muted">
                                        <i className="ri-calendar-line"></i> </InputGroup.Text>
                                    <DatePicker selected={startDate2} onChange={handleDateChange2} />
                                </InputGroup>
                            </div>
                        </div>
                    </Card>
                </div>
            </Row>
            <Row>
                <Col xl={4}>
                    <Card className=" custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                Basic Time picker
                            </div>
                        </Card.Header>
                        <div className="card-body">
                            <div className="form-group">
                                <InputGroup className="input-group">
                                    <InputGroup.Text className="input-group-text text-muted"> <i className="ri-time-line"></i> </InputGroup.Text>
                                    <DatePicker
                                        selected={startDate4}
                                        onChange={handleDateChange4}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        timeCaption="Time"
                                        dateFormat="h:mm aa"
                                    />
                                </InputGroup>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className=" custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                Time picker with 24hr Format
                            </div>
                        </Card.Header>
                        <div className="card-body">
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-text text-muted"> <i className="ri-time-line"></i> </div>
                                    <DatePicker
                                        dateFormat="yyyy/MM/dd"
                                        selected={startDate8}
                                        onChange={(date: React.SetStateAction<Date>) => setStartDate8(date)}
                                    />
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className=" custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                Time Picker with Limits
                            </div>
                        </Card.Header>
                        <div className="card-body">
                            <div className="form-group">
                                <InputGroup className="input-group">
                                    <InputGroup.Text className="input-group-text text-muted"> <i className="ri-time-line"></i> </InputGroup.Text>
                                    <DatePicker
                                        selected={startDate6}
                                        onChange={handleDateChange6}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        timeCaption="Time"
                                        dateFormat="h:mm aa"
                                    />
                                </InputGroup>
                            </div>
                        </div>
                    </Card>
                </Col>
                <div className="col-xl-12">
                    <Card className=" custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                DateTimePicker with Limited Time Range
                            </div>
                        </Card.Header>
                        <div className="card-body">
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-text text-muted"> <i className="ri-time-line"></i> </div>
                                    <DatePicker
                                        selected={startDate7}
                                        onChange={(date: React.SetStateAction<Date>) => setStartDate7(date)}
                                        showTimeSelect
                                        minTime={new Date(currentDate.setHours(17, 0, 0, 0))}
                                        maxTime={new Date(currentDate.setHours(20, 30, 0, 0))}
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                    />
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </Row>
            <Row>
                <div className="col-xl-6">
                    <Card className=" custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                Inline Calendar
                            </div>
                        </Card.Header>
                        <div className="card-body">
                            <div className="form-group overflow-auto">
                                <DatePicker selected={startDatei} onChange={(date: any) => setStartDatei(date)} inline />
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="col-xl-6">
                    <Row>
                        <div className="col-xl-12">
                            <Card className=" custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Header>
                                    <div className="card-title">
                                        Inline Time Picker
                                    </div>
                                </Card.Header>
                                <div className="card-body">
                                    <div className="form-group mb-0">
                                        <DatePicker className="ti-form-input focus:z-10" selected={startDate5} onChange={(date: any) =>
                                            setStartDate5(date)} inline showTimeSelect showTimeSelectOnly timeIntervals={15} timeCaption="Time" dateFormat="h:mm aa" />
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Row>
                </div>
            </Row>
        </Fragment>
    );
};

export default DateTimePicker;

