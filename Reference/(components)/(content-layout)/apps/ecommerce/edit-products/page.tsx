"use client";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import dynamic from "next/dynamic";
const Select = dynamic(() => import("react-select"), { ssr: false });
import DatePicker from "react-datepicker";
//filepond
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import { Productoptions3, Productoptions1, Productoptions4, Productoptions5, Productoptions6, Productoptions7, Productoptions8, Productoptions2 } from "@/shared/data/apps/ecommerce/addproductsdata";
import { Fragment, useState } from "react";
import Producteditor from "@/shared/data/apps/ecommerce/editproductsdata";
import Seo from "@/shared/layout-components/seo/seo";
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

const EditProducts = () => {

    const [files, setFiles] = useState<any>([]);
    const [files1, setFiles1] = useState<any>([]);
    const [startDate, setStartDate] = useState(new Date());
    const handleDateChange = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };

    return (
        <Fragment>
            <Seo title={"Edit Products"} />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className=" add-products p-0">
                            <div className="p-4">
                                <Row className="gx-5">
                                    <Col xxl={6} xl={12} lg={12} md={6} className="">
                                        <div className="shadow-none mb-0 border-0">
                                            <Card.Body className=" p-0">
                                                <div className="row gy-3">
                                                    <Col xl={12}>
                                                        <Form.Label htmlFor="product-name-add">Product Name</Form.Label>
                                                        <Form.Control type="text" className="form-control" id="product-name-add" defaultValue="Wireless Bluetooth Headset" />
                                                        <Form.Label htmlFor="product-name-add" className="form-label mt-1 fs-12 op-5 text-muted mb-0">*Product Name should not exceed 30 characters</Form.Label>
                                                    </Col>
                                                    <Col xl={12}>
                                                        <Form.Label htmlFor="product-category-add">Category</Form.Label>
                                                        <Select name="colors" options={Productoptions1} className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Category" defaultValue={[Productoptions1[6]]}
                                                        />
                                                    </Col>
                                                    <Col xl={12}>
                                                        <Form.Label htmlFor="product-description-add">Product Description</Form.Label>
                                                        <Form.Control as="textarea" className="form-control" id="product-description-add" defaultValue="Wireless Earphones with Bluetooth Connectivity and Dual Modes, flexible." rows={2}></Form.Control>
                                                        <label htmlFor="product-description-add" className="form-label mt-1 fs-12 op-5 text-muted mb-0">*Description should not exceed 500 letters</label>
                                                    </Col>
                                                    <Col xl={12}>
                                                        <p className="fw-medium fs-14 mb-2">Product Features :</p>
                                                        <div id="product-features">
                                                            <Producteditor />
                                                        </div>
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="publish-date">Publish Date</Form.Label>
                                                        <DatePicker selected={startDate} onChange={handleDateChange} />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="publish-time">Publish Time</Form.Label>
                                                        <DatePicker
                                                            selected={startDate}
                                                            onChange={handleDateChange}
                                                            showTimeSelect
                                                            showTimeSelectOnly
                                                            timeIntervals={15}
                                                            timeCaption="Time"
                                                            dateFormat="h:mm aa"
                                                        />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-status-add">Published Status</Form.Label>
                                                        <Select name="colors" options={Productoptions6} className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="" defaultValue={[Productoptions6[2]]}
                                                        />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label>Product Tags</Form.Label>
                                                        <Select isMulti name="colors" options={Productoptions7} defaultValue={[Productoptions7[0], Productoptions7[2]]}
                                                            className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
                                                        />
                                                    </Col>
                                                </div>
                                            </Card.Body>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={12} lg={12} md={6} className="">
                                        <div className="shadow-none mb-0 border-0">
                                            <Card.Body className=" p-0">
                                                <div className="row gy-4">
                                                    <p className="fw-medium fs-14 mb-0">Specifications :</p>
                                                    <div className="row mx-0 mt-0 gy-2">
                                                        <Col xl={6} className="mt-xl-2">
                                                            <Form.Label htmlFor="product-size-add">Size</Form.Label>
                                                            <Select name="colors" options={Productoptions3} className="basic-multi-select" isSearchable
                                                                menuPlacement='auto' classNamePrefix="Select2" placeholder="Select" defaultValue={[Productoptions3[3]]}
                                                            />
                                                        </Col>
                                                        <Col xl={6} className="mt-xl-2">
                                                            <Form.Label htmlFor="product-brand-add">Brand</Form.Label>
                                                            <Select name="colors" options={Productoptions4} className="basic-multi-select" isSearchable
                                                                menuPlacement='auto' classNamePrefix="Select2" placeholder="Select" defaultValue={[Productoptions4[0]]}
                                                            />
                                                        </Col>
                                                        <Col xl={6}>
                                                            <Form.Label htmlFor="product-gender-add" >Gender</Form.Label>
                                                            <Select name="colors" options={Productoptions2} className="basic-multi-select" isSearchable defaultValue={[Productoptions2[1]]}
                                                                menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
                                                            />
                                                        </Col>
                                                        <Col xl={6} className="color-selection">
                                                            <Form.Label htmlFor="product-color-add">Colors</Form.Label>
                                                            <Select isMulti name="colors" options={Productoptions5} className="basic-multi-select" isSearchable
                                                                menuPlacement='auto' classNamePrefix="Select2" placeholder="Select" defaultValue={[Productoptions5[0]]}
                                                            />
                                                        </Col>
                                                        <Col xl={6} className="">
                                                            <label htmlFor="product-cost-add" className="form-label">Enter Cost</label>
                                                            <input type="text" className="form-control" id="product-cost-add" placeholder="Cost" defaultValue="$1299.99" />
                                                            <label htmlFor="product-cost-add" className="form-label mt-1 fs-12 op-5 text-muted mb-0">*Mention final price of the product</label>
                                                        </Col>
                                                    </div>
                                                    <Col xl={6} className="">
                                                        <label htmlFor="product-type" className="form-label">Product Type</label>
                                                        <input type="text" className="form-control" id="product-type" placeholder="Type" defaultValue="Wireless" />
                                                    </Col>
                                                    <Col xl={6} className="">
                                                        <label htmlFor="product-discount" className="form-label">Item Weight</label>
                                                        <input type="text" className="form-control" id="product-discount1" defaultValue="250gms" placeholder="Weight in gms" />
                                                    </Col>
                                                    <Col xl={6} className="">
                                                        <label htmlFor="product-quantity-add" className="form-label">Quantity</label>
                                                        <input type="number" className="form-control" id="product-quantity-add" defaultValue="1" placeholder="Quantity" />
                                                    </Col>
                                                </div>
                                                <p className="fw-medium fs-14 mb-0">Pricing :</p>
                                                <div className="row mx-0 mt-0">
                                                    <Col xl={4} className="mt-xl-2">
                                                        <label htmlFor="product-actual-price" className="form-label">Actual Price</label>
                                                        <input type="text" className="form-control" id="product-actual-price" defaultValue="$799.09" placeholder="Actual Price" />
                                                    </Col>
                                                    <Col xl={4} className="mt-xl-2">
                                                        <label htmlFor="product-dealer-price" className="form-label">Dealer Price</label>
                                                        <input type="text" className="form-control" id="product-dealer-price" defaultValue="$840.00" placeholder="Dealer Price" />
                                                    </Col>
                                                    <Col xl={4} className="mt-xl-2">
                                                        <label htmlFor="product-discount" className="form-label">Discount</label>
                                                        <input type="text" className="form-control" id="product-discount" defaultValue="0.5%" placeholder="Discount in %" />
                                                    </Col>
                                                </div>
                                                <p className="fw-medium mb-2 fs-14">Product Images :</p>
                                                <div className="row mx-0">
                                                    <div className="col-xl-12 product-documents-container px-0">
                                                        <FilePond
                                                            files={files}
                                                            onupdatefiles={setFiles}
                                                            allowMultiple={true}
                                                            maxFiles={6}
                                                            server="/api"
                                                            name="files" /* sets the file input name, it's filepond by default */
                                                            labelIdle='Drag & Drop your file here or click '
                                                        />
                                                        <label className="form-label op-5 mt-3">Minimum 0f 6 images are need to be uploaded,make sure the image size match the proper background size and all images should be uniformly maintained with width and height to the image container,image size should not exceed 2MB,once uploaded to change the image you need to wait minimum of 24hrs. </label>
                                                    </div>
                                                </div>
                                                <p className="fw-medium mb-2 fs-14">Availability :</p>
                                                <div className="row mx-0">
                                                    <Col xl={12} className="px-0">
                                                        <Select name="colors" options={Productoptions8} defaultValue={[Productoptions8[1]]}
                                                            className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
                                                        />
                                                    </Col>
                                                </div>
                                                <div className="col-xl-12 product-documents-container">
                                                    <p className="fw-medium mb-2 fs-14">Warrenty Documents :</p>
                                                    <FilePond
                                                        files={files1}
                                                        onupdatefiles={setFiles1}
                                                        allowMultiple={true}
                                                        maxFiles={6}
                                                        server="/api"
                                                        name="files" /* sets the file input name, it's filepond by default */
                                                        labelIdle='Drag & Drop your file here or click '
                                                    />
                                                </div>
                                            </Card.Body>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="px-4 py-3 border-top border-block-start-dashed d-sm-flex justify-content-end">
                                <Button variant='primary-light' type="button" className="btn m-1">Add Product<i className="bi bi-plus-lg ms-2"></i></Button>
                                <Button variant='success-light' type="button" className="btn m-1">Save Product<i className="bi bi-download ms-2"></i></Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default EditProducts;
