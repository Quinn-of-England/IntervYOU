import React, { useState, useEffect } from "react";
import styled from "styled-components";

import NavBar from "../components/NavBar";
import Posts from "../components/Posts";

import SearchBar from "../components/SearchBar";
import CreatePost from "../components/CreatePost";

// import { useHistory } from "react-router-dom";
import Registration from "../components/authentication/Registration";
import PostForm from "../components/PostForm";

const Home = () => {
  const [filteredInput, setFilteredInput] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  // useEffect(() => {
  //   if (!isAuth) history.push("/login");
  // }, []);
  //   handleSuccessfulAuth(data){
  //     this.props.handleLogin(data);

  return (
    <StyledHome>
      <NavBar />
      {/* <Registration handleSuccessfulAuth = {this.handleSuccessfulAuth}/> */}
      <div className="home-content">
        <div className="home-actions">
          <h3>Status: {isAuth} </h3>
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

export default Home;
