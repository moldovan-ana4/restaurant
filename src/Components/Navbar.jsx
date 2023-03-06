import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faMagnifyingGlass,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Styles/Navbar.css";
import Home from "./Home";
import Menu from "./Menu";
import Review from "./Review";
import Order from "./Order";

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="nav-links">
          <FontAwesomeIcon id="icons" icon={faUtensils} />
          <ul>
            <li>
              <Link to="/" className="logo">
                resto.
              </Link>
            </li>
            <li>
              <Link to="/" className="active">
                home
              </Link>
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
        </div>
        <form id="search-form">
          <FontAwesomeIcon id="icons" icon={faMagnifyingGlass} />
        </form>
        <FontAwesomeIcon id="icons" icon={faHeart} />
        <FontAwesomeIcon id="icons" icon={faCartShopping} />
      </nav>
    </div>
  );
};

export default Navbar;
