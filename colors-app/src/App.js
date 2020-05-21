import React, { Component } from "react";
import Pallete from "./Pallete";
import seedColors from "./seedColors";

class App extends Component {
  render() {
    return (
      <div>
        <Pallete {...seedColors[3]}></Pallete>
      </div>
    );
  }
}

export default App;
