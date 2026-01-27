"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";
import { Alert, Breadcrumb, Card, Col, ListGroup, Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

import { getCategoryWithArticles } from "@/shared/api/wiki";
import Seo from "@/shared/layout-components/seo";
import type { RootState } from "@/shared/redux/store";
import type { WikiCategoryWithArticles } from "@/shared/types/wiki.types";

const WikiCategoryPage = () => {
  const params = useParams();
  const categorySlug = params.categorySlug as string;
  const language = useSelector((state: RootState) => state?.language?.code || "ko");
  
  const [category, setCategory] = useState<WikiCategoryWithArticles | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        setLoading(true);
        const data = await getCategoryWithArticles(categorySlug, language);
        setCategory(data);
        setError(null);
      } catch (err: any) {
        console.error("Failed to fetch category:", err);
        if (err.response?.status === 404) {
          setError("Category not found");
        } else {
          setError("Failed to load category");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [categorySlug, language]);

  return (
    <Fragment>
      <Seo title={category?.title || "Wiki Category"} />

      <div className="main-container container-fluid">
        {/* Breadcrumb */}
        <div className="d-flex align-items-center justify-content-between page-header-breadcrumb flex-wrap gap-2 mb-4">
          <div>
            <nav>
              <ol className="breadcrumb mb-1">
                <li className="breadcrumb-item">
                  <Link href="/dashboard/gaming">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="/wiki">Wiki</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {category?.title || categorySlug}
                </li>
              </ol>
            </nav>
            <h1 className="page-title fw-medium fs-18 mb-0">
              {category?.icon && <span className="me-2">{category.icon}</span>}
              {category?.title || "Loading..."}
            </h1>
          </div>
        </div>

        <Row>
          <Col xl={12}>
            {loading ? (
              <Card className="custom-card">
                <Card.Body className="text-center py-5">
                  <Spinner animation="border" variant="primary" />
                  <p className="mt-3 text-muted">
                    {language === "ko" ? "로딩 중..." : "Loading..."}
                  </p>
                </Card.Body>
              </Card>
            ) : error ? (
              <Alert variant="danger">
                <i className="bi bi-exclamation-triangle me-2"></i>
                {error}
                <div className="mt-3">
                  <Link href="/wiki" className="btn btn-primary">
                    <i className="bi bi-arrow-left me-2"></i>
                    {language === "ko" ? "위키 홈으로" : "Back to Wiki"}
                  </Link>
                </div>
              </Alert>
            ) : category ? (
              <Card className="custom-card">
                <Card.Header>
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <h4 className="mb-1">
                        {category.icon && <span className="me-2">{category.icon}</span>}
                        {category.title}
                      </h4>
                      {category.description && (
                        <p className="text-muted mb-0">{category.description}</p>
                      )}
                    </div>
                  </div>
                </Card.Header>
                <Card.Body>
                  {category.articles && category.articles.length > 0 ? (
                    <ListGroup variant="flush">
                      {category.articles
                        .sort((a, b) => a.displayOrder - b.displayOrder)
                        .map((article) => (
                          <ListGroup.Item
                            key={article.id}
                            action
                            as={Link}
                            href={`/wiki/${categorySlug}/${article.slug}`}
                            className="d-flex align-items-center justify-content-between"
                          >
                            <div>
                              <h6 className="mb-1">{article.title}</h6>
                              {article.summary && (
                                <p className="text-muted mb-0 small">{article.summary}</p>
                              )}
                            </div>
                            <i className="bi bi-chevron-right text-muted"></i>
                          </ListGroup.Item>
                        ))}
                    </ListGroup>
                  ) : (
                    <Alert variant="info">
                      <i className="bi bi-info-circle me-2"></i>
                      {language === "ko"
                        ? "이 카테고리에 아직 문서가 없습니다."
                        : "No articles in this category yet."}
                    </Alert>
                  )}
                </Card.Body>
              </Card>
            ) : null}
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default WikiCategoryPage;
