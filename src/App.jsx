import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Register from "./components/auth/Register";
import Hero from "./components/Home/Hero";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/register1" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
