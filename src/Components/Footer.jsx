import React from "react";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import styles from "./Styles/Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.footer__container}>
        <div className={styles.footer__follow__us}>
          FOLLOW US:
          <div>
            <span className={styles.footer__icons}>{<AiFillInstagram />}</span>
            <span> Instagram</span>
          </div>
          <div>
            <span className={styles.footer__icons}>{<AiFillFacebook />}</span>
            <span> Facebook</span>
          </div>
          <div className={styles.footer__logo}></div>
          <div className={styles.footer__adress}>
            ADRESS:
            <p>Street Deva 46, Cluj-Napoca 400535</p>
            <p>Phone Number: 0743 911 520</p>
            <p>Email: contact@resto.ro</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
