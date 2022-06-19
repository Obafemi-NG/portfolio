import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./Layout.scss";

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="page">
        <span className="tags top-tag"> &lt;body&gt; </span>
        <Outlet />
        <span className="tags bottom-tag"> &lt;/body&gt; </span> <br />
        <span className="tags bottom-tag-html"> &lt;/html&gt; </span>
      </div>
    </div>
  );
};

export default Layout;