import React, { Component } from "react";
import Palette from "./Pallete";
import { Route, Switch } from "react-router-dom";
import seedColors from "./seedColors";
import PalleteList from "./PaletteList";
import { generatePalette } from "./colorHelper";
class App extends Component {
  findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  }
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <PalleteList palettes={seedColors}></PalleteList>}
          />
          <Route
            exact
            path="/palette/:id"
            render={(routeProps) => (
              <Palette
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.id)
                )}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
