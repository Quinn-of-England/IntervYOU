import User from "../models/User.js";
import Group from "../models/Group.js";
import bcrypt from "bcrypt";
import { createAccessToken, createRefreshToken } from "../auth.js";

/**
 * * This function will handle the user login
 * * Will check if username and password matches user in database
 * * If either is incorrect, will send 400(Bad request)
 * * Will send 200(Ok) if user matches
 * * Access token will be sent in 'Authorization' header and
 * * Refresh token in cookie
 * * Request must be formatted like bellow
 * body: {
 *  username: username of the user
 *  password: password of the user
 * }
 */
export const login_post = async (req, res) => {
  try {
    if (req.body.username === "" || req.body.password === "") {
      return res.status(400).send({
        message: "Username and password are required",
      });
    }

    const user = await User.findOne({ username: req.body.username });

    //Bcrypt - Compare Encrypted Password
    if (user) {
      const matching = await bcrypt.compare(
        req.body.password.toString(),
        user.password
      );
      if (!matching) {
        return res.status(400).send({
          message: "Username or password is incorrect",
        });
      }
    } else {
      return res.status(400).send({
        message: "Username or password is incorrect",
      });
    }

    //JWT - Create Token W/o Password & Add to Header
    const token = createAccessToken(user);
    res.setHeader("Authorization", token);

    //Create New Refresh Cookie
    const refreshToken = createRefreshToken(user);
    res.cookie("refreshToken", refreshToken, { httpOnly: true });

    res.status(200).send({
      userId: user._id,
      userName: user.username,
      message: "Success! Logging In...",
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

/**
 * * This function will handle the user signup
 * * Will receive email, username and password
 * * If the username or email already exists
 * * A 409(Conflict) will be sent
 * * Password will be hashed and stored in database
 * * Access token will be sent in 'Authorization' header and
 * * Refresh token in cookie
 * * A 201(Create) will be sent when user has been created
 * body: {
 *  username,
 *  email,
 *  password
 * }
 */
export const signup_post = async (req, res) => {
  try {
    //Return HTTP code 400(Bad request) if input fields are missing
    for (let key in req.body) {
      if (req.body[key].trim() === "") {
        return res.status(400).json({
          message: "Missing input field(s)!",
        });
      }
    }

    //Return HTTP code 409(Conflict)
    //Check is username exists
    const oldUser = await User.findOne({ username: req.body.username });
    if (oldUser)
      return res.status(409).json({
        message: "Username already exists!",
      });

    //Check if email exists
    const email = await User.findOne({ email: req.body.email });
    if (email)
      return res.status(409).json({
        message: "Email already in use!",
      });

    //Encrypt password
    const salt = await bcrypt.genSalt();
    req.body.password = await bcrypt.hash(req.body.password.toString(), salt);

    await User.create(req.body)
      .then((result) => {
        //Create jwt and add to header
        const accessToken = createAccessToken(result);
        res.setHeader("Authorization", accessToken);

        //Create refresh token
        const refreshToken = createRefreshToken(result);
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
        });

        res.status(201).json({
          userId: result._id,
          userName: result.username,
          message: "User successfully created!",
        });
      })
      .catch((err) => {
        res.status(409).send({
          message: "Failed to create user",
          error: err.message,
        });
      });
  } catch (err) {
    res.status(500).json({
      message: "Server error in registration_post",
      error: err.message,
    });
  }
};

export const update_user_likes = async (req, res) => {
  const { postId, like } = req.body;

  const user = await User.findById(req.params.id);
  const likeMap = user.likes;
  likeMap.set(postId, like);

  User.findByIdAndUpdate(
    req.params.id,
    { likes: likeMap },
    { new: true },
    (err, result) => {
      if (err) {
        res.status(401).json({
          message: "Could not update likes",
          error: err.message,
        });
      } else {
        res.status(201).json(result);
      }
    }
  );
};

/**
 * * This function will handle the user logout
 * * The refresh token will be deleted from the cookie
 * * A 200(Ok) will be sent after success
 */
export const logout_post = (req, res) => {
  try {
    res.cookie("refreshToken", { maxAge: Date.now() });
    res.status(200).json({ message: "User logged out!" });
  } catch (err) {
    res.status(500).json({
      message: "Server error while logging out...",
      error: err.message,
    });
  }
};

/**
 * * This function will get all the users from the database
 * * Only the role, username and email of each user will be returned
 * * A 200(Ok) will be sent after success
 */
export const get_all_users = async (_, res) => {
  try {
    const users = await User.find({}, "role username email");
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

/**
 * * This function will fetch a user using the id
 * * Will return a 200(Ok) with all the info of the user
 * * Will return a 400(Bad request) if id does not exist
 * Path parameters:
 *  id
 */
export const get_user_by_id = async (req, res) => {
  try {
    const user = await User.findById(
      req.params.id,
      "role username email likes"
    );
    if (user) {
      res.status(200).json(user);
    } else {
      res
        .status(400)
        .json({ message: `Cant find user with id ${req.params.id}` });
    }
  } catch (err) {
    res.status(500).json({
      message: `Server error while finding user with id`,
      error: err.message,
    });
  }
};

/**
 * * This function will fetch a user using the email
 * * Will return a 200(Ok) with all the info of the user
 * * Will return a 400(Bad request) if email does not exist
 * Path parameters:
 *  email
 */
export const get_user_by_email = async (req, res) => {
  try {
    const user = await User.findOne(
      { email: req.params.email },
      "role username email"
    );
    if (user) {
      res.status(200).json(user);
    } else {
      res
        .status(400)
        .json({ message: `Cant find user with email ${req.params.email}` });
    }
  } catch (err) {
    res.status(500).json({
      message: `Server error while finding user with email`,
      error: err.message,
    });
  }
};

/**
 * * This function will fetch a user using the username
 * * Will return a 200(Ok) with all the info of the user
 * * Will return a 400(Bad request) if username does not exist
 * Path parameters:
 *  username
 */
export const get_user_by_username = async (req, res) => {
  try {
    const user = await User.findOne(
      { username: req.params.username },
      "role username email"
    );
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(400).json({
        message: `Cant find user with username ${req.params.username}`,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: `Server error while finding user with username`,
      error: err.message,
    });
  }
};

/**
 * * This function will fetch all users of a specific role
 * * Only the username, email and role of the user will be sent
 * * Will return a 200(Ok) with all the users of that role
 * * Will return a 400(Bad request) if role does not exist
 * Query parameters:
 *  role
 */
export const get_all_users_by_role = async (req, res) => {
  try {
    const users = await User.find(
      { role: req.query.role },
      "role username email"
    );
    if (users) {
      res.status(200).json(users);
    } else {
      res.status(400).json({ message: `No users with role ${req.query.role}` });
    }
  } catch (err) {
    res.status(500).json({
      message: `Server error while finding users with role`,
      error: err.message,
    });
  }
};

/**
 * * This function will get the list of groups from a user
 * * Will return a 200(Ok) with group list
 * * Will return a 400(Bad request) if could not find group list
 * Path parameters:
 *  id: user id
 */
export const get_groups_by_id = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      Group.find(
        { _id: { $in: user.groups } },
        "name description follower_count owner",
        (err, result) => {
          if (err) {
            res.status(400).json({
              message: "Could not find list of groups",
              error: err.message,
            });
          } else {
            res.status(200).json({
              message: "Group list found",
              groups: result,
            });
          }
        }
      );
    }
  } catch (err) {
    res.status(500).json({
      message: `Server error while getting groups`,
      error: err.message,
    });
  }
};

/**
 * * This function will update the user information
 * * Will check if new username or email given is used
 * * Will return a 200(Ok) if user updated
 * * Will return a 400(Bad request) if could not update user
 * body {
 *  username,
 *  email,
 *  password
 * }
 * Path parameters:
 *  id: user id
 */
export const update_user_by_id = async (req, res) => {
  try {
    const users = await User.find({
      $and: [
        { _id: { $ne: req.params.id } },
        { $or: [{ username: req.body.username }, { email: req.body.email }] },
      ],
    });
    const thisUser = await User.findById(req.params.id);
    if (users.length) {
      return res.status(400).json({ message: "fields used" });
    }

    const matching = await bcrypt.compare(
      req.body.password.toString(),
      thisUser.password
    );
    if (!matching) {
      //Encrypt password
      const salt = await bcrypt.genSalt();
      req.body.password = await bcrypt.hash(req.body.password.toString(), salt);
    } else {
      delete req.body.password;
    }
    User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, fields: { role: 1, email: 1, username: 1 } },
      (err, result) => {
        if (err) {
          res.status(400).json({
            message: "Could not update user",
            error: err.message,
          });
        } else {
          res.status(200).json({
            message: "User updated!",
            user: result,
          });
        }
      }
    );
  } catch (err) {
    res.status(500).json({
      message: `Server error while updating user`,
      error: err.message,
    });
  }
};

/**
 * * This function will update group list of a user
 * * Will return a 200(Ok) if group updated
 * * Will return a 400(Bad request) if could not update group
 * body: {
 *  name: group name
 *  add: true or false (true if adding, false for removing)
 * }
 * Path parameters:
 *  id: user id
 */
export const update_group_list = async (req, res) => {
  try {
    const group = await Group.findOne({ name: req.body.name });
    if (!group) return res.status(400).json({ message: "Group not found" });
    if (req.body.add) {
      User.findByIdAndUpdate(
        req.params.id,
        { $push: { groups: { _id: group._id } } },
        { new: true },
        (err, result) => {
          if (err) {
            res.status(400).json({
              message: "Could not add group to user",
              error: err.message,
            });
          } else {
            res.status(200).json({
              message: "Group added",
              groups: result.groups,
            });
          }
        }
      );
    } else {
      User.findByIdAndUpdate(
        req.params.id,
        { $pull: { groups: { _id: group._id } } },
        { new: true },
        (err, result) => {
          if (err) {
            res.status(400).json({
              message: "Could not remove group from user",
              error: err.message,
            });
          } else {
            res.status(200).json({
              message: "Group removed",
              groups: result.groups,
            });
          }
        }
      );
    }
  } catch (err) {
    res.status(500).json({
      message: `Server error while adding group`,
      error: err.message,
    });
  }
};

/**
 * * This function will delete a user from the database using the id
 * * Will return a 200(Ok) if user deleted
 * * Will return a 400(Bad request) if id does not exist
 * Path parameters:
 *  id
 */
export const delete_user_by_id = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (user) {
      res.status(200).json({ message: `User ${user._id} deleted!` });
    } else {
      res.status(400).json({
        message: `Not deleting user ${req.params.id} since id does not exist!`,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: `Server error while deleting user with id`,
      error: err.message,
    });
  }
};

/**
 * * This function will delete a user from the database using the email
 * * Will return a 200(Ok) if user deleted
 * * Will return a 400(Bad request) if email does not exist
 * Path parameters:
 *  email
 */
export const delete_user_by_email = async (req, res) => {
  try {
    const user = await User.findOneAndDelete(
      { email: req.params.email },
      "role username email"
    );
    if (user) {
      res.status(200).json({ message: `User ${user.email} deleted!` });
    } else {
      res.status(400).json({
        message: `Not deleting user ${req.params.email} since email does not exist!`,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: `Server error while deleting user with email`,
      error: err.message,
    });
  }
};

/**
 * * This function will delete a user from the database using the username
 * * Will return a 200(Ok) if user deleted
 * * Will return a 400(Bad request) if username does not exist
 * Path parameters:
 *  email
 */
export const delete_user_by_username = async (req, res) => {
  try {
    const user = await User.findOneAndDelete(
      { username: req.params.username },
      "role username email"
    );
    if (user) {
      res.status(200).json({ message: `User ${user.username} deleted!` });
    } else {
      res.status(204).json({
        message: `Not deleting user ${req.params.username} since username does not exist!`,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: `Server error while deleting user with username`,
      error: err.message,
    });
  }
};
