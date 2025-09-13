import React from "react";
import { Dropdown } from "react-bootstrap";
import Link from "next/link";

const DropdownMenu = () => (
  <Dropdown>
    <Dropdown.Toggle
      as="a"
      aria-label="anchor"
      href="#!"
      data-bs-toggle="dropdown"
      className="op-4 no-caret"
    >
      <i className="bi bi-grid text-primary"></i>
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item as="li">
        <Link href="#!">Day</Link>
      </Dropdown.Item>
      <Dropdown.Item as="li">
        <Link href="#!">Week</Link>
      </Dropdown.Item>
      <Dropdown.Item as="li">
        <Link href="#!">Year</Link>
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

export default DropdownMenu;
