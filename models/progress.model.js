import mongoose from "mongoose";

const progressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  completedLessons: [{ lessonId: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson" } },
    {completedAt: { type: Date, default: Date.now }}
  ],
  quizScores: [{ quizId: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz" }, score: Number }],
  subjectExamScores: [{ examId: { type: mongoose.Schema.Types.ObjectId, ref: "Exam" }, score: Number }],
  lastAccessedLesson: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Progress", progressSchema);
