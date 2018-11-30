import React, { useState } from "react";
import InnerBar from "./inner-bar";

const barStyle = {
  position: "relative",
  width: "90%",
  height: 20,
  borderRadius: 10,
  backgroundColor: "#bcd4e6",
  display: "inline-block"
};

const Loading = ({ done, width, height }) => {
  return (
    <div>
      <h3>{"Loading"}</h3>
      <span style={barStyle}>
        <InnerBar leftVal={50} />
      </span>
    </div>
  );
};

export default Loading;
