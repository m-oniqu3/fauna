import React, { useState } from "react";
import Container from "../components/ui/Container";
import styled from "../components/form/Form.module.css";
import { auth, createNewUser } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [hasAccount, setHasAccount] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const accountHandler = () => {
    setHasAccount(!hasAccount);
  };

  /**
   * create account with the user with their email and password
   * navigate to the home page if the accunt was created successfully
   * show error if the process failed
   */
  const createAccount = async () => {
    setLoading(true);
    try {
      await createNewUser(email, password);
      navigate("/");
    } catch (error) {
      alert("Error" + error.message);
    }
    setLoading(false);
  };

  /**
   * sign in the user with their email and password
   * navigate to the home page if the user logged in successfully
   * show error if login failed
   */
  const loginHandler = async () => {
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      alert("Error" + error);
    }

    setLoading(false);
  };

  /**
   * call the createAccount function if the user clicks create account button
   * call the loginHandler function if the user clicks login button
   */
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
              <input
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={styled["form-group"]}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* disable the button while loading */}
            <button
              disabled={loading}
              className={styled.btnSubmit}
              type="submit"
            >
              {hasAccount ? "Login" : "Create Account"}
            </button>

            {/* show the appropriate text when the user wants to login or create account */}
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
