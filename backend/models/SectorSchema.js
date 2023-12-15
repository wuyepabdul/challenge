import mongoose from "mongoose";

const SectorSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subSectors: [
      {
        type: mongoose.Types.ObjectId,
        ref: "SubSector",
        default: null,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Sector", SectorSchema);
/* 
const SectorSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subSectors: [
      {
        type: mongoose.Types.ObjectId,
        ref: "SubSector",
        default: null,
        subSubSectors: [
          {
            type: mongoose.Types.ObjectId,
            ref: "SubSubSector",
            default: null,
            subSubSubSectors: [
              {
                type: mongoose.Types.ObjectId,
                ref: "SubSubSubSector",
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
*/
