"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppDataSource = void 0;

var _typeorm = require("typeorm");

const AppDataSource = new _typeorm.DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  // synchronize: true,
  // logging: true,
  entities: process.env.MODE === "PROD" ? ["./src/modules/**/entities/*.js"] : ["./src/modules/**/entities/*.ts"],
  subscribers: [],
  migrations: process.env.MODE === "PROD" ? ["./src/database/migrations/*.js"] : ["./src/database/migrations/*.ts"]
});
exports.AppDataSource = AppDataSource;