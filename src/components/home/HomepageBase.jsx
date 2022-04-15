import React from "react";
import Container from "../ui/Container";
import styled from "./HomepageBase.module.css";

const HomepageBase = (props) => {
  return (
    <section
      style={{
        backgroundImage: `${props.src}`,
      }}
      className={styled.base}
    >
      <Container>
        <h1 className={styled.heading}>{props.heading}</h1>

        <p className={styled.content}>{props.content}</p>

        <button className={styled.btn}> {props.buttonText} </button>
      </Container>
    </section>
  );
};

export default HomepageBase;
