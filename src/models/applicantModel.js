import mongoose from "mongoose";

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

    // Job Creator email
    creatorEmail: {
      type: String,
      trim: true,
    },
    jobId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const ApplicantModel = mongoose.model("Applicant", applicantSchema);

export default ApplicantModel;
