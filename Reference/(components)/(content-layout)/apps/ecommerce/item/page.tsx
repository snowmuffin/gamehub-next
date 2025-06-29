"use client";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Card, Col, Pagination, Row } from "react-bootstrap";
import Seo from "@/shared/layout-components/seo/seo";
//import { fetchResources } from "@/shared/api/apiRequest"; // Import API request module

const Marketplace = () => {
  const [marketItems, setMarketItems] = useState<any[]>([]); // State to store market data
  const [loading, setLoading] = useState<boolean>(true); // Loading state management
  const [page, setPage] = useState<number>(1); // Current page state
  const limit = 10; // Number of items to display per page

  // Fetch market data with API call
  const fetchMarketItems = async () => {
    try {
      setLoading(true); // Start loading state
      //const data = await fetchResources("/trade/getMarketplaceItems", {
      //  page,
      //  limit,
      //}); // API call
      //setMarketItems(data.tableData); // Store fetched data in state
    } catch (error) {
      console.error("[Marketplace] Error fetching market items:", error);
    } finally {
      setLoading(false); // End loading state
    }
  };

  useEffect(() => {
    fetchMarketItems(); // Fetch data whenever page changes
  }, [page]);

  return (
    <Fragment>
      <Seo title={"Marketplace"} />
      <div className="my-4">
        <Row>
          <Col xxl={9} xl={8} lg={8} md={12}>
            <Row>
              {loading ? (
                <p>Loading...</p> // Display during loading
              ) : marketItems.length > 0 ? (
                marketItems.map((item) => (
                  <Col
                    xxl={3}
                    xl={6}
                    lg={6}
                    md={6}
                    sm={12}
                    className=""
                    key={item.id}
                  >
                    <Card className="custom-card product-card">
                      <Card.Body className="text-center">
                        <Link href="/apps/ecommerce/product-details" className="product-image">
                          <img
                            src={`/assets/images/items/${item.indexName}.png`}
                            className="card-img rounded-0 mb-3"
                            alt={item.displayName}
                          />
                        </Link>
                        <p className="product-name fw-medium mb-0">
                          {item.displayName}
                        </p>
                        <p className="product-description fs-11 text-muted mb-2">
                          Seller: {item.nickname}
                        </p>
                        <p className="fs-12 mb-2">
                          <span className="fw-600 text-muted">
                            Quantity: {item.stock}
                          </span>
                        </p>
                        <p className="mb-0 fw-medium fs-18">
                          <span>
                            ${typeof item.price === "number" ? item.price.toFixed(2) : "N/A"} per unit
                          </span>
                        </p>
                        <Button variant="primary" className="mt-2">
                          Buy Now
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <p>No items available in the marketplace.</p> // Display when no data available
              )}
            </Row>
          </Col>
        </Row>
        <Pagination className="pagination justify-content-end">
          <Pagination.Item
            disabled={page === 1}
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          >
            Previous
          </Pagination.Item>
          <Pagination.Item active>{page}</Pagination.Item>
          <Pagination.Item onClick={() => setPage((prev) => prev + 1)}>
            Next
          </Pagination.Item>
        </Pagination>
      </div>
    </Fragment>
  );
};

export default Marketplace;
