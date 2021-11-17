import React, { useState, useEffect } from "react";
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

const App = () => {
  const [loginStatus, setLoginStatus] = useState({
    isLoggedIn: false,
    userId: null,
  });

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  }, []);

  // console.log(loginStatus);
  // setLoginStatus((prevStatus) => ({ isLoggedIn: false, userId: null }));

  // const checkLoginStatus = () => {
  //   axios
  //     .get(`${IP}:${SERVER_PORT }/api/logged_in`)
  //     .then((res) => {
  //       console.log("logged in?", res);
  //       //TODO add the follwoing comment in replace above console out logged in?
  //       // if (response.data.logged_in &&  this.state.loggedInStatus === "NOT_LOGGED_IN"){
  //       //   this.setState({
  //       //     loggedInStatus: "LOGGED_IN",
  //       //     user: response.data.user //verify that its actually response.data.user and not like config.data
  //       //   })
  //       // }else if(!response.data.logged_in && this.state.loggedInStatus === "LOGGED_IN"){
  //       //     this.setState({
  //       //     loggedInStatus: "NOT_LOGGED_IN", //if at any point user is no longer authenticated then trigger and set state to not logged in
  //       //     user: {}
  //       // }
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  // useEffect(() => {
  //   checkLoginStatus();
  // }, []);

  // const handleLogin = (data) => {
  //   setLoginStatus({
  //     loginStatus: true,
  //     userId: data,
  //   });
  // };

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/feed" component={Home} />
        <Route path="/post" component={PostPage} />
        <Route path="/:postId/update-post" component={UpdatePostPage} />
        <Route path="/:postId/comments" component={CommentPage} />
        <Route path="/groups" component={GroupPage} />
        <Route path="/group/create" component={CommunityPage} />
        <Route path="/profile" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
