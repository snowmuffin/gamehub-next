"use client";
import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import Link from "next/link";

const NotificationDropdown = () => {
  const span1 = <span className="text-warning">ID: #1116773</span>;
  const span2 = <span className="text-success">ID: 7731116</span>;
  const img1 = (
    <span className="avatar avatar-rounded">
      <img src="/assets/images/faces/6.jpg" />
    </span>
  );
  const img2 = (
    <span className="avatar avatar-rounded">
      <img src="/assets/images/faces/23.jpg" />
    </span>
  );
  const img3 = (
    <span className="avatar avatar-rounded">
      <img src="/assets/images/faces/11.jpg" />
    </span>
  );
  const icon1 = (
    <span className="avatar bg-success-transparent avatar-rounded">
      <i className="ri-arrow-left-down-fill fs-18"></i>
    </span>
  );
  const icon2 = (
    <span className="avatar bg-info-transparent avatar-rounded">
      <i className="ri-calendar-schedule-line fs-18"></i>
    </span>
  );

  const notifydata = [
    { id: 1, src1: img1, heading: "Jessica Lily", data: "Reminder to complete your weekly tasks" },
    {
      id: 2,
      src1: img2,
      heading: "Payment Received",
      data: "You've been paid for freelance project."
    },
    {
      id: 3,
      src1: img3,
      heading: "New Message",
      data: "You've received a new message from a friend."
    },
    {
      id: 4,
      src1: icon1,
      heading: "Appointment Confirmed",
      data: "Your appointment for next week has been confirmed."
    },
    {
      id: 5,
      src1: icon2,
      heading: "Exclusive Offer",
      data: "Limited-time offer just for you! Check it out now."
    }
  ];

  const [notifications, setNotifications] = useState([...notifydata]);

  const handleNotificationClose = (
    index: number,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (event) {
      event.stopPropagation();
    }
    const updatedNotifications = [...notifications];
    updatedNotifications.splice(index, 1);
    setNotifications(updatedNotifications);
  };

  return (
    <Dropdown className="header-element notifications-dropdown dropdown">
      <Dropdown.Toggle
        as="a"
        href="#!"
        className="header-link dropdown-toggle no-caret"
        data-bs-auto-close="outside"
        data-bs-toggle="dropdown"
      >
        <i className="bi bi-bell header-link-icon"></i>
        <span className="header-icon-pulse bg-warning rounded pulse"></span>
      </Dropdown.Toggle>
      <Dropdown.Menu
        className="main-header-dropdown dropdown-menu dropdown-menu-end"
        data-popper-placement="none"
      >
        <div className="p-3">
          <div className="d-flex align-items-center justify-content-between">
            <p className="mb-0 fs-16">Notifications</p>
            <span className="badge bg-secondary-transparent" id="notifiation-data">
              {notifications.length}
            </span>
          </div>
        </div>
        <div className="dropdown-divider"></div>
        <ul className="list-unstyled mb-0 overflow-y-scroll" id="header-notification-scroll">
          {notifications.map((idx, index) => (
            <Dropdown.Item as="li" className="dropdown-item" key={Math.random()}>
              <div className="d-flex align-items-center">
                <div className="pe-2 lh-1">{idx.src1}</div>
                <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                  <div>
                    <p className="mb-0 fw-medium">
                      <Link href="/pages/notifications">{idx.heading}</Link>
                    </p>
                    <span className="text-muted fw-normal fs-12 header-notification-text">
                      {idx.data}
                    </span>
                  </div>
                  <div>
                    <Link
                      href="#!"
                      onClick={(event) => handleNotificationClose(index, event)}
                      className="min-w-fit-content text-muted me-1 dropdown-item-close1"
                    >
                      <i className="bi bi-x fs-16"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </Dropdown.Item>
          ))}
        </ul>
        <div
          className={`p-3 empty-header-item1 border-top ${notifications.length === 0 ? "d-none" : "block"}`}
        >
          <div className="text-center">
            <Link href="/pages/notifications" className="link-primary text-decoration-underline">
              View All
            </Link>
          </div>
        </div>
        <div className={`p-5 empty-item1 ${notifications.length === 0 ? "block" : "d-none"}`}>
          <div className="text-center">
            <span className="avatar avatar-xl avatar-rounded bg-secondary-transparent">
              <i className="bi bi-bell-slash fs-2"></i>
            </span>
            <h6 className="fw-medium mt-3">No New Notifications</h6>
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NotificationDropdown;
