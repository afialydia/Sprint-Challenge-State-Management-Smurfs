import React, { Component } from "react";
import Smurfs from './Smurfs'
import FormikNewSmurfs from './NewSmurfs'
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Smurfs />
        <FormikNewSmurfs />
      </div>
    );
  }
}

export default App;
