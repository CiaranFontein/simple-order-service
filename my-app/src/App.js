import React, { Fragment } from "react";
import { CssBaseline, withStyles } from "@material-ui/core";
import { Route } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import Home from "./pages/Home";

const App = ({ classes }) => (
  <Fragment>
    <CssBaseline />
    <AppHeader />
    <main className={classes.main}>
      <Route exact path="/" component={Home} />
    </main>
  </Fragment>
);

export default withStyles(styles)(App);
