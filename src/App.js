import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { CssBaseline, withStyles } from "@material-ui/core";

import AppHeader from "./components/AppHeader";
import Home from "./pages/Home";
import PostsManager from "./pages/PostsManager";

const styles = theme => ({
  main: {
    padding: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2)
    }
  }
});

const App = ({ classes }) => (
  <Fragment>
    <CssBaseline />
    <AppHeader />
    <main className={classes.main}>
      <Route exact path="/" component={Home} />
      <Route path="/posts" component={PostsManager} />
    </main>
  </Fragment>
);

export default withStyles(styles)(App);
