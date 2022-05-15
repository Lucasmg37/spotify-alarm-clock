import { Router } from "express";
import multer from "multer";

import upload from "../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSessionController } from "../modules/teste/useCases/createSession/CreateSessionController";
import createTesteController from "../modules/teste/useCases/createTeste";
import { CreateTesteController } from "../modules/teste/useCases/createTeste/CreateTesteController";
import getTesteController from "../modules/teste/useCases/getTest";
import { GetTesteController } from "../modules/teste/useCases/getTest/GetTesteController";
import importTesteController from "../modules/teste/useCases/importTeste";
import { ImportTesteController } from "../modules/teste/useCases/importTeste/ImportTesteController";

const testeRoutes = Router();

const uploadCsv = multer(upload.upload());

const createTesteController = new CreateTesteController();
const getTesteController = new GetTesteController();
const importTesteController = new ImportTesteController();
const createSessionController = new CreateSessionController();

testeRoutes.post("/", createTesteController.handle);
testeRoutes.post("/session", createSessionController.handle);

testeRoutes.post(
  "/upload",
  uploadCsv.single("file"),
  importTesteController.handle
);

testeRoutes.use(ensureAuthenticated);
testeRoutes.get("/", getTesteController.handle);

export { testeRoutes };
