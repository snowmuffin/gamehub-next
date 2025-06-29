"use client";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

const RulesEn = () => (
    <Fragment>
        <Seo title="Server Rules" />
        <Row className="justify-content-center">
            <Col xl={12}>
                <Card className="custom-card overflow-hidden">
                    <div className="top-left"></div>
                    <div className="top-right"></div>
                    <div className="bottom-left"></div>
                    <div className="bottom-right"></div>
                    <Card.Body className="p-5">
                        <div className="text-primary h5 fw-medium mb-4">
                            SEK Server - Rules & Notices
                        </div>
                        <div className="server-rules border p-3 overflow-scroll">
                            <div className="mb-4 fs-14">
                                <p className="mb-3">
                                    <span className="fw-medium text-default">
                                        Please read and follow the rules and notices below to ensure a fair and enjoyable experience for everyone.
                                    </span>
                                </p>
                            </div>
                            <ol className="fs-14">
                                <li className="mb-4">
                                    <p className="fw-medium mb-2 fs-14 text-primary">No Cheating or Exploiting</p>
                                    <p className="mb-0 text-muted">
                                        The use of cheats, hacks, or exploits is not allowed. Report any bugs or exploits to the staff.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <p className="fw-medium mb-2 fs-14 text-primary">Follow Staff Instructions</p>
                                    <p className="mb-0 text-muted">
                                        Listen to and cooperate with server staff and moderators at all times.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <p className="fw-medium mb-2 fs-14 text-primary">Server-related Inquiries</p>
                                    <p className="mb-0 text-muted">
                                        Please check the Help section first, then contact a server administrator.<br />
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <p className="fw-medium mb-2 fs-14 text-primary">NPC Grid Reuse</p>
                                    <p className="mb-0 text-muted">
                                        Reusing an NPC grid without renaming it or claiming ownership may cause issues.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <p className="fw-medium mb-2 fs-14 text-primary">In‑game Names</p>
                                    <p className="mb-0 text-muted">
                                        Using non-English characters for factions, blocks, grids, or usernames can lead to errors—please use English letters whenever possible.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <p className="fw-medium mb-2 fs-14 text-primary">PvP Rules</p>
                                    <p className="mb-0 text-muted">
                                        There are no PvP restrictions—feel free to engage in combat freely.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <p className="fw-medium mb-2 fs-14 text-primary">Building Restrictions</p>
                                    <p className="mb-0 text-muted">
                                        Construction of enormous structures or abuse of scripts that negatively impact server performance may be restricted.
                                    </p>
                                </li>
                                <li>
                                    <p className="fw-medium mb-2 fs-14 text-primary">Grid Restore</p>
                                    <p className="mb-0 text-muted">
                                        If you would like to request restore for a grid deleted due to an error, please contact us via the Grid-Restore channel. DMs will no longer be accepted.
                                        <ul className="mt-2">
                                            <li>
                                                <strong>6-1.</strong> If grid name is default, it will not be eligible for restoration.
                                            </li>
                                            <li>
                                                <strong>6-2.</strong> The issue was caused by physical destruction (even if it appears to be a bug), it will not be eligible for restoration.
                                            </li>
                                        </ul>
                                    </p>
                                </li>
                            </ol>
                            <div className="mt-4 fs-14">
                                <p>
                                    For more detailed rules and updates, please visit our Discord or website regularly.
                                </p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Fragment>
);

export default RulesEn;
