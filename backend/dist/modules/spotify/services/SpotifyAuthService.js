"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpotifyAuthService = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _qs = _interopRequireDefault(require("qs"));

var _AppError = require("../../../errors/AppError");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const authUrl = "https://accounts.spotify.com/api/token";
const redirect_uri = process.env.SPOTIFY_REDIRECT_URL;

class SpotifyAuthService {
  constructor() {
    this.client_id = process.env.SPOTIFY_CLIENT_ID;
    this.client_secret = process.env.SPOTIFY_CLIENT_SECRET;
    this.clientCredentials = null;
    this.userCredentials = null;
    this.axios = _axios.default.create({
      baseURL: "https://api.spotify.com/v1/",
      headers: {}
    });
  }

  getUserCredentials() {
    return this.userCredentials;
  }

  addInterceptors() {
    this.axios.interceptors.request.use(config => {
      const axiosConfiguration = config;
      axiosConfiguration.headers.Authorization = `Bearer ${this.clientCredentials.access_token}`;
      return axiosConfiguration;
    }, error => {
      return Promise.reject(error);
    });
  }

  getClientAuthSystem() {
    return this.axios;
  }

  async getAccessTokenByRefreshToken(refreshToken) {
    const data = _qs.default.stringify({
      grant_type: "refresh_token",
      refresh_token: refreshToken
    });

    const headers = this.getAuthenticationHeader();
    const result = await this.axios.post(authUrl, data, {
      headers
    });
    this.userCredentials = result.data;
    return result.data;
  }

  async setUserAccessToken(userCredentials) {
    // this.userCredentials = userCredentials;
    await this.getAccessTokenByRefreshToken(userCredentials.refresh_token);
    this.addInterceptors();
  }

  getClientAuthUser() {
    const client = _axios.default.create({
      baseURL: "https://api.spotify.com/v1/",
      headers: {
        Authorization: `Bearer ${this.userCredentials.access_token}`
      }
    });

    return client;
  }

  async userCredentialsAuth(code) {
    const data = _qs.default.stringify({
      grant_type: "authorization_code",
      code,
      redirect_uri
    });

    const headers = this.getAuthenticationHeader();
    const result = await this.axios.post(authUrl, data, {
      headers
    });
    const dataResponse = result.data;

    if (dataResponse.error) {
      throw new _AppError.AppError(dataResponse.error_description, result.status);
    }

    this.userCredentials = dataResponse;
    return dataResponse;
  }

  getAuthenticationHeader() {
    return {
      "Content-Type": "application/x-www-form-urlencoded",
      // eslint-disable-next-line no-buffer-constructor
      Authorization: `Basic ${new Buffer(`${this.client_id}:${this.client_secret}`).toString("base64")}`
    };
  }

  async clientCredentialsAuth() {
    const data = _qs.default.stringify({
      grant_type: "client_credentials"
    });

    const headers = this.getAuthenticationHeader();
    const result = await this.axios.post(authUrl, data, {
      headers
    });
    this.clientCredentials = result.data;
    this.addInterceptors();
    return result.data;
  }

}

exports.SpotifyAuthService = SpotifyAuthService;