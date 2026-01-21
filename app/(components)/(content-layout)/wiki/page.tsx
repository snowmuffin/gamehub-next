"use client";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Card, Col, Row, Spinner, Alert } from "react-bootstrap";
import { useSelector } from "react-redux";

import { getCategories } from "@/shared/api/wiki";
import Seo from "@/shared/layout-components/seo";
import type { RootState } from "@/shared/redux/store";
import type { WikiCategory } from "@/shared/types/wiki.types";

const WikiIndexPage = () => {
  const language = useSelector((state: RootState) => state?.language?.code || "ko");
  const [categories, setCategories] = useState<WikiCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const categories = await getCategories(language);
        setCategories(categories);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch wiki categories:", err);
        setError("Failed to load wiki categories. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [language]);

  if (loading) {
    return (
      <Fragment>
        <Seo title="Wiki" />
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
          <Spinner animation="border" variant="primary" />
        </div>
      </Fragment>
    );
  }

  if (error) {
    return (
      <Fragment>
        <Seo title="Wiki" />
        <Alert variant="danger">{error}</Alert>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Seo title="Wiki" />
      <Row className="justify-content-center">
        <Col xl={12}>
          <div className="mb-4">
            <h3 className="fw-semibold mb-2">Wiki</h3>
            <p className="text-muted">
              {language === "ko"
                ? "서버 가이드, 명령어, 규칙 등을 확인하세요."
                : "Check server guides, commands, rules and more."}
            </p>
          </div>

          <Row className="g-4">
            {categories.map((category) => (
              <Col key={category.id} xl={4} lg={6} md={6} sm={12}>
                <Link
                  href={`/wiki/${category.slug}`}
                  className="text-decoration-none"
                >
                  <Card className="custom-card h-100 hover-card">
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div className="d-flex align-items-center gap-2">
                          {category.icon && <span style={{ fontSize: "1.5rem" }}>{category.icon}</span>}
                          <h5 className="fw-medium mb-0">{category.title}</h5>
                        </div>
                      </div>
                      {category.description && (
                        <p className="text-muted mb-0">{category.description}</p>
                      )}
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>

          {categories.length === 0 && (
            <Card className="custom-card">
              <Card.Body>
                <p className="text-muted text-center mb-0">
                  {language === "ko" ? "등록된 카테고리가 없습니다." : "No categories available."}
                </p>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Fragment>
  );
};

export default WikiIndexPage;
