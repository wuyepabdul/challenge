import express from "express";
import {

  getSingleUser,
  updateUserController,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/:id",getSingleUser);


router.put("/:id",  updateUserController);


export default router;
