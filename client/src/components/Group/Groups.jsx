import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import jwt from "jwt-decode";
import Group from "./Group";
import { IP, SERVER_PORT } from "../../utils/types";

const Groups = () => {
  const [allGroups, setAllGroups] = useState([]);
  const [followedGroups, setFollowedGroups] = useState([]);

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
        console.log(allGroups);
      })
      .catch((err) => {
        console.log(err);
      });    
  }, []);

  return (
    <StyledGroups>
      {allGroups.map(({ _id, ...group }) => (
        <Group key={_id} groupId={_id} {...group}/>
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