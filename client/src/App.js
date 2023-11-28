import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import Log from "./component/signup";
import ProfilePage from "./component/ProfilePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Log />} />
          <Route path='/Profile' element={<ProfilePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
