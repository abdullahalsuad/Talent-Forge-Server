import JobModel from "../models/jobsModel.js";

// Get all jobs from the database
export const getAllJobs = async (req, res) => {
  try {
    const jobs = await JobModel.find();
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
