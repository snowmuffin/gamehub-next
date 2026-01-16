"use client";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

import type { CreateCategoryDto, UpdateCategoryDto, WikiCategoryWithCount } from "@/shared/types/wiki.types";

interface CategoryEditorProps {
  category?: WikiCategoryWithCount | null;
  onSave: (data: CreateCategoryDto | UpdateCategoryDto) => Promise<void>;
  onCancel: () => void;
}

const CategoryEditor: React.FC<CategoryEditorProps> = ({ category, onSave, onCancel }) => {
  const [nameKo, setNameKo] = useState(
    category?.translations.find((t) => t.language === "ko")?.name || ""
  );
  const [nameEn, setNameEn] = useState(
    category?.translations.find((t) => t.language === "en")?.name || ""
  );
  const [descKo, setDescKo] = useState(
    category?.translations.find((t) => t.language === "ko")?.description || ""
  );
  const [descEn, setDescEn] = useState(
    category?.translations.find((t) => t.language === "en")?.description || ""
  );
  const [displayOrder, setDisplayOrder] = useState(category?.display_order || 0);
  const [isActive, setIsActive] = useState(category?.is_active ?? true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nameKo.trim() || !nameEn.trim()) {
      setError("Category names are required for both languages");
      return;
    }

    const data: CreateCategoryDto | UpdateCategoryDto = {
      display_order: displayOrder,
      is_active: isActive,
      translations: [
        {
          language: "ko",
          name: nameKo.trim(),
          description: descKo.trim() || undefined
        },
        {
          language: "en",
          name: nameEn.trim(),
          description: descEn.trim() || undefined
        }
      ]
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
              Category Name (Korean) <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              value={nameKo}
              onChange={(e) => setNameKo(e.target.value)}
              placeholder="명령어 안내"
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label>
              Category Name (English) <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              value={nameEn}
              onChange={(e) => setNameEn(e.target.value)}
              placeholder="Commands"
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
              placeholder="서버 내 사용 가능한 명령어 목록"
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
              placeholder="Available commands in the server"
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
              label="Active (visible to users)"
              checked={isActive}
              onChange={(e) => setIsActive(e.target.checked)}
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
