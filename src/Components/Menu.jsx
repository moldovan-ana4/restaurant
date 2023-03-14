import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import styles from "./Styles/Menu.module.css";

const Menu = () => {
  // const [menuList, setMenuList] = useState(menu);
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

  // console.log(menuList);

  return (
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
                    <button>Add To Cart</button>
                  </div>
                  <div className={styles.menu_pricing}>{item.price} RON</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Menu;
