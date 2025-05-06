"use client"
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import Link from 'next/link';

const ProfileDropdown = () => {
  return (
    <Dropdown className="header-element dropdown">
      <Dropdown.Toggle as="a" href="#!" className="header-link dropdown-toggle no-caret" id="mainHeaderProfile" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
        <div className="d-flex align-items-center">
          <div>
            <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/faces/22.jpg`} alt="img" className="avatar avatar-sm rounded-0" />
          </div>
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu as="ul" className="main-header-dropdown dropdown-menu pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end" aria-labelledby="mainHeaderProfile">
        <Dropdown.Item as="li"><Link className="d-flex align-items-center" href="/pages/profile"><i className="bi bi-person fs-18 me-2 op-7"></i>Profile</Link></Dropdown.Item>
        <Dropdown.Item as="li"><Link className="d-flex align-items-center" href="/pages/email/mail-app"><i className="bi bi-envelope fs-16 me-2 op-7"></i>Inbox <span className="ms-auto badge bg-info">17</span></Link></Dropdown.Item>
        <Dropdown.Item as="li"><Link className="d-flex align-items-center" href="/pages/todolist"><i className="bi bi-check-square fs-16 me-2 op-7"></i>Task Manager</Link></Dropdown.Item>
        <Dropdown.Item as="li"><Link className="d-flex align-items-center" href="/pages/email/mail-settings"><i className="bi bi-gear fs-16 me-2 op-7"></i>Settings</Link></Dropdown.Item>
        <Dropdown.Item as="li"><Link className="d-flex align-items-center" href="/pages/chat"><i className="bi bi-headset fs-18 me-2 op-7"></i>Support</Link></Dropdown.Item>
        <Dropdown.Item as="li"><Link className="d-flex align-items-center" href="/authentication/sign-in/signin-cover"><i className="bi bi-box-arrow-right fs-18 me-2 op-7"></i>Log Out</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProfileDropdown;
