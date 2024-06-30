
import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  imageurl: {
    type: String,
    required: true
  },
  studentname: {
    type: String,
    required: true,
  },
  rollno: { 
    type: String, 
    required: true
   },
});



const Result = mongoose.model("Result", resultSchema);

export  default   Result;
