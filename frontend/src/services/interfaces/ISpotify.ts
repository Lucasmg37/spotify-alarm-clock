import { IPaginationRequest } from "../../common/interfaces/IPaginationRequest";
import { TypeSearchSpotify } from "../../common/interfaces/TypeSearchSpotify";

export interface IDevice {
  id: string;
  is_active: boolean;
  is_restricted: boolean;
  name: string;
  type: string;
  volume_percent: number;
  is_private_session: boolean;
}

export interface ITrackSearch {
  id: string;
  name: string;
  uri: string;
  album?: string;
  artists?: string[];
  image?: string;
}

export interface ISpotifyGetDevicesResponse {
  devices: IDevice[];
}

export interface ISpotifyGetTrackResponse extends IPaginationRequest {
  items: ITrackSearch[];
}

interface ISpotify {
  getDevices(): Promise<ISpotifyGetDevicesResponse>;
  getTrackBySearch(
    q: string,
    type: TypeSearchSpotify
  ): Promise<ISpotifyGetTrackResponse>;
}

export default ISpotify;
