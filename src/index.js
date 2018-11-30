import React from "react";
import ReactDOM from "react-dom";
import Loading from "./loading";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Loading width={400} animationSpeed={3} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
