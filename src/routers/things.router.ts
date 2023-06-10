import { Router as createRouter } from 'express';
import { ThingsController } from '../controllers/things.controller.js';

const controller = new ThingsController();
export const thingsRouter = createRouter();

thingsRouter.get('/', controller.getAll.bind(controller));
thingsRouter.get('/:id', controller.getById.bind(controller));
thingsRouter.post('/', controller.post.bind(controller));
thingsRouter.patch('/:id', controller.patch.bind(controller));
thingsRouter.delete('/:id', controller.deleteById.bind(controller));
