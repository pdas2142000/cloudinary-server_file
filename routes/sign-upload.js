import express from "express";
import { generateSignature } from "../controllers/video.js";

const routes = express.Router();

routes.post("/", generateSignature);

export default routes;
