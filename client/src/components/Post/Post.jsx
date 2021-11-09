import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';
import jwt from 'jwt-decode';

import {
  UpVoteArrowIcon,
  DownVoteArrowIcon,
  DownloadDocumentIcon,
  BookmarkIcon,
  ShareLinkedinIcon,
} from "../../utils/icons";
import Files from "../File/Files";
import { COLORS } from "../../utils/customStyles";
import CommentForm from "../Comment/CommentForm";
import { CommentsIcon } from "../../utils/icons";


const userPath = "http://localhost:5000/api/users/";
const postPath = "http://localhost:5000/api/posts/";
const Post = ({ postId, title, userName, group, content, likes }) => {
  const [voteState, setVoteState] = useState(0);
  const [voteTotal, setVoteTotal] = useState(likes);
  const [onLoad, setOnLoad] = useState(true);

  const userId = jwt(localStorage.getItem("Authorization"))._id;
  useEffect(() => {
    axios.get(userPath + "id/" + userId).then((res) => {
      //TODO: Access Hashmap of Liked Posts
      // setVoteState(res.data.likes.get("null") ??  0);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  useEffect(() => {

    if (!onLoad) {
      // Updated the User Liked Map Status
      axios.get(userPath + "id/" + userId).then((res) => {         
        console.log(res); 
        if (voteState === -1) {
          axios.patch(postPath + postId + "/downVote").then((res) => {      
              //
          }).catch((err) => {
            console.log(err);
          });

        } else {
        axios.patch(postPath + postId + "/upVote").then((res) => {      
              //
          }).catch((err) => {
            console.log(err);
          });

        }
      }).catch((err) => {
        console.log(err);
      })
    }  else {
      setOnLoad(false);
    }
  }, [voteState])

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

  // Dummy Data to Be Replaced By Axios Call to Get Data
  const files = [
    {
      fileName: "Sample.doc",
      fileSize: "20 MB",
      fileType: "Word Document",
    },
    {
      fileName: "Sampleasdfasdfasddsfads.ppt",
      fileSize: "40 MB",
      fileType: "Powerpoint Slides",
    },
    {
      fileName: "Samplexl.xl",
      fileSize: "10 MB",
      fileType: "Excel Spreadsheet",
    },
  ];

  const [commentState, setCommentState] = useState(false);

  const onClickComment = (e) => {
      setCommentState({commentState: (!{commentState})});
  }

  return (
    
    <StyledPost voteState={currentColor}>
      <div className="voting-buttons">
        <UpVoteArrowIcon color={currentUpColor} onUpVote={upVoted} />
        <div className="vote-total">{voteTotal}</div>
        <DownVoteArrowIcon color={currentDownColor} onDownVote={downVoted} />
      </div>

      <div className="post-content">
        <div className="post-title"> {title} </div>
        <div className="post-userId"> {`u/${userName}`} </div>
        <div className="post-group"> {`g/${group}`} </div>
        <div className="post-content">{content}</div>

        <Files files={files} />

        <div className="post-footer">
          <div onClick={onClickComment} className="btn-comment"> 
              <CommentsIcon />
              <span> Comments </span>
          </div>
          <div className="post-actions">
            <DownloadDocumentIcon />
            <span> Download </span>
          </div>
          <div className="post-actions">
            <BookmarkIcon />
            <span> Bookmark </span>
          </div>
          <div className="post-actions">
            <ShareLinkedinIcon />
            <span> Share </span>
          </div>
        </div>
        {
          commentState && <CommentForm/>
        }
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

    &-userName {
      color: ${COLORS.fadedGrey};
      font-size: 14px;
      padding-bottom: 8px;
    }

    &-content {
      width: 100%;
      font-size: 16px;
      font-weight: 200;
      padding-bottom: 8px;
      padding-left: 20px;
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
