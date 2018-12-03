import React from "react";
import { useMessage } from "./hooks";

export default () => {
  const message = useMessage();

  return (
    <div>
      <p>{message}</p>
    </div>
  );
};
