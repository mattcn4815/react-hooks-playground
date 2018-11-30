import React from "react";

const innerBarStyle = {
  position: "absolute",
  width: "20%",
  height: "inherit",
  display: "inline-block",
  backgroundColor: "#318ce7",
  borderRadius: 10
};

function setBarPosition(leftVal) {
  return { ...innerBarStyle, left: leftVal + "%" };
}

export default ({ leftVal }) => {
  return <span style={setBarPosition(leftVal)} />;
};
