import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { authProtectMiddleware } from './modules/protect-middleware';
import apiRouter from './router/api-router';
import authRouter from './router/auth-router';


const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', authProtectMiddleware, apiRouter);
app.use('/auth', authRouter);

export default app;
