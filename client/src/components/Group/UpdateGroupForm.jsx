import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router";
import axios from "axios";
import styled from "styled-components";
import AddButton from "../Buttons/AddButton";
import InputField from "../Inputs/InputField";
import CancelButton from "../PostForm/CancelButton";
import jwt from "jwt-decode";
import { IP, SERVER_PORT } from "../../utils/types";

const groupsUrl = `${IP}:${SERVER_PORT}/api/groups`;


const UpdateGroupForm = () => {
  const [groupContent, setGroupContent] = useState([
    { name: "", description: "" },
  ]);

  const history = useHistory();

  const [groupId, setGroupId] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    setGroupId(() => pathname.split(/[//]/)[1]);
  }, [pathname]);

  console.log(pathname);

  useEffect(() => {
    if (groupId !== "") {
      //Get Group By Id 
      axios
        .get(`${IP}:${SERVER_PORT}/api/groups/id/${groupId}`)
        .then((res) => {
          const {name, description} = res.data;
          setGroupContent({
            name,
            description,
          });
        })
        .catch((err)=>{
          console.log(err);
        });
    }
  }, [groupId]);

  const onUpdateGroup = (e) => {
    e.preventDefault();

    let token = "";
    if (localStorage.getItem("Authorization")) {
      token = jwt(localStorage.getItem("Authorization"));
    }

    axios.patch(groupsUrl + "/" + groupId,{
      groupContent
    })
    .then((res) => {
      console.log(res.data);
      history.push("/");
    })
    .catch((err) => {
      console.log(err);
    })
    // axios
    //   .patch(updateGroulUrl, groupContent)
    //   .then((res) => {
    //     console.log(res);
    //     // Return to Groups Page After Successful Post
    //     history.push("/groups");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const updateInputState = (e) => {
    setGroupContent({ ...groupContent, [e.target.id]: e.target.value });
    console.log(groupContent);
  }

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
      <InputField 
        inputId="description"
        label="Description"
        errMessage="Required *"
        defaultText={groupContent.description}
        setPostAttribute={updateInputState}
      />
      <div className="group-actions">
        <CancelButton btnText="CANCEL" handleClick={() => history.push("/groups")} />
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
