import React, { useEffect } from "react";
import Navbar from "./Navbar";
import "./Styles/Order.module.css";
import { useContext, useReducer, useState } from "react";
import { CartContext } from "./Context/Context";
import styles from "./Styles/Cart.module.css";
// import { faEquals } from "@fortawesome/free-solid-svg-icons";
// import { useLocation } from "react-router-dom";

const Cart = () => {
  // const total = useRef(1);
  // const location = useLocation();
  const { orders } = useContext(CartContext);
  const [order] = orders;
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(
      order.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [order]);
  function reducer(state, action) {
    switch (action.type) {
      case "increment": {
        return {
          ...state,
          newCart: state.cart.filter((c) =>
            c.id === action.id ? c.quantity++ : c.quantity
          ),
          newCart2: state.cart.map((e) => e.price * e.quantity),
        };
      }
      case "decrement": {
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
      <ul>
        {order.map((e, u) => {
          return (
            <div key={u} className={styles.cart__menu}>
              <div>{e.name}</div>
              <img
                src={e.image}
                alt={e.image}
                style={{
                  aspectRatio: "auto",
                  width: "80px",
                  height: "80px",
                }}
              />
              <div>{e.name}</div>
              <button
                onClick={() => {
                  dispatch({
                    type: "increment",
                    ...e,
                  });
                }}
              >
                +
              </button>
              <div>{e.quantity}</div>
              {/* <div>{e.price}</div> */}
              <button
                onClick={() => {
                  dispatch({
                    type: "decrement",
                    ...e,
                  });
                }}
              >
                -
              </button>
            </div>
          );
        })}
        <span>Total Price: {state.newCart2?.reduce((a, b) => a + b, 0)}</span>
      </ul>
    </div>
  );
};
export default Cart;
