import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Log from "./component/signup";
import ProfilePage from "./component/ProfilePage";
import Header from "./common/header/Header.jsx";
import Footer from "./common/footer/Footer.jsx";
import Pages from "./pages/Pages.jsx";
import Cart from "./common/Cart/Cart";
import Sdata from "./component/shops/Sdata";
import Data from "./component/Data";
import AddProductPage from "./component/Addproducts.js";

function App() {
  const { productItems } = Data;
  const { shopItems } = Sdata;

  const [CartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);

    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <>
      <Router>
        <Header CartItem={CartItem} />
        <Routes>
          <Route
            path="/"
            element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />}
          />
          <Route path="/register" element={<Log />} />
          <Route path="/Profile" element={<ProfilePage />} />
          <Route path="/addProduct" element={<AddProductPage />} />
          <Route
            path="/cart"
            element={<Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
