import Group from "../models/Group.js";
import User from "../models/User.js";

/**
 * * This function will handle group creation
 * * Will check if name matches group in database
 * * If name exists, will send 409(conflict)
 * * Will send 201(Create) if group created
 * * Request must be formatted like bellow
 * body: {
 *  name: name of the group
 *  description: description of the group
 *  owner: id of the user who created group
 * }
 */
export const create_group = async (req, res) => {
  try {
    const oldGroup = await Group.findOne({ name: req.body.name });

    if (oldGroup) {
      return res
        .status(409)
        .json({ message: `Group with name ${req.body.name} already exists!` });
    }

    Group.create(req.body)
      .then((result) => {
        res.status(201).json({
          message: `${result.name} group created!`,
        });
      })
      .catch((err) => {
        res.status(400).json({
          message: "Failed to create group",
          error: err.message,
        });
      });
  } catch (err) {
    res.status(500).json({
      message: "Server error in create_group",
      error: err.message,
    });
  }
};

/**
 * * This function will get all the groups from the database
 * * Only the name and description of each group will be returned
 * * A 200(Ok) will be sent after success
 * TODO: Check Whether User Has to Access All Groups
 */
export const get_all_groups = async (_, res) => {
  try {
    const groups = await Group.find();
    res.status(200).json(groups);
  } catch (err) {
    res.status(500).json({
      message: "Server error in get_all_groups",
      error: err.message,
    });
  }
};

/**
 * * This function will fetch a group using the id
 * * Will return a 200(Ok) with all the info of the group
 * * Will return a 400(Bad request) if id does not exist
 * Path parameters:
 *  id
 */
export const get_group_by_id = async (req, res) => {
  try {
    const group = await Group.findById(
      req.params.id,
      "name description follower_count"
    );
    if (group) {
      res.status(200).json(group);
    } else {
      res
        .status(400)
        .json({ message: `Cant find group with id ${req.params.id}` });
    }
  } catch (err) {
    res.status(500).json({
      message: `Server error while finding group with id`,
      error: err.message,
    });
  }
};

/**
 * * This function will fetch a group using the name
 * * Will return a 200(Ok) with all the info of the group
 * * Will return a 400(Bad request) if name does not exist
 * Path parameters:
 *  name
 */
export const get_group_by_name = async (req, res) => {
  try {
    const group = await Group.findOne(
      { name: req.params.name },
      "name description follower_count"
    );
    if (group) {
      res.status(200).json(group);
    } else {
      res
        .status(400)
        .json({ message: `Cant find group with name ${req.params.name}` });
    }
  } catch (err) {
    res.status(500).json({
      message: `Server error while finding group with name`,
      error: err.message,
    });
  }
};

/**
 * * This function will update the follower count
 * * Will return a 200(Ok) if updated
 * * Will return a 400(Bad request) if could not update
 * body {
 *  inc: 1 or -1 (1 if adding, -1 for removing)
 * }
 * Path parameters:
 *  name
 */
export const update_follower_count_with_name = (req, res) => {
  try {
    // Pass user id to request (req.body.... or req.params....)
    // Get User By Id
    Group.findOneAndUpdate(
      { name: req.params.name },
      { $inc: { follower_count: req.body.inc } },
      { new: true },
      (err, result) => {
        if (err) {
          res.status(400).json({
            message: "Could not update follower count",
            error: err.message,
          });
        } else {
          res.status(200).json({
            message: "Follower count updated!",
            new_follower_count: result.follower_count,
          });
        }
      }
    );
  } catch (err) {
    res.status(500).json({
      message: `Server error while updated follower count`,
      error: err.message,
    });
  }
};

/**
 * This function will update the group using groupId
 * Will return a 200(Ok) if group updated
 * Will return a 400(Bad request) if could not update
 * body: {
 *  name
 *  description
 * }
 * Path parameters:
 *  id: group id
 */
export const update_group_with_id = async (req, res) => {
  try {
    const group = await Group.find({
      $and: [{ _id: { $ne: req.params.id } }, { name: req.body.name }],
    });
    if (group.length) {
      return res.status(400).json({
        message: "Cant update group because new name supplied already in use",
        error: err.message,
      });
    }
    Group.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, result) => {
        if (err) {
          res.status(400).json({
            message: "Could not update group",
            error: err.message,
          });
        } else {
          res.status(200).json({
            message: "Group updated!",
            group: result,
          });
        }
      }
    );
  } catch (err) {
    res.status(500).json({
      message: "Server error while updating group",
      error: err.message,
    });
  }
};

/**
 * This function will update the following status of the group using the name( since all group names are unique)
 * Will return a 200(Ok) if group updated
 * Will return a 400(Bad request) if could not update
 * body{
 * following status, true if following, false otherwise
 * }
 * Path parameters:
 *  .id
 */
export const update_group_status = (req, res) => {
  const { name } = req.params;
  try {
    Group.findByIdAndUpdate(
      name,
      { followingStatus: req.body },
      { new: true },
      (err, result) => {
        if (err) {
          res.status(400).json({
            message: "Could not update group",
            error: err.message,
          });
        } else {
          res.status(200).json(result);
        }
      }
    );
  } catch (err) {
    res
      .status(500)
      .json({
        message: `Server error while updating group`,
        error: err.message,
      });
  }
};

/**
 * * This function will delete a group from the database using the id
 * * Will return a 200(Ok) if group deleted
 * * Will return a 400(Bad request) if id does not exist
 * Path parameters:
 *  id
 */
export const delete_group_by_id = async (req, res) => {
  try {
    const group = await Group.findByIdAndDelete(req.params.id);
    if (group) {
      User.updateMany(
        { groups: { $all: [{ $elemMatch: { _id: group._id } }] } },
        { $pull: { groups: { _id: group._id } } },
        { new: true },
        (err, result) => {
          if (err) {
            res.status(400).json({
              message: "Could not remove group from user list",
              error: err.message,
            });
          } else {
            res.status(200).json({ message: `Group ${group._id} deleted!` });
          }
        }
      );
    } else {
      res.status(400).json({
        message: `Not deleting group ${req.params.id} since id does not exist!`,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: `Server error while deleting group with id`,
      error: err.message,
    });
  }
};

/**
 * * This function will delete a group from the database using the name
 * * Will return a 200(Ok) if group deleted
 * * Will return a 400(Bad request) if name does not exist
 * Path parameters:
 *  name
 */
export const delete_group_by_name = async (req, res) => {
  try {
    const group = await Group.findOneAndDelete({ name: req.params.name });
    if (group) {
      User.updateMany(
        { groups: { $all: [{ $elemMatch: { _id: group._id } }] } },
        { $pull: { groups: { _id: group._id } } },
        { new: true },
        (err, result) => {
          if (err) {
            res.status(400).json({
              message: "Could not remove group from user list",
              error: err.message,
            });
          } else {
            res.status(200).json({ message: `Group ${group._id} deleted!` });
          }
        }
      );
    } else {
      res.status(400).json({
        message: `Not deleting group ${req.params.name} since name does not exist!`,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: `Server error while deleting group with name`,
      error: err.message,
    });
  }
};
