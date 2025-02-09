import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true }, 
  role: { type: String, enum: ["student", "admin"], default: "student" },
  createdAt: { type: Date, default: Date.now },


  progress: [
    {
      courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
      completedLessons: { type: Number, default: 0 },
      totalLessons: { type: Number, required: true },
      quizzesCompleted: { type: Number, default: 0 },
    },
  ],

 
  dailyGoals: [
    {
      date: { type: Date, required: true },
      targetLessons: { type: Number, default: 0 }, 
      targetQuestions: { type: Number, default: 0 }, 
      completedLessons: { type: Number, default: 0 }, 
      completedQuestions: { type: Number, default: 0 }, 
    },
  ],
});

const User = mongoose.model("User", userSchema);
export default User;
