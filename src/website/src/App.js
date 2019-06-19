import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import SolutionForm from "./SolutionForm";

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <header className="navbar navbar-expand navbar-dark flex-column bd-navbar"></header>
        <div className="col-12 col-md-3 col-xl-2 bd-sidebar"></div>
        <main
          className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content"
          role="main"
        >
          <Route path="/" component={SolutionForm} />
        </main>
      </Router>
    </div>
  );
}

export default App;
