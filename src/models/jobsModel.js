import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    // Job Position Title
    positionTitle: {
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
    salaryRange: {
      min: {
        type: Number,
        default: null,
      },
      max: {
        type: Number,
        default: null,
      },
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

    // Benefits Offered (Health Insurance, PTO, etc.)
    benefits: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const JobModel = mongoose.model("Job", jobSchema);

export default JobModel;
