import express from "express";
//functions from ../controllers/authController.js
import { register } from '../controllers/authController.js';

const router = express.Router()

router.post("/register", register);

export default router;