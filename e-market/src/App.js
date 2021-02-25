import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Nav from "./components/navBar/Nav";

//pages
import Home from "./pages/Home.js";
import Store from "./Store.js";
import NotFoundPage from "./pages/404.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/Store" component={Store}></Route>
        <Route Component={NotFoundPage}></Route>
        <Redirect to="/404"></Redirect>
      </Switch>
    </Router>
  );
}
export default App;
