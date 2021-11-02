import React from "react";
import styled from "styled-components";

import {
  CodeFile,
  ExcelFile,
  ImgFile,
  AudioFile,
  VideoFile,
  PdfFile,
  PptFile,
  WordFile,
  ZipFile,
} from "../utils/imgs";

const File = ({ fileName, fileSize, fileType }) => {
  const generateFileIcon = () => {
    switch (fileType) {
      case "Word Document" || "DOC":
        return <WordFile />;
      case "Powerpoint Slides" || "PPT":
        return <PptFile />;
      case "Excel Spreadsheet" || "XL":
        return <ExcelFile />;
      case "Picture" || "PNG" || "JPG":
        return <ImgFile />;
      case "Audio" || "MP3":
        return <AudioFile />;
      case "Video" || "MP4":
        return <VideoFile />;
      case "Acrobat" || "PDF":
        return <PdfFile />;
      case "Compressed Files" || "ZIP":
        return <ZipFile />;
      default:
        return <CodeFile />;
    }
  };

  return (
    <StyledFile>
      {generateFileIcon()}
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

  width: 300px;

  padding: 5px 15px;

  background: #fff;

  border-radius: 5px;
  border: solid 1px #d7d7d7;
  box-shadow: 0 3px 8px #d7d7d71a;

  transition: ease-in-out 0.3s;

  &:hover {
    cursor: pointer;
    border: dashed 1px darkgrey;
  }

  .file-info {
    padding: 0 20px;
  }

  .file-name {
    font-size: 16px;
    font-weight: 500;
    color: rgb(15, 15, 15);

    width: 200px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    padding: 5px 0 2px;
  }

  .file-data {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    font-size: 12px;
    color: rgb(105, 105, 105);

    padding: 2px 0 5px;

    .file-size {
      padding-right: 5px;
    }

    .file-type {
      padding-left: 5px;
    }
  }

  .file-icon {
    object-fit: cover;
    height: 40px;
    border-radius: 5px;
  }
`;

export default File;
