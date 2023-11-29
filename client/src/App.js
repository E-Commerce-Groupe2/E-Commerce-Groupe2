import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Footer from "./common/footer/Footer"


function App() {
  const [CartItem, setCartItem] = useState([])

 

  

  return (
    <>
      <Router>
      <Header CartItem={CartItem} />
        <Switch>
          <Route path='/' exact>
            <Pages />
          </Route>
        
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
