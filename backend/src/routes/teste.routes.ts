import { Router } from "express";
import multer from "multer";

import createTesteController from "../modules/teste/useCases/createTeste";
import getTesteController from "../modules/teste/useCases/getTest";
import importTesteController from "../modules/teste/useCases/importTeste";

const testeRoutes = Router();

const upload = multer({
  dest: "./temp",
});

testeRoutes.post("/", (req, res) => {
  createTesteController().handle(req, res);
});

testeRoutes.post("/upload", upload.single("file"), (req, res) => {
  importTesteController().handle(req, res);
});

testeRoutes.get("/", (req, res) => {
  getTesteController().handle(req, res);
});

export { testeRoutes };
