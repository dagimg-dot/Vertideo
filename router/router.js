import express from "express";
import getVideos from "../controller/videoController.js";

const router = express.Router();

router.post("/videos", getVideos);

export default router;
