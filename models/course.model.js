import mongoose from "mongoose";
import Subject from "./subject.model.js"; 

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  examType: { type: String, required: true }, 
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }],
  createdAt: { type: Date, default: Date.now },
});


const Course = mongoose.model("Course", courseSchema);
export default Course;
