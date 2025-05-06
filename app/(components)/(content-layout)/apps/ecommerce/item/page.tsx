"use client";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Card, Col, Pagination, Row } from "react-bootstrap";
import Seo from "@/shared/layout-components/seo/seo";
//import { fetchResources } from "@/shared/api/apiRequest"; // API 요청 모듈 가져오기

const Marketplace = () => {
  const [marketItems, setMarketItems] = useState<any[]>([]); // 마켓 데이터를 저장할 상태
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태 관리
  const [page, setPage] = useState<number>(1); // 현재 페이지 상태
  const limit = 10; // 한 페이지에 표시할 항목 수

  // API 호출로 마켓 데이터 가져오기
  const fetchMarketItems = async () => {
    try {
      setLoading(true); // 로딩 상태 시작
      //const data = await fetchResources("/trade/getMarketplaceItems", {
      //  page,
      //  limit,
      //}); // API 호출
      //setMarketItems(data.tableData); // 가져온 데이터를 상태에 저장
    } catch (error) {
      console.error("[Marketplace] Error fetching market items:", error);
    } finally {
      setLoading(false); // 로딩 상태 종료
    }
  };

  useEffect(() => {
    fetchMarketItems(); // 페이지가 변경될 때마다 데이터 가져오기
  }, [page]);

  return (
    <Fragment>
      <Seo title={"Marketplace"} />
      <div className="my-4">
        <Row>
          <Col xxl={9} xl={8} lg={8} md={12}>
            <Row>
              {loading ? (
                <p>Loading...</p> // 로딩 중일 때 표시
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
                <p>No items available in the marketplace.</p> // 데이터가 없을 때 표시
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
