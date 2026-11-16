import express from "express";
//functions from ../controllers/authController.js
import { register,login } from '../controllers/authController.js';

const router = express.Router()

router.post("/register", register);

router.post("/login", login);

export default router;