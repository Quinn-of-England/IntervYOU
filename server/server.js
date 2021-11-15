import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import userRouter from './routes/users.js'
import postRouter from './routes/posts.js'
import groupRouter from './routes/groups.js'
import fileRouter from './routes/files.js'

import { verifyAuth, verifyRefresh } from "./auth.js";

//Load Environment Variables
dotenv.config();

// Create Express Server
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

//Connect to MongoDB
if (process.env.NODE_ENV == "production") {
  //Connect to mongo db on atlas
  const dbUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@intervyoucluster.vah3w.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
  mongoose
    .connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log("Connected to MongoDB Database on Atlas!");

      //Start server
      app.listen(process.env.CLOUD_PORT, () =>
        console.log(`Server Running on Port ${process.env.CLOUD_PORT}!`)
      );
    })
    .catch((err) => {
      console.warn(`Unable to connect to ${process.env.DB_NAME}`);
      console.error(`Error: ${err.message}`);
    });
} else {
  //Connect to local mongo db
  mongoose
    .connect(`mongodb://mongo:${process.env.MONGO_PORT}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      user: "root",
      pass: "root",
    })
    .then(() => {
      console.log("Connected to local MongoDB Database!");

      //Start server
      app.listen(process.env.LOCAL_PORT, () =>
        console.log(`Server Running on Port ${process.env.LOCAL_PORT}!`)
      );
    })
    .catch((err) => console.error(`Message: ${err.message}`));
}

//Define Endpoints/Routes for Requests
app.use('/api/users/', userRouter)
//app.use('/api/posts/', verifyAuth, postRouter)
//app.use('/api/groups/', verifyAuth, groupRouter)
app.use('/api/posts/', postRouter)
app.use('/api/groups/', groupRouter)
app.use('/api/files/', fileRouter)

//Main route of server
app.get("/", (_, res) => {
  res.send("You have reached the server of IntervYOU!");
});

//Api route
app.get("/api/", (_, res) => {
  res.send("You have reached the api of this server!");
});

app.post("/api/refreshToken/", (req, res) => {
   verifyRefresh(req, res);
});
