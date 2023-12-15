import express from "express";
import {
  addUserController,
  getAllUsersController,
  getSingleUserController,
  updateUserController,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/", addUserController);

router.get("/:id", getSingleUserController);

router.get("/all", getAllUsersController);

router.put("/:id", updateUserController);

export default router;
