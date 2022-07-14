import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('¡Cualcomia!');
});
router.post('/', (req, res) => {
  res.send('LoL');
});

export default router;
