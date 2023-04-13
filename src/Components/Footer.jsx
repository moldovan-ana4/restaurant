import React from "react";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import styles from "./Styles/Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.footer__container}>
        <div className={styles.footer__logo}>
          <span className={styles.footer__icons}>
            {" "}
            <FontAwesomeIcon icon={faUtensils} />
          </span>
          <span> Resto.</span>
        </div>
        <div className={styles.footer__follow__us}>
          <h4>Follow us: </h4>
          <div className={styles.footer__socials}>
            <span className={styles.footer__icons}>{<AiFillInstagram />}</span>
            <span> Instagram</span>
          </div>
          <div className={styles.footer__socials}>
            <span className={styles.footer__icons}>{<AiFillFacebook />}</span>
            <span> Facebook</span>
          </div>
        </div>
        <div className={styles.footer__adress}>
          <h4>Contact: </h4>
          <ul> </ul>
          <li>Phone Number: 0743 911 520</li>
          <li>Email: contact@resto.ro</li>
          <li>Street Deva 46, Cluj-Napoca</li>
        </div>
      </div>
        <hr />
      <div className={styles.footer__copyright}>
        Copyright 2020 Resto. | All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
