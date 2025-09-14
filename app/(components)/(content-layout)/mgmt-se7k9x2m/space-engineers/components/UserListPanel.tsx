"use client";
import React, { useState, useEffect } from "react";
import { Button, Table, Alert, Form, Row, Col, Badge, Spinner } from "react-bootstrap";

import { apiRequest } from "@/shared/api/request";

interface SEUser {
  id: string;
  username: string;
  steam_id: string;
  last_seen: string;
  storage_info?: {
    total_items: number;
    storage_size: string;
  };
}

interface UserListResponse {
  users: SEUser[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    total_pages: number;
  };
}

const UserListPanel = () => {
  const [users, setUsers] = useState<SEUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [pagination, setPagination] = useState<UserListResponse['pagination'] | null>(null);

  const fetchUsers = async (pageNum: number = page, pageLimit: number = limit) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await apiRequest.get<UserListResponse>(
        `/admin/space-engineers/users?page=${pageNum}&limit=${pageLimit}`
      );
      setUsers(response.data.users);
      setPagination(response.data.pagination);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page, limit]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
    setPage(1); // Reset to first page when changing limit
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="mb-0">
          <i className="bi bi-people me-2"></i>
          User Management
        </h5>
        <Button variant="outline-primary" onClick={() => fetchUsers()} disabled={loading}>
          <i className="bi bi-arrow-clockwise me-1"></i>
          Refresh
        </Button>
      </div>

      {/* Controls */}
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Items per page:</Form.Label>
            <Form.Select
              value={limit}
              onChange={(e) => handleLimitChange(Number(e.target.value))}
              style={{ width: "auto" }}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </Form.Select>
          </Form.Group>
        </Col>
        {pagination && (
          <Col md={6} className="text-end">
            <small className="text-muted">
              Showing {((pagination.page - 1) * pagination.limit) + 1} to{" "}
              {Math.min(pagination.page * pagination.limit, pagination.total)} of{" "}
              {pagination.total} users
            </small>
          </Col>
        )}
      </Row>

      {error && (
        <Alert variant="danger" dismissible onClose={() => setError(null)}>
          <i className="bi bi-exclamation-triangle me-2"></i>
          {error}
        </Alert>
      )}

      {loading && (
        <div className="text-center p-4">
          <Spinner animation="border" size="sm" className="me-2" />
          Loading users...
        </div>
      )}

      {!loading && users.length > 0 && (
        <>
          <Table responsive striped hover>
            <thead>
              <tr>
                <th>User ID</th>
                <th>Username</th>
                <th>Steam ID</th>
                <th>Last Seen</th>
                <th>Storage Info</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <code className="small">{user.id}</code>
                  </td>
                  <td>
                    <strong>{user.username}</strong>
                  </td>
                  <td>
                    <code className="small">{user.steam_id}</code>
                  </td>
                  <td>
                    <small className="text-muted">
                      {formatDate(user.last_seen)}
                    </small>
                  </td>
                  <td>
                    {user.storage_info ? (
                      <div>
                        <Badge bg="info" className="me-1">
                          {user.storage_info.total_items} items
                        </Badge>
                        <Badge bg="secondary">
                          {user.storage_info.storage_size}
                        </Badge>
                      </div>
                    ) : (
                      <span className="text-muted">No data</span>
                    )}
                  </td>
                  <td>
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
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Pagination */}
          {pagination && pagination.total_pages > 1 && (
            <div className="d-flex justify-content-center align-items-center mt-4">
              <Button
                variant="outline-secondary"
                size="sm"
                disabled={pagination.page <= 1}
                onClick={() => handlePageChange(pagination.page - 1)}
                className="me-2"
              >
                <i className="bi bi-chevron-left"></i>
                Previous
              </Button>
              
              <span className="mx-3">
                Page {pagination.page} of {pagination.total_pages}
              </span>
              
              <Button
                variant="outline-secondary"
                size="sm"
                disabled={pagination.page >= pagination.total_pages}
                onClick={() => handlePageChange(pagination.page + 1)}
                className="ms-2"
              >
                Next
                <i className="bi bi-chevron-right"></i>
              </Button>
            </div>
          )}
        </>
      )}

      {!loading && users.length === 0 && !error && (
        <div className="text-center p-4">
          <i className="bi bi-inbox fs-1 text-muted"></i>
          <p className="text-muted mt-2">No users found.</p>
        </div>
      )}
    </div>
  );
};

export default UserListPanel;
