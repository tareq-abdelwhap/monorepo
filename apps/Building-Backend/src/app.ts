import express from 'express';
import apiRoutes from './routes/api';
import { ErrorHandler } from './middlewares/ErrorHandler';

const app = express();
const { json, urlencoded } = express;

app.use(json());
app.use(urlencoded({ extended: true }));

app.use(apiRoutes);
app.use(ErrorHandler.handle);

export default app;
