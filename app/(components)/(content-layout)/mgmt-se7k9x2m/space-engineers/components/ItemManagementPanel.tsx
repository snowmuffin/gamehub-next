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
  id?: number;
  indexName: string;
  displayName: string;
  description?: string;
  rarity?: string;
  quantity: number;
  icons: string[];
  item_type?: string;
  created_at?: string;
  updated_at?: string;
}

const ItemManagementPanel = () => {
  const [items, setItems] = useState<ItemData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  // Modal states
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingItem, setEditingItem] = useState<ItemData | null>(null);
  
  // Form data
  const [formData, setFormData] = useState<ItemData>({
    indexName: "",
    displayName: "",
    description: "",
    rarity: "Common",
    quantity: 0,
    icons: [""],
    item_type: ""
  });

  // Fetch all items
  const fetchItems = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiRequest.get<ItemData[]>("/space-engineers/item");
      setItems(response.data);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to fetch items");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Handle create item
  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      await apiRequest.post("/admin/space-engineers/items", formData);
      setSuccess("Item created successfully!");
      setShowCreateModal(false);
      resetForm();
      fetchItems();
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to create item");
    } finally {
      setLoading(false);
    }
  };

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

  // Handle delete item
  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this item?")) return;
    
    setLoading(true);
    setError(null);
    
    try {
      await apiRequest.delete(`/admin/space-engineers/items/${id}`);
      setSuccess("Item deleted successfully!");
      fetchItems();
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to delete item");
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
      rarity: item.rarity || "Common",
      quantity: item.quantity,
      icons: item.icons.length > 0 ? item.icons : [""],
      item_type: item.item_type || ""
    });
    setShowEditModal(true);
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      indexName: "",
      displayName: "",
      description: "",
      rarity: "Common",
      quantity: 0,
      icons: [""],
      item_type: ""
    });
    setEditingItem(null);
  };

  const getRarityVariant = (rarity?: string) => {
    if (!rarity || typeof rarity !== 'string') return "light";
    
    switch (rarity.toLowerCase()) {
      case "common": return "secondary";
      case "uncommon": return "success";
      case "rare": return "warning";
      case "epic": return "primary";
      case "legendary": return "danger";
      default: return "light";
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="mb-0">
          <i className="bi bi-box-seam me-2"></i>
          Item Management
        </h5>
        <Button 
          variant="primary" 
          onClick={() => {
            resetForm();
            setShowCreateModal(true);
          }}
        >
          <i className="bi bi-plus-circle me-2"></i>
          Create New Item
        </Button>
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
          {loading && !showEditModal && !showCreateModal ? (
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
                    <th>Type</th>
                    <th>Quantity</th>
                    <th style={{ width: '150px' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id || item.indexName}>
                      <td>
                        {item.icons[0] ? (
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
                        {item.rarity && typeof item.rarity === 'string' && (
                          <Badge bg={getRarityVariant(item.rarity)}>
                            {item.rarity}
                          </Badge>
                        )}
                      </td>
                      <td>
                        <span className="small">{item.item_type || '-'}</span>
                      </td>
                      <td>
                        <span className="fw-bold">{item.quantity.toLocaleString()}</span>
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
                          {item.id && (
                            <Button
                              size="sm"
                              variant="danger"
                              onClick={() => handleDelete(item.id!)}
                            >
                              <i className="bi bi-trash"></i>
                            </Button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </Card.Body>
      </Card>

      {/* Create/Edit Modal */}
      <Modal show={showCreateModal || showEditModal} onHide={() => {
        setShowCreateModal(false);
        setShowEditModal(false);
        resetForm();
      }} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {showEditModal ? 'Edit Item' : 'Create New Item'}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={showEditModal ? handleUpdate : handleCreate}>
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
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Rarity</Form.Label>
                  <Form.Select
                    value={formData.rarity}
                    onChange={(e) => setFormData({ ...formData, rarity: e.target.value })}
                  >
                    <option value="Common">Common</option>
                    <option value="Uncommon">Uncommon</option>
                    <option value="Rare">Rare</option>
                    <option value="Epic">Epic</option>
                    <option value="Legendary">Legendary</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Item Type</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.item_type}
                    onChange={(e) => setFormData({ ...formData, item_type: e.target.value })}
                    placeholder="e.g., Weapon, Tool, Component"
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 0 })}
                    min="0"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Icon URL</Form.Label>
              <Form.Control
                type="text"
                value={formData.icons[0] || ""}
                onChange={(e) => setFormData({ ...formData, icons: [e.target.value] })}
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
                setShowCreateModal(false);
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
                  {showEditModal ? 'Update Item' : 'Create Item'}
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
