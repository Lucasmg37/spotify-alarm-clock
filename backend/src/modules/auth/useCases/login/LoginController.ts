import { Request, Response } from "express";
import QueryString from "qs";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const redirect_uri = process.env.SPOTIFY_REDIRECT_URL;

class LoginController {
  handle(req: Request, res: Response) {
    const scope =
      "user-read-private user-read-email user-read-playback-state user-modify-playback-state";

    res.redirect(
      `https://accounts.spotify.com/authorize?${QueryString.stringify({
        response_type: "code",
        client_id,
        scope,
        redirect_uri,
      })}`
    );
  }
}

export { LoginController };
