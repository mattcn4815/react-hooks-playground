import React from "react";
import ReactDOM from "react-dom";
import Loading from "./loading";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Loading width={"80vw"} height={300} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
