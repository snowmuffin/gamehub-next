"use client";
import { useRouter, usePathname } from "next/navigation";
import Script from "next/script";
import React, { useEffect } from "react";
import { connect } from "react-redux";

import * as switcherdata from "@/shared/data/switcherdata/switcherdata";
import { ThemeChanger } from "@/shared/redux/action";

function Layout({ children, local_variable, ThemeChanger }: any) {
  const router = useRouter();
  const pathname = usePathname(); // Use usePathname to get the current path
  const customstyles: any = {
    ...(local_variable.colorPrimaryRgb !== "" && {
      "--primary-rgb": local_variable.colorPrimaryRgb
    }),
    ...(local_variable.colorPrimary !== "" && {
      "--primary": local_variable.colorPrimary
    }),
    ...(local_variable.bgGradient !== "" && {
      "--gradient": local_variable.bgGradient
    }),
    ...(local_variable.bgLight !== "" && {
      "--light": local_variable.bgLight
    })
  };

  useEffect(() => {
    switcherdata.LocalStorageBackup(ThemeChanger);
  }, [ThemeChanger]);

  // Apply HTML attributes and CSS variables on the client without rendering nested <html>/<body>
  useEffect(() => {
    if (typeof document === "undefined") return;
    const el = document.documentElement;
    const attrs: Record<string, any> = {
      dir: local_variable.dir,
      "data-theme-mode": local_variable.dataThemeMode,
      "data-header-styles": local_variable.dataHeaderStyles,
      "data-vertical-style": local_variable.dataVerticalStyle,
      "data-card-background": local_variable.dataCardBackground,
      "data-card-style": local_variable.dataCardStyle,
      "data-nav-layout": local_variable.dataNavLayout,
      "data-menu-styles": local_variable.dataMenuStyles,
      "data-toggled": local_variable.dataToggled,
      "data-nav-style": local_variable.dataNavStyle,
      "hor-style": local_variable.horStyle,
      "data-page-style": local_variable.dataPageStyle,
      "data-width": local_variable.dataWidth,
      "data-menu-position": local_variable.dataMenuPosition,
      "data-header-position": local_variable.dataHeaderPosition,
      "data-icon-overlay": local_variable.iconOverlay,
      "data-bg-img": local_variable.bgImg,
      "data-icon-text": local_variable.iconText,
      "data-pattern-img": local_variable.patternImg
    };
    // Set or remove attributes based on values
    Object.entries(attrs).forEach(([key, value]) => {
      if (value === undefined || value === null || value === "") {
        el.removeAttribute(key);
      } else {
        el.setAttribute(key, String(value));
      }
    });

    // Apply CSS variables (customstyles)
    Object.entries(customstyles).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        (el.style as any).setProperty(key, String(value));
      }
    });

    // Update body class
    if (document.body) {
      document.body.className = local_variable.body ? String(local_variable.body) : "";
    }
  }, [local_variable, customstyles]);

  return (
    <>
      {children}
      <Script
        src="https://cdn.jsdelivr.net/npm/dragula@3.7.3/dist/dragula.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}

const mapStateToProps = (state: any) => ({
  local_variable: state.local_variable
});

export default connect(mapStateToProps, { ThemeChanger })(Layout);
