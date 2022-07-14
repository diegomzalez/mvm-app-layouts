import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('Manuelete es párgolo');
});

export default router;
