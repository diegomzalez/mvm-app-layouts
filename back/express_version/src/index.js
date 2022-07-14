import express from 'express';
import router_api from './routes/index.js';

const app = express();

const port = 3000;
app.use(express.json());
router_api(app);

app.listen(port);
