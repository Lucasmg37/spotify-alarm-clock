import { Router } from "express";

import { createTesteController } from "../modules/teste/useCases/createTeste";
import { getTesteController } from "../modules/teste/useCases/getTest";

const testeRoutes = Router();

testeRoutes.post("/", (req, res) => {
  createTesteController.handle(req, res);
});

testeRoutes.get("/", (req, res) => {
  getTesteController.handle(req, res);
});

export { testeRoutes };
