import mongoose from "mongoose";
import { type } from "os";

const applicantSchema = new mongoose.Schema(
  {
    // name
    applicantName: {
      type: String,
      required: true,
      trim: true,
    },

    // email
    applicantEmail: {
      type: String,
      required: true,
      trim: true,
    },

    // loin email
    applicantLoginEmail: {
      type: String,
      required: true,
      trim: true,
    },

    // number
    applicantNumber: {
      type: Number,
      required: true,
      trim: true,
    },

    // github URL
    applicantGithub: {
      type: String,
      required: true,
      trim: true,
    },

    // LinkedIn URL
    applicantLinkedin: {
      type: String,
      required: true,
      trim: true,
    },

    // CV
    applicantCV: {
      type: String,
      required: true,
      trim: true,
    },

    // About job
    // creator email
    creatorEmail: {
      type: String,
      trim: true,
    },

    // job id
    jobId: {
      type: String,
    },

    // job title
    positionTitle: {
      type: String,
      trim: true,
    },

    // company name
    companyName: {
      type: String,
      trim: true,
    },

    // application deadline
    applicationDeadline: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const ApplicantModel = mongoose.model("Applicant", applicantSchema);

export default ApplicantModel;
