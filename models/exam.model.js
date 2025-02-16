import mongoose from "mongoose";

const examSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  title: { type: String, required: true },
  description: { type: String },
  questions: [
    {
      question: String,
      options: [String],
      correctAnswer: String,
      marks: Number
    },
  ],
  totalMarks: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Exam", examSchema);
