import React from "react";
import Container from "../ui/Container";
import styled from "./HomepageBase.module.css";

const HomepageBase = (props) => {
  return (
    <section
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1483794344563-d27a8d18014e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
      }}
      className={styled.base}
    >
      <Container>
        <h1 className={styled.heading}>
          FOR the PROUD <span>PLANT</span> PARENTS
        </h1>

        <p className={styled.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui amet
          egestas faucibus mollis. Volutpat aliquet ornare non eu erat nam.
          Adipiscing massa rhoncus enim dictum.
        </p>

        <button className={styled.btn}>Shop Now</button>
      </Container>
    </section>
  );
};

export default HomepageBase;
