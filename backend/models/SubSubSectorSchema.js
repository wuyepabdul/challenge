import mongoose from "mongoose";

const SubSubSectorSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subSector: { type: mongoose.Types.ObjectId, ref: "SubSector" },
  subSubSubSectors: [{ type: mongoose.Types.ObjectId, ref: "SubSubSubSector" }],
});

export default mongoose.model("SubSubSector", SubSubSectorSchema);
