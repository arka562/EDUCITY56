import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Register from "./components/auth/Register";
import Hero from "./components/Home/Hero";
import Login from "./components/auth/Login";
import Footer from "./components/footer/Footer";
import Dashboard from "./components/profile/Dashboard";
import ProgressTracker from "./components/profile/ProgressTracker";
import AboutUs from "./components/AboutUs";
import Messages from "./components/Messages";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/register1" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Dashboard />} />
        <Route path="/progress" element={<ProgressTracker />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
