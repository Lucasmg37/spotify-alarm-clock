"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authRoutes = void 0;

var _express = require("express");

var _CallbackController = require("../modules/auth/useCases/callback/CallbackController");

var _LoginController = require("../modules/auth/useCases/login/LoginController");

const authRoutes = (0, _express.Router)();
exports.authRoutes = authRoutes;
const loginController = new _LoginController.LoginController();
const callbackController = new _CallbackController.CallbackController();
authRoutes.get("/login", loginController.handle);
authRoutes.get("/callback", callbackController.handle);