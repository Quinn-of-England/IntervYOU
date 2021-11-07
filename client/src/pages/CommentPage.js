import React from "react";
import styled from "styled-components";
import Comments from "../components/Comment/Comments";
import NavBar from "../components/NavBar";


const CommentPage = () => {
  return (
    <StyledCommentScreen>
      <NavBar />
      <div className="comment-container">
        <Comments />
      </div>
    </StyledCommentScreen>
  );
};

const StyledCommentScreen = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
  background: #eaf3f3;

  .comment-container {
    padding: 20px 0;
    margin: 50px;
  }
`;

export default CommentPage;
