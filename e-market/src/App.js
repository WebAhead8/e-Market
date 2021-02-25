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
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/Store" component={Store}></Route>
        <Route path="/login" component={LogIn}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route Component={NotFoundPage}></Route>
        <Redirect to="/404"></Redirect>
      </Switch>
    </Router>
  );
}
export default App;
