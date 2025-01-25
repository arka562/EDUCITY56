import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./Navbar.css";
import { assets } from "../../assets/asset";
import { IoIosMenu, IoIosClose } from "react-icons/io";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleRegister = () => {
    navigate("/register1"); // Navigate to the Registration page
  };

  return (
    <div className="container">
      <div className="navbar">
        <div className="heading">
          <img src={assets.logo} alt="Educity Logo" />
          <h2>Together We Learn!</h2>
        </div>

        <div className={`fields ${menu ? "active" : ""}`}>
          <ul className="options">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/quizzes">Quizzes</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
          <div className="auth">
            <button className="login">Login</button>
            <button className="register" onClick={handleRegister}>
              Register
            </button>
          </div>
        </div>

        <div className="shortmenu">
          {menu ? (
            <>
              <IoIosClose size={30} onClick={handleMenu} />
              <ul className="shortmenu-options">
                <li>
                  <Link to="/" onClick={handleMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/courses" onClick={handleMenu}>
                    Courses
                  </Link>
                </li>
                <li>
                  <Link to="/quizzes" onClick={handleMenu}>
                    Quizzes
                  </Link>
                </li>
                <li>
                  <Link to="/profile" onClick={handleMenu}>
                    Profile
                  </Link>
                </li>
                <li>
                  <button className="login" onClick={handleMenu}>
                    Login
                  </button>
                </li>
                <li>
                  <button className="register" onClick={handleRegister}>
                    Register
                  </button>
                </li>
              </ul>
            </>
          ) : (
            <IoIosMenu size={30} onClick={handleMenu} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
