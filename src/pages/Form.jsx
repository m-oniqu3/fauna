import React, { useContext, useRef, useState } from "react";
import Container from "../components/ui/Container";
import styled from "../components/form/Form.module.css";
import { createNewUser } from "../Firebase";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [hasAccount, setHasAccount] = useState(true);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const accountHandler = () => {
    setHasAccount(!hasAccount);
  };

  const createAccount = async () => {
    let email = emailRef.current.value;
    let password = passwordRef.current.value;

    setLoading(true);
    try {
      await createNewUser(email, password);
      navigate("/");
    } catch (error) {
      alert("Error" + error.message);
    }
    setLoading(false);
  };

  const loginHandler = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    !hasAccount && createAccount();
    hasAccount && loginHandler();
  };

  return (
    <div className={styled.background}>
      <Container>
        <form onSubmit={handleSubmit}>
          <Container>
            <h2 className={styled.greeting}>
              {hasAccount ? "Welcome back bloomer!" : "Welcome bloomer!"}
            </h2>
            <div className={styled["form-group"]}>
              <label htmlFor="email">Email</label>
              <input type="email" ref={emailRef} required />
            </div>

            <div className={styled["form-group"]}>
              <label htmlFor="password">Password</label>
              <input type="password" ref={passwordRef} required />
            </div>

            {/* disable the button while loading */}
            <button
              disabled={loading}
              className={styled.btnSubmit}
              type="submit"
            >
              {hasAccount ? "Login" : "Create Account"}
            </button>

            <p className={styled.prompt} onClick={accountHandler}>
              {hasAccount
                ? "Don't have an account? Create Account"
                : "Already have an account? Login"}
            </p>
          </Container>
        </form>
      </Container>
    </div>
  );
};

export default Form;
