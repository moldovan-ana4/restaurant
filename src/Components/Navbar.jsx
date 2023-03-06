import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <span className="logo">
        &#127860; <Link to="/">resto.</Link>
      </span>
      <nav className="navbar-links">
        <ul>
          <li>
            <Link to="/menu">menu</Link>
          </li>
          <li>
            <Link to="/review">review</Link>
          </li>
          <li>
            <Link to="/order">order</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
