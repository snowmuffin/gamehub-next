"use client";
import React from "react";
import Link from "next/link";

const SwitcherIcon = () => {
  const handleSwitcherIconClick = () => {
    const offcanvas = document.querySelector(".offcanvas-end");
    const backdrop = document.querySelector(".switcher-backdrop");

    offcanvas?.classList.toggle("show");
    if (backdrop?.classList.contains("d-none")) {
      backdrop.classList.add("d-block");
      backdrop.classList.remove("d-none");
    }
  };

  return (
    <li className="header-element">
      <Link
        href="#!"
        scroll={false}
        onClick={handleSwitcherIconClick}
        className="header-link switcher-icon"
        data-bs-toggle="offcanvas"
        data-bs-target="#switcher-canvas"
      >
        <i className="bi bi-gear header-link-icon border-0"></i>
      </Link>
    </li>
  );
};

export default SwitcherIcon;
