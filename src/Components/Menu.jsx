import React, { useState, createContext } from "react";
import Navbar from "./Navbar";
import styles from "./Styles/Menu.module.css";
import { useContext } from "react";
import { CartContext } from "./Context/Context";

export const menuContext = createContext();
const Menu = () => {
  const { products, orders } = useContext(CartContext);
  const [data, setData] = products;
  const [order, setOrder] = orders;

  // console.log(data);

  // const [menuToCart, setMenuToCart] = useState([]);

  return (
    // <menuContext.Provider value={[menuToCart]}>
      <div>
        <Navbar />

        <div className={styles.grid__container}>
          {data &&
            data.map((item, i) => {
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

                  <div className={styles.menu__ingredients}>
                    {item.ingredients}
                  </div>
                  <div className={styles.d__flex}>
                    <div>
                      <button
                        onClick={() => {
                          // setMenuToCart((prevState) => [
                          //   ...prevState,
                          //   {
                          //     name: item.name,
                          //     price: item.price,
                          //     image: item.picture,
                          //   },
                          // ]);

                          setOrder((prevState) => [
                            ...prevState,
                            {
                              name: item.name,
                              price: item.price,
                              image: item.picture,
                            },
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
    // </menuContext.Provider>
  );
};

export default Menu;
