import React from 'react';
import './Form.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Climate Change Awareness</h3>
        <p>Join us in making the world a better place for future generations.</p>
        <ul className="socials">
          <li><a href="/#" className="fa fa-facebook"></a></li>
          <li><a href="/#" className="fa fa-twitter"></a></li>
          <li><a href="/#" className="fa fa-instagram"></a></li>
          <li><a href="/#" className="fa fa-linkedin"></a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p> 2024 Climate Change Awareness | All rights reserved by ABHISHEK</p>
      </div>
    </footer>
  );
};

export default Footer;
