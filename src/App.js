import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home.js";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Hero from './Components/Hero.js';
import "./App.css";

function App() {
  return (
    <HashRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer />

    </HashRouter>
  );
}

export default App;