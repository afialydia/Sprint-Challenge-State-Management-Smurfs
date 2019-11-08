import React, { Component } from "react";
import SmurfVillage from './components/Smurfs'
import FormikNewSmurfs from './components/NewSmurfs'
import "./App.css";
import VillagerForm from "./components/VillagerForm";
class App extends Component {
  render() {
    return (
      <div className="App">
     howdy
     <SmurfVillage />
     <VillagerForm />
        {/* <FormikNewSmurfs /> */}
      </div>
    );
  }
}

export default App;
