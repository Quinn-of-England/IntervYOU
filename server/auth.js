import jwt from "jsonwebtoken";
import User from "./models/User.js";

//Store User Id and email in JWT
const storeUserCredentials = (user) => ({
  _id: user._id,
  email: user.email,
  name: user.username,
});

//Create Access Token
export const createAccessToken = (user) => {
  return jwt.sign(storeUserCredentials(user), process.env.JWT_ACCESS_SECRET, {
    expiresIn: process.env.JWT_ACCESS_EXPIRE,
  });
};

//Create Refresh Token
export const createRefreshToken = (user) => {
  return jwt.sign(storeUserCredentials(user), process.env.JWT_REFRESH_SECRET, {
    expiresIn: process.env.JWT_REFRESH_EXPIRE,
  });
};

//Verify Auth Middleware
export const verifyAuth = async (req, res) => {
  // Retrieve Access Token from Client Storage
  const authorization = req.body.accessToken;

  if (!authorization)
    return res
      .status(401)
      .json({ isAuth: false, message: "Access Denied! No Token Present." });

  try {
    //Verify Access Token is Valid
    const token = authorization.split(" ").pop();
    if (token) {
      jwt.verify(
        token,
        process.env.JWT_ACCESS_SECRET,
        async (err, decodedToken) => {
          if (err) {
            // Verify Refresh if Expired
            return verifyRefresh(req, res);
          } else {
            //Verfiy User Exists
            const user = await User.findById(decodedToken._id);
            if (!user)
              return res.status(401).json({
                isAuth: false,
                message: "Access Denied! User Not Found.",
              });

            // Successfully Authenticated User
            return res.status(200).json({
              isAuth: true,
              userId: decodedToken._id,
              userName: decodedToken.name,
              message: "User is Authenticated",
            });
          }
        }
      );
    }
  } catch {
    res
      .status(401)
      .json({ isAuth: false, message: "Access Denied! Server Error." });
  }
};

//Verify Refresh Token
export const verifyRefresh = async (req, res) => {
  // Retrieve Refresh Token from Cookies
  const token = req.cookies.refreshToken;

  if (!token)
    return res
      .status(401)
      .json({ isAuth: false, message: "Access Denied! No Cookie Found." });

  try {
    //Verfiy Refresh Token is Valid
    if (token) {
      jwt.verify(
        token,
        process.env.JWT_REFRESH_SECRET,
        async (err, decodedToken) => {
          if (err) {
            return res
              .status(403)
              .json({ isAuth: false, message: err.message });
          } else {
            //Verfiy User Exists
            const user = await User.findById(decodedToken._id);
            if (!user)
              return res.status(401).json({
                isAuth: false,
                message: "Access Denied! User Not Found.",
              });

            //Create New Access Token
            const updatedToken = createAccessToken(user);
            res.setHeader("Authorization", updatedToken);
            const newRefreshToken = createRefreshToken(user);
            res.cookie("refreshToken", newRefreshToken, { httpOnly: true });

            return res.status(200).json({
              isAuth: true,
              userId: decodedToken._id,
              userName: decodedToken.name,
              message: "New tokens created!",
            });
          }
        }
      );
    }
  } catch {
    res
      .status(401)
      .json({ isAuth: false, message: "Access Denied! Server Error." });
  }
};
