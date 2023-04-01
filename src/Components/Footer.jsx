import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import styles from "./Styles/Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.footer__container}>
        <div className={styles.footer__logo}>
          <span>
            <FontAwesomeIcon icon={faUtensils} />
          </span>
          <span> Resto. </span>
        </div>

        <div className={styles.footer__adress}>
          ADRESS:
          <p>Street Deva 46, Cluj-Napoca 400535</p>
          <p>Phone Number: 0743 911 520</p>
          <p>Email: contact@restopizza.ro</p>
        </div>
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
