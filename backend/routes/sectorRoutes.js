import express from "express";
import {
  addSectorController,
  addSubSectorController,
  addSubSubSectorController,
  addSubSubSubSectorController,
} from "../controllers/sectorController.js";

const router = express.Router();

router.post("/", addSectorController);
router.post("/sub", addSubSectorController);
router.post("/subsub", addSubSubSectorController);
router.post("/subsubsub", addSubSubSubSectorController);

export default router;
