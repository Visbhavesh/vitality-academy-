import Result from'../model/resultSchema.js'

export const postAllResult = async (req, res) => {
    try {
      
        const newResult = new Result({
            imageurl: req.body.imageurl,
            studentname: req.body.studentname,
            rollno: req.body.rollno
        });
        const savedResult = await newResult.save();
        res.status(201).json(savedResult);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
             

export const getAllResults = async (req, res) => {
    try {
        const result = await Result.find();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const deleteResult = async (req, res) => {
    const { id } = req.params;

    try {
        const resultToDelete = await Result.findById(id);
        if (!resultToDelete) {
            return res.status(404).json({ message: 'Result not found' });
        }

        await Result.deleteOne({ _id: id }); // Delete the document from the database
        res.json({ message: 'Result deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Path: server/model/resultSchema.js
