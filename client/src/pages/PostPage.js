import React from "react";
import styled from "styled-components";
import PostForm from "../components/PostForm/PostForm";

const PostPage = () => {
  return (
    <StyledPostScreen>
      <PostForm />
    </StyledPostScreen>
  );
};

const StyledPostScreen = styled.div`
  width: 100vw;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background: #eaf3f3;

  padding: 80px 0 60px 0;
`;

export default PostPage;
