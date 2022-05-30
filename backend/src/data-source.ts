import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  // synchronize: true,
  // logging: true,
  entities: [`${__dirname}/../modules/**/entities/*.{js,ts}`],
  subscribers: [],
  migrations:
    process.env.MODE === "PROD"
      ? ["./database/migrations/*.js"]
      : ["./src/database/migrations/*.ts"],
});
