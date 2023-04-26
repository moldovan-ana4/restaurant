import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { AiFillShopping } from "react-icons/ai";
import { CartContext } from "./Context/Context";
import styles from "./Styles/Navbar.module.css";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const navigate = useNavigate();
  const { orders } = useContext(CartContext);
  const [order] = orders;
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className={styles.nav__container}>
      <div className={styles.logo}>
        <div>
          <FontAwesomeIcon icon={faUtensils} />
          <Link to="/">resto.</Link>
        </div>
        <div>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      <div
        className={`${styles.navbar__links} ${
          isOpen ? styles.show : styles.hide
        }`}
      >
        <ul>
          <li onClick={() => navigate("/")}>home </li>
          <li onClick={() => navigate("/aboutUs")}>about us</li>
          <li onClick={() => navigate("/menu")}>menu</li>
          <li onClick={() => navigate("/review")}>reviews </li>
          <li>
            {order.length > 0 ? order.length : ""}
            <span
              className={styles.navbar__cart}
              onClick={() => {
                navigate("/cart");
              }}
            >
              {<AiFillShopping />}
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
