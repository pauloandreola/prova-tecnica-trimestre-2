import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';

import bodyParser from 'body-parser';
import { useRoutes } from './routes';

const port = 3000;

const app = express()

app.use(bodyParser.json());
app.use(express.json());

useRoutes(app);

app.listen(port, () => console.log('Server is running port ->', port));