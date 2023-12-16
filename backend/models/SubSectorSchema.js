import mongoose from "mongoose";

const SubSectorSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    sector: { type: mongoose.Types.ObjectId, ref: "Sector", required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("SubSector", SubSectorSchema);
