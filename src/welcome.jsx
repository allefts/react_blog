import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Dog from "./images/dog.jpg";

const useStyles = makeStyles({
  welcomeMessage: {
    color: "white",
    lineHeight: "70px",
    fontSize: "2.5rem",
  },
  paper: {
    color: "white",
    fontSize: "3rem",
    textAlign: "center",
  },
  welcomeGrid: {
    justifyContent: "center",
    alignItems: "center",
    height: "400px",
  },
  welcomePicture: {
    justifyContent: "center",
    textAlign: "center",
    verticalAlign: "middle",
    clipPath: "circle(40%)",
  },
  box: {
    width: "500px",
    height: "500px",
    backgroundColor: "yellow",
    margin: "10rem",
  },
});

const Welcome = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        align="center"
        justify="center"
        direction="row"
        className={classes.welcomeGrid}
        container
      >
        <Grid item xs={12} sm={6}>
          <p className={classes.paper}>
            Welcome to my website, <br></br> feel free to take a look around!
          </p>
        </Grid>
        <Grid className={classes.welcomePicture} item xs={12} sm={6}>
          <img
            className={classes.dogPicture}
            height="300"
            width="400"
            src={Dog}
            alt="Dog"
          />
        </Grid>
      </Grid>

      <div className={classes.box}></div>
    </div>
  );
};

export default Welcome;
