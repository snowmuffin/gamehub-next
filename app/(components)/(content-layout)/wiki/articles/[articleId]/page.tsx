"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";
import { Alert, Badge, Breadcrumb, Button, Card, Col, Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

import { getArticle } from "@/shared/api/wiki";
import MarkdownRenderer from "@/shared/components/MarkdownRenderer";
import Seo from "@/shared/layout-components/seo";
import type { RootState } from "@/shared/redux/store";
import type { WikiArticleWithCategory } from "@/shared/types/wiki.types";

const WikiArticlePage = () => {
  const params = useParams();
  const router = useRouter();
  const language = useSelector((state: RootState) => state?.language?.code || "ko");

  const articleId = Number(params?.articleId);

  const [article, setArticle] = useState<WikiArticleWithCategory | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!articleId || isNaN(articleId)) {
      setError("Invalid article ID");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const article = await getArticle(articleId, language);
        setArticle(article);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch article:", err);
        setError("Failed to load article. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [articleId, language]);

  const getCategoryName = () => {
    if (!article?.category) return "";
    const translation = article.category.translations.find((t) => t.language === language);
    return translation?.name || article.category.translations[0]?.name || "Untitled";
  };

  const getArticleTitle = () => {
    if (!article) return "";
    const translation = article.translations.find((t) => t.language === language);
    return translation?.title || article.translations[0]?.title || "Untitled";
  };

  const getArticleContent = () => {
    if (!article) return "";
    const translation = article.translations.find((t) => t.language === language);
    return translation?.content || article.translations[0]?.content || "";
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "ko" ? "ko-KR" : "en-US", {
      year: "numeric",
      month: "long",
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

  if (error || !article) {
    return (
      <Fragment>
        <Seo title="Wiki" />
        <Alert variant="danger">
          {error || "Article not found"}
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
      <Seo title={getArticleTitle()} />
      <Row className="justify-content-center">
        <Col xl={10} lg={12}>
          <Breadcrumb className="mb-4">
            <Breadcrumb.Item linkAs={Link} href="/wiki">
              Wiki
            </Breadcrumb.Item>
            <Breadcrumb.Item
              linkAs={Link}
              href={`/wiki/categories/${article.category_id}`}
            >
              {getCategoryName()}
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{getArticleTitle()}</Breadcrumb.Item>
          </Breadcrumb>

          <Card className="custom-card">
            <div className="top-left"></div>
            <div className="top-right"></div>
            <div className="bottom-left"></div>
            <div className="bottom-right"></div>
            <Card.Header className="border-bottom">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h3 className="fw-semibold mb-2">{getArticleTitle()}</h3>
                  <div className="d-flex gap-3 text-muted small">
                    <span>
                      <i className="bi bi-clock me-1"></i>
                      {formatDate(article.updated_at)}
                    </span>
                    <span>
                      <i className="bi bi-eye me-1"></i>
                      {article.view_count.toLocaleString()} {language === "ko" ? "조회" : "views"}
                    </span>
                  </div>
                </div>
                <Button variant="outline-secondary" size="sm" onClick={() => router.back()}>
                  {language === "ko" ? "뒤로" : "Back"}
                </Button>
              </div>
            </Card.Header>
            <Card.Body className="p-4 p-md-5">
              <MarkdownRenderer content={getArticleContent()} />
            </Card.Body>
            <Card.Footer className="border-top">
              <div className="d-flex justify-content-between align-items-center">
                <Badge bg="primary-transparent">
                  <i className="bi bi-folder me-1"></i>
                  {getCategoryName()}
                </Badge>
                <div className="text-muted small">
                  {language === "ko" ? "마지막 수정" : "Last updated"}:{" "}
                  {formatDate(article.updated_at)}
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default WikiArticlePage;
