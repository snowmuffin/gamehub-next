"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";
import { Alert, Breadcrumb, Button, Card, Col, Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

import { getCategoryWithArticles } from "@/shared/api/wiki";
import MarkdownRenderer from "@/shared/components/MarkdownRenderer";
import Seo from "@/shared/layout-components/seo";
import type { RootState } from "@/shared/redux/store";
import type { WikiArticle } from "@/shared/types/wiki.types";

const WikiArticlePage = () => {
  const params = useParams();
  const categorySlug = params.categorySlug as string;
  const articleSlug = params.articleSlug as string;
  const language = useSelector((state: RootState) => state?.language?.code || "ko");
  
  const [article, setArticle] = useState<WikiArticle | null>(null);
  const [categoryTitle, setCategoryTitle] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const category = await getCategoryWithArticles(categorySlug, language);
        setCategoryTitle(category.title);
        
        const foundArticle = category.articles?.find((a) => a.slug === articleSlug);
        if (!foundArticle) {
          setError("Article not found");
        } else {
          setArticle(foundArticle);
          setError(null);
        }
      } catch (err: any) {
        console.error("Failed to fetch article:", err);
        if (err.response?.status === 404) {
          setError("Category not found");
        } else {
          setError("Failed to load article");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [categorySlug, articleSlug, language]);

  return (
    <Fragment key={language}>
      <Seo title={article?.title || "Wiki Article"} />

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
                <li className="breadcrumb-item">
                  <Link href={`/wiki/${categorySlug}`}>
                    {categoryTitle || categorySlug}
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {article?.title || articleSlug}
                </li>
              </ol>
            </nav>
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
                  <Link href={`/wiki/${categorySlug}`} className="btn btn-primary me-2">
                    <i className="bi bi-arrow-left me-2"></i>
                    {language === "ko" ? "카테고리로" : "Back to Category"}
                  </Link>
                  <Link href="/wiki" className="btn btn-outline-primary">
                    <i className="bi bi-house me-2"></i>
                    {language === "ko" ? "위키 홈으로" : "Wiki Home"}
                  </Link>
                </div>
              </Alert>
            ) : article ? (
              <Fragment>
                <Card className="custom-card">
                  <Card.Header>
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h1 className="mb-1 h3">{article.title}</h1>
                        {article.summary && (
                          <p className="text-muted mb-0">{article.summary}</p>
                        )}
                      </div>
                      <Link href={`/wiki/${categorySlug}`}>
                        <Button variant="outline-secondary" size="sm">
                          <i className="bi bi-arrow-left me-2"></i>
                          {language === "ko" ? "목록으로" : "Back"}
                        </Button>
                      </Link>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <div className="wiki-content">
                      <MarkdownRenderer content={article.content || ""} />
                    </div>
                  </Card.Body>
                  <Card.Footer className="text-muted small">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <i className="bi bi-calendar me-2"></i>
                      </div>
                      <Link href={`/wiki/${categorySlug}`}>
                        <Button variant="link" size="sm">
                          <i className="bi bi-arrow-left me-1"></i>
                          {categoryTitle}
                        </Button>
                      </Link>
                    </div>
                  </Card.Footer>
                </Card>
              </Fragment>
            ) : null}
          </Col>
        </Row>
      </div>

      <style jsx global>{`
        .wiki-content {
          font-size: 16px;
          line-height: 1.7;
        }

        .wiki-content h1 {
          font-size: 2em;
          margin-top: 1.5em;
          margin-bottom: 0.5em;
          font-weight: 600;
        }

        .wiki-content h2 {
          font-size: 1.6em;
          margin-top: 1.3em;
          margin-bottom: 0.5em;
          font-weight: 600;
          border-bottom: 1px solid #e5e5e5;
          padding-bottom: 0.3em;
        }

        .wiki-content h3 {
          font-size: 1.3em;
          margin-top: 1.2em;
          margin-bottom: 0.5em;
          font-weight: 600;
        }

        .wiki-content p {
          margin-bottom: 1em;
        }

        .wiki-content ul,
        .wiki-content ol {
          margin-bottom: 1em;
          padding-left: 2em;
        }

        .wiki-content li {
          margin-bottom: 0.3em;
        }

        .wiki-content code {
          background-color: #f5f5f5;
          padding: 2px 6px;
          border-radius: 3px;
          font-size: 0.9em;
        }

        .wiki-content pre {
          background-color: #f5f5f5;
          padding: 1em;
          border-radius: 6px;
          overflow-x: auto;
          margin-bottom: 1em;
        }

        .wiki-content pre code {
          background-color: transparent;
          padding: 0;
        }

        .wiki-content blockquote {
          border-left: 4px solid #ddd;
          padding-left: 1em;
          margin-left: 0;
          color: #666;
        }

        .wiki-content table {
          width: 100%;
          margin-bottom: 1em;
          border-collapse: collapse;
        }

        .wiki-content table th,
        .wiki-content table td {
          border: 1px solid #ddd;
          padding: 8px 12px;
        }

        .wiki-content table th {
          background-color: #f5f5f5;
          font-weight: 600;
        }

        .wiki-content img {
          max-width: 100%;
          height: auto;
          margin: 1em 0;
          border-radius: 6px;
        }

        .wiki-content a {
          color: #0066cc;
          text-decoration: none;
        }

        .wiki-content a:hover {
          text-decoration: underline;
        }
      `}</style>
    </Fragment>
  );
};

export default WikiArticlePage;
