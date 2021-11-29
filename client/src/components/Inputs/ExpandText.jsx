import React, {useState, useEffect} from "react";
import styled, { css } from "styled-components";
import axios from "axios";

import "../../utils/global.css";

import GetProfileButton from "../Buttons/GetProfileButton";

import { IP, SERVER_PORT } from "../../utils/types.js";
const baseUrl = `${IP}:${SERVER_PORT}/api/linkedin`;

const ExpandText = ({
  inputId,
  label,
  errMessage,
  defaultText,
  postContent,
  setPostAttribute,
  setProfilePostAttribute
}) => {
    // Use to Expand Text Input
    const [numRows, setNumRows] = useState(1);
    useEffect(() => {
        //Resize Text Area
        const lineArr = postContent.split("\n");
        setNumRows(lineArr ? lineArr.length + 1 : 1);
    }, [postContent])

    const getProfile = async () => {
        const response = await axios.post(`${baseUrl}/profile`, { profile_id: postContent.trim(), profile_type: "personal"});

        // Get Desired Fields from Linkedin Profile
        const { first_name, last_name, industry, summary, education, skills} = response.data;
        
        let desiredContent = `Name: ${first_name} ${last_name}\nIndustry: ${industry}\nSummary: ${summary}\n`;

        let schools = "\nEducation:\n";
        education.forEach((edu) => {
            schools += ` -${edu.school.name} (${edu.date.start.year} - ${edu.date.end.year}) , ${edu.degree_name} ${edu.field_of_study}\n`
        })

        desiredContent += schools;

        let skillsStr = "\nSkills:\n";
        skills.forEach((skill) => {
            skillsStr += ` -${skill}\n`
        })
        desiredContent += skillsStr;

        setProfilePostAttribute(desiredContent);
    }

  return (
    <StyledExpandText >
      <div className="title-validation">
        <label className="styled-label">{label}</label>
        <GetProfileButton btnText="Get Profile" handleClick={getProfile} width="170px"/>
      </div>

      <div className="input-validation">
        <textarea
          id={inputId ?? ""}
          rows={numRows}
          type="text"
          className="styled-input textarea"
          value={postContent}
          onChange={ setPostAttribute}
        />
     </div>
    </StyledExpandText>
  );
};

const StyledExpandText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  .styled-label,
  .styled-err {
    padding: 3px 6px;

    font-family: "Noto Sans JP", sans-serif;
    text-transform: uppercase;
  }

  .styled-label {
    font-size: 12px;
    color: #acb0b6;
  }

  .styled-err {
    white-space: nowrap;
    font-size: 10px;
    color: #ee595d;
  }

  .title-validation {
    display: flex;
    justify-content: space-between;
  }

  .input-validation {
    display: flex;
    width: 100%;

    border-radius: 5px;
    border: 1px solid #dce1f0;

    &:focus-within {
      border-color: #1a73e8;
    }
  }

  .styled-input {
    padding: 0 8px;

    width: 100%;
    min-height: 35px;
    outline: none;
    border: none;
    background: none;
  }

  //Remove scrollbar
  .styled-input::-webkit-scrollbar {
    display: none;
  }

  .input-status-icon {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 10px 5px;
  }
`;

export default ExpandText;
