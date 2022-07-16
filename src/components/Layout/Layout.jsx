import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./Layout.scss";
import { ReactComponent as MenuBar } from "../../assets/images/bars-solid.svg";

const Layout = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <div className="layout">
      <div className="nav-bar-overlay">{showNavbar && <Sidebar />}</div>
      <div className="page">
        <span className="tags top-tag"> &lt;body&gt; </span>
        <span onClick={toggleNavbar} className="menu-bar">
          {" "}
          <MenuBar height="24px" width="24px" fill="white" />{" "}
        </span>
        <Outlet />
        <span className="tags bottom-tag"> &lt;/body&gt; </span> <br />
        <span className="tags bottom-tag-html"> &lt;/html&gt; </span>
      </div>
    </div>
  );
};

export default Layout;
