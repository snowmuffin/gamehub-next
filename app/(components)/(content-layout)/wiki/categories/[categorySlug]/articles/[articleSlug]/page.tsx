"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";
import { Alert, Badge, Breadcrumb, Button, Card, Col, Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

import { getArticleDetail } from "@/shared/api/wiki";
import MarkdownRenderer from "@/shared/components/MarkdownRenderer";
import Seo from "@/shared/layout-components/seo";
import type { RootState } from "@/shared/redux/store";
import type { WikiArticleDetail } from "@/shared/types/wiki.types";

const WikiArticlePage = () => {
  const params = useParams();
  const router = useRouter();
  const language = useSelector((state: RootState) => state?.language?.code || "ko");

  const categorySlug = params?.categorySlug as string;
  const articleSlug = params?.articleSlug as string;

  const [article, setArticle] = useState<WikiArticleDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!categorySlug || !articleSlug) {
      setError("Invalid article");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getArticleDetail(categorySlug, articleSlug, language);
        setArticle(data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch article:", err);
        setError("Failed to load article. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categorySlug, articleSlug, language]);

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
        <Alert variant="danger">{error || "Article not found"}</Alert>
        <Button variant="primary" onClick={() => router.back()}>
          {language === "ko" ? "← 뒤로 가기" : "← Go Back"}
        </Button>
      </Fragment>
    );
  }

  return (
    <Fragment key={language}>
      <Seo title={`${article.title} - Wiki`} />
      <Row className="justify-content-center">
        <Col xl={10}>
          <Breadcrumb className="mb-4">
            <Breadcrumb.Item linkAs={Link} linkProps={{ href: "/wiki" }}>
              Wiki
            </Breadcrumb.Item>
            <Breadcrumb.Item
              linkAs={Link}
              linkProps={{ href: `/wiki/categories/${article.category.slug}` }}
            >
              {article.category.title}
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{article.title}</Breadcrumb.Item>
          </Breadcrumb>

          <Card className="custom-card">
            <Card.Header className="border-bottom">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h3 className="mb-2 fw-semibold">{article.title}</h3>
                  {article.summary && (
                    <p className="text-muted mb-2">{article.summary}</p>
                  )}
                  <div className="d-flex gap-2 flex-wrap">
                    <Badge bg="primary-transparent">
                      {article.category.title}
                    </Badge>
                  </div>
                </div>
              </div>
            </Card.Header>
            <Card.Body>
              <MarkdownRenderer content={article.content || ""} />
            </Card.Body>
          </Card>

          <div className="mt-3 d-flex gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => router.push(`/wiki/categories/${categorySlug}`)}
            >
              {language === "ko" ? "← 목록으로" : "← Back to List"}
            </Button>
            <Button variant="outline-secondary" size="sm" onClick={() => router.push("/wiki")}>
              {language === "ko" ? "위키 홈" : "Wiki Home"}
            </Button>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default WikiArticlePage;
