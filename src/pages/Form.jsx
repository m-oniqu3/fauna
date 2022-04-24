import React, { useRef, useState } from "react";
import Container from "../components/ui/Container";
import styled from "../components/form/Form.module.css";
import { createNewUser } from "../Firebase";

const Form = () => {
  const [hasAccount, setHasAccount] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();

  const accountHandler = () => {
    setHasAccount(!hasAccount);
  };

  const createAccount = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);

    await createNewUser(email, password);
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

            <button className={styled.btnSubmit} type="submit">
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
