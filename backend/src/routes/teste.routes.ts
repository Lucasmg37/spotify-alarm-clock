import { Router } from "express";
import multer from "multer";

import createTesteController from "../modules/teste/useCases/createTeste";
import { CreateTesteController } from "../modules/teste/useCases/createTeste/CreateTesteController";
import getTesteController from "../modules/teste/useCases/getTest";
import { GetTesteController } from "../modules/teste/useCases/getTest/GetTesteController";
import importTesteController from "../modules/teste/useCases/importTeste";
import { ImportTesteController } from "../modules/teste/useCases/importTeste/ImportTesteController";

const testeRoutes = Router();

const upload = multer({
  dest: "./temp",
});

const createTesteController = new CreateTesteController();
const getTesteController = new GetTesteController();
const importTesteController = new ImportTesteController();

testeRoutes.post("/", createTesteController.handle);

testeRoutes.post(
  "/upload",
  upload.single("file"),
  importTesteController.handle
);

testeRoutes.get("/", getTesteController.handle);

export { testeRoutes };
