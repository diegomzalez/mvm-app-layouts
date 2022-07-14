import { Router } from 'express';
import users_router from './users.router.js';
import parents_router from './parents.router.js';
import representative_router from './representative.router.js';
import students_router from './students.router.js';

const router_api = (app) => {
  const router = Router();
  app.use('/api/v1', router);
  router.use('/users', users_router);
  router.use('/parents', parents_router);
  router.use('/representatives', representative_router);
  router.use('/students', students_router);
};

export default router_api;
