import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import serveFavicon from 'serve-favicon';

import router from './routes.js'
import logger, { logStream } from './utils/logger.js';
import errorHandler from './middleware/errorHandler.js';

const server = express();

dotenv.config();
// console.log({port : process.env.PORT});
server.use(serveFavicon('./public/favicon.ico'));

server.use(helmet());
server.use(morgan('dev', { stream: logStream }));
server.use(bodyParser.json());

server.use(router);

server.use(errorHandler);
// const PORT = 8989;

server.listen(process.env.PORT, () => {
  logger.info(`Listening on 127.0.0.1:${process.env.PORT}`);
});