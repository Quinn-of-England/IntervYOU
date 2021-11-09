import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

import AddButton from "../Buttons/AddButton";
import InputField from "../Inputs/InputField";
import CancelButton from "../PostForm/CancelButton";

const GroupForm = () => {
  //   const [groupContent, setGroupContent] = useState([
  //     { title: "", description: "" },
  //   ]);

  //   const onCreateGroup = (e) => {
  //     e.preventDefault();

  //     history.push(location.pathname + "/home");
  //     selectedPostId = null;
  //   };

  const history = useHistory();

  return (
    <StyledGroupForm>
      <div className="create-form-title"> Create a group </div>

      {/* Community Title and Description */}
      <InputField label="Community" errMessage="Required *" />
      <InputField label="Description" errMessage="Required *" />

      <div className="group-actions">
        <CancelButton btnText="CANCEL" handleClick={() => history.push("/")} />
        <AddButton btnText="POST" handleClick={() => console.log("nice")} />
      </div>
    </StyledGroupForm>
  );
};

const StyledGroupForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-center: center;

  background: #fff;
  border-radius: 20px;

  padding: 20px;
  margin: auto;

  .create-form-title {
    font-size: 24px;
    font-family: "Noto Sans JP", sans-serif;

    margin: 5px 10px;
  }

  .group-actions {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }

  // Media Queries for Screen Support
  @media (max-width: 600px) {
    width: 350px;
  }

  @media (min-width: 600px) {
    width: 450px;
  }

  @media (min-width: 1080px) {
    width: 600px;
  }

  @media (min-width: 1200px) {
    width: 800px;
  }
`;

export default GroupForm;
