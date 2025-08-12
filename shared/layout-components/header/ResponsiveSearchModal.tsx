"use client";
import React from "react";
import { Modal, InputGroup, Form, Button } from "react-bootstrap";

const ResponsiveSearchModal = ({ show, handleClose }: { show: boolean; handleClose: () => void }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      className="fade show"
      id="header-responsive-search"
      tabIndex={-1}
      aria-labelledby="header-responsive-search"
      role="dialog"
    >
      <div className="">
        <Modal.Body className="">
          <InputGroup>
            <Form.Control
              type="text"
              className="border-end-0"
              placeholder="Search Anything ..."
              aria-label="Search Anything ..."
              aria-describedby="button-addon2"
            />
            <Button variant="primary" className="btn" type="button" id="button-addon2">
              <i className="bi bi-search"></i>
            </Button>
          </InputGroup>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default ResponsiveSearchModal;
