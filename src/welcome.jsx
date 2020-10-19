import React, { useRef, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Dog from "./images/dog.jpg";
import { TweenMax, Power3 } from "gsap";

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
});

const Welcome = () => {
  const classes = useStyles();
  let textAnimation = useRef(null);

  useEffect(() => {
    TweenMax.to(textAnimation, 0.8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <div className={classes.root}>
      <Grid
        align="center"
        justify="center"
        direction="column"
        className={classes.welcomeGrid}
        container
      >
        <Grid item md={6} xs={12}>
          <p
            ref={(el) => {
              textAnimation = el;
            }}
            className={classes.paper}
          >
            Welcome to my website, <br></br> feel free to take a look around!
          </p>
        </Grid>
        <Grid className={classes.welcomePicture} item md={6} xs={12}>
          <img
            className={classes.dogPicture}
            height="300"
            width="400"
            src={Dog}
            alt="Dog"
          />
          {/* <p className={classes.paper}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
              harum.
            </p> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Welcome;
