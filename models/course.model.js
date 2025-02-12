import mongoose from "mongoose";
import Subject from "./subject.model.js"; 

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  examType: { type: String, required: true }, 
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }],
  createdAt: { type: Date, default: Date.now },
});


courseSchema.statics.getTotalLessons = async function (courseId) {

  console.log("Course ID:", courseId);

if (!mongoose.Types.ObjectId.isValid(courseId)) {
  console.error("Invalid ObjectId:", courseId);
} else {
  console.log("Valid ObjectId:", courseId);
}

  const result = await Subject.aggregate([
    { $match: { courseId: new mongoose.Types.ObjectId(courseId.trim()) } },
    { $group: { _id: "$courseId", totalLessons: { $sum: "$totalLessons" } } },
  ]);

  return result.length > 0 ? result[0].totalLessons : 0; 
};

const Course = mongoose.model("Course", courseSchema);
export default Course;
