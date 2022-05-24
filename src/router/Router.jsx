import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";
import { Page2 } from "../Page2";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={() => (
          <Switch>
            <Route exact path="/page1/">
              <Page1 />
            </Route>
            <Route exact path="/page1/detailA">
              <Page1DetailA />
            </Route>
            <Route exact path="/page1/detailB">
              <Page1DetailB />
            </Route>
          </Switch>
        )}
      />

      <Route path="/page2">
        <Page2 />
      </Route>
    </Switch>
  );
};
