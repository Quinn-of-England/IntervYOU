import React, {useState} from "react";
import styled from "styled-components";

import Groups from "../components/Group/Groups";
import SearchBar from "../components/Inputs/SearchBar";
import CreateButton from "../components/PostForm/CreateButton";

const GroupPage = () => {
  const [filteredInput, setFilteredInput] = useState("");

  return (
    <StyledGroup>
      <div className="group-actions">
        <SearchBar placeHolder="Search for groups" applyFilter={setFilteredInput}/>
        <CreateButton btnText="Create a group" linkPath="/group/create" />
      </div>
      <Groups groupFilter={filteredInput}/>
    </StyledGroup>
  );
};

const StyledGroup = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background: #eaf3f3;

  padding: 50px;
  margin-top: 20px;

  .group-actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default GroupPage;
