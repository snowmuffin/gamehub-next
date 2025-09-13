"use client";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

import Seo from "@/shared/layout-components/seo";

const CommandsKo = () => (
  <Fragment>
    <Seo title="명령어 안내" />
    <Row className="justify-content-center">
      <Col xl={12}>
        <Card className="custom-card overflow-hidden">
          <div className="top-left"></div>
          <div className="top-right"></div>
          <div className="bottom-left"></div>
          <div className="bottom-right"></div>
          <Card.Body className="p-5">
            <div className="text-primary h5 fw-medium mb-4">SEK 서버 - 명령어 안내</div>
            <div className="server-commands border p-3 overflow-scroll">
              <h5 className="fw-medium pb-3 text-primary">아이템 관련 명령어</h5>
              <ol className="fs-14">
                <li className="mb-3">
                  <span className="fw-medium text-primary">
                    !cmd uploaditem &lt;itemname&gt; [quantity]
                  </span>
                  <div className="text-muted">
                    캐릭터 인벤토리에 있는 아이템을 웹 인벤토리로 업로드 합니다.
                  </div>
                </li>
                <li className="mb-3">
                  <span className="fw-medium text-primary">!cmd listitems</span>
                  <div className="text-muted">
                    캐릭터 인벤토리에 있는 아이템 목록을 표시합니다. (업로드 시 사용 가능한 이름
                    제공)
                  </div>
                </li>
                <li className="mb-3">
                  <span className="fw-medium text-primary">
                    !cmd downloaditem &lt;item_name&gt; &lt;quantity&gt;
                  </span>
                  <div className="text-muted">웹 인벤토리에서 아이템을 다운로드합니다.</div>
                </li>
                <li className="mb-3">
                  <span className="fw-medium text-primary">!cmd globalencounters gps</span>
                  <div className="text-muted">세션 내 모든 팩토럼 GPS 좌표를 조회합니다.</div>
                </li>
              </ol>
              <h5 className="fw-medium pb-3 text-primary mt-4">블록 관련 명령어</h5>
              <ol className="fs-14">
                <li className="mb-3">
                  <span className="fw-medium text-primary">!blocklimit limits</span>
                  <div className="text-muted">서버 블럭 제한 현황을 확인합니다.</div>
                </li>
                <li className="mb-3">
                  <span className="fw-medium text-primary">!blocklimit mylimit</span>
                  <div className="text-muted">본인의 블럭 제한 현황을 확인합니다.</div>
                </li>
                <li className="mb-3">
                  <span className="fw-medium text-primary">!blocklimit update mylimit</span>
                  <div className="text-muted">블럭 제한 현황을 최신화 합니다.</div>
                </li>
              </ol>
              <h5 className="fw-medium pb-3 text-primary mt-4">기타 명령어</h5>
              <ol className="fs-14">
                <li className="mb-3">
                  <span className="fw-medium text-primary">/bi cn</span>
                  <div className="text-muted">컨베이어 연결 상태를 표시합니다.</div>
                </li>
                <li className="mb-3">
                  <span className="fw-medium text-primary">!entities refresh</span>
                  <div className="text-muted">주변 싱크를 다시 맞추는 명령어입니다.</div>
                </li>
                <li className="mb-3">
                  <span className="fw-medium text-primary">!fixship</span>
                  <div className="text-muted">바라보고 있는 그리드의 문제를 해결합니다.</div>
                </li>
                <li>
                  <span className="fw-medium text-primary">
                    !transfer &lt;PlayerName&gt; [GridName]
                  </span>
                  <div className="text-muted">
                    특정 플레이어에게 그리드 소유권을 넘깁니다. 그리드 이름을 생략하면 바라보고 있는
                    그리드의 소유권을 넘길 수 있습니다.
                  </div>
                </li>
              </ol>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Fragment>
);

export default CommandsKo;
