import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";
import { FcHome } from "react-icons/fc";

const useStyles = makeStyles({
  navBar: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    background: "none",
    margin: "2rem 0 2rem 0",
    boxShadow: "0 0 0 0 rgb(0,0,0,0)",
  },
});

const Nav = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.navBar} position="static">
        <Link className="homeLink nav" to="/">
          <FcHome />
        </Link>
        <Link className="links nav" to="/Updates">
          Updates
        </Link>
        <Link className="links nav" to="/About">
          About Me
        </Link>
        <Link className="links nav" to="/Contact">
          Contact
        </Link>
      </AppBar>
    </div>
  );
};

export default Nav;
