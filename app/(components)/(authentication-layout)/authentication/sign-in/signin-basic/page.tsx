"use client";
import { useRouter } from "next/navigation";
import React, { Fragment, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";

import Seo from "@/shared/layout-components/seo";

const SigninBasic = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to dashboard since login is now handled in the header
    router.push("/dashboard/gaming");
  }, [router]);

  return (
    <Fragment>
      <Seo title="Redirecting..." />
      <div dir="ltr" className="container">
        <Row className="justify-content-center align-items-center authentication authentication-basic h-100">
          <Col xxl={5} xl={5} lg={5} md={6} sm={8} className="col-12">
            <Card className="custom-card my-4">
              <Card.Body className="p-5 text-center">
                <h3 className="text-center mb-4">페이지를 이동하는 중...</h3>
                <p>로그인은 이제 상단 헤더에서 진행할 수 있습니다.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default SigninBasic;
