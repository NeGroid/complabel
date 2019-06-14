import React from "react";
import "./App.css";
import SolutionForm from "./SolutionForm";

function App() {
  return (
    <div className="container-fluid">
      <header className="navbar navbar-expand navbar-dark flex-column bd-navbar"></header>
      <div className="col-12 col-md-3 col-xl-2 bd-sidebar"></div>
      <main
        className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content"
        role="main"
      >
        <h1>Solution Finder</h1>
        <p>Fill the form to find a solution</p>
        <div className="bd-example">
          <SolutionForm />
        </div>
      </main>
    </div>
  );
}

export default App;
