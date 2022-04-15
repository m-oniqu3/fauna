import React from "react";
import Container from "../ui/Container";
import styled from "./PlantDetails.module.css";

const PlantDetails = (props) => {
  return (
    <section className={styled.wrapper}>
      <figure className={styled["plant-img"]}>
        <img src={props.details.src} alt={props.details.name} />
      </figure>

      <article className={styled.details}>
        <Container>
          <h3 className={styled.name}>{props.details.name}</h3>
          <p className={styled.desc}>{props.details.description} </p>

          <p className={styled.price}>
            <strong>$ {props.details.price}</strong>
          </p>
        </Container>
      </article>
    </section>
  );
};

export default PlantDetails;
