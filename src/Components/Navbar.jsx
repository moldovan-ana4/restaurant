/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import styles from "./Styles/Navbar.module.css";
import { AiFillShopping } from "react-icons/ai";
import { useContext } from "react";
import { menuContext } from "./Menu";

const Navbar = () => {
  const navigate = useNavigate();
  const order = useContext(menuContext);
  return (
    <div className={styles.nav__container}>
      <span className={styles.logo}>
        <FontAwesomeIcon icon={faUtensils} />
        <Link to="/">resto.</Link>
      </span>
      <nav className={styles.navbar__links}>
        <ul>
          <li onClick={() => navigate("/")}>home </li>
          <li onClick={() => navigate("/menu")}>menu</li>
          <li onClick={() => navigate("/review")}>reviews </li>
          <li onClick={() => navigate("/order")}>order </li>
          <li>
            <span
              onClick={() => {
                navigate("/cart", { state: { data: order } });
              }}
            >
              {<AiFillShopping />}
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
