import React from "react"
import Home from "../component/MainPage/Home"
import Shop from "../component/shops/Shop"
import Wrapper from "../component/wrapper/Wrapper"

const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <Shop shopItems={shopItems} addToCart={addToCart} />
     <Wrapper />
    </>
  )
}

export default Pages
