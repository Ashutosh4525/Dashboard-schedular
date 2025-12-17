import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ["admin", "parent", "student"],
    default: "student",
  },
});

export default mongoose.models.User ||
  mongoose.model("User", UserSchema);
