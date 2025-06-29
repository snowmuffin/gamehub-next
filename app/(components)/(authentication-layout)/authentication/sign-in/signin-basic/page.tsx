"use client";
import Seo from "@/shared/layout-components/seo";
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
      // 허용된 origin 목록 (HTTP/HTTPS 모두 포함)
      const allowedOrigins = [
        window.location.origin,                   // 현재 페이지 origin
        'http://REDACTED_IP:4000',             // 백엔드 IP
        'https://REDACTED_API',        // 백엔드 도메인
        'http://REDACTED_DOMAIN',          // 프론트 도메인 (HTTP)
        'https://REDACTED_DOMAIN',         // 프론트 도메인 (HTTPS)
      ];
      
      // 추가적으로 도메인이 같으면 프로토콜 차이는 허용
      const currentHost = window.location.hostname;
      const eventUrl = new URL(event.origin);
      const isAllowedDomain = eventUrl.hostname === currentHost || 
                              eventUrl.hostname === 'REDACTED_DOMAIN' ||
                              eventUrl.hostname === 'REDACTED_API' ||
                              eventUrl.hostname === 'REDACTED_IP';
      
      if (!allowedOrigins.includes(event.origin) && !isAllowedDomain) return; // 보안 확인
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
    // 현재 origin을 백엔드에 전달하여 올바른 postMessage target을 설정할 수 있도록 함
    const currentOrigin = window.location.origin;
    const baseUrl = process.env.NEXT_PUBLIC_STEAM_AUTH_URL || "http://localhost:4000/auth/steam";
    
    // URL에 현재 origin을 파라미터로 추가
    const steamAuthUrl = `${baseUrl}?origin=${encodeURIComponent(currentOrigin)}`;
    
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
