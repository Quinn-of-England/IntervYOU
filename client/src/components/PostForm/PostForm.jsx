import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import jwt from 'jwt-decode';

import AddButton from "../Buttons/AddButton";
import InputField from "../Inputs/InputField";
import CancelButton from "./CancelButton";
import axios from 'axios';
import FormData from 'form-data'
import File from "../File/File";
import { IP, SERVER_PORT  } from '../../utils/types.js'; 

const baseUrl = `${IP}:${SERVER_PORT}/api/posts/add-post`;

const PostForm = () => {
  const history = useHistory();

  const [postContent, setPostContent] = useState({
    title: '', content: '', group: ''
  });

  const [files, setFiles] = useState();

  const onDroppedFiles = (droppedFiles) => {
    setFiles((prevFiles) => { 
      // TODO: Format File Type and File Size

      if(prevFiles?.length > 0) {
        // Remove Duplicate Files from Upload
        const filteredDroppedFiles = droppedFiles.filter(df => !prevFiles.some(pf => pf.path === df.path));
        return [...prevFiles, ...filteredDroppedFiles];
      }  else { 
        return droppedFiles;
      }
    });
  }

  //TODO: Allow Delete Files -> Add Delete to Files and Onclick Delete from files array

  const { getRootProps, getInputProps } = useDropzone({ onDrop: onDroppedFiles});

  useEffect(() => {
    console.log(postContent);
  }, [postContent]);

  useEffect(() => {
    console.log(files);
  }, [files]);

  const onCreatePost = (e) => {
    e.preventDefault();

    let token = "";
    if (localStorage.getItem("Authorization")) {
      token = jwt(localStorage.getItem("Authorization"));
    }

    const userId = token._id;
    const name = token.name;

    console.log(files);

    const formData = new FormData();
    formData.append('userName', name);
    formData.append('title', postContent.title);
    formData.append('group', postContent.group);
    formData.append('content', postContent.content);

    //Add Files to Form Data
    files?.forEach((file) => {
      formData.append('files', file);
    });

    axios.post(baseUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((res) => {
      // Log Res
      console.log(res);
      console.log(files);

      //Push
      history.push("/");
    }).catch((err) => {
      // Log JWT Items
      console.log(token);
      console.log(userId);
      console.log(name);

      // Log Error 
      console.log(err);
    });
  }

  const formatFileSize = (fileBytes) => {
    let currSizeIndex = 0;
    const fileSizes = ["Bytes", "KB", "MB", "GB"];

    let bytes = parseInt(fileBytes);
    while (bytes > 1024) {
      bytes /= 1024;
      currSizeIndex++;
    }

    return Math.round(bytes) + " " + fileSizes[currSizeIndex];
  };

  const formatFileType = (fileType) => {
    switch (fileType) {
      case "image/png":
      case "image/jpg":
      case "image/jpeg":
      case "image/gif":
        return "Image (" + getFileExtension(fileType) + ")";
      case "audio/mp3":
        return "Audio MP3";
      case "video/mp4":
        return "Video MP4";
      case "application/pdf":
        return "PDF Document";
      case "application/zip":
      case "application/rar":
        return "Compressed Files (" + getFileExtension(fileType) + ")";
      default:
        if (fileType?.includes("presentation", "ppt")) {
          return "Powerpoint Slides";
        } else if (fileType?.includes("sheet", "xl")) {
          return "Excel Spreadsheet";
        } else if (fileType?.includes("word")) {
          return "Word Document";
        } else {
          return "Undefined File";
        }
    }
  };

  const getFileExtension = (fileType) => 
    fileType.slice(fileType.lastIndexOf("/") + 1, fileType.length);

  return (
    <StyledPostForm>
      <div className="create-form-title"> Create a post </div>

      {/* Title, Community, Content, Files */}
      <InputField name="title" label="Title" errMessage="Required *" setPostAttribute={(e) => setPostContent({ ...postContent, title: e.target.value })} />
      <InputField label="Community" errMessage="Required *" setPostAttribute={(e) => setPostContent({ ...postContent, group: e.target.value })} />
      {/* TODO: Search for a community to post to */}
      <InputField label="Content" errMessage="" setPostAttribute={(e) => setPostContent({ ...postContent, content: e.target.value })} />

      {/* File Drag and Drop Section */}
      {/* <input type="file" id="file_input" onChange={onDroppedFile} />
      <label for="file_input"> Click to Add Files </label>  */}

      <div className="dropzone-container">
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <div> Drag and Drop Files Here!</div>
          <div> Or Click to Select Files </div>
        </div>
      </div>

      {files?.length > 0 ? (
        <div className="dropped-files">
          <div className="has-files">Files</div>
          <div className="file-list">
            {files.map((file) => (
              <File
                key={file.path}
                fileName={file.path}
                fileSize={formatFileSize(file.size)}
                fileType={formatFileType(file.type)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="no-files">No Files</div>
      )}

      <div className="post-actions">
        <CancelButton btnText="CANCEL" handleClick={() => history.push("/")} />
        <AddButton btnText="POST" handleClick={onCreatePost} />
      </div>
    </StyledPostForm>
  );
};

const StyledPostForm = styled.div`
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

  .dropzone-container {
    border-radius: 10px;
    border: 1px dashed #d3d3d3;

    padding: 20px;
    margin: 10px;

    &:hover {
      border-color: #2196f3;
      cursor: pointer;
    }
  }

  .no-files,
  .dropped-files {
    margin: 0 20px;
    padding: 5px 0 10px;
    font-size: 14px;
    font-family: "Noto Sans JP", sans-serif;
    font-style: normal;
  }

  .no-files {
    color: #d3d3d3;
  }

  .has-files {
    color: #878787;
    margin-bottom: 5px;
  }

  .file-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .post-actions {
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

export default PostForm;
