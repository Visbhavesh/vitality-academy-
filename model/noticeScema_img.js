import mongoose from "mongoose";
const noticeSchema_img = new mongoose.Schema({
  title1: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
const Notice_img = mongoose.model("Notice_img", noticeSchema_img);
 export default Notice_img;

 