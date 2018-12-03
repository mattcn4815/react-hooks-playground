import { useState, useEffect } from "react";
import messages from "./resources/messages.json";

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

function chooseFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function stepMessages(message, setMessage) {
  const intervalId = setInterval(() => {
    let newMessage;
    do {
      newMessage = chooseFrom(messages);
    } while (newMessage === message);
    setMessage(newMessage);
  }, 2000);

  return () => clearInterval(intervalId);
}

export function useMessage() {
  const [message, setMessage] = useState(messages[0]);

  useEffect(stepMessages.bind(null, message, setMessage), []);

  return message;
}
