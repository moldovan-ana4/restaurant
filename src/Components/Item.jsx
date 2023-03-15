import React, { useState } from "react";
import styles from "./Styles/Menu.module.css";
import CartContext from "../context/CartContext";
import { useContext } from "react";

const Item = ({ data }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      {data.map((item, i) => {
        return (
          <div key={i} className={styles.card}>
            <div className={styles.images}>
              <img
                src={item.picture}
                alt="ListMenu"
                style={{
                  aspectRatio: "auto",
                  width: "350px",
                  height: "200px",
                }}
              />
              <div className={styles.menu__items}>{item.name}</div>
            </div>

            <div className={styles.menu__ingredients}>{item.ingredients}</div>
            <div className={styles.d__flex}>
              <div>
                <button onClick={() => addToCart(item.name, item.price)}>
                  Add To Cart
                </button>
              </div>
              <div className={styles.menu__pricing}>{item.price} RON</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Item;
