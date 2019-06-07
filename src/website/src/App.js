import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SolutionForm from "./SolutionForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SolutionForm />
      </header>
    </div>
  );
}

export default App;
