import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRouter from "./routes/users.js";
import postRouter from "./routes/posts.js";

//Load Environment Variables
dotenv.config();
const { PORT, MONGO_URI } = process.env;

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
// app.use(cookieParser());

//Define Endpoints/Routes for Requests
app.use("/", userRouter);
app.use("/posts/", postRouter);

//Connect to MongoDB
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Database Connected!"))
  .catch((err) => console.error(err.message));

//Start Server
app.listen(PORT, () => console.log(`Server Running on Port ${PORT}!`));
