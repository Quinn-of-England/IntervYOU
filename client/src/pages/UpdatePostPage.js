import React from "react";
import styled from "styled-components";
import UpdatePostForm from "../components/PostForm/UpdatePostForm";

const UpdatePostPage = () => {
  return (
    <StyledUpdatePostScreen>
      <UpdatePostForm />
    </StyledUpdatePostScreen>
  );
};

const StyledUpdatePostScreen = styled.div`
  width: 100vw;
  height: 100vh;
  background: #eaf3f3;

  padding: 80px 0 0 0;
`;

export default UpdatePostPage;
