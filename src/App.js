import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Home />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
