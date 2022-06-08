"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRoutes = void 0;

var _express = require("express");

var _GetMeController = require("../modules/user/useCases/GetMe/GetMeController");

const userRoutes = (0, _express.Router)();
exports.userRoutes = userRoutes;
const getMeControler = new _GetMeController.GetMeController();
userRoutes.get("/me", getMeControler.handle);