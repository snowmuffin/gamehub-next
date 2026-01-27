"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";
import { Alert, Breadcrumb, Button, Card, Col, ListGroup, Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

import { getCategoryWithArticles } from "@/shared/api/wiki";
import Seo from "@/shared/layout-components/seo";
import type { RootState } from "@/shared/redux/store";
import type { WikiArticle, WikiCategoryWithArticles } from "@/shared/types/wiki.types";

const WikiCategoryPage = () => {
  const params = useParams();
  const router = useRouter();
  const language = useSelector((state: RootState) => state?.language?.code || "ko");

  const categorySlug = params?.categorySlug as string;

  const [categoryData, setCategoryData] = useState<WikiCategoryWithArticles | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!categorySlug) {
      setError("Invalid category");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getCategoryWithArticles(categorySlug, language);
        setCategoryData(data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch category articles:", err);
        setError("Failed to load articles. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categorySlug, language]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "ko" ? "ko-KR" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };

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

  if (error || !categoryData) {
    return (
      <Fragment>
        <Seo title="Wiki" />
        <Alert variant="danger">{error || "Category not found"}</Alert>
        <Button variant="primary" onClick={() => router.push("/wiki")}>
          {language === "ko" ? "← 위키 홈으로" : "← Back to Wiki"}
        </Button>
      </Fragment>
    );
  }

  const { articles, ...category } = categoryData;

  return (
    <Fragment key={language}>
      <Seo title={`${category.title} - Wiki`} />
      <Row className="justify-content-center">
        <Col xl={12}>
          <Breadcrumb className="mb-4">
            <Breadcrumb.Item linkAs={Link} linkProps={{ href: "/wiki" }}>
              Wiki
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{category.title}</Breadcrumb.Item>
          </Breadcrumb>

          <div className="mb-4">
            <div className="d-flex align-items-center gap-2 mb-2">
              {category.icon && <span style={{ fontSize: "2rem" }}>{category.icon}</span>}
              <h3 className="fw-semibold mb-0">{category.title}</h3>
            </div>
            {category.description && (
              <p className="text-muted">{category.description}</p>
            )}
          </div>

          <Card className="custom-card">
            <Card.Header>
              <Card.Title>
                {language === "ko" ? "아티클 목록" : "Articles"}
                <span className="badge bg-primary-transparent ms-2">{articles.length}</span>
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-0">
              {articles.length > 0 ? (
                <ListGroup variant="flush">
                  {articles.map((article) => (
                    <ListGroup.Item key={article.id} action>
                      <Link
                        href={`/wiki/categories/${category.slug}/articles/${article.slug}`}
                        className="text-decoration-none d-block"
                      >
                        <div className="d-flex justify-content-between align-items-start">
                          <div className="flex-grow-1">
                            <h6 className="mb-1 fw-medium">{article.title}</h6>
                            {article.summary && (
                              <p className="text-muted mb-2 small">{article.summary}</p>
                            )}
                            <div className="text-muted small">
                              {language === "ko" ? "업데이트" : "Updated"}: {formatDate(article.updatedAt)}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              ) : (
                <div className="p-4 text-center text-muted">
                  {language === "ko" ? "등록된 아티클이 없습니다." : "No articles available."}
                </div>
              )}
            </Card.Body>
          </Card>

          <div className="mt-3">
            <Button variant="secondary" size="sm" onClick={() => router.push("/wiki")}>
              {language === "ko" ? "← 위키 홈으로" : "← Back to Wiki"}
            </Button>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default WikiCategoryPage;
