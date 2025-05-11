"use client";
import { useState } from "react";
import "./Navbar.css";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../Assets/Logos/Logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#home">
            <img src={Logo} alt="Hive logo" className="logo-image" />
            <span className="logo-text">HIVE</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-menu desktop">
          <li className="nav-item">
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#portfolio" className="nav-link">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a href="#team" className="nav-link">
              Team
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>

        <div className="login-button desktop">
          <a href="/login" className="login-link">
            LOGIN / REGISTER
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Navigation Overlay */}
        <div className={`mobile-menu-overlay ${isMenuOpen ? "open" : ""}`}>
          <div className="mobile-menu-container">
            <ul className="mobile-nav-menu">
              <li className="mobile-nav-item">
                <a
                  href="#home"
                  className="mobile-nav-link"
                  onClick={toggleMenu}
                >
                  Home
                </a>
              </li>
              <li className="mobile-nav-item">
                <a
                  href="#about"
                  className="mobile-nav-link"
                  onClick={toggleMenu}
                >
                  About
                </a>
              </li>
              <li className="mobile-nav-item">
                <a
                  href="#services"
                  className="mobile-nav-link"
                  onClick={toggleMenu}
                >
                  Services
                </a>
              </li>
              <li className="mobile-nav-item">
                <a
                  href="#portfolio"
                  className="mobile-nav-link"
                  onClick={toggleMenu}
                >
                  Portfolio
                </a>
              </li>
              <li className="mobile-nav-item">
                <a
                  href="#team"
                  className="mobile-nav-link"
                  onClick={toggleMenu}
                >
                  Team
                </a>
              </li>
              <li className="mobile-nav-item">
                <a
                  href="#contact"
                  className="mobile-nav-link"
                  onClick={toggleMenu}
                >
                  Contact
                </a>
              </li>
            </ul>

            <div className="mobile-login-button">
              <a href="/login" className="mobile-login-link">
                LOGIN / REGISTER
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
