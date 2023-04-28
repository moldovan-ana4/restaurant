import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "./Styles/Review.module.css";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  async function getReviews() {
    const reviews = await fetch("./reviews.json");
    const resReviews = await reviews.json();
    setReviews(resReviews);
  }
  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div className={styles.review__page}>
      <span>What our customers say about the menu?</span>
      <div className={styles.review__intro}>
        <p>Check it out, now!</p>
      </div>
      <div className={styles.review__description}>
        <Carousel
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          renderThumbs={() => {}}
          showStatus={false}
        >
          {reviews.map((item, i) => {
            return (
              <div className={styles.review__container} key={i}>
                <div className={styles.review__message}>
                  <p>{item.message}</p>
                </div>
                <div className={styles.review__user}>
                  <span>{item.name}</span>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className={styles.review__contact}>
        <span>Contact Information:</span>
        <ul>
          <li>Phone Number: 0743 911 520</li>
          <li>Email: contact@resto.ro</li>
          <li>Street Deva 46, Cluj-Napoca</li>
        </ul>
      </div>
    </div>
  );
};

export default Review;
