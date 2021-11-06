import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./App.css";
import Registration from "./components/authentication/Registration";
import Login from "./components/authentication/Login";
import Post from "./pages/Post";


const App = () => {
  // const [loginStatus, setLoginStatus] = useState({
  //   isLoggedIn: false,
  //   userId: null,
  // });

  // console.log(loginStatus);
  // setLoginStatus((prevStatus) => ({ isLoggedIn: false, userId: null }));

  // const checkLoginStatus = () => {
  //   axios
  //     .get("http://localhost:5000/api/logged_in")
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
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/feed">
        <Home />
      </Route>
      <Route path="/post">
        <Post />
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
        <Registration />
      </Route>
    </Router>
  );
  // <Route
  //   path={"/"}
  //   exact
  //   render={(props) => (
  //     <Home
  //       {...props}
  //       handleLogin={handleLogin}
  //       loggedInStatus={setLoginStatus}
  //     />
  //   )}
  // />
};

export default App;
