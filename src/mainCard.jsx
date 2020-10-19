import React from "react";
import { Card, Grid } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cardContent: {
    textAlign: "center",
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
});

const MainCard = ({ card }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={4}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <a href="/" className="bigLinks">
            {card}
          </a>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </Grid>
  );
};

export default MainCard;
