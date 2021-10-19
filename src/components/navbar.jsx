import React from "react";
import "../css/navbar.css";
import logo from "../images/logo-spliiit.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
  return (
    <nav className="header-page">
      <div className="container-fluid">
        <img src={logo} alt="logo" className="main-logo" />

        <Link to="/signin">
          <button className="btn-md nav-btn mr-1 btn-login"> Login </button>
        </Link>
        <Link to="signup">
          <button className="btn-md nav-btn mr-2 btn-signup"> Sign Up</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
