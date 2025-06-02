import express from "express";
import * as applicantController from "../controllers/applicantController.js";
import { verifyFirebaseToken } from "../middleware/verifyToken.js";

const router = express.Router();

// Route to apply a applicant
router.post(
  "/applicant",
  verifyFirebaseToken,
  applicantController.createApplicant
);

// Route to get all applied jobs by email
router.get("/applied-jobs/:email", applicantController.getAllAppliedJobs);

export default router;
