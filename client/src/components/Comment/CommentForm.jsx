import React from "react";
import styled from "styled-components";
import SubmitCommentButton from "../Buttons/SubmitCommentButton";
import CommentField from "../Inputs/CommentField";

const CommentForm = ({ postId }) => {
  const commentsPagePath = "/" + postId + "/comments";

  return (
    <StyledCommentForm>
      <CommentField placeholderText="Add a comment" />
      <div className="post-actions">
        <SubmitCommentButton
          btnText="Add Comment"
          commentsPagePath={commentsPagePath}
        />
      </div>
    </StyledCommentForm>
  );
};

const StyledCommentForm = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;

  height: 50px;
  width: 100%;

  padding-right: 30px;
  padding-left: 30px .post-actions {
    padding-left: 10px;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

export default CommentForm;
