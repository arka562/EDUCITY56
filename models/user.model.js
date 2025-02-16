import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true }, 
  role: { type: String, enum: ["student", "admin"], default: "student" },
  progress: [{ type: mongoose.Schema.Types.ObjectId, ref: "Progress" }],
  createdAt: { type: Date, default: Date.now 
},timestamp:true})

  

const User = mongoose.model("User", userSchema);
export default User;
