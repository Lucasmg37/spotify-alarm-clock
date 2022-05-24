import { Request, Response } from "express";
import QueryString from "qs";

const client_id = "775e177caa4c4fb19beaaa57775bab8a";
const redirect_uri = "http://localhost:3000/auth/callback";

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
