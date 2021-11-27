import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router";
import { useDropzone } from "react-dropzone";
import ModularDropdown from "../ModularDropdown";
import AddButton from "../Buttons/AddButton";
import InputField from "../Inputs/InputField";
import ExpandingText from "../Inputs/ExpandingText";
import CancelButton from "./CancelButton";
import FormData from "form-data";
import File from "../File/File";
import { useSelector } from "react-redux";

import { IP, SERVER_PORT } from "../../utils/types.js";
import Group from "../Group/Group";

const baseUrl = `${IP}:${SERVER_PORT}/api/posts/add-post`;

const PostForm = () => {
  const history = useHistory();

  const { userName: name, userId } = useSelector((state) => state.auth);

  const [postContent, setPostContent] = useState({
    title: "",
    content: "",
    group: "",
  });

  const [files, setFiles] = useState();

  const onDroppedFiles = (droppedFiles) => {
    setFiles((prevFiles) => {
      if (prevFiles?.length > 0) {
        // Remove Duplicate Files from Upload
        const filteredDroppedFiles = droppedFiles.filter(
          (df) => !prevFiles.some((pf) => pf.path === df.path)
        );
        return [...prevFiles, ...filteredDroppedFiles];
      } else {
        return droppedFiles;
      }
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: onDroppedFiles,
  });

  const onCreatePost = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userName", name);
    formData.append("title", postContent.title);
    formData.append("group", postContent.group);
    formData.append("content", postContent.content);

    //Add Files to Form Data
    if (files)
      files.forEach((file) => {
        formData.append("files", file);
      });

    axios
      .post(baseUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        //Push
        history.push("/");
      })
      .catch((err) => {
        // Log JWT Items
        console.log(name);
        console.log(userId);

        // Log Error
        console.log(err);
      });
  };

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

  const onDeleteFile = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter((f) => f.path !== fileName));
  };

  const [groups, setGroups] = useState([]);

  useEffect(() => {
    if (!!userId) {
      axios
        .get(`${IP}:${SERVER_PORT}/api/users/groups/id/${userId}`)
        .then((res) => {
          console.log(res);
          setGroups(
            (res?.data.groups ?? []).map(({ id, name: value }) => ({
              id,
              value,
            }))
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userId]);

  const dropdownOptions = groups;

  return (
    <StyledPostForm>
      <div className="create-form-title"> Create a post </div>
      {/* Title, Community, Content, Files */}
      <InputField
        name="title"
        label="Title"
        errMessage="Required *"
        setPostAttribute={(e) =>
          setPostContent({ ...postContent, title: e.target.value })
        }
      />
      <div className="communityWrapper">
        <div className="communityLabel">Community</div>
        <ModularDropdown
          //Dropdown with all followed groups
          dropdownOptions={dropdownOptions}
          onValueChange={(group) => {
            setPostContent({ ...postContent, group });
          }}
        />
      </div>
      {/* TODO: Search for a community to post to */}
      <InputField
        label="Content"
        errMessage=""
        setPostAttribute={(e) =>
          setPostContent({ ...postContent, content: e.target.value })
        }
      />

      {/* <ExpandingText
        label="Content"
        errMessage=""
        setPostAttribute={(e) =>
          setPostContent({ ...postContent, content: e.target.value })
        }
      /> */}
      {/* File Drag and Drop Section */}
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
                canDelete={true}
                onDeleteFile={() => onDeleteFile(file.path)}
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

  .communityLabel {
    padding: 3px 6px;
    font-family: "Noto Sans JP", sans-serif;
    text-transform: uppercase;
    font-size: 12px;
    color: #acb0b6;
  }
  .communityWrapper {
    margin-left: 10px;
  }
  .create-form-title {
    font-size: 24px;
    font-family: "Noto Sans JP", sans-serif;

    margin: 5px 10px;
  }

  .dropzone-container {
    display: flex;
    justify-content: center;

    font-family: "Noto Sans JP", sans-serif;

    border-radius: 10px;
    border: 1px dashed #d3d3d3;

    padding: 20px;
    margin: 10px;

    &:hover {
      border-color: #2196f3;
      background-color: #2196f305;
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
    margin-bottom: 5px;
  }

  .has-files {
    color: #878787;
    margin-bottom: 5px;
  }

  .file-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    margin-bottom: 30px;
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
