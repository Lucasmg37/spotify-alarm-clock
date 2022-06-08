"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CallbackUseCase = void 0;

var _jsonwebtoken = require("jsonwebtoken");

var _tsyringe = require("tsyringe");

var _Integrations = require("../../../../shared/interfaces/Integrations");

var _ISpotifyService = require("../../../spotify/services/interfaces/ISpotifyService");

var _ISessionIntegrationRepository = require("../../../user/repositories/interfaces/ISessionIntegrationRepository");

var _IUserRepository = require("../../../user/repositories/interfaces/IUserRepository");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;

let CallbackUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("SpotifyService")(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)("UserRepository")(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)("SessionIntegrationRepository")(target, undefined, 2);
}, _dec5 = Reflect.metadata("design:type", Function), _dec6 = Reflect.metadata("design:paramtypes", [typeof _ISpotifyService.ISpotifyService === "undefined" ? Object : _ISpotifyService.ISpotifyService, typeof _IUserRepository.IUserRepository === "undefined" ? Object : _IUserRepository.IUserRepository, typeof _ISessionIntegrationRepository.ISessionIntegrationRepository === "undefined" ? Object : _ISessionIntegrationRepository.ISessionIntegrationRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = class CallbackUseCase {
  constructor(spotifyService, userRepository, sessionIntegrationRepository) {
    this.spotifyService = spotifyService;
    this.userRepository = userRepository;
    this.sessionIntegrationRepository = sessionIntegrationRepository;
  }

  generateToken(user) {
    const token = (0, _jsonwebtoken.sign)({}, process.env.JWT_KEY, {
      subject: user.uuid,
      expiresIn: "1d"
    });
    return token;
  }

  async execute(code) {
    const tokens = await this.spotifyService.getUserCredentialsAuth(code);
    const userData = await this.spotifyService.me();
    let user = await this.userRepository.findByEmail(userData.email);
    let token = ""; // Create new user if not exists

    if (user === null) {
      user = await this.userRepository.create({
        name: userData.display_name,
        email: userData.email,
        disabled: false,
        integrationData: userData,
        image: userData?.images[0]?.url,
        isPremium: userData.product === "premium",
        integration: _Integrations.Integrations.SPOTIFY
      });
    }

    token = this.generateToken(user); // Create or Update user session spotify

    const session = await this.sessionIntegrationRepository.findByUser(user.uuid);

    if (session === null) {
      await this.sessionIntegrationRepository.create({
        userUuid: user.uuid,
        token: tokens.access_token,
        refreshToken: tokens.refresh_token,
        integration: _Integrations.Integrations.SPOTIFY
      });
      return token;
    }

    await this.sessionIntegrationRepository.create({
      uuid: session.uuid,
      token: tokens.access_token,
      refreshToken: tokens.refresh_token,
      integration: _Integrations.Integrations.SPOTIFY,
      userUuid: user.uuid
    });
    return token;
  }

}) || _class) || _class) || _class) || _class) || _class) || _class);
exports.CallbackUseCase = CallbackUseCase;