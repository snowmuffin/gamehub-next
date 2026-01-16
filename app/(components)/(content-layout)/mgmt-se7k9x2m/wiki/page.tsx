"use client";
import React, { Fragment, useEffect, useState } from "react";
import { Alert, Button, Card, Col, Modal, Row, Spinner, Tab, Table, Tabs } from "react-bootstrap";
import { useSelector } from "react-redux";

import {
  createArticle,
  createCategory,
  deleteArticle,
  deleteCategory,
  getCategories,
  updateArticle,
  updateCategory
} from "@/shared/api/wiki";
import AdminAuthGuard from "@/shared/components/AdminAuthGuard";
import Seo from "@/shared/layout-components/seo";
import type { RootState } from "@/shared/redux/store";
import type { WikiArticle, WikiCategoryWithCount } from "@/shared/types/wiki.types";

import ArticleEditor from "./components/ArticleEditor";
import CategoryEditor from "./components/CategoryEditor";

const AdminWikiPage = () => {
  const language = useSelector((state: RootState) => state.language.code);
  const [categories, setCategories] = useState<WikiCategoryWithCount[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Modal states
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showArticleModal, setShowArticleModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState<WikiCategoryWithCount | null>(null);
  const [editingArticle, setEditingArticle] = useState<WikiArticle | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await getCategories(language);
      setCategories(response.categories);
      setError(null);
    } catch (err) {
      console.error("Failed to fetch categories:", err);
      setError("Failed to load categories");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [language]);

  const handleCreateCategory = () => {
    setEditingCategory(null);
    setShowCategoryModal(true);
  };

  const handleEditCategory = (category: WikiCategoryWithCount) => {
    setEditingCategory(category);
    setShowCategoryModal(true);
  };

  const handleDeleteCategory = async (categoryId: number) => {
    if (!confirm("Are you sure you want to delete this category? All articles will also be deleted.")) {
      return;
    }

    try {
      await deleteCategory(categoryId);
      await fetchCategories();
    } catch (err) {
      console.error("Failed to delete category:", err);
      alert("Failed to delete category");
    }
  };

  const handleCreateArticle = (categoryId: number) => {
    setSelectedCategoryId(categoryId);
    setEditingArticle(null);
    setShowArticleModal(true);
  };

  const handleEditArticle = (article: WikiArticle) => {
    setSelectedCategoryId(article.category_id);
    setEditingArticle(article);
    setShowArticleModal(true);
  };

  const handleDeleteArticle = async (articleId: number) => {
    if (!confirm("Are you sure you want to delete this article?")) {
      return;
    }

    try {
      await deleteArticle(articleId);
      await fetchCategories();
    } catch (err) {
      console.error("Failed to delete article:", err);
      alert("Failed to delete article");
    }
  };

  const handleSaveCategory = async (data: any) => {
    try {
      if (editingCategory) {
        await updateCategory(editingCategory.id, data);
      } else {
        await createCategory(data);
      }
      setShowCategoryModal(false);
      await fetchCategories();
    } catch (err) {
      console.error("Failed to save category:", err);
      throw err;
    }
  };

  const handleSaveArticle = async (data: any) => {
    try {
      if (editingArticle) {
        await updateArticle(editingArticle.id, data);
      } else {
        await createArticle(data);
      }
      setShowArticleModal(false);
      await fetchCategories();
    } catch (err) {
      console.error("Failed to save article:", err);
      throw err;
    }
  };

  return (
    <AdminAuthGuard>
      <Fragment>
        <Seo title="Wiki Management" />
        <Row>
          <Col xl={12}>
            <Card className="custom-card">
              <Card.Header className="d-flex justify-content-between align-items-center">
                <h4 className="mb-0">Wiki Management</h4>
                <Button variant="primary" onClick={handleCreateCategory}>
                  <i className="bi bi-plus-lg me-2"></i>
                  New Category
                </Button>
              </Card.Header>
              <Card.Body>
                {loading ? (
                  <div className="text-center py-5">
                    <Spinner animation="border" variant="primary" />
                  </div>
                ) : error ? (
                  <Alert variant="danger">{error}</Alert>
                ) : categories.length === 0 ? (
                  <Alert variant="info">No categories yet. Create your first category!</Alert>
                ) : (
                  <Tabs defaultActiveKey={categories[0]?.id.toString()} className="mb-3">
                    {categories.map((category) => (
                      <Tab
                        key={category.id}
                        eventKey={category.id.toString()}
                        title={
                          category.translations.find((t) => t.language === language)?.name ||
                          category.translations[0]?.name ||
                          "Untitled"
                        }
                      >
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div>
                            <h5>
                              {category.translations.find((t) => t.language === language)?.name ||
                                category.translations[0]?.name}
                            </h5>
                            <p className="text-muted mb-0">
                              {category.translations.find((t) => t.language === language)
                                ?.description ||
                                category.translations[0]?.description}
                            </p>
                          </div>
                          <div className="d-flex gap-2">
                            <Button
                              variant="outline-primary"
                              size="sm"
                              onClick={() => handleCreateArticle(category.id)}
                            >
                              <i className="bi bi-plus-lg me-1"></i>
                              New Article
                            </Button>
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              onClick={() => handleEditCategory(category)}
                            >
                              <i className="bi bi-pencil"></i>
                            </Button>
                            <Button
                              variant="outline-danger"
                              size="sm"
                              onClick={() => handleDeleteCategory(category.id)}
                            >
                              <i className="bi bi-trash"></i>
                            </Button>
                          </div>
                        </div>

                        {/* Article list will be implemented with getCategoryArticles */}
                        <div className="alert alert-info">
                          <i className="bi bi-info-circle me-2"></i>
                          Article management coming soon. For now, you can create articles.
                        </div>
                      </Tab>
                    ))}
                  </Tabs>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Category Modal */}
        <Modal show={showCategoryModal} onHide={() => setShowCategoryModal(false)} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{editingCategory ? "Edit Category" : "Create Category"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CategoryEditor
              category={editingCategory}
              onSave={handleSaveCategory}
              onCancel={() => setShowCategoryModal(false)}
            />
          </Modal.Body>
        </Modal>

        {/* Article Modal */}
        <Modal show={showArticleModal} onHide={() => setShowArticleModal(false)} size="xl" fullscreen="lg-down">
          <Modal.Header closeButton>
            <Modal.Title>{editingArticle ? "Edit Article" : "Create Article"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ArticleEditor
              article={editingArticle}
              categoryId={selectedCategoryId}
              categories={categories}
              onSave={handleSaveArticle}
              onCancel={() => setShowArticleModal(false)}
            />
          </Modal.Body>
        </Modal>
      </Fragment>
    </AdminAuthGuard>
  );
};

export default AdminWikiPage;
