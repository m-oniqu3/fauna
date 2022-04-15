import React from "react";
import HomepageBase from "../components/home/HomepageBase";

const AltHome = () => {
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

  return (
    <HomepageBase
      src={src}
      heading={heading}
      content={content}
      buttonText={buttonText}
    />
  );
};

export default AltHome;
