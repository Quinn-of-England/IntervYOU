import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import PostForm from "../components/PostForm/PostForm";

const PostPage = () => {
  return (
    <StyledPostScreen>
      <NavBar />
      <div className="post-container">
        <PostForm />
      </div>
    </StyledPostScreen>
  );
};

const StyledPostScreen = styled.div`
  width: 100vw;
  height: 100vh;
  background: #eaf3f3;

  .post-container {
    padding: 70px 0 0 0;
  }
`;

export default PostPage;
