import React from "react";
import HomepageBase from "../components/home/HomepageBase";

const Home = () => {
  const src =
    "url(https://images.unsplash.com/photo-1483794344563-d27a8d18014e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)";

  const heading = (
    <>
      FOR the PROUD <span>PLANT</span> PARENTS
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

export default Home;
