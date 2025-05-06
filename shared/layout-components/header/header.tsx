"use client"
import { basePath } from '@/next.config';
import Link from 'next/link';
import React, { Fragment, useEffect, useState } from 'react';
import { Button, Dropdown, Form, InputGroup, ListGroup, Modal, Nav, Offcanvas, Tab } from 'react-bootstrap';
import MENUITEMS from '../sidebar/nav';
import store from '@/shared/redux/store';
import { connect } from 'react-redux';
import { ThemeChanger } from "../../redux/action";
import SearchBar from './SearchBar'; // Import the new SearchBar component
import NotificationDropdown from './NotificationDropdown'; // Import the new NotificationDropdown component
import FullscreenToggle from './FullscreenToggle'; // Import the new FullscreenToggle component
import SidebarToggle from './SidebarToggle'; // Import the new SidebarToggle component
import SwitcherIcon from './SwitcherIcon'; // Import the new SwitcherIcon component
import ResponsiveSearchModal from './ResponsiveSearchModal'; // Import the new ResponsiveSearchModal component
import AppsOffcanvas from './AppsOffcanvas'; // Import the new AppsOffcanvas component
import LanguageDropdown from './LanguageDropdown'; // Import the new LanguageDropdown component
import ProfileDropdown from './ProfileDropdown'; // Import the new ProfileDropdown component

const Header = ({ local_variable, ThemeChanger }: any) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  //full screen
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    const element = document.documentElement;
    if (
      !document.fullscreenElement &&
      !document.fullscreenElement &&
      !document.fullscreenElement
    ) {
      // Enter fullscreen mode
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.requestFullscreen) {
        element.requestFullscreen();
      }
    } else {
      // Exit fullscreen mode
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };
  useEffect(() => {
    const fullscreenChangeHandler = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', fullscreenChangeHandler);

    return () => {
      document.removeEventListener('fullscreenchange', fullscreenChangeHandler);
    };
  }, []);


  function menuClose() {
    const theme = store.getState().local_variable;
    if (window.innerWidth <= 992) {
      ThemeChanger({ ...theme, dataToggled: "close" });
    }
    if (window.innerWidth >= 992) {
      ThemeChanger({ ...theme, dataToggled: local_variable.dataToggled ? local_variable.dataToggled : '' });
      // local_variable.dataHeaderStyles == 'dark' ? 'light' : 'dark',
    }
  }

  const ToggleSidebar = () => { 
    const theme = store.getState().local_variable;
    let sidemenuType = theme.dataNavLayout;
    if (window.innerWidth >= 992) {
      if (sidemenuType === "vertical") {
        let verticalStyle = theme.dataVerticalStyle;
        const navStyle = theme.dataNavStyle;
        switch (verticalStyle) {
          // closed
          case "closed":
            ThemeChanger({ ...theme, "dataNavStyle": "" });
            if (theme.dataToggled === "close-menu-close") {
              ThemeChanger({ ...theme, "dataToggled": "" });
            } else {
              ThemeChanger({ ...theme, "dataToggled": "close-menu-close" });
            }
            break;
          // icon-overlay
          case "overlay":
            ThemeChanger({ ...theme, "dataNavStyle": "" });
            if (theme.dataToggled === "icon-overlay-close") {
              ThemeChanger({ ...theme, "dataToggled": "","iconOverlay" :''});
            } else {
              if (window.innerWidth >= 992) {
                ThemeChanger({ ...theme, "dataToggled": "icon-overlay-close","iconOverlay" :'' });
              }
            }
            break;
          // icon-text
          case "icontext":
            ThemeChanger({ ...theme, "dataNavStyle": "" });
            if (theme.dataToggled === "icon-text-close") {
              ThemeChanger({ ...theme, "dataToggled": "" });
            } else {
              ThemeChanger({ ...theme, "dataToggled": "icon-text-close" });
            }
            break;
          // doublemenu
          case "doublemenu":
            ThemeChanger({ ...theme, "dataNavStyle": "" });
            ThemeChanger({ ...theme, "dataNavStyle": "" });
              if (theme.dataToggled === "double-menu-open") {
                ThemeChanger({ ...theme, "dataToggled": "double-menu-close" });
              } else {
                let sidemenu = document.querySelector(".side-menu__item.active");
                if (sidemenu) {
                  ThemeChanger({ ...theme, "dataToggled": "double-menu-open" });
                  if (sidemenu.nextElementSibling) {
                    sidemenu.nextElementSibling.classList.add("double-menu-active");
                  } else {

                    ThemeChanger({ ...theme, "dataToggled": "double-menu-close" });
                    // ThemeChanger({ ...theme, "dataToggled": "" });
                  }
                }
              }
            // doublemenu(ThemeChanger);
            break;
          // detached
          case "detached":
            if (theme.dataToggled === "detached-close") {
              ThemeChanger({ ...theme, "dataToggled": "","iconOverlay" :'' });
            } else {
              ThemeChanger({ ...theme, "dataToggled": "detached-close","iconOverlay" :'' });
            }
            
            break;

          // default
          case "default":
            ThemeChanger({ ...theme, "dataToggled": "" });
        }
        switch (navStyle) {
          case "menu-click":
            if (theme.dataToggled === "menu-click-closed") {
              ThemeChanger({ ...theme, "dataToggled": "" });
            }
            else {
              ThemeChanger({ ...theme, "dataToggled": "menu-click-closed" });
            }
            break;
          // icon-overlay
          case "menu-hover":
            if (theme.dataToggled === "menu-hover-closed") {
              ThemeChanger({ ...theme, "dataToggled": "" });
            } else {
              ThemeChanger({ ...theme, "dataToggled": "menu-hover-closed"});

            }
            break;
          case "icon-click":
            if (theme.dataToggled === "icon-click-closed") {
              ThemeChanger({ ...theme, "dataToggled": "" });
            } else {
              ThemeChanger({ ...theme, "dataToggled": "icon-click-closed" });

            }
            break;
          case "icon-hover":
            if (theme.dataToggled === "icon-hover-closed") {
              ThemeChanger({ ...theme, "dataToggled": "" });
            } else {
              ThemeChanger({ ...theme, "dataToggled": "icon-hover-closed" });

            }
            break;

        }
      }
    }
    else {
      if (theme.dataToggled === "close") {
        ThemeChanger({ ...theme, "dataToggled": "open" });

        setTimeout(() => {
          if (theme.dataToggled == "open") {
            const overlay = document.querySelector("#responsive-overlay");

            if (overlay) {
              overlay.classList.add("active");
              overlay.addEventListener("click", () => {
                const overlay = document.querySelector("#responsive-overlay");

                if (overlay) {
                  overlay.classList.remove("active");
                  menuClose();
                }
              });
            }
          }

          window.addEventListener("resize", () => {
            if (window.screen.width >= 992) {
              const overlay = document.querySelector("#responsive-overlay");

              if (overlay) {
                overlay.classList.remove("active");
              }
            }
          });
        }, 100);
      } else {
        ThemeChanger({ ...theme, "dataToggled": "close" });
      }
    }
    
   

  };

  // search Functionality


  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [showa, setShowa] = useState(false);
  const [InputValue, setInputValue] = useState("");
  const [show2, setShow2] = useState(false);
  const [searchcolor, setsearchcolor] = useState("text-dark");
  const [searchval, setsearchval] = useState("Type something");
  const [NavData, setNavData] = useState([]);

  const myfunction = (inputvalue: string) => {
    document.querySelector(".search-result")?.classList.remove("d-none");

    const i: any[] = [];
    const allElement2: any = [];

    MENUITEMS.forEach((mainLevel: { children: any[]; }) => {
      if (mainLevel.children) {
        setShowa(true);
        mainLevel.children.forEach((subLevel: any) => {
          i.push(subLevel);
          if (subLevel.children) {
            subLevel.children.forEach((subLevel1: any) => {
              i.push(subLevel1);
              if (subLevel1.children) {
                subLevel1.children.forEach((subLevel2: any) => {
                  i.push(subLevel2);
                });
              }
            });
          }
        });
      }
    });
    for (const allElement of i) {
      if (allElement.title.toLowerCase().includes(inputvalue.toLowerCase())) {
        if (allElement.title.toLowerCase().startsWith(inputvalue.toLowerCase())) {
          setShow2(true);

          // Check if the element has a path and doesn't already exist in allElement2 before pushing
          if (allElement.path && !allElement2.some((el: { title: any; }) => el.title === allElement.title)) {
            allElement2.push(allElement);
          }
        }
      }
    }

    if (!allElement2.length || inputvalue === "") {
      if (inputvalue === "") {
        setShow2(false);
        setsearchval("Type something");
        setsearchcolor("text-dark");
      }
      if (!allElement2.length) {
        setShow2(false);
        setsearchcolor("text-danger");
        setsearchval("There is no component with this name");
      }
    }
    setNavData(allElement2);

  };

  //Switcher icon
  const Switchericon = () => {
    document.querySelector(".offcanvas-end")?.classList.toggle("show");
    if (document.querySelector(".switcher-backdrop")?.classList.contains("d-none")) {
      document.querySelector(".switcher-backdrop")?.classList.add("d-block");
      document.querySelector(".switcher-backdrop")?.classList.remove("d-none");
    }
  };

  return (
    <Fragment>
      <header className="app-header sticky">
        <div className="main-header-container container-fluid">
          <div className="header-content-left">
            <div className="header-element">
              <div className="horizontal-logo">
                <Link href="/dashboard/gaming" className="header-logo">
                  <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/desktop-logo.png`} alt="logo" className="desktop-logo" />
                  <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/toggle-logo.png`} alt="logo" className="toggle-logo" />
                  <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/desktop-dark.png`} alt="logo" className="desktop-dark" />
                  <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/toggle-dark.png`} alt="logo" className="toggle-dark" />
                </Link>
              </div>
            </div>
            <SidebarToggle local_variable={local_variable} ThemeChanger={ThemeChanger} />
          </div>
          <ul className="header-content-right">
            {/* <li className="header-element header-search d-md-block d-none">
              <SearchBar />
            </li>
            <li className="header-element d-md-none d-block">
              <Link href="#!" scroll={false} className="header-link" onClick={handleShow3} data-bs-toggle="modal" data-bs-target="#header-responsive-search">
              <i className="bi bi-search header-link-icon"></i>
              </Link>
            </li>
            <LanguageDropdown /> 
            <FullscreenToggle />
            <li className="header-element">
              <Link href="#!" scroll={false} className="header-link" data-bs-toggle="offcanvas" data-bs-target="#apps-header-offcanvas" onClick={handleShow}>
              <i className="bi bi-grid header-link-icon"></i>
              </Link>
            </li>
            <NotificationDropdown />
            <ProfileDropdown /> */}
            <SwitcherIcon />
          </ul>
          <ResponsiveSearchModal show={show3} handleClose={handleClose3} />
        </div>
      </header>
      <AppsOffcanvas show={show} handleClose={handleClose} /> {/* Use the new AppsOffcanvas component */}
    </Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  local_variable: state.local_variable,
});
export default connect(mapStateToProps, { ThemeChanger })(Header);
