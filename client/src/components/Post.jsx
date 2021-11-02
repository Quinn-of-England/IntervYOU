import React, { useState } from "react";
import styled from "styled-components";

import {
  UpVoteArrowIcon,
  DownVoteArrowIcon,
  CommentsIcon,
  DownloadDocumentIcon,
  BookmarkIcon,
  ShareLinkedinIcon,
} from "../utils/icons";
import File from "./File";
import { COLORS } from "../utils/customStyles";

const Post = ({ title, user, description, voteCount, currentUserVote }) => {
  const [voteState, setVoteState] = useState(currentUserVote);
  const [voteTotal, setVoteTotal] = useState(voteCount);

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

  return (
    <StyledPost voteState={currentColor}>
      <div className="voting-buttons">
        <UpVoteArrowIcon color={currentUpColor} onUpVote={upVoted} />
        <div className="vote-total">{voteTotal}</div>
        <DownVoteArrowIcon color={currentDownColor} onDownVote={downVoted} />
      </div>
      <div className="post-content">
        <div className="post-title"> {title} </div>
        <div className="post-user"> {user} </div>
        <div className="post-description">{description}</div>
        <File fileName="Sample.png" fileSize="25 MB" fileType="Picture" />
        <div className="post-footer">
          <div className="post-actions">
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
    border: solid 1px rgb(150, 150, 150);
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
    &-content {
      margin: 0 20px;
      width: 100%;
    }

    &-title {
      font-size: 22px;
      font-weight: 550;
      padding-top: 8px;
    }

    &-user {
      color: ${COLORS.fadedGrey};
      font-size: 14px;
      padding-bottom: 8px;
    }

    &-description {
      font-size: 16px;
      font-weight: 200;
      padding-bottom: 8px;
    }

    &-footer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      padding-right: 55%;

      font-weight: 150;
      color: rgb(169, 169, 169);
      margin: 10px 0;

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
          background: rgb(232, 232, 232);
        }
      }
    }
  }
`;

export default Post;
