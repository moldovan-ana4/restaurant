import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Review from "./Components/Review";
import Order from "./Components/Order";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/review" element={<Review />}></Route>
        <Route path="/order" element={<Order />}></Route>
      </Routes>
    </>
  );
}

export default App;
