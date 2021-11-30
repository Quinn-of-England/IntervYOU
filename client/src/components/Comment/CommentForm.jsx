import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import SubmitCommentButton from "../Buttons/SubmitCommentButton";
import CommentField from "../Inputs/CommentField";
import { IP, SERVER_PORT } from "../../utils/types.js";

import { useSelector } from "react-redux";

const commentPath = `${IP}:${SERVER_PORT}/api/comments/`;
const postPath = `${IP}:${SERVER_PORT}/api/posts/`;

const CommentForm = ({ postId, setHasNewComments }) => {
  const commentsPagePath = "/" + postId + "/comments";

  const [commentContent, setCommentContent] = useState({
    content: "",
    date: new Date(Date.now()).toLocaleDateString("en-US"),
  });

  const { userName } = useSelector((state) => state.auth);

  const onCreateComment = (e) => {
    e.preventDefault();

    if (userName) {
      axios
        .post(commentPath + "create", {
          user: userName,
          content: commentContent.content,
          post: postId,
        })
        .then((res) => {
          axios
            .patch(postPath + postId + "/add-comment", {
              comment: res.data.comment,
            })
            .then(() => {
              setHasNewComments(true);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <StyledCommentForm>
      <CommentField
        placeholderText="Add a comment"
        setCommentAttribute={(e) =>
          setCommentContent({ ...commentContent, content: e.target.value })
        }
      />
      <div className="post-actions" onClick={onCreateComment}>
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

  .post-actions {
    padding-left: 10px;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

export default CommentForm;
