import { createServer } from 'http';
import { parse } from 'url';
import express, { Request, Response } from 'express';
import cors from "cors";
import { Server } from "colyseus";
import { monitor } from "@colyseus/monitor";
import CAHRoom from './CAHRoom';
import logger from './logger';

const dev = process.env.NODE_ENV !== 'production'
const port = 4000;

(async ()=> {
  try {

    const expressApp = express();
    expressApp.use(cors());
    expressApp.use(express.json());

    expressApp.use('/colyseus', monitor());
 
    const server = createServer(expressApp);
    const gameServer = new Server({ server });


    gameServer.define('room', CAHRoom);


    gameServer.listen(port);
    logger.info(`Server started on port ${port}.`)
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
