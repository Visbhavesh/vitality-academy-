 import Lecture from "../model/lectureSchema.js";
  //import 
export const postLecture = async (req, res) => {
    try {
      
        const newlecture = new Lecture({
            subject: req.body.subject,
            topic: req.body.topic,
            driveUrl: req.body.driveUrl
        });
        const savedLecture = await newlecture.save();
        res.status(202).json(savedLecture);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export   const getAllLecture = async (req, res) => {
    try {
        const lecture= await Lecture.find();
        res.status(200).json(lecture);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deletLecture = async (req, res) => {
    const { id } = req.params;
    try {
      const lecturetoDelete = await Lecture.findById(id);
      if (!lecturetoDelete) {
        return res.status(404).json({ message: "lecture not found" });
      }
      console.log("vnfv",lecturetoDelete)
      await Lecture.deleteOne({ _id: id });
      res.json({ message: "lecture deleted successfully" });
    } catch (error) {
      res.status(500).json({message:error.message});
    }

  };
        