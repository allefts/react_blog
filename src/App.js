import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import Header from "./header";
import Nav from "./nav";
import Content from "./content";
import MainCard from "./mainCard";
import { Grid } from "@material-ui/core";
import { Spring } from "react-spring/renderprops";
import Footer from "./footer";

const useStyles = makeStyles({
  gridMargin: {
    marginBottom: "7rem",
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <Header></Header>

      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 100, duration: 1000 }}
      >
        {(props) => (
          <div style={props}>
            <div>
              <Nav></Nav>
            </div>
          </div>
        )}
      </Spring>
      <Grid container style={{ height: "200px" }}></Grid>
      <Content></Content>
      {/* <Grid className={classes.gridMargin} spacing={1} container>
        <MainCard card={`LEARN.`}></MainCard>
        <MainCard card={`TEACH.`}></MainCard>
        <MainCard card={`PROJECTS.`}></MainCard>
      </Grid> */}

      <MainCard currentUpdate="October 2020 Update:"></MainCard>

      <Footer></Footer>
    </div>
  );
};

export default App;
