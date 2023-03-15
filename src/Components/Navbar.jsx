/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import styles from "./Styles/Navbar.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className={styles.nav__container}>
      <span className={styles.logo}>
        <FontAwesomeIcon icon={faUtensils} />
        <Link to="/">resto.</Link>
      </span>
      <nav className={styles.navbar__links}>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/menu">menu</Link>
          </li>
          <li>
            <Link to="/review">reviews</Link>
          </li>
          <li>
            <Link to="/order">order</Link>
          </li>
          <li>
            <Link to="/cart">
              <span>{<AiOutlineShoppingCart />}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
