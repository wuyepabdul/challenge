import mongoose from "mongoose";

const SubSubSectorSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subSector: {
      type: mongoose.Types.ObjectId,
      ref: "SubSector",
      required: true,
    },
    /* subSubSubSectors: [
      { type: mongoose.Types.ObjectId, ref: "SubSubSubSector" },
    ], */
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("SubSubSector", SubSubSectorSchema);
