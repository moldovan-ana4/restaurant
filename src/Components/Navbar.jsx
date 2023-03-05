import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faMagnifyingGlass,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
// import Home from "./Home";
// import Menu from "./Menu";
// import Review from "./Review";
// import Order from "./Order";

const Navbar = () => {
  return (
    <div>
      <header className="navbar">
        <FontAwesomeIcon id="icons" icon={faUtensils} />
        <ul>
          <li>
            <a href="#logo" className="logo">
              resto.
            </a>
          </li>
          <li>
            <a class="active" href="#home">
              home
            </a>
          </li>
          <li>
            <a href="#menu">menu</a>
          </li>
          <li>
            <a href="#review">review</a>
          </li>
          <li>
            <a href="#order">order</a>
          </li>
        </ul>
        <form id="search-form">
          <FontAwesomeIcon id="icons" icon={faMagnifyingGlass} />
        </form>
        <FontAwesomeIcon id="icons" icon={faHeart} />
        <FontAwesomeIcon id="icons" icon={faCartShopping} />
      </header>
    </div>
  );
};

export default Navbar;
