import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../utils/customStyles";
import axios from "axios";
import { useSelector } from "react-redux";

import { IP, SERVER_PORT } from "../../utils/types.js";
import { EditIcon, DeleteIcon } from "../../utils/icons";

const commentPath = `${IP}:${SERVER_PORT}/api/comments/`;

const Comment = ({
  commentId,
  user,
  postId,
  content,
  date,
  edit,
  handleDelete,
  setHasUpdatedComment,
}) => {
  const [isEdited, setIsEdited] = useState(edit);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedComment, setUpdatedComment] = useState(content);

  const { userName: tokenUserName, userId } = useSelector(
    (state) => state.auth
  );

  const formatDate = () => {
    return new Date(date).toLocaleDateString();
  };

  const onClickComment = () => {
    setIsEditing((prevState) => !prevState);

    if (isEditing) {
      editComment();
    }
  };

  const editComment = () => {
    axios
      .patch(commentPath + "id/" + commentId, {
        _id: commentId,
        content: updatedComment,
      })
      .then((res) => {
        setIsEdited(res.data.comment.edit);
        setHasUpdatedComment((prevState) => !prevState);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <StyledComment>
      <div className="comment-content">
        <div className="comment-user-date">
          <div className="comment-user">u/{user}</div>
          <div className="user-date-seperator">•</div>
          <div className="comment-date">{formatDate()}</div>
          {isEdited === true ? (
            <div className="comment-edit">Edited</div>
          ) : (
            <div className="comment-edit" />
          )}
          {/* Display only for the comment creator */}
          {user === tokenUserName && (
            <div id="ref-1" className="comment-crud-actions">
              <EditIcon color={"#a9a9a9"} editPost={onClickComment} />
              <DeleteIcon
                color={COLORS.burgundyRed}
                deletePost={() => handleDelete(commentId)}
              />
            </div>
          )}
        </div>

        {isEditing ? (
          <input
            defaultValue={content}
            onChange={(e) => setUpdatedComment(e.target.value)}
          />
        ) : (
          <div className="comment-description"> {content} </div>
        )}
      </div>
    </StyledComment>
  );
};

const StyledComment = styled.div`
  display: flex;
  padding: 5px 10px;
  margin: auto;
  border-radius: 10px;
  border: solid 1px ${COLORS.inputBorder};
  box-shadow: 0 3px 8px ${COLORS.inputShadow};

  background: #fff;

  &:hover {
    border: solid 1px #969696;
  }

  .comment {
    &-content {
      margin: 0 20px;
      width: 100%;
    }
    &-user-date {
      display: flex;

      font-family: Tahoma, sans-serif;

      .comment-date,
      .comment-user {
        font-size: 14px;
        color: ${COLORS.fadedGrey};
        padding-bottom: 8px;
      }

      .user-date-seperator {
        font-size: 14px;
        color: ${COLORS.fadedGrey};
        padding: 0 8px;
      }

      .comment-edit {
        font-size: 14px;
        color: ${COLORS.fadedGrey};
        padding: 0 8px;
      }
      .comment-crud-actions {
        margin: 0 20px;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;

        width: 70px;
        cursor: pointer;
      }
    }

    &-description {
      font-size: 16px;
      font-weight: 200;
      font-family: "Noto Sans JP", sans-serif;
      padding-bottom: 8px;
    }
  }
`;

export default Comment;
