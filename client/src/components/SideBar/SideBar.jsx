import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div className="sidebar-container">
      <Link to="/books">Library</Link>
      <br />
      <Link to="/books/new">Add Book</Link>
      <br />
      <Link to="/friendships">Friends</Link>
      <br />
      <hr />
      <div className="tags-container">
        <ul>
          <li>
            <Link to="/tags">Tag</Link>
          </li>
          <li>
            <Link to="/tags">Tag</Link>
          </li>
          <li>
            <Link to="/tags">Tag</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}