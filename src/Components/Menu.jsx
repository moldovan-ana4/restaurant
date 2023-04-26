import React, { useContext, createContext } from "react";
import styles from "./Styles/Menu.module.css";
import { CartContext } from "./Context/Context";

export const menuContext = createContext();

const Menu = () => {
  const { products, orders } = useContext(CartContext);
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = products;
  const [order, setOrder] = orders;
  return (
    <div className={styles.grid__container}>
      {data &&
        data.map((item, i) => {
          return (
            <div key={i} className={styles.card}>
              <div>
                <img src={item.imgUrl} alt="ListMenu" />
                <div className={styles.menu__items}>{item.name}</div>
              </div>
              <div className={styles.menu__ingredients}>{item.ingredients}</div>
              <div className={styles.d__flex}>
                <button
                  onClick={() => {
                    const itemIndex = order.findIndex(
                      (orderItem) => orderItem.id === item.id
                    );
                    if (itemIndex === -1) {
                      // If item is not in cart, add it with quantity 1
                      setOrder((prevState) => [
                        ...prevState,
                        { ...item, quantity: 1 },
                      ]);
                    } else if (order[itemIndex].quantity === 0) {
                      // If item is in cart with quantity 0, remove it
                      setOrder((prevState) => [
                        ...prevState.slice(0, itemIndex),
                        ...prevState.slice(itemIndex + 1),
                      ]);
                    } else {
                      // If item is in cart with quantity > 0, increase quantity by 1
                      setOrder((prevState) => [
                        ...prevState.slice(0, itemIndex),
                        {
                          ...prevState[itemIndex],
                          quantity: prevState[itemIndex].quantity + 1,
                        },
                        ...prevState.slice(itemIndex + 1),
                      ]);
                    }
                  }}
                >
                  Add To Cart
                </button>
                <div className={styles.menu__pricing}>{item.price} RON</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default Menu;
