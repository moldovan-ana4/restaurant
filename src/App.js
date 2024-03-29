import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Menu from "./Components/Menu";
import Review from "./Components/Review";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div className="container">
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutUs" element={<AboutUs />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/review" element={<Review />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
