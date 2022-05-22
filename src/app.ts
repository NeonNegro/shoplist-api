import dotenv from 'dotenv';
import express, { json } from 'express';
import cors from 'cors';
import router from './routers/index.js';


dotenv.config();

const app= express();
app.use(json());
app.use(cors());
app.use(router);

export default app;