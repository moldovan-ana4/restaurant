import React from "react";
import Navbar from "./Navbar";
import "./Styles/Home.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pizza_margherita from "./Asests/img/pizza-margherita.jpg";
import crispy_chicken_chilli from "./Asests/img/crispy_chicken_chilli.jpeg";

const Home = () => {
  return (
    <div>
      <Navbar />

      <Carousel
        autoPlay={true}
        interval={1500}
        infiniteLoop={true}
        renderThumbs={() => {}}
      >
        <div>
          <img src={pizza_margherita} alt="pizza-margherita" />
        </div>
        <div>
          <img src={crispy_chicken_chilli} alt="crispy-chicken-chilli.jpeg" />
        </div>
        <div>
          <img src={pizza_margherita} alt="pizza-margherita" />
        </div>
        <div>
          <img src={pizza_margherita} alt="pizza-margherita" />
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
