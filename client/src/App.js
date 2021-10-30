import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";

import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";

const App = () => {
  return (
    <Router>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/feed">
        <Home />
      </Route>
      <Route path="/profile">
        <Home />
      </Route>
      <Route path="/settings">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
    </Router>
  );
};

export default App;
