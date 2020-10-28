import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div className="header-container">
      <div className="header-title">
        <h1>La Vie des Livres</h1>
      </div>
      <div className="header-links">
      {
        currentUser ?
          <>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
          :
          <Link to='/login'>Login/Register</Link>
      }
      </div>
    </div>
  )
}