import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Footer from "./common/footer/Footer"
import Log from "./component/signup";
import ProfilePage from "./component/ProfilePage";

function App() {
  const [CartItem, setCartItem] = useState([])

 

  

  return (
    <>
      <Router>

        <Routes>
          <Route path='/' element={<Log />} />
          <Route path='/Profile' element={<ProfilePage />} />
        </Routes>

      <Header CartItem={CartItem} />
    
            <Pages />
          
        <Footer />
      </Router>
    </>
  );
}

export default App;
