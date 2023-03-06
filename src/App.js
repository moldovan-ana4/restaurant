import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";
import Review from "./Components/Review";
import Order from "./Components/Order";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/" element={<Menu />}></Route>
      <Route path="/" element={<Review />}></Route>
      <Route path="/" element={<Order />}></Route>
    </Routes>
  );
}

export default App;
