import jwt from "jsonwebtoken";
import User from "./models/User.js";

//Store User Id, Role, and Token Version in JWT
const storeUserCredentials = (user) => ({
  _id: user._id,
  role: user.role,
  tokenVersion: user.tokenVersion,
});

//Create Access Token
export const createAccessToken = (user) => {
  return jwt.sign(storeUserCredentials(user), process.env.JWT_ACCESS, {
    expiresIn: "15m",
  });
};

//Create Refresh Token
export const createRefreshToken = (user) => {
  return jwt.sign(storeUserCredentials(user), process.env.JWT_REFRESH, {
    expiresIn: "3d",
  });
};

//Verify Auth Middleware
export const verifyAuth = async (req, res, next) => {
  // Retrieve Access Token from Headers
  const authorization = req.headers["authorization"];
  if (!authorization)
    return res
      .status(401)
      .send({ auth: false, message: "Access Denied! No Token Present." });

  try {
    //Verify Access Token is Valid
    const token = authorization.split(" ")[1];
    const payload = jwt.verify(token, process.env.JWT_ACCESS);

    //Verfiy User Exists
    const user = await User.findById(payload._id);
    if (!user)
      return res
        .status(401)
        .send({ auth: false, message: "Access Denied! User Not Found." });

    //Verify Token Versions Match (Invalidate Tokens that Haven't Expired Yet)
    if (user.tokenVersion !== payload.tokenVersion)
      return res
        .status(401)
        .send({ auth: false, message: "Access Denied! Invalid Token." });

    //Pass Payload to Request
    req._id = payload._id;
    req.role = payload.role;
    req.tokenVersion = payload.tokenVersion;

    return next();
  } catch {
    res
      .status(401)
      .send({ auth: false, message: "Access Denied! Server Error." });
  }
};

//Verify Refresh Token
export const verifyRefresh = async (req, res, next) => {
  // Retrieve Refresh Token from Cookies
  const token = req.cookies.refreshToken;
  if (!token)
    return res
      .status(401)
      .send({ auth: false, message: "Access Denied! No Cookie Found." });

  try {
    //Verfiy Refresh Token is Valid
    const payload = jwt.verify(token, process.env.JWT_REFRESH);

    //Verfiy User Exists
    const user = await User.findById(payload._id);
    if (!user)
      return res
        .status(401)
        .send({ auth: false, message: "Access Denied! User Not Found." });

    //Verify Token Versions Match (Invalidate Old Tokens that Haven't Expired Yet)
    if (user.tokenVersion !== payload.tokenVersion)
      return res
        .status(401)
        .send({ auth: false, message: "Access Denied! Invalid Token." });

    //Create New Access Token
    const updatedToken = createAccessToken(user);
    res.setHeader("Authorization", updatedToken);

    //Pass Payload to Request
    req._id = payload._id;
    req.role = payload.role;
    req.tokenVersion = payload.tokenVersion;

    next();
  } catch {
    res
      .status(401)
      .send({ auth: false, message: "Access Denied! Server Error." });
  }
};
