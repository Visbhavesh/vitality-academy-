import mongoose from "mongoose";
const lectureSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    driveUrl: {
        type: String,
        required: true
    }
});


const Lecture = mongoose.model('Lecture', lectureSchema);

export default Lecture;