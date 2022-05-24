import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { alarmRoutes } from "./alarm.routes";
import { authRoutes } from "./auth.routes";
import { spotifyRoutes } from "./spotify.routes";
import { testeRoutes } from "./teste.routes";
import { userRoutes } from "./user.routes";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});
router.use("/auth", authRoutes);

router.use(ensureAuthenticated);

router.use("/spotify", spotifyRoutes);
router.use("/teste", testeRoutes);
router.use("/user", userRoutes);
router.use("/alarm", alarmRoutes);

export { router };
