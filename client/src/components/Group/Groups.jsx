import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import jwt from "jwt-decode";
import Group from "./Group";
import DeleteModal from "../DeleteModal";
import { IP, SERVER_PORT } from "../../utils/types";

const Groups = () => {
  const [allGroups, setAllGroups] = useState([]);
  const [followedGroups, setFollowedGroups] = useState(null);

  const groupsUrl = `${IP}:${SERVER_PORT}/api/groups/`;
  const usersUrl = `${IP}:${SERVER_PORT}/api/users/`;

  let userId = "";
  if (localStorage.getItem("Authorization")) {
    userId = jwt(localStorage.getItem("Authorization"))._id;
  }

  useEffect(() => {
    if(userId) {
      axios.get(usersUrl + "groups/id/"  + userId).then((res) => {
        setFollowedGroups(res.data.groups);
        console.log(res.data.groups);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, [userId]);

  useEffect(() => {
    axios.get(groupsUrl)
      .then((res) => {
        setAllGroups(() => res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });    
  }, []);

  //modal logic for groups
  const [showModal, setShowModal] = useState(false);
  const [deletedGroupId, setDeletedGroupId] = useState({ groupId: "" });

  const updateModalState = () => {
    setShowModal((prevModalState) => !prevModalState);
  };

  const handleDeleteGroupClick = (deleteGroupId) => {
    // Show Modal
    updateModalState();

    // Save Post Id to Delete
    setDeletedGroupId({ groupId: deleteGroupId });
    
  };

  const deleteGroupById = () => {
    setShowModal((prevModalState) => !prevModalState);
    
    console.log(groupsUrl + "id/" + deletedGroupId.groupId);
    axios
     .delete(groupsUrl + "id/" + deletedGroupId.groupId)
     .then((res) =>{
      setTimeout(()=>{
        window.location.reload();
      },100); 
       console.log(res);
     }).catch((err) => {
       console.log(err);
     })
  };

  return (
    <StyledGroups>
      <DeleteModal
        deleteType="Group"
        showModal={showModal}
        updateModalState={updateModalState}
        deleteById={deleteGroupById}
      />

      {allGroups?.length>0 && followedGroups && allGroups.map(({ _id,  ...group }) => (
        <Group
         key={_id}
         followingStatus={followedGroups.find(followedGroup => followedGroup._id === _id)}
         groupId={_id}
         {...group}
         handleDelete={handleDeleteGroupClick}/>
      ))}
    </StyledGroups>
  );
};

const StyledGroups = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 15px;
`;

export default Groups;