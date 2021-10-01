import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index';
import adminRouter from './routes/admin.route';
import handleErrors from './middlewares/errors.middleware';


const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/v1', indexRouter);
app.use('/v1/admin', adminRouter);

app.use(handleErrors);

export default app;