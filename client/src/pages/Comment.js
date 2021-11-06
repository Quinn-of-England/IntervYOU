import React from 'react'
import styled from "styled-components";
import NavBar from "../components/NavBar";
import CommentForm from "../components/CommentForm";

const Comment = () => {
    return (
        <StyledCommentScreen>
            <NavBar />
            <div className="comment-container">
                <CommentForm />
            </div>
        </StyledCommentScreen>
    );
};

const StyledCommentScreen = styled.div`
    width: 100vw;
    height: 100vh;
    background: #eaf3f3;

  .comment-container {
    padding: 70px 0 0 0;
    width: 90%;
    margin: auto;
  }

`

export default Comment
