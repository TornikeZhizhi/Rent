import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { withStyles } from "@material-ui/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./palette.css";

class Navbar extends Component {
  state = {
    format: "hex",
    open: false,
  };

  handleChange = (e) => {
    this.setState(
      {
        format: e.target.value,
        open: true,
      },
      () => {
        setTimeout(() => {
          this.setState({
            open: false,
          });
        }, 3000);
      }
    );
    this.props.handleChange(e.target.value);
  };

  closeSnackbar = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const { level, changeLevel, handleChange } = this.props;
    const { format } = this.state;

    return (
      <header className="Navbar">
        <div className="logo">
          <Link to="/">ReactColorPicker</Link>
        </div>

        <div className="slider_container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            ></Slider>
          </div>
        </div>
        <div className="select-container">
          <Select value={format} onChange={this.handleChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={this.state.open}
          autoHideDuration={2000}
          message={
            <span id="message">
              Format Changed to: {format.toLocaleUpperCase()}
            </span>
          }
          ContentProps={{
            "aria-describedby": "message",
          }}
          action={[
            <IconButton color="inherit" onClick={this.closeSnackbar}>
              <CloseIcon />
            </IconButton>,
          ]}
        ></Snackbar>
      </header>
    );
  }
}
export default Navbar;
