"use client";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Card, Col, Row, Button, Toast, ToastContainer } from "react-bootstrap";

import { apiRequest } from "@/shared/api/request"; // Import API request utility
import Seo from "@/shared/layout-components/seo";
import { InventoryItem } from "@/shared/redux/inventory";

const Inventory = () => {
  const [products, setProducts] = useState<InventoryItem[]>([]); // State to store API data
  const [loading, setLoading] = useState<boolean>(true); // Loading state management
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await apiRequest.get("/space-engineers/item"); // Call NestJS endpoint
      setProducts(response.data as InventoryItem[]);
    } catch (error) {
      // Error handling without console or alert
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, itemName: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setToastMessage(`Command copied! Paste it in the in-game chat to download "${itemName}"`);
        setShowToast(true);
      },
      (err) => {
        setToastMessage("Failed to copy command. Please try again.");
        setShowToast(true);
      }
    );
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Fragment>
      <Seo title={"Inventory"} />
      <div className="my-4">
        <Row>
          <Col xxl={9} xl={8} lg={8} md={12}>
            <Row>
              {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : products.length > 0 ? (
                products.map((product) => (
                  <Col xxl={3} xl={4} lg={4} md={6} sm={12} key={product.indexName}>
                    <Card className="custom-card shadow-sm my-3 h-100 border-0 hover-card">
                      <Card.Body className="d-flex flex-column p-3">
                        {/* Image Container with Fixed Aspect Ratio */}
                        <div 
                          className="position-relative mb-3 bg-light rounded d-flex align-items-center justify-content-center"
                          style={{ 
                            height: '180px',
                            overflow: 'hidden'
                          }}
                        >
                          <img
                            src={product.icons[0] || `/assets/images/items/${product.indexName}.png`}
                            alt={product.displayName}
                            style={{
                              maxWidth: '100%',
                              maxHeight: '100%',
                              objectFit: 'contain'
                            }}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = `/assets/images/items/${product.indexName}.png`;
                            }}
                          />
                          {product.rarity && typeof product.rarity === 'string' && (
                            <span 
                              className="badge position-absolute top-0 start-0 m-2"
                              style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                fontSize: '0.7rem'
                              }}
                            >
                              {product.rarity}
                            </span>
                          )}
                        </div>

                        {/* Product Info */}
                        <div className="flex-grow-1 d-flex flex-column">
                          <h6 className="mb-2 text-truncate" title={product.displayName}>
                            {product.displayName}
                          </h6>
                          
                          <p 
                            className="text-muted small mb-2 flex-grow-1"
                            style={{
                              fontSize: '0.8rem',
                              lineHeight: '1.4',
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden'
                            }}
                          >
                            {product.description || 'No description available'}
                          </p>

                          {/* Bottom Section */}
                          <div className="mt-auto">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                              <span className="badge bg-success-transparent">
                                Qty: {product.quantity}
                              </span>
                            </div>
                            
                            <Button
                              variant="primary"
                              size="sm"
                              className="w-100"
                              onClick={() =>
                                copyToClipboard(
                                  `!cmd downloaditem ${product.indexName} 1`,
                                  product.displayName
                                )
                              }
                            >
                              <i className="bi bi-download me-1"></i>
                              Download
                            </Button>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <div className="text-center py-5">
                  <i className="bi bi-inbox fs-1 text-muted"></i>
                  <p className="text-muted mt-3">No products available</p>
                </div>
              )}
            </Row>
          </Col>
        </Row>
      </div>

      {/* Toast Notification */}
      <ToastContainer position="bottom-end" className="p-3" style={{ zIndex: 9999 }}>
        <Toast 
          show={showToast} 
          onClose={() => setShowToast(false)} 
          delay={5000} 
          autohide
          bg="success"
        >
          <Toast.Header>
            <i className="bi bi-clipboard-check me-2"></i>
            <strong className="me-auto">Command Copied!</strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            {toastMessage}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </Fragment>
  );
};

export default Inventory;
