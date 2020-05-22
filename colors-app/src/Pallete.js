import React, { Component } from "react";
import ColorBox from "./colorBox";
import "./palette.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
class Pallete extends Component {
  state = {
    level: 500,
  };

  levelChange = (newLevel) => {
    this.setState({
      level: newLevel,
    });
  };

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBox = colors[level].map((color, index) => {
      return (
        <ColorBox
          background={color.hex}
          key={index}
          name={color.name}
        ></ColorBox>
      );
    });
    return (
      <div className="Palette">
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={this.levelChange}
        ></Slider>
        <div className="Palette-colors">{colorBox}</div>
      </div>
    );
  }
}

export default Pallete;
