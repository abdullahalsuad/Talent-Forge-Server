import ApplicantModel from "../models/applicantModel.js";

// Create new applicant
export const createApplicant = async (req, res) => {
  try {
    const applicant = new ApplicantModel(req.body);
    const savedApplicant = await applicant.save();
    res.status(201).json(savedApplicant);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all Applied jobs
export const getAllAppliedJobs = async (req, res) => {
  try {
    const { email: applicantLoginEmail } = req.params;
    const jobs = await ApplicantModel.find({ applicantLoginEmail });

    if (!jobs || jobs.length === 0) {
      return res.status(404).json({ message: "No jobs found for this email" });
    }

    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};
