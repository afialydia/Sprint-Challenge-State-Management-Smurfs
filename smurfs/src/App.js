import React, { Component } from "react";
import SmurfVillage from './components/Smurfs'
import FormikNewSmurfs from './components/NewSmurfs'
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
     howdy
     <SmurfVillage />
        {/* <FormikNewSmurfs /> */}
      </div>
    );
  }
}

export default App;
