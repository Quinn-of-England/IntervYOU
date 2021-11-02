import React from "react";
import styled from "styled-components";

import { COLORS } from "../utils/customStyles";
import { DownloadDocumentIcon, FileIcon } from "../utils/icons";

const File = ({ fileName, fileSize, fileType }) => {
  return (
    <StyledFile>
      {/* Include File Icon Based on Type */}
      <FileIcon />
      <div className="file-info">
        <div className="file-name"> {fileName} </div>
        <div className="file-data">
          <div className="file-size"> {fileSize} </div>
          <div className="file-type"> {fileType} </div>
        </div>
      </div>
    </StyledFile>
  );
};

const StyledFile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 5px 20px;

  border-radius: 5px;
  border: solid 1px #d7d7d7;
  background: #fff;
  box-shadow: 0 3px 8px #d7d7d71a;

  .file-info {
    padding: 0 20px;
  }

  .file-name {
    font-size: 16px;
    font-weight: 500;
    color: rgb(15, 15, 15);
  }

  .file-data {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    font-size: 12px;
    color: rgb(105, 105, 105);

    .file-size {
      padding-right: 5px;
    }

    .file-type {
      padding-left: 5px;
    }
  }
`;

export default File;
