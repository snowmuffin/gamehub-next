"use client";
import React, { useState, useEffect } from "react";
import { 
  Button, 
  Form, 
  Row, 
  Col, 
  Alert, 
  Card, 
  Badge, 
  Spinner,
  Table,
  Modal,
  InputGroup
} from "react-bootstrap";

import { apiRequest } from "@/shared/api/request";

interface ItemData {
  id: number;
  indexName: string;
  displayName: string;
  description: string | null;
  rarity: number; // 1-10
  category: string | null;
  icons: any;
  createdAt: string;
  updatedAt: string;
}

interface ItemsResponse {
  items: ItemData[];
  totalItems: number;
  page: number;
  limit: number;
  totalPages: number;
}

const ItemManagementPanel = () => {
  const [items, setItems] = useState<ItemData[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(50);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  // Modal states
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingItem, setEditingItem] = useState<ItemData | null>(null);
  
  // Form data
  const [formData, setFormData] = useState<Partial<ItemData>>({
    indexName: "",
    displayName: "",
    description: "",
    rarity: 1,
    category: "",
    icons: []
  });

  // Fetch all items from game definitions
  const fetchItems = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiRequest.get<ItemsResponse>("/admin/space-engineers/items", {
        params: { page, limit }
      });
      setItems(response.data.items || []);
      setTotalItems(response.data.totalItems || 0);
      setTotalPages(response.data.totalPages || 0);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to fetch items");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [page, limit]);

  // Handle update item
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem?.id) return;
    
    setLoading(true);
    setError(null);
    
    try {
      await apiRequest.patch(`/admin/space-engineers/items/${editingItem.id}`, formData);
      setSuccess("Item updated successfully!");
      setShowEditModal(false);
      resetForm();
      fetchItems();
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to update item");
    } finally {
      setLoading(false);
    }
  };

  // Open edit modal
  const openEditModal = (item: ItemData) => {
    setEditingItem(item);
    setFormData({
      indexName: item.indexName,
      displayName: item.displayName,
      description: item.description || "",
      rarity: item.rarity,
      category: item.category || "",
      icons: Array.isArray(item.icons) ? item.icons : (item.icons ? [item.icons] : [])
    });
    setShowEditModal(true);
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      indexName: "",
      displayName: "",
      description: "",
      rarity: 1,
      category: "",
      icons: []
    });
    setEditingItem(null);
  };

  const getRarityVariant = (rarity: number) => {
    if (rarity <= 2) return "secondary";     // Common (1-2)
    if (rarity <= 4) return "success";       // Uncommon (3-4)
    if (rarity <= 6) return "info";          // Rare (5-6)
    if (rarity <= 8) return "primary";       // Epic (7-8)
    return "danger";                          // Legendary (9-10)
  };

  const getRarityLabel = (rarity: number) => {
    if (rarity <= 2) return "Common";
    if (rarity <= 4) return "Uncommon";
    if (rarity <= 6) return "Rare";
    if (rarity <= 8) return "Epic";
    return "Legendary";
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="mb-0">
          <i className="bi bi-box-seam me-2"></i>
          Item Management
        </h5>
        <div className="text-muted small">
          {totalItems > 0 && (
            <>
              Page {page} of {totalPages} | Total: {totalItems} items
            </>
          )}
        </div>
      </div>

      {/* Success Alert */}
      {success && (
        <Alert variant="success" dismissible onClose={() => setSuccess(null)}>
          <i className="bi bi-check-circle me-2"></i>
          {success}
        </Alert>
      )}

      {/* Error Alert */}
      {error && (
        <Alert variant="danger" dismissible onClose={() => setError(null)}>
          <i className="bi bi-exclamation-triangle me-2"></i>
          {error}
        </Alert>
      )}

      {/* Items Table */}
      <Card>
        <Card.Body className="p-0">
          {loading && !showEditModal ? (
            <div className="text-center p-4">
              <Spinner animation="border" variant="primary" />
              <p className="mt-2 mb-0">Loading items...</p>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center p-4">
              <i className="bi bi-inbox fs-1 text-muted"></i>
              <p className="text-muted mt-2 mb-0">No items found</p>
            </div>
          ) : (
            <div className="table-responsive">
              <Table hover className="mb-0">
                <thead className="table-light">
                  <tr>
                    <th style={{ width: '60px' }}>Icon</th>
                    <th>Index Name</th>
                    <th>Display Name</th>
                    <th>Rarity</th>
                    <th>Category</th>
                    <th style={{ width: '150px' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td>
                        {(Array.isArray(item.icons) && item.icons[0]) ? (
                          <div 
                            style={{
                              width: '40px',
                              height: '40px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              overflow: 'hidden',
                              backgroundColor: '#f8f9fa',
                              borderRadius: '4px'
                            }}
                          >
                            <img 
                              src={item.icons[0]} 
                              alt={item.displayName}
                              style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain'
                              }}
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          </div>
                        ) : (
                          <i className="bi bi-box text-muted"></i>
                        )}
                      </td>
                      <td>
                        <code className="small">{item.indexName}</code>
                      </td>
                      <td>
                        <strong>{item.displayName}</strong>
                        {item.description && (
                          <div className="small text-muted text-truncate" style={{ maxWidth: '200px' }}>
                            {item.description}
                          </div>
                        )}
                      </td>
                      <td>
                        <Badge bg={getRarityVariant(item.rarity)}>
                          {item.rarity}
                        </Badge>
                      </td>
                      <td>
                        <span className="small">{item.category || '-'}</span>
                      </td>
                      <td>
                        <div className="d-flex gap-2">
                          <Button
                            size="sm"
                            variant="primary"
                            onClick={() => openEditModal(item)}
                          >
                            <i className="bi bi-pencil"></i>
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </Card.Body>
        {totalPages > 1 && (
          <Card.Footer className="d-flex justify-content-between align-items-center">
            <div>
              <Form.Select
                size="sm"
                value={limit}
                onChange={(e) => {
                  setLimit(parseInt(e.target.value));
                  setPage(1);
                }}
                style={{ width: 'auto' }}
              >
                <option value="25">25 per page</option>
                <option value="50">50 per page</option>
                <option value="100">100 per page</option>
                <option value="200">200 per page</option>
              </Form.Select>
            </div>
            <div className="d-flex align-items-center gap-2">
              <Button
                size="sm"
                variant="outline-secondary"
                onClick={() => setPage(1)}
                disabled={page === 1}
              >
                <i className="bi bi-chevron-double-left"></i>
              </Button>
              <Button
                size="sm"
                variant="outline-secondary"
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
              >
                <i className="bi bi-chevron-left"></i> Prev
              </Button>
              <span className="text-muted small">
                Page {page} of {totalPages}
              </span>
              <Button
                size="sm"
                variant="outline-secondary"
                onClick={() => setPage(page + 1)}
                disabled={page >= totalPages}
              >
                Next <i className="bi bi-chevron-right"></i>
              </Button>
              <Button
                size="sm"
                variant="outline-secondary"
                onClick={() => setPage(totalPages)}
                disabled={page >= totalPages}
              >
                <i className="bi bi-chevron-double-right"></i>
              </Button>
            </div>
          </Card.Footer>
        )}
      </Card>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => {
        setShowEditModal(false);
        resetForm();
      }} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            Edit Item
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleUpdate}>
          <Modal.Body>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Index Name <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.indexName}
                    onChange={(e) => setFormData({ ...formData, indexName: e.target.value })}
                    required
                    placeholder="e.g., MyObjectBuilder_AmmoMagazine/NATO_5p56x45mm"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Display Name <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.displayName}
                    onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                    required
                    placeholder="e.g., 5.56x45mm NATO Magazine"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Item description..."
              />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Rarity (1-10)</Form.Label>
                  <Form.Control
                    type="number"
                    value={formData.rarity}
                    onChange={(e) => setFormData({ ...formData, rarity: parseInt(e.target.value) || 1 })}
                    min="1"
                    max="10"
                  />
                  <Form.Text className="text-muted">
                    1-2: Common, 3-4: Uncommon, 5-6: Rare, 7-8: Epic, 9-10: Legendary
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.category || ""}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder="e.g., Ore, Component, Tool"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Icon URL</Form.Label>
              <Form.Control
                type="text"
                value={Array.isArray(formData.icons) && formData.icons[0] ? formData.icons[0] : ""}
                onChange={(e) => setFormData({ ...formData, icons: e.target.value ? [e.target.value] : [] })}
                placeholder="https://example.com/icon.png"
              />
              <Form.Text className="text-muted">
                URL to the item's icon image
              </Form.Text>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button 
              variant="secondary" 
              onClick={() => {
                setShowEditModal(false);
                resetForm();
              }}
            >
              Cancel
            </Button>
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Spinner size="sm" className="me-2" />
                  Saving...
                </>
              ) : (
                <>
                  <i className="bi bi-check-circle me-2"></i>
                  Update Item
                </>
              )}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default ItemManagementPanel;
