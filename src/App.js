import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Updates from "./pages/Updates";

const App = () => {
  return (
    <div className="App">
      <div className="main">
        <Router>
          <Nav></Nav>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/About" exact component={About} />
            <Route path="/Contact" exact component={Contact} />
            <Route path="/Updates" exact component={Updates} />

            <Route path="/" render={() => <div>404</div>} />
          </Switch>
        </Router>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
