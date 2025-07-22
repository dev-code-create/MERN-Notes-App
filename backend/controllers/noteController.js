import Note from "../models/Note";

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = await Note.create({ title, content });
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

//Put update Note
export const updateNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      res.status(404);
      throw new Error("Note not found");
    }

    note.title = req.body.title || note.title;
    note.content = req.body.content || note.content;

    const updated = await note.save();
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Error", error: error.message });
  }
};

// Delete Note
export const deleteNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      res.status(404);
      throw new Error("Note not Found");
    }
    await note.deleteOne();
    res.json({ message: "Message Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error", error: error.message });
  }
};
