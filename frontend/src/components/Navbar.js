<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Chatbot from "./Chatbot"; // Import Chatbot component
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState("");
  const [showChatbot, setShowChatbot] = useState(false); // Track chatbot visibility
  const location = useLocation(); // Used to track current route

>>>>>>> 935354b ( ALL files are uploaded)
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

<<<<<<< HEAD
=======
  // Toggle the Chatbot visibility
  const toggleChatbot = () => {
    setShowChatbot((prevShowChatbot) => !prevShowChatbot);
  };

>>>>>>> 935354b ( ALL files are uploaded)
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>
<<<<<<< HEAD
          <li className="navbar-title">
            <Link to="/" className="menu-link">
              Climate Awareness
            </Link>
          </li>
=======
          <Link to="/" className="navbar-title">
            Climate Awareness
          </Link>
>>>>>>> 935354b ( ALL files are uploaded)
        </h1>
      </div>
      <ul className="navbar-menu">
        {/* Home */}
        <li className="menu-item">
<<<<<<< HEAD
          <Link to="/" className="menu-link">
=======
          <Link to="/" className={`menu-link ${location.pathname === '/' ? 'active' : ''}`}>
>>>>>>> 935354b ( ALL files are uploaded)
            Home
          </Link>
        </li>

        {/* About Us */}
        <li className="menu-item">
<<<<<<< HEAD
          <Link to="/about" className="menu-link">
=======
          <Link to="/about" className={`menu-link ${location.pathname === '/about' ? 'active' : ''}`}>
>>>>>>> 935354b ( ALL files are uploaded)
            About Us
          </Link>
        </li>

        {/* Dashboard */}
        <li className="menu-item">
<<<<<<< HEAD
          <Link to="/dashboard" className="menu-link">
=======
          <Link to="/dashboard" className={`menu-link ${location.pathname === '/dashboard' ? 'active' : ''}`}>
>>>>>>> 935354b ( ALL files are uploaded)
            Dashboard
          </Link>
        </li>

<<<<<<< HEAD
        
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
=======
        {/* Carbon Calculator */}
        <li className="menu-item">
          <Link to="/calculator" className={`menu-link ${location.pathname === '/calculator' ? 'active' : ''}`}>
            Carbon Calculator
          </Link>
        </li>

        {/* Join Us Dropdown */}
        <li
          className={`menu-item dropdown-container ${activeDropdown === "join-us" ? "active" : ""}`}
>>>>>>> 935354b ( ALL files are uploaded)
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

<<<<<<< HEAD
        {/* Contact */}
        <li className="menu-item">
          <Link to="/contact" className="menu-link">
=======
        {/* Contact Us */}
        <li className="menu-item">
          <Link to="/contact" className={`menu-link ${location.pathname === '/contact' ? 'active' : ''}`}>
>>>>>>> 935354b ( ALL files are uploaded)
            Contact Us
          </Link>
        </li>
      </ul>

<<<<<<< HEAD
      {showChatbot && <Chatbot />} {/* Show the chatbot when toggled */}
=======
   

      {/* Display Chatbot if toggled */}
      {showChatbot && <Chatbot />}
>>>>>>> 935354b ( ALL files are uploaded)
    </nav>
  );
};

export default Navbar;
