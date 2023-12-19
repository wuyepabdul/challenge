import Sector from "../models/SectorSchema.js";
import SubSector from "../models/SubSectorSchema.js";
import SubSubSectorSchema from "../models/SubSubSectorSchema.js";
import SubSubSubSectorSchema from "../models/SubSubSubSectorSchema.js";

export const getAllSectorsController = async (req, res) => {
  try {
    const sectors = await Sector.find({});
    const subSectors = await SubSector.find({}).populate("sector");

    const subSubSectors = await SubSubSectorSchema.find({}).populate(
      "subSector"
    );

    const subSubSubSectors = await SubSubSubSectorSchema.find({}).populate(
      "subSubSector"
    );

    const data = { sectors, subSectors, subSubSectors, subSubSubSectors };

    return res.status(200).send({
      success: true,
      statusCode: 200,
      data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Internal server error, try again later",
    });
  }
};
