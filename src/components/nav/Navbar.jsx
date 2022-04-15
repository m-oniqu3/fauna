import React from "react";
import styled from "./NavBar.module.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
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

      <button className={styled.login}>Login</button>
    </nav>
  );
};

export default Navbar;
