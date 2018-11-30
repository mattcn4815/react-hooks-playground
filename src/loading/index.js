import React from "react";
import InnerBar from "./inner-bar";
import { useLoadingAnimation } from "./hooks";

const barStyle = {
  position: "relative",
  height: 20,
  borderRadius: 10,
  backgroundColor: "#bcd4e6",
  display: "inline-block"
};

const Loading = ({ done, width, animationSpeed }) => {
  const maxLeftVal = width * 0.8;
  const leftVal = useLoadingAnimation(maxLeftVal, animationSpeed);
  return (
    <div>
      <h3>{"Loading"}</h3>
      <span style={{ ...barStyle, width }}>
        <InnerBar leftVal={leftVal} />
      </span>
    </div>
  );
};

export default Loading;
