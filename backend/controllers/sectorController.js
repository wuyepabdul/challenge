import Sector from "../models/SectorSchema.js";
import SubSector from "../models/SubSectorSchema.js";
import SubSubSectorSchema from "../models/SubSubSectorSchema.js";
import SubSubSubSectorSchema from "../models/SubSubSubSectorSchema.js";

/* export const addSectorController = async (req, res) => {
  const { title } = req.body;

  try {
    const newSector = new Sector({
      title,
    });
    await newSector.save();

    return res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Successfully Created",
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Internal server error, try again later",
    });
  }
};

export const addSubSectorController = async (req, res) => {
  const { title, sectorId } = req.body;
  try {
    const newSubSector = new SubSector({
      title,
      sectorId,
    });
    await newSubSector.save();

    return res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Successfully Created",
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Internal server error, try again later",
    });
  }
};

export const addSubSubSectorController = async (req, res) => {
  const { title, subSectorId } = req.body;

  try {
    const newSubSubSector = new SubSubSectorSchema({
      title,
      subSectorId,
    });

    await newSubSubSector.save();

    return res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Successfully Created",
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Internal server error, try again later",
    });
  }
};

export const addSubSubSubSectorController = async (req, res) => {
  const { title, subSubSectorId } = req.body;
  try {
    const newSubSubSector = new SubSubSubSectorSchema({
      title,
      subSubSectorId,
    });
    await newSubSubSector.save();

    return res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Successfully Created",
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Internal server error, try again later",
    });
  }
}; */

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

    return res.status(200).json({
      success: true,
      statusCode: 200,
      data: { sectors, subSectors, subSubSectors, subSubSubSectors },
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Internal server error, try again later",
    });
  }
};
