import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: +process.env.DB_PORT || 4000,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "test",
  // synchronize: true,
  // logging: true,
  entities:
    process.env.MODE === "PROD"
      ? [`./dist/modules/**/entities/*.{js,ts}`]
      : [`./src/modules/**/entities/*.{js,ts}`],
  subscribers: [],
  migrations:
    process.env.MODE === "PROD"
      ? ["./dist/database/migrations/*.js"]
      : ["./src/database/migrations/*.ts"],
});
