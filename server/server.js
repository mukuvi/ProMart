import express from "express";
import path from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
const PORT = process.env.PORT || 5000;

const app = express();

app.listen(PORT, () => console.log(`Server running on port : ${PORT}`));
