import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  issueDate: { type: Date, default: Date.now },
  status: { type: String, enum: ["Pending", "Issued"], default: "Pending" },
});

export default mongoose.model("Certificate", certificateSchema);
