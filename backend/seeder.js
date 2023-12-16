import mongoose from "mongoose";
import dotenv from "dotenv";
import SectorSchema from "./models/SectorSchema.js";
import SubSectorSchema from "./models/SubSectorSchema.js";
import SubSubSectorSchema from "./models/SubSubSectorSchema.js";
import SubSubSubSectorSchema from "./models/SubSubSubSectorSchema.js";
import UserSchema from "./models/UserSchema.js";
import { dbConnect } from "./dbConnection.js";
import {
  InfoTechTelcomSubSubSectorData,
  foodAndBeverageSubSubSectorData,
  furnitureSubSubSectorData,
  machinerySubSubSectorData,
  manufacturingSubSectorData,
  maritimeSubSubSubSectorData,
  metalWorksSubSubSubSectorData,
  metalworkingSubSubSectorData,
  otherSubSectorData,
  plasticAndRubberSubSubSectorData,
  plasticProcessingSubSubSubSectorData,
  printingSubSubSectorData,
  sectorsData,
  serviceSubSectorData,
  textileAndClothingSubSubSectorData,
  transportAndLogisticsSubSubSectorData,
  woodSubSubSectorData,
} from "./data/sectors.js";

dotenv.config();

dbConnect();

const importData = async () => {
  try {
    await SectorSchema.deleteMany();
    await UserSchema.deleteMany();
    await SubSectorSchema.deleteMany();
    await SubSubSectorSchema.deleteMany();
    await SubSubSubSectorSchema.deleteMany();

    const createdSectors = await SectorSchema.insertMany(sectorsData);

    if (createdSectors) {
      const manufacturing = await SectorSchema.findOne({
        title: "Manufacturing",
      });
      const services = await SectorSchema.findOne({
        title: "Services",
      });
      const others = await SectorSchema.findOne({
        title: "Others",
      });
      if (others) {
        await SubSectorSchema.insertMany(otherSubSectorData(others._id));
      }

      if (manufacturing) {
        const createdManufacturingSubSectors = await SubSectorSchema.insertMany(
          manufacturingSubSectorData(manufacturing._id)
        );
        if (createdManufacturingSubSectors) {
          const foodAndBeverage = await SubSectorSchema.findOne({
            title: "Food and Beverage",
          });
          await SubSubSectorSchema.insertMany(
            foodAndBeverageSubSubSectorData(foodAndBeverage._id)
          );

          const furniture = await SubSectorSchema.findOne({
            title: "Furniture",
          });
          await SubSubSectorSchema.insertMany(
            furnitureSubSubSectorData(furniture._id)
          );

          const machinery = await SubSectorSchema.findOne({
            title: "Machinery",
          });
          const machinerySubSector = await SubSubSectorSchema.insertMany(
            machinerySubSubSectorData(machinery._id)
          );
          if (machinerySubSector) {
            const maritime = await SubSubSectorSchema.findOne({
              title: "Maritime",
            });
            await SubSubSubSectorSchema.insertMany(
              maritimeSubSubSubSectorData(maritime._id)
            );
          }

          const metalWorking = await SubSectorSchema.findOne({
            title: "Metalworking",
          });
          const createdMetalWorkingSubSectors =
            await SubSubSectorSchema.insertMany(
              metalworkingSubSubSectorData(metalWorking._id)
            );
          if (createdMetalWorkingSubSectors) {
            const metalWorks = await SubSubSectorSchema.findOne({
              title: "Metal Works",
            });
            await SubSubSubSectorSchema.insertMany(
              metalWorksSubSubSubSectorData(metalWorks._id)
            );
          }

          const plasticAndRubber = await SubSectorSchema.findOne({
            title: "Plastic and Rubber",
          });
          const createdPlasticAndRuberSubSectors =
            await SubSubSectorSchema.insertMany(
              plasticAndRubberSubSubSectorData(plasticAndRubber._id)
            );
          if (createdPlasticAndRuberSubSectors) {
            const plasticProcessingTech = await SubSubSectorSchema.findOne({
              title: "Plastic Processing Technology",
            });
            await SubSubSubSectorSchema.insertMany(
              plasticProcessingSubSubSubSectorData(plasticProcessingTech._id)
            );
          }

          const printing = await SubSectorSchema.findOne({ title: "Printing" });
          await SubSubSectorSchema.insertMany(
            printingSubSubSectorData(printing._id)
          );

          const textileAndClothing = await SubSectorSchema.findOne({
            title: "Textile and Clothing",
          });
          await SubSubSectorSchema.insertMany(
            textileAndClothingSubSubSectorData(textileAndClothing._id)
          );

          const wood = await SubSectorSchema.findOne({ title: "Wood" });
          await SubSubSectorSchema.insertMany(woodSubSubSectorData(wood._id));
        } else {
          console.log("error occured creating Manufacturing sub sectors");
        }
      }

      if (services) {
        const createdServicesSubSectors = await SubSectorSchema.insertMany(
          serviceSubSectorData(services._id)
        );
        if (createdServicesSubSectors) {
          const informationTech = await SubSectorSchema.findOne({
            title: "Information Technology and Telecommunications",
          });
          await SubSubSectorSchema.insertMany(
            InfoTechTelcomSubSubSectorData(informationTech._id)
          );

          const transportAndLogistics = await SubSectorSchema.findOne({
            title: "Transport and Logistics",
          });
          await SubSubSectorSchema.insertMany(
            transportAndLogisticsSubSubSectorData(transportAndLogistics._id)
          );
        }
      }
    } else {
      console.log("Error occured creating sectors");
    }

    console.log("DataImported:");
    process.exit();
  } catch (error) {
    console.log(`Data Import error: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await SectorSchema.deleteMany();
    await SubSectorSchema.deleteMany();
    await SubSubSectorSchema.deleteMany();
    await SubSubSubSectorSchema.deleteMany();
    console.log("Data Destroyed:");
    process.exit();
  } catch (error) {
    console.log(`Data Destroyed error: ${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
