import { Router } from "express";
import { userRegistration } from "../../controllers/authController.js";

const router = Router();

router.post("/register", userRegistration)

export default router;