import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./App.css";

import Signup from "./components/authentication/Signup";
import Login from "./components/authentication/Login";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import PostPage from "./pages/PostPage";
import GroupPage from "./pages/GroupPage";
import CommunityPage from "./pages/CommunityPage";
import CommentPage from "./pages/CommentPage";
import UpdatePostPage from "./pages/UpdatePostPage";
import ProfilePage from "./pages/ProfilePage";
import LinkedinPage from "./pages/LinkedinPage";
import LogoutPage from "./pages/LogoutPage";

import { useDispatch } from "react-redux";
import { getAuthState } from "./actions/auth";

const App = () => {
  // Update Auth State to Ensure Authorized Access
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuthState());
    console.log("dispatching...");
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <NavBar />
      <Switch>
        {/* Routing Main Pages */}
        <Route path="/" exact component={Home} />
        <Route path="/feed" component={LinkedinPage} />
        <Route path="/post" component={PostPage} />
        <Route path="/:postId/update-post" component={UpdatePostPage} />
        <Route path="/:postId/comments" component={CommentPage} />
        <Route path="/groups" component={GroupPage} />
        <Route path="/group/create" component={CommunityPage} />
        <Route path="/profile" component={ProfilePage} />

        {/* Auth Pages */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/logout" component={LogoutPage} />

        {/* Undefined Route, Redirect to Login Page */}
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
