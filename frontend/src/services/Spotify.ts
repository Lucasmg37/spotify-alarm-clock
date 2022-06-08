import { TypeSearchSpotify } from "../common/interfaces/TypeSearchSpotify";
import AxiosHttp from "../infra/http/AxiosHttp";

import ISpotify, {
  ISpotifyGetDevicesResponse,
  ISpotifyGetTrackResponse,
} from "./interfaces/ISpotify";

class Spotify implements ISpotify {
  constructor(private httpClient = new AxiosHttp()) {}

  async getDevices(): Promise<ISpotifyGetDevicesResponse> {
    const response = await this.httpClient.get<ISpotifyGetDevicesResponse>(
      "/spotify/devices"
    );
    return response.data;
  }

  async getTrackBySearch(
    q: string,
    type: TypeSearchSpotify
  ): Promise<ISpotifyGetTrackResponse> {
    const response = await this.httpClient.get<ISpotifyGetTrackResponse>(
      `/spotify/search`,
      { q, type }
    );
    return response.data;
  }
}

export default Spotify;
