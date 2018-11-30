import { useState, useEffect } from "react";

function step(leftVal, setLeftVal, direction, setDirection, maxLeftVal, speed) {
  const frameId = requestAnimationFrame(() => {
    if (leftVal >= maxLeftVal) {
      setDirection(-1);
    } else if (leftVal < 0) {
      setDirection(1);
    }
    setLeftVal(leftVal + direction * speed);
  });

  return () => cancelAnimationFrame(frameId);
}

export function useLoadingAnimation(maxLeftVal, speed) {
  const [direction, setDirection] = useState(1);
  const [leftVal, setLeftVal] = useState(0);

  useEffect(
    step.bind(
      null,
      leftVal,
      setLeftVal,
      direction,
      setDirection,
      maxLeftVal,
      speed
    )
  );

  return leftVal;
}
