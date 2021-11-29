import { Router } from "express";
import * as fileController from "../controllers/files.js";

const fileRouter = Router();

fileRouter.post("/upload", fileController.upload_file);

fileRouter.get("/download/:key", fileController.download_file);

fileRouter.delete("/:key", fileController.delete_file);

export default fileRouter;
