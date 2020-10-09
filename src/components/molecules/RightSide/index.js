import React from "react";
import Header from "../Header";
import "./RightSide.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home, Contact, Porto, Resume, Profile } from "../../../pages";

const RightSide = () => {
  return (
    <div className="right-side">
      {/* <Header /> */}
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Welcome</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/portofolio">Portofolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          {/*  */}
        </nav>
        <div className="main-container">
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
        </div>
      </Router>
    </div>
  );
};

export default RightSide;
