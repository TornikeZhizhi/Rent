import React, { Component } from "react";
import ColorBox from "./colorBox";
import "./palette.css";
import "rc-slider/assets/index.css";
import Navbar from "./navBar";
class Pallete extends Component {
  state = {
    level: 500,
    format: "hex",
  };

  changeLevel = (newLevel) => {
    this.setState({
      level: newLevel,
    });
  };

  changeFormat = (val) => {
    this.setState({
      format: val,
    });
  };
  render() {
    const { colors } = this.props.palette;
    const { level, format } = this.state;
    const colorBox = colors[level].map((color, index) => {
      return (
        <ColorBox
          background={color[format]}
          name={color.name}
          key={color.id}
        ></ColorBox>
      );
    });
    return (
      <div className="Palette">
        <Navbar
          level={level}
          handleChange={this.changeFormat}
          changeLevel={this.changeLevel}
        />
        <div className="Palette-colors">{colorBox}</div>
      </div>
    );
  }
}

export default Pallete;
