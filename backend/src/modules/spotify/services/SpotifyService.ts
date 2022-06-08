import { Axios } from "axios";

import { AppError } from "../../../errors/AppError";
import { IPlayTrackDTO } from "../dtos/IPlayTrack.DTO";
import { ISearchDTO } from "../dtos/ISearch.DTO";
import { IGetDevicesResponse } from "./interfaces/IGetDevicesResponse";
import { IMeResponse } from "./interfaces/IMeResponse";
import { ISearchResponse } from "./interfaces/ISearchResponse";
import { IUserCredentials } from "./interfaces/ISpotifyAuthService";
import { ISpotifyService } from "./interfaces/ISpotifyService";
import { SpotifyAuthService } from "./SpotifyAuthService";

class SpotifyService implements ISpotifyService {
  public authService = new SpotifyAuthService();
  private clientUser = null as Axios;

  async playTrack({ device_id, ...params }: IPlayTrackDTO): Promise<unknown> {
    const clientSystem = this.authService.getClientAuthUser();

    const route = "me/player/play";

    const result = await clientSystem.put(route, params, {
      params: {
        device_id,
      },
    });

    const { data } = result;

    if (data?.error) {
      throw new AppError(
        `Spotify Error: ${data.error.message}`,
        data.error.status
      );
    }

    return true;
  }

  async getUserCredentialsAuth(code: string): Promise<IUserCredentials> {
    const access = await this.authService.userCredentialsAuth(code);
    this.clientUser = this.authService.getClientAuthUser();
    return access;
  }

  async me(): Promise<IMeResponse> {
    const route = "me";
    const result = await this.clientUser.get(route);
    return result.data as IMeResponse;
  }

  async getDevices(): Promise<IGetDevicesResponse> {
    const clientSystem = this.authService.getClientAuthUser();

    const route = "me/player/devices";

    const result = await clientSystem.get(route);
    const { data } = result;

    if (data.error) {
      throw new AppError(
        `Spotify Error: ${data.error.message}`,
        data.error.status
      );
    }

    return data;
  }

  async search(params: ISearchDTO): Promise<ISearchResponse> {
    const route = "search";

    await this.authService.clientCredentialsAuth();
    const clientSystem = this.authService.getClientAuthSystem();

    const result = await clientSystem.get(route, { params });
    const { data } = result;

    if (data.error) {
      throw new AppError(
        `Spotify Error: ${data.error.message}`,
        data.error.status
      );
    }

    return data;
  }
}

export { SpotifyService };
