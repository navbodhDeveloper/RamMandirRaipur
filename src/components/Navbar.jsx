import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu open/close state
  const toggleMenu = () => setIsOpen(!isOpen);

  // Close the menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-logo"><img src=    "../Assets/logo.png" alt="" /> Ram Mandir Raipur</div>
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
        <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
        <a href="#donation" className="nav-link" onClick={closeMenu}>Donate</a>
        <a href="#gallery" className="nav-link" onClick={closeMenu}>Gallery</a>
        <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
      </div>
      <div className="hamburger" id="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
