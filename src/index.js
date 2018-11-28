import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function toggleClickedHook(currentState, setState) {
  setState(!currentState);
}

function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = toggleClickedHook.bind(null, clicked, setClicked);
  console.log(clicked);
  return (
    <div className="App">
      <button onClick={toggleClicked}>{"Click me"}</button>
      {clicked && <p>{"Hi Josh"}</p>}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
