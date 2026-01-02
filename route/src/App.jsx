import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Practice from "./components/Practice";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-gray-500 min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/practice" element={<Practice />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
