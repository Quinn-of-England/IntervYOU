import React, {useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

import Posts from "../components/Post/Posts";

import SearchBar from "../components/Inputs/SearchBar";
import CreateButton from "../components/PostForm/CreateButton";

const LinkedinPage = () => {

// TODO: Have Limit of 100 Calls, Don't Uncomment this field pls.
//     useEffect(() => {
//     axios.post("https://linkedin-profiles-and-company-data.p.rapidapi.com/profile-details",
//     {
//         profile_id: "nicholaskawwas",
//         profile_type: 'personal'
//     },
//     { headers: {
//         'content-type': 'application/json',
//         'x-rapidapi-host': 'linkedin-profiles-and-company-data.p.rapidapi.com',
//         'x-rapidapi-key': 'process.env.LINKEDIN_API_KEY'
//     }}).then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err.response);
//     });
// }, []);

  return (
    <StyledLinkedinPage>
      <div className="home-actions">
        <SearchBar
          placeHolder="Search for posts"
        />
        <CreateButton btnText="Create a post" linkPath="/post" />
      </div>
    </StyledLinkedinPage>
  );
};

const StyledLinkedinPage = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background: #eaf3f3;

  padding: 50px;
  margin-top: 20px;

  .home-actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default LinkedinPage;
