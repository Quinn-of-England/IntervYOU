import React, { useState, useEffect } from "react";
import Comment from "../Comment/Comment";
import styled from "styled-components";
import { useSelector } from "react-redux";
import axios from "axios";
import { IP, SERVER_PORT } from "../../utils/types.js";

import DeleteModal from "../DeleteModal";

const commentPath = `${IP}:${SERVER_PORT}/api/comments/`;

const Comments = ({ postId, hasNewComments, commentSearchType }) => {
  const [allComments, setAllComments] = useState([]);
  const [hasUpdatedComments, setHasUpdatedComments] = useState(true);

  const { userName: tokenUserName, userId } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    let url = commentPath;
    if (commentSearchType === "user") {
      url += "user/";
    } else if (commentSearchType === "post" && postId) {
      url += "post/";
    }

    if (url !== commentPath) {
      axios
        .get(url, {
          params: {
            page: 1,
            limit: 10,
            sortBy: "date",
            postId: postId,
            user: tokenUserName,
          },
        })
        .then((res) => {
          setAllComments(() => res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [postId, hasNewComments, commentSearchType, hasUpdatedComments]);

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

    // Handle Reload Comments
    setHasUpdatedComments((prevState) => !prevState);
  };

  const deleteCommentById = () => {
    setShowModal((prevModalState) => !prevModalState);

    axios
      .delete(commentPath + deletedCommentId.commentId, { postId: postId })
      .then()
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <StyledComments>
      <div className="comments-header">Comments</div>
      <DeleteModal
        deleteType="Comment"
        showModal={showModal}
        updateModalState={updateModalState}
        deleteById={deleteCommentById}
      />
      {allComments?.length > 0 &&
        allComments.map(({ _id, ...comment }) => (
          <Comment
            key={_id}
            commentId={_id}
            postId={postId}
            {...comment}
            handleDelete={handleDeleteCommentClick}
            setHasUpdatedComment={setHasUpdatedComments}
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
