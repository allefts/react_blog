import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import profPic from "./profPic.jpg";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  aboutContent: {
    color: "lightblue",
    fontSize: "3rem",
  },
  aboutDescription: {
    color: "lightblue",
    fontSize: "2rem",
    margin: "4rem",
  },
  pic: {
    borderRadius: "50%",
    margin: "4rem",
  },
});

const Content = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid justify="center" container item xs={12}>
          <img className={classes.pic} alt="Me" src={profPic} />
        </Grid>
        <Grid justify="center" container item>
          <Typography className={classes.aboutDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            quibusdam labore et autem sunt porro praesentium. Quisquam
            voluptatum libero explicabo accusamus quidem rem nisi, sed possimus
            velit a nulla maxime est quia nam natus sunt ab cupiditate deserunt
            ipsa obcaecati commodi distinctio? Cum aliquid illo corrupti
            sapiente aperiam rerum soluta a culpa iusto est velit doloremque
            praesentium, ipsum, dolorem, animi vel nobis quas provident eligendi
            officia nam tempora hic ut! Rem ut nemo praesentium officia sapiente
            veritatis, odio est velit.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Content;
