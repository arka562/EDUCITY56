import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  lessonId: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson", required: true },
  questions: [
    {
      question: String,
      options: [String],
      correctAnswer: String,
    },
  ],
  totalMarks: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Quiz", quizSchema);