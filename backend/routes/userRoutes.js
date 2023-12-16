import express from "express";
import {
  addUserController,
  getAllUsersController,
  getSingleUserController,
  updateUserController,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/all", getAllUsersController);

router.post("/", addUserController);

router.get("/:id", getSingleUserController);

router.put("/:id", updateUserController);

export default router;
