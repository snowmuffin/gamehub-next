"use client";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import Seo from "@/shared/layout-components/seo/seo";
import { apiRequest } from "@/shared/api/request"; // Import API request utility

const Inventory = () => {
  const [products, setProducts] = useState<any[]>([]); // API 데이터를 저장할 상태
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태 관리

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await apiRequest.get("/space-engineers/item"); // NestJS 엔드포인트 호출
      setProducts(response.data as any[]);
    } catch (error) {
      console.error("Error fetching products:", error);
      alert("Failed to load items.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        console.log(`[Clipboard] Copied: ${text}`);
        alert("Copied to clipboard!");
      },
      (err) => {
        console.error("[Clipboard] Failed to copy:", err);
        alert("Failed to copy to clipboard.");
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
                <p>Loading...</p> // 로딩 중일 때 표시
              ) : products.length > 0 ? (
                products.map((product) => (
                  <Col
                    xxl={3}
                    xl={6}
                    lg={6}
                    md={6}
                    sm={12}
                    className=""
                    key={product.indexName}
                  >
                    <Card className="custom-card shadow-none my-4">
                      <div className="top-left"></div>
                      <div className="top-right"></div>
                      <div className="bottom-left"></div>
                      <div className="bottom-right"></div>
                      <Card.Body className="p-5">
                        <Link href="">
                          <img
                            src={`/assets/images/items/${
                              product.icon
                                ? `${product.icon}.png`
                                : `${product.indexName}.png`
                            }`} // Add .svg if icon is provided
                            className="card-img rounded-0 mb-3"
                            alt={product.displayName}
                          />
                          <span className="badge bg-secondary top-left-badge">
                            {product.rarity}
                          </span>
                        </Link>
                        <p className="product-name fw-medium mb-0">
                          {product.displayName}
                        </p>
                        <p className="product-description fs-11 text-muted mb-2">
                          {product.description}
                        </p>

                        <span className="fs-11 text-success fw-medium mb-2">
                          Available Quantity: {product.quantity}
                        </span>
                        <Button
                          variant="primary"
                          onClick={() =>
                            copyToClipboard(
                              `!cmd downloaditem ${product.indexName} 1`
                            )
                          }
                        >
                          Download
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <p>No products available.</p> // 데이터가 없을 때 표시
              )}
            </Row>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Inventory;
