import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Primer from "./components/Primer";
import Wish from "./components/Wish";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import './styles/transitions.css'

const Routes = () => (
  <main>
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={500} classNames="slides">
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/primer" component={Primer} />
              <Route path="/wish" component={Wish} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  </main>
);

export default Routes;
