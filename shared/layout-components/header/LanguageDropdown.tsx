"use client";
import React from "react";
import { Dropdown } from "react-bootstrap";
import Link from "next/link";
import { basePath } from "@/next.config";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "@/shared/redux/languageSlice"; // Update path if needed

const LANGUAGE_OPTIONS = [
  { code: "en", label: "English", flag: "/assets/images/flags/us_flag.jpg" },
  { code: "ko", label: "한국어", flag: "/assets/images/flags/kr_flag.jpg" }
  // ...Add more languages here if needed...
];

const LanguageDropdown = () => {
  const dispatch = useDispatch();
  const language = useSelector((state: any) => state.language.code);

  React.useEffect(() => {
    console.log("Current language:", language);
  }, [language]);

  const handleSelect = (langCode: string) => {
    dispatch(setLanguage(langCode));
  };

  const selected = LANGUAGE_OPTIONS.find(l => l.code === language) || LANGUAGE_OPTIONS[0];

  return (
    <Dropdown className="header-element country-selector dropdown">
      <Dropdown.Toggle
        as="a"
        href="#!"
        className="header-link dropdown-toggle"
        data-bs-auto-close="outside"
        data-bs-toggle="dropdown"
      >
        <img
          src={`${process.env.NODE_ENV === "production" ? basePath : ""}${selected.flag}`}
          alt="img"
          className="header-link-icon"
        />
        <span style={{ marginLeft: 8 }}>{selected.label}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu className="main-header-dropdown dropdown-menu dropdown-menu-end" data-popper-placement="none">
        {LANGUAGE_OPTIONS.map(option => (
          <Link
            key={option.code}
            className="dropdown-item d-flex align-items-center"
            href="#!"
            scroll={false}
            onClick={() => handleSelect(option.code)}
          >
            <span className="avatar avatar-xs lh-1 me-2">
              <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}${option.flag}`} alt="img" />
            </span>
            {option.label}
            {language === option.code && (
              <span style={{ marginLeft: "auto", color: "#007bff", fontWeight: 600 }}>✔</span>
            )}
          </Link>
        ))}
        {/* ...existing code... */}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageDropdown;
