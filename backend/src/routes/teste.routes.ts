import { Router } from "express";

import { TesteRepository } from "../repositories/TesteRepository";

const testeRoutes = Router();
const testeRepository = new TesteRepository();

testeRoutes.post("/", (req, res) => {
  const { name } = req.body;

  const data = testeRepository.create({ name });
  res.status(200).send(data);
});

testeRoutes.get("/", (req, res) => {
  const data = testeRepository.get();
  res.status(200).send(data);
});

export { testeRoutes };
