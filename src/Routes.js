import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BarStation from "./BarStation";
import BagelStation from "./BagelStation";
import App from "./App";
import Nav from "./Nav";
import ViewChecks from "./ViewChecks";

function Routes() {

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/bar" exact component={BarStation} />
        <Route path="/bagel" exact component={BagelStation} />
        <Route path="/view-checks" exact component={ViewChecks} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;