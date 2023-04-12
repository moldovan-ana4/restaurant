import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./Styles/Home.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pizza_margherita from "./Asests/img/pizza_margherita.jpg";
import salamino_picante from "./Asests/img/salamino_picante.jpeg";
import pizza_slice from "./Asests/img/pizza_slice.png";
import tagliatelle_chicken from "./Asests/img/tagliatelle_chicken.jpg";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.home__description}>
        <Carousel
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          renderThumbs={() => {}}
          showStatus={false}
        >
          <div className={styles.carousel__name}>
            <p>Pizza Margherita</p>
            <div className={styles.carousel__img}>
              <img src={pizza_margherita} alt="pizza-margherita" />
            </div>
          </div>

          <div className={styles.carousel__name}>
            <p>Pizza Prosciutto e Funghi</p>
            <div className={styles.carousel__img}>
              <img src={pizza_slice} alt="pizza" />
            </div>
          </div>

          <div className={styles.carousel__name}>
            <p>Pizza Salamino Picante</p>
            <div className={styles.carousel__img}>
              <img src={salamino_picante} alt="salamino-picante" />
            </div>
          </div>

          <div className={styles.carousel__name}>
            <p>Chicken Tagliatelle</p>
            <div className={styles.carousel__img}>
              <img src={tagliatelle_chicken} alt="chicken-tagliatelle" />
            </div>
          </div>
        </Carousel>
      </div>
      <div className={styles.home__schedule}>
        <span>Our Timetable</span>
      </div>
        <div className={styles.home__program}>
          <span>Monday - Thursday 16:00 - 22:00</span>
          <span>Friday - Sunday 10:00 - 22:00</span>
        </div>
      <Footer />
    </div>
  );
};

export default Home;
