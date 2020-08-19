import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import GithubCallback from "./GithubCallback";
import FacebookCallback from "./FacebookCallback";
import GoogleCallback from "./GoogleCallback";
import Home from "./Home";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/github_auth_callback" exact component={GithubCallback} />
      <Route
        path="/facebook_auth_callback"
        exact
        component={FacebookCallback}
      />
      <Route path="/google_auth_callback" exact component={GoogleCallback} />
    </Switch>
  );
}

export default App;
