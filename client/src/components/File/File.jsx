import React, { useRef } from "react";
import axios from "axios";
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
} from "../../utils/imgs";

import { CloseIcon } from "../../utils/icons";

import { IP, SERVER_PORT } from "../../utils/types.js";

const filePath = `${IP}:${SERVER_PORT}/api/files/`;

const File = ({
  fileId,
  fileName,
  fileSize,
  fileType,
  canDelete,
  onDeleteFile,
}) => {
  const closeRef = useRef("");

  const generateFileIcon = () => {
    switch (fileType) {
      case "Word Document":
        return <WordFile />;
      case "Powerpoint Slides":
        return <PptFile />;
      case "Excel Spreadsheet":
        return <ExcelFile />;
      case "Image (png)":
      case "Image (jpg)":
      case "Image (jpeg)":
      case "Image (gif)":
        return <ImgFile />;
      case "Audio MP3":
        return <AudioFile />;
      case "Video MP4":
        return <VideoFile />;
      case "PDF Document":
        return <PdfFile />;
      case "Compressed Files (zip)":
      case "Compressed Files (rar)":
        return <ZipFile />;
      default:
        return <CodeFile />;
    }
  };

  const onDownloadFile = (e) => {
    // Download File By File Key
    if (fileId && !(closeRef.current && closeRef.current.contains(e.target))) {
      axios
        .get(filePath + "download/" + fileId, {
          responseType: "blob",
        })
        .then((res) => {
          // Define Blob for the File
          const blob = new Blob([res.data], {
            type: res.headers["content-type"],
          });

          // Create Link for File Download
          const link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);
          link.download = fileName;

          // Click to Download File + Add and Remove Link After Download Complete
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <StyledFile onClick={onDownloadFile}>
      {generateFileIcon()}
      <div className="file-info">
        <div className="file-name"> {fileName} </div>
        <div className="file-data">
          <div className="file-size"> {fileSize} </div>
          <div className="file-type"> {fileType} </div>
        </div>
      </div>
      {canDelete && (
        <span ref={(el) => (closeRef.current = el)} onClick={onDeleteFile}>
          <CloseIcon color={"#949494"} />
        </span>
      )}
    </StyledFile>
  );
};

const StyledFile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  //width: 300px;

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
    color: #0f0f0f;

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
    color: #696969;

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

  .close-icon {
    background: blue;
  }
`;

export default File;
