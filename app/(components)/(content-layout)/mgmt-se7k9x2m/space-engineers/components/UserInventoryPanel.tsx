"use client";
import React, { useState } from "react";
import { 
  Button, 
  Form, 
  Row, 
  Col, 
  Alert, 
  Card, 
  Badge, 
  Spinner,
  InputGroup,
  Table,
  Tabs,
  Tab
} from "react-bootstrap";

import { apiRequest } from "@/shared/api/request";

interface InventoryItem {
  item_id: string;
  item_name: string;
  quantity: number;
  item_type: string;
  rarity?: string;
  description?: string;
  last_updated: string;
  icon_url?: string;
}

interface UserInventory {
  user_id: string;
  username: string;
  steam_id: string;
  total_items: number;
  storage_size: string;
  last_updated: string;
  items: InventoryItem[];
}

type SearchType = "user_id" | "steam_id";

const UserInventoryPanel = () => {
  const [searchType, setSearchType] = useState<SearchType>("user_id");
  const [searchQuery, setSearchQuery] = useState("");
  const [inventory, setInventory] = useState<UserInventory | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) {
      setError(`Please enter a ${searchType === "user_id" ? "User ID" : "Steam ID"} to search`);
      return;
    }

    setLoading(true);
    setError(null);
    setHasSearched(true);
    
    try {
      const endpoint = searchType === "user_id" 
        ? `/admin/space-engineers/users/${encodeURIComponent(searchQuery.trim())}/inventory`
        : `/admin/space-engineers/inventory/steam/${encodeURIComponent(searchQuery.trim())}`;
        
      const response = await apiRequest.get<UserInventory>(endpoint);
      setInventory(response.data);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to fetch user inventory");
      setInventory(null);
    } finally {
      setLoading(false);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setInventory(null);
    setError(null);
    setHasSearched(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const getRarityVariant = (rarity?: string) => {
    switch (rarity?.toLowerCase()) {
      case "common": return "secondary";
      case "uncommon": return "success";
      case "rare": return "warning";
      case "epic": return "primary";
      case "legendary": return "danger";
      default: return "light";
    }
  };

  const getTypeVariant = (itemType: string) => {
    switch (itemType.toLowerCase()) {
      case "weapon": return "danger";
      case "tool": return "primary";
      case "component": return "info";
      case "ore": return "warning";
      case "ingot": return "success";
      default: return "secondary";
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="mb-0">
          <i className="bi bi-box me-2"></i>
          User Inventory Lookup
        </h5>
      </div>

      {/* Search Form */}
      <Card className="mb-4">
        <Card.Body>
          <Form onSubmit={handleSearch}>
            <Row>
              <Col md={3}>
                <Form.Group>
                  <Form.Label>Search Type</Form.Label>
                  <Form.Select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value as SearchType)}
                    disabled={loading}
                  >
                    <option value="user_id">User ID</option>
                    <option value="steam_id">Steam ID</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>
                    {searchType === "user_id" ? "User ID" : "Steam ID"}
                  </Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder={
                        searchType === "user_id" 
                          ? "Enter user ID..." 
                          : "Enter Steam ID (e.g., 76561198000000000)..."
                      }
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      disabled={loading}
                    />
                    {searchQuery && (
                      <Button
                        variant="outline-secondary"
                        onClick={clearSearch}
                        disabled={loading}
                      >
                        <i className="bi bi-x"></i>
                      </Button>
                    )}
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col md={3} className="d-flex align-items-end">
                <Button 
                  type="submit" 
                  variant="primary" 
                  disabled={loading || !searchQuery.trim()}
                  className="w-100"
                >
                  {loading ? (
                    <>
                      <Spinner size="sm" className="me-2" />
                      Loading...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-search me-2"></i>
                      Search
                    </>
                  )}
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>

      {/* Error Alert */}
      {error && (
        <Alert variant="danger" dismissible onClose={() => setError(null)}>
          <i className="bi bi-exclamation-triangle me-2"></i>
          {error}
        </Alert>
      )}

      {/* Inventory Results */}
      {hasSearched && !loading && inventory && (
        <div>
          {/* User Info Header */}
          <Card className="mb-4">
            <Card.Body>
              <Row>
                <Col md={8}>
                  <h6 className="mb-2">{inventory.username}</h6>
                  <div className="small text-muted mb-2">
                    <div>User ID: <code>{inventory.user_id}</code></div>
                    <div>Steam ID: <code>{inventory.steam_id}</code></div>
                  </div>
                </Col>
                <Col md={4} className="text-md-end">
                  <div className="mb-2">
                    <Badge bg="primary" className="me-2">
                      {inventory.total_items} items
                    </Badge>
                    <Badge bg="info">
                      {inventory.storage_size}
                    </Badge>
                  </div>
                  <small className="text-muted">
                    Last updated: {formatDate(inventory.last_updated)}
                  </small>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          {/* Inventory Items */}
          <Card>
            <Card.Header>
              <h6 className="mb-0">
                <i className="bi bi-grid me-2"></i>
                Inventory Items ({inventory.items.length})
              </h6>
            </Card.Header>
            <Card.Body className="p-0">
              {inventory.items.length === 0 ? (
                <div className="text-center p-4">
                  <i className="bi bi-inbox fs-1 text-muted"></i>
                  <p className="text-muted mt-2 mb-0">
                    No items found in inventory
                  </p>
                </div>
              ) : (
                <div className="table-responsive">
                  <Table hover className="mb-0">
                    <thead className="table-light">
                      <tr>
                        <th style={{ width: '50px' }}>Icon</th>
                        <th>Item</th>
                        <th>Type</th>
                        <th>Quantity</th>
                        <th>Rarity</th>
                        <th>Last Updated</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inventory.items.map((item, index) => (
                        <tr key={`${item.item_id}-${index}`}>
                          <td>
                            {item.icon_url ? (
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
                                  src={item.icon_url} 
                                  alt={item.item_name}
                                  style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    objectFit: 'contain'
                                  }}
                                  onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.parentElement!.innerHTML = '<i class="bi bi-box text-muted"></i>';
                                  }}
                                />
                              </div>
                            ) : (
                              <div 
                                style={{
                                  width: '40px',
                                  height: '40px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  backgroundColor: '#f8f9fa',
                                  borderRadius: '4px'
                                }}
                              >
                                <i className="bi bi-box text-muted"></i>
                              </div>
                            )}
                          </td>
                          <td>
                            <div>
                              <strong>{item.item_name}</strong>
                              {item.description && (
                                <div className="small text-muted">
                                  {item.description}
                                </div>
                              )}
                              <code className="small text-muted">
                                {item.item_id}
                              </code>
                            </div>
                          </td>
                          <td>
                            <Badge bg={getTypeVariant(item.item_type)}>
                              {item.item_type}
                            </Badge>
                          </td>
                          <td>
                            <span className="fw-bold">
                              {item.quantity.toLocaleString()}
                            </span>
                          </td>
                          <td>
                            {item.rarity ? (
                              <Badge bg={getRarityVariant(item.rarity)}>
                                {item.rarity}
                              </Badge>
                            ) : (
                              <span className="text-muted">-</span>
                            )}
                          </td>
                          <td>
                            <small className="text-muted">
                              {formatDate(item.last_updated)}
                            </small>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              )}
            </Card.Body>
          </Card>
        </div>
      )}

      {/* No inventory found */}
      {hasSearched && !loading && !inventory && !error && (
        <Card>
          <Card.Body className="text-center p-4">
            <i className="bi bi-person-x fs-1 text-muted"></i>
            <p className="text-muted mt-2 mb-0">
              No user found with the provided {searchType === "user_id" ? "User ID" : "Steam ID"}
            </p>
            <small className="text-muted">
              Please check the {searchType === "user_id" ? "User ID" : "Steam ID"} and try again
            </small>
          </Card.Body>
        </Card>
      )}

      {/* No search performed yet */}
      {!hasSearched && !loading && (
        <Card>
          <Card.Body className="text-center p-4">
            <i className="bi bi-box-seam fs-1 text-muted"></i>
            <p className="text-muted mt-2 mb-0">
              Enter a {searchType === "user_id" ? "User ID" : "Steam ID"} above to view inventory
            </p>
            <small className="text-muted">
              You can search by either User ID or Steam ID
            </small>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default UserInventoryPanel;
