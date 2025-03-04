import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <img src="https://via.placeholder.com/300" alt="Logo" />
      </div>
      <div className="navbar">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
