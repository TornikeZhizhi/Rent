import React, { Component } from "react";
import "./colorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

class colorBox extends Component {
  state = {
    copy: false,
  };

  changeCopyState = () => {
    this.setState(
      {
        copy: true,
      },
      () => {
        setTimeout(() => {
          this.setState({
            copy: false,
          });
        }, 1500);
      }
    );
  };

  render() {
    const { background, name } = this.props;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background: background }} className="color_box">
          <div
            className={"copy_overlay " + (this.state.copy ? "show" : "")}
            style={{ background }}
          >
            <div className={"copy_msg " + (this.state.copy ? "show" : "")}>
              <h4>Copyied!!!</h4>
              <span>{background}</span>
            </div>
          </div>
          <div className="copy_container">
            <div className="box_content">
              <span>{name}</span>
            </div>
            <button className="copy_button">Copy</button>
          </div>
          <span className="see_more">More</span>
        </div>
      </CopyToClipboard>
    );
  }
}
export default colorBox;
