import React, { useContext, createContext } from "react";
import Navbar from "./Navbar";
import styles from "./Styles/Menu.module.css";
import { CartContext } from "./Context/Context";

export const menuContext = createContext();

const Menu = () => {
  const { products, orders } = useContext(CartContext);
  const [data, setData] = products;
  const [order, setOrder] = orders;
  return (
    <div>
      <Navbar />
      <div className={styles.grid__container}>
        {data &&
          data.map((item, i) => {
            return (
              <div key={i} className={styles.card}>
                <div className={styles.images}>
                  <img src={item.picture} alt="ListMenu" />
                  <div className={styles.menu__items}>{item.name}</div>
                </div>
                <div className={styles.menu__ingredients}>
                  {item.ingredients}
                </div>
                <div className={styles.d__flex}>
                  <div>
                    <button
                      onClick={() => {
                        setOrder((prevState) => [
                          ...prevState,
                          { ...item, quantity: 1 },
                        ]);
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                  <div className={styles.menu__pricing}>{item.price} RON</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Menu;
