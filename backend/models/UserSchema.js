import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sectors: [{ type: String, required: true }],
  termsAndConditions: { type: Boolean, required: true },
});

export default mongoose.model("User", UserSchema);
