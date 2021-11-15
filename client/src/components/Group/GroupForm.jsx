import React, {useState} from "react";
import axios from "axios";
import { useHistory } from "react-router";
import styled from "styled-components";
import jwt from 'jwt-decode';
import AddButton from "../Buttons/AddButton";
import InputField from "../Inputs/InputField";
import CancelButton from "../PostForm/CancelButton";

const GroupForm = () => {
    const [groupContent, setGroupContent] = useState([
      { title: "", description: "" }
    ]);

  //   const onCreateGroup = (e) => {
  //     e.preventDefault();

  //     history.push(location.pathname + "/home");
  //     selectedPostId = null;
  //   };

  const history = useHistory();

  const onCreateGroup = (e) => {
    e.preventDefault();

    let token = "";
    if (localStorage.getItem("Authorization")) {
      token = jwt(localStorage.getItem("Authorization"));
    }


    axios.post(groupContent)
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch((err) =>  {
        console.log(err);
      });
  }

  return (
    <StyledGroupForm>
      <div className="create-form-title"> Create a group </div>

      {/* Community Title and Description */}
      <InputField label="Community" errMessage="Required *" />
      <InputField label="Description" errMessage="Required *" />

      <div className="group-actions">
        <CancelButton btnText="CANCEL" handleClick={() => history.push("/")} />
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
