import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";
import { Page2 } from "../Page2";
import { page1Routes } from "./Page1Routers";

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
            {page1Routes.map((route) => (
              <Route key={route.path} exact={route.exact} path={route.path}>
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />

      <Route path="/page2">
        <Page2 />
      </Route>
    </Switch>
  );
};
