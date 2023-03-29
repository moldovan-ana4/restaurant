import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
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
      <h3>What our customers say about the menu?</h3>

      <div >
        {reviews.map((item, i) => {
          return (
            <div className={styles.review__container} key={i}>
              <div className={styles.review__img}>
                <img src={item.image} alt={item.image} />
              <div className={styles.review__name}>
                <span>{item.name}</span>
              </div>
              </div>
              <div className={styles.review__message}>
                <p>{item.message}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Review;
