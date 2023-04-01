import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Menu from "./Components/Menu";
import Review from "./Components/Review";
import Order from "./Components/Order";
import Cart from "./Components/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutUs" element={<AboutUs />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/review" element={<Review />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </>
  );
}

export default App;
