import { Router } from "express";

import { GetMeController } from "../modules/user/useCases/GetMe/GetMeController";

const userRoutes = Router();

const getMeControler = new GetMeController();

userRoutes.get("/me", getMeControler.handle);

export { userRoutes };
