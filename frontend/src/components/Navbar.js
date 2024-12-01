// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Chatbot from "./Chatbot";  // Import Chatbot component
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState("");
  const [showChatbot, setShowChatbot] = useState(false); // Track chatbot visibility
  const location = useLocation(); 
  const toggleDropdown = (section) => {
    setActiveDropdown(activeDropdown === section ? "" : section);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setActiveDropdown("");
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>
          <li className="navbar-title">
            <Link to="/" className="menu-link">
              Climate Awareness
            </Link>
          </li>
        </h1>
      </div>
      <ul className="navbar-menu">
        {/* Home */}
        <li className="menu-item">
          <Link to="/" className="menu-link">
            Home
          </Link>
        </li>

        {/* About Us */}
        <li className="menu-item">
          <Link to="/about" className="menu-link">
            About Us
          </Link>
        </li>

        {/* Dashboard */}
        <li className="menu-item">
          <Link to="/dashboard" className="menu-link">
            Dashboard
          </Link>
        </li>

        
        {/* Dashboard */}
        <li className="menu-item">
          <Link to="/calculator" className="menu-link">
            Carbon Calculator
          </Link>
        </li>
       

        {/* Join Us */}
        <li
          className={`menu-item dropdown-container ${
            activeDropdown === "join-us" ? "active" : ""
          }`}
          onClick={() => toggleDropdown("join-us")}
        >
          <span className="menu-link dropdown-title">Join Us</span>
          {activeDropdown === "join-us" && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/register" className="dropdown-link">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/login" className="dropdown-link">
                  Login
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Contact */}
        <li className="menu-item">
          <Link to="/contact" className="menu-link">
            Contact Us
          </Link>
        </li>
      </ul>

      {showChatbot && <Chatbot />} {/* Show the chatbot when toggled */}
    </nav>
  );
};

export default Navbar;
