import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

import menu from "../Components/Asests/data/menuItems.json";

const Menu = () => {
  const [menuList, setMenuList] = useState(menu);

  // async function getData() {
  //   console.log("xxxx");
  //   const result = await fetch("../Components/Asests/data/menuItems.json");
  //   const res = result.json();
  //   setData(res);
  //   console.log(res);
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  console.log(menuList);

  return (
    <div>
      <Navbar />
      <h1>test</h1>
      {menuList &&
        menuList.map((item, i) => {
          return (
            <div>
              <h1>{item.name}</h1>
              <p>{item.ingredients}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Menu;