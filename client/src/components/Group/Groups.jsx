import React from "react";
import styled from "styled-components";

import Group from "./Group";

const Groups = () => {
  // Dummy Data
  const groupData = [
    {
      id: 1,
      community: "Computer Engineering",
      description: "Losers hehe",
      memberCount: 99,
      followingStatus: false,
    },
    {
      id: 2,
      community: "Liberal Arts",
      description: "lorem ipsum",
      memberCount: 5,
      followingStatus: true,
    },
    {
      id: 2,
      community: "Liberal Arts",
      description:
        "Some long description of this amazing society and im not sure why i have to write such a long description to check whether the overflow works.",
      memberCount: 1000,
      followingStatus: false,
    },
  ];
  return (
    <StyledGroups>
      {groupData.map((group) => (
        <Group key={group.id} {...group} />
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
