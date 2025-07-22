import express from "express";
import {
  createNote,
  deleteNote,
  getNotes,
  updateNote,
} from "../controllers/noteController.js";

const router = express.Router();

//Routes for "/"
router.get("/", getNotes);
router.post("/", createNote);

// Routes for "/:id"
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
