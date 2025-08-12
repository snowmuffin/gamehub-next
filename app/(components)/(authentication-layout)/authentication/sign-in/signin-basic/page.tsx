"use client";
import Seo from "@/shared/layout-components/seo";
import { useSelector, useDispatch } from "react-redux";
import React, { Fragment, useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { RootState, AppDispatch } from "@/shared/redux/store";
import { loginSuccess, loginStart, loginFailure } from "@/shared/redux/authSlice";
import { useRouter } from "next/navigation";

const SigninBasic = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { loading, error, token } = useSelector((state: RootState) => state.auth);
  const [clientError, setClientError] = React.useState<string | null>(null);
  const [isLoginInProgress, setIsLoginInProgress] = React.useState(false);

  useEffect(() => {
    setClientError(error);
  }, [error]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // 환경변수 기반 허용된 origin 목록
      const baseOrigins = [
        window.location.origin, // 현재 페이지 origin
        "http://REDACTED_IP:4000", // 백엔드 IP
        process.env.NEXT_PUBLIC_API_URL || "https://REDACTED_API", // 백엔드 도메인
        `http://${process.env.NEXT_PUBLIC_FRONTEND_DOMAIN || "REDACTED_DOMAIN"}`, // 프론트 도메인 (HTTP)
        process.env.NEXT_PUBLIC_FRONTEND_URL || "https://REDACTED_DOMAIN" // 프론트 도메인 (HTTPS)
      ];

      // 추가 허용 도메인들 (환경변수에서 읽기)
      const additionalOrigins = process.env.NEXT_PUBLIC_ALLOWED_ORIGINS
        ? process.env.NEXT_PUBLIC_ALLOWED_ORIGINS.split(",").map(origin => origin.trim())
        : [];

      const allowedOrigins = [...baseOrigins, ...additionalOrigins];

      // 추가적으로 도메인이 같으면 프로토콜 차이는 허용
      const currentHost = window.location.hostname;
      let eventUrl: URL;
      try {
        eventUrl = new URL(event.origin);
      } catch (e) {
        return;
      }

      const isAllowedDomain =
        eventUrl.hostname === currentHost ||
        eventUrl.hostname === (process.env.NEXT_PUBLIC_FRONTEND_DOMAIN || "REDACTED_DOMAIN") ||
        eventUrl.hostname === (process.env.NEXT_PUBLIC_API_DOMAIN || "REDACTED_API") ||
        eventUrl.hostname === "REDACTED_IP";

      if (!allowedOrigins.includes(event.origin) && !isAllowedDomain) {
        return;
      }

      const { status, token, user, error } = event.data;

      if (status === 200 && token) {
        setIsLoginInProgress(false);

        // Redux 상태 업데이트 (올바른 액션 사용)
        dispatch(loginSuccess(token));

        // 토큰을 로컬 스토리지에도 저장
        try {
          localStorage.setItem("authToken", token);
          if (user) {
            localStorage.setItem("user", JSON.stringify(user));
          }
        } catch (e) {
          // 로컬 스토리지 저장 실패 시 무시
        }

        // 약간의 지연 후 리디렉션 (Redux 상태 업데이트 완료 대기)
        setTimeout(() => {
          router.push("/dashboard/gaming");
        }, 100);
      } else if (status === 401) {
        setIsLoginInProgress(false);
        dispatch(loginFailure(error || "Steam authentication failed."));
        setClientError(error || "Steam authentication failed.");
      } else {
        setIsLoginInProgress(false);
        const errorMsg = "Unexpected response from Steam authentication.";
        dispatch(loginFailure(errorMsg));
        setClientError(errorMsg);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [dispatch, router]);

  const handleSteamLogin = () => {
    setIsLoginInProgress(true);
    setClientError(null); // 이전 에러 초기화
    dispatch(loginStart()); // Redux 상태 업데이트

    // 현재 origin을 백엔드에 전달하여 올바른 postMessage target을 설정할 수 있도록 함
    const currentOrigin = window.location.origin;
    const baseUrl = process.env.NEXT_PUBLIC_STEAM_AUTH_URL || "https://REDACTED_API_TEST/auth/steam";

    // URL에 현재 origin을 파라미터로 추가
    const steamAuthUrl = `${baseUrl}?origin=${encodeURIComponent(currentOrigin)}`;

    const popup = window.open(steamAuthUrl, "Steam Login", "width=600,height=700,scrollbars=yes,resizable=yes");

    if (!popup) {
      setIsLoginInProgress(false);
      const errorMsg = "Popup was blocked. Please allow popups for this site.";
      dispatch(loginFailure(errorMsg));
      setClientError(errorMsg);
      return;
    }

    const interval = setInterval(() => {
      if (popup && popup.closed) {
        clearInterval(interval);

        // 팝업이 닫혔을 때 일정 시간 후에도 성공 메시지가 없으면 에러 처리
        setTimeout(() => {
          // 로그인이 진행 중이었지만 완료되지 않았다면 실패로 간주
          if (isLoginInProgress && !token) {
            const errorMsg = "Login was cancelled or failed. Please try again.";
            dispatch(loginFailure(errorMsg));
            setClientError(errorMsg);
            setIsLoginInProgress(false);
          }
        }, 1000);
      }
    }, 500);

    // 팝업이 30초 후에도 열려있으면 타임아웃
    setTimeout(() => {
      if (popup && !popup.closed) {
        popup.close();
        clearInterval(interval);
        const timeoutMsg = "Login timeout. Please try again.";
        dispatch(loginFailure(timeoutMsg));
        setIsLoginInProgress(false);
        setClientError(timeoutMsg);
      }
    }, 30000);
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
                <Button variant="primary" className="w-100" onClick={handleSteamLogin} disabled={loading}>
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
