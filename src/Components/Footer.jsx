import React from "react";
import { Link } from "react-router-dom";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import styles from "./Styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer__container}>
      <div className={styles.footer__logo}>
        <span className={styles.footer__icons}>
          {" "}
          <FontAwesomeIcon icon={faUtensils} />
        </span>
        <span> Resto.</span>
      </div>
      <hr />

      <div className={styles.footer__follow__us}>
        <h4>Follow us: </h4>
        <div className={styles.footer__socials}>
          <span className={styles.footer__icons}>{<AiFillInstagram />}</span>
          <span>
            <Link to="/">Instagram</Link>
          </span>
        </div>

        <div className={styles.footer__socials}>
          <span className={styles.footer__icons}>{<AiFillFacebook />}</span>
          <span>
            <Link to="/">Facebook</Link>
          </span>
        </div>
      </div>
      {/* <hr />

      <div className={styles.footer__adress}>
        <h4>Contact: </h4>
        <ul>
          <li>Phone Number: 0743 911 520</li>
          <li>Email: contact@resto.ro</li>
          <li>Street Deva 46, Cluj-Napoca</li>
        </ul>
      </div> */}

      <hr />
      <div className={styles.footer__copyright}>
        Copyright 2020 Resto. | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
