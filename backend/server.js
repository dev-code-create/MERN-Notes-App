import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import noteRoutes from "./routes/noteRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

// DB Connection
connectDB();
//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/notes", noteRoutes);

//Root
app.get("/", (req, res) => {
  res.send("API is running...");
});

//Error Middleware
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server running in PORT ${PORT}`);
});
