import express from "express";
import * as jobController from "../controllers/jobController.js";

const router = express.Router();

// Route to get all jobs
router.get("/jobs", jobController.getAllJobs);

// Route to create new jobs
router.post("/jobs", jobController.createJob);

export default router;
