"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const FullscreenToggle = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    const element = document.documentElement;
    if (!document.fullscreenElement) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    const fullscreenChangeHandler = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", fullscreenChangeHandler);

    return () => {
      document.removeEventListener("fullscreenchange", fullscreenChangeHandler);
    };
  }, []);

  return (
    <li className="header-element header-fullscreen">
      <Link onClick={toggleFullscreen} href="#!" scroll={false} className="header-link">
        {isFullscreen ? (
          <i className="bi bi-fullscreen-exit full-screen-close header-link-icon"></i>
        ) : (
          <i className="bi bi-fullscreen full-screen-open header-link-icon"></i>
        )}
      </Link>
    </li>
  );
};

export default FullscreenToggle;
