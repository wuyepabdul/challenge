import mongoose from "mongoose";

const SubSubSectorSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subSector: {
      type: mongoose.Types.ObjectId,
      ref: "SubSector",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("SubSubSector", SubSubSectorSchema);
