"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/shared/redux/store";
import { setLanguage } from "@/shared/redux/languageSlice";

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([.$?*|{}()\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name: string, value: string, days = 365) {
  if (typeof document === "undefined") return;
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/`;
}

// Sync language from cookie -> Redux on mount, and Redux -> cookie on change
export default function LanguageInitializer() {
  const dispatch = useDispatch();
  const lang = useSelector((s: RootState) => s.language.code);

  // On first mount, if cookie exists and differs, update store
  React.useEffect(() => {
    const cookieLang = getCookie("lang");
    if (cookieLang && cookieLang !== lang) {
      dispatch(setLanguage(cookieLang));
    }
    // If no cookie, set it to current lang
    if (!cookieLang && lang) setCookie("lang", lang);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Whenever language changes, update cookie
  React.useEffect(() => {
    if (lang) {
      setCookie("lang", lang);
      if (typeof document !== "undefined") {
        document.documentElement.lang = lang;
      }
    }
  }, [lang]);

  return null;
}
