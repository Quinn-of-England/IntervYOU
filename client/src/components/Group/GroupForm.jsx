import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import styled from "styled-components";
import jwt from "jwt-decode";
import AddButton from "../Buttons/AddButton";
import InputField from "../Inputs/InputField";
import CancelButton from "../PostForm/CancelButton";

import { IP, SERVER_PORT } from "../../utils/types";

const groupsUrl = `${IP}:${SERVER_PORT}/api/groups`;
const createGroupUrl = `${groupsUrl}/create`;

const GroupForm = () => {
  const [groupContent, setGroupContent] = useState(
    {name: "", description: ""}
  );

  const history = useHistory();

  const onCreateGroup = (e) => {
    e.preventDefault();

    let userId = "";
    if (localStorage.getItem("Authorization")) {
      userId = jwt(localStorage.getItem("Authorization"))._id;
    }

    axios
      .post(createGroupUrl, {...groupContent, owner: userId})
      .then((res) => {
        console.log(res);

        // Return to Groups Page After Successful Post
        history.push("/groups");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <StyledGroupForm>
      <div className="create-form-title"> Create a group </div>

      {/* Community Title and Description */}
      <InputField label="Community" errMessage="Required *" setPostAttribute={(e) =>
          setGroupContent({...groupContent, name: e.target.value })
        }/>
      <InputField label="Description" errMessage="Required *" setPostAttribute={(e) =>
          setGroupContent({...groupContent, description: e.target.value })
        }/>
      <div className="group-actions">
        <CancelButton btnText="CANCEL" handleClick={() => history.push("/groups")} />
        <AddButton btnText="POST" handleClick={onCreateGroup} />
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
