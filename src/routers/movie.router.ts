import { Router } from 'express';
import { movieControllers } from '../controllers';
import middlewares from '../middlewares';
import { movieCreateSchema, movieUpdateSchema } from '../schemas';

export const movieRouter: Router = Router();

movieRouter.post(
  '',
  middlewares.validateBody(movieCreateSchema),
  middlewares.verifyNameExists,
  movieControllers.create
);
movieRouter.get('', middlewares.pagination, movieControllers.read);

movieRouter.use('/:id', middlewares.verifyIdExists);

movieRouter.patch(
  '/:id',
  middlewares.verifyNameExists,
  middlewares.validateBody(movieUpdateSchema),
  movieControllers.update
);
movieRouter.delete('/:id', movieControllers.remove);