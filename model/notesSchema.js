import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    teacher: {
        type: String,
        required: true
    },
    driveUrl: {
        type: String,
        required: true
    }
});


const Note = mongoose.model('Note', noteSchema);

export default Note;      