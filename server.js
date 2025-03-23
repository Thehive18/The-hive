import express from "express";
import dotenv from "dotenv";
// imported routes
import authRoutes from "./routes/auth.routes.js"
import { connectDB } from "./lib/db.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;


app.use (express.json()); // to get json data from body of the request

app.use("/api/auth", authRoutes)
app.listen(PORT, () => {
  console.log("Server is running on  http://localhost:" + PORT);
  connectDB();
});


