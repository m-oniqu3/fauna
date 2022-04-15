import React from "react";
import styled from "./NavBar.module.css";
import logo from "../../images/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const loginHandler = () => {
    navigate("/login");
  };
  return (
    <nav className={styled.nav}>
      <figure className={styled.logo}>
        <img src={logo} alt="fauna logo" />
        <figcaption>fauna</figcaption>
      </figure>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/garden">Garden</Link>
        </li>
      </ul>

      <button onClick={loginHandler} className={styled.login}>
        Login
      </button>
    </nav>
  );
};

export default Navbar;
