import React, { useState } from "react";
import axios from "axios";
import jwt from "jwt-decode";
import styled from "styled-components";
import { useHistory } from "react-router";
import SubmitCommentButton from "../Buttons/SubmitCommentButton";
import CommentField from "../Inputs/CommentField";
import { IP, SERVER_PORT } from "../../utils/types.js";

const commentPath = `${IP}:${SERVER_PORT}/api/comments/`;
const postPath = `${IP}:${SERVER_PORT}/api/posts/`;

const CommentForm = ({ postId }) => {
  const commentsPagePath = "/" + postId + "/comments";

  const history = useHistory();

  const [commentContent, setCommentContent] = useState({
    content: "",
    date: new Date(Date.now()).toLocaleDateString("en-US"),
  })

  const onCreateComment = (e) => {
    e.preventDefault();

    let token = "";
    if (localStorage.getItem("Authorization")) {
      token = jwt(localStorage.getItem("Authorization"));
    }

    const name = token.name;

    axios
      .post(commentPath + "create", { user: name, content: commentContent.content, post: postId }).then((res) => {
        axios
          .patch(postPath + postId + "/add-comment", { comment: res.data.comment }).then((result) => {
            console.log(result)
          }).catch((err) => {
            console.log(err);
          });

        console.log(res);
        window.location.reload();
      }).catch((err) => {
        console.log(err);
      });
  }

  return (
    <StyledCommentForm>
      <CommentField
        placeholderText="Add a comment"
        errMessage="Required *"
        setCommentAttribute={(e) =>
          setCommentContent({ ...commentContent, content: e.target.value })
        } 
      />
      <div className="post-actions" onClick={onCreateComment}>
        <SubmitCommentButton
          btnText="Add Comment" commentsPagePath={commentsPagePath} />
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
