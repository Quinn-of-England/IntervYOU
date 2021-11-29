import { Router } from "express";
import { get_profile } from "../controllers/linkedin.js";

const linkedinRouter = Router();

linkedinRouter.post("/profile", get_profile);

export default linkedinRouter;
