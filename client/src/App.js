import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";

import "./App.css";

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
    </Router>
  );
};

export default App;
