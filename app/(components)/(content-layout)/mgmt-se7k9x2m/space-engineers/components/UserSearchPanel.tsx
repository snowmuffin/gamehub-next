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
  InputGroup 
} from "react-bootstrap";

import { apiRequest } from "@/shared/api/request";

interface SearchedUser {
  id: string;
  username: string;
  steam_id: string;
  last_seen: string;
  storage_info?: {
    total_items: number;
    storage_size: string;
  };
  game_stats?: {
    play_time: string;
    login_count: number;
  };
}

const UserSearchPanel = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchedUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) {
      setError("Please enter a username to search");
      return;
    }

    setLoading(true);
    setError(null);
    setHasSearched(true);
    
    try {
      const response = await apiRequest.get<{ users: SearchedUser[] }>(
        `/admin/users/search?query=${encodeURIComponent(searchQuery.trim())}`
      );
      setSearchResults(response.data.users);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to search users");
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setError(null);
    setHasSearched(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const formatPlayTime = (timeString: string) => {
    // Assuming time is in format like "123h 45m" or similar
    return timeString;
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="mb-0">
          <i className="bi bi-search me-2"></i>
          User Search
        </h5>
      </div>

      {/* Search Form */}
      <Card className="mb-4">
        <Card.Body>
          <Form onSubmit={handleSearch}>
            <Row>
              <Col md={8}>
                <Form.Group>
                  <Form.Label>Search by Username</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Enter username to search..."
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
                  <Form.Text className="text-muted">
                    Search for users by their display name or partial username
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={4} className="d-flex align-items-end">
                <Button 
                  type="submit" 
                  variant="primary" 
                  disabled={loading || !searchQuery.trim()}
                  className="w-100"
                >
                  {loading ? (
                    <>
                      <Spinner size="sm" className="me-2" />
                      Searching...
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

      {/* Search Results */}
      {hasSearched && !loading && (
        <div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h6 className="mb-0">
              Search Results {searchResults.length > 0 && `(${searchResults.length} found)`}
            </h6>
            {searchResults.length > 0 && (
              <small className="text-muted">
                Searched for: "{searchQuery}"
              </small>
            )}
          </div>

          {searchResults.length === 0 ? (
            <Card>
              <Card.Body className="text-center p-4">
                <i className="bi bi-search fs-1 text-muted"></i>
                <p className="text-muted mt-2 mb-0">
                  No users found matching "{searchQuery}"
                </p>
                <small className="text-muted">
                  Try a different username or check the spelling
                </small>
              </Card.Body>
            </Card>
          ) : (
            <Row>
              {searchResults.map((user) => (
                <Col lg={6} key={user.id} className="mb-3">
                  <Card className="h-100">
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div>
                          <h6 className="mb-1">{user.username}</h6>
                          <small className="text-muted">
                            <code>{user.id}</code>
                          </small>
                        </div>
                        <Button
                          variant="outline-primary"
                          size="sm"
                          onClick={() => {
                            // TODO: Navigate to inventory view
                            console.log("View inventory for user:", user.id);
                          }}
                        >
                          <i className="bi bi-box me-1"></i>
                          Inventory
                        </Button>
                      </div>

                      <div className="mb-3">
                        <small className="text-muted d-block">Steam ID:</small>
                        <code className="small">{user.steam_id}</code>
                      </div>

                      <div className="mb-3">
                        <small className="text-muted d-block">Last Seen:</small>
                        <small>{formatDate(user.last_seen)}</small>
                      </div>

                      {user.storage_info && (
                        <div className="mb-3">
                          <small className="text-muted d-block mb-1">Storage:</small>
                          <Badge bg="info" className="me-1">
                            {user.storage_info.total_items} items
                          </Badge>
                          <Badge bg="secondary">
                            {user.storage_info.storage_size}
                          </Badge>
                        </div>
                      )}

                      {user.game_stats && (
                        <div>
                          <small className="text-muted d-block mb-1">Game Stats:</small>
                          <div className="small">
                            <div className="d-flex justify-content-between">
                              <span>Play Time:</span>
                              <span className="fw-bold">
                                {formatPlayTime(user.game_stats.play_time)}
                              </span>
                            </div>
                            <div className="d-flex justify-content-between">
                              <span>Login Count:</span>
                              <span className="fw-bold">
                                {user.game_stats.login_count.toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </div>
      )}

      {/* No search performed yet */}
      {!hasSearched && !loading && (
        <Card>
          <Card.Body className="text-center p-4">
            <i className="bi bi-person-search fs-1 text-muted"></i>
            <p className="text-muted mt-2 mb-0">
              Enter a username above to search for users
            </p>
            <small className="text-muted">
              You can search by full or partial usernames
            </small>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default UserSearchPanel;
