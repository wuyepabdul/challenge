import mongoose from "mongoose";

const SubSubSubSectorSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subSubSector: {
      type: mongoose.Types.ObjectId,
      ref: "SubSubSector",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("SubSubSubSector", SubSubSubSectorSchema);
