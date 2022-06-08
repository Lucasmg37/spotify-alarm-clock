"use strict";

var _tsyringe = require("tsyringe");

var _AlarmCallsRepository = require("../../modules/alarm/repositories/AlarmCallsRepository");

var _AlarmDeviceRepository = require("../../modules/alarm/repositories/AlarmDeviceRepository");

var _AlarmMediaRepository = require("../../modules/alarm/repositories/AlarmMediaRepository");

var _AlarmRepository = require("../../modules/alarm/repositories/AlarmRepository");

var _SpotifyService = require("../../modules/spotify/services/SpotifyService");

var _TesteRepository = require("../../modules/teste/repositories/implementations/TesteRepository");

var _SessionIntegrationRepository = require("../../modules/user/repositories/SessionIntegrationRepository");

var _UserRepository = require("../../modules/user/repositories/UserRepository");

_tsyringe.container.registerSingleton("TesteRepository", _TesteRepository.TesteRepository);

_tsyringe.container.registerType("SpotifyService", _SpotifyService.SpotifyService);

_tsyringe.container.registerType("UserRepository", _UserRepository.UserRepository);

_tsyringe.container.registerType("SessionIntegrationRepository", _SessionIntegrationRepository.SessionIntegrationRepository);

_tsyringe.container.registerType("AlarmRepository", _AlarmRepository.AlarmRepository);

_tsyringe.container.registerType("AlarmMediaRepository", _AlarmMediaRepository.AlarmMediaRepository);

_tsyringe.container.registerType("AlarmDeviceRepository", _AlarmDeviceRepository.AlarmDeviceRepository);

_tsyringe.container.registerType("AlarmCallsRepository", _AlarmCallsRepository.AlarmCallsRepository);