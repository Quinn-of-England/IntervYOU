import React, { useState } from "react";
import InputField from "../Inputs/InputField";
import styled from "styled-components";
import Posts from "../../components/Post/Posts";
import Comments from "../../components/Comment/Comments";
import Groups from "../../components/Group/Groups";

import { useSelector } from "react-redux";

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState("0");
  const updateSelectedTab = (e) => {
    setSelectedTab(e.target.id);
  };

  const { userName, userId } = useSelector((state) => state.auth);

  const tabOptions = [
    { id: "0", option: "Posts" },
    { id: "1", option: "Comments" },
    { id: "2", option: "Groups" },
    { id: "3", option: "Likes" },
  ];

  return (
    <StyledProfile>
      <div className="profile-container">
        <div className="profile-title"> My Profile</div>

        <InputField inputId="userid" label="User Id" defaultText={userId} />

        <InputField
          inputId="username"
          label="Username"
          defaultText={userName}
        />
      </div>

      <div className="tab-nav">
        {tabOptions.map(({ id, option }) => (
          <div
            id={id}
            className={
              selectedTab === id ? "tab-option selected" : "tab-option"
            }
            onClick={updateSelectedTab}
          >
            {option}
          </div>
        ))}
      </div>

      {selectedTab === "0" && (
        <Posts postSortType="date" postSearchType="user" />
      )}
      {selectedTab === "1" && <Comments commentSearchType="user" />}
      {selectedTab === "2" && <Groups groupSearchType="user" />}
      {selectedTab === "3" && <Posts postSearchType="likes" />}
    </StyledProfile>
  );
};

const StyledProfile = styled.div`
  margin: 0 40px;

  .profile-container {
    background: #fff;
    border: 1px solid #dce1f0;
    border-radius: 20px;

    padding: 30px 20px;
    margin-bottom: 40px;
  }

  .profile-title {
    padding: 0 10px;
    margin-bottom: 20px;
    font-size: 20px;
    font-family: Tahoma, sans-serif;
  }

  // Tab to View Posts, Comments, and Groups
  .tab-nav {
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #dce1f0;
    border-radius: 20px;

    position: relative;
    width: fit-content;
    height: fit-content;
    left: 50%;
    transform: translateX(-50%);

    border-radius: 5px;
    background: #fff;

    padding: 6px 10px;
    cursor: pointer;
  }

  .tab-option {
    padding: 5px 15px;
    margin: 0 10px;
    font-family: Tahoma, sans-serif;
  }

  .selected {
    border-radius: 10px;
    background-color: #006cbd;

    color: #edeff1;
  }
`;

export default Profile;
