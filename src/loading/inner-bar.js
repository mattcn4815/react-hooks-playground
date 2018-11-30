import React from "react";

const innerBarStyle = {
  position: "absolute",
  width: "20%",
  height: "inherit",
  display: "inline-block",
  backgroundColor: "#318ce7",
  borderRadius: 10
};

function setBarPosition(left) {
  return { ...innerBarStyle, left };
}

export default ({ leftVal }) => {
  return <span style={setBarPosition(leftVal)} />;
};
