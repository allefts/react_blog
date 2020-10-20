import React from "react";
import { AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
    <Router>
      <div>
        <AppBar
          className={classes.navBar}
          color="transparent"
          style={{ margin: 0 }}
          position="static"
        >
          <Link className="links nav" to="/">
            Home
          </Link>

          <Link className="links nav" to="/blog">
            Blog
          </Link>

          <Link className="links nav" to="/about">
            About Me
          </Link>

          <Link className="links nav" to="/contact">
            Contact
          </Link>
        </AppBar>

        <Switch>
          <Route path="/">{/* HOME PAGE */}</Route>
          <Route path="/blog">{/* BLOG PAGE COMPONENT */}</Route>
          <Route path="/about">{/* ABOUT PAGE COMPONENT */}</Route>
          <Route path="/contact">{/* CONTACT PAGE COMPONENT */}</Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Nav;
