"use client";
import Seo from "@/shared/layout-components/seo/seo";
import ShowCode from "@/shared/layout-components/showcode/showcode";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { ColorPicker, useColor } from "react-color-palette";


const Colorpicker = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
    //color picker
    const [color, setColor] = useColor("#561ecb");

    return (
        <Fragment>
            <Seo title={"Color Pickers"} />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                Classic
                            </div>
                        </Card.Header>
                        <Card.Body className="d-sm-flex justify-content-between">
                            <div>
                                <div className="theme-container1"></div>
                                <div className="pickr-container1 example-picker"><Button variant="primary" className='pcr-button btn-md mb-3' onClick={toggleVisibility}> <i className="ri-palette-line"></i></Button>
                                {isVisible && (
                                        <ColorPicker color={color} onChange={setColor} hideInput={["hex", "hsv"]} />
                                    )}</div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <ShowCode title="React-Bootstrap Colo Picker" code={Colorpicker} className="custom-card">
                        <Form.Control
                            type="color"
                            id="exampleColorInput"
                            defaultValue="#563d7c"
                            title="Choose your color"
                        />
                    </ShowCode>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Colorpicker;
