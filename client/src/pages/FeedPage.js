import React, { useState } from "react";
import styled from "styled-components";

import Posts from "../components/Post/Posts";

import SearchBar from "../components/Inputs/SearchBar";
import CreateButton from "../components/PostForm/CreateButton";
import Dropdown from "../components/Dropdown";

const Feed = () => {
  const [filteredInput, setFilteredInput] = useState("");

  const [postSortType, setPostSortType] = useState("date");
  const dropdownOptions = [
    { id: "date", value: "Newest" },
    { id: "likes", value: "Hottest" },
  ];

  return (
    <StyledFeed>
      <div className="feed-actions">
        <SearchBar placeHolder="Search for posts" applyFilter={setFilteredInput}/>
        <Dropdown
          dropdownOptions={dropdownOptions}
          setPostSortType={setPostSortType}
        />
        <CreateButton btnText="Create a post" linkPath="/post" />
      </div>
      <Posts postSortType={postSortType} postSearchType={"feed"} postFilter={filteredInput} />
    </StyledFeed>
  );
};

const StyledFeed = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background: #eaf3f3;

  padding: 50px;
  margin-top: 20px;

  .feed-actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export default Feed;
