import { Router } from "express";
import { verifyAuth } from "../auth.js";

const authRouter = Router();

// Get Auth State
authRouter.post("/validAccess/", verifyAuth);

export default authRouter;
