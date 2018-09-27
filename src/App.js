import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counter from "./components/counter";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Counter />
      </div>
    );
  }
}

export default App;
