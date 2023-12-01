
import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Data from "./component/Data"
import Pages from "./pages/Pages"
import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import Sdata from "./component/shops/Sdata"

import React ,{useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Log from "./component/signup";
import ProfilePage from "./component/ProfilePage";
import Header from "./common/header/Header.jsx";
import Footer from "./common/footer/Footer.jsx";
import Pages from "./pages/Pages.jsx";

function App() {

  const { productItems } = Data
  const { shopItems } = Sdata
 
  const [CartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }
  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)

    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <>
      <Router>
        <Header CartItem={CartItem} />
        <Switch>
          <Route path='/' exact>
            <Pages  productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>
          <Route path='/cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>
          </Switch>
    <>
      <Router>
      <Header CartItem={CartItem} />
        <Routes>
        <Route path='/'  />
          <Route path='/register' element={<Log />} />
          <Route path='/Profile' element={<ProfilePage />} />
        </Routes> 
        <Pages/>
        

        <Footer />
      </Router>
    </>
  )
}


export default Ap
