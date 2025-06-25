"use client";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import DatePicker from 'react-datepicker';
const Select = dynamic(() => import('react-select'), { ssr: false });
const SunEditor = dynamic(() => import("suneditor-react"), { ssr: false });
import { setHours, setMinutes } from "date-fns";
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);
import { registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import CreatableSelect from 'react-select/creatable';
import dynamic from "next/dynamic";
import { Multipleselectdata, Multipleselectdata1, multiselectdata } from "@/shared/data/apps/projects/createprojectdata";
import Seo from "@/shared/layout-components/seo/seo";

const CreateProject = () => {

    const [isSearchable] = useState(true);
    const [files, setFiles] = useState([]);
    const [startDate, setStartDate] = useState(new Date()); //React date picker
    const [startDate1, setStartDate1] = useState(new Date());
    const [value, setValue] = useState<any>('');

    const components = {
        DropdownIndicator: null,
    };

    const createOption = (label: string) => ({
        label,
        value: label,
    });

    const [inputValue, setInputValue] = useState('');
    const [value1, setValue1] = useState([
        createOption("Marketing"),
        createOption("Sales"),
        createOption("Development"),
        createOption("Design"),
        createOption("Research"),

    ]);
    const handleKeyDown = (event: { key: any; preventDefault: () => void; }) => {
        if (!inputValue) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                setValue1((prev) => [...prev, createOption(inputValue)]);
                setInputValue('');
                event.preventDefault();
        }
    };

    const handleDateChange = (date: React.SetStateAction<Date>) => {
        if (date) {
            setStartDate(date);
        }
    };
    const handleDateChange1 = (date: React.SetStateAction<Date>) => {
        if (date) {
            setStartDate1(date);
        }
    };

    //Specific time range
    const [startTime, setStartTime] = useState(
        setHours(setMinutes(new Date(), 30), 17)
    );

    const defaultContent = `
    <p>lorem ipsum Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur semper ipsum lacus, sit amet faucibus nibh semper accumsan. Duis purus dui, cursus eu imperdiet eget, auctor non ligula. Morbi interdum imperdiet libero at pulvinar. Suspendisse quis vestibulum turpis. Suspendisse potenti. Nunc at libero ut sem elementum laoreet. Suspendisse potenti. Cras lacinia erat augue, quis blandit enim tincidunt eu. Proin posuere luctus tempus.</p>
    <ol>
    <li>Define the project's purpose, objectives,</li>
    <li>Create a detailed plan outlining tasks, milestones, timelines, and resource allocation.</li>
    <li>Break down project tasks into a detailed list, including dependencies and priorities.</li>
    <li>Define each team member's role and responsibilities to avoid confusion.</li>
    <li>Develop a plan for testing and quality assurance</li>
    </ol>`;

    return (
        <Fragment>
            <Seo title={"Create Projects"} />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                Create Project
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="row gy-3">
                                <Col xl={12}>
                                    <Form.Label htmlFor="input-label" className="form-label">Project Name :</Form.Label>
                                    <input type="text" className="form-control" id="input-label" placeholder="Enter Project Name" />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="">Start Date :</Form.Label>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                            <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" selected={startDate} onChange={handleDateChange} />
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="">End Date :</Form.Label>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                            <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" selected={startDate1} onChange={handleDateChange1} />

                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <p className="fw-semibold mb-2">Status :</p>
                                    <Select isSearchable={isSearchable} name="colors" options={Multipleselectdata1} className="default basic-multi-select" id="choices-multiple-default"
                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Multipleselectdata1[0]]}
                                    />
                                </Col>
                                <Col xl={6}>
                                    <p className="fw-semibold mb-2">Priority :</p>
                                    <Select isSearchable={isSearchable} name="colors" options={Multipleselectdata} className="default basic-multi-select" id="choices-multiple-default"
                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Multipleselectdata[0]]}
                                    />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="">Assigned To</Form.Label>

                                    <Select isMulti name="colors" options={multiselectdata} className="basic-multi-select" classNamePrefix="Select2"
                                        defaultValue={[multiselectdata[0], multiselectdata[9], multiselectdata[4]]} />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="">Tags</Form.Label>
                                    <CreatableSelect
                                        className="tags-data"
                                        components={components}
                                        classNamePrefix='react-select'
                                        inputValue={inputValue}
                                        isClearable
                                        isMulti
                                        menuIsOpen={false}
                                        onChange={(newValue) => {
                                            // Ensure newValue is an array (or empty array) of objects
                                            if (Array.isArray(newValue)) {
                                                setValue1(newValue);
                                            } else {
                                                // Handle the case when newValue is not an array
                                                setValue1([]);
                                            }
                                        }}
                                        onInputChange={(newValue) => setInputValue(newValue)}
                                        onKeyDown={handleKeyDown}
                                        placeholder="Type something and press enter..."
                                        value={value1}
                                    />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label className="">Project Description :</Form.Label>
                                    <SunEditor defaultValue={defaultContent} />

                                </Col>
                                <Col xl={12}>
                                    <Form.Label className="">Attachments</Form.Label>
                                    <Form.Control type="file" multiple />
                                </Col>
                            </div>
                            <div className="card-footer">
                                <Button variant="" className="btn btn-primary-light btn-wave ms-auto float-end">Create Project</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default CreateProject;
