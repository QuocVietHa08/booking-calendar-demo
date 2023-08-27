import React, { useState } from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import { useAppStore } from "store/useApp";

const LightIcon = () => {
  return (
    <svg
      data-v-117d4dd8=""
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="1.2em"
      height="1.2em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m5.64 17l-.71.71a1 1 0 0 0 0 1.41a1 1 0 0 0 1.41 0l.71-.71A1 1 0 0 0 5.64 17ZM5 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Zm7-7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1ZM5.64 7.05a1 1 0 0 0 .7.29a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.41l-.71-.71a1 1 0 0 0-1.41 1.41Zm12 .29a1 1 0 0 0 .7-.29l.71-.71a1 1 0 1 0-1.41-1.41l-.64.71a1 1 0 0 0 0 1.41a1 1 0 0 0 .66.29ZM21 11h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm-9 8a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1Zm6.36-2A1 1 0 0 0 17 18.36l.71.71a1 1 0 0 0 1.41 0a1 1 0 0 0 0-1.41ZM12 6.5a5.5 5.5 0 1 0 5.5 5.5A5.51 5.51 0 0 0 12 6.5Zm0 9a3.5 3.5 0 1 1 3.5-3.5a3.5 3.5 0 0 1-3.5 3.5Z"
      ></path>
    </svg>
  );
};

const DarkIcon = () => {
  return (
    <svg
      data-v-117d4dd8=""
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="1.2em"
      height="1.2em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M21.64 13a1 1 0 0 0-1.05-.14a8.05 8.05 0 0 1-3.37.73a8.15 8.15 0 0 1-8.14-8.1a8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69a1 1 0 0 0-.36-1.05Zm-9.5 6.69A8.14 8.14 0 0 1 7.08 5.22v.27a10.15 10.15 0 0 0 10.14 10.14a9.79 9.79 0 0 0 2.1-.22a8.11 8.11 0 0 1-7.18 4.32Z"
      ></path>
    </svg>
  );
};

const Header = () => {
  const { mode, toggleMode } = useAppStore();

  return (
    <div
      className={`${styles.headerWrapper} ${
        mode === "dark" ? styles.headerDarkMode : ""
      }`}
    >
      <div className={styles.headerBanner}>
        <Link className="all-unset cursor-pointer" to="/home">
          React Code Base
        </Link>
      </div>
      <div className={styles.headerMenu}>
        <ul>
          <li className={mode === "dark" ? styles.textDarkMode : ""}>
            <Link to="/blog">Blog</Link>{" "}
          </li>
          <li className={mode === "dark" ? styles.textDarkMode : ""}>
            <Link to="/profile">Profile</Link>
          </li>
          <li className={mode === "dark" ? styles.textDarkMode : ""}>
            <Link to="/project">Project</Link>
          </li>
          <li className={styles.setting}>Setting</li>
          <li>|</li>
          <button
            className={`all-unset cursor-pointer ${
              mode === "dark" ? styles.iconDarkMode : styles.iconLightMode
            }`}
            onClick={() => toggleMode()}
          >
            {mode === "light" ? <LightIcon /> : <DarkIcon />}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
