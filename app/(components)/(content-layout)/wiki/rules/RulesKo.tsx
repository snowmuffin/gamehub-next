"use client";
import Seo from "@/shared/layout-components/seo";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

const RulesKo = () => (
  <Fragment>
    <Seo title="서버 규칙" />
    <Row className="justify-content-center">
      <Col xl={12}>
        <Card className="custom-card overflow-hidden">
          <div className="top-left"></div>
          <div className="top-right"></div>
          <div className="bottom-left"></div>
          <div className="bottom-right"></div>
          <Card.Body className="p-5">
            <div className="text-primary h5 fw-medium mb-4">SEK 서버 - 규칙 및 안내</div>
            <div className="server-rules border p-3 overflow-scroll">
              <div className="mb-4 fs-14">
                <p className="mb-3">
                  <span className="fw-medium text-default">
                    모든 이용자가 즐겁게 플레이할 수 있도록 아래 규칙과 안내사항을 꼭 지켜주세요.
                  </span>
                </p>
              </div>
              <ol className="fs-14">
                <li className="mb-4">
                  <p className="fw-medium mb-2 fs-14 text-primary">치트 및 버그 악용 금지</p>
                  <p className="mb-0 text-muted">
                    치트, 핵, 버그 악용은 허용되지 않습니다. 버그나 악용 사례는 운영진에게 신고해주세요.
                  </p>
                </li>
                <li className="mb-4">
                  <p className="fw-medium mb-2 fs-14 text-primary">운영진 안내 준수</p>
                  <p className="mb-0 text-muted">서버 운영진 및 관리자 안내에 항상 협조해주세요.</p>
                </li>
                <li className="mb-4">
                  <p className="fw-medium mb-2 fs-14 text-primary">서버 관련 문의</p>
                  <p className="mb-0 text-muted">
                    도움말을 먼저 확인한 후 서버 운영자에게 문의해 주세요.
                    <br />
                  </p>
                </li>
                <li className="mb-4">
                  <p className="fw-medium mb-2 fs-14 text-primary">NPC 그리드 재활용</p>
                  <p className="mb-0 text-muted">
                    NPC 그리드의 이름 변경 없이 재활용하거나 소유권을 얻지 않은 상태에서 사용할 경우 문제가 발생할 수
                    있습니다.
                  </p>
                </li>
                <li className="mb-4">
                  <p className="fw-medium mb-2 fs-14 text-primary">인게임 이름</p>
                  <p className="mb-0 text-muted">
                    팩션, 블록, 그리드, 유저명 등에 영어가 아닌 문자를 사용할 경우 문제가 생길 수 있으므로, 가급적 영어
                    알파벳을 사용해 주세요.
                  </p>
                </li>
                <li className="mb-4">
                  <p className="fw-medium mb-2 fs-14 text-primary">PVP 규칙</p>
                  <p className="mb-0 text-muted">PVP 제한은 따로 없으며, 자유롭게 전투를 즐길 수 있습니다.</p>
                </li>
                <li className="mb-4">
                  <p className="fw-medium mb-2 fs-14 text-primary">건설 제한</p>
                  <p className="mb-0 text-muted">
                    대규모 구조물이나 스크립트 남용으로 서버 환경에 영향을 미칠 경우 제한될 수 있습니다.
                  </p>
                </li>
                <li>
                  <p className="fw-medium mb-2 fs-14 text-primary">그리드 복구</p>
                  <p className="mb-0 text-muted">
                    오류로 인한 그리드 삭제로 복구를 원하시는 경우 Grid-Restore 채널로 문의해주시길 바랍니다. DM은 이제
                    받지 않겠습니다.
                    <ul className="mt-2">
                      <li>
                        <strong>6-1.</strong> 그리드 이름이 기본 이름 그대로인 경우는 복구해드리지 않습니다.
                      </li>
                      <li>
                        <strong>6-2.</strong> 버그로 보이더라도 물리적 파손으로 인한 경우에는 복구 대상이 아닙니다.
                      </li>
                    </ul>
                  </p>
                </li>
              </ol>
              <div className="mt-4 fs-14">
                <p>보다 자세한 규칙과 최신 안내는 디스코드 또는 홈페이지를 참고해주세요.</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Fragment>
);

export default RulesKo;
