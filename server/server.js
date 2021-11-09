import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import userRouter from "./routes/users.js";
import postRouter from "./routes/posts.js";
import groupRouter from "./routes/groups.js";

import { verifyAuth, verifyRefresh } from "./auth.js";

//Load Environment Variables
dotenv.config();
const { DB_USER, DB_PASS, DB_NAME, MONGO_PORT, LOCAL_PORT, CLOUD_PORT } =
  process.env;

// Create Express Server
const app = express();

// Init Middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

//Connect to MongoDB
if (process.env.NODE_ENV == "production") {
  //Connect to mongo db on atlas
  const dbUri = `mongodb+srv://${DB_USER}:${DB_PASS}@intervyoucluster.vah3w.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
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
      app.listen(CLOUD_PORT, () =>
        console.log(`Server Running on Port ${CLOUD_PORT}!`)
      );
    })
    .catch((err) => {
      console.warn(`Unable to connect to ${DB_NAME}`);
      console.error(`Error: ${err.message}`);
    });
} else {
  //Connect to local mongo db
  mongoose
    .connect(`mongodb://mongo:${MONGO_PORT}`, {
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
      app.listen(LOCAL_PORT, () =>
        console.log(`Server Running on Port ${LOCAL_PORT}!`)
      );
    })
    .catch((err) => console.error(`Message: ${err.message}`));
}

//Define Endpoints/Routes for Requests
app.use('/api/users/', userRouter)
app.use('/api/posts/', postRouter)
app.use("/api/groups/", groupRouter);
// app.use("/api/posts/", verifyAuth, postRouter);
// app.use("/api/groups/", verifyAuth, groupRouter);

//Main route of server
app.get("/", (_, res) => {
  res.send("You have reached the server of IntervYOU!");
});

//Api route
app.get("/api/", (_, res) => {
  res.send("You have reached the api of this server");
});

// //Verify access and refresh token
// app.post("/api/accessToken/", (req, res) => {
//   verifyAuth(req, res);
// });

// app.post("/api/refreshToken/", (req, res) => {
//   verifyRefresh(req, res);
// });
