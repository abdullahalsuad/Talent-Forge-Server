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

// Get Jobs by email
export const getJobsByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const jobs = await JobModel.find({ email });

    if (!jobs || jobs.length === 0) {
      return res.status(404).json({ message: "No jobs found for this email" });
    }

    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Job by id
export const getJobByID = async (req, res) => {
  try {
    const job = await JobModel.findById(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.status(200).json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new job
export const createJob = async (req, res) => {
  const job = new JobModel(req.body);
  // console.log(job);
  try {
    const savedJob = await job.save();
    res.status(201).json(savedJob);
    console.log(savedJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
