import React from "react";
import logo from "./logo.svg";
import "./App.css";

import "atomic-elements/dist/defines.css";
import { Button } from "atomic-elements";

function App() {
  return (
    <div className="App">
      <Button onClick={() => alert("hi")}>Press </Button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
