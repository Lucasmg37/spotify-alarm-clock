"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _express = require("express");

var _ensureAuthenticated = require("../middlewares/ensureAuthenticated");

var _alarm = require("./alarm.routes");

var _auth = require("./auth.routes");

var _spotify = require("./spotify.routes");

var _teste = require("./teste.routes");

var _user = require("./user.routes");

const router = (0, _express.Router)();
exports.router = router;
router.get("/", (req, res) => {
  res.send("Hello World!");
});
router.use("/auth", _auth.authRoutes);
router.use(_ensureAuthenticated.ensureAuthenticated);
router.use("/spotify", _spotify.spotifyRoutes);
router.use("/teste", _teste.testeRoutes);
router.use("/user", _user.userRoutes);
router.use("/alarm", _alarm.alarmRoutes);