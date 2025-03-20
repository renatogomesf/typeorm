import "reflect-metadata";
import { DataSource } from "typeorm";
import { CreateClass1742476229245 } from "./migration/1742476229245-createClass";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "123456789",
  database: "typeorm",
  synchronize: true, // faz que as models gerem automaticamente as tabelas do banco de dados
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [CreateClass1742476229245],
});
