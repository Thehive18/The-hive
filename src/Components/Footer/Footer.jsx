import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import { TbBrandX } from "react-icons/tb"; // For Twitter/X icon

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h2 className="brand">HIVE</h2>
          <p>E 12, LONONe<br />US.</p>
          <p><strong>Phone:</strong> +2349000000000 (Whatsapp)</p>
          <p><strong>Email:</strong> admin@hive.com</p>
        </div>

        <div className="footer-column">
          <h3>Useful Links</h3>
          <ul>
            <li> Home</li>
            <li> About us</li>
            <li> Services</li>
            <li> Terms of service</li>
            <li> Privacy policy</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Our Services</h3>
          <ul>
            <li> Web Design</li>
            <li> Graphic Design</li>
            <li> Product Management</li>
            <li> Video Editing</li>
            <li> Games Development</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Our Social Networks</h3>
          <p>We are social, connect with us today</p>
          <div className="social-icons">
            <span><TbBrandX /></span>
            <span><FaFacebookF /></span>
            <span><FaInstagram /></span>
            <span><FaTiktok /></span>
            <span><FaLinkedin /></span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Copyright <strong>HIVE</strong>. All Rights Reserved</p>
        <p>Designed by <span className="highlight">HIVE</span></p>
      </div>
    </footer>
  );
};

export default Footer;
