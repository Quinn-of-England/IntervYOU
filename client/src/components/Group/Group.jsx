import React, { useState, useEffect } from "react";
import axios from "axios";
import styled, { css } from "styled-components";
import jwt from "jwt-decode";
import { COLORS } from "../../utils/customStyles";
import { IP, SERVER_PORT } from "../../utils/types";
import { PlusIcon, EditIcon, DeleteIcon } from "../../utils/icons";
import { useHistory } from "react-router-dom";


const groupPath = `${IP}:${SERVER_PORT}/api/groups/`;
const userPath = `${IP}:${SERVER_PORT}/api/users/`;

const Group = ({ groupId, name, description, follower_count, followingStatus, handleDelete, owner }) => {
  const [isFollowing, setIsFollowing] = useState(followingStatus);
  const[followCount, setFollowCount] = useState(follower_count ?? 0);

  let userId = "";
  if (localStorage.getItem("Authorization")) {
    userId = jwt(localStorage.getItem("Authorization"))._id;
  }

  const history = useHistory();



  useEffect(() =>{
    //update followCount
    
    //Get Group By Id
    if(groupId) {
      console.log(owner);
      console.log(groupId);
    }
  },[]); //update when follow state changes


  const followChange = () => {
    const followChange = isFollowing ? -1 : 1;
    setIsFollowing((prevFollowing) => !prevFollowing);
    setFollowCount((prevTotal) => prevTotal + followChange);
    const  followState = isFollowing ? false : true;
    
    axios 
      .patch(groupPath + "count/" + name,
      { 
        inc: followChange
      })
      .then((res) => {      
        axios
        .patch(userPath + "groups/id/" + userId,{
          name: name, 
          add: followState,
        })
        .then((res)=> {
          console.log(res);
        }).catch((err) => {
          console.log(err);
        });
        console.log(res);
      
      }).catch((err) => {
        console.log (err);
      });
  }

  const editPost = () => {
    history.push("/" + groupId + "/update-group");
  };

  return (
    <StyledGroup isFollowing={isFollowing}>
      <div className="group-header">
        <div className="group-title"> {name} </div>
        <button className="group-following" onClick={followChange}>
          {isFollowing ? (
            <>
              <div> Following </div>
            </>
          ) : (
            <>
              <PlusIcon />
              <div className="add-follow-text"> Follow </div>
            </>
          )}
        </button>
      </div>
      <div className="group-footer">
        <div className="group-description"> {description} </div>
        <div className="group-count"> {followCount} Members </div>
      </div>
      {  owner === userId && 
      <div>
        <EditIcon color={"#a9a9a9"} editPost={editPost}/>
        <DeleteIcon color={COLORS.burgundyRed} deletePost={() => handleDelete(groupId)}/>
      </div>
      }
    </StyledGroup>
  );
};

//Edit -> Pass current group content to new page 

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
              color: #fff;
              border-color: #004e7c;
              background: #004e7c;
            `
          : css`
              color: #283747;
              border-color: #007cc7;
              background: #fff;
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