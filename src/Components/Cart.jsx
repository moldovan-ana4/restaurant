import React from "react";
import Navbar from "./Navbar";
import "./Styles/Order.module.css";
import { useContext, useReducer } from "react";
import { CartContext } from "./Context/Context";
import styles from "./Styles/Cart.module.css";

const Cart = () => {
  const { orders } = useContext(CartContext);
  const [order] = orders;

  function reducer(state, action) {
    switch (action.type) {
      case "increase": {
        return {
          ...state,
          newCart: state.cart.filter((c) =>
            c.id === action.id ? c.quantity++ : c.quantity
          ),
          newCart2: state.cart.map((e) => e.price * e.quantity),
        };
      }
      case "decrease": {
        return {
          ...state,
          newCart: state.cart.filter((c) =>
            c.id === action.id ? c.quantity-- : c.quantity
          ),
          newCart2: state.cart.map((e) => e.price * e.quantity),
        };
      }
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    cart: order,
  });

  return (
    <div>
      <Navbar />
      <h3>Cart</h3>
      <div className={styles.cart__container}>
        {order.map((e, u) => {
          return (
            <div key={u}>
              <img src={e.image} alt={e.image} />
              <div className={styles.cart__name}>
                <div>{e.name}</div>
                <div>{e.price} RON</div>
              </div>

              <div className={styles.cart__buttons}>
                <button
                  onClick={() => {
                    dispatch({
                      type: "increase",
                      ...e,
                    });
                  }}
                >
                  +{" "}
                </button>
                <div>{e.quantity}</div>
                <button
                  onClick={() => {
                    dispatch({
                      type: "decrease",
                      ...e,
                    });
                  }}
                >
                  -{" "}
                </button>
              </div>
            </div>
          );
        })}
        <span>
          Total Price: {state.newCart2?.reduce((a, b) => a + b, 0)} RON
        </span>
      </div>
    </div>
  );
};
export default Cart;
