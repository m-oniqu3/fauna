import React, { useContext } from "react";
import styled from "./NavBar.module.css";
import logo from "../../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase";

const Navbar = () => {
  const { isLoggedIn, currentUser, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate("/account");
  };

  const logoutHandler = async () => {
    await signOut(auth)
      .then(() => {
        setIsLoggedIn(false);
        navigate("/account");
      })
      .catch((error) => alert("Error" + error));
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
        {isLoggedIn && (
          <li>
            <Link to="/garden">Garden</Link>
          </li>
        )}
      </ul>
      {/* if the user is logged in then show their emil */}
      {isLoggedIn && currentUser && <p> Hi, {currentUser.email}</p>}

      {/* if the user is logged in show the logout button else show the login button */}
      {!isLoggedIn ? (
        <button onClick={loginHandler} className={styled.login}>
          Login
        </button>
      ) : (
        <button onClick={logoutHandler} className={styled.login}>
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;
