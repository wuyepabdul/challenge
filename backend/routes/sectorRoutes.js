import express from "express";
import {
  
  getAllSectorsController,
} from "../controllers/sectorController.js";

const router = express.Router();

router.get("/all", getAllSectorsController);

export default router;
