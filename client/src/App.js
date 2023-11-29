import React ,{useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Log from "./component/signup";
import ProfilePage from "./component/ProfilePage";
import Header from "./common/header/Header.jsx";
import Footer from "./common/footer/Footer.jsx";
import Pages from "./pages/Pages.jsx";
function App() {
  const [CartItem, setCartItem] = useState([])

  return (
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
  );
}

export default App;