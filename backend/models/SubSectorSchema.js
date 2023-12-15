import mongoose from "mongoose";

const SubSectorSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    sector: { type: mongoose.Types.ObjectId, ref: "Sector", required: true },
    subSubSectors: [
      { type: mongoose.Types.ObjectId, ref: "SubSubSector", default:null },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("SubSector", SubSectorSchema);