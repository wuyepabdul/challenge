import Sector from "../models/SectorSchema.js";
import SubSector from "../models/SubSectorSchema.js";
import SubSubSectorSchema from "../models/SubSubSectorSchema.js";
import SubSubSubSectorSchema from "../models/SubSubSubSectorSchema.js";

export const addSectorController = async (req, res) => {
  const { title, subSectors } = req.body;
  try {
    const newSector = new Sector({
      title,
      subSectors,
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
  const { title, sector, subSubSectors } = req.body;
  try {
    const newSubSector = new SubSector({
      title,
      sector,
      subSubSectors,
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
  const { title, subSector, subSubSubSectors } = req.body;

  try {
    const newSubSubSector = new SubSubSectorSchema({
      title,
      subSector,
      subSubSubSectors,
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
  const { title, subSubSector } = req.body;
  try {
    const newSubSubSector = new SubSubSubSectorSchema({
      title,
      subSubSector,
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
/* 
    
  const subSectors =  {
    title: 'sector name',
    subSectors: [
      {
        _id:['subSectorId'],
        
        subSubSectors: [
          {
            title:['subSubSectorId']
            subSubSubSectors: [
              {
                _id:['subSubSubSectorId'],
              },
            ],
          },
        ],
      },
    ],
  },
    
    */
