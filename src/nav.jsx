import React from "react";
import { AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";

const useStyles = makeStyles({
  // <------STYLES CAN BE OVERRIDEN LIKE THIS
  navBar: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    boxShadow: "0 0 0 0 rgb(0, 0, 0, 0)",
  },
});

const Nav = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar
        className={classes.navBar}
        color="transparent"
        style={{ margin: 0 }}
        position="static"
      >
        <a className="links nav" href="/">
          Home
        </a>
        <a className="links nav" href="/">
          Blog
        </a>
        <a className="links nav" href="/">
          About
        </a>
        <a className="links nav" href="/">
          Contact
        </a>
      </AppBar>
    </div>
  );
};

export default Nav;
