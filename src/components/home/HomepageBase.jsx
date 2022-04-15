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
        <article className={styled.intro}>
          <h1 className="heading">{props.heading}</h1>
          <p className="content">{props.content}</p>
          <button className={styled.btn}> {props.buttonText} </button>
        </article>
      </Container>
    </section>
  );
};

export default HomepageBase;
