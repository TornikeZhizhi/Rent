import React, { Component } from "react";
import ColorBox from "./colorBox";
import "./palette.css";
class Pallete extends Component {
  render() {
    const colorBox = this.props.colors.map((color, index) => {
      return (
        <ColorBox
          background={color.color}
          key={index}
          name={color.name}
        ></ColorBox>
      );
    });
    return (
      <div className="Palette">
        <div className="Palette-colors">{colorBox}</div>
      </div>
    );
  }
}

export default Pallete;
