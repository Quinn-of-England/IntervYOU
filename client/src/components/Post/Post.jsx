import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
import jwt from "jwt-decode";
import styled from "styled-components";

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
import { COLORS } from "../../utils/customStyles";

import Files from "../File/Files";
import CommentForm from "../Comment/CommentForm";

import { IP, SERVER_PORT } from "../../utils/types.js";
const userPath = `${IP}:${SERVER_PORT}/api/users/`;
const postPath = `${IP}:${SERVER_PORT}/api/posts/`;
const filePath = `${IP}:${SERVER_PORT}/api/files/`;

const Post = ({ postId, title, userName, group, content, likes, files }) => {
  const [voteState, setVoteState] = useState(0);
  const [voteTotal, setVoteTotal] = useState(likes ?? 0);
  const [onLoad, setOnLoad] = useState(true);
  const [commentState, setCommentState] = useState(false);

  const restrictedRef = useRef([]);

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

  const history = useHistory();

  let userId = "";
  if (localStorage.getItem("Authorization")) {
    userId = jwt(localStorage.getItem("Authorization"))._id;
  }

  useEffect(() => {
    axios
      .get(userPath + "id/" + userId)
      .then((res) => {
        const likesMap = res.data.likes;
        console.log(likesMap)
        if (postId in likesMap) {
          if(likesMap[postId] === 1) {
            upVoted();
          } else if (likesMap[postId] === -1) {
            downVoted()
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  useEffect(() => {
    if (!onLoad) {
      if (voteState === -1) {
        console.log("here")
        axios
          .patch(postPath + postId + "/downVote")
          .then((res) => {
            axios.patch(userPath + "id/" + userId + "/likes", { "postId": postId, "like": voteState }).then((res) => {
              console.log(res)
            }).catch((err) => {
              console.log(err);                  
            }); 
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        axios
          .patch(postPath + postId + "/upVote")
          .then((res) => {
            axios.patch(userPath + "id/" + userId + "/likes", { "postId": postId, "like": voteState }).then((res) => {
              console.log(res)
            }).catch((err) => {
              console.log(err);                  
            }); 
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      setOnLoad(false);
    }
  }, [onLoad, userId, postId, voteState]);

  const upVoted = () => onVoteChange(1);
  const downVoted = () => onVoteChange(-1);

  const onVoteChange = (voteDirection) => {
    if (voteState === voteDirection) {
      setVoteTotal((prevTotal) => prevTotal - voteDirection);
      setVoteState(0);
    } else {
      setVoteTotal((prevTotal) => prevTotal + voteDirection - voteState);
      setVoteState(voteDirection);
    }
  };

  const currentColor =
    voteState === -1
      ? COLORS.burgundyRed
      : voteState === 1
      ? COLORS.forestGreen
      : COLORS.fadedGrey;

  const currentUpColor =
    voteState === 1 ? COLORS.forestGreen : COLORS.fadedGrey;

  const currentDownColor =
    voteState === -1 ? COLORS.burgundyRed : COLORS.fadedGrey;

  const onClickComment = () => {
    setCommentState((prevState) => !prevState);
  };

  const onClickPost = (e) => {
    e.preventDefault();

    // Check if Click Happened Over Restricted Areas
    let visitCommentsPage = true;
    for (let ref of restrictedRef.current) {
      if (ref && ref.contains(e.target)) {
        visitCommentsPage = false;
      }
    }

    if (visitCommentsPage) {
      // Pass Post Id to Comments Page
      history.push("/" + postId + "/comments");
    }
  };

  const onDownloadAllFiles = () => {
    // Download Files On At a Time
    files.forEach((file) => {
      axios
        .get(filePath + "download/" + file.key, {
          responseType: "blob",
        })
        .then((res) => {
          // Define Blob for the File
          const blob = new Blob([res.data], {
            type: res.headers["content-type"],
          });

          // Create Link for File Download
          const link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);
          link.download = file.name;

          // Click to Download File + Add and Remove Link After Download Complete
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  const editPost = () => {
    history.push("/" + postId + "/update-post");
  };

  return (
    <StyledPost voteState={currentColor} onClick={onClickPost}>
      <div id="ref-0" className="voting-buttons" ref={setRestrictedRef}>
        <UpVoteArrowIcon color={currentUpColor} onUpVote={upVoted} />
        <div className="vote-total">{voteTotal}</div>
        <DownVoteArrowIcon color={currentDownColor} onDownVote={downVoted} />
      </div>

      <div className="post-content">
        <div className="post-title-crud">
          <div className="post-title"> {title} </div>

          {/* Display Only for Post Creator */}
          {userName !== userId && (
            <div
              id="ref-1"
              className="post-crud-actions"
              ref={setRestrictedRef}
            >
              <EditIcon color={"#a9a9a9"} editPost={editPost} />
              <DeleteIcon color={COLORS.burgundyRed} />
            </div>
          )}
        </div>

        <div className="post-user-group">
          <div className="post-userName">{`u/${userName}`}</div>
          <div className="user-group-seperator">•</div>
          <div className="post-group"> {`g/${group}`} </div>
        </div>

        <div className="post-description">{content}</div>

        <div id="ref-2" ref={setRestrictedRef}>
          {files?.length > 0 && <Files files={files} />}
        </div>

        <div id="ref-3" className="post-footer" ref={setRestrictedRef}>
          <div onClick={onClickComment} className="btn-comment">
            <CommentsIcon />
            <span> Comments </span>
          </div>

          {/* TODO: Fix On Click Only Download Stay on Post Page */}
          {files?.length > 0 && (
            <div className="post-actions" onClick={onDownloadAllFiles}>
              <DownloadDocumentIcon />
              <span> Download All </span>
            </div>
          )}

          <div className="post-actions">
            <BookmarkIcon />
            <span> Bookmark </span>
          </div>
          <div className="post-actions">
            <ShareLinkedinIcon />
            <span> Share </span>
          </div>
        </div>

        <div id="ref-4" ref={setRestrictedRef}>
          {commentState && <CommentForm postId={postId} />}
        </div>
      </div>
    </StyledPost>
  );
};

const StyledPost = styled.div`
  display: flex;

  padding: 5px 10px;
  margin: 20px 0;

  border-radius: 20px;
  border: solid 1px ${COLORS.inputBorder};
  box-shadow: 0 3px 8px ${COLORS.inputShadow};

  background: #fff;
  transition: all 0.6s ease;

  &:hover {
    border: solid 1px #969696;
  }

  .voting-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .vote-total {
      font-family: "Trebuchet MS", sans-serif;
      color: ${({ voteState }) => voteState};
    }

    svg {
      margin: 10px 5px;
      cursor: pointer;
    }
  }

  // Apply Tahoma Font to All Elements Relevant to Post
  div[class^="post"],
  div[class*="post"] {
    font-family: Tahoma, sans-serif;
    cursor: default;
  }

  .post {
    &-title {
      font-size: 22px;
      font-weight: 550;
      padding-top: 8px;
    }

    &-title-crud {
      display: flex;
      align-items: center;
      justify-content: space-between;

      padding-right: 20px;

      .post-crud-actions {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;

        width: 70px;
        cursor: pointer;
      }
    }

    &-user-group {
      display: flex;

      .post-group,
      .post-userName {
        font-size: 16px;
        color: ${COLORS.fadedGrey};
        padding-bottom: 8px;
      }

      .user-group-seperator {
        font-size: 14px;
        color: ${COLORS.fadedGrey};
        padding: 0 8px;
      }
    }

    &-content {
      width: 100%;
      font-size: 16px;
      font-weight: 200;
      padding: 0 20px 8px 10px;
    }

    &-footer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      padding-right: 55%;

      font-weight: 150;
      color: #a9a9a9;

      .btn-comment {
        display: flex;
        flex-direction: row;
        align-items: center;

        padding: 5px 10px;
        border-radius: 18px;
        font-weight: 150;
        color: #a9a9a9;

        span {
          padding-left: 8px;
        }

        &:hover {
          cursor: pointer;
          background: #e8e8e8;
        }
      }

      .post-actions {
        display: flex;
        flex-direction: row;
        align-items: center;

        white-space: nowrap;

        padding: 5px 10px;
        border-radius: 18px;

        span {
          padding-left: 8px;
        }

        &:hover {
          cursor: pointer;
          background: #e8e8e8;
        }
      }
    }
  }
`;

export default Post;
