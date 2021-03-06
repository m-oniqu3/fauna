import React from "react";

const Container = (props) => {
  const styling = {
    width: "85%",
    margin: "0 auto",
  };

  return (
    <div style={styling} className={`${props.className}`}>
      {props.children}
    </div>
  );
};

export default Container;
