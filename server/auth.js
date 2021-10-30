import jwt from 'jsonwebtoken'
import User from './models/User.js'

//Store User Id and email in JWT
const storeUserCredentials = (user) => ({
  _id: user._id,
  email: user.email,
})

//Create Access Token
export const createAccessToken = (user) => {
  return jwt.sign(storeUserCredentials(user), process.env.JWT_ACCESS_SECRET, {
    expiresIn: process.env.JWT_ACCESS_EXPIRE,
  })
}

//Create Refresh Token
export const createRefreshToken = (user) => {
  return jwt.sign(storeUserCredentials(user), process.env.JWT_REFRESH_SECRET, {
    expiresIn: process.env.JWT_REFRESH_EXPIRE,
  })
}

//Verify Auth Middleware
export const verifyAuth = async (req, res, next) => {
  // Retrieve Access Token from Headers
  const authorization = req.headers['authorization']
  if (!authorization)
    return res
      .status(401)
      .send({ auth: false, message: 'Access Denied! No Token Present.' })

  try {
    //Verify Access Token is Valid
    const token = authorization.split(' ').pop()
    if (token) {
      jwt.verify(token, process.env.JWT_ACCESS_SECRET, async (err, decodedToken) => {
        if (err) {
          console.error(`Token error: ${err.message}`)
        } else {
          //Verfiy User Exists
          const user = await User.findById(decodedToken._id)
          if (!user)
            return res
              .status(401)
              .send({ auth: false, message: 'Access Denied! User Not Found.' })

          // //Verify Token Versions Match (Invalidate Tokens that Haven't Expired Yet)
          // if (user.tokenVersion !== payload.tokenVersion)
          //   return res
          //     .status(401)
          //     .send({ auth: false, message: "Access Denied! Invalid Token." });

          //Pass Payload to Request
          req._id = decodedToken._id
          req.role = decodedToken.email
          //req.tokenVersion = payload.tokenVersion;

          next()
        }
      })
    }
  } catch {
    res
      .status(401)
      .send({ auth: false, message: 'Access Denied! Server Error.' })
  }
}

//Verify Refresh Token
export const verifyRefresh = async (req, res, next) => {
  // Retrieve Refresh Token from Cookies
  const token = req.cookies.refreshToken
  if (!token)
    return res
      .status(401)
      .send({ auth: false, message: 'Access Denied! No Cookie Found.' })

  try {
    //Verfiy Refresh Token is Valid
    if (token) {
      jwt.verify(token, process.env.JWT_REFRESH_SECRET, async (err, decodedToken) => {
        if (err) {
          console.error(`Refresh token error: ${err.message}`)
        } else {
          //Verfiy User Exists
          const user = await User.findById(decodedToken._id)
          if (!user)
            return res
              .status(401)
              .send({ auth: false, message: 'Access Denied! User Not Found.' })

          //Verify Token Versions Match (Invalidate Old Tokens that Haven't Expired Yet)
          // if (user.tokenVersion !== payload.tokenVersion)
          //   return res
          //     .status(401)
          //     .send({ auth: false, message: "Access Denied! Invalid Token." });

          //Create New Access Token
          const updatedToken = createAccessToken(user)
          res.setHeader('Authorization', updatedToken)

          //Pass Payload to Request
          req._id = decodedToken._id
          req.role = decodedToken.email
          //req.tokenVersion = payload.tokenVersion;

          next()
        }
      })
    }
  } catch {
    res
      .status(401)
      .send({ auth: false, message: 'Access Denied! Server Error.' })
  }
}
