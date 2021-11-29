import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Group from "./Group";
import Pagination from "../Pagination/Pagination";
import DeleteModal from "../DeleteModal";
import { useSelector } from "react-redux";

import { IP, SERVER_PORT } from "../../utils/types";

const Groups = ({ groupSearchType, groupFilter }) => {
  const [allGroups, setAllGroups] = useState([]);
  const [numPages, setNumPages] = useState(1);
  const [currPage, setCurrPage] = useState(1);
  const [followedGroups, setFollowedGroups] = useState(null);

  const [hasDeletedGroups, setHasDeletedGroups] = useState(false);

  const groupsUrl = `${IP}:${SERVER_PORT}/api/groups/`;
  const usersUrl = `${IP}:${SERVER_PORT}/api/users/groups/id/`;

  const { userId } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userId) {
      axios
        .get(usersUrl + userId)
        .then((res) => {
          setFollowedGroups(res.data.groups);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userId, hasDeletedGroups]);

  useEffect(() => {
    let url = groupsUrl;
    if (groupSearchType === "user") {
      url = usersUrl + userId;
    }

    axios
      .get(url, { params: {
        page: currPage,
        size: 1,
      }})
      .then((res) => {
        console.log(res.data);
        if (groupSearchType === "user") {
          setAllGroups(() => res.data.groups);
        } else {
          setAllGroups(() => res.data);
        }

        //Update Pagination 
        setNumPages(res.data.totalPages);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currPage, hasDeletedGroups]);

  // Modal logic for groups
  const [showModal, setShowModal] = useState(false);
  const [deletedGroupId, setDeletedGroupId] = useState({ groupId: "" });

  const updateModalState = () => {
    setShowModal((prevModalState) => !prevModalState);
  };

  const handleDeleteGroupClick = (deleteGroupId) => {
    // Show Modal
    updateModalState();

    // Save Post Id to Delete
    setDeletedGroupId({ groupId: deleteGroupId });
  };

  const deleteGroupById = () => {
    setShowModal((prevModalState) => !prevModalState);

    axios
      .delete(groupsUrl + "id/" + deletedGroupId.groupId)
      .then(() => {
        // Update to Reload to Reflect Deleted Groups
        setHasDeletedGroups((prevState) => !prevState);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <StyledGroups>
      <DeleteModal
        deleteType="Group"
        showModal={showModal}
        updateModalState={updateModalState}
        deleteById={deleteGroupById}
      />

      <div className="group-container">
      {allGroups?.length > 0 &&
        followedGroups &&
        allGroups.map(({ _id, ...group }) => (
          <Group
            key={_id}
            followingStatus={followedGroups.find(
              (followedGroup) => followedGroup._id === _id
            )}
            groupId={_id}
            {...group}
            handleDelete={handleDeleteGroupClick}
          />
        ))}
       </div>

        {numPages > 1 && (
        <Pagination
          totalPages={numPages}
          currPage={currPage}
          setCurrPage={setCurrPage}
        />
      )}
    </StyledGroups>
  );
};

const StyledGroups = styled.div`
  .group-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    gap: 15px;
  }
`;

export default Groups;
