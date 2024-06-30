import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema({
  tittle: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    required: true,
  },
});
const Notice = mongoose.model("Notice", noticeSchema);
export default Notice;
