import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import jobRoutes from "./routes/jobRoutes.js";
import applicantRoutes from "./routes/applicantRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to DB
connectDB();

// Routes for jobs
app.use("/api/v1", jobRoutes);

//Route for applicants
app.use("/api/v1", applicantRoutes);

// Basic route
app.get("/", (req, res) => {
  res.json({ message: "Talent Forge Server  is running" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
