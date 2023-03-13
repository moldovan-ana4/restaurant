import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUtensils } from "@fortawesome/free-solid-svg-icons";
import "./Styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
     <span className="logo"> <FontAwesomeIcon icon={faUtensils} /> 
       <Link to="/">resto.</Link>
      </span>
      <nav className="navbar-links">
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
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
