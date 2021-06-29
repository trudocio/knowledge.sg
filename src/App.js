import React, { Component } from "react";
// import logo from "./logo.svg";
import Home from "./pages/Home"
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div style={{backgroundColor: "#ffffff"}}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;