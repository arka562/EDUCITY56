import mongoose from "mongoose";

const quizAttemptSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz", required: true },
  score: { type: Number, required: true, default: 0 }, 
  timeTaken: { type: Number, default: 0 }, 
  attemptedAt: { type: Date, default: Date.now },
});

quizAttemptSchema.pre("find", function (next) {
  this.populate("quizId", "totalMarks"); 
  next();
});

const QuizAttempt = mongoose.model("QuizAttempt", quizAttemptSchema);
module.exports = QuizAttempt;
