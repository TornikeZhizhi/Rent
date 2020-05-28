import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pallete from "./Pallete";
class PalleteList extends Component {
  render() {
    const { palettes } = this.props;

    return (
      <div>
        {palettes.map((pallete) => {
          return (
            <Link to={`/palette/${pallete.id}`}>{pallete.paletteName}</Link>
          );
        })}
      </div>
    );
  }
}
export default PalleteList;
