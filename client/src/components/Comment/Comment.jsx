import React, {useRef} from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../utils/customStyles";
import jwt from "jwt-decode";
import {
  UpVoteArrowIcon,
  DownVoteArrowIcon,
  DownloadDocumentIcon,
  BookmarkIcon,
  ShareLinkedinIcon,
  CommentsIcon,
  EditIcon,
  DeleteIcon,
} from "../../utils/icons";


const Comment = ({ commentId, post, user, content, date, handleDelete, }) => {
  const [commentState, setCommentState] = useState(false);
  console.log(post);
  let userId = "";
  let tokenUserName = "";
  if (localStorage.getItem("Authorization")) {
    const token = jwt(localStorage.getItem("Authorization"));
    userId = token._id;
    tokenUserName = token.name;
  }
  
  const restrictedRef = useRef([]);
  const history = useHistory();

  const setRestrictedRef = (el) => {
    if (el) {
      //Get Number Specified As Last Character of Ref Id
      const refId = el.id;
      const refNum = refId.charAt(refId.length - 1);

      // Set At Ref Num in Restricted Ref Current Array
      return (restrictedRef.current[refNum] = el);
    }

    return 0;
  };

  const formatDate = () => {
    return new Date(date).toLocaleDateString();
  }

  const onClickComment = () => {
    setCommentState((prevState) => !prevState);
  };

  const editComment = () => {
    // call update comment
    history.push("/" + commentId);
  };

  return (
    <StyledComment>
      <div className="comment-content">

        <div className="comment-user-date">
          <div className="comment-user">u/{user}</div>
          <div className="user-date-seperator">•</div>
          <div className="comment-date">{formatDate()}</div>

          {/* Display only for the comment creator */}
          {user === tokenUserName && (
            <div
              id="ref-1"
              className="comment-crud-actions"
              ref={setRestrictedRef}
            >
              <EditIcon color={"#a9a9a9"} editPost={onClickComment} />
              <DeleteIcon
                color={COLORS.burgundyRed}
                deleteComment={() => handleDelete(commentId)}
              />
            </div>
          )}
        </div>

        <div className="comment-description"> {content} </div>

        <div id="ref-4" ref={setRestrictedRef}>
          {commentState && <CommentForm postId={post} />}
        </div>
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

      .comment-crud-actions {
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
