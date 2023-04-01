import React from "react";
import Navbar from "./Navbar";
import pizza_slice from "./Asests/img/pizza_slice.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faWallet } from "@fortawesome/free-solid-svg-icons";
import styles from "./Styles/AboutUs.module.css";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className={styles.about__titles}>
          <span>About Us</span>
          <h2>WHY CHOOSE US?</h2>
        </div>
        <div className={styles.about__container}>
          <div>
            <img src={pizza_slice} alt="pizza" />
          </div>
          <div>
            <h3>Best Pizza And Pasta In Town!</h3>
            <p>
              Resto. emerged from the love for the kitchen and from the desire
              to help you win one of the priceless resources of our days: time.
              We consider that the moments spent with the family are very
              important, but often limited because of the hours spent in the
              kitchen.
            </p>
            <p>
              Resto. set out to change something in this regard. We offer you
              top quality products, made with freshly kneaded dough and fresh
              ingredients. We started as foodtruck pizza and pasta business, in
              2020 and we offer free delivery in Cluj-Napoca.
            </p>

            <div className={styles.about__details}>
              <div className={styles.about__options}>
                <span className={styles.about__icons}>
                  <FontAwesomeIcon icon={faTruck} />
                </span>
                <span> Free Delivery</span>
              </div>
              <div className={styles.about__options}>
              <span className={styles.about__icons}>
                <FontAwesomeIcon icon={faWallet} />
              </span>
              <span> Easy Payments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
