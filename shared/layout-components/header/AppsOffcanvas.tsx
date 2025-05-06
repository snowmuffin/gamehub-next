"use client"
import React from 'react';
import { Offcanvas, Tab, Nav } from 'react-bootstrap';
import Link from 'next/link';

const AppsOffcanvas = ({ show, handleClose }: { show: boolean; handleClose: () => void }) => {
  return (
    <Offcanvas placement="end" show={show} onHide={handleClose} className="offcanvas-end" id="apps-header-offcanvas">
      <Offcanvas.Header className="border-bottom">
        <h6 className="offcanvas-title" id="offcanvasExampleLabel">Shortcuts</h6>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleClose}></button>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="panel tabs-style2">
          <Tab.Container defaultActiveKey="side1">
            <div className="panel-head">
              <Nav className="d-flex app-header-nav-tabs">
                <Nav.Item className="mb-2 flex-grow-1 text-center">
                  <Nav.Link eventKey="side1" className="" data-bs-toggle="tab" href="#side1">
                    <i className="bi bi-chat me-2 d-inline-block"></i> Chat
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="flex-grow-1 text-center mb-sm-0 mb-2">
                  <Nav.Link eventKey="side2" className="" data-bs-toggle="tab" href="#side2">
                    <i className="bi bi-person-gear me-2 d-inline-block"></i> Settings
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <div className="panel-body">
              <Tab.Content>
                <Tab.Pane eventKey="side1" className="p-0" id="side1">
                  <div className="text-end m-3">
                    <Link href="/pages/email/mail-settings" className="text-primary">Mail Settings</Link>
                  </div>
                  {/* Add more content here as needed */}
                </Tab.Pane>
                <Tab.Pane eventKey="side2" className="p-0" id="side2">
                  {/* Add settings content here */}
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Tab.Container>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default AppsOffcanvas;
