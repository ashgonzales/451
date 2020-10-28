import React from "react";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import "fontsource-syne";
import "./Layout.css";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="layout-container">
      <div className="layout-header">
        <Header currentUser={currentUser} handleLogout={handleLogout} />
      </div>
      <div className="second-row-container">
        <div className="layout-sidebar">
          <SideBar />
        </div>
        <div className="layout-content">{props.children}</div>
      </div>
    </div>
  );
}
