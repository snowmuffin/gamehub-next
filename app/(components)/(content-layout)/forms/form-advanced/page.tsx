"use client"
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import React, { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { CountrySelect } from "react-country-state-city";
import DualListBox from 'react-dual-listbox';
const CreatableSelect = dynamic(() => import("react-select/creatable"), { ssr: false });
const Select = dynamic(() => import('react-select'), { ssr: false });

const FormAdvanced = () => {

    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);

    const [country, setCountry] = useState({}); // the selected country
    const [state, setState] = useState({}); // the selected state
    const visitorApiPrjectId = ""; // assign your project ID here

    const options = [
        { value: 'Ten', label: 'Ten' },
        { value: 'Nine', label: 'Nine' },
        { value: 'Eight', label: 'Eight' },
        { value: 'Seven', label: 'Seven' },
        { value: 'Six', label: 'Six' },
        { value: 'Five', label: 'Five' },
        { value: 'Four', label: 'Four' },
        { value: 'Three', label: 'Three' },
        { value: 'Two', label: 'Two' },
        { value: 'One', label: 'One' },
    ];
    const options1 = [
        { value: 'Three', label: 'Three' },
        { value: 'Two', label: 'Two' },
        { value: 'One', label: 'One' },
    ];
    const Disabletag = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
    ];

    const [selected, setSelected] = useState<any>([]);
    const [selected1, setSelected1] = useState<any>([]);

    const components = {
        DropdownIndicator: null,
    };
    const createOption = (label: string) => ({
        label,
        value: label,
    });

    const [inputValue, setInputValue] = useState('');
    const [value, setValue] = useState([
        createOption("tag1"),
        createOption("tag2"),
        createOption("tag3"),
        createOption("tag4"),
        createOption("tag5"),
        createOption("tag6"),
    ]);
    const [inputValue1, setInputValue1] = useState('');
    const [value1, setValue1] = useState([
        createOption("tag1"),
        createOption("tag2")
    ]);
    const [inputValue2, setInputValue2] = useState('');
    const [value2, setValue2] = useState([
        createOption("abc@hotmail.com")
    ]);

    const handleKeyDown1 = (event: any) => {
        if (!inputValue1) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                setValue1((prev) => [...prev, createOption(inputValue1)]);
                setInputValue1('');
                event.preventDefault();
        }
    };
    const handleKeyDown = (event: any) => {
        if (!inputValue) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                setValue((prev) => [...prev, createOption(inputValue)]);
                setInputValue('');
                event.preventDefault();
        }
    };
    const handleKeyDown2 = (event: any) => {
        if (!inputValue2) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                setValue2((prev) => [...prev, createOption(inputValue2)]);
                setInputValue2('');
                event.preventDefault();
        }
    };

    return (
        <Fragment>
            <Seo title={"Form-Advance"} />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">Auto Complete</div>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xxl={5} className="mb-3 mb-xxl-0">
                                    <Form.Label htmlFor="autoComplete" className="">Search Results Of Food & Drinks Combo</Form.Label>
                                    <Form.Control type="search" className="autoComplete_wrapper" id="autoComplete" placeholder="Search for Food & Drinks Combo" />
                                </Col>
                                <Col xxl={4}>
                                    <Form.Label htmlFor="autoComplete-color" className="">Advanced Search Results For Colors</Form.Label>
                                    <Form.Control type="search" className="" id="autoComplete-color" placeholder="Search For Advanced Colors...." />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                Telephone Input
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="row gy-4">
                                <Col xxl={3} xl={6}>
                                    <Form.Label htmlFor="phone" className="d-block">Basic Telephone Input</Form.Label>
                                    <CountrySelect onChange={(e: any) => { setCountryid(e.id); }} placeHolder="Select Country" />
                                </Col>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">Dual List Box</div>
                        </Card.Header>
                        <Card.Body>
                            <div className="row gy-4">
                                <div className="col-xl-6">
                                    <h6>Select by class :</h6>
                                    <DualListBox
                                        options={options}
                                        selected={selected}
                                        onChange={(newValue) => setSelected(newValue)}
                                    />
                                </div>
                                <div className="col-xl-6">
                                    <h6>Add options and add eventListeners :</h6>
                                    <DualListBox
                                        options={options1}
                                        selected={selected1}
                                        onChange={(newValue) => setSelected1(newValue)}
                                    />
                                </div>

                            </div>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                Tagify Js
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="row gy-3">
                                <Col xl={6}>
                                    <label className="form-label d-block">Basic Tagify</label>
                                    <CreatableSelect
                                        components={components}
                                        classNamePrefix='react-select'
                                        inputValue={inputValue1}
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
                                        onInputChange={(newValue) => setInputValue1(newValue)}
                                        onKeyDown={handleKeyDown1}
                                        placeholder="Type something and press enter..."
                                        value={value1}
                                    />
                                </Col>
                                <Col xl={6}>
                                    <label className="form-label d-block">Tagify With Custom Suggestions</label>
                                    <input name='input-custom-dropdown' className="form-control" placeholder='write some tags' defaultValue='css, html, javascript' />
                                </Col>
                                <Col xl={6}>
                                    <label className="form-label d-block">Diasbled User Input</label>
                                    <Select name="colors" options={Disabletag} className="basic-multi-select"
                                        menuPlacement='auto' classNamePrefix="Select2" placeholder="Select tags from the list" />
                                </Col>
                                <Col xl={6}>
                                    <label className="form-label d-block">Drag & Sort</label>
                                    <CreatableSelect
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
                                        value={value}
                                    />
                                </Col>
                                <Col xl={12}>
                                    <label className="form-label d-block">Tagify With Mix Text & Tags</label>
                                    <Form.Control defaultValue="because he's a relic." name='mix' className="" />
                                </Col>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default FormAdvanced;
