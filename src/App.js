import React from "react";
import "bootswatch/dist/flatly/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./App.css";
import Selector from "./features/investments/selector/riskSelector";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <Container>
          <a className="navbar-brand" href="https://github.com/JRebella">
            Juan Rebella
          </a>
          <div className="text-white">Financial Advisor ReactJS Challenge</div>
        </Container>
      </nav>
      <Container>
        <Selector />
      </Container>
    </div>
  );
}

export default App;
