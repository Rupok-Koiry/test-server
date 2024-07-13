import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application } from 'express';

const app: Application = express();

// Middleware for parsing JSON bodies
app.use(express.json());

// Middleware for parsing cookies
app.use(cookieParser());

// Middleware for enabling Cross-Origin Resource Sharing (CORS) for specified origins
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});
export default app;
