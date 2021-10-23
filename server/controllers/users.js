import User from '../models/User.js'
import bcrypt from 'bcrypt'
import { createAccessToken, createRefreshToken } from '../auth.js'

//Login User
export const login_post = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })

    //Bcrypt - Compare Encrypted Password
    if(user){
      const matching = await bcrypt.compare(req.body.password.toString(), user.password)
      if(!matching){
        return res.status(400).json({
          message: "Username or password incorrect"
        })
      }
    }
    else{
      return res.status(400).json({
        message: "Username or password incorrect"
      })
    }

    //JWT - Create Token W/o Password & Add to Header
    const token = createAccessToken(user)
    res.setHeader('Authorization', token)

    //Create New Refresh Cookie
    res.cookie('refreshToken', createRefreshToken(user), { httpOnly: true })

    res.status(200).send({ message: 'Success! Logging In...',})
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}

//Signup User
export const signup_post = async (req, res) => {
  try {
    let errors = { email: '', username: '', password: '' }
    let isEmpty = false
    for (let key in req.body) {
      if (req.body[key] === '') {
        errors[key] = `Please enter ${key}`
        isEmpty = true
      }
    }

    //Return HTTP code 400(Bad request) if input fields are missing
    if (isEmpty)
      return res
        .status(400)
        .json({ message: 'Missing input field(s)', error: errors })

    //Check is username exists
    const oldUser = await User.findOne({ username: req.body.username })
    if (oldUser) errors.username = 'Username already exists'

    //Check if email exists
    const email = await User.findOne({ email: req.body.email })
    if (email) errors.email = 'Email already exists'

    //Return HTTP code 409(Conflict) if user already exists
    if (oldUser || email)
      return res
        .status(409)
        .json({ message: 'Errors in input field(s)', error: errors })

    //Encrypt password
    const salt = await bcrypt.genSalt()
    req.body.password = await bcrypt.hash(req.body.password.toString(), salt)

    await User.create(req.body).then((result) => {
      //Create jwt and add to header
      const accessToken = createAccessToken(result)
      res.setHeader("Authorization", accessToken)

      //Create refresh token
      res.cookie("refreshToken", createRefreshToken(result), {
        httpOnly: true,
      })

      res.status(201).json({
        message: "User successfully created!",
      })
    })
    .catch((err) => {
      res.status(409).send({
        message: "Failed to create user",
        error: err.message,
      })
    })
  } catch (err) {
    res.status(500).json({ message: "Server error in signup_post", error: err.message })
  }
}

//Logout user
export const logout_post = (req, res) => {
  try{
    res.cookie('refreshToken', { maxAge: Date.now()})
    res.status(200).json({ message: "User logged out!"})
  } catch(err){
    res.status(500).json({ 
      message: "Server error while logging out...",
      error: err.message,
    })
  }
}

//Get All Users
export const get_all_users = async (_, res) => {
  try {
    //TODO: Check Whether User Has to Access All Users
    const users = await User.find({}, 'role username email')
    res.status(200).json(users)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

//Get user by email
export const get_user_by_email = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email }, 'role username email')
    if(user) {
      res.status(200).json(user)
    }else {
      res.status(200).json({ message: `Cant find user with email ${req.params.email}`})
    }
  }catch(err){
    res.status(500).json({
      message: `Server error while finding user with email`,
      error: err.message
    })
  }
}

//Get user by username
export const get_user_by_username = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username }, 'role username email')
    if(user) {
      res.status(200).json(user)
    }else {
      res.status(200).json({ message: `Cant find user with username ${req.params.username}`})
    }
  }catch(err){
    res.status(500).json({
      message: `Server error while finding user with username`,
      error: err.message
    })
  }
}

//Get users by role
export const get_all_users_by_role = async (req, res) => {
  try {
    const users = await User.find({ role: req.query.role }, 'role username email')
    if(users) {
      res.status(200).json(users)
    }else {
      res.status(200).json({ message: `No users with role ${req.query.role}`})
    }
  }catch(err){
    res.status(500).json({
      message: `Server error while finding users with role`,
      error: err.message
    })
  }
}

//Delete user by email
export const delete_user_by_email = async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ email: req.params.email}, 'role username email')
    if(user){
      res.status(200).json({ message: `User ${user.email} deleted!`})
    } else {
      res.status(200).json({ message: `Not deleting user ${req.params.email} since email does not exist!`})
    }
  }catch(err){
    res.status(500).json({
      message: `Server error while deleting user with email`,
      error: err.message
    })
  }
}

//Delete user by username
export const delete_user_by_username = async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ username: req.params.username}, 'role username email')
    if(user){
      res.status(200).json({ message: `User ${user.username} deleted!`})
    } else {
      res.status(204).json({ message: `Not deleting user ${req.params.username} since username does not exist!`})
    }
  }catch(err){
    res.status(500).json({
      message: `Server error while deleting user with username`,
      error: err.message
    })
  }
}
