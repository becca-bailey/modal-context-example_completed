import * as React from "react";
import { render } from "react-dom";
import Home from "./routes/Home";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
