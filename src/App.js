import React from "react";
import "./App.css";
import Header from "./header";
import Nav from "./nav";
import Content from "./content";
import MainCard from "./mainCard";
import Welcome from "./welcome";
import { Grid } from "@material-ui/core";
import { Spring } from "react-spring/renderprops";
import Footer from "./footer";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 500, duration: 1000 }}
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
      <Grid spacing={1} container>
        <MainCard card={`LEARN.`}></MainCard>
        <MainCard card={`TEACH.`}></MainCard>
        <MainCard card={`PROJECTS.`}></MainCard>
      </Grid>

      <Welcome></Welcome>

      <Footer></Footer>
    </div>
  );
}

export default App;
