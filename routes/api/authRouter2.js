import { Router } from "express";
import { authenticateToken, getPosts, login } from "../../controllers/authController2.js";

const router = Router();

router.post("/login", login)
router.get('/posts', authenticateToken, getPosts);

export default router;