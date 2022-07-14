import { Router } from 'express';
import StudentsService from '../services/students.service.js';
const router = Router();
const service = new StudentsService();

// endpoints
router.post('/', (req, res) => {
  res.send(service.create(req.body));
});

router.get('/', (req, res) => {
  res.send(service.get());
});
export default router;
