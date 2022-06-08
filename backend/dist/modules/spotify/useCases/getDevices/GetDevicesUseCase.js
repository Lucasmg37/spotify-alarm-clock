"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetDevicesUseCase = void 0;

var _tsyringe = require("tsyringe");

var _ISessionIntegrationRepository = require("../../../user/repositories/interfaces/ISessionIntegrationRepository");

var _ISpotifyService = require("../../services/interfaces/ISpotifyService");

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

let GetDevicesUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("SpotifyService")(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)("SessionIntegrationRepository")(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _ISpotifyService.ISpotifyService === "undefined" ? Object : _ISpotifyService.ISpotifyService, typeof _ISessionIntegrationRepository.ISessionIntegrationRepository === "undefined" ? Object : _ISessionIntegrationRepository.ISessionIntegrationRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class GetDevicesUseCase {
  constructor(spotifyService, sessionIntegrationRepository) {
    this.spotifyService = spotifyService;
    this.sessionIntegrationRepository = sessionIntegrationRepository;
  }

  async execute(userUUid) {
    const session = await this.sessionIntegrationRepository.findByUser(userUUid);
    await this.spotifyService.authService.setUserAccessToken({
      access_token: session.token,
      refresh_token: session.refreshToken,
      expires_in: 3600,
      token_type: "Bearer",
      scope: ""
    });
    return this.spotifyService.getDevices();
  }

}) || _class) || _class) || _class) || _class) || _class);
exports.GetDevicesUseCase = GetDevicesUseCase;