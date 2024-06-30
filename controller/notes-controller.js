import Note from'../model/notesSchema.js'

export const postNote = async (req, res) => {
    try {
      
        const newNote = new Note({
            subject: req.body.subject,
            teacher: req.body.teacher,
            driveUrl: req.body.driveUrl
        });
        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const deletnotes = async (req, res) => {
    const { id } = req.params;
    try {
      const notestoDelete = await Note.findById(id);
      if (!notestoDelete) {
        return res.status(404).json({ message: "notes not found" });
      }
      await Note.deleteOne({ _id: id });
      res.json({ message: "notes deleted successfully" });
    } catch (error) {
      res.status(500).json({message:error.message});
    }
  };
