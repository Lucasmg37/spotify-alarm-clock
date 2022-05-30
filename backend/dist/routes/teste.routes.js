"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testeRoutes = void 0;

var _express = require("express");

var _multer = _interopRequireDefault(require("multer"));

var _upload = _interopRequireDefault(require("../config/upload"));

var _ensureAuthenticated = require("../middlewares/ensureAuthenticated");

var _CreateSessionController = require("../modules/teste/useCases/createSession/CreateSessionController");

var _CreateTesteController = require("../modules/teste/useCases/createTeste/CreateTesteController");

var _GetTesteController = require("../modules/teste/useCases/getTest/GetTesteController");

var _ImportTesteController = require("../modules/teste/useCases/importTeste/ImportTesteController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const testeRoutes = (0, _express.Router)();
exports.testeRoutes = testeRoutes;
const uploadCsv = (0, _multer.default)(_upload.default.upload());
const createTesteController = new _CreateTesteController.CreateTesteController();
const getTesteController = new _GetTesteController.GetTesteController();
const importTesteController = new _ImportTesteController.ImportTesteController();
const createSessionController = new _CreateSessionController.CreateSessionController();
testeRoutes.post("/", createTesteController.handle);
testeRoutes.post("/session", createSessionController.handle);
testeRoutes.post("/upload", uploadCsv.single("file"), importTesteController.handle);
testeRoutes.use(_ensureAuthenticated.ensureAuthenticated);
testeRoutes.get("/", getTesteController.handle);