import React from "react";
import { Card } from "react-bootstrap";
import { NewEvent } from "@/shared/data/dashboard/gamingdata";
import DropdownMenu from "./DropdownMenu";

const NewEventsCard = () => (
    <Card className="custom-card">
        <div className="top-left"></div>
        <div className="top-right"></div>
        <div className="bottom-left"></div>
        <div className="bottom-right"></div>
        <Card.Body>
            <div className="mb-3 d-flex align-items-start justify-content-between">
                <div>
                    <span className="text-fixed-white fs-11">New Events</span>
                    <h4 className="text-fixed-white mb-0">
                        13,278
                        <span className="text-success fs-12 ms-2 fw-semibold d-inline-block">
                            <i className="ti ti-trending-up align-middle me-1 d-inline-block"></i>0.25%
                        </span>
                    </h4>
                </div>
                <DropdownMenu />
            </div>
            <div id="new-issues">
                <NewEvent />
            </div>
        </Card.Body>
    </Card>
);

export default NewEventsCard;
