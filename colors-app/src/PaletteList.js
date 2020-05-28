import React, { Component } from "react";
import MiniPallet from "./Minipalett";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import Pallete from "./Pallete";

const styles = {
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    /* background by SVGBackgrounds.com */
    backgroundColor: "#394bad",
    // backgroundImage: `url(${bg})`,
    overflow: "scroll",
  },
  heading: {
    fontSize: "2rem",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    // [sizes.down("xl")]: {
    //   width: "80%",
    // },
    // [sizes.down("xs")]: {
    //   width: "75%",
    // },
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    "& a": {
      color: "white",
    },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem",
    // [sizes.down("md")]: {
    //   gridTemplateColumns: "repeat(2, 50%)",
    // },
    // [sizes.down("xs")]: {
    //   gridTemplateColumns: "repeat(1, 100%)",
    //   gridGap: "1.4rem",
    // },
  },
};
class PalleteList extends Component {
  render() {
    const { palettes } = this.props;

    return (
      <div className={this.props.classes.root}>
        {palettes.map((pallete) => {
          return (
            // <Link to={`/palette/${pallete.id}`}>{pallete.paletteName}</Link>
            <MiniPallet {...pallete} />
          );
        })}
      </div>
    );
  }
}
export default withStyles(styles)(PalleteList);
