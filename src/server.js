import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import 'dotenv/config';

import database from './database';
import WeatherRoutes from './routes/weather';
import authorizer from './helpers/authorizer';
import { ErrorHandler, NotFoundHandler, RequestHandler } from './handlers';

// ================ DATABASE ================ //
database
  .authenticate()
  .then(() => {
    console.log('Connection to the database established successfully');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// ================ APPLICATION ================ //
const app = express();

// ------------ THIRD PARTY MIDDLEWARES ------------ //
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// ================ ROUTES ================ //
app.use(authorizer);
app.use(WeatherRoutes);

// ================ HANDLERS ================ //
app.use(ErrorHandler);
app.use(NotFoundHandler);
app.use(RequestHandler);

// ================ RUN SERVER ================ //
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
