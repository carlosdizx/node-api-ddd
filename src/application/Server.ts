import "dotenv/config";
import express from "express";
import cors from "express";
import { initRoutes } from "../infrastructure/routes";
import initScheduler from "../infrastructure/scheduler";
import initAMQP from "../infrastructure/reactive/rabbitmq";
import dbPostgresSQLInit from "./db/PostgreSQLConfig";

export class Server {
  private readonly port: string;
  private readonly app: express.Express;

  constructor(port: string) {
    this.port = port;
    this.app = express();
    this.app.use(cors());
    this.app.use(express.json());
    this.connectToDatabase().then();
    initRoutes(this.app);
    initScheduler().then();
    initAMQP().then();
  }

  connectToDatabase = async () => {
    await dbPostgresSQLInit();
  };

  listen = async (): Promise<void> => {
    return new Promise((resolve) => {
      this.app.listen(this.port, () => {
        console.log(
          `App is running at http://localhost:${this.port} in
           ${this.app.get("env")} mode`
        );
        console.log("  Press CTRL-C to stop\n");
        resolve();
      });
    });
  };
}
