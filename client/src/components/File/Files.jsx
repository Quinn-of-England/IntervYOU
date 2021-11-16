import React from "react";
import styled from "styled-components";

import File from "./File";

const Files = ({ files }) => {
  return (
    <StyledFiles>
      {files.map((file, i) => (
        <File key={i} fileId={file.key} fileName={file.name} fileSize={file.size} fileType={file.file_type} />
      ))}
    </StyledFiles>
  );
};

const StyledFiles = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px 0 20px;
`;

export default Files;
