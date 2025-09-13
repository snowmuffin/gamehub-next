"use client";
import React from "react";
import Link from "next/link";
import store from "@/shared/redux/store";

const SidebarToggle = ({ local_variable, ThemeChanger }: any) => {
  const ToggleSidebar = () => {
    const theme = store.getState().local_variable;
    let sidemenuType = theme.dataNavLayout;

    if (window.innerWidth >= 992) {
      if (sidemenuType === "vertical") {
        let verticalStyle = theme.dataVerticalStyle;
        const navStyle = theme.dataNavStyle;

        switch (verticalStyle) {
          case "closed":
            ThemeChanger({ ...theme, dataNavStyle: "" });
            ThemeChanger({
              ...theme,
              dataToggled: theme.dataToggled === "close-menu-close" ? "" : "close-menu-close"
            });
            break;
          case "overlay":
            ThemeChanger({ ...theme, dataNavStyle: "" });
            ThemeChanger({
              ...theme,
              dataToggled: theme.dataToggled === "icon-overlay-close" ? "" : "icon-overlay-close",
              iconOverlay: ""
            });
            break;
          case "icontext":
            ThemeChanger({ ...theme, dataNavStyle: "" });
            ThemeChanger({
              ...theme,
              dataToggled: theme.dataToggled === "icon-text-close" ? "" : "icon-text-close"
            });
            break;
          case "doublemenu":
            ThemeChanger({ ...theme, dataNavStyle: "" });
            if (theme.dataToggled === "double-menu-open") {
              ThemeChanger({ ...theme, dataToggled: "double-menu-close" });
            } else {
              let sidemenu = document.querySelector(".side-menu__item.active");
              if (sidemenu) {
                ThemeChanger({ ...theme, dataToggled: "double-menu-open" });
                if (sidemenu.nextElementSibling) {
                  sidemenu.nextElementSibling.classList.add("double-menu-active");
                } else {
                  ThemeChanger({ ...theme, dataToggled: "double-menu-close" });
                }
              }
            }
            break;
          case "detached":
            ThemeChanger({
              ...theme,
              dataToggled: theme.dataToggled === "detached-close" ? "" : "detached-close",
              iconOverlay: ""
            });
            break;
          case "default":
            ThemeChanger({ ...theme, dataToggled: "" });
        }

        switch (navStyle) {
          case "menu-click":
            ThemeChanger({
              ...theme,
              dataToggled: theme.dataToggled === "menu-click-closed" ? "" : "menu-click-closed"
            });
            break;
          case "menu-hover":
            ThemeChanger({
              ...theme,
              dataToggled: theme.dataToggled === "menu-hover-closed" ? "" : "menu-hover-closed"
            });
            break;
          case "icon-click":
            ThemeChanger({
              ...theme,
              dataToggled: theme.dataToggled === "icon-click-closed" ? "" : "icon-click-closed"
            });
            break;
          case "icon-hover":
            ThemeChanger({
              ...theme,
              dataToggled: theme.dataToggled === "icon-hover-closed" ? "" : "icon-hover-closed"
            });
            break;
        }
      }
    } else {
      ThemeChanger({ ...theme, dataToggled: theme.dataToggled === "close" ? "open" : "close" });
    }
  };

  return (
    <div className="header-element mx-lg-0 mx-2" onClick={ToggleSidebar}>
      <Link
        aria-label="Hide Sidebar"
        className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle"
        data-bs-toggle="sidebar"
        href="#!"
        scroll={false}
      >
        <span></span>
      </Link>
    </div>
  );
};

export default SidebarToggle;
