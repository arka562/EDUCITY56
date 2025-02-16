import mongoose from "mongoose";

const examAttemptSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  examId: { type: mongoose.Schema.Types.ObjectId, ref: "Exam", required: true },
  marksScored: { type: Number, required: true },
  timeTaken: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

examAttemptSchema.pre("find", function (next) {
  this.populate("examId", "totalMarks");
  next();
});

export default mongoose.model("ExamAttempt", examAttemptSchema);
