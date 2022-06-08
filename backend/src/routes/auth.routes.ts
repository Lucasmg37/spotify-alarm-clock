import { Router } from "express";

import { CallbackController } from "../modules/auth/useCases/callback/CallbackController";
import { LoginController } from "../modules/auth/useCases/login/LoginController";

const authRoutes = Router();

const loginController = new LoginController();
const callbackController = new CallbackController();

authRoutes.get("/login", loginController.handle);
authRoutes.get("/callback", callbackController.handle);

export { authRoutes };
