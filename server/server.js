import express from "express";
import path from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
dotenv.config();
const PORT = process.env.PORT || 5000;
connectDB();

const app = express();
app.get("/api", (req, res) => {
  res.send("Hello sir");
});
app.listen(PORT, () => console.log(`Server running on port : ${PORT}`));
