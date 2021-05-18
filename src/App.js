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
        <div className="App">
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Simple React App</h1>
          </header> */}
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