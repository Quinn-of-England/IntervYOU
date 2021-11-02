import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";

import "./App.css";
import Registration from "./components/authentication/Registration";
import Login from "./components/authentication/Login";
import Dashboard from "./pages/Dashboard";


export default class App extends Component{
    constructor(){
      super();

      this.state = { //normal state of user
        loggedInStatus: "NOT_LOGGED_IN",
        user: {}
      }

      this.handleLogin = this.handleLogin.bind(this);

    }
    
    checkLoginStatus(){
        axios
        .get("http://localhost:5000/api/logged_in", {withCredentials: true})
        .then(response => {console.log("logged in?", response); //TODO add the follwoing comment in replace above console out logged in?
        // if (response.data.logged_in &&  this.state.loggedInStatus === "NOT_LOGGED_IN"){
        //   this.setState({
        //     loggedInStatus: "LOGGED_IN",
        //     user: response.data.user //verify that its actually response.data.user and not like config.data
        //   })
        // }else if(!response.data.logged_in && this.state.loggedInStatus === "LOGGED_IN"){
        //     this.setState({
        //     loggedInStatus: "NOT_LOGGED_IN", //if at any point user is no longer authenticated then trigger and set state to not logged in
        //     user: {}
        // }

        }).catch(error => {
      console.log("Check login error");});
    }
    
    componentDidMount(){
      this.checkLoginStatus();
    }

    handleLogin(data) {
      this.setState({
        loggedInStatus: "LOGGED_IN",
        user: data
      })
    }

    render(){
      return (
        <Router>
          <Route path={"/"} 
          exact
          render = {props => (
            <Dashboard { ... props} handleLogin={this.handleLogin} loggedInStatus = {this.state.loggedInStatus} />
          )}>
          </Route>  
          <Route path={"/home"} 
          exact
          render = {props => (
            <Home { ... props} handleLogin={this.handleLogin} loggedInStatus = {this.state.loggedInStatus} />
          )}>
          </Route> 
          <Route path={"/feed"}
            exact
            render = {props => (
            <Home { ... props} loggedInStatus = {this.state.loggedInStatus} />
            )}>
          </Route>
          <Route path={"/profile"}
            exact
            render = {props => (
            <Home { ... props} loggedInStatus = {this.state.loggedInStatus} />
            )}>
          </Route>
          <Route path={"/settings"}
            exact
            render = {props => (
            <Home { ... props} loggedInStatus = {this.state.loggedInStatus} />
            )}>
          </Route>
          <Route path={"/registration"}
            exact
            render = {props => (
            <Registration { ... props} loggedInStatus = {this.state.loggedInStatus} />
            )}>
          </Route>
          <Route path={"/login"}
            exact
            render = {props => (
            <Login { ... props} handleLogin={this.handleLogin} loggedInStatus = {this.state.loggedInStatus} />
            )}>
          </Route>
          <Route path={"/dashboard"}
            exact
            render = {props => (
            <Dashboard { ... props} handleLogin={this.handleLogin} loggedInStatus = {this.state.loggedInStatus} />
            )}>
          </Route>
        </Router>
      );
    }
}

// export default App;
