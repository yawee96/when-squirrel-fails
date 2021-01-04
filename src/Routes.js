import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BarStation from "./BarStation";
import BagelStation from "./BagelStation";
import App from "./App";
import Nav from "./Nav";

function Routes() {

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/bar" exact component={BarStation} />
        <Route path="/bagel" exact component={BagelStation} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;