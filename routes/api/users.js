import { Router } from "express";
import { createUser, getAllUsers, getUser, updateUser } from "../../controllers/userController.js";

const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);

export default router;