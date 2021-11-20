import React from "react";
import styled from "styled-components";
import UpdateGroupForm from "../components/Group/UpdateGroupForm";

const UpdateGroupPage = () => {
  return (
    <StyledUpdateGroupScreen>
      <UpdateGroupForm />
    </StyledUpdateGroupScreen>
  );
};

const StyledUpdateGroupScreen = styled.div`
  width: 100vw;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background: #eaf3f3;

  padding: 80px 0 60px 0;
`;

export default UpdateGroupPage;
