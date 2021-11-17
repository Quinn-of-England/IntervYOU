import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt from "jwt-decode";
import styled from "styled-components";
import { useLocation, useHistory } from "react-router";
import { useDropzone } from "react-dropzone";

import AddButton from "../Buttons/AddButton";
import InputField from "../Inputs/InputField";
import CancelButton from "./CancelButton";
import FormData from "form-data";
import File from "../File/File";

import { IP, SERVER_PORT } from "../../utils/types.js";

//const baseUrl = `${IP}:${SERVER_PORT}/api/posts/update-post`;

const UpdatePostForm = () => {
  const history = useHistory();

  const [postContent, setPostContent] = useState({
    title: "",
    content: "",
    group: "",
  });

  const [updatedFiles, setUpdatedFiles] = useState([]);
  // TODO: Use These two States to Delete Deleted Files from S3 and Add new Files to S3
  //   const [deletedFiles, setDeletedFiles] = useState([]);
  //   const [addedFiles, setAddedFiles] = useState([]);

  const [postId, setPostId] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    setPostId(() => pathname.split(/[//]/)[1]);
  }, [pathname]);

  //TODO: Initialize Post Content with Get Request
  useEffect(() => {
    if (postId !== "") {
      axios
        .get(`${IP}:${SERVER_PORT}/api/posts/${postId}`)
        .then((res) => {
          const { title, content, group, files } = res.data;
          setPostContent({
            title,
            content,
            group,
          });
          setUpdatedFiles(files);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [postId]);

  const onDroppedFiles = (droppedFiles) => {
    setUpdatedFiles((prevFiles) => {
      // TODO: Format File Type and File Size
      console.log(droppedFiles);
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

  //TODO: Allow Delete Files -> Add Delete to Files and Onclick Delete from files array

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: onDroppedFiles,
  });

  const onUpdatePost = (e) => {
    e.preventDefault();

    let token = "";
    if (localStorage.getItem("Authorization")) {
      token = jwt(localStorage.getItem("Authorization"));
    }

    const userId = token._id;
    const name = token.name;

    const formData = new FormData();
    formData.append("userName", name);
    formData.append("title", postContent.title);
    formData.append("group", postContent.group);
    formData.append("content", postContent.content);

    //Add Files to Form Data
    if (updatedFiles)
      updatedFiles.forEach((file) => {
        formData.append("files", file);
      });

    // axios
    //   .post(baseUrl, formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   })
    //   .then((res) => {
    //     // Log Res
    //     console.log(res);
    //     console.log(files);

    //     //Push
    //     history.push("/");
    //   })
    //   .catch((err) => {
    //     // Log JWT Items
    //     console.log(token);
    //     console.log(userId);
    //     console.log(name);

    //     // Log Error
    //     console.log(err);
    //   });
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
    setUpdatedFiles((prevFiles) =>
      prevFiles.filter((f) => f.name !== fileName)
    );
    console.log(fileName);
  };

  return (
    <StyledPostForm>
      <div className="create-form-title"> Update your post </div>

      {/* Title, Community, Content, Files */}
      <InputField
        name="title"
        label="Title"
        errMessage="Required *"
        defaultText={postContent.title}
      />
      {/*         setPostAttribute={(e) =>
          setPostContent({ ...postContent, title: e.target.value })
        } */}
      <InputField
        label="Community"
        errMessage="Required *"
        defaultText={postContent.group}
      />
      {/*         setPostAttribute={(e) =>
          setPostContent({ ...postContent, group: e.target.value })
        } */}
      {/* TODO: Search for a community to post to */}
      <InputField
        label="Content"
        errMessage=""
        defaultText={postContent.content}
      />

      {/*         setPostAttribute={(e) =>
          setPostContent({ ...postContent, content: e.target.value })
        } */}

      {/* File Drag and Drop Section */}
      <div className="dropzone-container">
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <div> Drag and Drop Files Here!</div>
          <div> Or Click to Select Files </div>
        </div>
      </div>

      {updatedFiles?.length > 0 ? (
        <div className="dropped-files">
          <div className="has-files">Files</div>
          <div className="file-list">
            {updatedFiles.map((file) => {
              // If File Contains .file_type, it is already stored in the db, else it is a new file
              return file.file_type != null ? (
                <File
                  key={file.name}
                  fileName={file.name}
                  fileSize={file.size}
                  fileType={file.file_type}
                  canDelete={true}
                  onDeleteFile={() => onDeleteFile(file.name)}
                />
              ) : (
                <File
                  key={file.path}
                  fileName={file.path}
                  fileSize={formatFileSize(file.size)}
                  fileType={formatFileType(file.type)}
                  canDelete={true}
                  onDeleteFile={() => onDeleteFile(file.name)}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div className="no-files">No Files</div>
      )}

      <div className="post-actions">
        <CancelButton btnText="CANCEL" handleClick={() => history.push("/")} />
        <AddButton btnText="UPDATE" handleClick={onUpdatePost} />
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
    display: flex;
    justify-content: center;

    font-family: "Noto Sans JP", sans-serif;

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

export default UpdatePostForm;
