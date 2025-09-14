"use client";
import React, { Fragment, useState } from "react";
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";
import AdminAuthGuard from "@/shared/components/AdminAuthGuard";

import Seo from "@/shared/layout-components/seo";

import UserListPanel from "./components/UserListPanel";
import UserSearchPanel from "./components/UserSearchPanel";
import UserInventoryPanel from "./components/UserInventoryPanel";

const SpaceEngineersAdmin = () => {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <Fragment>
      <Seo title="Space Engineers Admin Panel - Restricted Access" />
      
      <AdminAuthGuard>
        <div className="main-container container-fluid">
          <div className="row">
            <Col xl={12}>
              <Card className="custom-card">
                <div className="top-left"></div>
                <div className="top-right"></div>
                <div className="bottom-left"></div>
                <div className="bottom-right"></div>
                
                <Card.Header>
                  <div className="card-title">
                    <i className="bi bi-rocket-takeoff me-2"></i>
                    Space Engineers Admin Panel
                  </div>
                  <div className="badge bg-warning-transparent">
                    <i className="bi bi-shield-lock me-1"></i>
                    Authorized Access Only
                  </div>
                </Card.Header>

                <Card.Body>
                  <Tab.Container
                    id="admin-tabs"
                    activeKey={activeTab}
                    onSelect={(key) => setActiveTab(key || "users")}
                  >
                    <Nav variant="pills" className="mb-4">
                      <Nav.Item>
                        <Nav.Link eventKey="users">
                          <i className="bi bi-people me-2"></i>
                          User Management
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="search">
                          <i className="bi bi-search me-2"></i>
                          User Search
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="inventory">
                          <i className="bi bi-box me-2"></i>
                          Inventory Lookup
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content>
                      <Tab.Pane eventKey="users">
                        <UserListPanel />
                      </Tab.Pane>
                      <Tab.Pane eventKey="search">
                        <UserSearchPanel />
                      </Tab.Pane>
                      <Tab.Pane eventKey="inventory">
                        <UserInventoryPanel />
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </Card.Body>
              </Card>
            </Col>
          </div>
        </div>
      </AdminAuthGuard>
    </Fragment>
  );
};

export default SpaceEngineersAdmin;
