"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginController = void 0;

var _qs = _interopRequireDefault(require("qs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const client_id = process.env.SPOTIFY_CLIENT_ID;
const redirect_uri = process.env.SPOTIFY_REDIRECT_URL;

class LoginController {
  handle(req, res) {
    const scope = "user-read-private user-read-email user-read-playback-state user-modify-playback-state";
    res.redirect(`https://accounts.spotify.com/authorize?${_qs.default.stringify({
      response_type: "code",
      client_id,
      scope,
      redirect_uri
    })}`);
  }

}

exports.LoginController = LoginController;