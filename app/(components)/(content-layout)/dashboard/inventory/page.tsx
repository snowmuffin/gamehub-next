"use client";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";

import { apiRequest } from "@/shared/api/request"; // Import API request utility
import Seo from "@/shared/layout-components/seo";
import { InventoryItem } from "@/shared/redux/inventory";

const Inventory = () => {
  const [products, setProducts] = useState<InventoryItem[]>([]); // State to store API data
  const [loading, setLoading] = useState<boolean>(true); // Loading state management

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

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        // Successfully copied - could add a toast notification here instead
      },
      (err) => {
        // Failed to copy - could add error handling here instead
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
                <p>Loading...</p> // Displayed while loading
              ) : products.length > 0 ? (
                products.map((product) => (
                  <Col xxl={3} xl={6} lg={6} md={6} sm={12} className="" key={product.indexName}>
                    <Card className="custom-card shadow-none my-4">
                      <div className="top-left"></div>
                      <div className="top-right"></div>
                      <div className="bottom-left"></div>
                      <div className="bottom-right"></div>
                      <Card.Body className="p-5">
                        <Link href="">
                          <Image
                            src={product.icons[0] || `/assets/images/items/${product.indexName}.png`}
                            className="card-img rounded-0 mb-3"
                            alt={product.displayName}
                            width={200}
                            height={200}
                          />
                          <span className="badge bg-secondary top-left-badge">
                            {product.rarity}
                          </span>
                        </Link>
                        <p className="product-name fw-medium mb-0">{product.displayName}</p>
                        <p className="product-description fs-11 text-muted mb-2">
                          {product.description}
                        </p>

                        <span className="fs-11 text-success fw-medium mb-2">
                          Available Quantity: {product.quantity}
                        </span>
                        <Button
                          variant="primary"
                          onClick={() =>
                            copyToClipboard(`!cmd downloaditem ${product.indexName} 1`)
                          }
                        >
                          Download
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <p>No products available.</p> // Displayed when no data
              )}
            </Row>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Inventory;
