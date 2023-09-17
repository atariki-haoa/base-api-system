import express from 'express';
import userRoutes from '../controllers/user/user.routes';
import authRoutes from '../controllers/auth/auth.routes';
import genericRoutes from '../controllers/generic/generic.routes';
import User from '../models/user';

export const app = express();
const router = express.Router();

router.use(userRoutes);
router.use(authRoutes);
router.use('/user', genericRoutes(User));

export default router;
