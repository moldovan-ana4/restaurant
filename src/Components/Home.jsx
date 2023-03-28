import React from "react";
import Navbar from "./Navbar";
import styles from "./Styles/Home.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pizza_margherita from "./Asests/img/pizza_margherita.jpg";
import salamino_picante from "./Asests/img/salamino_picante.jpeg";
import spaghete_carbonara from "./Asests/img/spaghete_carbonara.jpg";
import pizza_slice from "./Asests/img/pizza_slice.png";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h3>Here are some of our most wanted dishes:</h3>
      </div>

      <div className={styles.menu__description}>
        <Carousel
          autoPlay={true}
          interval={2000}
          infiniteLoop={true}
          renderThumbs={() => {}}
        >
          <div>
            <div className={styles.carousel__img}>
              <img src={pizza_margherita} alt="pizza-margherita" />
            </div>
            <div className={styles.carousel__name}>
              <p>Pizza Margherita</p>
            </div>
          </div>

          <div>
            <div className={styles.carousel__img}>
              <img src={pizza_slice} alt="pizza" />
            </div>
            <div className={styles.carousel__name}>
              <p>Pizza prosciuto e funghi</p>
            </div>
          </div>

          <div>
            <div className={styles.carousel__img}>
              <img src={salamino_picante} alt="salamino-picante" />
            </div>
            <div className={styles.carousel__name}>
              <p>Pizza Salamino picante</p>
            </div>
          </div>

          <div>
            <div className={styles.carousel__img}>
              <img src={spaghete_carbonara} alt="spaghete-carbonara" />
            </div>
            <div className={styles.carousel__name}>
              <p>Spaghetti Carbonara</p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
