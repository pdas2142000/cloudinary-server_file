import express from "express";
import { createVideo } from "../controllers/video.js";

const routes = express.Router();

routes.post("/", createVideo);

export default routes;
