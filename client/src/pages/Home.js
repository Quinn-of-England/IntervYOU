import React, { Component } from "react";
import styled from "styled-components";

import NavBar from "../components/NavBar";
import Posts from "../components/Posts";

import SearchBar from "../components/SearchBar";
import CreatePost from "../components/CreatePost";
import Registration from "../components/authentication/Registration";



// const Home = () => {
//   const [filteredInput, setFilteredInput] = useState("");
export default class Home extends Component{
  constructor(props){
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);    

  }

  handleSuccessfulAuth(data){
    this.props.handleLogin(data);
    this.props.history.push("/login");
  }

  render(){
    return (
      <StyledHome>
        <NavBar />
        <Registration handleSuccessfulAuth = {this.handleSuccessfulAuth}/>
        <div className="home-content">
          <div className="home-actions">
          <h3>Status: {this.props.loggedInStatus}</h3>
            <SearchBar
              placeHolder="Search for Interviews"
              // applyFilter={setFilteredInput}
            />
            <CreatePost />
          </div>
          <Posts />
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
