"use client";
import React from "react";
import { Dropdown } from "react-bootstrap";
import Link from "next/link";
import ReactCountryFlag from "react-country-flag";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "@/shared/redux/languageSlice"; // Update path if needed

function setLangCookie(lang: string) {
  if (typeof document === "undefined") return;
  const d = new Date();
  d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
  document.cookie = `lang=${encodeURIComponent(lang)}; expires=${d.toUTCString()}; path=/`;
}

const LANGUAGE_OPTIONS = [
  { code: "en", label: "English", countryCode: "US" },
  { code: "ko", label: "한국어", countryCode: "KR" }
  // Add more languages by mapping to appropriate ISO 3166-1 alpha-2 country codes
] as const;

const LanguageDropdown = () => {
  const dispatch = useDispatch();
  const language = useSelector((state: any) => state.language.code);

  React.useEffect(() => {
    console.log("Current language:", language);
  }, [language]);

  const handleSelect = (langCode: string) => {
    dispatch(setLanguage(langCode));
    setLangCookie(langCode);
  };

  const selected = LANGUAGE_OPTIONS.find((l) => l.code === language) || LANGUAGE_OPTIONS[0];

  return (
    <Dropdown className="header-element country-selector dropdown">
      <Dropdown.Toggle
        as="a"
        href="#!"
        className="header-link dropdown-toggle"
        data-bs-auto-close="outside"
        data-bs-toggle="dropdown"
      >
        <ReactCountryFlag
          countryCode={selected.countryCode}
          svg
          aria-label={selected.label}
          style={{ width: 20, height: 20, borderRadius: 4 }}
        />
        <span style={{ marginLeft: 8 }}>{selected.label}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu
        className="main-header-dropdown dropdown-menu dropdown-menu-end"
        data-popper-placement="none"
      >
        {LANGUAGE_OPTIONS.map((option) => (
          <Link
            key={option.code}
            className="dropdown-item d-flex align-items-center"
            href="#!"
            scroll={false}
            onClick={() => handleSelect(option.code)}
          >
            <span
              className="avatar avatar-xs lh-1 me-2"
              style={{ display: "inline-flex", alignItems: "center" }}
            >
              <ReactCountryFlag
                countryCode={option.countryCode}
                svg
                style={{ width: 18, height: 18, borderRadius: 3 }}
              />
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
