"use client"
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import Link from 'next/link';

const LanguageDropdown = () => {
  return (
    <Dropdown className="header-element country-selector dropdown">
      <Dropdown.Toggle as="a" href="#!" className="header-link dropdown-toggle" data-bs-auto-close="outside" data-bs-toggle="dropdown">
        <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/flags/us_flag.jpg`} alt="img" className="header-link-icon" />
      </Dropdown.Toggle>
      <Dropdown.Menu className="main-header-dropdown dropdown-menu dropdown-menu-end" data-popper-placement="none">
        <Link className="dropdown-item d-flex align-items-center" href="#!" scroll={false}>
          <span className="avatar avatar-xs lh-1 me-2">
            <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/flags/us_flag.jpg`} alt="img" />
          </span>
          English
        </Link>
        <Link className="dropdown-item d-flex align-items-center" href="#!" scroll={false}>
          <span className="avatar avatar-xs lh-1 me-2">
            <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/flags/spain_flag.jpg`} alt="img" />
          </span>
          Spanish
        </Link>
        {/* Add more languages as needed */}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageDropdown;
