import React, { Component } from "react";
import Pallete from "./Pallete";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelper";
class App extends Component {
  render() {
    console.log(generatePalette(seedColors[4]));
    return (
      <div>
        <Pallete palette={generatePalette(seedColors[4])}></Pallete>
      </div>
    );
  }
}

export default App;
