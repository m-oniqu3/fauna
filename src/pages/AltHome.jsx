import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import HomepageBase from "../components/home/HomepageBase";
import { AuthContext } from "../contexts/AuthContext";

const AltHome = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const src =
    "url(https://images.unsplash.com/photo-1536882240095-0379873feb4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80)";

  const heading = (
    <>
      <span>rooting</span> for you
    </>
  );

  const content =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui amet egestas faucibus mollis. Volutpat aliquet ornare non eu erat nam. Adipiscing massa rhoncus enim dictum.";

  const buttonText = "Shop Now";

  //if the user is logged in they can navigate to the garden page, else they should be navigated to the accounts(login) page
  const onClickFunction = () => {
    !isLoggedIn ? navigate("/account") : navigate("/garden");
  };

  return (
    <HomepageBase
      src={src}
      heading={heading}
      content={content}
      buttonText={buttonText}
      buttonFunction={onClickFunction}
    />
  );
};

export default AltHome;
