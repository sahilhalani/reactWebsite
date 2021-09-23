import React from "react";
import { Switch, Route } from "react-router";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import Service from "./Service";

const App = () => {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
      </Switch>
      <Footer/>
    </>
  );
};

export default App;
