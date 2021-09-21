import React, { Suspense, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Helmet from "react-helmet";
// import SignIn from "pages/SignIn/lazy";
import SignUp from "pages/SignUp/lazy";
// import Home from "pages/Home/lazy";
// import SignOut from "pages/SignOut";

export default function Routes() {
  // const token = tokenData?.key;

  // useEffect(() => {
  //   if (!token) {
  //     return;
  //   }
  // }, [token]);

  return (
    <>
      <Helmet titleTemplate="HFY" defaultTitle="HFY"></Helmet>

      <Suspense fallback={null}>
        <Switch>
          {/* <Route path={["/sign-in"]} exact component={SignIn} />

          <Route path={["/home"]} exact component={Home} /> */}

          <Route path="/sign-up" exact component={SignUp} />

          {/* <Route path="/sign-out" exact component={SignOut} /> */}
        </Switch>
      </Suspense>
    </>
  );
}
