import express from "express";
import {
  addUserController,
  getAllUsersController,
  updateUserController,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/all", getAllUsersController);

router.post("/", addUserController);

router.put("/:userId", updateUserController);

export default router;
