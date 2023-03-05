import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faMagnifyingGlass,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div>
      <div className="">
        <FontAwesomeIcon id="icons" icon={faUtensils} />
        <span>resto.</span>

        <FontAwesomeIcon id="icons" icon={faMagnifyingGlass} />
        <FontAwesomeIcon id="icons" icon={faHeart} />
        <FontAwesomeIcon id="icons" icon={faCartShopping} />
      </div>
    </div>
  );
};

export default Navbar;
