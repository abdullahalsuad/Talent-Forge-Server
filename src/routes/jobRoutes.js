import express from "express";
import * as jobController from "../controllers/jobController.js";

const router = express.Router();

// Route to get all jobs
router.route("/").get(jobController.getAllJobs);

export default router;
