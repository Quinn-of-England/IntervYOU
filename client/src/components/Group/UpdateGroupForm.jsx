import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router";
import axios from "axios";
import styled from "styled-components";
import AddButton from "../Buttons/AddButton";
import InputField from "../Inputs/InputField";
import CancelButton from "../PostForm/CancelButton";
import { IP, SERVER_PORT } from "../../utils/types";

const groupsUrl = `${IP}:${SERVER_PORT}/api/groups`;

const UpdateGroupForm = ({ name, description }) => {
  const [groupContent, setGroupContent] = useState([
    { name: name, description: description },
  ]);

  const history = useHistory();

  const [groupId, setGroupId] = useState("");
  const { pathname } = useLocation();
  const [errMessage, setErrMessage] = useState("");

  useEffect(() => {
    setGroupId(() => pathname.split(/[//]/)[1]);
  }, [pathname]);

  useEffect(() => {
    if (groupId !== "") {
      //Get Group By Id
      axios
        .get(`${IP}:${SERVER_PORT}/api/groups/id/${groupId}`)
        .then((res) => {
          const { name, description } = res.data;
          setGroupContent({
            name,
            description,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [groupId]);

  const onUpdateGroup = (e) => {
    e.preventDefault();

    axios
      .patch(groupsUrl + "/" + groupId, {
        name: groupContent.name,
        description: groupContent.description,
      })
      .then((res) => {
        history.push("/groups");
      })
      .catch((err) => {
        console.log(err);
        setErrMessage("Group name already exists");
      });
  };

  const updateInputState = (e) => {
    setGroupContent({ ...groupContent, [e.target.id]: e.target.value });
  };

  return (
    <StyledGroupForm>
      <div className="create-form-title"> Update a group </div>

      {/* Community Title and Description */}
      <InputField
        inputId="name"
        label="Community"
        errMessage="Required *"
        defaultText={groupContent.name}
        setPostAttribute={updateInputState}
      />
      <div className="errorMessage"> {errMessage} </div>
      <InputField
        inputId="description"
        label="Description"
        errMessage="Required *"
        defaultText={groupContent.description}
        setPostAttribute={updateInputState}
      />
      <div className="group-actions">
        <CancelButton
          btnText="CANCEL"
          handleClick={() => history.push("/groups")}
        />
        <AddButton btnText="UPDATE" handleClick={onUpdateGroup} />
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
  .errorMessage {
    color: red;
    font-family: "Noto Sans JP", sans-serif;
    font-size: 10px;
    padding-left: 20px;
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

export default UpdateGroupForm;
