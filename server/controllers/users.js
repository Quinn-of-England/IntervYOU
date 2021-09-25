import User from "../models/User.js";
import bcrypt from "bcrypt";
import { createAccessToken, createRefreshToken } from "../auth.js";

//Login User
export const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).send("User Doesn't Exist");

    //Bcrypt - Compare Encrypted Password
    const matching = await bcrypt.compare(req.body.password, user.password);
    if (!matching) return res.status(401).send("Incorrect Password");

    //JWT - Create Token W/o Password & Add to Header
    const token = createAccessToken(user);
    res.setHeader("Authorization", token);

    //Create New Refresh Cookie
    res.cookie("refreshToken", createRefreshToken(user), { httpOnly: true });

    res.status(200).send({ message: "Success! Logging In...", token: token });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

//Signup User
export const signupUser = async (req, res) => {
  try {
    //Todo: Replace Validation with Frontend Implementation
    //Must Enter All Input Field
    for (let key in req.body)
      if (req.body[key] === "")
        return res.status(404).send("Missing Input Field(s)");

    //Check if Username or Email Already Exist
    const user = await User.findOne({ username: req.body.username });
    if (user) return res.status(400).send("User Already Exists");

    const email = await User.findOne({ email: req.body.email });
    if (email) return res.status(400).send("Email Already in Use");

    //Compare Passwords to Confirm Password
    if (req.body.password !== req.body.confirmPass)
      return res.status(401).send("Passwords Don't Match");

    //Bcrypt - Encrypt Password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //Create New User
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    newUser
      .save()
      .then(() => {
        //JWT - Create Token & Add to Header
        const token = createAccessToken(user);
        res.setHeader("Authorization", token);

        //Create New Refresh Cookie
        res.cookie("refreshToken", createRefreshToken(user), {
          httpOnly: true,
        });

        res.status(200).send({ message: "Successful Sign Up! Logging In..." });
      })
      .catch(() => res.status(409).send({ message: "Failed to Create User" }));
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//Update User Role - Patient, Doctor, Administrator, Root
export const updateUserRole = async (req, res) => {
  try {
    //TODO:  Check Whether User Has Right to Modify Password
    //Update Role and Increment Token Version
    await User.updateOne(
      {
        username: req.body.username,
      },
      {
        role: req.body.role,
        $inc: { tokenVersion: 1 },
      }
    );

    res.status(202).send("Successful Update");
  } catch (err) {
    res.status(500).send(err);
  }
};

//Get All Users
export const getAllUsers = async (_, res) => {
  try {
    //TODO: Check Whether User Has to Access All Users
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
