import React, { Component } from "react";
import styled from "styled-components";

import NavBar from "../components/NavBar";
import Registration from "../components/authentication/Registration";
import Login from "../components/authentication/Login";

export default class Dashboard extends Component{
  constructor(props){
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);    

  }

  handleSuccessfulAuth(data){
    this.props.handleLogin(data);
    this.props.history.push("/home");
  }

  render(){
    return (
      <StyledHome>
        <NavBar />
            <div className='row'>
                <Registration handleSuccessfulAuth = {this.handleSuccessfulAuth}/>
                <Login handleSuccessfulAuth = {this.handleSuccessfulAuth}/>
            </div>
      </StyledHome>
    );
  }
};

const StyledHome = styled.div`
  width: 100vw;
  height: 100%;
  background: #eaf3f3;

  .home-content {
    padding: 60px 0;
    margin: 0 40px;
  }

  .home-actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

// export default Home;
