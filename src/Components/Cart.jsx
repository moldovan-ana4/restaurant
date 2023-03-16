import React from "react";
import Navbar from "./Navbar";
import "./Styles/Order.module.css";
import { useContext } from "react";
import { CartContext } from "./Context/Context";
// import { useLocation } from "react-router-dom";

const Cart = () => {
  // const location = useLocation();
  const { orders } = useContext(CartContext);
  const [order, setOrder] = orders;
  // total state
  // quantity care va fi counter
  // un state care faci price + price = individual price (daca iei 2 pizza like )
  return (
    <div>
      <Navbar />

      <h3>Cart</h3>
      <ul>
        {order.map((e, u) => {
          // console.log(e.name);
          return <li key={u}>{e.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Cart;
