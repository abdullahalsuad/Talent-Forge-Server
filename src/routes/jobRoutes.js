import express from "express";
import * as jobController from "../controllers/jobController.js";

const router = express.Router();

// Route to get all jobs
router.get("/jobs", jobController.getAllJobs);

// Route to get single job
router.get("/jobs/:id", jobController.getJobByID);

// Route to get all jobs by email
router.get("/user/:email", jobController.getJobsByEmail);

// Route to create new job
router.post("/jobs", jobController.createJob);

export default router;
