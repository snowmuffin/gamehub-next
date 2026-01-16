"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";
import { Alert, Breadcrumb, Button, Card, Col, ListGroup, Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

import { getCategoryArticles } from "@/shared/api/wiki";
import Seo from "@/shared/layout-components/seo";
import type { RootState } from "@/shared/redux/store";
import type { WikiArticle, WikiCategory } from "@/shared/types/wiki.types";

const WikiCategoryPage = () => {
  const params = useParams();
  const router = useRouter();
  const language = useSelector((state: RootState) => state.language.code);

  const categoryId = Number(params?.categoryId);

  const [category, setCategory] = useState<WikiCategory | null>(null);
  const [articles, setArticles] = useState<WikiArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!categoryId || isNaN(categoryId)) {
      setError("Invalid category ID");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getCategoryArticles(categoryId, language);
        setCategory(response.category);
        setArticles(response.articles);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch category articles:", err);
        setError("Failed to load articles. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId, language]);

  const getCategoryName = (cat: WikiCategory) => {
    const translation = cat.translations.find((t) => t.language === language);
    return translation?.name || cat.translations[0]?.name || "Untitled";
  };

  const getCategoryDescription = (cat: WikiCategory) => {
    const translation = cat.translations.find((t) => t.language === language);
    return translation?.description || cat.translations[0]?.description;
  };

  const getArticleTitle = (article: WikiArticle) => {
    const translation = article.translations.find((t) => t.language === language);
    return translation?.title || article.translations[0]?.title || "Untitled";
  };

  const getArticleSummary = (article: WikiArticle) => {
    const translation = article.translations.find((t) => t.language === language);
    return translation?.summary || article.translations[0]?.summary;
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

  if (error || !category) {
    return (
      <Fragment>
        <Seo title="Wiki" />
        <Alert variant="danger">
          {error || "Category not found"}
          <div className="mt-3">
            <Button variant="primary" onClick={() => router.push("/wiki")}>
              {language === "ko" ? "Wiki 홈으로" : "Back to Wiki"}
            </Button>
          </div>
        </Alert>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Seo title={getCategoryName(category)} />
      <Row className="justify-content-center">
        <Col xl={12}>
          <Breadcrumb className="mb-4">
            <Breadcrumb.Item linkAs={Link} href="/wiki">
              Wiki
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{getCategoryName(category)}</Breadcrumb.Item>
          </Breadcrumb>

          <Card className="custom-card">
            <div className="top-left"></div>
            <div className="top-right"></div>
            <div className="bottom-left"></div>
            <div className="bottom-right"></div>
            <Card.Header>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h4 className="fw-semibold mb-1">{getCategoryName(category)}</h4>
                  {getCategoryDescription(category) && (
                    <p className="text-muted mb-0">{getCategoryDescription(category)}</p>
                  )}
                </div>
                <Button variant="outline-secondary" size="sm" onClick={() => router.back()}>
                  {language === "ko" ? "뒤로" : "Back"}
                </Button>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              {articles.length > 0 ? (
                <ListGroup variant="flush">
                  {articles.map((article) => (
                    <ListGroup.Item
                      key={article.id}
                      action
                      as={Link}
                      href={`/wiki/articles/${article.id}`}
                      className="d-flex justify-content-between align-items-start"
                    >
                      <div className="flex-grow-1">
                        <h6 className="mb-1 fw-medium">{getArticleTitle(article)}</h6>
                        {getArticleSummary(article) && (
                          <p className="text-muted mb-0 small">{getArticleSummary(article)}</p>
                        )}
                      </div>
                      <div className="ms-3 text-muted small">
                        <i className="bi bi-eye me-1"></i>
                        {article.view_count}
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              ) : (
                <div className="p-5 text-center text-muted">
                  {language === "ko" ? "등록된 아티클이 없습니다." : "No articles available."}
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default WikiCategoryPage;
