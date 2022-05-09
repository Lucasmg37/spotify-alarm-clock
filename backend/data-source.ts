import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 4000,
  username: "root",
  password: "root",
  database: "test",
  // synchronize: true,
  // logging: true,
  entities: ["./src/modules/**/entities/*.ts"],
  subscribers: [],
  migrations: ["./src/database/migrations/*.ts"],
});
