import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products } from "../pages/Products";
import { Cart } from "../pages/Cart";
import { Home } from "../pages/Home";
import { NavBarComponent } from "../components";
import { ItemDetailContainer } from "../pages/ItemDetailContainer";
import Create from "../pages/Create";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/item/:productId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
};
