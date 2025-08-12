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
      console.log("🔍 Steam Login - 메시지 수신:", {
        origin: event.origin,
        data: event.data,
        timestamp: new Date().toISOString()
      });

      // 환경변수 기반 허용된 origin 목록
      const baseOrigins = [
        window.location.origin, // 현재 페이지 origin
        "http://13.125.32.159:4000", // 백엔드 IP
        process.env.NEXT_PUBLIC_API_URL || "https://api.snowmuffingame.com", // 백엔드 도메인
        `http://${process.env.NEXT_PUBLIC_FRONTEND_DOMAIN || "se.snowmuffingame.com"}`, // 프론트 도메인 (HTTP)
        process.env.NEXT_PUBLIC_FRONTEND_URL || "https://se.snowmuffingame.com" // 프론트 도메인 (HTTPS)
      ];

      // 추가 허용 도메인들 (환경변수에서 읽기)
      const additionalOrigins = process.env.NEXT_PUBLIC_ALLOWED_ORIGINS 
        ? process.env.NEXT_PUBLIC_ALLOWED_ORIGINS.split(',').map(origin => origin.trim())
        : [];

      const allowedOrigins = [...baseOrigins, ...additionalOrigins];

      // 추가적으로 도메인이 같으면 프로토콜 차이는 허용
      const currentHost = window.location.hostname;
      let eventUrl: URL;
      try {
        eventUrl = new URL(event.origin);
      } catch (e) {
        console.warn("🚨 Invalid origin URL:", event.origin);
        return;
      }

      const isAllowedDomain =
        eventUrl.hostname === currentHost ||
        eventUrl.hostname === (process.env.NEXT_PUBLIC_FRONTEND_DOMAIN || "se.snowmuffingame.com") ||
        eventUrl.hostname === (process.env.NEXT_PUBLIC_API_DOMAIN || "api.snowmuffingame.com") ||
        eventUrl.hostname === "13.125.32.159";

      console.log("🔒 Steam Login - Origin 검증:", {
        eventOrigin: event.origin,
        allowedOrigins,
        isAllowedDomain,
        currentHost,
        eventHostname: eventUrl.hostname
      });

      if (!allowedOrigins.includes(event.origin) && !isAllowedDomain) {
        console.warn("🚨 Steam Login - 허용되지 않은 origin:", event.origin);
        return;
      }

      const { status, token, user, error } = event.data;

      console.log("✅ Steam Login - 메시지 처리:", {
        status,
        hasToken: !!token,
        hasUser: !!user,
        error
      });

      if (status === 200 && token) {
        console.log("🎉 Steam Login 성공! 토큰 저장 및 리디렉션...");
        setIsLoginInProgress(false);
        
        // Redux 상태 업데이트 (올바른 액션 사용)
        dispatch(loginSuccess(token));

        // 토큰을 로컬 스토리지에도 저장
        try {
          localStorage.setItem('authToken', token);
          if (user) {
            localStorage.setItem('user', JSON.stringify(user));
          }
        } catch (e) {
          console.warn("로컬 스토리지 저장 실패:", e);
        }

        // 약간의 지연 후 리디렉션 (Redux 상태 업데이트 완료 대기)
        setTimeout(() => {
          router.push("/dashboard/gaming");
        }, 100);
      } else if (status === 401) {
        console.error("🚨 Steam Login 실패:", error);
        setIsLoginInProgress(false);
        dispatch(loginFailure(error || "Steam authentication failed."));
        setClientError(error || "Steam authentication failed.");
      } else {
        console.warn("🤔 Steam Login - 예상치 못한 응답:", { status, error });
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
  }, [dispatch]);

  const handleSteamLogin = () => {
    console.log("🚀 Steam Login 시작...");
    setIsLoginInProgress(true);
    setClientError(null); // 이전 에러 초기화
    dispatch(loginStart()); // Redux 상태 업데이트
    
    // 현재 origin을 백엔드에 전달하여 올바른 postMessage target을 설정할 수 있도록 함
    const currentOrigin = window.location.origin;
    const baseUrl = process.env.NEXT_PUBLIC_STEAM_AUTH_URL || "https://api-test.snowmuffingame.com/auth/steam";

    console.log("🔧 Steam Login 설정:", {
      currentOrigin,
      baseUrl,
      frontendUrl: process.env.NEXT_PUBLIC_FRONTEND_URL,
      apiUrl: process.env.NEXT_PUBLIC_API_URL
    });

    // URL에 현재 origin을 파라미터로 추가
    const steamAuthUrl = `${baseUrl}?origin=${encodeURIComponent(currentOrigin)}`;

    console.log("🌐 팝업 열기:", steamAuthUrl);

    const popup = window.open(steamAuthUrl, "Steam Login", "width=600,height=700,scrollbars=yes,resizable=yes");

    if (!popup) {
      console.error("🚨 팝업이 차단되었습니다!");
      setIsLoginInProgress(false);
      const errorMsg = "Popup was blocked. Please allow popups for this site.";
      dispatch(loginFailure(errorMsg));
      setClientError(errorMsg);
      return;
    }

    const interval = setInterval(() => {
      if (popup && popup.closed) {
        clearInterval(interval);
        console.log("📱 팝업이 닫혔습니다");
        
        // 팝업이 닫혔을 때 일정 시간 후에도 성공 메시지가 없으면 에러 처리
        setTimeout(() => {
          // 로그인이 진행 중이었지만 완료되지 않았다면 실패로 간주
          if (isLoginInProgress && !token) {
            console.warn("🤔 팝업이 닫혔지만 로그인이 완료되지 않았습니다");
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
        console.warn("⏰ Steam Login 타임아웃");
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
