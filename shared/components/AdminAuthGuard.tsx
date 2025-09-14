"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { 
  Card, 
  Button, 
  Alert, 
  Spinner 
} from "react-bootstrap";
import { RootState } from "@/shared/redux/store";
import { apiRequest } from "@/shared/api/request";

interface AdminAuthProps {
  children: React.ReactNode;
  onAuthSuccess?: () => void;
}

interface AdminUser {
  steamId: string;
  username: string;
  isAdmin: boolean;
  adminLevel: number;
  lastAdminAccess: string;
}

const AdminAuthGuard: React.FC<AdminAuthProps> = ({ children, onAuthSuccess }) => {
  const { token, user } = useSelector((state: RootState) => state.auth);
  const isLoggedIn = !!token && !!user;
  const [isVerifying, setIsVerifying] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [adminData, setAdminData] = useState<AdminUser | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [sessionExpiry, setSessionExpiry] = useState<Date | null>(null);

  // Check if user is logged in with Steam
  useEffect(() => {
    if (!isLoggedIn || !user) {
      setIsVerifying(false);
      return;
    }

    verifyAdminAccess();
  }, [isLoggedIn, user]);

  // Session timeout check
  useEffect(() => {
    if (sessionExpiry) {
      const timeout = setTimeout(() => {
        handleSessionExpired();
      }, sessionExpiry.getTime() - Date.now());

      return () => clearTimeout(timeout);
    }
  }, [sessionExpiry]);

  const verifyAdminAccess = async () => {
    setIsVerifying(true);
    setError(null);

    try {
      // Backend will validate admin status automatically based on token
      const response = await apiRequest.get<{
        isAdmin: boolean;
        adminData: AdminUser;
        sessionExpiry: string;
      }>("/admin/verify-access");

      if (!response.data.isAdmin) {
        setError("Access denied. Administrator privileges required.");
        setIsVerifying(false);
        return;
      }

      setAdminData(response.data.adminData);
      setSessionExpiry(new Date(response.data.sessionExpiry));
      setIsAuthorized(true);
      onAuthSuccess?.();
    } catch (err: any) {
      if (err.response?.status === 403) {
        setError("Access denied. Administrator privileges required.");
      } else if (err.response?.status === 401) {
        setError("Please log in to access the admin panel.");
      } else {
        setError(err.response?.data?.message || "Failed to verify admin access");
      }
    } finally {
      setIsVerifying(false);
    }
  };

  const handleSessionExpired = () => {
    setIsAuthorized(false);
    setSessionExpiry(null);
    setError("Admin session has expired. Please re-authenticate.");
  };

  const refreshSession = async () => {
    await verifyAdminAccess();
  };

  // Not logged in with Steam
  if (!isLoggedIn || !user) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <Card className="text-center" style={{ maxWidth: "400px" }}>
          <Card.Body className="p-5">
            <div className="mb-4">
              <i className="bi bi-shield-lock fs-1 text-danger"></i>
            </div>
            <h4 className="mb-3">Steam Login Required</h4>
            <p className="text-muted mb-4">
              You must be logged in with Steam to access the admin panel.
            </p>
            <Button 
              variant="primary" 
              onClick={() => window.location.href = "/"}
              className="w-100"
            >
              <i className="bi bi-house me-2"></i>
              Go to Home
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }

  // Verifying admin access
  if (isVerifying) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <Card className="text-center" style={{ maxWidth: "400px" }}>
          <Card.Body className="p-5">
            <Spinner animation="border" size="sm" className="mb-3" />
            <h5>Verifying Access</h5>
            <p className="text-muted mb-0">
              Checking administrator privileges...
            </p>
          </Card.Body>
        </Card>
      </div>
    );
  }

  // Access denied
  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <Card className="text-center" style={{ maxWidth: "500px" }}>
          <Card.Body className="p-5">
            <div className="mb-4">
              <i className="bi bi-exclamation-triangle fs-1 text-warning"></i>
            </div>
            <h4 className="mb-3 text-danger">Access Denied</h4>
            <Alert variant="danger" className="text-start">
              {error}
            </Alert>
            <div className="d-flex gap-2 justify-content-center">
              <Button 
                variant="outline-primary" 
                onClick={() => window.location.href = "/"}
              >
                <i className="bi bi-house me-2"></i>
                Go Home
              </Button>
              <Button 
                variant="primary" 
                onClick={verifyAdminAccess}
              >
                <i className="bi bi-arrow-clockwise me-2"></i>
                Retry
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }

  // Authorized - Show admin content
  return (
    <div>
      {/* Session info bar */}
      <div className="bg-success text-white px-3 py-2 small d-flex justify-content-between align-items-center">
        <div>
          <i className="bi bi-shield-check me-2"></i>
          Admin Session Active - {adminData?.username}
        </div>
        <div className="d-flex align-items-center gap-3">
          {sessionExpiry && (
            <span>
              Expires: {sessionExpiry.toLocaleTimeString()}
            </span>
          )}
          <Button 
            variant="outline-light" 
            size="sm"
            onClick={refreshSession}
          >
            <i className="bi bi-arrow-clockwise"></i>
          </Button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default AdminAuthGuard;
