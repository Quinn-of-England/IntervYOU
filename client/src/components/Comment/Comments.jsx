import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux"; //add useSelector when uncomment below
import { getComments } from "../../actions/comments.js";
import Comment from "../Comment/Comment";
import styled from "styled-components";
import axios from "axios";
import { IP, SERVER_PORT } from "../../utils/types.js";

const Comments = ( {postId} ) => {
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    console.log(postId);
    if (postId) {
      axios.get(`${IP}:${SERVER_PORT}/api/comments/post/`, {
        params: {page: 1, limit: 10, sortBy: 'date', postId: postId}
      })
      .then((res) => {
        console.log(res);
        setAllComments(() => res.data);
      }).catch((err) => {
        console.log(err);
      });
    }
  }, [postId]);

  return (
    <StyledComments>
      <div className="comments-header">Comments</div>
      {allComments?.length > 0 && allComments.map(({ _id, ...comment }) => (
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
