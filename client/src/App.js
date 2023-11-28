import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import Log from "./component/signup";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/register' element={<Log />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
