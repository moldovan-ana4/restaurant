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
      <div className={styles.menu__description}>
        <h3>Here are some of our most wanted dishes:</h3>
      </div>
      <Carousel
        autoPlay={true}
        interval={2000}
        infiniteLoop={true}
        renderThumbs={() => {}}
      >
        <div>
          <div>
            <img src={pizza_margherita} alt="pizza-margherita" />
          </div>
          <div>
            <p>Pizza Margherita</p>
          </div>
        </div>

        <div>
          <img src={pizza_slice} alt="pizza" />
          <p>Pizza prosciuto e funghi</p>
        </div>

        <div>
          <img src={salamino_picante} alt="salamino-picante" />
          <p>Pizza Salamino picante</p>
        </div>

        <div>
          <img src={spaghete_carbonara} alt="spaghete-carbonara" />
          <p>Spaghetti Carbonara</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
