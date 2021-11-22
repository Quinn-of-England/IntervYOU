import React, { useState } from "react";
import styled from "styled-components";

import Posts from "../components/Post/Posts";

import SearchBar from "../components/Inputs/SearchBar";
import CreateButton from "../components/PostForm/CreateButton";
import Dropdown from "../components/Dropdown";

const Home = () => {
  // const [filteredInput, setFilteredInput] = useState("");

  // Storing Sorting State and Dropdown Options
  const [postSortType, setPostSortType] = useState("date");
  const dropdownOptions = [
    { id: "date", value: "Newest" },
    { id: "likes", value: "Hottest" },
  ];

  return (
    <StyledHome>
      <div className="home-actions">
        <SearchBar
          placeHolder="Search for posts"
          // applyFilter={setFilteredInput}
        />
        <Dropdown
          dropdownOptions={dropdownOptions}
          setPostSortType={setPostSortType}
        />

        <CreateButton btnText="Create a post" linkPath="/post" />
      </div>
      <Posts postSortType={postSortType} postSearchType={"all"}/>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background: #eaf3f3;

  padding: 50px;
  margin-top: 20px;

  .home-actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export default Home;
