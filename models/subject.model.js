import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true }, 
  totalLessons: { type: Number, default: 0 }, 
  createdAt: { type: Date, default: Date.now },
});

const Subject = mongoose.model("Subject", subjectSchema);
export default Subject;
