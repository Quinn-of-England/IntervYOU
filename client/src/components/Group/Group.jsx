import React, { useState, useEffect } from "react";
import axios from "axios";
import styled, { css } from "styled-components";
import { useHistory } from "react-router-dom";
import jwt from "jwt-decode";
import { COLORS } from "../../utils/customStyles";
import { IP, SERVER_PORT } from "../../utils/types";
import { PlusIcon } from "../../utils/icons";

const Group = ({ community, description, memberCount, followingStatus }) => {
  const history = useHistory();

  const [isFollowing, setIsFollowing] = useState(followingStatus);
  const [followCount, setFollowCount] = useState(memberCount);
  const [followState, setFollowState] = useState(false);

  //Create State to Store User Groups List
  const [groupList, setGroupList] = useState([]);

  let userId = "";
  if (localStorage.getItem("Authorization")) {
    userId = jwt(localStorage.getItem("Authorization"))._id;
  }

  // useEffect(() => {
  //   axios
  //     .get(`${IP}:${SERVER_PORT}/api/users/groups/id/${userId}`)
  //     .then((res) => {
  //       setGroupList(() => [res.data]);
  //       //Get List of Groups of User
  //       // Set Grouplist to grouplist from response
  //       //Set Following state true if community is in list of groups of that user
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [userId]);

  // On Click function
  // -> setFollowCount() +1 if !isfollowing and on Click else if isFollowing then -1 to unfollow

  const updateFollowStatus = () =>
    setIsFollowing((prevFollowing) => !prevFollowing);

  return (
    <StyledGroup isFollowing={isFollowing}>
      <div className="group-header">
        <div className="group-title"> {community} </div>
        <button className="group-following" onClick={updateFollowStatus}>
          {isFollowing ? (
            <>
              <PlusIcon />
              <div className="add-follow-text"> Follow </div>
            </>
          ) : (
            <>
              <div> Following </div>
            </>
          )}
        </button>
      </div>
      <div className="group-footer">
        <div className="group-description"> {description} </div>
        <div className="group-count"> {followCount} Members </div>
      </div>
    </StyledGroup>
  );
};

const StyledGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  min-height: 150px;
  width: 400px;

  padding: 15px 20px;
  margin: 20px 0;

  font-family: Tahoma, sans-serif;
  cursor: default;

  border-radius: 20px;
  border: solid 1px ${COLORS.inputBorder};
  box-shadow: 0 3px 8px ${COLORS.inputShadow};

  background: #fff;
  transition: all 0.6s ease;

  &:hover {
    border: solid 1px #969696;
    box-shadow: 0px 5px 8px -5px ${COLORS.darkBlue};
  }

  .group {
    &-header,
    &-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-title {
      font-size: 22px;
      font-weight: 550;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &-description {
      font-size: 16px;
      font-weight: 200;
      color: #282c35;

      padding: 6px 0 8px;
    }

    &-count {
      font-size: 14px;
      color: ${COLORS.fadedGrey};

      text-align: center;

      margin-top: auto;
      padding-bottom: 5px;
    }

    &-following {
      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;

      border: solid 1px;
      border-radius: 10px;

      height: 25px;

      font-size: 1rem;
      font-family: "Barlow Condensed", sans-serif;
      letter-spacing: 1px;

      ${({ isFollowing }) =>
        isFollowing
          ? css`
              color: #283747;
              border-color: #007cc7;
              background: #fff;
            `
          : css`
              color: #fff;
              border-color: #004e7c;
              background: #004e7c;
            `}

      padding: 4px 10px;
      transition: 0.3s ease-in-out;

      svg {
        fill: #283747;
        width: 10px;
      }

      .add-follow-text {
        padding-left: 4px;
      }

      &:hover {
        box-shadow: 0px 3px 5px -4px ${COLORS.darkBlue};
      }
    }
  }
`;

export default Group;
