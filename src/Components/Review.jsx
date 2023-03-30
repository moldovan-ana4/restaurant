import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Carousel } from "react-responsive-carousel";
import styles from "./Styles/Review.module.css";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  async function getReviews() {
    const reviews = await fetch("./reviews.json");
    const resReviews = await reviews.json();
    setReviews(resReviews);

    // console.log(reviews);
  }
  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div>
      <Navbar />
      <section className={styles.review__intro}>
        <span>What our customers say about the menu?</span>
      </section>
      <div className={styles.review__description}>
      <p>Check it out, now!</p>
        <Carousel
          autoPlay={true}
          interval={5000}
          infiniteLoop={true}
          renderThumbs={() => {}}
          centerMode={true}

        >
          {reviews.map((item, i) => {
            return (
              <div className={styles.review__container} key={i}>
                <div className={styles.review__user}>
                  <img src={item.image} alt={item.image} />
                  <span>{item.name}</span>
                </div>
                <div className={styles.review__message}>
                  <p>{item.message}</p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Review;
