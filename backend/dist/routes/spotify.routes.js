"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spotifyRoutes = void 0;

var _express = require("express");

var _GetDevicesController = require("../modules/spotify/useCases/getDevices/GetDevicesController");

var _SearchController = require("../modules/spotify/useCases/search/SearchController");

const spotifyRoutes = (0, _express.Router)();
exports.spotifyRoutes = spotifyRoutes;
const searchController = new _SearchController.SearchController();
const getDevicesController = new _GetDevicesController.GetDevicesController();
spotifyRoutes.get("/search", searchController.handle);
spotifyRoutes.get("/devices", getDevicesController.handle);