import express from "express";
import {
  signInUser,
  registerUser,
  signOutUser,
  getUsers,
  getUserById,
} from "../controllers/userController";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/api/signup").post(registerUser);
router.route("/api/signin").post(signInUser);
router.route("/api/sign-out").post(signOutUser);
router.route("/api/users").get(protect, getUsers);
router.route("/api/user/:id").get(getUserById);

export default router;
