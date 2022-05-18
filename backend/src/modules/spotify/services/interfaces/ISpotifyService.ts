import { ISearchDTO } from "../../dtos/ISearch.DTO";
import { SpotifyAuthService } from "../SpotifyAuthService";
import { IGetDevicesResponse } from "./IGetDevicesResponse";
import { IMeResponse } from "./IMeResponse";
import { ISearchResponse } from "./ISearchResponse";
import { IUserCredentials } from "./ISpotifyAuthService";

interface ISpotifyService {
  authService: SpotifyAuthService;
  search(data: ISearchDTO): Promise<ISearchResponse>;
  me(): Promise<IMeResponse>;
  getUserCredentialsAuth(code: string): Promise<IUserCredentials>;
  getDevices(): Promise<IGetDevicesResponse>;
}

export { ISpotifyService };
