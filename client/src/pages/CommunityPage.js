import React from "react";
import styled from "styled-components";
import GroupForm from "../components/Group/GroupForm";

const CommunityPage = () => {
  return (
    <StyledPostScreen>
      <GroupForm />
    </StyledPostScreen>
  );
};

const StyledPostScreen = styled.div`
  width: 100vw;
  height: 100vh;
  background: #eaf3f3;
  padding: 80px 0 0 0;
`;

export default CommunityPage;
