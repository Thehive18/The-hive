import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import { connectDB } from "./lib/db.js";

dotenv.config();
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 5000;

app.use(express.json()); // to get json data from body of the request
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
  console.log("Server is running on  http://localhost:" + PORT);
  connectDB();
});

app.use(
  cors({
    origin: "http://localhost:5174", // Your frontend URL
    credentials: true,
  })
);
