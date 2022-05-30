"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpotifyService = void 0;

var _AppError = require("../../../errors/AppError");

var _SpotifyAuthService = require("./SpotifyAuthService");

class SpotifyService {
  constructor() {
    this.authService = new _SpotifyAuthService.SpotifyAuthService();
    this.clientUser = null;
  }

  async playTrack({
    device_id,
    ...params
  }) {
    const clientSystem = this.authService.getClientAuthUser();
    const route = "me/player/play";
    const result = await clientSystem.put(route, params, {
      params: {
        device_id
      }
    });
    const {
      data
    } = result;

    if (data?.error) {
      throw new _AppError.AppError(`Spotify Error: ${data.error.message}`, data.error.status);
    }

    return true;
  }

  async getUserCredentialsAuth(code) {
    const access = await this.authService.userCredentialsAuth(code);
    this.clientUser = this.authService.getClientAuthUser();
    return access;
  }

  async me() {
    const route = "me";
    const result = await this.clientUser.get(route);
    return result.data;
  }

  async getDevices() {
    const clientSystem = this.authService.getClientAuthUser();
    const route = "me/player/devices";
    const result = await clientSystem.get(route);
    const {
      data
    } = result;

    if (data.error) {
      throw new _AppError.AppError(`Spotify Error: ${data.error.message}`, data.error.status);
    }

    return data;
  }

  async search(params) {
    const route = "search";
    await this.authService.clientCredentialsAuth();
    const clientSystem = this.authService.getClientAuthSystem();
    const result = await clientSystem.get(route, {
      params
    });
    const {
      data
    } = result;

    if (data.error) {
      throw new _AppError.AppError(`Spotify Error: ${data.error.message}`, data.error.status);
    }

    return data;
  }

}

exports.SpotifyService = SpotifyService;