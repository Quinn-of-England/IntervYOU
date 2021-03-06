import React from "react";
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
import UpdateGroupPage from "./pages/UpdateGroupPage";
import ProfilePage from "./pages/ProfilePage";
import Feed from "./pages/FeedPage";
import LogoutPage from "./pages/LogoutPage";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        {/* Routing Main Pages */}
        <Route path="/" exact component={Home} />
        <Route path="/feed" component={Feed} />
        <Route path="/post" component={PostPage} />
        <Route path="/:postId/update-post" component={UpdatePostPage} />
        <Route path="/:postId/comments" component={CommentPage} />
        <Route path="/groups" component={GroupPage} />
        <Route path="/group/create" component={CommunityPage} />
        <Route path="/:groupId/update-group" component={UpdateGroupPage} />
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
