import mongoose from "mongoose";

const leaderboardSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz", required: true },
  examId: { type: mongoose.Schema.Types.ObjectId, ref: "Exam" },
  weeklyScores: [{ week: String, score: Number }],
  monthlyScores: [{ month: String, score: Number }],
  rank: { type: Number },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Leaderboard", leaderboardSchema);
