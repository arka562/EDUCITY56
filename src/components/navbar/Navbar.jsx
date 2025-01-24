import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import { assets } from "../../assets/asset";
import { IoIosMenu, IoIosClose } from "react-icons/io";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu); // Toggles the menu state
  };

  return (
    <div className="navbar">
      {/* Navbar Heading */}
      <div className="heading">
        <img src={assets.logo} alt="Educity Logo" />
        <h2>Together We Learn!</h2>
      </div>

      {/* Full Navbar Links (Visible on Larger Screens) */}
      <div className={`fields ${menu ? "active" : ""}`}>
        <ul className="options">
          <li>
            <Link to="home" smooth={true} offset={0} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="courses" smooth={true} offset={0} duration={500}>
              Courses
            </Link>
          </li>
          <li>
            <Link to="quizzes" smooth={true} offset={0} duration={500}>
              Quizzes
            </Link>
          </li>
          <li>
            <Link to="profile" smooth={true} offset={0} duration={500}>
              Profile
            </Link>
          </li>
        </ul>

        {/* Authentication Buttons */}
        <div className="auth">
          <button className="login">Login</button>
          <button className="register">Register</button>
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <div className="shortmenu">
        {menu ? (
          <>
            <IoIosClose size={30} onClick={handleMenu} />
            <ul className="shortmenu-options">
              <li>
                <Link to="home" smooth={true} offset={0} duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="courses" smooth={true} offset={0} duration={500}>
                  Courses
                </Link>
              </li>
              <li>
                <Link to="quizzes" smooth={true} offset={0} duration={500}>
                  Quizzes
                </Link>
              </li>
              <li>
                <Link to="profile" smooth={true} offset={0} duration={500}>
                  Profile
                </Link>
              </li>
              <li>
                <button className="login">Login</button>
              </li>
              <li>
                <button className="register">Register</button>
              </li>
            </ul>
          </>
        ) : (
          <IoIosMenu size={30} onClick={handleMenu} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
