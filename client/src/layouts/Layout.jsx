import React from "react";
import Navbar from "../components/Navbar/Navbar";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="layout">
      <Navbar currentUser={currentUser} handleLogout={handleLogout} />
      {props.children}
    </div>
  );
}
