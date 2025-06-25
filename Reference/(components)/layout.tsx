"use client";
import * as switcherdata from "@/shared/data/switcherdata/switcherdata";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ThemeChanger } from "@/shared/redux/action";
import { useRouter, usePathname } from "next/navigation";

function Layout({ children, local_variable, ThemeChanger }: any) {
  const router = useRouter();
  const pathname = usePathname(); // Use usePathname to get the current path
  const customstyles: any = {
    ...(local_variable.colorPrimaryRgb !== "" && {
      "--primary-rgb": local_variable.colorPrimaryRgb,
    }),
    ...(local_variable.colorPrimary !== "" && {
      "--primary": local_variable.colorPrimary,
    }),
    ...(local_variable.bgGradient !== "" && {
      "--gradient": local_variable.bgGradient,
    }),
    ...(local_variable.bgLight !== "" && {
      "--light": local_variable.bgLight,
    }),
  };

  useEffect(() => {
    switcherdata.LocalStorageBackup(ThemeChanger);
  }, []);



  return (
    <>
      <html
        suppressHydrationWarning={true}
        dir={local_variable.dir}
        data-theme-mode={local_variable.dataThemeMode}
        data-header-styles={local_variable.dataHeaderStyles}
        data-vertical-style={local_variable.dataVerticalStyle}
        data-card-background={local_variable.dataCardBackground}
        data-card-style={local_variable.dataCardStyle}
        data-nav-layout={local_variable.dataNavLayout}
        data-menu-styles={local_variable.dataMenuStyles}
        data-toggled={local_variable.dataToggled}
        data-nav-style={local_variable.dataNavStyle}
        hor-style={local_variable.horStyle}
        data-page-style={local_variable.dataPageStyle}
        data-width={local_variable.dataWidth}
        data-menu-position={local_variable.dataMenuPosition}
        data-header-position={local_variable.dataHeaderPosition}
        data-icon-overlay={local_variable.iconOverlay}
        data-bg-img={local_variable.bgImg}
        data-icon-text={local_variable.iconText}
        data-pattern-img={local_variable.patternImg}
        style={customstyles}
      >
        <head>
          <link
            href="https://cdn.jsdelivr.net/npm/dragula@3.7.3/dist/dragula.min.css"
            rel="stylesheet"
          />
        </head>
        <body className={`${local_variable.body ? local_variable.body : ""}`}>
          {children}
          <script src="https://cdn.jsdelivr.net/npm/dragula@3.7.3/dist/dragula.min.js"></script>
        </body>
      </html>
    </>
  );
}

const mapStateToProps = (state: any) => ({
  local_variable: state.local_variable,
});

export default connect(mapStateToProps, { ThemeChanger })(Layout);
