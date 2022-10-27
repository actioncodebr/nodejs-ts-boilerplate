import * as dotenv from "dotenv";
dotenv.config();

import express, { Application } from "express";
import { IController } from "./@types/controllers";

import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import logger from "./config/logger.config";

export default class App {
  public app: Application;
  public apiVersion = "v1";
  public port: string | number | undefined;
  public io: Server;
  public server: any;

  constructor(controllers: IController[], port?: number) {
    // this.port = process.env.API_PORT || port
    this.app = express();
    this.server = http.createServer(this.app);

    this.io = new Server(this.server, { cors: { origin: "*" } });

    this.port = process.env.API_SERVER_PORT || port;
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(cors());
    this.initializeEvents();
  }

  private initializeEvents() {
    // this.io.on("connect", () => {
    // });
  }

  private initializeControllers(controllers: IController[]) {
    controllers.forEach((controller) => {
      this.app.use(`/${this.apiVersion}`, controller.router);
    });
  }

  public listen(port?: number) {
    const ported = port || this.port;
    return this.server.listen(ported, () => {
      logger.info(`SERVER STARTED ON PORT ${ported}`);
      logger.info(`WEBSOCKET STARTED`);
    });
  }
}
