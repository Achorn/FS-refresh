import Note from "../models/Note.js";

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find({});
    res.status(200).json({
      success: true,
      count: notes.length,
      data: notes,
    });
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};

export const getNoteById = async (req, res) => {
  const { id } = req.params;
  try {
    const notes = await Note.findById(id);
    res.status(200).json({
      success: true,
      count: notes.length,
      data: notes,
    });
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true, runValidators: true },
    );
    res.status(201).json(updatedNote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    return res.status(200).json({
      message: "Note deleted successfully",
      data: deletedNote,
    });
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};
