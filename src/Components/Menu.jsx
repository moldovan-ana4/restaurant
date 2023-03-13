import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Menu = () => {
  const [menuList, setMenuList] = useState([]);
  const [data, setData] = useState([]);

  

  async function getData() {
    const result = await fetch("./menuItems.json");
    const res = await result.json();
    setData(res);
    console.log(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Menu;
