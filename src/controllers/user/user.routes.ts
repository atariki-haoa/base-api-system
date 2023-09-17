import express from 'express';
import { getUser, deleteUser, patchUpdateUser } from './user.controller';
import ensureAuth from '../../middlewares/authenticated';

const router = express.Router();


router.get('/users/:id', [ensureAuth], getUser);
router.patch('/users/:id', [ensureAuth], patchUpdateUser);
router.delete('/users/:id', [ensureAuth], deleteUser);

export default router;
