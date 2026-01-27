"use client";
import React, { useState, useEffect } from "react";
import { Button, Table, Alert, Form, Row, Col, Badge, Spinner } from "react-bootstrap";

import { apiRequest } from "@/shared/api/request";

interface SEUser {
  id: number;
  username: string;
  steamId: string;
  email: string | null;
  score: number;
  roles: string[];
  lastActiveAt: string;
  createdAt: string;
  hasSpaceEngineersStorage: boolean;
  storageItemCount: number;
}

interface UserListResponse {
  users: SEUser[];
  totalUsers: number;
  spaceEngineersUsers: number;
}

const UserListPanel = () => {
  const [users, setUsers] = useState<SEUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalUsers, setTotalUsers] = useState(0);
  const [seUsers, setSeUsers] = useState(0);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await apiRequest.get<UserListResponse>(
        `/admin/space-engineers/users`
      );
      setUsers(response.data.users);
      setTotalUsers(response.data.totalUsers);
      setSeUsers(response.data.spaceEngineersUsers);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h5 className="mb-2">
            <i className="bi bi-people me-2"></i>
            User Management
          </h5>
          <small className="text-muted">
            Total: <strong>{totalUsers}</strong> users | 
            Space Engineers: <strong>{seUsers}</strong> users
          </small>
        </div>
        <Button variant="outline-primary" onClick={() => fetchUsers()} disabled={loading}>
          <i className="bi bi-arrow-clockwise me-1"></i>
          Refresh
        </Button>
      </div>

      {/* Controls removed - no pagination needed */}

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
                <th>Role</th>
                <th>Last Active</th>
                <th>SE Storage</th>
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
                    <code className="small">{user.steamId}</code>
                  </td>
                  <td>
                    {user.roles.map((role) => (
                      <Badge
                        key={role}
                        bg={role === "SUPER_ADMIN" ? "danger" : role === "GAME_ADMIN" ? "warning" : "secondary"}
                        className="me-1"
                      >
                        {role}
                      </Badge>
                    ))}
                  </td>
                  <td>
                    <small className="text-muted">
                      {formatDate(user.lastActiveAt)}
                    </small>
                  </td>
                  <td>
                    {user.hasSpaceEngineersStorage ? (
                      <Badge bg="success" className="me-1">
                        {user.storageItemCount} items
                      </Badge>
                    ) : (
                      <span className="text-muted small">No storage</span>
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
