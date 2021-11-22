import React, { useState } from "react";
import styled from "styled-components";

import Posts from "../components/Post/Posts";
import Profile from "../components/Profile/Profile";
import Dropdown from "../components/Dropdown";

const ProfilePage = () => {
  const [selection, setSelection] = useState(["posts"]);

  return (
    <StyledProfilePage>
      <div>Posts</div>
      {selection === "posts" && (
      <Posts postSortType={"date"} postSearchType={"user"} />
      )}
      {selection === "comments" && (
      <Comments /> )}
      {selection === "groups" && (
      <Groups /> )}
      <Profile />
    </StyledProfilePage>
  );
};

const StyledProfilePage = styled.div`
  width: 100vw;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background: #eaf3f3;

  padding: 80px 0 60px 0;
`;

export default ProfilePage;
