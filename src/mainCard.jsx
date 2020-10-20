import React from "react";
import { Card, Grid } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cardContent: {
    fontSize: "2rem",
    padding: "5rem",
  },
  cardTitle: {
    fontSize: "4rem",
    color: "black",
    textDecoration: "none",
  },
  card: {
    borderRadius: "0",
  },
  bigLinks: {
    fontSize: "4rem",
    textDecoration: "underline",
    textDecorationColor: "blue",
  },
});

const MainCard = ({ currentUpdate }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={12}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <p className={classes.bigLinks}>{currentUpdate}</p>
        </CardContent>
        <CardActions>
          <a href="/">Last Updates</a>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default MainCard;
