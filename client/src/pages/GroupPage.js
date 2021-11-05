import React from "react";
import styled from "styled-components";

import NavBar from "../components/NavBar";
import Groups from "../components/Group/Groups";
import SearchBar from "../components/Inputs/SearchBar";

const GroupPage = () => {
  return (
    <StyledGroup>
      <NavBar />
      <div className="group-content">
        <SearchBar />
        <Groups />
      </div>
    </StyledGroup>
  );
};

const StyledGroup = styled.div`
  width: 100vw;
  height: 100%;
  background: #eaf3f3;

  .group-content {
    padding: 20px 0;
    margin: 50px;
  }

  // .home-actions {
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: space-between;
  // }
`;

export default GroupPage;
