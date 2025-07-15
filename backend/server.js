import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

// DB Connection

//Middleware
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`server running in PORT ${PORT}`);
});
