import React, { useState, useEffect } from "react";
import Comment from "../Comment/Comment";
import styled from "styled-components";
import axios from "axios";
import { IP, SERVER_PORT } from "../../utils/types.js";

import DeleteModal from "../DeleteModal";

const commentPath = `${IP}:${SERVER_PORT}/api/comments/`;

const Comments = ( { postId } ) => {
  const [allComments, setAllComments] = useState([]);
  useEffect(() => {
    console.log(postId);
    if (postId) {
      axios.get(`${IP}:${SERVER_PORT}/api/comments/post/`, {
        params: {page: 1, limit: 10, sortBy: 'date', postId: postId}
      })
      .then((res) => {
        setAllComments(() => res.data);
      }).catch((err) => {
        console.log(err);
      });
    }
  }, [postId]);

  //Modal Logic
  const [showModal, setShowModal] = useState(false);
  const [deletedCommentId, setDeletedCommentId] = useState({ commentId: "" });

  const updateModalState = () => {
    setShowModal((prevModalState) => !prevModalState);
  };

  const handleDeleteCommentClick = (deleteCommentId) => {
    // Show Modal
    updateModalState();

    // Save Comment Id to Delete
    setDeletedCommentId({ commentId: deleteCommentId });
  };

  const deleteCommentById = () => {
    setShowModal((prevModalState) => !prevModalState);

    axios
      .delete(commentPath + deletedCommentId.commentId).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
    window.location.reload();
  }

  return (
    <StyledComments>
      <div className="comments-header">Comments</div>
      <DeleteModal
        deleteType="Comment"
        showModal={showModal}
        updateModalState={updateModalState}
        deleteCommentById={deleteCommentById}
      />
      {allComments?.length > 0 && allComments.map(({ _id, ...comment }) => (
        <Comment key={_id}
          commentId={_id}
          postId={postId}
          {...comment}
          handleDelete={handleDeleteCommentClick}
        />
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
