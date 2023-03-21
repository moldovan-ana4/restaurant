import React, { useState, useEffect } from "react";
import { createContext } from "react";

export const CartContext = createContext();
const Context = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
 
  async function getData() {
    const result = await fetch("./menuItems.json");
    const res = await result.json();
    setProducts(res);
    // console.log(products);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <CartContext.Provider
      value={{
        orders: [data, setData],
        products: [products, setProducts]
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default Context;
