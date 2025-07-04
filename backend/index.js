import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
// App config 
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("API Working");
});

// Listener
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

//db connection
connectDB()