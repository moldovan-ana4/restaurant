import React, { useContext, useReducer } from "react";
import { CartContext } from "./Context/Context";
import styles from "./Styles/Cart.module.css";

const Cart = () => {
  const { orders } = useContext(CartContext);
  const [order, setOrder] = orders;

  function reducer(state, action) {
    switch (action.type) {
      case "increase": {
        const newOrder = state.cart.map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        setOrder(newOrder);
        return {
          ...state,
          cart: newOrder,
          cartTotal: calculateTotal(newOrder),
        };
      }
      case "decrease": {
        const newOrder = state.cart
          .map((item) =>
            item.id === action.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0);
        setOrder(newOrder);
        return {
          ...state,
          cart: newOrder,
          cartTotal: calculateTotal(newOrder),
        };
      }
      default:
        return state;
    }
  }

  const calculateTotal = (cart) => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const [state, dispatch] = useReducer(reducer, {
    cart: order,
    cartTotal: calculateTotal(order),
  });

  return (
    <div>
      <div className={styles.cart__container}>
        {state.cart.map((item) => {
          return (
            <div key={item.id}>
              <div className={styles.cart__name}>
                <div>{item.name}</div>
                <div>{item.price} RON</div>
              </div>

              <div className={styles.cart__buttons}>
                <button
                  onClick={() => {
                    dispatch({
                      type: "increase",
                      id: item.id,
                    });
                  }}
                >
                  +{" "}
                </button>
                <div>{item.quantity}</div>
                <button
                  onClick={() => {
                    dispatch({
                      type: "decrease",
                      id: item.id,
                    });
                  }}
                >
                  -{" "}
                </button>
              </div>
            </div>
          );
        })}
        <span>Total Price: {state.cartTotal} RON</span>
      </div>
    </div>
  );
};
export default Cart;
