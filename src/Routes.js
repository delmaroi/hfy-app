import React from "react";
import { Route, Switch } from "react-router-dom";
import Helmet from "react-helmet";
import SignIn from "pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "pages/Home";
import SignOut from "pages/SignOut";

export default function Routes() {
  return (
    <>
      <Helmet titleTemplate="HFY" defaultTitle="HFY"></Helmet>

      <Switch>
        <Route path={["/sign-in"]} exact component={SignIn} />

        <Route path={["/home"]} exact component={Home} />

        <Route path={["/", "/sign-up"]} exact component={SignUp} />

        <Route path="/sign-out" exact component={SignOut} />
      </Switch>
    </>
  );
}
