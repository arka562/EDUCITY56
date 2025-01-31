import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { assets } from "../../assets/asset";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={assets.logo} alt="" />
          <div className="heading1">
            <h2>Educity</h2>
            <p>Together We Learn!</p>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/quizzes">Quizzes</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/review">Review Us</Link>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@educity.com</p>
          <p>Phone: +91 9523108343</p>
          <p>Address: Manipal University, Jaipur</p>
        </div>
      </div>
      <hr style={{ border: "1px solid brown" }} />

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Educity. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
