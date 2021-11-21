import React, { useState, useEffect } from "react";
import Comment from "../Comment/Comment";
import styled from "styled-components";
import axios from "axios";
import { IP, SERVER_PORT } from "../../utils/types.js";

const Comments = ({ postId, hasNewComments }) => {
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    if (postId) {
      axios
        .get(`${IP}:${SERVER_PORT}/api/comments/post/`, {
          params: { page: 1, limit: 10, sortBy: "date", postId: postId },
        })
        .then((res) => {
          setAllComments(() => res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [postId, hasNewComments]);

  return (
    <StyledComments>
      <div className="comments-header">Comments</div>
      {allComments?.length > 0 &&
        allComments.map(({ _id, ...comment }) => (
          <Comment key={_id} {...comment} />
        ))}
    </StyledComments>
  );
};

const StyledComments = styled.div`
  .comments-header {
    font-size: 20px;
    font-family: Tahoma, sans-serif;

    padding: 10px 5px;
  }
`;

export default Comments;
