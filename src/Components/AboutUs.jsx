import React from "react";
import Navbar from "./Navbar";
import pizza_margherita from "./Asests/img/pizza_margherita.jpg";
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

        <div className={styles.about__description}>
          <span>Best Pizza And Pasta In Town!</span>
          <article>
            Resto. emerged from the love for the kitchen and from the desire to
            help you win one of the priceless resources of our days: time. We
            consider that the moments spent with the family are very important,
            but often limited because of the hours spent in the kitchen. Resto.
            set out to change something in this regard. We offer you top quality
            products, made with freshly kneaded dough and fresh ingredients. We
            started as foodtruck pizza and pasta business in 2020 and we offer
            free delivery in Cluj-Napoca.
          </article>
          <img src={pizza_margherita} alt="pizza margherita" />
        </div>
        <div>
          <p>
            <FontAwesomeIcon icon={faTruck} />
          </p>
          <span>Free Delivery</span>
        </div>
        <div>
          <p>
            <FontAwesomeIcon icon={faWallet} />
          </p>
          <span> Easy Payments</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
