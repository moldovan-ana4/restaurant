import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { AiFillShopping } from "react-icons/ai";
import { CartContext } from "./Context/Context";
import styles from "./Styles/Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { orders } = useContext(CartContext);
  const [order] = orders;

  return (
    <div className={styles.nav__container}>
      <span className={styles.logo}>
        <FontAwesomeIcon icon={faUtensils} />
        <Link to="/">resto.</Link>
      </span>
      <nav className={styles.navbar__links}>
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
      </nav>
    </div>
  );
};
export default Navbar;
