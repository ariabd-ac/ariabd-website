import React from "react";
import Header from "../Header";
import "./RightSide.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Contact, Porto, Resume, Profile } from "../../../pages";

const RightSide = () => {
  return (
    <div class="right-side">
      <Header />
      <div className="main-container">
        <Router>
          <Switch>
            {/* <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/portofolio">
            <Porto />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/home">
            <Home />
          </Route> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/portofolio" component={Porto} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default RightSide;
