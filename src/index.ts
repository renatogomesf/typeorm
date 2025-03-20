import express, { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import router from "./routes";


AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.use(router);

  return app.listen(Number(process.env.PORT), String(process.env.HOST), () => {
    console.log(
      `Servidor rodando em http://${process.env.HOST}:${process.env.PORT}`
    );
  });
});
