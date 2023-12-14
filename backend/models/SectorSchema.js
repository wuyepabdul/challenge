import mongoose from "mongoose";

const SubSectorSchema = new mongoose.Schema({
  title: { type: String, required: true },
  sector: { type: mongoose.Types.ObjectId, ref: "Sector", required: true },
  subSubSectors: [
    { type: mongoose.Types.ObjectId, ref: "SubSubSector", required: true },
  ],
});

const SubSubSectorSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subSector: { type: mongoose.Types.ObjectId, ref: "SubSector" },
  subSubSubSectors: [{ type: mongoose.Types.ObjectId, ref: "SubSubSubSector" }],
});

const SubSubSubSectorSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subSubSector: { type: mongoose.Types.ObjectId, ref: "SubSubSector" },
});

const SectorSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    users: [{ type: mongoose.Types.ObjectId, ref: "User", required: true }],
    subSectors: [
      {
        type: mongoose.Types.ObjectId,
        ref: SubSectorSchema,
        default: null,
        subSubSectors: [
          {
            type: mongoose.Types.ObjectId,
            ref: SubSubSectorSchema,
            default: null,
            subSubSubSectors: [
              {
                type: mongoose.Types.ObjectId,
                ref: SubSubSubSectorSchema,
                default: null,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Sector", SectorSchema);
