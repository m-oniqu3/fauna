import React, { useState } from "react";
import Container from "../components/ui/Container";
import styled from "../components/form/Form.module.css";

const Form = () => {
  const [hasAccount, setHasAccount] = useState(true);

  const accountHandler = () => {
    setHasAccount(!hasAccount);
  };

  return (
    <div className={styled.background}>
      <Container>
        <form>
          <Container>
            <h2 className={styled.greeting}>
              {hasAccount ? "Welcome back bloomer!" : "Welcome bloomer!"}
            </h2>
            <div className={styled["form-group"]}>
              <label htmlFor="email">Email</label>
              <input type="email" />
            </div>

            <div className={styled["form-group"]}>
              <label htmlFor="password">Password</label>
              <input type="password" />
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
