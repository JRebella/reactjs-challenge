import "bootswatch/dist/flatly/bootstrap.min.css";
import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Selector from "./features/investments/selector/Selector";
import Visualizer from "./features/investments/visualizer/Visualizer";
import Customizer from "./features/investments/customizer/Customizer";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
          <Container>
            <a className="navbar-brand" href="https://github.com/JRebella">
              Juan Rebella
            </a>
            <div className="text-white">
              Financial Advisor ReactJS Challenge
            </div>
          </Container>
        </nav>
        <Container>
          <Switch>
            <Route exact path="/">
              <Selector />
              <hr />
              <Visualizer />
            </Route>
            <Route path="/customize">
              <Customizer />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
