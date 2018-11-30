import React, { useState, useEffect } from "react";
import InnerBar from "./inner-bar";

const barStyle = {
  position: "relative",
  height: 20,
  borderRadius: 10,
  backgroundColor: "#bcd4e6",
  display: "inline-block"
};

const Loading = ({ done, width, animationSpeed }) => {
  const maxLeftVal = width * 0.8;
  const [direction, setDirection] = useState(1);
  const [leftVal, setLeftVal] = useState(0);
  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      if (leftVal >= maxLeftVal) {
        setDirection(-1);
      }
      if (leftVal < 0) {
        setDirection(1);
      }
      const newLeftVal = leftVal + direction * animationSpeed;
      setLeftVal(newLeftVal);
    });
    return () => cancelAnimationFrame(frameId);
  });
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
