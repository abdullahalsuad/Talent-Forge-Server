import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    // Display name of the user
    displayName: {
      type: String,
      trim: true,
    },

    // Email address (should be unique)
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    // Company  Photo URL
    companyPhotoURL: {
      type: String,
      // default: null,
    },

    // Job Position Title
    positionTitle: {
      type: String,
      required: true,
      trim: true,
    },

    // Apply Method
    applyMethod: {
      type: String,
      required: true,
      trim: true,
    },

    // Company Name
    companyName: {
      type: String,
      required: true,
      trim: true,
    },

    // Location (e.g., City, Country)
    location: {
      type: String,
      trim: true,
    },

    // Salary Range (in USD or local currency)
    salaryMin: {
      type: Number,
      default: null,
    },

    salaryMax: {
      type: Number,
      default: null,
    },

    // Job Description (Responsibilities, Requirements, etc.)
    description: {
      type: String,
      default: "",
    },

    // Application Deadline
    applicationDeadline: {
      type: Date,
    },

    // Number of Applicants
    totalApplicants: {
      type: Number,
      default: 0,
    },

    // Employment Type (Full-Time, Part-Time, Project-Based)
    employmentType: {
      type: String,
      enum: ["Full-Time", "Part-Time", "Internship", "Project-Based"],
      default: "Full-Time",
    },

    // Work Type (Remote, Hybrid, On-Site)
    workType: {
      type: String,
      enum: ["Remote", "Hybrid", "On-Site"],
      default: "On-Site",
    },

    // Experience Level (Entry Level, Mid Level, Senior Level,)
    experienceLevel: {
      type: String,
      enum: ["Entry Level", "Mid Level", "Senior Level"],
      default: "Entry Level",
    },
  },
  {
    timestamps: true,
  }
);

const JobModel = mongoose.model("Job", jobSchema);

export default JobModel;
