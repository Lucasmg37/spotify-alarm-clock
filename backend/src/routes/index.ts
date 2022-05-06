import { Router } from "express";

import { testeRoutes } from "./teste.routes";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.use("/teste", testeRoutes);

export { router };
