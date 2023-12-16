import mongoose from "mongoose";

const SectorSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Sector", SectorSchema);
