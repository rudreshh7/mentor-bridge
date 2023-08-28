import React from "react";
import "./Navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">
          <img src={process.env.PUBLIC_URL + "/assets/logo.png"} alt="Logo" />
        </div>
      </Link>

      <ul className="menulinks">
        <li>
          Filters
          <select>
            <option></option>
            <option>.</option>
            <option>.</option>
          </select>
        </li>
        <li>About Us</li>
        <li>Blog</li>
        <li className="calculator">Earning Calculator</li>
      </ul>

      <div className="action-buttons">
        <Link to="/signup">
          <button className="login">Login</button>
        </Link>

        <Link to="/signup">
          <button className="signup">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

// <FontAwesomeIcon icon="fa-solid fa-coffee" size="xs" />

export default Navbar;
