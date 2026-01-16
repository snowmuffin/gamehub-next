"use client";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

import type { CreateCategoryDto, UpdateCategoryDto, WikiCategory } from "@/shared/types/wiki.types";

interface CategoryEditorProps {
  category?: WikiCategory | null;
  onSave: (data: CreateCategoryDto | UpdateCategoryDto) => Promise<void>;
  onCancel: () => void;
}

const CategoryEditor: React.FC<CategoryEditorProps> = ({ category, onSave, onCancel }) => {
  const [slug, setSlug] = useState(category?.slug || "");
  const [icon, setIcon] = useState(category?.icon || "");
  const [titleKo, setTitleKo] = useState(category?.title || "");
  const [titleEn, setTitleEn] = useState("");
  const [descKo, setDescKo] = useState(category?.description || "");
  const [descEn, setDescEn] = useState("");
  const [displayOrder, setDisplayOrder] = useState(category?.displayOrder || 0);
  const [isPublished, setIsPublished] = useState(category?.isPublished ?? true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!slug.trim()) {
      setError("Slug is required");
      return;
    }

    if (!titleKo.trim() || !titleEn.trim()) {
      setError("Category titles are required for both languages");
      return;
    }

    const data: CreateCategoryDto | UpdateCategoryDto = {
      slug: slug.trim(),
      icon: icon.trim() || undefined,
      displayOrder,
      isPublished,
      ko: {
        title: titleKo.trim(),
        description: descKo.trim() || undefined
      },
      en: {
        title: titleEn.trim(),
        description: descEn.trim() || undefined
      }
    };

    try {
      setSaving(true);
      setError(null);
      await onSave(data);
    } catch (err: any) {
      setError(err.message || "Failed to save category");
      setSaving(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <div className="alert alert-danger">{error}</div>}

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group>
            <Form.Label>
              Slug <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="server-overview"
              required
              disabled={!!category}
            />
            <Form.Text className="text-muted">
              URL-friendly identifier (e.g., server-overview, commands)
            </Form.Text>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Icon</Form.Label>
            <Form.Control
              type="text"
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
              placeholder="🖥️"
            />
            <Form.Text className="text-muted">Emoji icon (optional)</Form.Text>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group>
            <Form.Label>
              Title (Korean) <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              value={titleKo}
              onChange={(e) => setTitleKo(e.target.value)}
              placeholder="서버 개요"
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label>
              Title (English) <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              value={titleEn}
              onChange={(e) => setTitleEn(e.target.value)}
              placeholder="Server Overview"
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Description (Korean)</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              value={descKo}
              onChange={(e) => setDescKo(e.target.value)}
              placeholder="서버의 기본 정보와 특징"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Description (English)</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              value={descEn}
              onChange={(e) => setDescEn(e.target.value)}
              placeholder="Basic server information and features"
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Display Order</Form.Label>
            <Form.Control
              type="number"
              value={displayOrder}
              onChange={(e) => setDisplayOrder(Number(e.target.value))}
            />
            <Form.Text className="text-muted">Lower numbers appear first</Form.Text>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Check
              type="checkbox"
              label="Published (visible to users)"
              checked={isPublished}
              onChange={(e) => setIsPublished(e.target.checked)}
              className="mt-4"
            />
          </Form.Group>
        </Col>
      </Row>

      <div className="d-flex justify-content-end gap-2">
        <Button variant="secondary" onClick={onCancel} disabled={saving}>
          Cancel
        </Button>
        <Button variant="primary" type="submit" disabled={saving}>
          {saving ? "Saving..." : "Save"}
        </Button>
      </div>
    </Form>
  );
};

export default CategoryEditor;
