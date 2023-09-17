import express from 'express';
import genericController from './generic.controller';
import ensureAuth from '../../middlewares/authenticated';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createGenericRoutes = (model: any) => {
  const router = express.Router();

  router.get('/', ensureAuth, genericController.getAll(model));
  router.get('/:id', ensureAuth, genericController.getById(model));
  router.post('/', ensureAuth, genericController.create(model));
  router.put('/:id', ensureAuth, genericController.update(model));
  router.delete('/:id', ensureAuth, genericController.remove(model));

  return router;
};

export default createGenericRoutes;
