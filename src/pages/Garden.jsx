import React from "react";
import styled from "../components/garden/Garden.module.css";
import Container from "../components/ui/Container";
import { plantData } from "../components/garden/plantData";
import PlantDetails from "../components/garden/PlantDetails";

const Garden = () => {
  //map over each item and return its details
  const shop = plantData.map((plant) => (
    <PlantDetails key={plant.id} details={plant} />
  ));

  return (
    <section className={styled["product-container"]}>
      <Container className={styled["product-wrapper"]}>
        <article>
          <h1 className="heading">
            indoor <span>plants</span>
          </h1>
          <p className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui amet
            egestas faucibus mollis.
          </p>
        </article>

        <section className={styled.shop}>{shop}</section>
      </Container>
    </section>
  );
};

export default Garden;
