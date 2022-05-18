import { Axios } from "axios";
import QueryString from "qs";

import { AppError } from "../../../errors/AppError";
import {
  ISpotifyAuthService,
  IClienteCredentials,
  IUserCredentials,
} from "./interfaces/ISpotifyAuthService";

const authUrl = "https://accounts.spotify.com/api/token";
const redirect_uri = process.env.SPOTIFY_REDIRECT_URL;

class SpotifyAuthService implements ISpotifyAuthService {
  private readonly client_id = process.env.SPOTIFY_CLIENT_ID;
  private readonly client_secret = process.env.SPOTIFY_CLIENT_SECRET;

  private clientCredentials = null as IClienteCredentials;
  private userCredentials = null as IUserCredentials;

  private axios = new Axios({
    baseURL: "https://api.spotify.com/v1/",
    headers: {},
  });

  public getUserCredentials(): IUserCredentials {
    return this.userCredentials;
  }

  private addInterceptors() {
    this.axios.interceptors.request.use(
      (config) => {
        const axiosConfiguration = config;
        axiosConfiguration.headers.Authorization = `Bearer ${this.clientCredentials.access_token}`;
        return axiosConfiguration;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  public getClientAuthSystem(): Axios {
    return this.axios;
  }

  public setUserAccessToken(userCredentials: IUserCredentials) {
    this.userCredentials = userCredentials;
    this.addInterceptors();
  }

  public getClientAuthUser(): Axios {
    const client = new Axios({
      baseURL: "https://api.spotify.com/v1/",
      headers: {
        Authorization: `Bearer ${this.userCredentials.access_token}`,
      },
    });
    return client;
  }

  async userCredentialsAuth(code: string): Promise<IUserCredentials> {
    const data = QueryString.stringify({
      grant_type: "authorization_code",
      code,
      redirect_uri,
    });

    const headers = this.getAuthenticationHeader();

    const result = await this.axios.post(authUrl, data, {
      headers,
    });

    const dataResponse: IUserCredentials = JSON.parse(result.data);

    if (dataResponse.error) {
      throw new AppError(dataResponse.error_description, result.status);
    }

    this.userCredentials = dataResponse;

    return dataResponse;
  }

  private getAuthenticationHeader() {
    return {
      "Content-Type": "application/x-www-form-urlencoded",
      // eslint-disable-next-line no-buffer-constructor
      Authorization: `Basic ${new Buffer(
        `${this.client_id}:${this.client_secret}`
      ).toString("base64")}`,
    };
  }

  async clientCredentialsAuth(): Promise<IClienteCredentials> {
    const data = QueryString.stringify({ grant_type: "client_credentials" });

    const headers = this.getAuthenticationHeader();

    const result = await this.axios.post(authUrl, data, {
      headers,
    });

    this.clientCredentials = JSON.parse(result.data);
    this.addInterceptors();

    return result.data;
  }
}

export { SpotifyAuthService };
