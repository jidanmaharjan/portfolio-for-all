import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

//icons
import { FaBars } from "react-icons/fa";

//Component
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";
import Scrolltotop from "./components/Scrolltotop";

function App() {
  const [navToggle, setNavToggle] = useState(false);
  return (
    <div className="App font-poppins">
      <Scrolltotop />
      <button
        onClick={() => setNavToggle((prev) => !prev)}
        className="p-2 bg-red-400 z-50 fixed top-4 right-4 rounded-sm text-white md:hidden"
      >
        <FaBars />
      </button>
      <Navbar navToggle={navToggle} setNavToggle={setNavToggle} />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
