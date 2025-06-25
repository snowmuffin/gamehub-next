"use client";
import Seo from "@/shared/layout-components/seo/seo";
import { useSelector, useDispatch } from "react-redux";
import React, { Fragment, useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { RootState, AppDispatch } from "@/shared/redux/store";

const SigninBasic = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const [clientError, setClientError] = React.useState<string | null>(null);

  useEffect(() => {
    setClientError(error);
  }, [error]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return; // 보안 확인
      const { status, token, user, error } = event.data;

      if (status === 200 && token) {
        // Redux 상태 업데이트
        dispatch({ type: "auth/steamLogin/fulfilled", payload: token });

        // 인증 완료 후 리디렉션
        window.location.href = "/dashboard/gaming";
      } else if (status === 401) {
        setClientError(error || "Steam authentication failed.");
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [dispatch]);

  const handleSteamLogin = () => {
    const steamAuthUrl = process.env.NEXT_PUBLIC_STEAM_AUTH_URL || "http://localhost:4000/auth/steam"; // Use environment variable with fallback
    const popup = window.open(
      steamAuthUrl,
      "Steam Login",
      "width=600,height=700"
    );

    const interval = setInterval(() => {
      if (popup && popup.closed) {
        clearInterval(interval);
        console.log("Popup closed");
      }
    }, 500);
  };

  return (
    <Fragment>
      <Seo title="Signin-Basic" />
      <div dir="ltr" className="container">
        <Row className="justify-content-center align-items-center authentication authentication-basic h-100">
          <Col xxl={5} xl={5} lg={5} md={6} sm={8} className="col-12">
            <Card className="custom-card my-4">
              <Card.Body className="p-5">
                <h3 className="text-center mb-4">Sign in with Steam</h3>
                {clientError && <p className="text-danger text-center">{clientError}</p>}
                <Button
                  variant="primary"
                  className="w-100"
                  onClick={handleSteamLogin}
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login with Steam"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default SigninBasic;
