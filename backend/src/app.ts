import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";

import cookieParser from "cookie-parser";
import cors from "cors";

config();
const app = express();

// middlewares
app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:3000", 
    process.env.FRONTEND_URL, // Add this environment variable
    /^https:\/\/frontend-.*-sonalikas-projects\.vercel\.app$/ // Regex for all your frontend deployments
  ],
  credentials: true,
}));
// remove it in production
app.use(morgan("dev"));

app.use("/api/v1", appRouter);

export default app;