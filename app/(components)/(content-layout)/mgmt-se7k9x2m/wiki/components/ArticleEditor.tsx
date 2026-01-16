"use client";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Button, Col, Form, Nav, Row, Tab } from "react-bootstrap";

import type {
  CreateArticleDto,
  UpdateArticleDto,
  WikiArticle,
  WikiCategory
} from "@/shared/types/wiki.types";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

interface ArticleEditorProps {
  article?: WikiArticle | null;
  categoryId?: number | null;
  categories: WikiCategory[];
  onSave: (data: CreateArticleDto | UpdateArticleDto) => Promise<void>;
  onCancel: () => void;
}

const ArticleEditor: React.FC<ArticleEditorProps> = ({
  article,
  categoryId,
  categories,
  onSave,
  onCancel
}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    categoryId || categories[0]?.id || 0
  );
  const [slug, setSlug] = useState(article?.slug || "");
  const [titleKo, setTitleKo] = useState(article?.title || "");
  const [titleEn, setTitleEn] = useState("");
  const [contentKo, setContentKo] = useState(article?.content || "");
  const [contentEn, setContentEn] = useState("");
  const [summaryKo, setSummaryKo] = useState(article?.summary || "");
  const [summaryEn, setSummaryEn] = useState("");
  const [displayOrder, setDisplayOrder] = useState(article?.displayOrder || 0);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!slug.trim()) {
      setError("Slug is required");
      return;
    }

    if (!titleKo.trim() || !titleEn.trim()) {
      setError("Article titles are required for both languages");
      return;
    }

    if (!contentKo.trim() || !contentEn.trim()) {
      setError("Article content is required for both languages");
      return;
    }

    if (!selectedCategoryId) {
      setError("Please select a category");
      return;
    }

    const data: CreateArticleDto | UpdateArticleDto = {
      categoryId: selectedCategoryId,
      slug: slug.trim(),
      displayOrder,
      ko: {
        title: titleKo.trim(),
        content: contentKo.trim(),
        summary: summaryKo.trim() || undefined
      },
      en: {
        title: titleEn.trim(),
        content: contentEn.trim(),
        summary: summaryEn.trim() || undefined
      }
    };

    try {
      setSaving(true);
      setError(null);
      await onSave(data);
    } catch (err: any) {
      setError(err.message || "Failed to save article");
      setSaving(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <div className="alert alert-danger">{error}</div>}

      <Row className="mb-3">
        <Col md={4}>
          <Form.Group>
            <Form.Label>
              Category <span className="text-danger">*</span>
            </Form.Label>
            <Form.Select
              value={selectedCategoryId}
              onChange={(e) => setSelectedCategoryId(Number(e.target.value))}
              required
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.title}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Label>
              Slug <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="getting-started"
              required
              disabled={!!article}
            />
            <Form.Text className="text-muted">URL identifier</Form.Text>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Label>Display Order</Form.Label>
            <Form.Control
              type="number"
              value={displayOrder}
              onChange={(e) => setDisplayOrder(Number(e.target.value))}
            />
          </Form.Group>
        </Col>
      </Row>

      <Tab.Container defaultActiveKey="ko">
        <Nav variant="tabs" className="mb-3">
          <Nav.Item>
            <Nav.Link eventKey="ko">한국어 (Korean)</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="en">English</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="ko">
            <Form.Group className="mb-3">
              <Form.Label>
                Title (Korean) <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                value={titleKo}
                onChange={(e) => setTitleKo(e.target.value)}
                placeholder="아이템 관련 명령어"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Summary (Korean)</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                value={summaryKo}
                onChange={(e) => setSummaryKo(e.target.value)}
                placeholder="간단한 요약 (선택사항)"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                Content (Korean) <span className="text-danger">*</span>
              </Form.Label>
              <div data-color-mode="light">
                <MDEditor value={contentKo} onChange={(val) => setContentKo(val || "")} height={400} />
              </div>
            </Form.Group>
          </Tab.Pane>

          <Tab.Pane eventKey="en">
            <Form.Group className="mb-3">
              <Form.Label>
                Title (English) <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                value={titleEn}
                onChange={(e) => setTitleEn(e.target.value)}
                placeholder="Item Commands"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Summary (English)</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                value={summaryEn}
                onChange={(e) => setSummaryEn(e.target.value)}
                placeholder="Brief summary (optional)"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                Content (English) <span className="text-danger">*</span>
              </Form.Label>
              <div data-color-mode="light">
                <MDEditor value={contentEn} onChange={(val) => setContentEn(val || "")} height={400} />
              </div>
            </Form.Group>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>

      <div className="d-flex justify-content-end gap-2 mt-4">
        <Button variant="secondary" onClick={onCancel} disabled={saving}>
          Cancel
        </Button>
        <Button variant="primary" type="submit" disabled={saving}>
          {saving ? "Saving..." : "Save Article"}
        </Button>
      </div>
    </Form>
  );
};

export default ArticleEditor;
