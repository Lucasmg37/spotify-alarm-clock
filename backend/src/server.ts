import express from "express";

import { testeRoutes } from "./routes/teste.routes";

const app = express();

app.use(express.json());

app.use("/teste", testeRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
