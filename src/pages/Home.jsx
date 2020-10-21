import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// import { Grid } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import { Spring } from "react-spring/renderprops";

const useStyles = makeStyles({
  homeTitle: {
    color: "lightblue",
    fontSize: "5rem",
    textAlign: "center",
    padding: "3rem",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.homeTitle}>Allefts.io</h1>
    </div>
  );
};

export default Home;
